const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/serviceOrderController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.route('/payment/sslcommerz/success').get(paymentSuccessCallback).post(paymentSuccessCallback);
router.route('/payment/sslcommerz/fail').get(paymentFailCallback).post(paymentFailCallback);
router.route('/payment/sslcommerz/cancel').get(paymentCancelCallback).post(paymentCancelCallback);

router.use(protect);

router.get('/student/services', restrictTo('user'), getStudentServices);
router.get('/student/orders', restrictTo('user'), getStudentOrders);
router.post('/student/orders', restrictTo('user'), requestStudentService);
router.patch('/student/orders/:id/payment', restrictTo('user'), submitStudentPaymentReference);
router.post('/student/orders/:id/pay', restrictTo('user'), initiateStudentGatewayPayment);

router.get('/admin/summary', restrictTo('admin', 'content-manager'), getAdminOrderSummary);
router.get('/admin/orders', restrictTo('admin', 'content-manager'), getAdminOrders);
router.post('/admin/orders', restrictTo('admin', 'content-manager'), createAdminOrder);
router.patch('/admin/orders/:id', restrictTo('admin', 'content-manager'), updateAdminOrder);

module.exports = router;
