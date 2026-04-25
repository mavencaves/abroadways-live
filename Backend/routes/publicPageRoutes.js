const express = require("express");
const router = express.Router();
const {
  getPublicPages,
  getPublicPageBySlug,
  upsertPublicPageBySlug,
} = require("../controllers/publicPageController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

router.get("/", getPublicPages);
router.get("/:slug", getPublicPageBySlug);
router.put("/:slug", protect, restrictTo("admin", "content-manager"), upsertPublicPageBySlug);

module.exports = router;
