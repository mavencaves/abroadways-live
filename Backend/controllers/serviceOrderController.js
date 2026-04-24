const asyncHandler = require('express-async-handler');
const ServiceOrder = require('../models/serviceOrderModel');
const StudentProfile = require('../models/studentProfileModel');
const User = require('../models/userModel');

const ORDER_STATUSES = ['draft', 'pending-payment', 'paid', 'cancelled', 'refunded'];
const PAYMENT_METHODS = ['bank-transfer', 'cash', 'bkash', 'nagad', 'rocket', 'other'];
const DEFAULT_CURRENCY = 'BDT';

const SERVICE_CATALOG = [
  {
    serviceType: 'counselling-package',
    name: 'Study Abroad Counselling Package',
    description: 'End-to-end guidance for destination planning, document strategy, and application direction.',
    amount: 5000,
    currency: DEFAULT_CURRENCY,
  },
  {
    serviceType: 'application-support',
    name: 'Application Support',
    description: 'Hands-on support for shortlist preparation, application review, and submission readiness.',
    amount: 12000,
    currency: DEFAULT_CURRENCY,
  },
  {
    serviceType: 'document-review',
    name: 'Document Review',
    description: 'Detailed review of SOP, CV, LOR planning, and submission-quality supporting documents.',
    amount: 3500,
    currency: DEFAULT_CURRENCY,
  },
  {
    serviceType: 'visa-support',
    name: 'Visa Support',
    description: 'Visa preparation guidance, checklist tracking, and interview readiness support.',
    amount: 15000,
    currency: DEFAULT_CURRENCY,
  },
];

const formatLabel = (value) =>
  String(value || '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const getMonthKey = (value = new Date()) =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: '2-digit',
  }).format(value);

const ensureStudentProfile = async (user) => {
  let profile = await StudentProfile.findOne({ user: user._id }).populate('linkedInquiry');

  if (!profile) {
    profile = await StudentProfile.create({
      user: user._id,
      fullName: user.name || '',
      email: user.email || '',
    });
    profile = await StudentProfile.findById(profile._id).populate('linkedInquiry');
  }

  if (!profile.fullName && user.name) profile.fullName = user.name;
  if (!profile.email && user.email) profile.email = user.email;

  if (profile.isModified()) {
    await profile.save();
  }

  return profile;
};

const populateOrders = (query) =>
  query
    .populate({
      path: 'studentId',
      select: 'fullName email phone preferredCountry examInterest linkedInquiry user',
      populate: { path: 'user', select: '_id name email role' },
    })
    .populate('inquiryId', '_id status destination examInterest')
    .populate('appointmentId', '_id date time type status assignedStaff')
    .sort({ createdAt: -1 });

const normalizePaymentMethod = (value) => {
  const nextValue = String(value || '').trim();
  if (!nextValue) return '';
  if (!PAYMENT_METHODS.includes(nextValue)) {
    const error = new Error('Invalid payment method.');
    error.statusCode = 400;
    throw error;
  }
  return nextValue;
};

const normalizeStatus = (value) => {
  const nextValue = String(value || '').trim();
  if (!ORDER_STATUSES.includes(nextValue)) {
    const error = new Error('Invalid order status.');
    error.statusCode = 400;
    throw error;
  }
  return nextValue;
};

const getStudentServices = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const orders = await populateOrders(
    ServiceOrder.find({ studentId: profile._id })
  );

  res.json({
    services: SERVICE_CATALOG,
    recentOrders: orders.slice(0, 5),
    statuses: ORDER_STATUSES,
    paymentMethods: PAYMENT_METHODS,
  });
});

const getStudentOrders = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const orders = await populateOrders(
    ServiceOrder.find({ studentId: profile._id })
  );

  res.json({
    items: orders,
    statuses: ORDER_STATUSES,
    paymentMethods: PAYMENT_METHODS,
  });
});

const requestStudentService = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const { serviceType, notes = '' } = req.body;

  const service = SERVICE_CATALOG.find((item) => item.serviceType === String(serviceType || '').trim());

  if (!service) {
    res.status(400);
    throw new Error('Please choose a valid service.');
  }

  const order = await ServiceOrder.create({
    studentId: profile._id,
    inquiryId: profile.linkedInquiry?._id || profile.linkedInquiry || null,
    serviceType: service.serviceType,
    amount: service.amount,
    currency: service.currency,
    status: 'pending-payment',
    adminNotes: String(notes || '').trim(),
  });

  const populated = await populateOrders(ServiceOrder.findById(order._id));
  res.status(201).json(populated);
});

const submitStudentPaymentReference = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const order = await ServiceOrder.findOne({
    _id: req.params.id,
    studentId: profile._id,
  });

  if (!order) {
    res.status(404);
    throw new Error('Order not found.');
  }

  if (['cancelled', 'refunded'].includes(order.status)) {
    res.status(400);
    throw new Error('Payment references cannot be added to cancelled or refunded orders.');
  }

  const paymentMethod = normalizePaymentMethod(req.body.paymentMethod);
  const transactionReference = String(req.body.transactionReference || '').trim();

  if (!paymentMethod || !transactionReference) {
    res.status(400);
    throw new Error('Please provide both a payment method and transaction reference.');
  }

  order.paymentMethod = paymentMethod;
  order.transactionReference = transactionReference;
  if (order.status === 'draft') {
    order.status = 'pending-payment';
  }
  await order.save();

  const populated = await populateOrders(ServiceOrder.findById(order._id));
  res.json(populated);
});

