const asyncHandler = require('express-async-handler');
const crypto = require('crypto');
const User = require('../models/userModel');

const COUNTRY_NAME_MAP = {
  'অস্ট্রেলিয়া': 'Australia',
  'জার্মানি': 'Germany',
  'যুক্তরাজ্য': 'United Kingdom',
  'আয়ারল্যান্ড': 'Ireland',
  'কানাডা': 'Canada',
  'যুক্তরাষ্ট্র': 'United States',
  'মার্কিন যুক্তরাষ্ট্র': 'United States',
  'বাংলাদেশ': 'Bangladesh',
  'অনির্ধারিত': 'Unspecified',
};

const STATUS_LABELS = {
  active: 'Active',
  inactive: 'Inactive',
};

const ROLE_TYPE_LABELS = {
  user: 'User',
  'content-manager': 'Content Manager',
  'course-manager': 'Course Manager',
  admin: 'Admin',
};

const USER_PROJECTION = 'name email role country status avatarUrl createdAt updatedAt lastActiveAt';
const ALL_ROLES = ['admin', 'content-manager', 'course-manager', 'user'];
const STAFF_ROLES = ['admin', 'content-manager', 'course-manager'];

const normalizeCountryName = (value) => COUNTRY_NAME_MAP[value] || value || 'Unspecified';

const sanitizeUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  country: user.country,
  status: user.status,
  avatarUrl: user.avatarUrl,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
  lastActiveAt: user.lastActiveAt,
});

const generateTemporaryPassword = () => `Abw-${crypto.randomBytes(4).toString('hex')}!`;

const ensureActiveAdminRemains = async (targetUser, nextRole = targetUser.role, nextStatus = targetUser.status) => {
  const isRemovingAdminAccess =
    targetUser.role === 'admin' && (nextRole !== 'admin' || nextStatus !== 'active');

  if (!isRemovingAdminAccess) {
    return;
  }

  const activeAdminCount = await User.countDocuments({ role: 'admin', status: 'active' });

  if (activeAdminCount <= 1) {
    throw new Error('At least one active admin account must remain.');
  }
};

const toWeekdayLabel = (value) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

// @desc    Create a new staff user
// @route   POST /api/v1/admin/users or /api/v1/admin/users/staff
// @access  Private/Admin
const createStaffUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    temporaryPassword,
    role,
    country,
    avatarUrl,
  } = req.body;

  if (!name || !email || !role) {
    res.status(400);
    throw new Error('Please provide name, email, and staff role.');
  }

  if (!STAFF_ROLES.includes(role)) {
    res.status(400);
    throw new Error('Only admin, content-manager, and course-manager staff accounts can be created here.');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const password = temporaryPassword?.trim() || generateTemporaryPassword();

  if (password.length < 8) {
    res.status(400);
    throw new Error('Temporary password must be at least 8 characters long.');
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
    country,
    status: 'active',
    avatarUrl,
  });

  if (!user) {
    res.status(400);
    throw new Error('Invalid user data');
  }

  res.status(201).json({
    message: `${ROLE_TYPE_LABELS[user.role] || 'Staff'} account created successfully.`,
    temporaryPassword: password,
    user: sanitizeUser(user),
  });
});

// @desc    Get all users
// @route   GET /api/v1/admin/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    q,
    status,
    role,
  } = req.query;

  const pageNumber = Math.max(1, parseInt(page, 10));
  const pageSize = Math.max(1, Math.min(100, parseInt(limit, 10)));
  const skip = (pageNumber - 1) * pageSize;

  const query = {};

  if (status && status !== 'all') {
    query.status = status === 'inactive' ? 'inactive' : 'active';
  }

  if (role && role !== 'all' && ALL_ROLES.includes(role)) {
    query.role = role;
  }

  if (q) {
    const regex = new RegExp(q, 'i');
    query.$or = [{ name: regex }, { email: regex }];
  }

  const [users, total] = await Promise.all([
    User.find(query).select(USER_PROJECTION).sort({ createdAt: -1 }).skip(skip).limit(pageSize),
    User.countDocuments(query),
  ]);

  res.json({
    users,
    meta: {
      total,
      page: pageNumber,
      limit: pageSize,
      totalPages: Math.ceil(total / pageSize),
    },
  });
});

// @desc    Update a user
// @route   PUT /api/v1/admin/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.country = req.body.country || user.country;
  user.status = req.body.status || user.status;
  user.avatarUrl = req.body.avatarUrl ?? user.avatarUrl;

  const updatedUser = await user.save();
  res.json(sanitizeUser(updatedUser));
});

