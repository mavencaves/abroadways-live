const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getInquiries,
  getInquiryDashboardAnalytics,
  getInquiryMeta,
  getInquiryMetrics,
  getInquiryNotifications,
  getInquiryTemplates,
  updateInquiry,
} = require('../controllers/inquiryController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router
  .route('/')
  .post(createInquiry)
  .get(protect, restrictTo('admin', 'content-manager'), getInquiries);

router
  .route('/meta')
  .get(protect, restrictTo('admin', 'content-manager'), getInquiryMeta);

router
  .route('/metrics')
  .get(protect, restrictTo('admin', 'content-manager'), getInquiryMetrics);

router
  .route('/notifications')
  .get(protect, restrictTo('admin', 'content-manager'), getInquiryNotifications);

router
  .route('/templates')
  .get(protect, restrictTo('admin', 'content-manager'), getInquiryTemplates);

router
  .route('/dashboard-analytics')
  .get(protect, restrictTo('admin', 'content-manager'), getInquiryDashboardAnalytics);

router
  .route('/:id')
  .patch(protect, restrictTo('admin', 'content-manager'), updateInquiry);

module.exports = router;
