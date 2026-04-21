const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries, updateInquiry } = require('../controllers/inquiryController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router
  .route('/')
  .post(createInquiry)
  .get(protect, restrictTo('admin', 'content-manager'), getInquiries);

router
  .route('/:id')
  .patch(protect, restrictTo('admin', 'content-manager'), updateInquiry);

module.exports = router;
