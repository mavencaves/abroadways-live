const mongoose = require("mongoose");

const testSetSchema = new mongoose.Schema(
  {
    exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, lowercase: true },
    description: { type: String, trim: true, default: "" },
    instructions: { type: String, trim: true, default: "" },
    durationMinutes: { type: Number, default: 60 },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    sectionConfig: [
      {
        key: { type: String, trim: true },
        title: { type: String, trim: true },
        questionCount: { type: Number, default: 0 },
        durationMinutes: { type: Number, default: 0 },
      },
    ],
    questionIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

testSetSchema.index({ exam: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model("TestSet", testSetSchema);
