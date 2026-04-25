const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
  testSet: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSet', default: null },
  breakdown: Object, // e.g. { listening: {score, max}, writing: {...} }
  totalScore: Number,
  totalMax: { type: Number, default: 0 },
  convertedBand: Object, // e.g. { type: 'IELTS', band: 7.0 }
  weaknesses: [{ type: String }],
  recommendations: [{ type: String }],
  pendingManualReview: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);
