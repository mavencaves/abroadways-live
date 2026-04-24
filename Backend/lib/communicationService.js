const CommunicationLog = require('../models/communicationLogModel');
const { isEmailConfigured, sendEmail } = require('./email');

const buildActorMeta = (user) => ({
  createdBy: user?._id || null,
  createdByName: user?.name || '',
  createdByRole: user?.role || '',
});

const renderTemplateContent = (template, replacements = {}) => {
  const fill = (text) =>
    String(text || '').replace(/\{\{(\w+)\}\}/g, (_, key) => replacements[key] || '');

  return {
    subject: fill(template?.subject || ''),
    body: fill(template?.body || ''),
  };
};

const createCommunicationLog = async ({
  recipient,
  channel,
  subject = '',
  body = '',
  status = 'sent',
  sentAt = null,
  templateId = null,
  templateName = '',
  relatedInquiry = null,
  relatedOrder = null,
  relatedAppointment = null,
  relatedStudentProfile = null,
  relatedDocumentId = '',
  actor = null,
  metadata = null,
}) => {
  return CommunicationLog.create({
    recipient,
    channel,
    subject,
    body,
    status,
    sentAt,
    templateId,
    templateName,
    relatedInquiry,
    relatedOrder,
    relatedAppointment,
    relatedStudentProfile,
    relatedDocumentId,
    ...buildActorMeta(actor),
    metadata,
  });
};

const sendEmailWithLogging = async ({
  to,
  subject,
  body,
  templateId = null,
  templateName = '',
  relatedInquiry = null,
  relatedOrder = null,
  relatedAppointment = null,
  relatedStudentProfile = null,
  relatedDocumentId = '',
  actor = null,
  metadata = null,
  failSilently = true,
}) => {
  if (!to || !String(to).trim()) {
    return {
      ok: false,
      status: 'failed',
      message: 'Recipient email is missing.',
    };
  }

  if (!isEmailConfigured()) {
    const message = 'SMTP is not configured.';
    await createCommunicationLog({
      recipient: to,
      channel: 'email',
      subject,
      body,
      status: 'skipped',
      templateId,
      templateName,
      relatedInquiry,
      relatedOrder,
      relatedAppointment,
      relatedStudentProfile,
      relatedDocumentId,
      actor,
      metadata: {
        ...metadata,
        reason: message,
      },
    });

    if (!failSilently) {
      const error = new Error(message);
      error.statusCode = 503;
      throw error;
    }

    return {
      ok: false,
      status: 'skipped',
      message,
    };
  }

  try {
    const result = await sendEmail({
      to,
      subject,
      text: body,
      html: body.replace(/\n/g, '<br />'),
    });

    await createCommunicationLog({
      recipient: to,
      channel: 'email',
      subject,
      body,
      status: 'sent',
      sentAt: new Date(),
      templateId,
      templateName,
      relatedInquiry,
      relatedOrder,
      relatedAppointment,
      relatedStudentProfile,
      relatedDocumentId,
      actor,
      metadata: {
        ...metadata,
        messageId: result?.messageId || '',
      },
    });

    return {
      ok: true,
      status: 'sent',
      result,
    };
  } catch (error) {
    await createCommunicationLog({
      recipient: to,
      channel: 'email',
      subject,
      body,
      status: 'failed',
      templateId,
      templateName,
      relatedInquiry,
      relatedOrder,
      relatedAppointment,
      relatedStudentProfile,
      relatedDocumentId,
      actor,
      metadata: {
        ...metadata,
        error: error.message || 'Email delivery failed.',
      },
    });

    if (!failSilently) {
      throw error;
    }

    return {
      ok: false,
      status: 'failed',
      message: error.message || 'Email delivery failed.',
    };
  }
};

const logWhatsAppAction = async ({
  recipient,
  body,
  status = 'opened',
  templateId = null,
  templateName = '',
  relatedInquiry = null,
  relatedOrder = null,
  relatedAppointment = null,
  relatedStudentProfile = null,
  relatedDocumentId = '',
  actor = null,
  metadata = null,
}) =>
  createCommunicationLog({
    recipient,
    channel: 'whatsapp',
    subject: '',
    body,
    status,
    sentAt: status === 'sent-manually' ? new Date() : null,
    templateId,
    templateName,
    relatedInquiry,
    relatedOrder,
    relatedAppointment,
    relatedStudentProfile,
    relatedDocumentId,
    actor,
    metadata,
  });

module.exports = {
  buildActorMeta,
  renderTemplateContent,
  createCommunicationLog,
  sendEmailWithLogging,
  logWhatsAppAction,
  isEmailConfigured,
};
