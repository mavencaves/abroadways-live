import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  ChevronRight,
  Clock3,
  Globe2,
  GraduationCap,
  Landmark,
  Languages,
  MapPin,
  MonitorPlay,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventsApi, publicPagesApi } from "@/lib/api";
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

type EventCard = {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
};

const homeFallback = PUBLIC_PAGE_DEFAULTS.home;

const introStats = [
  { label: "Students Guided", value: "20,000+" },
  { label: "Partner Universities", value: "350+" },
  { label: "Test Preparation", value: "6 Tracks" },
  { label: "Countries Covered", value: "25+" },
];

const serviceMeta = [
  { key: "service-study-abroad", icon: GraduationCap },
  { key: "service-exams", icon: Languages },
  { key: "service-mock-tests", icon: MonitorPlay },
  { key: "service-abroadai", icon: Bot },
  { key: "service-student-portal", icon: Sparkles },
];

const examMeta = [
  { key: "exam-ielts" },
  { key: "exam-pte" },
  { key: "exam-toefl" },
  { key: "exam-languagecert" },
  { key: "exam-gre" },
  { key: "exam-gmat" },
];

const destinationMeta = [
  { key: "destination-uk" },
  { key: "destination-canada" },
  { key: "destination-australia" },
  { key: "destination-europe" },
  { key: "destination-malaysia" },
];

const accreditationMeta = [
  { key: "accreditation-ukvi", icon: ShieldCheck },
  { key: "accreditation-icef", icon: Trophy },
  { key: "accreditation-airc", icon: Landmark },
];

const testimonials = [
  {
    name: "Sadia Rahman",
    text: "Everything felt more structured, from planning to application support.",
    image: "/images/success1.webp",
  },
  {
    name: "Tahmid Karim",
    text: "The exam prep and study abroad guidance felt polished and genuinely useful.",
    image: "/images/success2.webp",
  },
  {
    name: "Nusrat Jahan",
    text: "I always knew the next step, which made the whole journey feel manageable.",
    image: "/images/success3.webp",
  },
];

const formatEventDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

