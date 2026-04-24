const mongoose = require('mongoose');

const serviceOrderSchema = new mongoose.Schema(
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
    appointmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
      default: null,
    },
    serviceType: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      trim: true,
      default: 'BDT',
    },
    status: {
      type: String,
      enum: ['draft', 'pending-payment', 'paid', 'cancelled', 'refunded'],
      default: 'draft',
    },
    paymentMethod: {
      type: String,
      trim: true,
      default: '',
    },
    transactionReference: {
      type: String,
      trim: true,
      default: '',
    },
    adminNotes: {
      type: String,
      trim: true,
      default: '',
    },
  },
  { timestamps: true }
);

serviceOrderSchema.index({ studentId: 1, status: 1, createdAt: -1 });
serviceOrderSchema.index({ serviceType: 1, status: 1, createdAt: -1 });

module.exports = mongoose.model('ServiceOrder', serviceOrderSchema);
