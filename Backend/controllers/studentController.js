const asyncHandler = require('express-async-handler');
const StudentProfile = require('../models/studentProfileModel');
const Inquiry = require('../models/inquiryModel');
const { cloudinary, isCloudinaryConfigured } = require('../lib/cloudinary');

const applicationStages = [
  'profile-submitted',
  'documents-pending',
  'consultation-booked',
  'shortlist-in-progress',
  'applied',
  'offer-received',
  'visa-preparation',
];

const documentStatuses = ['uploaded', 'under-review', 'approved', 'rejected', 'needs-resubmission'];
const legacyDocumentStatusMap = {
  'pending-upload': 'needs-resubmission',
  submitted: 'uploaded',
};

const supportedDocumentTypes = [
  'passport',
  'transcript',
  'certificate',
  'cv',
  'sop',
  'lor',
  'other',
];

const reviewableDocumentStatuses = ['under-review', 'approved', 'rejected', 'needs-resubmission'];

const inferDocumentResourceType = ({ mimetype = '', fileName = '' } = {}) => {
  const lowerMimeType = String(mimetype).toLowerCase();
  const lowerFileName = String(fileName).toLowerCase();

  if (lowerMimeType.startsWith('image/')) return 'image';
  if (lowerMimeType === 'application/pdf') return 'raw';
  if (/\.(png|jpe?g|webp|heic|gif|bmp|svg)$/.test(lowerFileName)) return 'image';
  return 'raw';
};

const buildCloudinaryAssetUrl = (publicId, resourceType) => {
  if (!publicId) return '';

  return cloudinary.url(publicId, {
    resource_type: resourceType || 'raw',
    secure: true,
  });
};

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
  if (!profile.documents.length) actions.push('Upload your first document to start review.');
  if (profile.documents.some((doc) => ['needs-resubmission', 'rejected'].includes(doc.status))) {
    actions.push('Replace or resubmit any documents that were rejected or marked for resubmission.');
  }
  if (profile.documents.some((doc) => doc.status === 'uploaded')) {
    actions.push('Your uploaded documents are waiting for review.');
  }
  if (inquiry?.nextFollowUpAt) {
    actions.push(
      `Prepare for your upcoming follow-up on ${new Date(inquiry.nextFollowUpAt).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })}.`
    );
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

const normalizeDocumentStatus = (value) => legacyDocumentStatusMap[value] || value || 'uploaded';

const normalizeProfileDocuments = (profile) => {
  let touched = false;

  (profile.documents || []).forEach((document) => {
    const normalizedStatus = normalizeDocumentStatus(document.status);
    if (document.status !== normalizedStatus) {
      document.status = normalizedStatus;
      touched = true;
    }

    if (!document.originalFileName && document.fileName) {
      document.originalFileName = document.fileName;
      touched = true;
    }

    const inferredResourceType = inferDocumentResourceType({
      mimetype: document.mimeType,
      fileName: document.originalFileName || document.fileName,
    });

    if (!document.resourceType) {
      document.resourceType = inferredResourceType;
      touched = true;
    }

    if (document.storagePublicId) {
      const shouldRewriteUrl =
        !document.fileUrl ||
        (inferredResourceType === 'raw' && document.fileUrl.includes('/image/upload/')) ||
        (inferredResourceType === 'image' && document.fileUrl.includes('/raw/upload/'));

      if (document.resourceType !== inferredResourceType) {
        document.resourceType = inferredResourceType;
        touched = true;
      }

      if (shouldRewriteUrl) {
        document.fileUrl = buildCloudinaryAssetUrl(document.storagePublicId, inferredResourceType);
        touched = true;
      }
    }
  });

  return touched;
};

const sortDocumentsNewestFirst = (documents = []) =>
  [...documents].sort((left, right) => {
    const leftDate = new Date(left.uploadedAt || left.createdAt || 0).getTime();
    const rightDate = new Date(right.uploadedAt || right.createdAt || 0).getTime();
    return rightDate - leftDate;
  });

const ensureCloudinary = () => {
  if (!isCloudinaryConfigured()) {
    const error = new Error('Cloudinary is not configured on the server.');
    error.statusCode = 500;
    throw error;
  }
};

const getStudentDocumentFolder = (userId) =>
  `${process.env.CLOUDINARY_FOLDER || 'abroadways'}/student-documents/${userId}`;

const uploadDocumentToCloudinary = async (file, userId) => {
  ensureCloudinary();

  const resourceType = inferDocumentResourceType({
    mimetype: file.mimetype,
    fileName: file.originalname,
  });
  const uploaded = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: getStudentDocumentFolder(userId),
        resource_type: resourceType,
        overwrite: false,
        use_filename: true,
        unique_filename: true,
        filename_override: file.originalname,
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }
    );

    uploadStream.end(file.buffer);
  });

  return {
    url: uploaded.secure_url || uploaded.url,
    publicId: uploaded.public_id,
    folder: uploaded.folder,
    resourceType: uploaded.resource_type,
    bytes: uploaded.bytes,
    format: uploaded.format,
  };
};

