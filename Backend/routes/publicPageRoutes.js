const express = require("express");
const router = express.Router();
const {
  getAdminPublicPages,
  getPublicPageByRouteKey,
  upsertPublicPageByRouteKey,
  createPublicPage,
  deletePublicPage,
} = require("../controllers/publicPageController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

router.get("/admin/all", protect, restrictTo("admin", "content-manager"), getAdminPublicPages);
router.post("/", protect, restrictTo("admin", "content-manager"), createPublicPage);
router.delete("/:id", protect, restrictTo("admin"), deletePublicPage);
router.get("/:routeKey", getPublicPageByRouteKey);
router.put("/:routeKey", protect, restrictTo("admin", "content-manager"), upsertPublicPageByRouteKey);

module.exports = router;
