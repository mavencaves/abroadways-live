const mongoose = require('mongoose');

const studentDocumentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    type: { type: String, trim: true, default: '' },
    originalFileName: { type: String, trim: true, default: '' },
    fileName: { type: String, trim: true, default: '' },
    fileUrl: { type: String, trim: true, default: '' },
    storagePublicId: { type: String, trim: true, default: '' },
    storageFolder: { type: String, trim: true, default: '' },
    resourceType: { type: String, trim: true, default: '' },
    mimeType: { type: String, trim: true, default: '' },
    bytes: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['uploaded', 'under-review', 'approved', 'rejected', 'needs-resubmission'],
      default: 'uploaded',
    },
    notes: { type: String, trim: true, default: '' },
    reviewNotes: { type: String, trim: true, default: '' },
    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    reviewedAt: { type: Date, default: null },
    uploadedAt: { type: Date, default: null },
  },
  { _id: true, timestamps: true }
);

const studentProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    linkedInquiry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Inquiry',
      default: null,
    },
    fullName: { type: String, trim: true, default: '' },
    email: { type: String, trim: true, lowercase: true, default: '' },
    phone: { type: String, trim: true, default: '' },
    destinationInterests: { type: [String], default: [] },
    preferredCountry: { type: String, trim: true, default: '' },
    intake: { type: String, trim: true, default: '' },
    qualification: { type: String, trim: true, default: '' },
    examInterest: { type: String, trim: true, default: '' },
    budget: { type: String, trim: true, default: '' },
    academicBackground: { type: String, trim: true, default: '' },
    notes: { type: String, trim: true, default: '' },
    applicationStage: {
      type: String,
      enum: [
        'profile-submitted',
        'documents-pending',
        'consultation-booked',
        'shortlist-in-progress',
        'applied',
        'offer-received',
        'visa-preparation',
      ],
      default: 'profile-submitted',
    },
    documents: { type: [studentDocumentSchema], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
