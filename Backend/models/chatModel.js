const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ['user', 'assistant'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    topic: {
      type: String,
      trim: true,
      default: '',
    },
    riskLevel: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'low',
    },
  },
  { _id: false }
);

const chatContextSnapshotSchema = new mongoose.Schema(
  {
    preferredCountry: { type: String, trim: true, default: '' },
    qualification: { type: String, trim: true, default: '' },
    examInterest: { type: String, trim: true, default: '' },
    intake: { type: String, trim: true, default: '' },
    applicationStage: { type: String, trim: true, default: '' },
    documentStatusSummary: { type: String, trim: true, default: '' },
    paymentStatusSummary: { type: String, trim: true, default: '' },
    appointmentStatusSummary: { type: String, trim: true, default: '' },
  },
  { _id: false }
);

const chatSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    assistantMode: {
      type: String,
      enum: ['general', 'student-portal'],
      default: 'general',
    },
    topic: {
      type: String,
      trim: true,
      default: 'general-guidance',
    },
    riskLevel: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'low',
    },
    needsReview: {
      type: Boolean,
      default: false,
    },
    latestUserPrompt: {
      type: String,
      trim: true,
      default: '',
    },
    latestAssistantReply: {
      type: String,
      trim: true,
      default: '',
    },
    lastMessageAt: {
      type: Date,
      default: Date.now,
    },
    contextSnapshot: {
      type: chatContextSnapshotSchema,
      default: () => ({}),
    },
    messages: {
      type: [chatMessageSchema],
      default: [],
    },
  },
  { timestamps: true }
);

chatSessionSchema.index({ user: 1, updatedAt: -1 });
chatSessionSchema.index({ assistantMode: 1, updatedAt: -1 });
chatSessionSchema.index({ needsReview: 1, riskLevel: 1, updatedAt: -1 });

const ChatSession = mongoose.model('ChatSession', chatSessionSchema);

module.exports = ChatSession;
