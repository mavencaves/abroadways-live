const express = require('express');
const router = express.Router();
const {
  getStudentServices,
  getStudentOrders,
  requestStudentService,
  submitStudentPaymentReference,
  getAdminOrders,
  createAdminOrder,
  updateAdminOrder,
  getAdminOrderSummary,
} = require('../controllers/serviceOrderController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/student/services', restrictTo('user'), getStudentServices);
router.get('/student/orders', restrictTo('user'), getStudentOrders);
router.post('/student/orders', restrictTo('user'), requestStudentService);
router.patch('/student/orders/:id/payment', restrictTo('user'), submitStudentPaymentReference);

router.get('/admin/summary', restrictTo('admin', 'content-manager'), getAdminOrderSummary);
router.get('/admin/orders', restrictTo('admin', 'content-manager'), getAdminOrders);
router.post('/admin/orders', restrictTo('admin', 'content-manager'), createAdminOrder);
router.patch('/admin/orders/:id', restrictTo('admin', 'content-manager'), updateAdminOrder);

module.exports = router;
