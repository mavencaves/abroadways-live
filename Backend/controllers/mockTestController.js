const asyncHandler = require("express-async-handler");
const Exam = require("../models/examModel");
const Question = require("../models/questionModel");
const Session = require("../models/sessionModel");
const Result = require("../models/resultModel");
const TestSet = require("../models/testSetModel");

const EXAM_CATALOG = [
  {
    slug: "ielts",
    title: "IELTS",
    description: "Practice module for listening, reading, writing, and speaking with an Abroadways workflow.",
    sections: [
      { key: "listening", title: "Listening", durationMinutes: 30, instructions: "Answer based on audio and listening prompts." },
      { key: "reading", title: "Reading", durationMinutes: 60, instructions: "Read the passages carefully and answer objectively." },
      { key: "writing", title: "Writing", durationMinutes: 60, instructions: "Complete the writing tasks using original prompts only." },
      { key: "speaking", title: "Speaking", durationMinutes: 15, instructions: "Respond to speaking prompts for manual review." },
    ],
  },
  {
    slug: "pte",
    title: "PTE",
    description: "Integrated English practice with timed sections and score breakdowns.",
    sections: [
      { key: "speaking-writing", title: "Speaking & Writing", durationMinutes: 60, instructions: "Respond to integrated prompts." },
      { key: "reading", title: "Reading", durationMinutes: 30, instructions: "Complete objective reading tasks." },
      { key: "listening", title: "Listening", durationMinutes: 35, instructions: "Answer from original listening-style prompts." },
    ],
  },
  {
    slug: "toefl",
    title: "TOEFL",
    description: "Academic English practice with timed skill areas and review-ready speaking/writing.",
    sections: [
      { key: "reading", title: "Reading", durationMinutes: 35, instructions: "Complete reading questions based on original passages." },
      { key: "listening", title: "Listening", durationMinutes: 35, instructions: "Answer listening prompts and note-taking questions." },
      { key: "speaking", title: "Speaking", durationMinutes: 20, instructions: "Respond to speaking tasks for manual review." },
      { key: "writing", title: "Writing", durationMinutes: 30, instructions: "Complete writing tasks using original practice prompts." },
    ],
  },
  {
    slug: "languagecert",
    title: "LanguageCert",
    description: "LanguageCert practice with skill-based coverage for Abroadways students.",
    sections: [
      { key: "listening", title: "Listening", durationMinutes: 30, instructions: "Complete listening practice questions." },
      { key: "reading-writing", title: "Reading & Writing", durationMinutes: 60, instructions: "Answer objective and writing practice items." },
      { key: "speaking", title: "Speaking", durationMinutes: 15, instructions: "Complete speaking practice for manual review." },
    ],
  },
  {
    slug: "gre",
    title: "GRE",
    description: "Quantitative, verbal, and analytical writing practice in a timed test-set workflow.",
    sections: [
      { key: "verbal", title: "Verbal Reasoning", durationMinutes: 30, instructions: "Complete original verbal practice items." },
      { key: "quant", title: "Quantitative Reasoning", durationMinutes: 35, instructions: "Complete original quant practice items." },
      { key: "awa", title: "Analytical Writing", durationMinutes: 30, instructions: "Submit writing responses for manual review." },
    ],
  },
  {
    slug: "gmat",
    title: "GMAT",
    description: "Focused practice for quantitative, verbal, and data-driven decision sections.",
    sections: [
      { key: "quant", title: "Quantitative", durationMinutes: 45, instructions: "Complete quantitative practice questions." },
      { key: "verbal", title: "Verbal", durationMinutes: 45, instructions: "Complete verbal practice questions." },
      { key: "data-insights", title: "Data Insights", durationMinutes: 45, instructions: "Practice with data interpretation items." },
    ],
  },
];

const MANAGER_ROLES = ["admin", "course-manager"];

