const Notification = require('../models/notificationModel');
const User = require('../models/userModel');
const StudentProfile = require('../models/studentProfileModel');

const ADMIN_NOTIFICATION_ROLES = ['admin', 'content-manager'];

const uniqueUserIds = (values = []) =>
  [...new Set(values.map((value) => String(value || '').trim()).filter(Boolean))];

const createNotification = async ({
  recipient,
  type,
  title,
  message,
  link = '',
  priority = 'medium',
  eventKey = '',
  metadata = null,
}) => {
  const recipientId = String(recipient || '').trim();
  if (!recipientId || !type || !title || !message) return null;

  if (eventKey) {
    const existing = await Notification.findOne({ recipient: recipientId, eventKey });
    if (existing) {
      return existing;
    }
  }

  return Notification.create({
    recipient: recipientId,
    type,
    title,
    message,
    link,
    priority,
    eventKey,
    metadata,
  });
};

const notifyUsers = async (recipients, payload) => {
  const userIds = uniqueUserIds(recipients);
  if (!userIds.length) return [];

  const notifications = await Promise.all(
    userIds.map((recipient) =>
      createNotification({
        ...payload,
        recipient,
      })
    )
  );

  return notifications.filter(Boolean);
};

const getActiveAdminRecipients = async () => {
  const admins = await User.find({
    role: { $in: ADMIN_NOTIFICATION_ROLES },
    status: 'active',
  })
    .select('_id')
    .lean();

  return admins.map((item) => item._id);
};

const notifyAdmins = async (payload) => {
  const recipients = await getActiveAdminRecipients();
  return notifyUsers(recipients, payload);
};

const getStudentUserId = async (profileOrId) => {
  if (!profileOrId) return null;
  if (typeof profileOrId === 'object' && profileOrId.user) {
    return profileOrId.user._id || profileOrId.user;
  }

  const profile = await StudentProfile.findById(profileOrId).select('user').lean();
  return profile?.user || null;
};

const notifyStudentProfile = async (profileOrId, payload) => {
  const userId = await getStudentUserId(profileOrId);
  if (!userId) return null;
  return createNotification({
    ...payload,
    recipient: userId,
  });
};

module.exports = {
  ADMIN_NOTIFICATION_ROLES,
  createNotification,
  notifyUsers,
  notifyAdmins,
  notifyStudentProfile,
  getActiveAdminRecipients,
};
