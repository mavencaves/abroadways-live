const asyncHandler = require('express-async-handler');
const InquiryTemplate = require('../models/inquiryTemplateModel');

const defaultVariables = ['{{name}}', '{{destination}}', '{{examInterest}}', '{{intake}}', '{{assignedStaff}}'];

const getTemplates = asyncHandler(async (req, res) => {
  const templates = await InquiryTemplate.find({}).sort({ updatedAt: -1 });
  res.json(templates);
});

const createTemplate = asyncHandler(async (req, res) => {
  const {
    name,
    channel,
    subject = '',
    body,
    variables = defaultVariables,
    isActive = true,
  } = req.body;

  if (!name || !String(name).trim()) {
    res.status(400);
    throw new Error('Template name is required.');
  }

  if (!['email', 'whatsapp'].includes(channel)) {
    res.status(400);
    throw new Error('Channel must be email or whatsapp.');
  }

  if (!body || !String(body).trim()) {
    res.status(400);
    throw new Error('Template body is required.');
  }

  const template = await InquiryTemplate.create({
    name: String(name).trim(),
    channel,
    subject: channel === 'email' ? String(subject || '').trim() : '',
    body: String(body).trim(),
    variables: Array.isArray(variables) && variables.length ? variables : defaultVariables,
    isActive: Boolean(isActive),
  });

  res.status(201).json(template);
});

const updateTemplate = asyncHandler(async (req, res) => {
  const template = await InquiryTemplate.findById(req.params.id);

  if (!template) {
    res.status(404);
    throw new Error('Template not found.');
  }

  const { name, channel, subject, body, variables, isActive } = req.body;

  if (name !== undefined) template.name = String(name).trim();
  if (channel !== undefined) {
    if (!['email', 'whatsapp'].includes(channel)) {
      res.status(400);
      throw new Error('Channel must be email or whatsapp.');
    }
    template.channel = channel;
  }
  if (subject !== undefined) template.subject = template.channel === 'email' ? String(subject || '').trim() : '';
  if (body !== undefined) template.body = String(body).trim();
  if (variables !== undefined) template.variables = Array.isArray(variables) && variables.length ? variables : defaultVariables;
  if (isActive !== undefined) template.isActive = Boolean(isActive);

  const updated = await template.save();
  res.json(updated);
});

const deleteTemplate = asyncHandler(async (req, res) => {
  const template = await InquiryTemplate.findById(req.params.id);

  if (!template) {
    res.status(404);
    throw new Error('Template not found.');
  }

  await template.deleteOne();
  res.json({ message: 'Template deleted successfully.' });
});

module.exports = {
  getTemplates,
  createTemplate,
  updateTemplate,
  deleteTemplate,
};
