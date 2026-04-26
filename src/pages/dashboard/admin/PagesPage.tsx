import { useEffect, useMemo, useRef, useState } from "react";
import { Edit3, ImageIcon, LayoutTemplate, LoaderCircle, Plus, Save, Search, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { mediaApi, publicPagesApi } from "@/lib/api";
import {
  MANAGED_PUBLIC_PAGE_SLUGS,
  PUBLIC_PAGE_DEFAULTS,
  type PublicPageContent,
  type PublicPageSection,
} from "@/data/public-page-defaults";

type PageStatus = "draft" | "published" | "archived";

type PublicPageRecord = PublicPageContent & {
  _id?: string;
  routeKey: string;
  status: PageStatus;
  updatedAt?: string;
};

const managedPages = MANAGED_PUBLIC_PAGE_SLUGS.map((slug) => PUBLIC_PAGE_DEFAULTS[slug]);

const clonePage = (page: PublicPageContent): PublicPageRecord => ({
  ...page,
  routeKey: page.routeKey || page.slug,
  status: (page.routeKey || page.slug) === "home" ? "published" : "draft",
  sections: page.sections.map((section) => ({
    ...section,
    bullets: [...(section.bullets || [])],
  })),
});

const blankPage = (): PublicPageRecord => ({
  routeKey: "",
  slug: "",
  name: "",
  pageTitle: "",
  seoTitle: "",
  seoDescription: "",
  heroKicker: "",
  heroTitle: "",
  heroSubtitle: "",
  heroImageUrl: "",
  heroImageAlt: "",
  bodyIntro: "",
  sections: [{ key: "", title: "", body: "", bullets: [], imageUrl: "", imageAlt: "" }],
  ctaTitle: "",
  ctaDescription: "",
  ctaPrimaryText: "",
  ctaPrimaryUrl: "",
  ctaSecondaryText: "",
  ctaSecondaryUrl: "",
  status: "draft",
});

function ImageFieldEditor({
  label,
  value,
  altValue,
  onValueChange,
  onAltChange,
}: {
  label: string;
  value: string;
  altValue: string;
  onValueChange: (value: string) => void;
  onAltChange: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file?: File) => {
    if (!file) return;

    try {
      setUploading(true);
      const response = await mediaApi.upload(file);
      const nextUrl = response.data?.secureUrl || response.data?.url || "";
      if (!nextUrl) {
        throw new Error("Upload finished without an image URL.");
      }
      onValueChange(nextUrl);
      toast.success("Image uploaded and linked.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error?.message || "Failed to upload image.");
    } finally {
      setUploading(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <ImageIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
            placeholder={`${label} URL`}
            className="pl-10"
          />
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => handleUpload(event.target.files?.[0])}
        />
        <Button
          type="button"
          variant="outline"
          className="gap-2"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
        >
          {uploading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
          {uploading ? "Uploading..." : "Upload Image"}
        </Button>
      </div>
      <Input
        value={altValue}
        onChange={(event) => onAltChange(event.target.value)}
        placeholder={`${label} alt text`}
      />
      {value ? (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <img src={value} alt={altValue || label} className="h-48 w-full object-cover" />
        </div>
      ) : null}
    </div>
  );
}

export default function PagesPage() {
  const { user } = useAuth();
  const [pages, setPages] = useState<Record<string, PublicPageRecord>>(
    Object.fromEntries(managedPages.map((page) => [page.routeKey || page.slug, clonePage(page)]))
  );
  const [selectedKey, setSelectedKey] = useState(managedPages[0]?.routeKey || managedPages[0]?.slug || "finance");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [draftPage, setDraftPage] = useState<PublicPageRecord>(blankPage());

  const canManagePages = user ? ["admin", "content-manager"].includes(user.role) : false;
  const canDeletePages = user?.role === "admin";

  useEffect(() => {
    const loadPages = async () => {
      if (!canManagePages) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await publicPagesApi.getAllAdmin();
        const incoming = Array.isArray(response.data) ? response.data : [];
        setPages((prev) => {
          const next = { ...prev };
          for (const page of incoming) {
            const key = page.routeKey || page.slug;
            const fallback = PUBLIC_PAGE_DEFAULTS[key] ? clonePage(PUBLIC_PAGE_DEFAULTS[key]) : blankPage();
            next[key] = {
              ...fallback,
              ...page,
              routeKey: key,
              status: page.status || "draft",
              sections:
                Array.isArray(page.sections) && page.sections.length > 0
                  ? page.sections.map((section: PublicPageSection) => ({
                      ...section,
                      key: section.key || "",
                      bullets: [...(section.bullets || [])],
                    }))
                  : fallback.sections,
            };
          }
          return next;
        });
      } catch (err: any) {
        setError(err?.response?.data?.message || "Failed to load editable public pages.");
      } finally {
        setLoading(false);
      }
    };

    loadPages();
  }, [canManagePages]);

  const visiblePages = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return Object.values(pages).filter((page) => {
      if (!query) return true;
      return (
        page.name.toLowerCase().includes(query) ||
        page.routeKey.toLowerCase().includes(query) ||
        page.slug.toLowerCase().includes(query)
      );
    });
  }, [pages, searchTerm]);

  const selectedPage = isCreating ? draftPage : pages[selectedKey] || clonePage(PUBLIC_PAGE_DEFAULTS[selectedKey]);

  const updatePage = (updater: (page: PublicPageRecord) => PublicPageRecord) => {
    if (isCreating) {
      setDraftPage((prev) => updater(prev));
      return;
    }

    setPages((prev) => ({
      ...prev,
      [selectedKey]: updater(prev[selectedKey] || clonePage(PUBLIC_PAGE_DEFAULTS[selectedKey])),
    }));
  };

  const updateSection = (index: number, updater: (section: PublicPageSection) => PublicPageSection) => {
    updatePage((page) => ({
      ...page,
      sections: page.sections.map((section, sectionIndex) => (sectionIndex === index ? updater(section) : section)),
    }));
  };

  const buildPayload = (page: PublicPageRecord) => ({
    routeKey: page.routeKey.trim().toLowerCase(),
    slug: page.slug.trim().toLowerCase(),
    name: page.name.trim(),
    pageTitle: page.pageTitle.trim(),
    seoTitle: page.seoTitle?.trim() || "",
    seoDescription: page.seoDescription?.trim() || "",
    heroKicker: page.heroKicker?.trim() || "",
    heroTitle: page.heroTitle.trim(),
    heroSubtitle: page.heroSubtitle?.trim() || "",
    heroImageUrl: page.heroImageUrl?.trim() || "",
    heroImageAlt: page.heroImageAlt?.trim() || "",
    bodyIntro: page.bodyIntro?.trim() || "",
    sections: page.sections
      .filter((section) => section.title.trim())
      .map((section) => ({
        title: section.title.trim(),
        body: section.body?.trim() || "",
        bullets: (section.bullets || []).map((bullet) => bullet.trim()).filter(Boolean),
        imageUrl: section.imageUrl?.trim() || "",
        imageAlt: section.imageAlt?.trim() || "",
        key: section.key?.trim() || "",
      })),
    ctaTitle: page.ctaTitle?.trim() || "",
    ctaDescription: page.ctaDescription?.trim() || "",
    ctaPrimaryText: page.ctaPrimaryText?.trim() || "",
    ctaPrimaryUrl: page.ctaPrimaryUrl?.trim() || "",
    ctaSecondaryText: page.ctaSecondaryText?.trim() || "",
    ctaSecondaryUrl: page.ctaSecondaryUrl?.trim() || "",
    status: page.status,
  });

  const validatePage = (page: PublicPageRecord) => {
    if (!page.routeKey.trim() || !page.slug.trim() || !page.name.trim() || !page.pageTitle.trim() || !page.heroTitle.trim()) {
      toast.error("Route key, slug, name, page title, and hero heading are required.");
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validatePage(selectedPage)) return;

    try {
      setSaving(true);
      const payload = buildPayload(selectedPage);
      const response = isCreating
        ? await publicPagesApi.create(payload)
        : await publicPagesApi.updateByRouteKey(selectedKey, payload);

      const responseKey = response.data.routeKey || response.data.slug;
      setPages((prev) => ({
        ...prev,
        [responseKey]: {
          ...(PUBLIC_PAGE_DEFAULTS[responseKey] ? clonePage(PUBLIC_PAGE_DEFAULTS[responseKey]) : blankPage()),
          ...response.data,
          routeKey: responseKey,
          status: response.data.status || "draft",
          sections:
            Array.isArray(response.data.sections) && response.data.sections.length > 0
              ? response.data.sections.map((section: PublicPageSection) => ({
                  ...section,
                  key: section.key || "",
                  bullets: [...(section.bullets || [])],
                }))
              : (PUBLIC_PAGE_DEFAULTS[responseKey] ? clonePage(PUBLIC_PAGE_DEFAULTS[responseKey]) : blankPage()).sections,
        },
      }));
      setSelectedKey(responseKey);
      setIsCreating(false);
      setDraftPage(blankPage());
      toast.success(isCreating ? "Public page created." : "Public page updated.");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to save public page content.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!canDeletePages || !selectedPage._id) return;
    const confirmed = window.confirm(`Delete "${selectedPage.name}"? This will remove the editable override for this page.`);
    if (!confirmed) return;

    try {
      setDeleting(true);
      await publicPagesApi.delete(selectedPage._id);
      setPages((prev) => {
        const next = { ...prev };
        if (PUBLIC_PAGE_DEFAULTS[selectedKey]) {
          next[selectedKey] = clonePage(PUBLIC_PAGE_DEFAULTS[selectedKey]);
        } else {
          delete next[selectedKey];
        }
        return next;
      });
      setSelectedKey(managedPages[0]?.routeKey || managedPages[0]?.slug || "finance");
      toast.success("Public page content deleted.");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete public page content.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading editable public pages...</div>;
  }

  if (!canManagePages) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="p-8 text-sm text-slate-600">
            Only admin and content-manager accounts can manage editable public page content.
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-6 p-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Public CMS</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Editable Pages</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Admin and content-manager accounts can manage public page copy, CTA text, image URLs, and publishing status.
          </p>
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-5">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search pages"
                  className="pl-10"
                />
              </div>
              <Button
                type="button"
                variant="outline"
                className="gap-2"
                onClick={() => {
                  setIsCreating(true);
                  setDraftPage(blankPage());
                }}
              >
                <Plus className="h-4 w-4" />
                Create Page
              </Button>
            </div>

            <div className="space-y-3">
              {visiblePages.map((page) => (
                <button
                  key={page.routeKey}
                  type="button"
                  onClick={() => {
                    setIsCreating(false);
                    setSelectedKey(page.routeKey);
                  }}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    !isCreating && selectedKey === page.routeKey
                      ? "border-blue-300 bg-blue-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-slate-900">{page.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{page.routeKey}</p>
                    </div>
                    <LayoutTemplate className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Badge className={statusClass(page.status)}>{formatStatus(page.status)}</Badge>
                    <span className="text-xs text-slate-500">Slug: {page.slug}</span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-6 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {isCreating ? "Create public page content" : `Edit ${selectedPage.name || "public page"}`}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Use media-library or Cloudinary URLs directly in the image fields.
                </p>
                {selectedPage.routeKey === "home" ? (
                  <p className="mt-2 text-xs font-medium text-blue-700">
                    Homepage note: keep status set to `Published` or the public homepage will continue using fallback content.
                  </p>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2">
                {!isCreating && canDeletePages && selectedPage._id ? (
                  <Button type="button" variant="outline" className="gap-2" onClick={handleDelete} disabled={deleting}>
                    <Trash2 className="h-4 w-4" />
                    {deleting ? "Deleting..." : "Delete"}
                  </Button>
                ) : null}
                <Button type="button" onClick={handleSave} disabled={saving} className="gap-2">
                  <Save className="h-4 w-4" />
                  {saving ? "Saving..." : isCreating ? "Create" : "Save"}
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Input
                value={selectedPage.name}
                onChange={(event) => updatePage((page) => ({ ...page, name: event.target.value }))}
                placeholder="Page title label"
              />
              <Input
                value={selectedPage.pageTitle}
                onChange={(event) => updatePage((page) => ({ ...page, pageTitle: event.target.value }))}
                placeholder="Page title"
              />
              <Input
                value={selectedPage.routeKey}
                onChange={(event) => updatePage((page) => ({ ...page, routeKey: event.target.value }))}
                placeholder="Route key"
              />
              <Input
                value={selectedPage.slug}
                onChange={(event) => updatePage((page) => ({ ...page, slug: event.target.value }))}
                placeholder="Slug"
              />
              <Input
                value={selectedPage.seoTitle || ""}
                onChange={(event) => updatePage((page) => ({ ...page, seoTitle: event.target.value }))}
                placeholder="SEO title"
              />
              <select
                value={selectedPage.status}
                onChange={(event) => updatePage((page) => ({ ...page, status: event.target.value as PageStatus }))}
                className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <Textarea
              value={selectedPage.seoDescription || ""}
              onChange={(event) => updatePage((page) => ({ ...page, seoDescription: event.target.value }))}
              placeholder="SEO description"
              className="min-h-24"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <Input
                value={selectedPage.heroKicker || ""}
                onChange={(event) => updatePage((page) => ({ ...page, heroKicker: event.target.value }))}
                placeholder="Hero kicker"
              />
              <Input
                value={selectedPage.heroTitle}
                onChange={(event) => updatePage((page) => ({ ...page, heroTitle: event.target.value }))}
                placeholder="Hero heading"
              />
            </div>

            <Textarea
              value={selectedPage.heroSubtitle || ""}
              onChange={(event) => updatePage((page) => ({ ...page, heroSubtitle: event.target.value }))}
              placeholder="Hero subtitle"
              className="min-h-24"
            />

            <ImageFieldEditor
              label="Hero image"
              value={selectedPage.heroImageUrl || ""}
              altValue={selectedPage.heroImageAlt || ""}
              onValueChange={(value) => updatePage((page) => ({ ...page, heroImageUrl: value }))}
              onAltChange={(value) => updatePage((page) => ({ ...page, heroImageAlt: value }))}
            />

            <Textarea
              value={selectedPage.bodyIntro || ""}
              onChange={(event) => updatePage((page) => ({ ...page, bodyIntro: event.target.value }))}
              placeholder="Body intro"
              className="min-h-28"
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Body sections</p>
                  <p className="text-sm text-slate-500">Title, body copy, bullets, and image/photo URL are supported.</p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="gap-2"
                  onClick={() =>
                    updatePage((page) => ({
                      ...page,
                      sections: [...page.sections, { key: "", title: "", body: "", bullets: [], imageUrl: "", imageAlt: "" }],
                    }))
                  }
                >
                  <Plus className="h-4 w-4" />
                  Add Section
                </Button>
              </div>

              {selectedPage.sections.map((section, index) => (
                <div key={`${selectedPage.routeKey}-section-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                      <Edit3 className="h-4 w-4 text-blue-700" />
                      Section {index + 1}
                      </div>
                      {section.key ? (
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {section.key}
                        </p>
                      ) : null}
                    </div>
                    {selectedPage.sections.length > 1 ? (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-red-600 hover:text-red-700"
                        onClick={() =>
                          updatePage((page) => ({
                            ...page,
                            sections: page.sections.filter((_, sectionIndex) => sectionIndex !== index),
                          }))
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </Button>
                    ) : null}
                  </div>

                    <div className="grid gap-4">
                    <Input
                      value={section.key || ""}
                      onChange={(event) => updateSection(index, (current) => ({ ...current, key: event.target.value }))}
                      placeholder="Section key"
                    />
                    <Input
                      value={section.title}
                      onChange={(event) => updateSection(index, (current) => ({ ...current, title: event.target.value }))}
                      placeholder="Section title"
                    />
                    <Textarea
                      value={section.body || ""}
                      onChange={(event) => updateSection(index, (current) => ({ ...current, body: event.target.value }))}
                      placeholder="Section body"
                      className="min-h-24"
                    />
                    <Textarea
                      value={(section.bullets || []).join("\n")}
                      onChange={(event) =>
                        updateSection(index, (current) => ({
                          ...current,
                          bullets: event.target.value.split("\n"),
                        }))
                      }
                      placeholder="One bullet per line"
                      className="min-h-24"
                    />
                    <ImageFieldEditor
                      label={section.title || section.key || `Section ${index + 1} image`}
                      value={section.imageUrl || ""}
                      altValue={section.imageAlt || ""}
                      onValueChange={(value) =>
                        updateSection(index, (current) => ({ ...current, imageUrl: value }))
                      }
                      onAltChange={(value) =>
                        updateSection(index, (current) => ({ ...current, imageAlt: value }))
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-900">CTA area</p>
              <Input
                value={selectedPage.ctaTitle || ""}
                onChange={(event) => updatePage((page) => ({ ...page, ctaTitle: event.target.value }))}
                placeholder="CTA title"
              />
              <Textarea
                value={selectedPage.ctaDescription || ""}
                onChange={(event) => updatePage((page) => ({ ...page, ctaDescription: event.target.value }))}
                placeholder="CTA description"
                className="min-h-24"
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  value={selectedPage.ctaPrimaryText || ""}
                  onChange={(event) => updatePage((page) => ({ ...page, ctaPrimaryText: event.target.value }))}
                  placeholder="CTA button text"
                />
                <Input
                  value={selectedPage.ctaPrimaryUrl || ""}
                  onChange={(event) => updatePage((page) => ({ ...page, ctaPrimaryUrl: event.target.value }))}
                  placeholder="CTA button link"
                />
                <Input
                  value={selectedPage.ctaSecondaryText || ""}
                  onChange={(event) => updatePage((page) => ({ ...page, ctaSecondaryText: event.target.value }))}
                  placeholder="Secondary CTA text"
                />
                <Input
                  value={selectedPage.ctaSecondaryUrl || ""}
                  onChange={(event) => updatePage((page) => ({ ...page, ctaSecondaryUrl: event.target.value }))}
                  placeholder="Secondary CTA link"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function formatStatus(status: PageStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function statusClass(status: PageStatus) {
  if (status === "published") return "bg-emerald-100 text-emerald-700";
  if (status === "archived") return "bg-slate-200 text-slate-700";
  return "bg-amber-100 text-amber-700";
}
