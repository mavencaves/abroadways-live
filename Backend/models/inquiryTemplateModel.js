const mongoose = require('mongoose');

const inquiryTemplateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    channel: {
      type: String,
      enum: ['email', 'whatsapp'],
      required: true,
    },
    subject: { type: String, trim: true, default: '' },
    body: { type: String, required: true, trim: true },
    variables: {
      type: [String],
      default: ['{{name}}', '{{destination}}', '{{examInterest}}', '{{intake}}', '{{assignedStaff}}'],
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('InquiryTemplate', inquiryTemplateSchema);
