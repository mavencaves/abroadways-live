const mongoose = require('mongoose');

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
      enum: ['new', 'contacted', 'closed'],
      default: 'new',
    },
    adminNotes: { type: String, trim: true, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Inquiry', inquirySchema);