async function ensureExamBySlug(examSlug) {
  const normalizedSlug = `${examSlug || ""}`.trim().toLowerCase();
  const catalogEntry = EXAM_CATALOG.find((exam) => exam.slug === normalizedSlug);
  if (!catalogEntry) {
    const error = new Error("Unsupported mock test exam.");
    error.statusCode = 404;
    throw error;
  }

  let exam = await Exam.findOne({ slug: normalizedSlug });
  if (!exam) {
    exam = await Exam.create(catalogEntry);
  }

  return exam;
}

function ensureManager(req) {
  if (!req.user || !MANAGER_ROLES.includes(req.user.role)) {
    const error = new Error("Only admin and course-manager accounts can manage mock tests.");
    error.statusCode = 403;
    throw error;
  }
}

function ensureResultAccess(req, ownerId) {
  if (!req.user) {
    const error = new Error("Authentication required.");
    error.statusCode = 401;
    throw error;
  }

  if (ownerId.toString() === req.user._id.toString()) return;
  if (["admin", "course-manager"].includes(req.user.role)) return;

  const error = new Error("Forbidden");
  error.statusCode = 403;
  throw error;
}

function buildBreakdown(questionOrder, answers) {
  const answerMap = new Map(answers.map((answer) => [answer.question.toString(), answer]));
  const breakdown = {};
  let totalScore = 0;
  let totalMax = 0;
  let pendingManualReview = 0;

  for (const question of questionOrder) {
    const section = question.sectionKey || "general";
    if (!breakdown[section]) {
      breakdown[section] = {
        title: section,
        obtained: 0,
        max: 0,
        attempts: 0,
      };
    }

    const attempt = answerMap.get(question._id.toString());
    const marks = question.marks || 0;
    breakdown[section].max += marks;
    totalMax += marks;

    if (attempt) {
      breakdown[section].attempts += 1;
      breakdown[section].obtained += attempt.marksObtained || 0;
      totalScore += attempt.marksObtained || 0;
      if (!attempt.graded) pendingManualReview += 1;
    }
  }

  const weaknesses = Object.entries(breakdown)
    .filter(([, section]) => section.max > 0)
    .map(([key, section]) => ({
      key,
      ratio: section.obtained / section.max,
    }))
    .filter((section) => section.ratio < 0.65)
    .sort((a, b) => a.ratio - b.ratio)
    .map((section) => section.key);

  const recommendations = weaknesses.map(
    (section) => `Practice more ${section.replace(/-/g, " ")} sets and review explanation notes before your next timed session.`
  );

  return { breakdown, totalScore, totalMax, pendingManualReview, weaknesses, recommendations };
}

const listCatalog = asyncHandler(async (req, res) => {
  const examDocs = await Exam.find({ slug: { $in: EXAM_CATALOG.map((item) => item.slug) } }).lean();
  const exams = await Promise.all(
    EXAM_CATALOG.map(async (item) => {
      const examDoc = examDocs.find((doc) => doc.slug === item.slug);
      const examId = examDoc?._id || null;
      const [questionCount, publishedSetCount] = await Promise.all([
        examId ? Question.countDocuments({ exam: examId, isActive: true }) : 0,
        examId ? TestSet.countDocuments({ exam: examId, status: "published" }) : 0,
      ]);

      return {
        ...item,
        _id: examId,
        questionCount,
        publishedSetCount,
      };
    })
  );

  res.json(exams);
});

const getExamLanding = asyncHandler(async (req, res) => {
  const exam = await ensureExamBySlug(req.params.examSlug);
  const [questionCount, publishedSets] = await Promise.all([
    Question.countDocuments({ exam: exam._id, isActive: true }),
    TestSet.find({ exam: exam._id, status: "published" }).sort({ createdAt: -1 }).lean(),
  ]);

  res.json({
    exam,
    questionCount,
    testSets: publishedSets,
  });
});

