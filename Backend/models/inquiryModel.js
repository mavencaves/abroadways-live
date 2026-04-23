const mongoose = require('mongoose');

const inquiryNoteSchema = new mongoose.Schema(
  {
    body: { type: String, required: true, trim: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    createdByName: { type: String, trim: true, default: '' },
    createdByRole: { type: String, trim: true, default: '' },
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);

const inquiryActivitySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['created', 'status', 'assignment', 'note', 'reminder', 'task', 'template'],
      required: true,
    },
    message: { type: String, required: true, trim: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    createdByName: { type: String, trim: true, default: '' },
    createdByRole: { type: String, trim: true, default: '' },
    meta: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);

const inquiryTaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    dueDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'cancelled'],
      default: 'pending',
    },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    completedAt: { type: Date, default: null },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    createdByName: { type: String, trim: true, default: '' },
    createdByRole: { type: String, trim: true, default: '' },
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: true } }
);

const inquiryCommunicationSchema = new mongoose.Schema(
  {
    channel: {
      type: String,
      enum: ['email', 'whatsapp'],
      required: true,
    },
    templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'InquiryTemplate', default: null },
    templateKey: { type: String, trim: true, default: '' },
    templateName: { type: String, trim: true, default: '' },
    actionType: {
      type: String,
      enum: ['copied', 'opened', 'sent-manually'],
      required: true,
    },
    subject: { type: String, trim: true, default: '' },
    bodyPreview: { type: String, trim: true, default: '' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    createdByName: { type: String, trim: true, default: '' },
    createdByRole: { type: String, trim: true, default: '' },
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true, default: '' },
    phone: { type: String, trim: true, default: '' },
    source: {
      type: String,
      enum: ['homepage-lead', 'homepage-consultation', 'contact-page', 'other'],
      default: 'other',
    },
    destination: { type: String, trim: true, default: '' },
    qualification: { type: String, trim: true, default: '' },
    intake: { type: String, trim: true, default: '' },
    examInterest: { type: String, trim: true, default: '' },
    message: { type: String, trim: true, default: '' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'follow-up', 'qualified', 'closed', 'lost'],
      default: 'new',
    },
    lastContactedAt: { type: Date, default: null },
    lastContactChannel: {
      type: String,
      enum: ['email', 'whatsapp', 'call', 'manual', 'none'],
      default: 'none',
    },
    nextSuggestedAction: { type: String, trim: true, default: '' },
    nextFollowUpAt: { type: Date, default: null },
    followUpCompletedAt: { type: Date, default: null },
    adminNotes: { type: String, trim: true, default: '' },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    notes: { type: [inquiryNoteSchema], default: [] },
    tasks: { type: [inquiryTaskSchema], default: [] },
    communications: { type: [inquiryCommunicationSchema], default: [] },
    activity: { type: [inquiryActivitySchema], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Inquiry', inquirySchema);
