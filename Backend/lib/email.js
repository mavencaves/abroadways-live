const nodemailer = require('nodemailer');

const isEmailConfigured = () =>
  Boolean(
    String(process.env.SMTP_HOST || '').trim() &&
      String(process.env.SMTP_PORT || '').trim() &&
      String(process.env.SMTP_USER || '').trim() &&
      String(process.env.SMTP_PASS || '').trim() &&
      String(process.env.SMTP_FROM || '').trim()
  );

let transporter = null;

const getTransporter = () => {
  if (!isEmailConfigured()) {
    const error = new Error('SMTP is not configured.');
    error.statusCode = 500;
    throw error;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: String(process.env.SMTP_HOST || '').trim(),
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: String(process.env.SMTP_USER || '').trim(),
        pass: String(process.env.SMTP_PASS || '').trim(),
      },
    });
  }

  return transporter;
};

const sendEmail = async ({ to, subject, text, html }) => {
  const mailer = getTransporter();
  return mailer.sendMail({
    from: String(process.env.SMTP_FROM || '').trim(),
    to,
    subject,
    text,
    html,
  });
};

module.exports = {
  isEmailConfigured,
  sendEmail,
};
