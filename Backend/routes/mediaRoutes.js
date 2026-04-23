const express = require('express');
const multer = require('multer');
const { listMedia, uploadMedia, deleteMedia } = require('../controllers/mediaController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Only image uploads are supported.'));
      return;
    }
    cb(null, true);
  },
});

router.use(protect, restrictTo('admin', 'content-manager'));

router.route('/')
  .get(listMedia)
  .post(upload.single('file'), uploadMedia)
  .delete(deleteMedia);

module.exports = router;