function mergeHomeContent(page: Partial<PublicPageContent> | null | undefined): PublicPageContent {
  if (!page) {
    return homeFallback;
  }

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
  const [activeExamKey, setActiveExamKey] = useState("exam-ielts");
  const [events, setEvents] = useState<EventCard[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
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

  useEffect(() => {
    let mounted = true;

    const loadEvents = async () => {
      try {
        const response = await eventsApi.getAll();
        const list = Array.isArray(response.data) ? response.data : [];

        if (mounted) {
          setEvents(list.slice(0, 2));
        }
      } catch {
        if (mounted) {
          setEvents([]);
        }
      } finally {
        if (mounted) {
          setEventsLoading(false);
        }
      }
    };

    loadEvents();

    return () => {
      mounted = false;
    };
  }, []);

  const serviceHighlights = useMemo(
    () =>
      serviceMeta.map((item) => {
        const section = findSection(pageContent.sections, item.key);

        return {
          key: item.key,
          title: section?.title || "",
          href: section?.body || "/contact",
          image: section?.imageUrl || "",
          imageAlt: section?.imageAlt || section?.title || "",
          icon: item.icon,
        };
      }),
    [pageContent.sections],
  );

  const examTabs = useMemo(
    () =>
      examMeta.map((item) => {
        const section = findSection(pageContent.sections, item.key);

        return {
          key: item.key,
          title: section?.title || "",
          href: section?.bullets?.[0] || "/exams/overview",
          image: section?.imageUrl || "",
          imageAlt: section?.imageAlt || section?.title || "",
          line: section?.body || "",
        };
      }),
    [pageContent.sections],
  );

  const destinations = useMemo(
    () =>
      destinationMeta.map((item) => {
        const section = findSection(pageContent.sections, item.key);

        return {
          key: item.key,
          title: section?.title || "",
          href: section?.body || "/study-abroad",
          image: section?.imageUrl || "",
          imageAlt: section?.imageAlt || section?.title || "",
        };
      }),
    [pageContent.sections],
  );

  const accreditations = useMemo(
    () =>
      accreditationMeta.map((item) => {
        const section = findSection(pageContent.sections, item.key);

        return {
          key: item.key,
          title: section?.title || "",
          image: section?.imageUrl || "",
          imageAlt: section?.imageAlt || section?.title || "",
          icon: item.icon,
        };
      }),
    [pageContent.sections],
  );

  const ctaBackground = useMemo(
    () => findSection(pageContent.sections, "cta-background")?.imageUrl || "",
    [pageContent.sections],
  );

  const activeExam = useMemo(
    () => examTabs.find((item) => item.key === activeExamKey) || examTabs[0],
    [activeExamKey, examTabs],
  );

  return (
    <main className="bg-[#f4f8fe] text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-200">
            <span className="inline-flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-cyan-300" />
              {CONTACT_PHONES[0]}
            </span>
            <span>{CONTACT_PHONES[1]}</span>
            <span>{CONTACT_PHONES[2]}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="rounded-full bg-white text-slate-950 hover:bg-slate-100"
            >
              <Link to="/contact">Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/15 hover:text-white"
            >
              <Link to="/contact">Apply Study Abroad</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#031226_0%,#09224f_58%,#f4f8fe_58%,#f4f8fe_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_26%),radial-gradient(circle_at_center_right,rgba(37,99,235,0.18),transparent_24%)]" />
        <div className="relative mx-auto max-w-[1240px] px-5 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
          <div className="grid gap-7 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-10">
            <div className="rounded-[2.4rem] bg-[linear-gradient(180deg,rgba(6,20,47,0.98)_0%,rgba(11,42,103,0.94)_100%)] p-8 text-white shadow-[0_34px_100px_rgba(2,8,23,0.28)] sm:p-10 lg:p-12">
              <div className="inline-flex w-fit items-center rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                {pageContent.heroKicker || "Abroadways"}
              </div>
              <h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                {pageContent.heroTitle}
              </h1>
              {pageContent.heroSubtitle ? (
                <p className="mt-5 max-w-lg text-base leading-8 text-blue-100/90 md:text-lg">
                  {pageContent.heroSubtitle}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="xl" className="shadow-[0_20px_55px_rgba(37,99,235,0.30)]">
                  <Link to="/contact">
                    Book Free Consultation
                    <ArrowRight />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Trusted guidance for Bangladeshi students",
                  "UKVI Approved LanguageCert Test Center",
                  "ICEF Accredited",
                  "AIRC Certified",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-10 hidden h-24 w-24 rounded-full bg-cyan-300/25 blur-2xl lg:block" />
              <div className="absolute -right-4 bottom-10 hidden h-28 w-28 rounded-full bg-blue-500/20 blur-2xl lg:block" />
              <div className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/70 p-3 shadow-[0_40px_120px_rgba(2,8,23,0.18)] backdrop-blur">
                <img
                  src={pageContent.heroImageUrl || homeFallback.heroImageUrl}
                  alt={pageContent.heroImageAlt || pageContent.pageTitle}
                  className="h-[420px] w-full rounded-[2rem] object-cover sm:h-[520px] lg:h-[690px]"
                />
              </div>
            </div>
          </div>

          <div className="-mt-7 grid gap-4 px-1 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5 xl:px-4">
            {introStats.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-[2rem] border p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] backdrop-blur ${
                  index === 0
                    ? "border-blue-200 bg-[linear-gradient(180deg,#ffffff_0%,#eef6ff_100%)]"
                    : "border-slate-200/80 bg-white/94"
                }`}
              >
                <p className="text-4xl font-semibold tracking-tight text-slate-950">{item.value}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 pt-4 lg:pb-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2.15rem] bg-[linear-gradient(180deg,#0a2352_0%,#06142f_100%)] p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Abroadways Platform</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {pageContent.bodyIntro || "Your complete study abroad and exam preparation platform"}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {serviceHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.10)_0%,rgba(2,6,23,0.64)_100%)]" />
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/14 text-white backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <p className="text-xl font-semibold leading-tight">{item.title}</p>
                        <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                          Explore
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Courses / Exam Prep</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Premium exam preparation, shown like a real product.
              </h2>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {examTabs.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveExamKey(item.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeExam.key === item.key
                    ? "bg-slate-950 text-white shadow-lg"
                    : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {activeExam ? (
            <div className="mt-8 overflow-hidden rounded-[2.45rem] border border-slate-200 bg-slate-950 text-white shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
              <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
                <div className="relative min-h-[340px] overflow-hidden sm:min-h-[460px] lg:min-h-[540px]">
                  <img src={activeExam.image} alt={activeExam.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.40)_100%)]" />
                </div>
                <div className="flex flex-col justify-between gap-8 bg-[linear-gradient(180deg,#06142f_0%,#0b2a67_100%)] p-8 lg:p-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Featured Track</p>
                    <h3 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">{activeExam.title}</h3>
                    <p className="mt-4 max-w-md text-base leading-8 text-blue-100/90">{activeExam.line}</p>
                  </div>
                  <Button
                    asChild
                    size="xl"
                    variant="secondary"
                    className="w-fit rounded-full bg-white text-slate-950 hover:bg-slate-100"
                  >
                    <Link to={activeExam.href}>
                      Learn More
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Study Abroad</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Destination pathways that feel like a premium product area.
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full border-slate-300 bg-white">
              <Link to="/study-abroad">Explore Study Abroad</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {destinations.map((item, index) => (
              <Link
                key={item.key}
                to={item.href}
                className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)] ${
                  index < 2 ? "xl:col-span-2" : ""
                } ${index === 2 ? "xl:col-span-1" : ""}`}
              >
                <div className={`relative overflow-hidden ${index < 2 ? "h-80" : "h-72"}`}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.10)_0%,rgba(2,6,23,0.60)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-3xl font-semibold tracking-tight">{item.title}</p>
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

      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Accreditation</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Recognised standards that strengthen the Abroadways experience.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {accreditations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.key}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#071a3f_0%,#0b2a67_100%)] p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
                >
                  {item.image ? (
                    <div className="overflow-hidden rounded-[1.4rem] border border-white/12 bg-white/10 p-4">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-16 w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-white/12 backdrop-blur">
                      <Icon className="h-6 w-6 text-cyan-200" />
                    </div>
                  )}
                  <h3 className="mt-10 text-2xl font-semibold tracking-tight">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2.25rem] bg-[linear-gradient(180deg,#0a2352_0%,#06142f_100%)] p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Events</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Student events and education sessions</h2>

              <div className="mt-8 space-y-4">
                {eventsLoading ? (
                  <div className="rounded-[1.6rem] border border-white/12 bg-white/10 p-5 text-sm text-blue-100/90">
                    Loading upcoming events...
                  </div>
                ) : events.length > 0 ? (
                  events.map((event) => (
                    <article
                      key={event._id}
                      className="rounded-[1.6rem] border border-white/12 bg-white/10 p-5 backdrop-blur"
                    >
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <div className="mt-3 space-y-2 text-sm text-blue-100/90">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-cyan-200" />
                          <span>{formatEventDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-cyan-200" />
                          <span>{event.time || "Time to be announced"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-cyan-200" />
                          <span>{event.location || "Venue to be announced"}</span>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="rounded-[1.6rem] border border-white/12 bg-white/10 p-6 backdrop-blur">
                    <p className="text-2xl font-semibold">Upcoming education events will appear here.</p>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="mt-5 rounded-full bg-white text-slate-950 hover:bg-slate-100"
                    >
                      <Link to="/contact">Request Event Updates</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {testimonials.slice(0, 2).map((item) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.06)]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.56)_100%)]" />
                  </div>
                  <div className="p-6">
                    <p className="text-lg leading-8 text-slate-700">"{item.text}"</p>
                    <p className="mt-4 text-base font-semibold text-slate-950">{item.name}</p>
                  </div>
                </article>
              ))}
              <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-7 shadow-[0_18px_48px_rgba(15,23,42,0.06)] lg:col-span-2">
                <div className="grid gap-5 sm:grid-cols-[0.84fr_1.16fr] sm:items-center">
                  <div className="relative h-64 overflow-hidden rounded-[1.6rem]">
                    <img
                      src={testimonials[2].image}
                      alt={testimonials[2].name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.42)_100%)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Student Voice</p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      "{testimonials[2].text}"
                    </p>
                    <p className="mt-4 text-base font-semibold text-slate-700">{testimonials[2].name}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-18 pt-2 lg:pb-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div
            className="overflow-hidden rounded-[2.5rem] text-white shadow-[0_36px_100px_rgba(2,8,23,0.18)]"
            style={{
              backgroundImage: ctaBackground
                ? `linear-gradient(135deg, rgba(6,20,47,0.84) 0%, rgba(11,42,103,0.78) 58%, rgba(37,99,235,0.74) 100%), url(${ctaBackground})`
                : "linear-gradient(135deg,#06142f 0%,#0b2a67 58%,#2563eb 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid lg:grid-cols-[1fr_0.86fr]">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Final CTA
                </div>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  {pageContent.ctaTitle || homeFallback.ctaTitle}
                </h2>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="secondary" className="bg-white text-slate-950 hover:bg-slate-100">
                    <Link to="/contact">
                      {pageContent.ctaPrimaryText || homeFallback.ctaPrimaryText}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/10 p-8 backdrop-blur lg:border-l lg:border-t-0 lg:p-12">
                <div className="grid gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Address</p>
                    <p className="mt-2 leading-7 text-white">{CONTACT_ADDRESS}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Phone</p>
                    <p className="mt-2 leading-7 text-white">{CONTACT_PHONES.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Social</p>
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
                    Premium guidance, clearer action, stronger first impression.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
