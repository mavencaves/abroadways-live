const asyncHandler = require('express-async-handler');
const ServiceOrder = require('../models/serviceOrderModel');
const StudentProfile = require('../models/studentProfileModel');
const User = require('../models/userModel');
const { initiateSslPayment, validateSslPayment } = require('../lib/sslcommerz');

const ORDER_STATUSES = ['draft', 'pending-payment', 'paid', 'cancelled', 'refunded'];
const PAYMENT_METHODS = ['bank-transfer', 'cash', 'bkash', 'nagad', 'rocket', 'other'];
const DEFAULT_CURRENCY = 'BDT';
const PAYMENT_LOG_STATUSES = ['initiated', 'success', 'failed', 'cancelled', 'manual-submitted', 'refunded'];
const SSL_GATEWAY_ENABLED = Boolean(
  String(process.env.SSLCOMMERZ_STORE_ID || '').trim() &&
    String(process.env.SSLCOMMERZ_STORE_PASSWORD || '').trim()
);

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

const buildBackendBaseUrl = (req) =>
  String(process.env.BACKEND_BASE_URL || '').trim() || `${req.protocol}://${req.get('host')}`;

const buildFrontendBaseUrl = (req) => {
  const explicitFrontendBaseUrl = String(process.env.FRONTEND_BASE_URL || '').trim();
  if (explicitFrontendBaseUrl) return explicitFrontendBaseUrl.replace(/\/+$/, '');

  const allowedOrigin = String(process.env.CORS_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)[0];

  if (allowedOrigin) return allowedOrigin.replace(/\/+$/, '');

  return `${req.protocol}://${req.get('host')}`;
};

const appendPaymentLog = (order, entry) => {
  order.paymentLogs = Array.isArray(order.paymentLogs) ? order.paymentLogs : [];
  order.paymentLogs.push({
    gateway: entry.gateway || 'manual',
    status: entry.status || 'initiated',
    message: entry.message || '',
    amount: Number(entry.amount || order.amount || 0),
    currency: entry.currency || order.currency || DEFAULT_CURRENCY,
    transactionReference: entry.transactionReference || '',
    payload: entry.payload || null,
    createdAt: entry.createdAt || new Date(),
  });
};

const buildStudentRedirectUrl = (req, order, paymentStatus, message) => {
  const url = new URL('/student/payments', buildFrontendBaseUrl(req));
  url.searchParams.set('paymentStatus', paymentStatus);
  url.searchParams.set('orderId', String(order._id));
  if (message) {
    url.searchParams.set('message', message);
  }
  return url.toString();
};

const findOrderByGatewayReference = async (req) => {
  const orderId = String(req.body?.value_a || req.query?.value_a || '').trim();
  const sessionKey = String(req.body?.tran_id || req.query?.tran_id || '').trim();

  let order = null;
  if (orderId) {
    order = await ServiceOrder.findById(orderId);
  }

  if (!order && sessionKey) {
    order = await ServiceOrder.findOne({ gatewaySessionKey: sessionKey });
  }

  return order;
};

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
    paymentGateway: {
      sslcommerzEnabled: SSL_GATEWAY_ENABLED,
    },
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
    paymentLogStatuses: PAYMENT_LOG_STATUSES,
    paymentGateway: {
      sslcommerzEnabled: SSL_GATEWAY_ENABLED,
    },
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
    paymentGateway: 'manual',
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
  order.paymentGateway = 'manual';
  if (order.status === 'draft') {
    order.status = 'pending-payment';
  }
  appendPaymentLog(order, {
    gateway: 'manual',
    status: 'manual-submitted',
    message: 'Student submitted a manual payment reference.',
    transactionReference,
  });
  await order.save();

  const populated = await populateOrders(ServiceOrder.findById(order._id));
  res.json(populated);
});

