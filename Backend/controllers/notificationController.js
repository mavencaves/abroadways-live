const asyncHandler = require('express-async-handler');
const Notification = require('../models/notificationModel');
const Inquiry = require('../models/inquiryModel');
const { createNotification, ADMIN_NOTIFICATION_ROLES } = require('../lib/notifications');

const formatLabel = (value) =>
  String(value || '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const ensureDerivedNotificationsForUser = async (user) => {
  if (!user || !ADMIN_NOTIFICATION_ROLES.includes(user.role)) return;

  const overdueInquiries = await Inquiry.find({
    assignedTo: user._id,
    nextFollowUpAt: { $ne: null, $lte: new Date() },
    status: { $nin: ['closed', 'lost'] },
  })
    .select('_id name status destination nextFollowUpAt')
    .lean();

  await Promise.all(
    overdueInquiries.map((inquiry) =>
      createNotification({
        recipient: user._id,
        type: 'follow-up-overdue',
        title: 'Follow-up overdue',
        message: `${inquiry.name} is waiting on an overdue follow-up${inquiry.destination ? ` for ${inquiry.destination}` : ''}.`,
        link: '/dashboard/inquiries',
        priority: 'high',
        eventKey: `inquiry:${inquiry._id}:follow-up-overdue:${new Date(inquiry.nextFollowUpAt).toISOString()}`,
        metadata: {
          inquiryId: inquiry._id,
          status: inquiry.status,
        },
      })
    )
  );
};

const listNotifications = asyncHandler(async (req, res) => {
  await ensureDerivedNotificationsForUser(req.user);

  const read = String(req.query.read || 'all').trim();
  const priority = String(req.query.priority || '').trim();
  const limit = Math.min(Math.max(Number(req.query.limit || 50), 1), 100);

  const filter = { recipient: req.user._id };
  if (read === 'read') filter.read = true;
  if (read === 'unread') filter.read = false;
  if (priority) filter.priority = priority;

  const [items, unreadCount, highPriorityUnreadCount] = await Promise.all([
    Notification.find(filter).sort({ createdAt: -1 }).limit(limit).lean(),
    Notification.countDocuments({ recipient: req.user._id, read: false }),
    Notification.countDocuments({ recipient: req.user._id, read: false, priority: 'high' }),
  ]);

  res.json({
    items,
    unreadCount,
    highPriorityUnreadCount,
    filters: {
      read,
      priority: priority || 'all',
      limit,
    },
  });
});

const markNotificationRead = asyncHandler(async (req, res) => {
  const notification = await Notification.findOne({
    _id: req.params.id,
    recipient: req.user._id,
  });

  if (!notification) {
    res.status(404);
    throw new Error('Notification not found.');
  }

  notification.read = true;
  notification.readAt = new Date();
  await notification.save();

  res.json(notification);
});

const markAllNotificationsRead = asyncHandler(async (req, res) => {
  const result = await Notification.updateMany(
    {
      recipient: req.user._id,
      read: false,
    },
    {
      $set: {
        read: true,
        readAt: new Date(),
      },
    }
  );

  res.json({
    message: 'Notifications marked as read.',
    updatedCount: result.modifiedCount || 0,
  });
});

module.exports = {
  listNotifications,
  markNotificationRead,
  markAllNotificationsRead,
  formatLabel,
};
