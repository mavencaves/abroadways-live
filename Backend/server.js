// server.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./lib/db');
const { notFound, errorHandler } = require('./middleware/errorHandler');

// Route files
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const adBannerRoutes = require('./routes/adBannerRoutes');
const courseRoutes = require('./routes/courseRoutes');
const examRoutes = require('./routes/examRoutes');
const questionRoutes = require('./routes/questionRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const resultRoutes = require('./routes/resultRoutes');
const reportRoutes = require('./routes/reportRoutes');
const blogRoutes = require('./routes/blogRoutes');
const aboutUsRoutes = require('./routes/aboutUsRoutes');
const eventRoutes = require('./routes/eventRoutes');
const eventBookingRoutes = require('./routes/eventBookingRoutes');
const adminPanelRoutes = require('./routes/adminPanelRoutes');
const chatRoutes = require('./routes/chatRoutes'); 
const inquiryRoutes = require('./routes/inquiryRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const inquiryTemplateRoutes = require('./routes/inquiryTemplateRoutes');
const studentRoutes = require('./routes/studentRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const serviceOrderRoutes = require('./routes/serviceOrderRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
connectDB();
app.set('trust proxy', 1);

const allowedOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`Origin ${origin} is not allowed by CORS`));
  },
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
// Passport-based social auth disabled for now

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/banners', adBannerRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/exams', examRoutes);
app.use('/api/v1/questions', questionRoutes);
app.use('/api/v1/sessions', sessionRoutes);
app.use('/api/v1/results', resultRoutes);
app.use('/api/v1/reports', reportRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/about-us', aboutUsRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/event-bookings', eventBookingRoutes);
app.use('/api/v1/admin-panel', adminPanelRoutes);
app.use('/api/v1/chat', chatRoutes);
app.use('/api/v1/inquiries', inquiryRoutes);
app.use('/api/v1/inquiry-templates', inquiryTemplateRoutes);
app.use('/api/v1/media', mediaRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/appointments', appointmentRoutes);
app.use('/api/v1/service-orders', serviceOrderRoutes);
app.use('/api/v1/notifications', notificationRoutes);

app.get('/', (req, res) => res.send('MAVENCAVE API is running'));

// Custom error handler middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