const getAdminOrders = asyncHandler(async (req, res) => {
  const query = String(req.query.q || '').trim().toLowerCase();
  const status = String(req.query.status || '').trim();
  const serviceType = String(req.query.serviceType || '').trim();
  const student = String(req.query.student || '').trim().toLowerCase();
  const paymentState = String(req.query.paymentState || '').trim();

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
      paymentState &&
      String(order.paymentLogs?.[order.paymentLogs.length - 1]?.status || '') !== paymentState
    ) {
      return false;
    }
    if (
      query &&
      !`${order.studentId?.fullName || ''} ${order.studentId?.email || ''} ${order.serviceType} ${order.transactionReference || ''} ${order.adminNotes || ''} ${order.gatewayTransactionId || ''}`
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
    paymentLogStatuses: PAYMENT_LOG_STATUSES,
    paymentGateway: {
      sslcommerzEnabled: SSL_GATEWAY_ENABLED,
    },
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
    paymentGateway: nextPaymentMethod ? 'manual' : 'manual',
  });

  if (nextPaymentMethod || transactionReference) {
    appendPaymentLog(order, {
      gateway: 'manual',
      status: nextStatus === 'paid' ? 'success' : 'manual-submitted',
      message: nextStatus === 'paid' ? 'Payment marked as paid by admin.' : 'Manual payment details added by admin.',
      transactionReference: String(transactionReference || '').trim(),
    });
    if (nextStatus === 'paid') {
      order.paymentCompletedAt = new Date();
    }
    await order.save();
  }

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
    if (order.status === 'paid') {
      order.paymentCompletedAt = new Date();
      appendPaymentLog(order, {
        gateway: order.paymentGateway || 'manual',
        status: 'success',
        message: 'Payment marked as paid by admin.',
        transactionReference: order.transactionReference,
      });
    }
    if (order.status === 'refunded') {
      appendPaymentLog(order, {
        gateway: order.paymentGateway || 'manual',
        status: 'refunded',
        message: 'Payment marked as refunded by admin.',
        transactionReference: order.transactionReference,
      });
    }
  }

  if (req.body.paymentMethod !== undefined) {
    order.paymentMethod = req.body.paymentMethod ? normalizePaymentMethod(req.body.paymentMethod) : '';
    if (order.paymentMethod) {
      order.paymentGateway = 'manual';
    }
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

const initiateStudentGatewayPayment = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const order = await ServiceOrder.findOne({
    _id: req.params.id,
    studentId: profile._id,
  });

  if (!order) {
    res.status(404);
    throw new Error('Order not found.');
  }

  if (order.status === 'paid') {
    res.status(400);
    throw new Error('This order is already paid.');
  }

  if (['cancelled', 'refunded'].includes(order.status)) {
    res.status(400);
    throw new Error('This order is not available for online payment.');
  }

  const backendBaseUrl = buildBackendBaseUrl(req).replace(/\/+$/, '');
  const orderId = String(order._id);
  const tranId = `abroadways-${orderId}-${Date.now()}`;

  const paymentPayload = {
    total_amount: String(order.amount),
    currency: order.currency || DEFAULT_CURRENCY,
    tran_id: tranId,
    success_url: `${backendBaseUrl}/api/v1/service-orders/payment/sslcommerz/success`,
    fail_url: `${backendBaseUrl}/api/v1/service-orders/payment/sslcommerz/fail`,
    cancel_url: `${backendBaseUrl}/api/v1/service-orders/payment/sslcommerz/cancel`,
    ipn_url: `${backendBaseUrl}/api/v1/service-orders/payment/sslcommerz/success`,
    shipping_method: 'NO',
    product_name: formatLabel(order.serviceType),
    product_category: 'Service',
    product_profile: 'general',
    cus_name: profile.fullName || req.user.name || 'Student',
    cus_email: profile.email || req.user.email || 'student@abroadways.com',
    cus_add1: 'Dhaka',
    cus_city: 'Dhaka',
    cus_country: 'Bangladesh',
    cus_phone: profile.phone || '01700000000',
    value_a: orderId,
    value_b: profile._id.toString(),
    value_c: order.serviceType,
  };

  const gatewayResponse = await initiateSslPayment(paymentPayload);

  if (!gatewayResponse?.GatewayPageURL) {
    res.status(502);
    throw new Error(gatewayResponse?.failedreason || 'Failed to initialize SSLCommerz payment.');
  }

  order.paymentGateway = 'sslcommerz';
  order.gatewaySessionKey = tranId;
  appendPaymentLog(order, {
    gateway: 'sslcommerz',
    status: 'initiated',
    message: 'SSLCommerz payment session created.',
    transactionReference: tranId,
    payload: {
      status: gatewayResponse.status,
      sessionkey: gatewayResponse.sessionkey || '',
    },
  });
  await order.save();

  res.json({
    orderId,
    gateway: 'sslcommerz',
    redirectUrl: gatewayResponse.GatewayPageURL,
    sessionKey: tranId,
  });
});

