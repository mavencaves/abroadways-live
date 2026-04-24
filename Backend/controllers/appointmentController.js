const asyncHandler = require('express-async-handler');
const Appointment = require('../models/appointmentModel');
const StudentProfile = require('../models/studentProfileModel');
const User = require('../models/userModel');
const { createNotification } = require('../lib/notifications');

const APPOINTMENT_SLOTS = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];
const APPOINTMENT_STATUSES = ['requested', 'confirmed', 'completed', 'cancelled', 'no-show'];
const BOOKABLE_STATUSES = ['requested', 'confirmed'];
const ACTIVE_STAFF_ROLES = ['admin', 'content-manager'];

const getDateKey = (date = new Date()) =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

const getTimeKey = (date = new Date()) =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Dhaka',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

const formatLabel = (value) =>
  String(value || '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const isValidDateKey = (value) => /^\d{4}-\d{2}-\d{2}$/.test(String(value || ''));

const isPastSlot = (date, time) => {
  const today = getDateKey();
  const nowTime = getTimeKey();

  if (date < today) return true;
  if (date === today && time < nowTime) return true;
  return false;
};

const compareAppointments = (left, right) => {
  const leftKey = `${left.date} ${left.time}`;
  const rightKey = `${right.date} ${right.time}`;
  if (leftKey < rightKey) return -1;
  if (leftKey > rightKey) return 1;
  return 0;
};

const populateAppointmentQuery = (query) =>
  query
    .populate({
      path: 'studentId',
      select:
        'fullName email phone preferredCountry intake qualification examInterest linkedInquiry user',
      populate: { path: 'user', select: '_id name email role' },
    })
    .populate('assignedStaff', '_id name email role')
    .populate('inquiryId', '_id status source destination examInterest intake');

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

const getAvailableStaffForSlot = async (date, time, excludeAppointmentId = null) => {
  const staffMembers = await User.find({
    role: { $in: ACTIVE_STAFF_ROLES },
    status: 'active',
  })
    .select('_id name email role')
    .lean();

  if (!staffMembers.length) {
    return [];
  }

  const blockingFilter = {
    date,
    time,
    status: { $in: BOOKABLE_STATUSES },
    assignedStaff: { $ne: null },
  };

  if (excludeAppointmentId) {
    blockingFilter._id = { $ne: excludeAppointmentId };
  }

  const bookedAppointments = await Appointment.find(blockingFilter).select('assignedStaff').lean();
  const bookedStaffIds = new Set(
    bookedAppointments.map((item) => String(item.assignedStaff)).filter(Boolean)
  );

  return staffMembers.filter((staff) => !bookedStaffIds.has(String(staff._id)));
};

const pickAssignedStaff = async (date, time, excludeAppointmentId = null) => {
  const availableStaff = await getAvailableStaffForSlot(date, time, excludeAppointmentId);

  if (!availableStaff.length) {
    return null;
  }

  const appointmentLoad = await Appointment.aggregate([
    {
      $match: {
        assignedStaff: { $in: availableStaff.map((staff) => staff._id) },
        status: { $in: BOOKABLE_STATUSES },
        date: { $gte: getDateKey() },
        ...(excludeAppointmentId ? { _id: { $ne: excludeAppointmentId } } : {}),
      },
    },
    {
      $group: {
        _id: '$assignedStaff',
        total: { $sum: 1 },
      },
    },
  ]);

  const counts = new Map(appointmentLoad.map((item) => [String(item._id), item.total]));

  return availableStaff
    .map((staff) => ({
      ...staff,
      load: counts.get(String(staff._id)) || 0,
    }))
    .sort((left, right) => {
      if (left.load !== right.load) return left.load - right.load;
      return left.name.localeCompare(right.name);
    })[0];
};

const validateSlotRequest = ({ date, time, type }) => {
  if (!isValidDateKey(date)) {
    const error = new Error('Please choose a valid appointment date.');
    error.statusCode = 400;
    throw error;
  }

  if (!APPOINTMENT_SLOTS.includes(time)) {
    const error = new Error('Please choose a valid appointment time slot.');
    error.statusCode = 400;
    throw error;
  }

  if (!['online', 'office'].includes(type)) {
    const error = new Error('Please choose a valid appointment type.');
    error.statusCode = 400;
    throw error;
  }

  if (isPastSlot(date, time)) {
    const error = new Error('Please choose a future appointment slot.');
    error.statusCode = 400;
    throw error;
  }
};

const validateSlotShape = ({ date, time, type }) => {
  if (!isValidDateKey(date)) {
    const error = new Error('Please choose a valid appointment date.');
    error.statusCode = 400;
    throw error;
  }

  if (!APPOINTMENT_SLOTS.includes(time)) {
    const error = new Error('Please choose a valid appointment time slot.');
    error.statusCode = 400;
    throw error;
  }

  if (!['online', 'office'].includes(type)) {
    const error = new Error('Please choose a valid appointment type.');
    error.statusCode = 400;
    throw error;
  }
};

const getStudentAppointments = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const appointments = await populateAppointmentQuery(
    Appointment.find({ studentId: profile._id }).sort({ date: 1, time: 1 })
  );

  res.json({
    items: appointments,
    slots: APPOINTMENT_SLOTS,
    statuses: APPOINTMENT_STATUSES,
  });
});

