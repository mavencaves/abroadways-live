import { useEffect, useMemo, useState } from "react";
import { Edit3, ImageIcon, LayoutTemplate, Plus, Save, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { publicPagesApi } from "@/lib/api";
import { MANAGED_PUBLIC_PAGE_SLUGS, PUBLIC_PAGE_DEFAULTS, type PublicPageContent, type PublicPageSection } from "@/data/public-page-defaults";

type PublicPageRecord = PublicPageContent & {
  _id?: string;
  updatedAt?: string;
};

const managedPages = MANAGED_PUBLIC_PAGE_SLUGS.map((slug) => PUBLIC_PAGE_DEFAULTS[slug]);

const clonePage = (page: PublicPageContent): PublicPageRecord => ({
  ...page,
  sections: page.sections.map((section) => ({
    ...section,
    bullets: [...(section.bullets || [])],
  })),
});

export default function PagesPage() {
  const { user } = useAuth();
  const [pages, setPages] = useState<Record<string, PublicPageRecord>>(
    Object.fromEntries(managedPages.map((page) => [page.slug, clonePage(page)]))
  );
  const [selectedSlug, setSelectedSlug] = useState(managedPages[0]?.slug || "finance");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canManagePages = user ? ["admin", "content-manager"].includes(user.role) : false;

  useEffect(() => {
    const loadPages = async () => {
      if (!canManagePages) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await publicPagesApi.getAll();
        const incoming = Array.isArray(response.data) ? response.data : [];
        setPages((prev) => {
          const next = { ...prev };
          for (const page of incoming) {
            if (page.slug && next[page.slug]) {
              next[page.slug] = {
                ...clonePage(PUBLIC_PAGE_DEFAULTS[page.slug]),
                ...page,
                sections:
                  Array.isArray(page.sections) && page.sections.length > 0
                    ? page.sections.map((section: PublicPageSection) => ({
                        ...section,
                        bullets: [...(section.bullets || [])],
                      }))
                    : clonePage(PUBLIC_PAGE_DEFAULTS[page.slug]).sections,
              };
            }
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
    return managedPages.filter((page) => {
      if (!query) return true;
      return page.name.toLowerCase().includes(query) || page.slug.toLowerCase().includes(query);
    });
  }, [searchTerm]);

  const selectedPage = pages[selectedSlug] || clonePage(PUBLIC_PAGE_DEFAULTS[selectedSlug]);

  const updateSelectedPage = (updater: (page: PublicPageRecord) => PublicPageRecord) => {
    setPages((prev) => ({
      ...prev,
      [selectedSlug]: updater(prev[selectedSlug] || clonePage(PUBLIC_PAGE_DEFAULTS[selectedSlug])),
    }));
  };

  const updateSection = (index: number, updater: (section: PublicPageSection) => PublicPageSection) => {
    updateSelectedPage((page) => ({
      ...page,
      sections: page.sections.map((section, sectionIndex) => (sectionIndex === index ? updater(section) : section)),
    }));
  };

  const handleSave = async () => {
    if (!selectedPage.pageTitle.trim() || !selectedPage.heroTitle.trim()) {
      toast.error("Page title and hero title are required.");
      return;
    }

    try {
      setSaving(true);
      const payload = {
        name: selectedPage.name.trim(),
        pageTitle: selectedPage.pageTitle.trim(),
        seoTitle: selectedPage.seoTitle?.trim() || "",
        seoDescription: selectedPage.seoDescription?.trim() || "",
        heroKicker: selectedPage.heroKicker?.trim() || "",
        heroTitle: selectedPage.heroTitle.trim(),
        heroDescription: selectedPage.heroDescription?.trim() || "",
        heroImageUrl: selectedPage.heroImageUrl?.trim() || "",
        heroImageAlt: selectedPage.heroImageAlt?.trim() || "",
        bodyIntro: selectedPage.bodyIntro?.trim() || "",
        sections: selectedPage.sections
          .filter((section) => section.title.trim())
          .map((section) => ({
            title: section.title.trim(),
            body: section.body?.trim() || "",
            bullets: (section.bullets || []).map((bullet) => bullet.trim()).filter(Boolean),
            imageUrl: section.imageUrl?.trim() || "",
            imageAlt: section.imageAlt?.trim() || "",
          })),
        ctaTitle: selectedPage.ctaTitle?.trim() || "",
        ctaDescription: selectedPage.ctaDescription?.trim() || "",
        ctaPrimaryText: selectedPage.ctaPrimaryText?.trim() || "",
        ctaPrimaryUrl: selectedPage.ctaPrimaryUrl?.trim() || "",
        ctaSecondaryText: selectedPage.ctaSecondaryText?.trim() || "",
        ctaSecondaryUrl: selectedPage.ctaSecondaryUrl?.trim() || "",
      };

      const response = await publicPagesApi.updateBySlug(selectedSlug, payload);
      setPages((prev) => ({
        ...prev,
        [selectedSlug]: {
          ...clonePage(PUBLIC_PAGE_DEFAULTS[selectedSlug]),
          ...response.data,
          sections:
            Array.isArray(response.data.sections) && response.data.sections.length > 0
              ? response.data.sections.map((section: PublicPageSection) => ({
                  ...section,
                  bullets: [...(section.bullets || [])],
                }))
              : clonePage(PUBLIC_PAGE_DEFAULTS[selectedSlug]).sections,
        },
      }));
      toast.success("Public page content updated.");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to save public page content.");
    } finally {
      setSaving(false);
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
            Manage the remaining launch-facing public pages without touching the rest of the site structure.
          </p>
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search managed pages"
                className="pl-10"
              />
            </div>

            <div className="space-y-3">
              {visiblePages.map((page) => {
                const current = pages[page.slug] || clonePage(page);
                return (
                  <button
                    key={page.slug}
                    type="button"
                    onClick={() => setSelectedSlug(page.slug)}
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      selectedSlug === page.slug
                        ? "border-blue-300 bg-blue-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-slate-900">{page.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{page.slug}</p>
                      </div>
                      <LayoutTemplate className="h-4 w-4 text-slate-400" />
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm text-slate-600">{current.heroTitle}</p>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-6 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-900">{selectedPage.name}</p>
                <p className="mt-1 text-sm text-slate-500">Edit hero copy, body sections, CTAs, and image URLs.</p>
              </div>
              <Button onClick={handleSave} disabled={saving} className="gap-2">
                <Save className="h-4 w-4" />
                {saving ? "Saving..." : "Save Page"}
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Input value={selectedPage.name} onChange={(event) => updateSelectedPage((page) => ({ ...page, name: event.target.value }))} placeholder="Internal page name" />
              <Input value={selectedPage.pageTitle} onChange={(event) => updateSelectedPage((page) => ({ ...page, pageTitle: event.target.value }))} placeholder="Page title" />
              <Input value={selectedPage.seoTitle || ""} onChange={(event) => updateSelectedPage((page) => ({ ...page, seoTitle: event.target.value }))} placeholder="SEO title" />
              <Input value={selectedPage.heroKicker || ""} onChange={(event) => updateSelectedPage((page) => ({ ...page, heroKicker: event.target.value }))} placeholder="Hero kicker" />
            </div>

            <Input
              value={selectedPage.heroTitle}
              onChange={(event) => updateSelectedPage((page) => ({ ...page, heroTitle: event.target.value }))}
              placeholder="Hero title"
            />

            <Textarea
              value={selectedPage.heroDescription || ""}
              onChange={(event) => updateSelectedPage((page) => ({ ...page, heroDescription: event.target.value }))}
              placeholder="Hero description"
              className="min-h-28"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <Input
                value={selectedPage.heroImageUrl || ""}
                onChange={(event) => updateSelectedPage((page) => ({ ...page, heroImageUrl: event.target.value }))}
                placeholder="Hero image URL"
              />
              <Input
                value={selectedPage.heroImageAlt || ""}
                onChange={(event) => updateSelectedPage((page) => ({ ...page, heroImageAlt: event.target.value }))}
                placeholder="Hero image alt text"
              />
            </div>

            <Textarea
              value={selectedPage.bodyIntro || ""}
              onChange={(event) => updateSelectedPage((page) => ({ ...page, bodyIntro: event.target.value }))}
              placeholder="Body intro"
              className="min-h-28"
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Body sections</p>
                  <p className="text-sm text-slate-500">Each section supports text, bullets, and an image URL.</p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="gap-2"
                  onClick={() =>
                    updateSelectedPage((page) => ({
                      ...page,
                      sections: [...page.sections, { title: "", body: "", bullets: [], imageUrl: "", imageAlt: "" }],
                    }))
                  }
                >
                  <Plus className="h-4 w-4" />
                  Add Section
                </Button>
              </div>

              {selectedPage.sections.map((section, index) => (
                <div key={`${selectedPage.slug}-section-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                      <Edit3 className="h-4 w-4 text-blue-700" />
                      Section {index + 1}
                    </div>
                    {selectedPage.sections.length > 1 ? (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-red-600 hover:text-red-700"
                        onClick={() =>
                          updateSelectedPage((page) => ({
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
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="relative">
                        <ImageIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <Input
                          value={section.imageUrl || ""}
                          onChange={(event) => updateSection(index, (current) => ({ ...current, imageUrl: event.target.value }))}
                          placeholder="Section image URL"
                          className="pl-10"
                        />
                      </div>
                      <Input
                        value={section.imageAlt || ""}
                        onChange={(event) => updateSection(index, (current) => ({ ...current, imageAlt: event.target.value }))}
                        placeholder="Section image alt text"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-900">CTA area</p>
              <Input value={selectedPage.ctaTitle || ""} onChange={(event) => updateSelectedPage((page) => ({ ...page, ctaTitle: event.target.value }))} placeholder="CTA title" />
              <Textarea value={selectedPage.ctaDescription || ""} onChange={(event) => updateSelectedPage((page) => ({ ...page, ctaDescription: event.target.value }))} placeholder="CTA description" className="min-h-24" />
              <div className="grid gap-4 md:grid-cols-2">
                <Input value={selectedPage.ctaPrimaryText || ""} onChange={(event) => updateSelectedPage((page) => ({ ...page, ctaPrimaryText: event.target.value }))} placeholder="Primary CTA text" />
                <Input value={selectedPage.ctaPrimaryUrl || ""} onChange={(event) => updateSelectedPage((page) => ({ ...page, ctaPrimaryUrl: event.target.value }))} placeholder="Primary CTA URL" />
                <Input value={selectedPage.ctaSecondaryText || ""} onChange={(event) => updateSelectedPage((page) => ({ ...page, ctaSecondaryText: event.target.value }))} placeholder="Secondary CTA text" />
                <Input value={selectedPage.ctaSecondaryUrl || ""} onChange={(event) => updateSelectedPage((page) => ({ ...page, ctaSecondaryUrl: event.target.value }))} placeholder="Secondary CTA URL" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
