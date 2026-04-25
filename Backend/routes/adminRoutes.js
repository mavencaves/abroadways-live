const express = require('express');
const router = express.Router();
const {
  createStaffUser,
  getUsers,
  updateUser,
  updateUserRole,
  updateUserStatus,
  resetUserPassword,
  deleteUser,
  getAdminDashboardOverview,
} = require('../controllers/adminController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.use(protect, restrictTo('admin'));

router.route('/users').post(createStaffUser).get(getUsers);
router.post('/users/staff', createStaffUser);
router.patch('/users/:id/role', updateUserRole);
router.patch('/users/:id/status', updateUserStatus);
router.patch('/users/:id/reset-password', resetUserPassword);
router.route('/users/:id').put(updateUser).delete(deleteUser);
router.route('/dashboard/overview').get(getAdminDashboardOverview);

module.exports = router;
