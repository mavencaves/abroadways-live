const express = require('express');
const router = express.Router();
const {
  getStudentAppointments,
  getStudentAppointmentSlots,
  createStudentAppointment,
  cancelStudentAppointment,
  getAdminAppointments,
  updateAdminAppointment,
  getAdminAppointmentSummary,
} = require('../controllers/appointmentController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/student/slots', restrictTo('user'), getStudentAppointmentSlots);
router.get('/student', restrictTo('user'), getStudentAppointments);
router.post('/student', restrictTo('user'), createStudentAppointment);
router.patch('/student/:id/cancel', restrictTo('user'), cancelStudentAppointment);

router.get('/admin/summary', restrictTo('admin', 'content-manager'), getAdminAppointmentSummary);
router.get('/admin', restrictTo('admin', 'content-manager'), getAdminAppointments);
router.patch('/admin/:id', restrictTo('admin', 'content-manager'), updateAdminAppointment);

module.exports = router;
