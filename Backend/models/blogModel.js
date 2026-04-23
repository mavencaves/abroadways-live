const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, trim: true },
  content: { type: String, required: true },
  contentHtml: { type: String },
  author: { type: String, required: true },
  image: { type: String },
  featuredImage: { type: String },
  category: { type: String, default: 'general' },
  tags: [{ type: String }],
  seoTitle: { type: String },
  metaDescription: { type: String },
  status: { type: String, enum: ['published', 'draft', 'archived'], default: 'draft' },
  clicks: { type: Number, default: 0 },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
