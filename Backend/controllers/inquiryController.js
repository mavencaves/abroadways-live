const asyncHandler = require('express-async-handler');
const Inquiry = require('../models/inquiryModel');
const User = require('../models/userModel');

const allowedStatuses = ['new', 'contacted', 'follow-up', 'qualified', 'closed', 'lost'];
const assignableRoles = ['admin', 'content-manager'];

const buildActorMeta = (user) => ({
  createdBy: user?._id || null,
  createdByName: user?.name || '',
  createdByRole: user?.role || '',
});

const toTrimmedString = (value) => (typeof value === 'string' ? value.trim() : '');

const normalizeSource = (value) =>
  String(value || 'other')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const createInquiry = asyncHandler(async (req, res) => {
  const {
    name,
    email = '',
    phone = '',
    source = 'other',
    destination = '',
    qualification = '',
    intake = '',
    examInterest = '',
    message = '',
  } = req.body;

  if (!name || !name.trim()) {
    res.status(400);
    throw new Error('Please provide your name.');
  }

  if (!email.trim() && !phone.trim()) {
    res.status(400);
    throw new Error('Please provide either an email address or phone number.');
  }

  const trimmedMessage = message.trim();

  const inquiry = await Inquiry.create({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    source,
    destination: destination.trim(),
    qualification: qualification.trim(),
    intake: intake.trim(),
    examInterest: examInterest.trim(),
    message: trimmedMessage,
    activity: [
      {
        type: 'created',
        message: `Lead created from ${normalizeSource(source)}.`,
        meta: {
          source,
        },
      },
      ...(trimmedMessage
        ? [
            {
              type: 'note',
              message: 'Initial lead message captured.',
              meta: {
                hasMessage: true,
              },
            },
          ]
        : []),
    ],
  });

  res.status(201).json({
    _id: inquiry._id,
    message: 'Your inquiry has been received successfully.',
  });
});

const getInquiries = asyncHandler(async (req, res) => {
  const inquiries = await Inquiry.find({})
    .populate('assignedTo', '_id name email role status')
    .sort({ createdAt: -1 });
  res.json(inquiries);
});

const getInquiryMeta = asyncHandler(async (req, res) => {
  const [assignableUsers, destinations, examInterests] = await Promise.all([
    User.find({
      role: { $in: assignableRoles },
      status: 'active',
    })
      .sort({ name: 1 })
      .select('_id name email role status'),
    Inquiry.distinct('destination', { destination: { $nin: ['', null] } }),
    Inquiry.distinct('examInterest', { examInterest: { $nin: ['', null] } }),
  ]);

  res.json({
    assignableUsers,
    destinations: destinations.filter(Boolean).sort((a, b) => a.localeCompare(b)),
    examInterests: examInterests.filter(Boolean).sort((a, b) => a.localeCompare(b)),
    sources: ['homepage-lead', 'homepage-consultation', 'contact-page', 'other'],
    statuses: allowedStatuses,
  });
});

const getInquiryMetrics = asyncHandler(async (req, res) => {
  const counts = await Inquiry.aggregate([
    {
      $group: {
        _id: '$status',
        total: { $sum: 1 },
      },
    },
  ]);

  const metrics = counts.reduce(
    (acc, item) => {
      acc[item._id] = item.total;
      return acc;
    },
    { new: 0, contacted: 0, 'follow-up': 0, qualified: 0, closed: 0, lost: 0 }
  );

  res.json({
    total: counts.reduce((sum, item) => sum + item.total, 0),
    new: metrics.new || 0,
    contacted: metrics.contacted || 0,
    closed: metrics.closed || 0,
    followUp: metrics['follow-up'] || 0,
    qualified: metrics.qualified || 0,
    lost: metrics.lost || 0,
  });
});

const updateInquiry = asyncHandler(async (req, res) => {
  const { status, adminNotes, note, assignedTo } = req.body;
  const inquiry = await Inquiry.findById(req.params.id);

  if (!inquiry) {
    res.status(404);
    throw new Error('Inquiry not found');
  }

  const actorMeta = buildActorMeta(req.user);
  const nextStatus = toTrimmedString(status);
  const noteBody = toTrimmedString(note);
  const legacyAdminNotes = toTrimmedString(adminNotes);
  const normalizedAssignedTo = assignedTo === '' ? null : assignedTo;

  if (nextStatus) {
    if (!allowedStatuses.includes(nextStatus)) {
      res.status(400);
      throw new Error('Invalid inquiry status.');
    }

    if (nextStatus !== inquiry.status) {
      inquiry.activity.push({
        type: 'status',
        message: `Status changed from ${inquiry.status} to ${nextStatus}.`,
        ...actorMeta,
        meta: {
          from: inquiry.status,
          to: nextStatus,
        },
      });
      inquiry.status = nextStatus;
    }
  }

  if (assignedTo !== undefined) {
    if (!normalizedAssignedTo) {
      if (inquiry.assignedTo) {
        inquiry.activity.push({
          type: 'assignment',
          message: 'Lead assignment removed.',
          ...actorMeta,
          meta: {
            assignedTo: null,
          },
        });
      }
      inquiry.assignedTo = null;
    } else {
      const assignee = await User.findOne({
        _id: normalizedAssignedTo,
        role: { $in: assignableRoles },
      }).select('_id name email role status');

      if (!assignee) {
        res.status(400);
        throw new Error('Assigned user must be an admin or content manager.');
      }

      const previousAssigneeId = inquiry.assignedTo ? String(inquiry.assignedTo) : null;
      if (previousAssigneeId !== String(assignee._id)) {
        inquiry.activity.push({
          type: 'assignment',
          message: `Lead assigned to ${assignee.name}.`,
          ...actorMeta,
          meta: {
            assignedTo: assignee._id,
            assignedName: assignee.name,
          },
        });
      }

      inquiry.assignedTo = assignee._id;
    }
  }

  if (noteBody) {
    inquiry.notes.push({
      body: noteBody,
      ...actorMeta,
    });
    inquiry.activity.push({
      type: 'note',
      message: 'A follow-up note was added.',
      ...actorMeta,
      meta: {
        notePreview: noteBody.slice(0, 120),
      },
    });
    inquiry.adminNotes = noteBody;
  } else if (legacyAdminNotes && legacyAdminNotes !== inquiry.adminNotes) {
    inquiry.notes.push({
      body: legacyAdminNotes,
      ...actorMeta,
    });
    inquiry.activity.push({
      type: 'note',
      message: 'A follow-up note was added.',
      ...actorMeta,
      meta: {
        notePreview: legacyAdminNotes.slice(0, 120),
      },
    });
    inquiry.adminNotes = legacyAdminNotes;
  } else if (adminNotes !== undefined && !legacyAdminNotes) {
    inquiry.adminNotes = '';
  }

  const updatedInquiry = await inquiry.save();
  await updatedInquiry.populate('assignedTo', '_id name email role status');
  res.json(updatedInquiry);
});

module.exports = {
  createInquiry,
  getInquiries,
  getInquiryMeta,
  getInquiryMetrics,
  updateInquiry,
};
