const asyncHandler = require('express-async-handler');
const { cloudinary, isCloudinaryConfigured } = require('../lib/cloudinary');

const getFolder = () => process.env.CLOUDINARY_FOLDER || 'abroadways';

const ensureCloudinary = () => {
  if (!isCloudinaryConfigured()) {
    const error = new Error('Cloudinary is not configured on the server.');
    error.statusCode = 500;
    throw error;
  }
};

const toMediaRecord = (resource) => ({
  publicId: resource.public_id,
  url: resource.secure_url || resource.url,
  secureUrl: resource.secure_url || resource.url,
  width: resource.width,
  height: resource.height,
  format: resource.format,
  bytes: resource.bytes,
  createdAt: resource.created_at,
  folder: resource.folder,
});

const listMedia = asyncHandler(async (req, res) => {
  ensureCloudinary();

  const folder = getFolder();
  const result = await cloudinary.search
    .expression(`folder:${folder} AND resource_type:image`)
    .sort_by('created_at', 'desc')
    .max_results(100)
    .execute();

  res.json({
    items: (result.resources || []).map(toMediaRecord),
  });
});

const uploadMedia = asyncHandler(async (req, res) => {
  ensureCloudinary();

  if (!req.file) {
    res.status(400);
    throw new Error('Please choose an image file to upload.');
  }

  const folder = getFolder();
  const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;

  const uploaded = await cloudinary.uploader.upload(dataUri, {
    folder,
    resource_type: 'image',
    overwrite: false,
  });

  res.status(201).json(toMediaRecord(uploaded));
});

const deleteMedia = asyncHandler(async (req, res) => {
  ensureCloudinary();

  const publicId = req.body?.publicId || req.query?.publicId;
  if (!publicId) {
    res.status(400);
    throw new Error('A publicId is required to delete media.');
  }

  const deleted = await cloudinary.uploader.destroy(publicId, {
    resource_type: 'image',
  });

  if (deleted.result !== 'ok' && deleted.result !== 'not found') {
    res.status(400);
    throw new Error('Unable to delete the selected media item.');
  }

  res.json({ message: 'Media deleted successfully.' });
});

module.exports = {
  listMedia,
  uploadMedia,
  deleteMedia,
};