const destroyCloudinaryAsset = async (publicId, resourceType) => {
  if (!publicId || !isCloudinaryConfigured()) return;

  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType || 'raw',
    });
  } catch (error) {
    console.error('Failed to delete previous student document asset', error);
  }
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
  const docsTouched = normalizeProfileDocuments(profile);

  if (profile.isModified() || touched || docsTouched) {
    await profile.save();
    await profile.populate({
      path: 'linkedInquiry',
      populate: { path: 'assignedTo', select: '_id name role' },
    });
  }

  return profile;
};

const populateStudentDocumentReviewers = async (profile) => {
  await profile.populate('documents.reviewedBy', '_id name email role');
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
  res.json(serializePortalData(profile));
});

const getStudentProfile = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
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
    profile.destinationInterests = destinationInterests.map((item) => String(item).trim()).filter(Boolean);
  }
  if (preferredCountry !== undefined) profile.preferredCountry = String(preferredCountry).trim();
  if (intake !== undefined) profile.intake = String(intake).trim();
  if (qualification !== undefined) profile.qualification = String(qualification).trim();
  if (examInterest !== undefined) profile.examInterest = String(examInterest).trim();
  if (budget !== undefined) profile.budget = String(budget).trim();
  if (academicBackground !== undefined) profile.academicBackground = String(academicBackground).trim();
  if (notes !== undefined) profile.notes = String(notes).trim();

  await profile.save();
  await profile.populate({
    path: 'linkedInquiry',
    populate: { path: 'assignedTo', select: '_id name role' },
  });
  res.json(profile);
});

const getStudentApplications = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
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

  res.json({
    applicationStage: profile.applicationStage,
    applicationStages,
    linkedInquiry: profile.linkedInquiry,
    documentsCount: profile.documents.length,
  });
});

const getStudentDocuments = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  await populateStudentDocumentReviewers(profile);
  res.json({
    documents: sortDocumentsNewestFirst(profile.documents),
    statuses: documentStatuses,
    documentTypes: supportedDocumentTypes,
  });
});

const addStudentDocument = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const { title, type = 'other', notes = '' } = req.body;

  if (!title || !String(title).trim()) {
    res.status(400);
    throw new Error('Document title is required.');
  }

  if (!req.file) {
    res.status(400);
    throw new Error('Please choose a document file to upload.');
  }

  if (!supportedDocumentTypes.includes(String(type).trim() || 'other')) {
    res.status(400);
    throw new Error('Invalid document type.');
  }

  const uploaded = await uploadDocumentToCloudinary(req.file, req.user._id);

  profile.documents.push({
    title: String(title).trim(),
    type: String(type).trim() || 'other',
    originalFileName: req.file.originalname,
    fileName: req.file.originalname,
    fileUrl: uploaded.url,
    storagePublicId: uploaded.publicId,
    storageFolder: uploaded.folder,
    resourceType: uploaded.resourceType,
    mimeType: req.file.mimetype,
    bytes: uploaded.bytes || req.file.size,
    status: 'uploaded',
    notes: String(notes).trim(),
    reviewNotes: '',
    reviewedBy: null,
    reviewedAt: null,
    uploadedAt: new Date(),
  });

  await profile.save();
  await populateStudentDocumentReviewers(profile);
  res.status(201).json({
    documents: sortDocumentsNewestFirst(profile.documents),
    statuses: documentStatuses,
    documentTypes: supportedDocumentTypes,
  });
});

const resubmitStudentDocument = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const document = profile.documents.id(req.params.documentId);

  if (!document) {
    res.status(404);
    throw new Error('Document not found.');
  }

  if (!req.file) {
    res.status(400);
    throw new Error('Please choose a replacement document file.');
  }

  const uploaded = await uploadDocumentToCloudinary(req.file, req.user._id);
  await destroyCloudinaryAsset(document.storagePublicId, document.resourceType);

  document.originalFileName = req.file.originalname;
  document.fileName = req.file.originalname;
  document.fileUrl = uploaded.url;
  document.storagePublicId = uploaded.publicId;
  document.storageFolder = uploaded.folder;
  document.resourceType = uploaded.resourceType;
  document.mimeType = req.file.mimetype;
  document.bytes = uploaded.bytes || req.file.size;
  document.status = 'uploaded';
  document.reviewNotes = '';
  document.reviewedBy = null;
  document.reviewedAt = null;
  document.uploadedAt = new Date();
  if (req.body?.title !== undefined) document.title = String(req.body.title).trim();
  if (req.body?.type !== undefined && supportedDocumentTypes.includes(String(req.body.type).trim() || 'other')) {
    document.type = String(req.body.type).trim() || 'other';
  }
  if (req.body?.notes !== undefined) document.notes = String(req.body.notes).trim();

  await profile.save();
  await populateStudentDocumentReviewers(profile);
  res.json({
    documents: sortDocumentsNewestFirst(profile.documents),
    statuses: documentStatuses,
    documentTypes: supportedDocumentTypes,
  });
});