const getStudentAppointmentSlots = asyncHandler(async (req, res) => {
  const date = String(req.query.date || '').trim();

  if (!isValidDateKey(date)) {
    res.status(400);
    throw new Error('Please choose a valid date to load appointment slots.');
  }

  const activeStaff = await User.find({
    role: { $in: ACTIVE_STAFF_ROLES },
    status: 'active',
  })
    .select('_id name')
    .lean();

  const bookedAppointments = await Appointment.find({
    date,
    status: { $in: BOOKABLE_STATUSES },
    assignedStaff: { $ne: null },
  })
    .select('time assignedStaff')
    .lean();

  const slotMap = APPOINTMENT_SLOTS.map((slot) => {
    const bookedCount = bookedAppointments.filter((item) => item.time === slot).length;
    const availableStaffCount = Math.max(activeStaff.length - bookedCount, 0);

    return {
      time: slot,
      label: slot,
      available: !isPastSlot(date, slot) && availableStaffCount > 0,
      availableStaffCount,
    };
  });

  res.json({
    date,
    slots: slotMap,
  });
});

const createStudentAppointment = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const { date, time, type = 'online', notes = '' } = req.body;

  validateSlotRequest({ date, time, type });

  const existingStudentAppointment = await Appointment.findOne({
    studentId: profile._id,
    date,
    time,
    status: { $in: BOOKABLE_STATUSES },
  });

  if (existingStudentAppointment) {
    res.status(400);
    throw new Error('You already have an active appointment in this slot.');
  }

  const assignedStaff = await pickAssignedStaff(date, time);

  if (!assignedStaff) {
    res.status(409);
    throw new Error('This appointment slot is fully booked. Please choose another time.');
  }

  const appointment = await Appointment.create({
    studentId: profile._id,
    inquiryId: profile.linkedInquiry?._id || profile.linkedInquiry || null,
    assignedStaff: assignedStaff._id,
    date,
    time,
    type,
    status: 'requested',
    notes: String(notes || '').trim(),
  });

  if (assignedStaff?._id) {
    await createNotification({
      recipient: assignedStaff._id,
      type: 'appointment-requested',
      title: 'New appointment request',
      message: `${profile.fullName || req.user.name || 'A student'} requested an appointment on ${date} at ${time}.`,
      link: '/dashboard/appointments',
      priority: 'medium',
      eventKey: `appointment:${appointment._id}:requested:${assignedStaff._id}`,
      metadata: {
        appointmentId: appointment._id,
        studentId: profile._id,
      },
    });
  }

  const populatedAppointment = await populateAppointmentQuery(
    Appointment.findById(appointment._id)
  );

  res.status(201).json(populatedAppointment);
});

