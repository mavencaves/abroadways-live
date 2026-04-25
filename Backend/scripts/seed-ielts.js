require('dotenv').config();
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Exam = require('../models/examModel');
const Question = require('../models/questionModel');
const TestSet = require('../models/testSetModel');

const DATASET_PATH = path.join(__dirname, '..', 'data', 'mock-tests', 'ielts-question-bank.sample.json');
const TEST_SET_TITLE = 'IELTS Starter Mock Test 1';
const TEST_SET_SLUG = 'ielts-starter-mock-test-1';

const IELTS_EXAM_TEMPLATE = {
  title: 'IELTS',
  slug: 'ielts',
  description: 'Original IELTS practice for listening, reading, writing, and speaking inside Abroadways Mock Tests.',
  sections: [
    {
      key: 'listening',
      title: 'Listening',
      durationMinutes: 30,
      instructions: 'Listen carefully and answer objective questions using original practice material.',
    },
    {
      key: 'reading',
      title: 'Reading',
      durationMinutes: 60,
      instructions: 'Read the passage carefully and answer each question based only on the text provided.',
    },
    {
      key: 'writing',
      title: 'Writing',
      durationMinutes: 60,
      instructions: 'Complete Task 1 and Task 2 using clear structure, relevant detail, and accurate language.',
    },
    {
      key: 'speaking',
      title: 'Speaking',
      durationMinutes: 15,
      instructions: 'Respond naturally and fully to cue cards and follow-up prompts.',
    },
  ],
};

function createSeedKey(examSlug, question) {
  const payload = {
    examSlug,
    sectionKey: question.sectionKey,
    type: question.type,
    text: question.text,
    passageId: question.meta?.passageId || '',
    scriptId: question.meta?.scriptId || '',
    taskType: question.meta?.taskType || '',
    linkedPrompt: question.meta?.linkedPrompt || '',
  };

  return crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex');
}

function buildSectionConfig(questions, examSections) {
  const sectionTitleMap = new Map((examSections || []).map((section) => [section.key, section.title || section.key]));
  const counts = new Map();

  for (const question of questions) {
    const current = counts.get(question.sectionKey) || 0;
    counts.set(question.sectionKey, current + 1);
  }

  return [...counts.entries()].map(([key, questionCount]) => ({
    key,
    title: sectionTitleMap.get(key) || key,
    questionCount,
    durationMinutes: 0,
  }));
}

async function main() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not set. Please configure the backend environment first.');
    process.exit(1);
  }

  if (!fs.existsSync(DATASET_PATH)) {
    console.error(`Dataset file not found: ${DATASET_PATH}`);
    process.exit(1);
  }

  const dataset = JSON.parse(fs.readFileSync(DATASET_PATH, 'utf8'));

  if (dataset.examSlug !== 'ielts' || !Array.isArray(dataset.questions) || dataset.questions.length === 0) {
    console.error('The IELTS dataset is missing a valid examSlug or question array.');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const exam = await Exam.findOneAndUpdate(
      { slug: 'ielts' },
      IELTS_EXAM_TEMPLATE,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    const insertedQuestionIds = [];
    let createdQuestions = 0;
    let updatedQuestions = 0;

    for (const question of dataset.questions) {
      const seedKey = createSeedKey(dataset.examSlug, question);
      const payload = {
        exam: exam._id,
        sectionKey: question.sectionKey,
        type: question.type,
        text: question.text,
        options: Array.isArray(question.options) ? question.options : [],
        correctAnswer: question.correctAnswer,
        marks: Number(question.marks || 1),
        difficulty: question.difficulty || 'medium',
        tags: Array.isArray(question.tags) ? question.tags : [],
        explanation: question.explanation || '',
        sourceType: 'original',
        isActive: question.isActive !== false,
        meta: {
          ...(question.meta || {}),
          seedDataset: dataset.datasetName || 'IELTS sample bank',
          seedVersion: dataset.version || 1,
          seedKey,
        },
      };

      const existing = await Question.findOne({ exam: exam._id, 'meta.seedKey': seedKey });

      if (existing) {
        Object.assign(existing, payload);
        await existing.save();
        insertedQuestionIds.push(existing._id);
        updatedQuestions += 1;
      } else {
        const created = await Question.create(payload);
        insertedQuestionIds.push(created._id);
        createdQuestions += 1;
      }
    }

    const testSetPayload = {
      exam: exam._id,
      title: TEST_SET_TITLE,
      slug: TEST_SET_SLUG,
      description: 'A published starter IELTS mock test built from the original Abroadways IELTS sample question bank.',
      instructions:
        'This starter test set includes reading, listening, writing, and speaking practice prompts created for the Abroadways mock-test platform.',
      durationMinutes: 165,
      accessType: 'free',
      price: 0,
      currency: 'BDT',
      status: 'published',
      sectionConfig: buildSectionConfig(dataset.questions, exam.sections),
      questionIds: insertedQuestionIds,
      updatedBy: null,
    };

    const existingTestSet = await TestSet.findOne({ exam: exam._id, slug: TEST_SET_SLUG });

    if (existingTestSet) {
      Object.assign(existingTestSet, testSetPayload);
      await existingTestSet.save();
    } else {
      await TestSet.create({
        ...testSetPayload,
        createdBy: null,
      });
    }

    console.log(`IELTS seed complete for exam: ${exam.title}`);
    console.log(`Questions created: ${createdQuestions}`);
    console.log(`Questions updated: ${updatedQuestions}`);
    console.log(`Starter test set ensured: ${TEST_SET_TITLE}`);
  } finally {
    await mongoose.disconnect();
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
