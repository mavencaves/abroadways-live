const asyncHandler = require('express-async-handler');
const fetch = require('node-fetch');
const ChatSession = require('../models/chatModel');
const StudentProfile = require('../models/studentProfileModel');
const Appointment = require('../models/appointmentModel');
const ServiceOrder = require('../models/serviceOrderModel');
const { notifyAdmins } = require('../lib/notifications');

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const DEFAULT_TITLE = 'New chat';
const DEMO_MESSAGE_LIMIT = 2;

const TOPIC_RULES = [
  {
    key: 'destinations',
    label: 'Destinations',
    keywords: ['country', 'countries', 'destination', 'destinations', 'uk', 'canada', 'australia', 'germany', 'europe'],
  },
  {
    key: 'scholarships',
    label: 'Scholarships',
    keywords: ['scholarship', 'scholarships', 'funding', 'tuition waiver', 'financial aid'],
  },
  {
    key: 'exams',
    label: 'Exams',
    keywords: ['ielts', 'languagecert', 'toefl', 'pte', 'gre', 'gmat', 'sat', 'duolingo', 'exam'],
  },
  {
    key: 'documents',
    label: 'Documents',
    keywords: ['passport', 'transcript', 'certificate', 'cv', 'sop', 'lor', 'document', 'documents'],
  },
  {
    key: 'visa',
    label: 'Visa',
    keywords: ['visa', 'embassy', 'interview', 'cas', 'biometric', 'immigration'],
  },
  {
    key: 'appointments',
    label: 'Appointments',
    keywords: ['appointment', 'consultation', 'meeting', 'schedule', 'reschedule', 'slot'],
  },
  {
    key: 'payments',
    label: 'Payments',
    keywords: ['payment', 'invoice', 'order', 'fee', 'fees', 'transaction', 'refund'],
  },
  {
    key: 'applications',
    label: 'Applications',
    keywords: ['application', 'offer', 'admission', 'shortlist', 'university list'],
  },
];

const HIGH_RISK_PATTERNS = [
  /guarantee.+visa/i,
  /guarantee.+admission/i,
  /fake document/i,
  /forged document/i,
  /how to lie/i,
  /illegal/i,
  /bypass/i,
  /overstay/i,
  /without visa/i,
  /embassy contact/i,
];

const MEDIUM_RISK_PATTERNS = [
  /urgent visa/i,
  /rejection/i,
  /blacklist/i,
  /ban/i,
  /refusal/i,
  /agent scam/i,
  /fraud/i,
];

const REVIEW_REPLY_PATTERNS = [
  /i couldn't generate/i,
  /i do not have enough information/i,
  /please speak with an advisor/i,
  /i cannot verify/i,
  /sorry/i,
];

const ensureApiKey = () => {
  const { GEMINI_API_KEY } = process.env;
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key is not configured.');
  }
  return GEMINI_API_KEY;
};

const normalizeText = (value) => String(value || '').trim();

const buildGeminiPayload = (messages, latestPrompt) => {
  const historyContent = messages.map((message) => ({
    role: message.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: message.content }],
  }));

  return {
    contents: [
      ...historyContent,
      { role: 'user', parts: [{ text: latestPrompt }] },
    ],
  };
};

