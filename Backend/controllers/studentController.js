const asyncHandler = require('express-async-handler');
const StudentProfile = require('../models/studentProfileModel');
const Inquiry = require('../models/inquiryModel');

const applicationStages = [
  'profile-submitted',
  'documents-pending',
  'consultation-booked',
  'shortlist-in-progress',
  'applied',
  'offer-received',
  'visa-preparation',
];

const documentStatuses = ['pending-upload', 'submitted', 'under-review', 'approved', 'rejected'];

const computeProfileCompleteness = (profile) => {
  const checks = [
    Boolean(profile.fullName),
    Boolean(profile.email),
    Boolean(profile.phone),
    Array.isArray(profile.destinationInterests) && profile.destinationInterests.length > 0,
    Boolean(profile.preferredCountry),
    Boolean(profile.intake),
    Boolean(profile.qualification),
    Boolean(profile.examInterest),
    Boolean(profile.budget),
    Boolean(profile.academicBackground),
  ];

  const completed = checks.filter(Boolean).length;
  return Math.round((completed / checks.length) * 100);
};

const formatApplicationStage = (value) =>
  String(value || '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const buildPendingActions = (profile, inquiry) => {
  const actions = [];

  if (!profile.phone) actions.push('Add your phone number to complete your profile.');
  if (!profile.preferredCountry) actions.push('Choose your preferred study destination.');
  if (!profile.academicBackground) actions.push('Add your academic background for counseling readiness.');
  if (!profile.documents.length) actions.push('Add your first document record to start your vault.');
  if (profile.documents.some((doc) => ['pending-upload', 'rejected'].includes(doc.status))) {
    actions.push('Review your document vault for pending or rejected files.');
  }
  if (inquiry?.nextFollowUpAt) {
    actions.push(`Prepare for your upcoming follow-up on ${new Date(inquiry.nextFollowUpAt).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })}.`);
  }

  return actions.slice(0, 5);
};

const syncProfileFromInquiry = (profile, inquiry) => {
  if (!inquiry) return false;

  let touched = false;

  const syncField = (field, incoming) => {
    if (!profile[field] && incoming) {
      profile[field] = incoming;
      touched = true;
    }
  };

  syncField('phone', inquiry.phone);
  syncField('preferredCountry', inquiry.destination);
  syncField('intake', inquiry.intake);
  syncField('qualification', inquiry.qualification);
  syncField('examInterest', inquiry.examInterest);

  if ((!profile.destinationInterests || profile.destinationInterests.length === 0) && inquiry.destination) {
    profile.destinationInterests = [inquiry.destination];
    touched = true;
  }

  if (!profile.linkedInquiry) {
    profile.linkedInquiry = inquiry._id;
    touched = true;
  }

  return touched;
};

const ensureStudentProfile = async (user) => {
  let profile = await StudentProfile.findOne({ user: user._id }).populate({
    path: 'linkedInquiry',
    populate: { path: 'assignedTo', select: '_id name role' },
  });

  if (!profile) {
    profile = await StudentProfile.create({
      user: user._id,
      fullName: user.name || '',
      email: user.email || '',
    });
    profile = await StudentProfile.findById(profile._id).populate({
      path: 'linkedInquiry',
      populate: { path: 'assignedTo', select: '_id name role' },
    });
  }

  if (!profile.fullName && user.name) profile.fullName = user.name;
  if (!profile.email && user.email) profile.email = user.email;

  const inquiryFilters = [];
  if (user.email) inquiryFilters.push({ email: user.email });
  if (profile.phone) inquiryFilters.push({ phone: profile.phone });

  const latestInquiry = inquiryFilters.length
    ? await Inquiry.findOne({ $or: inquiryFilters })
        .populate('assignedTo', '_id name role')
        .sort({ createdAt: -1 })
    : null;

  const touched = syncProfileFromInquiry(profile, latestInquiry);

  if (profile.isModified() || touched) {
    await profile.save();
    await profile.populate({
      path: 'linkedInquiry',
      populate: { path: 'assignedTo', select: '_id name role' },
    });
  }

  return profile;
};