const handleGatewaySuccess = async (req, res) => {
  const order = await findOrderByGatewayReference(req);

  if (!order) {
    return res.redirect(buildStudentRedirectUrl(req, { _id: 'unknown' }, 'failed', 'Payment order was not found.'));
  }

  const valId = String(req.body?.val_id || req.query?.val_id || '').trim();

  try {
    if (!valId) {
      throw new Error('Missing validation reference from gateway.');
    }

    if (order.status === 'paid' && order.gatewayValidationId === valId) {
      return res.redirect(buildStudentRedirectUrl(req, order, 'success', 'Payment already confirmed.'));
    }

    const validation = await validateSslPayment(valId);
    const validatedAmount = Number(validation?.amount || 0);
    const orderAmount = Number(order.amount || 0);
    const validationStatus = String(validation?.status || '').toUpperCase();

    if (validationStatus !== 'VALID' && validationStatus !== 'VALIDATED') {
      throw new Error('Gateway validation did not confirm this payment.');
    }

    if (!Number.isFinite(validatedAmount) || validatedAmount !== orderAmount) {
      throw new Error('Validated payment amount does not match the order amount.');
    }

    order.status = 'paid';
    order.paymentGateway = 'sslcommerz';
    order.paymentMethod = 'other';
    order.gatewayValidationId = valId;
    order.gatewayTransactionId = String(validation?.tran_id || req.body?.tran_id || req.query?.tran_id || '').trim();
    order.transactionReference =
      String(validation?.bank_tran_id || validation?.tran_id || req.body?.tran_id || req.query?.tran_id || '').trim();
    order.paymentCompletedAt = new Date();
    appendPaymentLog(order, {
      gateway: 'sslcommerz',
      status: 'success',
      message: 'SSLCommerz payment validated successfully.',
      transactionReference: order.transactionReference || order.gatewayTransactionId,
      amount: validatedAmount,
      currency: validation?.currency || order.currency,
      payload: validation,
    });
    await order.save();

    return res.redirect(buildStudentRedirectUrl(req, order, 'success', 'Payment completed successfully.'));
  } catch (error) {
    appendPaymentLog(order, {
      gateway: 'sslcommerz',
      status: 'failed',
      message: error.message || 'Gateway validation failed.',
      transactionReference: String(req.body?.tran_id || req.query?.tran_id || '').trim(),
      payload: {
        body: req.body,
        query: req.query,
      },
    });
    await order.save();
    return res.redirect(buildStudentRedirectUrl(req, order, 'failed', error.message || 'Payment validation failed.'));
  }
};

const paymentSuccessCallback = asyncHandler(async (req, res) => {
  await handleGatewaySuccess(req, res);
});

const paymentFailCallback = asyncHandler(async (req, res) => {
  const order = await findOrderByGatewayReference(req);
  if (!order) {
    return res.redirect(buildStudentRedirectUrl(req, { _id: 'unknown' }, 'failed', 'Payment failed.'));
  }

  appendPaymentLog(order, {
    gateway: 'sslcommerz',
    status: 'failed',
    message: 'SSLCommerz reported a failed payment.',
    transactionReference: String(req.body?.tran_id || req.query?.tran_id || '').trim(),
    payload: {
      body: req.body,
      query: req.query,
    },
  });
  await order.save();

  return res.redirect(buildStudentRedirectUrl(req, order, 'failed', 'Payment failed or was declined.'));
});

const paymentCancelCallback = asyncHandler(async (req, res) => {
  const order = await findOrderByGatewayReference(req);
  if (!order) {
    return res.redirect(buildStudentRedirectUrl(req, { _id: 'unknown' }, 'cancelled', 'Payment was cancelled.'));
  }

  appendPaymentLog(order, {
    gateway: 'sslcommerz',
    status: 'cancelled',
    message: 'Student cancelled the SSLCommerz payment.',
    transactionReference: String(req.body?.tran_id || req.query?.tran_id || '').trim(),
    payload: {
      body: req.body,
      query: req.query,
    },
  });
  await order.save();

  return res.redirect(buildStudentRedirectUrl(req, order, 'cancelled', 'Payment was cancelled.'));
});

const getAdminOrderSummary = asyncHandler(async (req, res) => {
  const orders = await ServiceOrder.find({}).lean();
  const currentMonth = getMonthKey();
  const pendingPayments = await populateOrders(ServiceOrder.find({ status: 'pending-payment' }));

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
    pendingPayments: pendingPayments.slice(0, 6),
  });
});

module.exports = {
  SERVICE_CATALOG,
  ORDER_STATUSES,
  PAYMENT_METHODS,
  PAYMENT_LOG_STATUSES,
  getStudentServices,
  getStudentOrders,
  requestStudentService,
  submitStudentPaymentReference,
  initiateStudentGatewayPayment,
  paymentSuccessCallback,
  paymentFailCallback,
  paymentCancelCallback,
  getAdminOrders,
  createAdminOrder,
  updateAdminOrder,
  getAdminOrderSummary,
};