const generateTitleFromPrompt = (prompt) => {
  if (!prompt) {
    return DEFAULT_TITLE;
  }
  const cleaned = prompt.trim().replace(/\s+/g, ' ');
  if (!cleaned) {
    return DEFAULT_TITLE;
  }
  const words = cleaned.split(' ').slice(0, 6).join(' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const isRetryableError = (statusCode, errorMessage) => {
  if (statusCode === 429 || statusCode === 503 || statusCode === 500) {
    return true;
  }

  const retryableMessages = ['overloaded', 'rate limit', 'quota', 'too many requests', 'service unavailable', 'internal error'];
  const lowerMessage = (errorMessage || '').toLowerCase();
  return retryableMessages.some((msg) => lowerMessage.includes(msg));
};

const callGeminiAPI = async (apiUrl, payload, retries = 3) => {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const apiRes = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!apiRes.ok) {
        const errorBody = await apiRes.json();
        const errorMessage = errorBody?.error?.message || 'Failed to get a response from the AI model.';
        const statusCode = apiRes.status;

        if (attempt < retries && isRetryableError(statusCode, errorMessage)) {
          const backoffDelay = Math.pow(2, attempt) * 1000;
          console.log(
            `Gemini API error (attempt ${attempt + 1}/${retries + 1}): ${errorMessage}. Retrying in ${backoffDelay}ms...`
          );
          await sleep(backoffDelay);
          const err = new Error(errorMessage);
          err.statusCode = statusCode;
          lastError = err;
          continue;
        }

        const err = new Error(errorMessage);
        err.statusCode = statusCode;
        throw err;
      }

      return await apiRes.json();
    } catch (error) {
      const errorMessage = error?.message || error?.toString() || 'Unknown error';
      const statusCode = error?.statusCode || 500;

      if (attempt >= retries || !isRetryableError(statusCode, errorMessage)) {
        if (error instanceof Error) {
          throw error;
        }
        const err = new Error(errorMessage);
        err.statusCode = statusCode;
        throw err;
      }

      const err = new Error(errorMessage);
      err.statusCode = statusCode;
      lastError = err;

      const backoffDelay = Math.pow(2, attempt) * 1000;
      console.log(
        `Gemini API error (attempt ${attempt + 1}/${retries + 1}): ${errorMessage}. Retrying in ${backoffDelay}ms...`
      );
      await sleep(backoffDelay);
    }
  }

  if (lastError) {
    throw lastError;
  }
  throw new Error('Failed to get a response from the AI model after multiple attempts.');
};

const detectTopic = (text) => {
  const lowerText = normalizeText(text).toLowerCase();

  for (const rule of TOPIC_RULES) {
    if (rule.keywords.some((keyword) => lowerText.includes(keyword))) {
      return rule.key;
    }
  }

  return 'general-guidance';
};

const detectRiskLevel = (text) => {
  const lowerText = normalizeText(text).toLowerCase();

  if (HIGH_RISK_PATTERNS.some((pattern) => pattern.test(lowerText))) {
    return 'high';
  }

  if (MEDIUM_RISK_PATTERNS.some((pattern) => pattern.test(lowerText))) {
    return 'medium';
  }

  return 'low';
};

const needsReviewFromReply = (reply) => REVIEW_REPLY_PATTERNS.some((pattern) => pattern.test(normalizeText(reply)));

const formatDocumentStatusSummary = (documents = []) => {
  if (!documents.length) {
    return 'No documents uploaded yet.';
  }

  const counts = documents.reduce((accumulator, document) => {
    const key = document.status || 'uploaded';
    accumulator[key] = (accumulator[key] || 0) + 1;
    return accumulator;
  }, {});

  return Object.entries(counts)
    .map(([status, count]) => `${count} ${status.replace(/-/g, ' ')}`)
    .join(', ');
};

const formatPaymentStatusSummary = (orders = []) => {
  if (!orders.length) {
    return 'No service orders yet.';
  }

  const latestOrder = orders[0];
  return `${orders.length} order${orders.length > 1 ? 's' : ''}; latest payment status is ${latestOrder.status}.`;
};

const formatAppointmentStatusSummary = (appointment) => {
  if (!appointment) {
    return 'No upcoming consultation booked.';
  }

  return `Upcoming ${appointment.type} consultation on ${appointment.date} at ${appointment.time} with status ${appointment.status}.`;
};

