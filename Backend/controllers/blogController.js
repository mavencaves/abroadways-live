const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');

const allowedStatuses = ['draft', 'published', 'archived'];

const slugify = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const normalizeTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (typeof tags === 'string') {
    return tags.split(',').map((tag) => tag.trim()).filter(Boolean);
  }

  return [];
};

const htmlToPlainText = (html = '') =>
  html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<\/(p|div|h1|h2|h3|h4|h5|h6|li|blockquote)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const buildBlogPayload = (body, existingBlog) => {
  const {
    title,
    slug,
    content,
    contentHtml,
    author,
    image,
    featuredImage,
    category,
    tags,
    seoTitle,
    metaDescription,
    status,
  } = body;

  const normalizedStatus = allowedStatuses.includes(status) ? status : existingBlog?.status || 'draft';
  const normalizedHtml = contentHtml || existingBlog?.contentHtml || '';
  const plainTextContent =
    content && String(content).trim()
      ? content
      : normalizedHtml
        ? htmlToPlainText(normalizedHtml)
        : existingBlog?.content || '';
  const resolvedTitle = title || existingBlog?.title || '';
  const resolvedImage = featuredImage !== undefined ? featuredImage : image;
  const normalizedSlug = slug ? slugify(slug) : slugify(resolvedTitle);

  return {
    title: resolvedTitle,
    slug: normalizedSlug,
    content: plainTextContent,
    contentHtml: normalizedHtml || undefined,
    author: author || existingBlog?.author || '',
    image: resolvedImage !== undefined ? resolvedImage : existingBlog?.image,
    featuredImage: resolvedImage !== undefined ? resolvedImage : existingBlog?.featuredImage,
    category: category || existingBlog?.category || 'general',
    tags: normalizeTags(tags),
    seoTitle: seoTitle || existingBlog?.seoTitle || '',
    metaDescription: metaDescription || existingBlog?.metaDescription || '',
    status: normalizedStatus,
  };
};

const createBlog = asyncHandler(async (req, res) => {
  const payload = buildBlogPayload(req.body);
  const blog = await Blog.create(payload);
  res.status(201).json(blog);
});

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    const payload = buildBlogPayload(req.body, blog);
    blog.title = payload.title;
    blog.slug = payload.slug;
    blog.content = payload.content;
    blog.contentHtml = payload.contentHtml;
    blog.author = payload.author;
    blog.image = payload.image;
    blog.featuredImage = payload.featuredImage;
    blog.category = payload.category;
    blog.tags = payload.tags;
    blog.seoTitle = payload.seoTitle;
    blog.metaDescription = payload.metaDescription;
    blog.status = payload.status;
    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (blog) {
    res.json({ message: 'Blog removed' });
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

module.exports = { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