const listQuestions = asyncHandler(async (req, res) => {
  ensureManager(req);
  const exam = await ensureExamBySlug(req.query.examSlug);
  const filters = { exam: exam._id };
  if (req.query.sectionKey) filters.sectionKey = req.query.sectionKey;
  if (req.query.type) filters.type = req.query.type;
  if (req.query.search) filters.text = { $regex: req.query.search, $options: "i" };
  const questions = await Question.find(filters).sort({ createdAt: -1 }).lean();
  res.json(questions);
});

const createQuestion = asyncHandler(async (req, res) => {
  ensureManager(req);
  const exam = await ensureExamBySlug(req.body.examSlug);
  const question = await Question.create({
    exam: exam._id,
    sectionKey: req.body.sectionKey,
    type: req.body.type,
    text: req.body.text,
    options: Array.isArray(req.body.options) ? req.body.options : [],
    correctAnswer: req.body.correctAnswer,
    marks: req.body.marks || 1,
    difficulty: req.body.difficulty || "medium",
    tags: Array.isArray(req.body.tags) ? req.body.tags : [],
    explanation: req.body.explanation || "",
    sourceType: "original",
    isActive: req.body.isActive !== false,
    meta: req.body.meta || {},
  });

  res.status(201).json(question);
});

const updateQuestion = asyncHandler(async (req, res) => {
  ensureManager(req);
  const question = await Question.findByIdAndUpdate(
    req.params.questionId,
    {
      ...req.body,
      sourceType: "original",
    },
    { new: true }
  );

  if (!question) {
    res.status(404);
    throw new Error("Question not found.");
  }

  res.json(question);
});

const deleteQuestion = asyncHandler(async (req, res) => {
  ensureManager(req);
  const question = await Question.findByIdAndDelete(req.params.questionId);
  if (!question) {
    res.status(404);
    throw new Error("Question not found.");
  }
  res.json({ message: "Question deleted." });
});

const listTestSets = asyncHandler(async (req, res) => {
  const exam = await ensureExamBySlug(req.query.examSlug || req.params.examSlug);
  const canManage = req.user && MANAGER_ROLES.includes(req.user.role);
  const filters = { exam: exam._id };
  if (!canManage) {
    filters.status = "published";
  } else if (req.query.status) {
    filters.status = req.query.status;
  }
  const testSets = await TestSet.find(filters)
    .populate("questionIds")
    .sort({ createdAt: -1 })
    .lean();
  res.json(testSets);
});

const createTestSet = asyncHandler(async (req, res) => {
  ensureManager(req);
  const exam = await ensureExamBySlug(req.body.examSlug);
  const testSet = await TestSet.create({
    exam: exam._id,
    title: req.body.title,
    slug: req.body.slug,
    description: req.body.description || "",
    instructions: req.body.instructions || "",
    durationMinutes: req.body.durationMinutes || 60,
    status: req.body.status || "draft",
    sectionConfig: Array.isArray(req.body.sectionConfig) ? req.body.sectionConfig : [],
    questionIds: Array.isArray(req.body.questionIds) ? req.body.questionIds : [],
    createdBy: req.user._id,
    updatedBy: req.user._id,
  });
  res.status(201).json(testSet);
});

const updateTestSet = asyncHandler(async (req, res) => {
  ensureManager(req);
  const testSet = await TestSet.findByIdAndUpdate(
    req.params.testSetId,
    {
      ...req.body,
      updatedBy: req.user._id,
    },
    { new: true }
  );
  if (!testSet) {
    res.status(404);
    throw new Error("Test set not found.");
  }
  res.json(testSet);
});

const deleteTestSet = asyncHandler(async (req, res) => {
  ensureManager(req);
  const testSet = await TestSet.findByIdAndDelete(req.params.testSetId);
  if (!testSet) {
    res.status(404);
    throw new Error("Test set not found.");
  }
  res.json({ message: "Test set deleted." });
});

