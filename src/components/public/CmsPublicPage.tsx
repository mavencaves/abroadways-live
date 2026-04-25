import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { publicPagesApi } from "@/lib/api";
import type { PublicPageContent } from "@/data/public-page-defaults";

type CmsPublicPageProps = {
  slug: string;
  fallback: PublicPageContent;
};

export default function CmsPublicPage({ slug, fallback }: CmsPublicPageProps) {
  const [pageContent, setPageContent] = useState<PublicPageContent>(fallback);

  useEffect(() => {
    let isMounted = true;

    const loadPage = async () => {
      try {
        const response = await publicPagesApi.getBySlug(slug);
        if (!isMounted || !response?.data) return;
        setPageContent({
          ...fallback,
          ...response.data,
          sections: Array.isArray(response.data.sections) && response.data.sections.length > 0 ? response.data.sections : fallback.sections,
        });
      } catch {
        if (isMounted) {
          setPageContent(fallback);
        }
      }
    };

    loadPage();
    return () => {
      isMounted = false;
    };
  }, [fallback, slug]);

  const sections = useMemo(
    () => (Array.isArray(pageContent.sections) && pageContent.sections.length > 0 ? pageContent.sections : fallback.sections),
    [fallback.sections, pageContent.sections]
  );

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">
              {pageContent.heroKicker || pageContent.pageTitle}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
              {pageContent.heroTitle}
            </h1>
            {pageContent.heroDescription ? (
              <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
                {pageContent.heroDescription}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-4">
              {pageContent.ctaPrimaryText && pageContent.ctaPrimaryUrl ? (
                <CtaLink
                  to={pageContent.ctaPrimaryUrl}
                  variant="primary"
                  label={pageContent.ctaPrimaryText}
                />
              ) : null}
              {pageContent.ctaSecondaryText && pageContent.ctaSecondaryUrl ? (
                <CtaLink
                  to={pageContent.ctaSecondaryUrl}
                  variant="secondary"
                  label={pageContent.ctaSecondaryText}
                />
              ) : null}
            </div>
          </div>

          {pageContent.heroImageUrl ? (
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-[0_24px_70px_rgba(2,8,23,0.28)] backdrop-blur-sm">
              <img
                src={pageContent.heroImageUrl}
                alt={pageContent.heroImageAlt || pageContent.pageTitle}
                className="h-full max-h-[440px] w-full rounded-[1.4rem] object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {pageContent.bodyIntro ? (
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Page Overview</p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{pageContent.bodyIntro}</p>
            </div>
          ) : null}

          <div className="mt-10 grid gap-6">
            {sections.map((section) => (
              <div
                key={`${pageContent.slug}-${section.title}`}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <div className={`grid gap-6 ${section.imageUrl ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
                    {section.body ? (
                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{section.body}</p>
                    ) : null}
                    {section.bullets && section.bullets.length > 0 ? (
                      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="rounded-2xl bg-slate-50 px-4 py-3"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {section.imageUrl ? (
                    <div className="overflow-hidden rounded-[1.6rem] border border-slate-200">
                      <img
                        src={section.imageUrl}
                        alt={section.imageAlt || section.title}
                        className="h-full min-h-[240px] w-full object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(pageContent.ctaTitle || pageContent.ctaDescription) && (
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-8 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                {pageContent.ctaTitle ? (
                  <h2 className="text-3xl font-semibold text-slate-950">{pageContent.ctaTitle}</h2>
                ) : null}
                {pageContent.ctaDescription ? (
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{pageContent.ctaDescription}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-3">
                {pageContent.ctaPrimaryText && pageContent.ctaPrimaryUrl ? (
                  <CtaLink to={pageContent.ctaPrimaryUrl} variant="cta" label={pageContent.ctaPrimaryText} />
                ) : null}
                {pageContent.ctaSecondaryText && pageContent.ctaSecondaryUrl ? (
                  <CtaLink to={pageContent.ctaSecondaryUrl} variant="outline" label={pageContent.ctaSecondaryText} />
                ) : null}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function CtaLink({
  to,
  label,
  variant,
}: {
  to: string;
  label: string;
  variant: "primary" | "secondary" | "cta" | "outline";
}) {
  const className =
    variant === "primary" || variant === "cta"
      ? "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
      : variant === "secondary"
        ? "inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        : "inline-flex items-center gap-2 rounded-full border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50";

  const content = (
    <>
      {label}
      <ArrowRight className="h-4 w-4" />
    </>
  );

  if (to.startsWith("mailto:") || to.startsWith("http")) {
    return (
      <a href={to} className={className} target={to.startsWith("http") ? "_blank" : undefined} rel={to.startsWith("http") ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  );
}