const serializePortalData = (profile) => {
  const inquiry = profile.linkedInquiry || null;
  const completeness = computeProfileCompleteness(profile);

  return {
    profile,
    profileCompleteness: completeness,
    application: {
      currentStage: profile.applicationStage,
      currentStageLabel: formatApplicationStage(profile.applicationStage),
      linkedInquiryStatus: inquiry?.status || '',
      linkedInquiryId: inquiry?._id || null,
    },
    pendingActions: buildPendingActions(profile, inquiry),
    upcoming: {
      followUpAt: inquiry?.nextFollowUpAt || null,
      consultationNote: inquiry?.nextSuggestedAction || '',
      assignedStaff: inquiry?.assignedTo
        ? {
            _id: inquiry.assignedTo._id,
            name: inquiry.assignedTo.name,
            role: inquiry.assignedTo.role,
          }
        : null,
    },
  };
};

const getStudentPortal = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  await profile.populate('linkedInquiry');
  res.json(serializePortalData(profile));
});

const getStudentProfile = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  await profile.populate('linkedInquiry');
  res.json(profile);
});

const updateStudentProfile = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const {
    fullName,
    phone,
    destinationInterests,
    preferredCountry,
    intake,
    qualification,
    examInterest,
    budget,
    academicBackground,
    notes,
  } = req.body;

  if (fullName !== undefined) profile.fullName = String(fullName).trim();
  if (phone !== undefined) profile.phone = String(phone).trim();
  if (Array.isArray(destinationInterests)) {
    profile.destinationInterests = destinationInterests
      .map((item) => String(item).trim())
      .filter(Boolean);
  }
  if (preferredCountry !== undefined) profile.preferredCountry = String(preferredCountry).trim();
  if (intake !== undefined) profile.intake = String(intake).trim();
  if (qualification !== undefined) profile.qualification = String(qualification).trim();
  if (examInterest !== undefined) profile.examInterest = String(examInterest).trim();
  if (budget !== undefined) profile.budget = String(budget).trim();
  if (academicBackground !== undefined) profile.academicBackground = String(academicBackground).trim();
  if (notes !== undefined) profile.notes = String(notes).trim();

  await profile.save();
  await profile.populate('linkedInquiry');
  res.json(profile);
});

const getStudentApplications = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  await profile.populate('linkedInquiry');
  res.json({
    applicationStage: profile.applicationStage,
    applicationStages,
    linkedInquiry: profile.linkedInquiry,
    documentsCount: profile.documents.length,
  });
});

const updateStudentApplications = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const { applicationStage } = req.body;

  if (!applicationStages.includes(applicationStage)) {
    res.status(400);
    throw new Error('Invalid application stage.');
  }

  profile.applicationStage = applicationStage;
  await profile.save();
  await profile.populate('linkedInquiry');

  res.json({
    applicationStage: profile.applicationStage,
    applicationStages,
    linkedInquiry: profile.linkedInquiry,
    documentsCount: profile.documents.length,
  });
});

const getStudentDocuments = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  res.json({
    documents: profile.documents,
    statuses: documentStatuses,
  });
});

const addStudentDocument = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const { title, type = '', fileName = '', fileUrl = '', notes = '' } = req.body;

  if (!title || !String(title).trim()) {
    res.status(400);
    throw new Error('Document title is required.');
  }

  profile.documents.push({
    title: String(title).trim(),
    type: String(type).trim(),
    fileName: String(fileName).trim(),
    fileUrl: String(fileUrl).trim(),
    status: fileUrl ? 'submitted' : 'pending-upload',
    notes: String(notes).trim(),
    uploadedAt: fileUrl ? new Date() : null,
  });

  await profile.save();
  res.status(201).json({
    documents: profile.documents,
    statuses: documentStatuses,
  });
});

const updateStudentDocument = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const document = profile.documents.id(req.params.documentId);

  if (!document) {
    res.status(404);
    throw new Error('Document not found.');
  }

  const { title, type, fileName, fileUrl, notes, status } = req.body;

  if (title !== undefined) document.title = String(title).trim();
  if (type !== undefined) document.type = String(type).trim();
  if (fileName !== undefined) document.fileName = String(fileName).trim();
  if (fileUrl !== undefined) {
    document.fileUrl = String(fileUrl).trim();
    if (document.fileUrl && !document.uploadedAt) {
      document.uploadedAt = new Date();
    }
  }
  if (notes !== undefined) document.notes = String(notes).trim();
  if (status !== undefined) {
    if (!documentStatuses.includes(status)) {
      res.status(400);
      throw new Error('Invalid document status.');
    }
    document.status = status;
  }

  await profile.save();
  res.json({
    documents: profile.documents,
    statuses: documentStatuses,
  });
});

module.exports = {
  getStudentPortal,
  getStudentProfile,
  updateStudentProfile,
  getStudentApplications,
  updateStudentApplications,
  getStudentDocuments,
  addStudentDocument,
  updateStudentDocument,
};
