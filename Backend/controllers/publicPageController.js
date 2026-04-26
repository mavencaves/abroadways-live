const asyncHandler = require("express-async-handler");
const PublicPage = require("../models/publicPageModel");

const isHomeRouteKey = (value = "") => `${value}`.trim().toLowerCase() === "home";

const buildSectionTitleFallback = (key = "") =>
  `${key}`
    .trim()
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const sanitizeSections = (sections = []) =>
  Array.isArray(sections)
    ? sections
        .filter((section) => {
          if (!section) return false;

          const title = typeof section.title === "string" ? section.title.trim() : "";
          const key = typeof section.key === "string" ? section.key.trim() : "";
          const body = typeof section.body === "string" ? section.body.trim() : "";
          const imageUrl = typeof section.imageUrl === "string" ? section.imageUrl.trim() : "";
          const bullets = Array.isArray(section.bullets)
            ? section.bullets.map((bullet) => `${bullet || ""}`.trim()).filter(Boolean)
            : [];

          return Boolean(title || key || body || imageUrl || bullets.length);
        })
        .map((section) => ({
          key: typeof section.key === "string" ? section.key.trim() : "",
          title:
            (typeof section.title === "string" ? section.title.trim() : "") ||
            buildSectionTitleFallback(typeof section.key === "string" ? section.key.trim() : ""),
          body: typeof section.body === "string" ? section.body.trim() : "",
          bullets: Array.isArray(section.bullets)
            ? section.bullets.map((bullet) => `${bullet || ""}`.trim()).filter(Boolean)
            : [],
          imageUrl: typeof section.imageUrl === "string" ? section.imageUrl.trim() : "",
          imageAlt: typeof section.imageAlt === "string" ? section.imageAlt.trim() : "",
        }))
    : [];

const buildPayload = (body = {}, userId = null, routeKeyFromParam = "") => {
  const routeKey = `${body.routeKey || routeKeyFromParam || ""}`.trim().toLowerCase();

  return {
    routeKey,
    slug: `${body.slug || body.routeKey || routeKeyFromParam || ""}`.trim().toLowerCase(),
    name: `${body.name || ""}`.trim(),
    pageTitle: `${body.pageTitle || ""}`.trim(),
    seoTitle: `${body.seoTitle || ""}`.trim(),
    seoDescription: `${body.seoDescription || ""}`.trim(),
    heroKicker: `${body.heroKicker || ""}`.trim(),
    heroTitle: `${body.heroTitle || ""}`.trim(),
    heroSubtitle: `${body.heroSubtitle || body.heroDescription || ""}`.trim(),
    heroImageUrl: `${body.heroImageUrl || body.heroImage || ""}`.trim(),
    heroImageAlt: `${body.heroImageAlt || ""}`.trim(),
    bodyIntro: `${body.bodyIntro || ""}`.trim(),
    sections: sanitizeSections(body.sections),
    ctaTitle: `${body.ctaTitle || ""}`.trim(),
    ctaDescription: `${body.ctaDescription || ""}`.trim(),
    ctaPrimaryText: `${body.ctaPrimaryText || ""}`.trim(),
    ctaPrimaryUrl: `${body.ctaPrimaryUrl || ""}`.trim(),
    ctaSecondaryText: `${body.ctaSecondaryText || ""}`.trim(),
    ctaSecondaryUrl: `${body.ctaSecondaryUrl || ""}`.trim(),
    status: isHomeRouteKey(routeKey)
      ? "published"
      : ["draft", "published", "archived"].includes(`${body.status || ""}`)
        ? body.status
        : "draft",
    updatedBy: userId,
  };
};

const getAdminPublicPages = asyncHandler(async (req, res) => {
  const pages = await PublicPage.find({}).sort({ name: 1 }).lean();
  res.json(pages);
});

const getPublicPageByRouteKey = asyncHandler(async (req, res) => {
  const page = await PublicPage.findOne({
    routeKey: req.params.routeKey.toLowerCase(),
    status: "published",
  }).lean();

  if (!page) {
    res.status(404);
    throw new Error("Public page content not found.");
  }

  res.json(page);
});

const upsertPublicPageByRouteKey = asyncHandler(async (req, res) => {
  const routeKey = `${req.params.routeKey || ""}`.trim().toLowerCase();
  const payload = buildPayload(req.body, req.user?._id || null, routeKey);

  if (!payload.routeKey || !payload.slug || !payload.name || !payload.pageTitle || !payload.heroTitle) {
    res.status(400);
    throw new Error("Route key, slug, name, page title, and hero title are required.");
  }

  const page = await PublicPage.findOneAndUpdate(
    { routeKey },
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

const createPublicPage = asyncHandler(async (req, res) => {
  const payload = buildPayload(req.body, req.user?._id || null);

  if (!payload.routeKey || !payload.slug || !payload.name || !payload.pageTitle || !payload.heroTitle) {
    res.status(400);
    throw new Error("Route key, slug, name, page title, and hero title are required.");
  }

  const existing = await PublicPage.findOne({ routeKey: payload.routeKey });
  if (existing) {
    res.status(409);
    throw new Error("A public page with this route key already exists.");
  }

  const page = await PublicPage.create(payload);
  res.status(201).json(page);
});

const deletePublicPage = asyncHandler(async (req, res) => {
  const page = await PublicPage.findById(req.params.id);

  if (!page) {
    res.status(404);
    throw new Error("Public page content not found.");
  }

  await page.deleteOne();
  res.json({ message: "Public page content deleted." });
});

module.exports = {
  getAdminPublicPages,
  getPublicPageByRouteKey,
  upsertPublicPageByRouteKey,
  createPublicPage,
  deletePublicPage,
};