const updateStudentDocument = asyncHandler(async (req, res) => {
  const profile = await ensureStudentProfile(req.user);
  const document = profile.documents.id(req.params.documentId);

  if (!document) {
    res.status(404);
    throw new Error('Document not found.');
  }

  const { title, type, notes } = req.body;

  if (title !== undefined) document.title = String(title).trim();
  if (type !== undefined) {
    const nextType = String(type).trim() || 'other';
    if (!supportedDocumentTypes.includes(nextType)) {
      res.status(400);
      throw new Error('Invalid document type.');
    }
    document.type = nextType;
  }
  if (notes !== undefined) document.notes = String(notes).trim();

  await profile.save();
  await populateStudentDocumentReviewers(profile);
  res.json({
    documents: sortDocumentsNewestFirst(profile.documents),
    statuses: documentStatuses,
    documentTypes: supportedDocumentTypes,
  });
});

const listAllStudentDocuments = asyncHandler(async (req, res) => {
  const profiles = await StudentProfile.find({})
    .populate('user', '_id name email')
    .populate('documents.reviewedBy', '_id name email role')
    .sort({ updatedAt: -1 });

  for (const profile of profiles) {
    if (normalizeProfileDocuments(profile)) {
      await profile.save();
      await profile.populate('documents.reviewedBy', '_id name email role');
    }
  }

  const rawItems = profiles.flatMap((profile) =>
    (profile.documents || []).map((document) => ({
      profileId: profile._id,
      documentId: document._id,
      student: {
        userId: profile.user?._id || null,
        name: profile.fullName || profile.user?.name || 'Student',
        email: profile.email || profile.user?.email || '',
      },
      document,
      applicationStage: profile.applicationStage,
    }))
  );

  const query = String(req.query.q || '').trim().toLowerCase();
  const statusFilter = String(req.query.status || '').trim();
  const typeFilter = String(req.query.type || '').trim();
  const studentFilter = String(req.query.student || '').trim().toLowerCase();

  const items = rawItems
    .filter((item) => {
      if (statusFilter && item.document.status !== statusFilter) return false;
      if (typeFilter && item.document.type !== typeFilter) return false;
      if (
        studentFilter &&
        !`${item.student.name} ${item.student.email}`.toLowerCase().includes(studentFilter)
      ) {
        return false;
      }
      if (
        query &&
        !`${item.student.name} ${item.student.email} ${item.document.title} ${item.document.originalFileName || ''}`
          .toLowerCase()
          .includes(query)
      ) {
        return false;
      }
      return true;
    })
    .sort((left, right) => {
      const leftDate = new Date(left.document.uploadedAt || left.document.createdAt || 0).getTime();
      const rightDate = new Date(right.document.uploadedAt || right.document.createdAt || 0).getTime();
      return rightDate - leftDate;
    });

  res.json({
    items,
    statuses: documentStatuses,
    documentTypes: supportedDocumentTypes,
  });
});

const reviewStudentDocument = asyncHandler(async (req, res) => {
  const profile = await StudentProfile.findById(req.params.profileId).populate('documents.reviewedBy', '_id name email role');

  if (!profile) {
    res.status(404);
    throw new Error('Student profile not found.');
  }

  const document = profile.documents.id(req.params.documentId);

  if (!document) {
    res.status(404);
    throw new Error('Document not found.');
  }

  const { status, reviewNotes = '' } = req.body;

  if (!reviewableDocumentStatuses.includes(status)) {
    res.status(400);
    throw new Error('Invalid review status.');
  }

  document.status = status;
  document.reviewNotes = String(reviewNotes).trim();
  document.reviewedBy = req.user._id;
  document.reviewedAt = new Date();

  await profile.save();
  await profile.populate('documents.reviewedBy', '_id name email role');

  res.json({
    profileId: profile._id,
    documentId: document._id,
    document,
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
  resubmitStudentDocument,
  updateStudentDocument,
  listAllStudentDocuments,
  reviewStudentDocument,
};