const startMockSession = asyncHandler(async (req, res) => {
  const testSet = await TestSet.findById(req.body.testSetId).populate("questionIds");
  if (!testSet || testSet.status !== "published") {
    res.status(404);
    throw new Error("Published test set not found.");
  }

  const questionOrder = testSet.questionIds.map((question) => question._id);
  const totalMarks = testSet.questionIds.reduce((sum, question) => sum + (question.marks || 0), 0);

  const session = await Session.create({
    user: req.user._id,
    exam: testSet.exam,
    testSet: testSet._id,
    mode: req.body.mode || "exam",
    startedAt: new Date(),
    status: "ongoing",
    durationMinutes: testSet.durationMinutes || 60,
    questionOrder,
    totalMarks,
  });

  res.status(201).json(session);
});

const getMockSession = asyncHandler(async (req, res) => {
  const session = await Session.findById(req.params.sessionId)
    .populate("exam")
    .populate("testSet")
    .populate("questionOrder")
    .populate("answers.question");

  if (!session) {
    res.status(404);
    throw new Error("Session not found.");
  }

  ensureResultAccess(req, session.user);
  res.json(session);
});

const submitMockAnswer = asyncHandler(async (req, res) => {
  const { questionId, answer } = req.body;
  const session = await Session.findById(req.params.sessionId);

  if (!session) {
    res.status(404);
    throw new Error("Session not found.");
  }
  if (session.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Forbidden");
  }
  if (session.status !== "ongoing") {
    res.status(400);
    throw new Error("Session is not ongoing.");
  }

  const allowedQuestion = session.questionOrder.some((id) => id.toString() === questionId);
  if (!allowedQuestion) {
    res.status(400);
    throw new Error("Question is not part of this test session.");
  }

  const question = await Question.findById(questionId);
  if (!question) {
    res.status(404);
    throw new Error("Question not found.");
  }

  let marksObtained = 0;
  let graded = false;
  if (["mcq", "tf", "numeric", "fill"].includes(question.type)) {
    graded = true;
    if (JSON.stringify(question.correctAnswer) === JSON.stringify(answer)) {
      marksObtained = question.marks || 1;
    }
  }

  const existingAnswer = session.answers.find((item) => item.question.toString() === questionId);
  if (existingAnswer) {
    session.score -= existingAnswer.marksObtained || 0;
    existingAnswer.answer = answer;
    existingAnswer.marksObtained = marksObtained;
    existingAnswer.graded = graded;
    existingAnswer.gradedBy = graded ? "auto" : null;
    existingAnswer.feedback = "";
  } else {
    session.answers.push({
      question: questionId,
      answer,
      marksObtained,
      graded,
      gradedBy: graded ? "auto" : null,
      feedback: "",
    });
  }

  session.score += marksObtained;
  await session.save();
  res.json(session);
});