const buildStudentContext = async (user) => {
  if (!user || user.role !== 'user') {
    return {
      promptContext: '',
      snapshot: {},
    };
  }

  const profile = await StudentProfile.findOne({ user: user._id })
    .populate({
      path: 'linkedInquiry',
      populate: { path: 'assignedTo', select: 'name role' },
    })
    .lean();

  const orders = profile
    ? await ServiceOrder.find({ studentId: profile._id }).sort({ createdAt: -1 }).limit(5).lean()
    : [];

  const appointment = profile
    ? await Appointment.findOne({
        studentId: profile._id,
        status: { $in: ['requested', 'confirmed'] },
      })
        .sort({ date: 1, time: 1 })
        .lean()
    : null;

  const snapshot = {
    preferredCountry: profile?.preferredCountry || '',
    qualification: profile?.qualification || '',
    examInterest: profile?.examInterest || '',
    intake: profile?.intake || '',
    applicationStage: profile?.applicationStage || '',
    documentStatusSummary: formatDocumentStatusSummary(profile?.documents || []),
    paymentStatusSummary: formatPaymentStatusSummary(orders),
    appointmentStatusSummary: formatAppointmentStatusSummary(appointment),
  };

  const contextLines = [
    profile?.fullName ? `Student name: ${profile.fullName}` : '',
    snapshot.preferredCountry ? `Preferred country: ${snapshot.preferredCountry}` : '',
    profile?.destinationInterests?.length ? `Destination interests: ${profile.destinationInterests.join(', ')}` : '',
    snapshot.qualification ? `Qualification: ${snapshot.qualification}` : '',
    snapshot.examInterest ? `Exam interest: ${snapshot.examInterest}` : '',
    snapshot.intake ? `Target intake: ${snapshot.intake}` : '',
    snapshot.applicationStage ? `Application stage: ${snapshot.applicationStage}` : '',
    snapshot.documentStatusSummary ? `Document status: ${snapshot.documentStatusSummary}` : '',
    snapshot.paymentStatusSummary ? `Payment and service order status: ${snapshot.paymentStatusSummary}` : '',
    snapshot.appointmentStatusSummary ? `Appointment status: ${snapshot.appointmentStatusSummary}` : '',
    profile?.linkedInquiry?.status ? `CRM inquiry status: ${profile.linkedInquiry.status}` : '',
    profile?.linkedInquiry?.assignedTo?.name
      ? `Assigned staff: ${profile.linkedInquiry.assignedTo.name} (${profile.linkedInquiry.assignedTo.role || 'staff'})`
      : '',
  ].filter(Boolean);

  return {
    promptContext: contextLines.length
      ? `Known student context:\n- ${contextLines.join('\n- ')}`
      : 'Known student context: no saved profile details yet.',
    snapshot,
  };
};

const buildGuidancePrompt = ({ prompt, contextText = '', isDemo = false }) => {
  const guardrailLines = [
    'You are AbroadAI, an educational guidance assistant for Abroadways.',
    'Give practical, supportive guidance for students from Bangladesh exploring study abroad.',
    'Use concise, polished English.',
    'Do not guarantee admission, scholarships, visa approval, or embassy outcomes.',
    'State clearly when a human advisor should review a case, especially for risky visa, fraud, fake-document, or legal questions.',
    'If the question asks about the student profile, documents, payments, or appointments, use the provided context only.',
    'If context is missing, say that clearly instead of inventing data.',
  ];

  if (isDemo) {
    guardrailLines.push('This is a public demo without account-specific records, so answer in general terms and encourage signup for personalized guidance.');
  }

  const contextBlock = contextText ? `\n\n${contextText}` : '';
  return `${guardrailLines.join('\n')}${contextBlock}\n\nStudent question:\n${prompt}`;
};

