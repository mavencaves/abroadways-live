const asyncHandler = require('express-async-handler');
const Inquiry = require('../models/inquiryModel');
const InquiryTemplate = require('../models/inquiryTemplateModel');
const User = require('../models/userModel');
const Blog = require('../models/blogModel');
const Event = require('../models/eventModel');
const { createNotification } = require('../lib/notifications');

const allowedStatuses = ['new', 'contacted', 'follow-up', 'qualified', 'closed', 'lost'];
const assignableRoles = ['admin', 'content-manager'];
const taskStatuses = ['pending', 'in-progress', 'completed', 'cancelled'];
const autoAssignableSources = ['homepage-consultation', 'contact-page'];
const openLeadStatuses = ['new', 'contacted', 'follow-up', 'qualified'];
const staleLeadDays = 5;

const buildActorMeta = (user) => ({
  createdBy: user?._id || null,
  createdByName: user?.name || '',
  createdByRole: user?.role || '',
});

const populateInquiryRelations = (query) =>
  query
    .populate('assignedTo', '_id name email role status')
    .populate('tasks.assignedTo', '_id name email role status')
    .populate('communications.templateId', '_id name channel isActive');

const toTrimmedString = (value) => (typeof value === 'string' ? value.trim() : '');

const normalizeSource = (value) =>
  String(value || 'other')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const formatLabel = (value) =>
  String(value || '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const getStartOfDay = (date) => {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
};

const getEndOfDay = (date) => {
  const next = new Date(date);
  next.setHours(23, 59, 59, 999);
  return next;
};

const getStartOfWeek = (date) => {
  const next = getStartOfDay(date);
  const day = next.getDay();
  next.setDate(next.getDate() - day);
  return next;
};

const getStartOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);

