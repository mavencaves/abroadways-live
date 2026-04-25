const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  sectionKey: String,
  type: { type: String, enum: ['mcq','tf','fill','numeric','essay','speaking','image'], default: 'mcq' },
  text: String,
  options: [String],
  correctAnswer: mongoose.Schema.Types.Mixed,
  marks: { type: Number, default: 1 },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  tags: [{ type: String, trim: true }],
  explanation: { type: String, default: "" },
  sourceType: { type: String, enum: ['original'], default: 'original' },
  isActive: { type: Boolean, default: true },
  meta: Object, // e.g. listening audio url, image urls
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
