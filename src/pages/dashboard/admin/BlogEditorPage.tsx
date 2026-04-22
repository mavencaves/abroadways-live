import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ImagePlus, Save, Send, ShieldCheck } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { blogsApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { htmlToPlainText, parseTags, slugify, stringifyTags } from "@/lib/admin-content";
import RichTextEditor from "@/components/dashboard/admin/RichTextEditor";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type BlogStatus = "draft" | "published" | "archived";

type BlogRecord = {
  _id: string;
  title: string;
  slug?: string;
  content: string;
  contentHtml?: string;
  author: string;
  image?: string;
  featuredImage?: string;
  category?: string;
  tags?: string[];
  status: BlogStatus;
};

type FormState = {
  title: string;
  slug: string;
  author: string;
  category: string;
  tags: string;
  status: BlogStatus;
  featuredImage: string;
  contentHtml: string;
  excerpt: string;
};

const DEFAULT_FORM: FormState = {
  title: "",
  slug: "",
  author: "",
  category: "",
  tags: "",
  status: "draft",
  featuredImage: "",
  contentHtml: "<p></p>",
  excerpt: "",
};

export default function BlogEditorPage() {
  const { user } = useAuth();
  const { blogId } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(blogId);
  const canManageBlogs = user ? ["admin", "content-manager"].includes(user.role) : false;

  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!isEditing || !blogId || !canManageBlogs) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const loadBlog = async () => {
      try {
        setLoading(true);
        setLoadError(null);
        const response = await blogsApi.getById(blogId);
        const blog: BlogRecord = response.data;

        if (!isMounted) return;

        setForm({
          title: blog.title || "",
          slug: blog.slug || slugify(blog.title || ""),
          author: blog.author || "",
          category: blog.category || "",
          tags: stringifyTags(blog.tags),
          status: blog.status || "draft",
          featuredImage: blog.featuredImage || blog.image || "",
          contentHtml: blog.contentHtml || `<p>${(blog.content || "").replace(/\n/g, "</p><p>")}</p>`,
          excerpt: blog.content || "",
        });
        setSlugTouched(Boolean(blog.slug));
      } catch (error: any) {
        if (!isMounted) return;
        const message = error?.response?.data?.message || "Failed to load the blog editor.";
        setLoadError(message);
        toast.error(message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadBlog();

    return () => {
      isMounted = false;
    };
  }, [blogId, canManageBlogs, isEditing]);

  const plainTextPreview = useMemo(
    () => htmlToPlainText(form.contentHtml || "").slice(0, 220),
    [form.contentHtml],
  );

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  };

  const handleSave = async (nextStatus?: BlogStatus) => {
    const resolvedStatus = nextStatus || form.status;
    const derivedPlainText = htmlToPlainText(form.contentHtml);

    if (!form.title.trim() || !form.author.trim() || !derivedPlainText.trim()) {
      toast.error("Title, author, and content are required.");
      return;
    }

    const payload = {
      title: form.title.trim(),
      slug: slugify(form.slug || form.title),
      author: form.author.trim(),
      category: form.category.trim(),
      tags: parseTags(form.tags),
      status: resolvedStatus,
      featuredImage: form.featuredImage.trim(),
      image: form.featuredImage.trim(),
      contentHtml: form.contentHtml,
      content: derivedPlainText,
    };

    try {
      setSaving(true);
      if (isEditing && blogId) {
        await blogsApi.update(blogId, payload);
        toast.success("Blog updated successfully.");
      } else {
        await blogsApi.create(payload);
        toast.success(resolvedStatus === "published" ? "Blog published successfully." : "Draft saved successfully.");
      }
      navigate("/dashboard/blogs");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to save the blog.");
    } finally {
      setSaving(false);
    }
  };

  if (!canManageBlogs) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Content Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Blog Editor</h1>
        </div>
        <Card>
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">Only admin and content-manager accounts can access the blog editor.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return <div className="space-y-6 text-sm text-slate-500">Loading blog editor...</div>;
  }

  if (loadError) {
    return (
      <Card>
        <CardContent className="space-y-4 p-8">
          <p className="text-sm font-medium text-red-600">{loadError}</p>
          <Button asChild>
            <Link to="/dashboard/blogs">Back to Blogs</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Button asChild variant="ghost" className="-ml-3 mb-3 text-slate-600">
            <Link to="/dashboard/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Content Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">
            {isEditing ? "Edit Blog" : "Create Blog"}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Build rich editorial content with structured metadata, draft controls, and future-ready media fields.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => handleSave("draft")} disabled={saving} className="gap-2">
            <Save className="h-4 w-4" />
            Save Draft
          </Button>
          <Button onClick={() => handleSave("published")} disabled={saving} className="gap-2">
            <Send className="h-4 w-4" />
            {isEditing ? "Update & Publish" : "Publish"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-5 p-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(event) => handleTitleChange(event.target.value)}
                  placeholder="Write a clear blog title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(event) => {
                    setSlugTouched(true);
                    setForm((prev) => ({ ...prev, slug: slugify(event.target.value) }));
                  }}
                  placeholder="study-abroad-scholarship-guide"
                />
                <p className="text-xs text-slate-500">
                  This is ready for future SEO-friendly public blog routes.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Content</Label>
                <RichTextEditor
                  value={form.contentHtml}
                  onChange={(value) => setForm((prev) => ({ ...prev, contentHtml: value }))}
                  placeholder="Write your article with headings, lists, links, and emphasis..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Plain Text Preview</Label>
                <Textarea
                  id="excerpt"
                  value={plainTextPreview}
                  readOnly
                  rows={5}
                  className="bg-slate-50"
                />
                <p className="text-xs text-slate-500">
                  Existing public pages still use the plain-text fallback until the public blog renderer is upgraded.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-5 p-6">
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={form.author}
                  onChange={(event) => setForm((prev) => ({ ...prev, author: event.target.value }))}
                  placeholder="Abroadways Editorial Team"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={form.category}
                  onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}
                  placeholder="Study Abroad, Scholarships, Visa Guidance"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={form.tags}
                  onChange={(event) => setForm((prev) => ({ ...prev, tags: event.target.value }))}
                  placeholder="uk study, scholarships, visa"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={form.status}
                  onValueChange={(value: BlogStatus) => setForm((prev) => ({ ...prev, status: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-5 p-6">
              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image URL</Label>
                <Input
                  id="featuredImage"
                  type="url"
                  value={form.featuredImage}
                  onChange={(event) => setForm((prev) => ({ ...prev, featuredImage: event.target.value }))}
                  placeholder="https://example.com/blog-cover.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mediaUpload">Future Upload Slot</Label>
                <Input
                  id="mediaUpload"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) {
                      setUploadPreview(null);
                      return;
                    }

                    setUploadPreview(URL.createObjectURL(file));
                  }}
                />
                <p className="text-xs text-slate-500">
                  Upload persistence is not wired yet. For now, paste a hosted image URL above. This file picker prepares the future media flow.
                </p>
              </div>

              {(form.featuredImage || uploadPreview) ? (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img
                    src={uploadPreview || form.featuredImage}
                    alt="Featured preview"
                    className="h-56 w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-44 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm text-slate-500">
                  <ImagePlus className="mb-3 h-6 w-6 text-slate-400" />
                  Add a featured image URL to preview the article cover.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