const formatShortDate = (date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

const formatMonthLabel = (date) =>
  date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const formatWeekLabel = (date) => {
  const end = new Date(date);
  end.setDate(end.getDate() + 6);
  return `${formatShortDate(date)} - ${formatShortDate(end)}`;
};

const parseDateValue = (value) => {
  if (value === null || value === undefined || value === '') return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const countByStatus = (records) =>
  records.reduce(
    (acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    },
    { new: 0, contacted: 0, 'follow-up': 0, qualified: 0, closed: 0, lost: 0 }
  );

const isFollowUpOverdue = (inquiry, referenceDate = new Date()) => {
  if (!inquiry.nextFollowUpAt || ['closed', 'lost'].includes(inquiry.status)) return false;
  const followUpAt = new Date(inquiry.nextFollowUpAt);
  const completedAt = inquiry.followUpCompletedAt ? new Date(inquiry.followUpCompletedAt) : null;
  return followUpAt.getTime() < referenceDate.getTime() && (!completedAt || completedAt.getTime() < followUpAt.getTime());
};

const isLeadStale = (inquiry, referenceDate = new Date()) => {
  if (['closed', 'lost'].includes(inquiry.status)) return false;
  const staleCutoff = new Date(referenceDate);
  staleCutoff.setDate(staleCutoff.getDate() - staleLeadDays);
  return new Date(inquiry.updatedAt).getTime() < staleCutoff.getTime();
};

const isTaskDueToday = (task, referenceDate = new Date()) => {
  if (!task?.dueDate || ['completed', 'cancelled'].includes(task.status)) return false;
  const dueDate = new Date(task.dueDate);
  return dueDate >= getStartOfDay(referenceDate) && dueDate <= getEndOfDay(referenceDate);
};

const deriveNextSuggestedAction = (inquiry) => {
  if (inquiry.status === 'new') return 'Send first response';
  if (inquiry.status === 'contacted') return 'Request documents';
  if (inquiry.status === 'follow-up') return 'Send follow-up';
  if (inquiry.status === 'qualified') return 'Confirm consultation';
  return 'Review lead record';
};

const renderTemplate = (template, inquiry, user) => {
  const replacements = {
    name: inquiry.name || 'Student',
    destination: inquiry.destination || 'your preferred destination',
    examInterest: inquiry.examInterest || 'your exam planning',
    intake: inquiry.intake || 'upcoming intake',
    assignedStaff: inquiry.assignedTo?.name || user?.name || 'Abroadways team',
  };

  const fill = (text) =>
    String(text || '').replace(/\{\{(\w+)\}\}/g, (_, key) => replacements[key] || '');

  return {
    subject: fill(template.subject),
    body: fill(template.body),
  };
};

const buildNotificationsPayload = (inquiries, referenceDate = new Date()) => {
  const overdueFollowUps = [];
  const unassignedInquiries = [];
  const staleInquiries = [];
  const tasksDueToday = [];

  inquiries.forEach((inquiry) => {
    if (isFollowUpOverdue(inquiry, referenceDate)) {
      overdueFollowUps.push({
        id: String(inquiry._id),
        name: inquiry.name,
        status: inquiry.status,
        nextFollowUpAt: inquiry.nextFollowUpAt,
        assignedTo: inquiry.assignedTo
          ? {
              _id: String(inquiry.assignedTo._id),
              name: inquiry.assignedTo.name,
              role: inquiry.assignedTo.role,
            }
          : null,
      });
    }

    if (!inquiry.assignedTo && !['closed', 'lost'].includes(inquiry.status)) {
      unassignedInquiries.push({
        id: String(inquiry._id),
        name: inquiry.name,
        status: inquiry.status,
        source: inquiry.source,
        createdAt: inquiry.createdAt,
      });
    }

    if (isLeadStale(inquiry, referenceDate)) {
      staleInquiries.push({
        id: String(inquiry._id),
        name: inquiry.name,
        status: inquiry.status,
        updatedAt: inquiry.updatedAt,
      });
    }

    (inquiry.tasks || []).forEach((task) => {
      if (!isTaskDueToday(task, referenceDate)) return;
      tasksDueToday.push({
        inquiryId: String(inquiry._id),
        inquiryName: inquiry.name,
        taskId: String(task._id),
        title: task.title,
        dueDate: task.dueDate,
        status: task.status,
        assignedTo: task.assignedTo
          ? {
              _id: String(task.assignedTo._id),
              name: task.assignedTo.name,
              role: task.assignedTo.role,
            }
          : null,
      });
    });
  });

  return {
    overdueFollowUps: {
      count: overdueFollowUps.length,
      sample: overdueFollowUps.slice(0, 5),
    },
    unassignedInquiries: {
      count: unassignedInquiries.length,
      sample: unassignedInquiries.slice(0, 5),
    },
    staleInquiries: {
      count: staleInquiries.length,
      sample: staleInquiries.slice(0, 5),
    },
    tasksDueToday: {
      count: tasksDueToday.length,
      sample: tasksDueToday.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()).slice(0, 5),
    },
  };
};

const findAssignableUser = async (userId) => {
  if (!userId) return null;
  return User.findOne({
    _id: userId,
    role: { $in: assignableRoles },
    status: 'active',
  }).select('_id name email role status');
};

const findAutoAssignee = async (source) => {
  if (!autoAssignableSources.includes(source)) return null;

  const candidates = await User.find({
    role: { $in: assignableRoles },
    status: 'active',
  })
    .sort({ role: 1, name: 1 })
    .select('_id name email role status');

  if (!candidates.length) return null;

  const load = await Inquiry.aggregate([
    {
      $match: {
        assignedTo: { $in: candidates.map((item) => item._id) },
        status: { $in: openLeadStatuses },
      },
    },
    {
      $group: {
        _id: '$assignedTo',
        total: { $sum: 1 },
      },
    },
  ]);

  const loadMap = new Map(load.map((item) => [String(item._id), item.total]));

  const ranked = candidates
    .map((candidate) => ({
      user: candidate,
      total: loadMap.get(String(candidate._id)) || 0,
      roleRank: candidate.role === 'content-manager' ? 0 : 1,
    }))
    .sort((a, b) => a.total - b.total || a.roleRank - b.roleRank || a.user.name.localeCompare(b.user.name));

  return ranked[0]?.user || null;
};

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
  const autoAssignee = await findAutoAssignee(source);

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
    assignedTo: autoAssignee?._id || null,
    nextSuggestedAction: deriveNextSuggestedAction({ status: 'new' }),
    activity: [
      {
        type: 'created',
        message: `Lead created from ${normalizeSource(source)}.`,
        meta: { source },
      },
      ...(autoAssignee
        ? [
            {
              type: 'assignment',
              message: `Lead auto-assigned to ${autoAssignee.name}.`,
              meta: {
                assignedTo: autoAssignee._id,
                assignedName: autoAssignee.name,
                rule: 'lowest-open-load',
              },
            },
          ]
        : []),
      ...(trimmedMessage
        ? [
            {
              type: 'note',
              message: 'Initial lead message captured.',
              meta: { hasMessage: true },
            },
          ]
        : []),
    ],
  });

  if (autoAssignee?._id) {
    await createNotification({
      recipient: autoAssignee._id,
      type: 'inquiry-assigned',
      title: 'New inquiry assigned',
      message: `${inquiry.name} has been assigned to you from ${normalizeSource(source)}.`,
      link: '/dashboard/inquiries',
      priority: 'high',
      eventKey: `inquiry:${inquiry._id}:assigned:${autoAssignee._id}`,
      metadata: {
        inquiryId: inquiry._id,
        source,
      },
    });
  }

  res.status(201).json({
    _id: inquiry._id,
    message: 'Your inquiry has been received successfully.',
  });
});

