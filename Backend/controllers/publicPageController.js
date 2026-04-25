const asyncHandler = require("express-async-handler");
const PublicPage = require("../models/publicPageModel");

const sanitizeSections = (sections = []) =>
  Array.isArray(sections)
    ? sections
        .filter((section) => section && typeof section.title === "string" && section.title.trim())
        .map((section) => ({
          title: section.title.trim(),
          body: typeof section.body === "string" ? section.body.trim() : "",
          bullets: Array.isArray(section.bullets)
            ? section.bullets.map((bullet) => `${bullet || ""}`.trim()).filter(Boolean)
            : [],
          imageUrl: typeof section.imageUrl === "string" ? section.imageUrl.trim() : "",
          imageAlt: typeof section.imageAlt === "string" ? section.imageAlt.trim() : "",
        }))
    : [];

const getPublicPages = asyncHandler(async (req, res) => {
  const pages = await PublicPage.find({}).sort({ name: 1 }).lean();
  res.json(pages);
});

const getPublicPageBySlug = asyncHandler(async (req, res) => {
  const page = await PublicPage.findOne({ slug: req.params.slug.toLowerCase() }).lean();

  if (!page) {
    res.status(404);
    throw new Error("Public page content not found.");
  }

  res.json(page);
});

const upsertPublicPageBySlug = asyncHandler(async (req, res) => {
  const slug = `${req.params.slug || ""}`.trim().toLowerCase();
  const payload = {
    slug,
    name: `${req.body.name || ""}`.trim(),
    pageTitle: `${req.body.pageTitle || ""}`.trim(),
    seoTitle: `${req.body.seoTitle || ""}`.trim(),
    seoDescription: `${req.body.seoDescription || ""}`.trim(),
    heroKicker: `${req.body.heroKicker || ""}`.trim(),
    heroTitle: `${req.body.heroTitle || ""}`.trim(),
    heroDescription: `${req.body.heroDescription || ""}`.trim(),
    heroImageUrl: `${req.body.heroImageUrl || ""}`.trim(),
    heroImageAlt: `${req.body.heroImageAlt || ""}`.trim(),
    bodyIntro: `${req.body.bodyIntro || ""}`.trim(),
    sections: sanitizeSections(req.body.sections),
    ctaTitle: `${req.body.ctaTitle || ""}`.trim(),
    ctaDescription: `${req.body.ctaDescription || ""}`.trim(),
    ctaPrimaryText: `${req.body.ctaPrimaryText || ""}`.trim(),
    ctaPrimaryUrl: `${req.body.ctaPrimaryUrl || ""}`.trim(),
    ctaSecondaryText: `${req.body.ctaSecondaryText || ""}`.trim(),
    ctaSecondaryUrl: `${req.body.ctaSecondaryUrl || ""}`.trim(),
    updatedBy: req.user?._id || null,
  };

  if (!payload.slug || !payload.name || !payload.pageTitle || !payload.heroTitle) {
    res.status(400);
    throw new Error("Slug, name, page title, and hero title are required.");
  }

  const page = await PublicPage.findOneAndUpdate(
    { slug },
    payload,
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  );

  res.json(page);
});

module.exports = {
  getPublicPages,
  getPublicPageBySlug,
  upsertPublicPageBySlug,
};