const getAdminOrders = asyncHandler(async (req, res) => {
  const query = String(req.query.q || '').trim().toLowerCase();
  const status = String(req.query.status || '').trim();
  const serviceType = String(req.query.serviceType || '').trim();
  const student = String(req.query.student || '').trim().toLowerCase();

  const orders = await populateOrders(ServiceOrder.find({}));
  const items = orders.filter((order) => {
    if (status && order.status !== status) return false;
    if (serviceType && order.serviceType !== serviceType) return false;
    if (
      student &&
      !`${order.studentId?.fullName || ''} ${order.studentId?.email || ''}`
        .toLowerCase()
        .includes(student)
    ) {
      return false;
    }
    if (
      query &&
      !`${order.studentId?.fullName || ''} ${order.studentId?.email || ''} ${order.serviceType} ${order.transactionReference || ''} ${order.adminNotes || ''}`
        .toLowerCase()
        .includes(query)
    ) {
      return false;
    }
    return true;
  });

  const students = await StudentProfile.find({})
    .select('_id fullName email')
    .sort({ fullName: 1 })
    .lean();

  res.json({
    items,
    students,
    services: SERVICE_CATALOG,
    statuses: ORDER_STATUSES,
    paymentMethods: PAYMENT_METHODS,
  });
});

const createAdminOrder = asyncHandler(async (req, res) => {
  const { studentId, serviceType, amount, currency = DEFAULT_CURRENCY, status = 'draft', paymentMethod = '', transactionReference = '', adminNotes = '', inquiryId = null, appointmentId = null } = req.body;

  if (!studentId) {
    res.status(400);
    throw new Error('Please choose a student.');
  }

  const student = await StudentProfile.findById(studentId).populate('linkedInquiry');

  if (!student) {
    res.status(404);
    throw new Error('Student profile not found.');
  }

  const service = SERVICE_CATALOG.find((item) => item.serviceType === String(serviceType || '').trim());
  if (!service) {
    res.status(400);
    throw new Error('Please choose a valid service.');
  }

  const numericAmount = Number(amount ?? service.amount);
  if (!Number.isFinite(numericAmount) || numericAmount < 0) {
    res.status(400);
    throw new Error('Please provide a valid order amount.');
  }

  const nextStatus = normalizeStatus(status);
  const nextPaymentMethod = paymentMethod ? normalizePaymentMethod(paymentMethod) : '';

  const order = await ServiceOrder.create({
    studentId: student._id,
    inquiryId: inquiryId || student.linkedInquiry?._id || student.linkedInquiry || null,
    appointmentId: appointmentId || null,
    serviceType: service.serviceType,
    amount: numericAmount,
    currency: String(currency || DEFAULT_CURRENCY).trim() || DEFAULT_CURRENCY,
    status: nextStatus,
    paymentMethod: nextPaymentMethod,
    transactionReference: String(transactionReference || '').trim(),
    adminNotes: String(adminNotes || '').trim(),
  });

  const populated = await populateOrders(ServiceOrder.findById(order._id));
  res.status(201).json(populated);
});

const updateAdminOrder = asyncHandler(async (req, res) => {
  const order = await ServiceOrder.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error('Order not found.');
  }

  if (req.body.serviceType !== undefined) {
    const service = SERVICE_CATALOG.find((item) => item.serviceType === String(req.body.serviceType || '').trim());
    if (!service) {
      res.status(400);
      throw new Error('Please choose a valid service.');
    }
    order.serviceType = service.serviceType;
  }

  if (req.body.amount !== undefined) {
    const numericAmount = Number(req.body.amount);
    if (!Number.isFinite(numericAmount) || numericAmount < 0) {
      res.status(400);
      throw new Error('Please provide a valid order amount.');
    }
    order.amount = numericAmount;
  }

  if (req.body.currency !== undefined) {
    order.currency = String(req.body.currency || DEFAULT_CURRENCY).trim() || DEFAULT_CURRENCY;
  }

  if (req.body.status !== undefined) {
    order.status = normalizeStatus(req.body.status);
  }

  if (req.body.paymentMethod !== undefined) {
    order.paymentMethod = req.body.paymentMethod ? normalizePaymentMethod(req.body.paymentMethod) : '';
  }

  if (req.body.transactionReference !== undefined) {
    order.transactionReference = String(req.body.transactionReference || '').trim();
  }

  if (req.body.adminNotes !== undefined) {
    order.adminNotes = String(req.body.adminNotes || '').trim();
  }

  await order.save();

  const populated = await populateOrders(ServiceOrder.findById(order._id));
  res.json(populated);
});

const getAdminOrderSummary = asyncHandler(async (req, res) => {
  const orders = await ServiceOrder.find({}).lean();
  const currentMonth = getMonthKey();

  const paidOrders = orders.filter((order) => order.status === 'paid');
  const monthlyPaidOrders = paidOrders.filter((order) => getMonthKey(new Date(order.createdAt)) === currentMonth);

  res.json({
    summary: {
      totalOrders: orders.length,
      openOrders: orders.filter((order) => ['draft', 'pending-payment'].includes(order.status)).length,
      pendingPayments: orders.filter((order) => order.status === 'pending-payment').length,
      paidRevenue: paidOrders.reduce((sum, order) => sum + Number(order.amount || 0), 0),
      monthlyRevenue: monthlyPaidOrders.reduce((sum, order) => sum + Number(order.amount || 0), 0),
    },
    pendingPayments: orders
      .filter((order) => order.status === 'pending-payment')
      .sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime())
      .slice(0, 6),
  });
});

module.exports = {
  SERVICE_CATALOG,
  ORDER_STATUSES,
  PAYMENT_METHODS,
  getStudentServices,
  getStudentOrders,
  requestStudentService,
  submitStudentPaymentReference,
  getAdminOrders,
  createAdminOrder,
  updateAdminOrder,
  getAdminOrderSummary,
};