const getInquiries = asyncHandler(async (req, res) => {
  const inquiries = await populateInquiryRelations(Inquiry.find({}).sort({ createdAt: -1 }));
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
    taskStatuses,
    suggestedActions: ['Send first response', 'Send follow-up', 'Request documents', 'Confirm consultation'],
  });
});

const getInquiryMetrics = asyncHandler(async (req, res) => {
  const counts = await Inquiry.aggregate([
    { $group: { _id: '$status', total: { $sum: 1 } } },
  ]);

  const metrics = counts.reduce(
    (acc, item) => {
      acc[item._id] = item.total;
      return acc;
    },
    { new: 0, contacted: 0, 'follow-up': 0, qualified: 0, closed: 0, lost: 0 }
  );

  const inquiries = await populateInquiryRelations(Inquiry.find({}));
  const notifications = buildNotificationsPayload(inquiries);

  res.json({
    total: counts.reduce((sum, item) => sum + item.total, 0),
    new: metrics.new || 0,
    contacted: metrics.contacted || 0,
    closed: metrics.closed || 0,
    followUp: metrics['follow-up'] || 0,
    qualified: metrics.qualified || 0,
    lost: metrics.lost || 0,
    overdueFollowUps: notifications.overdueFollowUps.count,
    unassigned: notifications.unassignedInquiries.count,
    tasksDueToday: notifications.tasksDueToday.count,
  });
});

const getInquiryNotifications = asyncHandler(async (req, res) => {
  const inquiries = await populateInquiryRelations(Inquiry.find({}).sort({ updatedAt: -1 }));
  res.json(buildNotificationsPayload(inquiries));
});

const getInquiryTemplates = asyncHandler(async (req, res) => {
  const templates = await InquiryTemplate.find({ isActive: true }).sort({ channel: 1, updatedAt: -1 });
  res.json(templates);
});

