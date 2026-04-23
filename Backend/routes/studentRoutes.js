const express = require('express');
const router = express.Router();
const {
  getStudentPortal,
  getStudentProfile,
  updateStudentProfile,
  getStudentApplications,
  updateStudentApplications,
  getStudentDocuments,
  addStudentDocument,
  updateStudentDocument,
} = require('../controllers/studentController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.use(protect, restrictTo('user'));

router.get('/portal', getStudentPortal);

router
  .route('/profile')
  .get(getStudentProfile)
  .put(updateStudentProfile);

router
  .route('/applications')
  .get(getStudentApplications)
  .put(updateStudentApplications);

router
  .route('/documents')
  .get(getStudentDocuments)
  .post(addStudentDocument);

router
  .route('/documents/:documentId')
  .patch(updateStudentDocument);

module.exports = router;
