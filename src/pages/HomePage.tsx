import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  BriefcaseBusiness,
  ChevronRight,
  Compass,
  FileCheck2,
  Globe2,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { publicPagesApi } from "@/lib/api";
import {
  CONTACT_ADDRESS,
  CONTACT_PHONES,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from "@/data/contact-info";
import {
  PUBLIC_PAGE_DEFAULTS,
  type PublicPageContent,
  type PublicPageSection,
} from "@/data/public-page-defaults";

const homeFallback = PUBLIC_PAGE_DEFAULTS.home;

const stats = [
  { value: "20,000+", label: "Students Guided" },
  { value: "350+", label: "Partner Universities" },
  { value: "25+", label: "Countries Covered" },
];

const serviceMeta = [
  {
    key: "service-study-abroad",
    title: "Study Abroad",
    text: "Country planning, counselling, applications, and visa direction.",
    icon: GraduationCap,
  },
  {
    key: "service-exams",
    title: "Test Preparation",
    text: "Structured preparation across major English and graduate exams.",
    icon: BookOpenCheck,
  },
  {
    key: "service-abroadai",
    title: "Digital Support",
    text: "Mock tests, AbroadAI, and student tools that keep momentum strong.",
    icon: Bot,
  },
];

const destinationsMeta = [
  { key: "destination-uk", title: "UK", href: "/study-abroad/uk" },
  { key: "destination-canada", title: "Canada", href: "/study-abroad/canada" },
  { key: "destination-australia", title: "Australia", href: "/study-abroad/australia" },
  { key: "destination-europe", title: "Europe", href: "/study-abroad/europe" },
  { key: "destination-malaysia", title: "Malaysia", href: "/study-abroad/malaysia" },
];

const processSteps = [
  {
    title: "Profile Analysis",
    text: "We start with your academic background, budget, timeline, and destination fit.",
    icon: Compass,
  },
  {
    title: "Strategy Building",
    text: "A clear roadmap across exams, universities, documents, and next steps.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Application & Visa",
    text: "Structured support from shortlist to final submission and visa preparation.",
    icon: FileCheck2,
  },
];

const examsMeta = [
  { key: "exam-ielts", title: "IELTS", href: "/exams/ielts/overview" },
  { key: "exam-pte", title: "PTE", href: "/exams/pte/overview" },
  { key: "exam-toefl", title: "TOEFL", href: "/exams/toefl/overview" },
  { key: "exam-languagecert", title: "LanguageCert", href: "/exams/overview" },
  { key: "exam-gre", title: "GRE", href: "/exams/gre/overview" },
  { key: "exam-gmat", title: "GMAT", href: "/exams/gmat/overview" },
];

const testimonials = [
  {
    name: "Sadia Rahman",
    destination: "Canada",
    text: "The process felt clear from the very first consultation.",
    image: "/images/success1.webp",
  },
  {
    name: "Tahmid Karim",
    destination: "United Kingdom",
    text: "I always knew the next step, which made planning much easier.",
    image: "/images/success2.webp",
  },
  {
    name: "Nusrat Jahan",
    destination: "Australia",
    text: "The guidance felt professional, practical, and student-first.",
    image: "/images/success3.webp",
  },
];

function mergeHomeContent(page: Partial<PublicPageContent> | null | undefined): PublicPageContent {
  if (!page) return homeFallback;

  return {
    ...homeFallback,
    ...page,
    sections:
      Array.isArray(page.sections) && page.sections.length > 0
        ? page.sections.map((section) => ({
            ...section,
            bullets: [...(section.bullets || [])],
          }))
        : homeFallback.sections,
  };
}

function findSection(sections: PublicPageSection[], key: string) {
  return sections.find((section) => section.key === key) || homeFallback.sections.find((section) => section.key === key);
}

export default function HomePage() {
  const [pageContent, setPageContent] = useState<PublicPageContent>(homeFallback);

  useEffect(() => {
    let mounted = true;

    const loadPage = async () => {
      try {
        const response = await publicPagesApi.getByRouteKey("home");
        if (mounted) {
          setPageContent(mergeHomeContent(response.data));
        }
      } catch {
        if (mounted) {
          setPageContent(homeFallback);
        }
      }
    };

    loadPage();

    return () => {
      mounted = false;
    };
  }, []);

  const services = useMemo(
    () =>
      serviceMeta.map((item) => {
        const section = findSection(pageContent.sections, item.key);

        return {
          ...item,
          image: section?.imageUrl || "",
          imageAlt: section?.imageAlt || item.title,
        };
      }),
    [pageContent.sections],
  );

  const destinations = useMemo(
    () =>
      destinationsMeta.map((item) => {
        const section = findSection(pageContent.sections, item.key);

        return {
          ...item,
          image: section?.imageUrl || "",
          imageAlt: section?.imageAlt || item.title,
        };
      }),
    [pageContent.sections],
  );

  const exams = useMemo(
    () =>
      examsMeta.map((item) => {
        const section = findSection(pageContent.sections, item.key);

        return {
          ...item,
          image: section?.imageUrl || "",
          imageAlt: section?.imageAlt || item.title,
        };
      }),
    [pageContent.sections],
  );

  const heroImage = pageContent.heroImageUrl || homeFallback.heroImageUrl;
  const heroImageAlt = pageContent.heroImageAlt || homeFallback.heroImageAlt;
  const ctaBackground = findSection(pageContent.sections, "cta-background")?.imageUrl || "";
  const heroTitle = pageContent.heroTitle || homeFallback.heroTitle;
  const heroSubtitle = pageContent.heroSubtitle || homeFallback.heroSubtitle;
  const finalCtaTitle = pageContent.ctaTitle || homeFallback.ctaTitle || "Start your study abroad journey today";
  const finalCtaButtonText =
    pageContent.ctaPrimaryText || homeFallback.ctaPrimaryText || "Book Free Consultation";

  return (
    <main className="bg-[#041126] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#041126_0%,#08204a_45%,#0b2f73_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_26%),radial-gradient(circle_at_center_right,rgba(250,204,21,0.08),transparent_20%)]" />
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:px-8 lg:py-18">
          <div className="relative z-10 space-y-7">
            <div className="inline-flex items-center rounded-full border border-cyan-300/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
              Abroadways
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                {heroTitle}
              </h1>
              <p className="max-w-xl text-base leading-8 text-blue-100/88 md:text-lg">
                {heroSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="xl" className="shadow-[0_20px_55px_rgba(37,99,235,0.30)]">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/15 bg-white/8 text-white hover:bg-white/12 hover:text-white"
              >
                <Link to="/study-abroad">
                  Explore Study Abroad
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {["UK", "Canada", "Europe", "Australia"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "UKVI Approved LanguageCert Test Center",
                "ICEF Accredited",
                "AIRC Certified",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-cyan-300/12 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-cyan-300/18 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-12 hidden h-36 w-36 rounded-full bg-amber-300/10 blur-3xl lg:block" />
            <div className="overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/8 p-3 shadow-[0_40px_120px_rgba(2,8,23,0.28)] backdrop-blur">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="h-[430px] w-full rounded-[2rem] object-cover sm:h-[540px] lg:h-[700px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#0a2149_0%,#071a3f_100%)] py-8">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_24px_70px_rgba(2,8,23,0.16)] backdrop-blur"
              >
                <p className="text-4xl font-semibold tracking-tight text-white">{item.value}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06152f] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">What We Do</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              One premium platform for students planning bigger futures
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.key}
                  className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/7 shadow-[0_24px_70px_rgba(2,8,23,0.16)] backdrop-blur"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.10)_0%,rgba(2,6,23,0.60)_100%)]" />
                  </div>
                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,#0b2f73_0%,#38bdf8_100%)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-blue-100/82">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#071a3f_0%,#0a2352_100%)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Popular Destinations</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
                Destination pathways with stronger visual presence
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit border-white/15 bg-white/8 text-white hover:bg-white/12 hover:text-white">
              <Link to="/study-abroad">Explore Study Abroad</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {destinations.map((item, index) => (
              <Link
                key={item.key}
                to={item.href}
                className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 shadow-[0_24px_70px_rgba(2,8,23,0.16)] backdrop-blur transition duration-300 hover:-translate-y-1 ${
                  index < 2 ? "xl:col-span-2" : ""
                } ${index === 2 ? "xl:col-span-1" : ""}`}
              >
                <div className={`relative overflow-hidden ${index < 2 ? "h-80" : "h-72"}`}>
                  <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.10)_0%,rgba(2,6,23,0.62)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-3xl font-semibold tracking-tight text-white">{item.title}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                      Explore
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06152f] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Our Process</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              A simpler path from interest to international movement
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/7 p-6 shadow-[0_24px_70px_rgba(2,8,23,0.16)] backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-13 w-13 items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,#0b2f73_0%,#38bdf8_100%)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                      Step {index + 1}
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/82">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#071a3f_0%,#0b2a67_100%)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Exam Preparation</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              Premium prep tracks for major language and graduate exams
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {exams.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 shadow-[0_24px_70px_rgba(2,8,23,0.16)] backdrop-blur transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.62)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-3xl font-semibold tracking-tight text-white">{item.title}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06152f] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Success Stories</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              Student journeys, shared simply
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 shadow-[0_24px_70px_rgba(2,8,23,0.16)] backdrop-blur"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.52)_100%)]" />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center rounded-full border border-cyan-300/12 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                    {item.destination}
                  </div>
                  <p className="mt-4 text-lg leading-8 text-blue-100/90">"{item.text}"</p>
                  <p className="mt-4 text-base font-semibold text-white">{item.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#071a3f_0%,#0b2a67_100%)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div
            className="overflow-hidden rounded-[2.6rem] border border-white/10 p-8 shadow-[0_36px_100px_rgba(2,8,23,0.18)] backdrop-blur lg:p-12"
            style={{
              backgroundImage: ctaBackground
                ? `linear-gradient(135deg, rgba(7,26,63,0.88) 0%, rgba(11,42,103,0.84) 100%), url(${ctaBackground})`
                : "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.06) 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  Final CTA
                </div>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  {finalCtaTitle}
                </h2>
                <div className="mt-8">
                  <Button asChild size="xl" className="shadow-[0_20px_55px_rgba(37,99,235,0.30)]">
                    <Link to="/contact">
                      {finalCtaButtonText}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Address</p>
                  <p className="mt-2 leading-7 text-white">{CONTACT_ADDRESS}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Phone</p>
                  <p className="mt-2 leading-7 text-white">{CONTACT_PHONES.join(", ")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Social</p>
                  <div className="mt-2 flex flex-col gap-1 leading-7">
                    <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-white hover:text-cyan-200">
                      www.facebook.com/abroadways
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white hover:text-cyan-200">
                      instagram.com/abroadwaysbd
                    </a>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-blue-100">
                  <Globe2 className="h-4 w-4 text-cyan-200" />
                  Trusted support for students planning bigger futures.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
