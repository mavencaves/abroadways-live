const express = require('express');
const router = express.Router();
const {
  getTemplates,
  createTemplate,
  updateTemplate,
  deleteTemplate,
} = require('../controllers/inquiryTemplateController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(protect, restrictTo('admin', 'content-manager'), getTemplates)
  .post(protect, restrictTo('admin', 'content-manager'), createTemplate);

router
  .route('/:id')
  .put(protect, restrictTo('admin', 'content-manager'), updateTemplate)
  .delete(protect, restrictTo('admin', 'content-manager'), deleteTemplate);

module.exports = router;
