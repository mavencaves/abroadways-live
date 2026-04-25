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
    productCategory: {
      type: String,
      trim: true,
      default: '',
    },
    productExamSlug: {
      type: String,
      trim: true,
      default: '',
    },
    productTestSetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TestSet',
      default: null,
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
    paymentGateway: {
      type: String,
      trim: true,
      default: 'manual',
    },
    gatewaySessionKey: {
      type: String,
      trim: true,
      default: '',
    },
    gatewayValidationId: {
      type: String,
      trim: true,
      default: '',
    },
    gatewayTransactionId: {
      type: String,
      trim: true,
      default: '',
    },
    paymentCompletedAt: {
      type: Date,
      default: null,
    },
    paymentLogs: [
      {
        gateway: {
          type: String,
          trim: true,
          default: 'manual',
        },
        status: {
          type: String,
          trim: true,
          default: 'initiated',
        },
        message: {
          type: String,
          trim: true,
          default: '',
        },
        amount: {
          type: Number,
          default: 0,
        },
        currency: {
          type: String,
          trim: true,
          default: 'BDT',
        },
        transactionReference: {
          type: String,
          trim: true,
          default: '',
        },
        payload: {
          type: mongoose.Schema.Types.Mixed,
          default: null,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

serviceOrderSchema.index({ studentId: 1, status: 1, createdAt: -1 });
serviceOrderSchema.index({ serviceType: 1, status: 1, createdAt: -1 });

module.exports = mongoose.model('ServiceOrder', serviceOrderSchema);