const getGeminiApiUrl = () => {
  const apiKey = ensureApiKey();
  const apiVersion = GEMINI_MODEL.includes('1.5') || GEMINI_MODEL.includes('2.5') ? 'v1beta' : 'v1';
  return `https://generativelanguage.googleapis.com/${apiVersion}/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;
};

const runModel = async ({ history = [], prompt, contextText = '', isDemo = false }) => {
  const payload = buildGeminiPayload(history, buildGuidancePrompt({ prompt, contextText, isDemo }));
  const data = await callGeminiAPI(getGeminiApiUrl(), payload, 3);
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
};

const formatSessionListItem = (session) => ({
  _id: session._id,
  title: session.title,
  assistantMode: session.assistantMode,
  topic: session.topic,
  riskLevel: session.riskLevel,
  needsReview: session.needsReview,
  latestUserPrompt: session.latestUserPrompt,
  latestAssistantReply: session.latestAssistantReply,
  lastMessageAt: session.lastMessageAt,
  createdAt: session.createdAt,
  updatedAt: session.updatedAt,
});

const formatSessionDetail = (session) => ({
  _id: session._id,
  title: session.title,
  assistantMode: session.assistantMode,
  topic: session.topic,
  riskLevel: session.riskLevel,
  needsReview: session.needsReview,
  latestUserPrompt: session.latestUserPrompt,
  latestAssistantReply: session.latestAssistantReply,
  lastMessageAt: session.lastMessageAt,
  contextSnapshot: session.contextSnapshot || {},
  messages: session.messages,
  createdAt: session.createdAt,
  updatedAt: session.updatedAt,
});

const notifyHighRiskQueryIfNeeded = async (session, user) => {
  if (!session.needsReview || session.riskLevel !== 'high') {
    return;
  }

  await notifyAdmins({
    type: 'ai-high-risk-query',
    title: 'High-risk AbroadAI query needs review',
    message: `${user.name || 'A student'} asked a high-risk AI question that may need a staff follow-up.`,
    link: '/dashboard/ai',
    priority: 'high',
    eventKey: `ai-high-risk:${session._id}:${session.updatedAt?.toISOString?.() || Date.now()}`,
    metadata: {
      sessionId: session._id,
      userId: user._id,
      topic: session.topic,
      riskLevel: session.riskLevel,
    },
  });
};

const createChatSession = asyncHandler(async (req, res) => {
  const title = normalizeText(req.body.title) || DEFAULT_TITLE;
  const requestedMode = normalizeText(req.body.assistantMode);
  const assistantMode =
    req.user.role === 'user' && requestedMode === 'student-portal' ? 'student-portal' : 'general';

  const session = await ChatSession.create({
    user: req.user._id,
    title,
    assistantMode,
    messages: [],
  });

  res.status(201).json(formatSessionListItem(session));
});

const getChatSessions = asyncHandler(async (req, res) => {
  const sessions = await ChatSession.find({ user: req.user._id }).sort({ updatedAt: -1 });
  res.json(sessions.map(formatSessionListItem));
});

const getChatSessionById = asyncHandler(async (req, res) => {
  const session = await ChatSession.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!session) {
    res.status(404);
    throw new Error('Chat session not found.');
  }

  res.json(formatSessionDetail(session));
});

const updateChatSessionTitle = asyncHandler(async (req, res) => {
  const trimmedTitle = normalizeText(req.body.title);
  if (!trimmedTitle) {
    res.status(400);
    throw new Error('A title is required.');
  }

  const session = await ChatSession.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { title: trimmedTitle },
    { new: true }
  );

  if (!session) {
    res.status(404);
    throw new Error('Chat session not found.');
  }

  res.json(formatSessionListItem(session));
});

const deleteChatSession = asyncHandler(async (req, res) => {
  const session = await ChatSession.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!session) {
    res.status(404);
    throw new Error('Chat session not found.');
  }

  res.json({ message: 'Chat session deleted.' });
});

const sendChatMessage = asyncHandler(async (req, res) => {
  const prompt = normalizeText(req.body.prompt);
  if (!prompt) {
    res.status(400);
    throw new Error('Prompt is required.');
  }

  const session = await ChatSession.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!session) {
    res.status(404);
    throw new Error('Chat session not found.');
  }

  try {
    const topic = detectTopic(prompt);
    const riskLevel = detectRiskLevel(prompt);
    const { promptContext, snapshot } = await buildStudentContext(req.user);
    const contextText = session.assistantMode === 'student-portal' || req.user.role === 'user' ? promptContext : '';
    const reply = await runModel({
      history: session.messages,
      prompt,
      contextText,
      isDemo: false,
    });

    const needsReview = riskLevel === 'high' || needsReviewFromReply(reply);

    session.messages.push({ role: 'user', content: prompt, topic, riskLevel });
    session.messages.push({ role: 'assistant', content: reply, topic, riskLevel: needsReview ? 'medium' : 'low' });
    session.topic = topic;
    session.riskLevel = riskLevel;
    session.needsReview = needsReview;
    session.latestUserPrompt = prompt;
    session.latestAssistantReply = reply;
    session.lastMessageAt = new Date();
    if (Object.keys(snapshot || {}).length > 0) {
      session.contextSnapshot = snapshot;
    }

    if (session.title === DEFAULT_TITLE) {
      session.title = generateTitleFromPrompt(prompt);
    }

    await session.save();
    await notifyHighRiskQueryIfNeeded(session, req.user);

    res.status(200).json({
      reply,
      session: formatSessionDetail(session),
    });
  } catch (error) {
    console.error('Chat error:', error);
    const statusCode = error?.statusCode || 500;
    const errorMessage = error?.message || 'An internal server error occurred while processing your chat.';

    if (res.statusCode === 200) {
      res.status(statusCode);
    }
    throw new Error(errorMessage);
  }
});

const sendDemoMessage = asyncHandler(async (req, res) => {
  const prompt = normalizeText(req.body.prompt);
  const history = Array.isArray(req.body.history) ? req.body.history.slice(-DEMO_MESSAGE_LIMIT * 2) : [];

  if (!prompt) {
    res.status(400);
    throw new Error('Prompt is required.');
  }

  const userTurns = history.filter((message) => message?.role === 'user').length;
  if (userTurns >= DEMO_MESSAGE_LIMIT) {
    res.status(403);
    throw new Error('The public AbroadAI demo is limited. Please sign in to continue with personalized guidance.');
  }

  const normalizedHistory = history
    .map((message) => ({
      role: message?.role === 'assistant' ? 'assistant' : 'user',
      content: normalizeText(message?.content),
    }))
    .filter((message) => message.content);

  const topic = detectTopic(prompt);
  const riskLevel = detectRiskLevel(prompt);
  const reply = await runModel({
    history: normalizedHistory,
    prompt,
    contextText: '',
    isDemo: true,
  });

  res.json({
    reply,
    topic,
    riskLevel,
    remainingMessages: Math.max(DEMO_MESSAGE_LIMIT - (userTurns + 1), 0),
  });
});

const getChatAdminInsights = asyncHandler(async (req, res) => {
  const sessions = await ChatSession.find({})
    .populate('user', '_id name email role')
    .sort({ updatedAt: -1 })
    .lean();

  const studentSessions = sessions.filter((session) => session.user && session.user.role === 'user');
  const userIds = [...new Set(studentSessions.map((session) => String(session.user._id)))];
  const profiles = await StudentProfile.find({ user: { $in: userIds } })
    .select('user preferredCountry qualification examInterest intake applicationStage documents')
    .lean();

  const profileMap = new Map(profiles.map((profile) => [String(profile.user), profile]));
  const topicCounts = {};
  let totalMessages = 0;
  let highRiskSessions = 0;
  let needsReviewSessions = 0;

  const items = studentSessions.map((session) => {
    totalMessages += Array.isArray(session.messages) ? session.messages.length : 0;
    if (session.riskLevel === 'high') highRiskSessions += 1;
    if (session.needsReview) needsReviewSessions += 1;
    topicCounts[session.topic || 'general-guidance'] = (topicCounts[session.topic || 'general-guidance'] || 0) + 1;

    const profile = profileMap.get(String(session.user._id));
    const latestMessages = (session.messages || []).slice(-6);

    return {
      _id: session._id,
      title: session.title,
      topic: session.topic || 'general-guidance',
      riskLevel: session.riskLevel || 'low',
      needsReview: Boolean(session.needsReview),
      latestUserPrompt: session.latestUserPrompt || '',
      latestAssistantReply: session.latestAssistantReply || '',
      messageCount: Array.isArray(session.messages) ? session.messages.length : 0,
      updatedAt: session.updatedAt,
      createdAt: session.createdAt,
      student: {
        _id: session.user._id,
        name: session.user.name,
        email: session.user.email,
      },
      profile: profile
        ? {
            preferredCountry: profile.preferredCountry || '',
            qualification: profile.qualification || '',
            examInterest: profile.examInterest || '',
            intake: profile.intake || '',
            applicationStage: profile.applicationStage || '',
            documentStatusSummary: formatDocumentStatusSummary(profile.documents || []),
          }
        : null,
      contextSnapshot: session.contextSnapshot || {},
      latestMessages,
    };
  });

  const commonTopics = Object.entries(topicCounts)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 6)
    .map(([topic, count]) => ({
      topic,
      label: TOPIC_RULES.find((rule) => rule.key === topic)?.label || 'General guidance',
      count,
    }));

  res.json({
    summary: {
      totalSessions: studentSessions.length,
      activeStudents: userIds.length,
      totalMessages,
      highRiskSessions,
      needsReviewSessions,
      commonTopics,
    },
    items,
  });
});

module.exports = {
  createChatSession,
  getChatSessions,
  getChatSessionById,
  updateChatSessionTitle,
  deleteChatSession,
  sendChatMessage,
  sendDemoMessage,
  getChatAdminInsights,
};