const cancelStudentAppointment = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const appointment = await Appointment.findOne({
    _id: req.params.id,
    studentId: profile._id,
  });

  if (!appointment) {
    res.status(404);
    throw new Error('Appointment not found.');
  }

  if (!['requested', 'confirmed'].includes(appointment.status)) {
    res.status(400);
    throw new Error('Only requested or confirmed appointments can be cancelled.');
  }

  appointment.status = 'cancelled';
  await appointment.save();

  if (appointment.assignedStaff) {
    await createNotification({
      recipient: appointment.assignedStaff,
      type: 'appointment-cancelled',
      title: 'Appointment cancelled',
      message: `${profile.fullName || req.user.name || 'A student'} cancelled the appointment scheduled for ${appointment.date} at ${appointment.time}.`,
      link: '/dashboard/appointments',
      priority: 'medium',
      eventKey: `appointment:${appointment._id}:cancelled:student`,
      metadata: {
        appointmentId: appointment._id,
      },
    });
  }

  const populatedAppointment = await populateAppointmentQuery(
    Appointment.findById(appointment._id)
  );
  res.json(populatedAppointment);
});

const getAdminAppointments = asyncHandler(async (req, res) => {
  const query = String(req.query.q || '').trim().toLowerCase();
  const date = String(req.query.date || '').trim();
  const status = String(req.query.status || '').trim();
  const staffId = String(req.query.staffId || '').trim();

  const appointments = await populateAppointmentQuery(
    Appointment.find({})
  ).sort({ date: 1, time: 1, createdAt: -1 });

  const items = appointments.filter((item) => {
    if (date && item.date !== date) return false;
    if (status && item.status !== status) return false;
    if (staffId && String(item.assignedStaff?._id || '') !== staffId) return false;
    if (
      query &&
      !`${item.studentId?.fullName || ''} ${item.studentId?.email || ''} ${item.assignedStaff?.name || ''} ${item.notes || ''}`
        .toLowerCase()
        .includes(query)
    ) {
      return false;
    }
    return true;
  });

  const staffOptions = await User.find({
    role: { $in: ACTIVE_STAFF_ROLES },
    status: 'active',
  })
    .select('_id name email role')
    .sort({ name: 1 })
    .lean();

  res.json({
    items,
    staffOptions,
    statuses: APPOINTMENT_STATUSES,
    slots: APPOINTMENT_SLOTS,
  });
});

const updateAdminAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (!appointment) {
    res.status(404);
    throw new Error('Appointment not found.');
  }

  const nextDate = req.body.date !== undefined ? String(req.body.date).trim() : appointment.date;
  const nextTime = req.body.time !== undefined ? String(req.body.time).trim() : appointment.time;
  const nextType = req.body.type !== undefined ? String(req.body.type).trim() : appointment.type;
  const nextStatus = req.body.status !== undefined ? String(req.body.status).trim() : appointment.status;
  const previousDate = appointment.date;
  const previousTime = appointment.time;
  const previousStatus = appointment.status;
  const previousAssignedStaffId = appointment.assignedStaff ? String(appointment.assignedStaff) : null;
  const requestedStaffId =
    req.body.assignedStaff !== undefined
      ? req.body.assignedStaff
      : appointment.assignedStaff
        ? String(appointment.assignedStaff)
        : null;

  validateSlotShape({ date: nextDate, time: nextTime, type: nextType });

  if (['requested', 'confirmed'].includes(nextStatus) && isPastSlot(nextDate, nextTime)) {
    res.status(400);
    throw new Error('Requested or confirmed appointments must use a future slot.');
  }

  if (!APPOINTMENT_STATUSES.includes(nextStatus)) {
    res.status(400);
    throw new Error('Invalid appointment status.');
  }

  let finalAssignedStaffId = requestedStaffId || null;

  if (finalAssignedStaffId) {
    const isBlocking = nextStatus === 'requested' || nextStatus === 'confirmed';
    if (isBlocking) {
      const conflict = await Appointment.findOne({
        _id: { $ne: appointment._id },
        assignedStaff: finalAssignedStaffId,
        date: nextDate,
        time: nextTime,
        status: { $in: BOOKABLE_STATUSES },
      });

      if (conflict) {
        res.status(409);
        throw new Error('This staff member is already booked for the selected slot.');
      }
    }
  } else if (nextStatus === 'requested' || nextStatus === 'confirmed') {
    const autoAssigned = await pickAssignedStaff(nextDate, nextTime, appointment._id);
    if (!autoAssigned) {
      res.status(409);
      throw new Error('No staff are available for the selected slot.');
    }
    finalAssignedStaffId = autoAssigned._id;
  }

  appointment.date = nextDate;
  appointment.time = nextTime;
  appointment.type = nextType;
  appointment.status = nextStatus;
  appointment.notes = req.body.notes !== undefined ? String(req.body.notes).trim() : appointment.notes;
  appointment.assignedStaff = finalAssignedStaffId;
  await appointment.save();

  const studentProfile = await StudentProfile.findById(appointment.studentId).select('user fullName email').lean();
  const studentRecipientId = studentProfile?.user || null;
  const appointmentMoved = previousDate !== nextDate || previousTime !== nextTime;
  const statusChanged = previousStatus !== nextStatus;
  const assignedStaffChanged = previousAssignedStaffId !== String(finalAssignedStaffId || '');

  if (studentRecipientId && (appointmentMoved || statusChanged)) {
    let type = 'appointment-updated';
    let title = 'Appointment updated';
    let message = `Your appointment is now scheduled for ${nextDate} at ${nextTime}.`;
    let priority = 'medium';

    if (nextStatus === 'confirmed') {
      type = 'appointment-confirmed';
      title = 'Appointment confirmed';
      message = `Your appointment for ${nextDate} at ${nextTime} has been confirmed.`;
    } else if (nextStatus === 'cancelled') {
      type = 'appointment-cancelled';
      title = 'Appointment cancelled';
      message = `Your appointment for ${nextDate} at ${nextTime} has been cancelled.`;
      priority = 'high';
    } else if (appointmentMoved) {
      type = 'appointment-rescheduled';
      title = 'Appointment rescheduled';
      message = `Your appointment has been moved to ${nextDate} at ${nextTime}.`;
    }

    await createNotification({
      recipient: studentRecipientId,
      type,
      title,
      message,
      link: '/student/appointments',
      priority,
      eventKey: `appointment:${appointment._id}:${type}:${nextDate}:${nextTime}:${nextStatus}`,
      metadata: {
        appointmentId: appointment._id,
        status: nextStatus,
      },
    });
  }

  if (finalAssignedStaffId && (assignedStaffChanged || statusChanged || appointmentMoved)) {
    await createNotification({
      recipient: finalAssignedStaffId,
      type: 'appointment-updated',
      title: 'Appointment update',
      message: `${studentProfile?.fullName || 'A student'} has an appointment update for ${nextDate} at ${nextTime} (${formatLabel(nextStatus)}).`,
      link: '/dashboard/appointments',
      priority: nextStatus === 'cancelled' ? 'high' : 'medium',
      eventKey: `appointment:${appointment._id}:staff-update:${finalAssignedStaffId}:${nextDate}:${nextTime}:${nextStatus}`,
      metadata: {
        appointmentId: appointment._id,
        status: nextStatus,
      },
    });
  }

  const populatedAppointment = await populateAppointmentQuery(
    Appointment.findById(appointment._id)
  );

  res.json(populatedAppointment);
});

const getAdminAppointmentSummary = asyncHandler(async (req, res) => {
  const today = getDateKey();
  const currentTime = getTimeKey();

  const appointments = await populateAppointmentQuery(
    Appointment.find({})
  ).sort({ date: 1, time: 1 });

  const upcoming = appointments.filter((item) => {
    if (!['requested', 'confirmed'].includes(item.status)) return false;
    return item.date > today || (item.date === today && item.time >= currentTime);
  });

  const todaysSchedule = appointments.filter((item) => item.date === today);

  res.json({
    summary: {
      total: appointments.length,
      today: todaysSchedule.length,
      requested: appointments.filter((item) => item.status === 'requested').length,
      confirmed: appointments.filter((item) => item.status === 'confirmed').length,
      completed: appointments.filter((item) => item.status === 'completed').length,
    },
    upcoming: upcoming.slice(0, 6),
    todaysSchedule: todaysSchedule.slice(0, 8),
    today,
  });
});

module.exports = {
  APPOINTMENT_SLOTS,
  APPOINTMENT_STATUSES,
  getStudentAppointments,
  getStudentAppointmentSlots,
  createStudentAppointment,
  cancelStudentAppointment,
  getAdminAppointments,
  updateAdminAppointment,
  getAdminAppointmentSummary,
};
