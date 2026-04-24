const express = require('express');
const router = express.Router();
const {
  createChatSession,
  getChatSessions,
  getChatSessionById,
  updateChatSessionTitle,
  deleteChatSession,
  sendChatMessage,
  sendDemoMessage,
  getChatAdminInsights,
} = require('../controllers/chatController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.post('/demo', sendDemoMessage);

router.use(protect);

router.get('/admin/insights', restrictTo('admin', 'content-manager'), getChatAdminInsights);

router
  .route('/sessions')
  .get(getChatSessions)
  .post(createChatSession);

router
  .route('/sessions/:id')
  .get(getChatSessionById)
  .patch(updateChatSessionTitle)
  .delete(deleteChatSession);

router.route('/sessions/:id/messages').post(sendChatMessage);

module.exports = router;
