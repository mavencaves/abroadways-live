const mongoose = require("mongoose");

const publicPageSectionSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    body: { type: String, trim: true, default: "" },
    bullets: [{ type: String, trim: true }],
    imageUrl: { type: String, trim: true, default: "" },
    imageAlt: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

const publicPageSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    name: { type: String, required: true, trim: true },
    pageTitle: { type: String, required: true, trim: true },
    seoTitle: { type: String, trim: true, default: "" },
    seoDescription: { type: String, trim: true, default: "" },
    heroKicker: { type: String, trim: true, default: "" },
    heroTitle: { type: String, required: true, trim: true },
    heroDescription: { type: String, trim: true, default: "" },
    heroImageUrl: { type: String, trim: true, default: "" },
    heroImageAlt: { type: String, trim: true, default: "" },
    bodyIntro: { type: String, trim: true, default: "" },
    sections: [publicPageSectionSchema],
    ctaTitle: { type: String, trim: true, default: "" },
    ctaDescription: { type: String, trim: true, default: "" },
    ctaPrimaryText: { type: String, trim: true, default: "" },
    ctaPrimaryUrl: { type: String, trim: true, default: "" },
    ctaSecondaryText: { type: String, trim: true, default: "" },
    ctaSecondaryUrl: { type: String, trim: true, default: "" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PublicPage", publicPageSchema);