const finishMockSession = asyncHandler(async (req, res) => {
  const session = await Session.findById(req.params.sessionId)
    .populate("questionOrder")
    .populate("answers.question")
    .populate("testSet")
    .populate("exam");

  if (!session) {
    res.status(404);
    throw new Error("Session not found.");
  }
  if (session.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Forbidden");
  }
  if (session.status !== "ongoing") {
    res.status(400);
    throw new Error("Session is not ongoing.");
  }

  const { breakdown, totalScore, totalMax, pendingManualReview, weaknesses, recommendations } = buildBreakdown(
    session.questionOrder,
    session.answers
  );

  session.finishedAt = new Date();
  session.score = totalScore;
  session.totalMarks = totalMax;
  session.manualReviewRequired = pendingManualReview > 0;
  session.status = pendingManualReview > 0 ? "submitted" : "graded";
  await session.save();

  const result = await Result.findOneAndUpdate(
    { session: session._id },
    {
      session: session._id,
      user: session.user,
      exam: session.exam._id,
      testSet: session.testSet?._id || null,
      breakdown,
      totalScore,
      totalMax,
      weaknesses,
      recommendations,
      pendingManualReview,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  res.json({ session, result });
});

const getMockResult = asyncHandler(async (req, res) => {
  const result = await Result.findById(req.params.resultId)
    .populate("exam")
    .populate("testSet")
    .populate({
      path: "session",
      populate: [{ path: "questionOrder" }, { path: "answers.question" }],
    });

  if (!result) {
    res.status(404);
    throw new Error("Result not found.");
  }

  ensureResultAccess(req, result.user);
  res.json(result);
});

const listMyResults = asyncHandler(async (req, res) => {
  const filters = { user: req.user._id };
  if (req.query.examSlug) {
    const exam = await ensureExamBySlug(req.query.examSlug);
    filters.exam = exam._id;
  }
  const results = await Result.find(filters)
    .populate("exam")
    .populate("testSet")
    .sort({ createdAt: -1 })
    .lean();
  res.json(results);
});

const listAdminResults = asyncHandler(async (req, res) => {
  ensureManager(req);
  const filters = {};
  if (req.query.examSlug) {
    const exam = await ensureExamBySlug(req.query.examSlug);
    filters.exam = exam._id;
  }
  if (req.query.status === "pending-review") {
    filters.pendingManualReview = { $gt: 0 };
  }

  const results = await Result.find(filters)
    .populate("exam")
    .populate("testSet")
    .populate("user", "name email")
    .sort({ createdAt: -1 })
    .lean();
  res.json(results);
});

const manualReviewResult = asyncHandler(async (req, res) => {
  ensureManager(req);
  const result = await Result.findById(req.params.resultId);
  if (!result) {
    res.status(404);
    throw new Error("Result not found.");
  }

  const session = await Session.findById(result.session).populate("questionOrder").populate("answers.question");
  if (!session) {
    res.status(404);
    throw new Error("Session not found.");
  }

  for (const scoreItem of req.body.scores || []) {
    const answer = session.answers.id(scoreItem.answerId);
    if (answer) {
      answer.marksObtained = Number(scoreItem.marks || 0);
      answer.graded = true;
      answer.gradedBy = req.user._id.toString();
      answer.feedback = `${scoreItem.feedback || ""}`.trim();
    }
  }

  const { breakdown, totalScore, totalMax, pendingManualReview, weaknesses, recommendations } = buildBreakdown(
    session.questionOrder,
    session.answers
  );

  session.score = totalScore;
  session.totalMarks = totalMax;
  session.manualReviewRequired = pendingManualReview > 0;
  session.status = pendingManualReview > 0 ? "submitted" : "graded";
  await session.save();

  result.breakdown = breakdown;
  result.totalScore = totalScore;
  result.totalMax = totalMax;
  result.pendingManualReview = pendingManualReview;
  result.weaknesses = weaknesses;
  result.recommendations = recommendations;
  await result.save();

  res.json({ session, result });
});

const getMockAdminSummary = asyncHandler(async (req, res) => {
  ensureManager(req);
  const [examCount, questionCount, testSetCount, publishedSetCount, resultCount, pendingReviewCount] = await Promise.all([
    Exam.countDocuments({ slug: { $in: EXAM_CATALOG.map((item) => item.slug) } }),
    Question.countDocuments({}),
    TestSet.countDocuments({}),
    TestSet.countDocuments({ status: "published" }),
    Result.countDocuments({}),
    Result.countDocuments({ pendingManualReview: { $gt: 0 } }),
  ]);

  res.json({
    examCount,
    questionCount,
    testSetCount,
    publishedSetCount,
    resultCount,
    pendingReviewCount,
  });
});

module.exports = {
  listCatalog,
  getExamLanding,
  listQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  listTestSets,
  createTestSet,
  updateTestSet,
  deleteTestSet,
  startMockSession,
  getMockSession,
  submitMockAnswer,
  finishMockSession,
  getMockResult,
  listMyResults,
  listAdminResults,
  manualReviewResult,
  getMockAdminSummary,
};
