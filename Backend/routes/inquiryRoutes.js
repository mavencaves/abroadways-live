const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getInquiries,
  getInquiryMeta,
  getInquiryMetrics,
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
  .route('/:id')
  .patch(protect, restrictTo('admin', 'content-manager'), updateInquiry);

module.exports = router;
