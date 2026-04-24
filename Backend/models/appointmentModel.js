const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      required: true,
    },
    inquiryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Inquiry',
      default: null,
    },
    assignedStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['online', 'office'],
      default: 'online',
    },
    status: {
      type: String,
      enum: ['requested', 'confirmed', 'completed', 'cancelled', 'no-show'],
      default: 'requested',
    },
    notes: {
      type: String,
      trim: true,
      default: '',
    },
  },
  { timestamps: true }
);

appointmentSchema.index({ assignedStaff: 1, date: 1, time: 1, status: 1 });
appointmentSchema.index({ studentId: 1, date: 1, time: 1, status: 1 });

module.exports = mongoose.model('Appointment', appointmentSchema);
