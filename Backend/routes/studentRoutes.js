const express = require('express');
const multer = require('multer');
const router = express.Router();
const {
  getStudentPortal,
  getStudentProfile,
  updateStudentProfile,
  getStudentApplications,
  updateStudentApplications,
  getStudentDocuments,
  addStudentDocument,
  resubmitStudentDocument,
  updateStudentDocument,
  listAllStudentDocuments,
  reviewStudentDocument,
} = require('../controllers/studentController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const allowedDocumentMimeTypes = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (!allowedDocumentMimeTypes.has(file.mimetype)) {
      cb(new Error('Only PDF, image, Word, Excel, and text documents are supported.'));
      return;
    }
    cb(null, true);
  },
});

router.use(protect);

router.get('/admin/documents', restrictTo('admin', 'content-manager'), listAllStudentDocuments);
router.patch('/admin/documents/:profileId/:documentId/review', restrictTo('admin', 'content-manager'), reviewStudentDocument);

router.use(restrictTo('user'));

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
  .post(upload.single('file'), addStudentDocument);

router.post('/documents/:documentId/resubmit', upload.single('file'), resubmitStudentDocument);

router
  .route('/documents/:documentId')
  .patch(updateStudentDocument);

module.exports = router;
