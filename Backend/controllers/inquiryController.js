const asyncHandler = require('express-async-handler');
const Inquiry = require('../models/inquiryModel');

const createInquiry = asyncHandler(async (req, res) => {
  const {
    name,
    email = '',
    phone = '',
    source = 'other',
    destination = '',
    qualification = '',
    intake = '',
    examInterest = '',
    message = '',
  } = req.body;

  if (!name || !name.trim()) {
    res.status(400);
    throw new Error('Please provide your name.');
  }

  if (!email.trim() && !phone.trim()) {
    res.status(400);
    throw new Error('Please provide either an email address or phone number.');
  }

  const inquiry = await Inquiry.create({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    source,
    destination: destination.trim(),
    qualification: qualification.trim(),
    intake: intake.trim(),
    examInterest: examInterest.trim(),
    message: message.trim(),
  });

  res.status(201).json({
    _id: inquiry._id,
    message: 'Your inquiry has been received successfully.',
  });
});

const getInquiries = asyncHandler(async (req, res) => {
  const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
  res.json(inquiries);
});

const updateInquiry = asyncHandler(async (req, res) => {
  const { status, adminNotes } = req.body;
  const inquiry = await Inquiry.findById(req.params.id);

  if (!inquiry) {
    res.status(404);
    throw new Error('Inquiry not found');
  }

  if (status && ['new', 'contacted', 'closed'].includes(status)) {
    inquiry.status = status;
  }

  if (adminNotes !== undefined) {
    inquiry.adminNotes = adminNotes;
  }

  const updatedInquiry = await inquiry.save();
  res.json(updatedInquiry);
});

module.exports = { createInquiry, getInquiries, updateInquiry };
