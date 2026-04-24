const mongoose = require('mongoose');

const communicationLogSchema = new mongoose.Schema(
  {
    recipient: {
      type: String,
      required: true,
      trim: true,
    },
    channel: {
      type: String,
      enum: ['email', 'whatsapp'],
      required: true,
    },
    subject: {
      type: String,
      trim: true,
      default: '',
    },
    body: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['sent', 'failed', 'skipped', 'opened', 'copied', 'sent-manually'],
      default: 'sent',
    },
    sentAt: {
      type: Date,
      default: null,
    },
    templateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InquiryTemplate',
      default: null,
    },
    templateName: {
      type: String,
      trim: true,
      default: '',
    },
    relatedInquiry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Inquiry',
      default: null,
    },
    relatedOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ServiceOrder',
      default: null,
    },
    relatedAppointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
      default: null,
    },
    relatedStudentProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      default: null,
    },
    relatedDocumentId: {
      type: String,
      trim: true,
      default: '',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    createdByName: {
      type: String,
      trim: true,
      default: '',
    },
    createdByRole: {
      type: String,
      trim: true,
      default: '',
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

communicationLogSchema.index({ channel: 1, createdAt: -1 });
communicationLogSchema.index({ relatedInquiry: 1, createdAt: -1 });
communicationLogSchema.index({ relatedOrder: 1, createdAt: -1 });
communicationLogSchema.index({ relatedAppointment: 1, createdAt: -1 });
communicationLogSchema.index({ relatedStudentProfile: 1, createdAt: -1 });

module.exports = mongoose.model('CommunicationLog', communicationLogSchema);
