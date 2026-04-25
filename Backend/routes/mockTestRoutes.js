const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controllers/mockTestController");

router.get("/catalog", controller.listCatalog);
router.get("/exams/:examSlug", controller.getExamLanding);
router.get("/exams/:examSlug/test-sets", controller.listTestSets);

router.get("/questions", protect, controller.listQuestions);
router.post("/questions", protect, controller.createQuestion);
router.put("/questions/:questionId", protect, controller.updateQuestion);
router.delete("/questions/:questionId", protect, controller.deleteQuestion);

router.get("/test-sets", protect, controller.listTestSets);
router.post("/test-sets", protect, controller.createTestSet);
router.put("/test-sets/:testSetId", protect, controller.updateTestSet);
router.delete("/test-sets/:testSetId", protect, controller.deleteTestSet);

router.post("/sessions/start", protect, controller.startMockSession);
router.get("/sessions/:sessionId", protect, controller.getMockSession);
router.post("/sessions/:sessionId/answer", protect, controller.submitMockAnswer);
router.post("/sessions/:sessionId/finish", protect, controller.finishMockSession);

router.get("/results/me", protect, controller.listMyResults);
router.get("/results/admin/all", protect, controller.listAdminResults);
router.get("/results/:resultId", protect, controller.getMockResult);
router.post("/results/:resultId/manual-review", protect, controller.manualReviewResult);

router.get("/admin/summary", protect, controller.getMockAdminSummary);

module.exports = router;