// @desc    Update a user's role
// @route   PATCH /api/v1/admin/users/:id/role
// @access  Private/Admin
const updateUserRole = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const { role } = req.body;

  if (!role || !ALL_ROLES.includes(role)) {
    res.status(400);
    throw new Error('Please provide a valid role.');
  }

  if (req.user._id.toString() === user._id.toString()) {
    res.status(400);
    throw new Error('You cannot change your own role from this screen.');
  }

  res.status(400);
  await ensureActiveAdminRemains(user, role, user.status);
  res.status(200);

  user.role = role;
  const updatedUser = await user.save();

  res.json({
    message: 'User role updated successfully.',
    user: sanitizeUser(updatedUser),
  });
});

// @desc    Activate or deactivate a user
// @route   PATCH /api/v1/admin/users/:id/status
// @access  Private/Admin
const updateUserStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const { status } = req.body;

  if (!['active', 'inactive'].includes(status)) {
    res.status(400);
    throw new Error('Please provide a valid status.');
  }

  if (req.user._id.toString() === user._id.toString() && status === 'inactive') {
    res.status(400);
    throw new Error('You cannot deactivate your own account.');
  }

  res.status(400);
  await ensureActiveAdminRemains(user, user.role, status);
  res.status(200);

  user.status = status;
  const updatedUser = await user.save();

  res.json({
    message: `User ${status === 'active' ? 'activated' : 'deactivated'} successfully.`,
    user: sanitizeUser(updatedUser),
  });
});

// @desc    Reset a user's password to a temporary password
// @route   PATCH /api/v1/admin/users/:id/reset-password
// @access  Private/Admin
const resetUserPassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('+password');

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const temporaryPassword = req.body?.temporaryPassword?.trim() || generateTemporaryPassword();

  if (temporaryPassword.length < 8) {
    res.status(400);
    throw new Error('Temporary password must be at least 8 characters long.');
  }

  user.password = temporaryPassword;
  await user.save();

  res.json({
    message: 'Temporary password reset successfully.',
    temporaryPassword,
    user: sanitizeUser(user),
  });
});

// @desc    Delete a user
// @route   DELETE /api/v1/admin/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (req.user._id.toString() === user._id.toString()) {
    res.status(400);
    throw new Error('You cannot delete your own account.');
  }

  res.status(400);
  await ensureActiveAdminRemains(user, 'removed', 'inactive');
  res.status(200);

  await User.deleteOne({ _id: user._id });
  res.json({ message: 'User removed' });
});

const getAdminDashboardOverview = asyncHandler(async (req, res) => {
  const nonAdminFilter = { role: { $ne: 'admin' } };
  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(now.getDate() - 30);

  const [
    totalUsers,
    newUsersLast30,
    activeUsers,
    managerUsers,
    trendData,
    countryData,
    recentUsers,
  ] = await Promise.all([
    User.countDocuments(nonAdminFilter),
    User.countDocuments({ ...nonAdminFilter, createdAt: { $gte: thirtyDaysAgo } }),
    User.countDocuments({ ...nonAdminFilter, status: 'active' }),
    User.countDocuments({ role: { $in: ['content-manager', 'course-manager'] } }),
    User.aggregate([
      { $match: { ...nonAdminFilter, createdAt: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]),
    User.aggregate([
      { $match: nonAdminFilter },
      {
        $group: {
          _id: { $ifNull: ['$country', 'Unspecified'] },
          value: { $sum: 1 },
        },
      },
      { $sort: { value: -1 } },
      { $limit: 6 },
    ]),
    User.find(nonAdminFilter)
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email status role createdAt'),
  ]);

  const visitors = trendData.map((item) => ({
    day: toWeekdayLabel(item._id),
    count: item.count,
  }));

  const countries = countryData.map((item) => ({
    name: normalizeCountryName(item._id),
    value: item.value,
  }));

  const updates = recentUsers.map((user, index) => ({
    id: index + 1,
    type: ROLE_TYPE_LABELS[user.role] || 'User',
    title: user.name,
    date: user.createdAt.toISOString(),
    status: STATUS_LABELS[user.status] || 'Unknown',
  }));

  res.json({
    cards: {
      totalUsers,
      newUsers: newUsersLast30,
      activeUsers,
      rewardedUsers: managerUsers,
    },
    visitors,
    countries,
    updates,
  });
});

module.exports = {
  createStaffUser,
  getUsers,
  updateUser,
  updateUserRole,
  updateUserStatus,
  resetUserPassword,
  deleteUser,
  getAdminDashboardOverview,
};