const getInquiryDashboardAnalytics = asyncHandler(async (req, res) => {
  const now = new Date();
  const inquiries = await populateInquiryRelations(Inquiry.find({}).sort({ createdAt: -1 }));
  const statusCounts = countByStatus(inquiries);

  const daily = Array.from({ length: 7 }, (_, index) => {
    const date = getStartOfDay(new Date(now));
    date.setDate(date.getDate() - (6 - index));
    return {
      key: date.toISOString().slice(0, 10),
      label: formatShortDate(date),
      total: 0,
    };
  });

  const weekly = Array.from({ length: 8 }, (_, index) => {
    const weekStart = getStartOfWeek(new Date(now));
    weekStart.setDate(weekStart.getDate() - 7 * (7 - index));
    return {
      key: weekStart.toISOString().slice(0, 10),
      label: formatWeekLabel(weekStart),
      total: 0,
    };
  });

  const monthly = Array.from({ length: 6 }, (_, index) => {
    const monthStart = getStartOfMonth(new Date(now.getFullYear(), now.getMonth() - (5 - index), 1));
    return {
      key: `${monthStart.getFullYear()}-${String(monthStart.getMonth() + 1).padStart(2, '0')}`,
      label: formatMonthLabel(monthStart),
      total: 0,
    };
  });

  const destinationMap = new Map();
  const examMap = new Map();
  const sourceMap = new Map();
  const staffMap = new Map();
  const uncontactedLeads = [];

  inquiries.forEach((inquiry) => {
    const createdAt = new Date(inquiry.createdAt);
    const dailyKey = createdAt.toISOString().slice(0, 10);
    const weekKey = getStartOfWeek(createdAt).toISOString().slice(0, 10);
    const monthKey = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, '0')}`;

    const dailyBucket = daily.find((item) => item.key === dailyKey);
    if (dailyBucket) dailyBucket.total += 1;

    const weeklyBucket = weekly.find((item) => item.key === weekKey);
    if (weeklyBucket) weeklyBucket.total += 1;

    const monthlyBucket = monthly.find((item) => item.key === monthKey);
    if (monthlyBucket) monthlyBucket.total += 1;

    if (inquiry.destination) {
      destinationMap.set(inquiry.destination, (destinationMap.get(inquiry.destination) || 0) + 1);
    }

    if (inquiry.examInterest) {
      examMap.set(inquiry.examInterest, (examMap.get(inquiry.examInterest) || 0) + 1);
    }

    const sourceKey = inquiry.source || 'other';
    const sourceEntry = sourceMap.get(sourceKey) || { total: 0, closed: 0, qualified: 0, lost: 0 };
    sourceEntry.total += 1;
    if (inquiry.status === 'closed') sourceEntry.closed += 1;
    if (inquiry.status === 'qualified') sourceEntry.qualified += 1;
    if (inquiry.status === 'lost') sourceEntry.lost += 1;
    sourceMap.set(sourceKey, sourceEntry);

    if (inquiry.assignedTo?._id) {
      const staffId = String(inquiry.assignedTo._id);
      const staffEntry = staffMap.get(staffId) || {
        id: staffId,
        name: inquiry.assignedTo.name,
        role: inquiry.assignedTo.role,
        total: 0,
        contacted: 0,
        qualified: 0,
        closed: 0,
      };
      staffEntry.total += 1;
      if (['contacted', 'follow-up', 'qualified', 'closed'].includes(inquiry.status)) staffEntry.contacted += 1;
      if (inquiry.status === 'qualified') staffEntry.qualified += 1;
      if (inquiry.status === 'closed') staffEntry.closed += 1;
      staffMap.set(staffId, staffEntry);
    }

    const ageHours = (Date.now() - createdAt.getTime()) / (1000 * 60 * 60);
    if (inquiry.status === 'new' && ageHours > 48) {
      uncontactedLeads.push({
        id: inquiry._id,
        name: inquiry.name,
        source: inquiry.source,
        ageHours: Math.round(ageHours),
      });
    }
  });

  const funnelOrder = ['new', 'contacted', 'follow-up', 'qualified', 'closed'];
  const funnel = funnelOrder.map((status, index) => {
    const count = statusCounts[status] || 0;
    const previousCount = index === 0 ? count : statusCounts[funnelOrder[index - 1]] || 0;
    const dropOffPercent =
      index === 0 || previousCount === 0 ? 0 : Number((((previousCount - count) / previousCount) * 100).toFixed(1));
    return { status, count, dropOffPercent };
  });

  const totalLeads = inquiries.length || 1;
  const lostRate = Number((((statusCounts.lost || 0) / totalLeads) * 100).toFixed(1));
  const highDropOffWarnings = funnel
    .filter((step) => step.dropOffPercent >= 35 && step.status !== 'new')
    .map((step) => `${formatLabel(step.status)} drop-off is ${step.dropOffPercent}%`);

  const sourceAnalytics = Array.from(sourceMap.entries())
    .map(([source, values]) => ({
      source,
      label: normalizeSource(source),
      total: values.total,
      closed: values.closed,
      qualified: values.qualified,
      lost: values.lost,
      conversionRate: values.total ? Number(((values.closed / values.total) * 100).toFixed(1)) : 0,
    }))
    .sort((a, b) => b.total - a.total);

  const topDestinations = Array.from(destinationMap.entries())
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 6);

  const topExamInterests = Array.from(examMap.entries())
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 6);

  const staffPerformance = Array.from(staffMap.values())
    .map((staff) => ({
      ...staff,
      conversionRate: staff.total ? Number(((staff.closed / staff.total) * 100).toFixed(1)) : 0,
    }))
    .sort((a, b) => b.total - a.total);

  const [publishedBlogs, upcomingEvents] = await Promise.all([
    Blog.countDocuments({ status: 'published' }),
    Event.countDocuments({ date: { $gte: getStartOfDay(now) } }),
  ]);

  res.json({
    summary: {
      totalLeads: inquiries.length,
      newLeads: statusCounts.new || 0,
      contactedLeads: statusCounts.contacted || 0,
      qualifiedLeads: statusCounts.qualified || 0,
      closedLeads: statusCounts.closed || 0,
      lostLeads: statusCounts.lost || 0,
      publishedBlogs,
      upcomingEvents,
    },
    leadTrends: { daily, weekly, monthly },
    statusBreakdown: statusCounts,
    funnel,
    topDestinations,
    topExamInterests,
    sourceAnalytics,
    staffPerformance,
    alerts: {
      uncontactedOver48h: {
        count: uncontactedLeads.length,
        sample: uncontactedLeads.slice(0, 5),
      },
      highDropOffWarnings: [
        ...highDropOffWarnings,
        ...(lostRate >= 30 ? [`Lost lead rate is ${lostRate}%`] : []),
      ],
    },
  });
});

const updateInquiry = asyncHandler(async (req, res) => {
  const {
    status,
    adminNotes,
    note,
    assignedTo,
    nextFollowUpAt,
    completeFollowUp,
    task,
    communicationAction,
  } = req.body;

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
        message: `Status changed from ${formatLabel(inquiry.status)} to ${formatLabel(nextStatus)}.`,
        ...actorMeta,
        meta: { from: inquiry.status, to: nextStatus },
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
          meta: { assignedTo: null },
        });
      }
      inquiry.assignedTo = null;
    } else {
      const assignee = await findAssignableUser(normalizedAssignedTo);
      if (!assignee) {
        res.status(400);
        throw new Error('Assigned user must be an active admin or content manager.');
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

        await createNotification({
          recipient: assignee._id,
          type: 'inquiry-assigned',
          title: 'Inquiry assigned',
          message: `${inquiry.name} has been assigned to you.`,
          link: '/dashboard/inquiries',
          priority: 'high',
          eventKey: `inquiry:${inquiry._id}:assigned:${assignee._id}:${Date.now()}`,
          metadata: {
            inquiryId: inquiry._id,
            assignedBy: req.user?._id || null,
          },
        });
      }

      inquiry.assignedTo = assignee._id;
    }
  }

  if (nextFollowUpAt !== undefined) {
    if (nextFollowUpAt === null || nextFollowUpAt === '') {
      if (inquiry.nextFollowUpAt) {
        inquiry.activity.push({
          type: 'reminder',
          message: 'Follow-up reminder cleared.',
          ...actorMeta,
          meta: { previousFollowUpAt: inquiry.nextFollowUpAt },
        });
      }
      inquiry.nextFollowUpAt = null;
      inquiry.followUpCompletedAt = null;
    } else {
      const parsedFollowUpAt = parseDateValue(nextFollowUpAt);
      if (!parsedFollowUpAt) {
        res.status(400);
        throw new Error('Please provide a valid follow-up date and time.');
      }

      inquiry.nextFollowUpAt = parsedFollowUpAt;
      inquiry.followUpCompletedAt = null;
      inquiry.activity.push({
        type: 'reminder',
        message: `Follow-up scheduled for ${parsedFollowUpAt.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        })}.`,
        ...actorMeta,
        meta: { nextFollowUpAt: parsedFollowUpAt },
      });
    }
  }

  if (completeFollowUp) {
    const completedAt = new Date();
    inquiry.followUpCompletedAt = completedAt;
    inquiry.activity.push({
      type: 'reminder',
      message: 'Follow-up marked as completed.',
      ...actorMeta,
      meta: {
        nextFollowUpAt: inquiry.nextFollowUpAt,
        completedAt,
      },
    });
  }

  if (task && typeof task === 'object') {
    const action = toTrimmedString(task.action) || 'create';

    if (action === 'create') {
      const taskTitle = toTrimmedString(task.title);
      const taskDueDate = parseDateValue(task.dueDate);
      const taskAssigneeId = task.assignedTo === '' ? null : task.assignedTo || null;

      if (!taskTitle) {
        res.status(400);
        throw new Error('Task title is required.');
      }

      if (!taskDueDate) {
        res.status(400);
        throw new Error('Task due date is required.');
      }

      let taskAssignee = null;
      if (taskAssigneeId) {
        taskAssignee = await findAssignableUser(taskAssigneeId);
        if (!taskAssignee) {
          res.status(400);
          throw new Error('Task assignee must be an active admin or content manager.');
        }
      }

      inquiry.tasks.push({
        title: taskTitle,
        dueDate: taskDueDate,
        status: 'pending',
        assignedTo: taskAssignee?._id || null,
        ...actorMeta,
      });
      inquiry.activity.push({
        type: 'task',
        message: `Task created: ${taskTitle}.`,
        ...actorMeta,
        meta: {
          title: taskTitle,
          dueDate: taskDueDate,
          assignedTo: taskAssignee?._id || null,
          assignedName: taskAssignee?.name || '',
        },
      });
    }

    if (action === 'update') {
      const taskId = toTrimmedString(task.taskId);
      const nextTaskStatus = toTrimmedString(task.status);
      const taskTitle = toTrimmedString(task.title);
      const taskDueDate = task.dueDate !== undefined ? parseDateValue(task.dueDate) : undefined;
      const taskAssigneeId = task.assignedTo === '' ? null : task.assignedTo;
      const existingTask = inquiry.tasks.id(taskId);

      if (!existingTask) {
        res.status(404);
        throw new Error('Task not found for this inquiry.');
      }

      if (taskTitle) existingTask.title = taskTitle;

      if (taskDueDate !== undefined) {
        if (!taskDueDate) {
          res.status(400);
          throw new Error('Please provide a valid task due date.');
        }
        existingTask.dueDate = taskDueDate;
      }

      if (nextTaskStatus) {
        if (!taskStatuses.includes(nextTaskStatus)) {
          res.status(400);
          throw new Error('Invalid task status.');
        }
        if (existingTask.status !== nextTaskStatus) {
          existingTask.status = nextTaskStatus;
          existingTask.completedAt = nextTaskStatus === 'completed' ? new Date() : null;
        }
      }

      if (task.assignedTo !== undefined) {
        if (!taskAssigneeId) {
          existingTask.assignedTo = null;
        } else {
          const taskAssignee = await findAssignableUser(taskAssigneeId);
          if (!taskAssignee) {
            res.status(400);
            throw new Error('Task assignee must be an active admin or content manager.');
          }
          existingTask.assignedTo = taskAssignee._id;
        }
      }

      inquiry.activity.push({
        type: 'task',
        message: `Task updated: ${existingTask.title}.`,
        ...actorMeta,
        meta: {
          taskId: existingTask._id,
          status: existingTask.status,
          dueDate: existingTask.dueDate,
          assignedTo: existingTask.assignedTo || null,
        },
      });
    }
  }

  if (noteBody) {
    inquiry.notes.push({ body: noteBody, ...actorMeta });
    inquiry.activity.push({
      type: 'note',
      message: 'A follow-up note was added.',
      ...actorMeta,
      meta: { notePreview: noteBody.slice(0, 120) },
    });
    inquiry.adminNotes = noteBody;
  } else if (legacyAdminNotes && legacyAdminNotes !== inquiry.adminNotes) {
    inquiry.notes.push({ body: legacyAdminNotes, ...actorMeta });
    inquiry.activity.push({
      type: 'note',
      message: 'A follow-up note was added.',
      ...actorMeta,
      meta: { notePreview: legacyAdminNotes.slice(0, 120) },
    });
    inquiry.adminNotes = legacyAdminNotes;
  } else if (adminNotes !== undefined && !legacyAdminNotes) {
    inquiry.adminNotes = '';
  }

  if (communicationAction && typeof communicationAction === 'object') {
    const channel = toTrimmedString(communicationAction.channel);
    const actionType = toTrimmedString(communicationAction.actionType);
    const templateId = toTrimmedString(communicationAction.templateId);
    const renderedSubject = toTrimmedString(communicationAction.renderedSubject);
    const renderedBody = toTrimmedString(communicationAction.renderedBody);

    if (!['email', 'whatsapp'].includes(channel)) {
      res.status(400);
      throw new Error('Invalid communication channel.');
    }

    if (!['copied', 'opened', 'sent-manually'].includes(actionType)) {
      res.status(400);
      throw new Error('Invalid communication action type.');
    }

    let template = null;
    if (templateId) {
      template = await InquiryTemplate.findById(templateId);
      if (!template) {
        res.status(400);
        throw new Error('Communication template not found.');
      }
    }

    inquiry.communications.push({
      channel,
      templateId: template?._id || null,
      templateKey: template ? String(template._id) : '',
      templateName: template?.name || toTrimmedString(communicationAction.templateName),
      actionType,
      subject: renderedSubject,
      bodyPreview: renderedBody.slice(0, 240),
      ...actorMeta,
    });

    inquiry.lastContactedAt = new Date();
    inquiry.lastContactChannel = channel;

    inquiry.activity.push({
      type: 'template',
      message: `${formatLabel(channel)} template ${actionType.replace('-', ' ')}${template?.name ? `: ${template.name}` : ''}.`,
      ...actorMeta,
      meta: {
        channel,
        actionType,
        templateId: template?._id || null,
        templateName: template?.name || '',
      },
    });
  }

  inquiry.nextSuggestedAction = deriveNextSuggestedAction({
    ...inquiry.toObject(),
    status: inquiry.status,
  });

  const updatedInquiry = await inquiry.save();
  await updatedInquiry.populate([
    { path: 'assignedTo', select: '_id name email role status' },
    { path: 'tasks.assignedTo', select: '_id name email role status' },
    { path: 'communications.templateId', select: '_id name channel isActive' },
  ]);

  res.json(updatedInquiry);
});

module.exports = {
  createInquiry,
  getInquiries,
  getInquiryMeta,
  getInquiryMetrics,
  getInquiryNotifications,
  getInquiryTemplates,
  getInquiryDashboardAnalytics,
  renderTemplate,
  updateInquiry,
};
