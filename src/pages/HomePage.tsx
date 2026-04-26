import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Landmark,
  Languages,
  MapPin,
  MonitorPlay,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustBadge from "@/components/trust-badge";
import { eventsApi } from "@/lib/api";
import {
  CONTACT_ADDRESS,
  CONTACT_PHONES,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from "@/data/contact-info";

type EventCard = {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
};

const services = [
  {
    title: "Study Abroad Guidance",
    href: "/study-abroad",
    icon: GraduationCap,
    image: "/images/Bristy/portrait-smiling-male-student-holding-books.jpg",
  },
  {
    title: "IELTS / PTE / LanguageCert",
    href: "/exams/overview",
    icon: Languages,
    image: "/images/exams/hero.webp",
  },
  {
    title: "Mock Tests",
    href: "/mock-tests",
    icon: BrainCircuit,
    image: "/images/Bristy/fotos-Xdh_J4xW1QE-unsplash.jpg",
  },
  {
    title: "AbroadAI",
    href: "/abroadai",
    icon: Bot,
    image: "/images/Bristy/world.avif",
  },
  {
    title: "Student Portal",
    href: "/login",
    icon: MonitorPlay,
    image: "/images/Bristy/getting-bit-after-class-help-shot-two-young-students-studying-together-classroom_590464-19534.avif",
  },
];

const introStats = [
  { label: "Students Guided", value: "2,000+" },
  { label: "Partner Universities", value: "350+" },
  { label: "Test Preparation", value: "6 Tracks" },
  { label: "Countries Covered", value: "25+" },
];

const examTabs = [
  {
    key: "ielts",
    title: "IELTS",
    href: "/exams/ielts/overview",
    image: "/images/writing.jpg",
    line: "Structured prep, practical guidance, and a premium exam-ready journey.",
    accent: "from-blue-700 to-cyan-400",
  },
  {
    key: "pte",
    title: "PTE",
    href: "/exams/pte/overview",
    image: "/images/p1.jpg",
    line: "Modern preparation for students targeting faster digital exam pathways.",
    accent: "from-slate-900 to-blue-700",
  },
  {
    key: "toefl",
    title: "TOEFL",
    href: "/exams/toefl/overview",
    image: "/images/TOEFL_pages/image-1.jpg",
    line: "Focused TOEFL support built for strong international application goals.",
    accent: "from-indigo-700 to-sky-500",
  },
  {
    key: "languagecert",
    title: "LanguageCert",
    href: "/exams/overview",
    image: "/images/c-hero.jpg",
    line: "UKVI-approved support with a clearer route for language testing decisions.",
    accent: "from-cyan-700 to-blue-500",
  },
  {
    key: "gre",
    title: "GRE",
    href: "/exams/gre/overview",
    image: "/images/gre_books/image-1.jpg",
    line: "A sharper prep path for graduate school applicants aiming higher.",
    accent: "from-slate-800 to-slate-500",
  },
  {
    key: "gmat",
    title: "GMAT",
    href: "/exams/gmat/overview",
    image: "/images/Bristy/entrepreneurs-meeting-office.jpg",
    line: "Business-school-focused preparation with a clean, product-style experience.",
    accent: "from-blue-900 to-indigo-500",
  },
];

const studyDestinations = [
  {
    title: "Study in Europe",
    href: "/study-abroad/europe",
    image: "/images/manchester.jpg",
  },
  {
    title: "Study in Canada",
    href: "/study-abroad/canada",
    image: "/images/toronto.jpg",
  },
  {
    title: "Study in Australia",
    href: "/study-abroad/australia",
    image: "/images/Bristy/australia-flag.png",
  },
  {
    title: "Study in UK",
    href: "/study-abroad/uk",
    image: "/images/edinburgh.jpg",
  },
  {
    title: "Study in Malaysia",
    href: "/study-abroad/malaysia",
    image: "/images/Bristy/mapbox-zU6tCBzO0Ig-unsplash.jpg",
  },
];

const accreditationTiles = [
  {
    title: "UKVI Approved LanguageCert Test Center",
    text: "Trusted exam support with verified LanguageCert positioning.",
    icon: ShieldCheck,
  },
  {
    title: "ICEF Accredited",
    text: "A stronger credibility marker for families planning international education.",
    icon: Trophy,
  },
  {
    title: "AIRC Certified",
    text: "Confidence built on recognised standards in international recruitment support.",
    icon: Landmark,
  },
];

const testimonialCards = [
  {
    name: "Sadia Rahman",
    destination: "Canada",
    text: "The process felt organised from the first consultation to the final document stage.",
    image: "/images/success1.webp",
  },
  {
    name: "Tahmid Karim",
    destination: "United Kingdom",
    text: "Abroadways made university shortlisting and exam planning much easier to understand.",
    image: "/images/success2.webp",
  },
  {
    name: "Nusrat Jahan",
    destination: "Australia",
    text: "I liked how the guidance felt premium, practical, and always focused on the next step.",
    image: "/images/success3.webp",
  },
];

const formatEventDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function HomePage() {
  const [activeExamKey, setActiveExamKey] = useState("ielts");
  const [events, setEvents] = useState<EventCard[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadEvents = async () => {
      try {
        const response = await eventsApi.getAll();
        const list = Array.isArray(response.data) ? response.data : [];
        if (mounted) {
          setEvents(list.slice(0, 3));
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

  const activeExam = useMemo(
    () => examTabs.find((item) => item.key === activeExamKey) || examTabs[0],
    [activeExamKey],
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
            <Button asChild size="sm" variant="secondary" className="rounded-full bg-white text-slate-950 hover:bg-slate-100">
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

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#031226_0%,#07214d_38%,#0d3378_64%,#f0f6ff_64%,#f4f8fe_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.16),transparent_22%),radial-gradient(circle_at_center_right,rgba(96,165,250,0.16),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:px-8 lg:py-18">
          <div className="space-y-6 text-white">
            <div className="flex flex-wrap gap-3">
              <TrustBadge className="border-white/15 bg-white/10 text-white shadow-none" />
            </div>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
                Study Abroad with Confidence
              </h1>
              <p className="max-w-xl text-base leading-8 text-blue-100/90 md:text-lg">
                Premium study abroad guidance, exam preparation, and student support for ambitious Bangladeshi students.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="xl" className="min-w-[220px] shadow-[0_20px_50px_rgba(37,99,235,0.30)]">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/12 shadow-[0_40px_100px_rgba(2,8,23,0.28)] backdrop-blur">
              <div className="relative min-h-[520px] overflow-hidden sm:min-h-[580px]">
                <img
                  src="/images/Bristy/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg"
                  alt="Students preparing for study abroad"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.46)_100%)]" />
                <div className="absolute left-5 right-5 top-5 grid gap-3 sm:grid-cols-3">
                  {[
                    "UKVI Approved LanguageCert Test Center",
                    "ICEF Accredited",
                    "AIRC Certified",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/16 bg-white/12 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.8rem] border border-white/16 bg-white/14 p-5 text-white backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Trusted guidance for Bangladeshi students
                  </p>
                  <p className="mt-2 text-2xl font-semibold leading-tight">
                    A stronger, more complete platform for study abroad and exam preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Trust Badge</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Trusted guidance for Bangladeshi students
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "UKVI Approved LanguageCert Test Center",
              "ICEF Accredited",
              "AIRC Certified",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Platform Intro</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Your complete study abroad and exam preparation platform
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Premium guidance, trusted exam support, modern preparation tools, and clearer student pathways.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {introStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
              >
                <p className="text-4xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Services</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Clear services, shown visually.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_18px_42px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.58)_100%)]" />
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
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Exam / Course Prep</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Product-style exam preparation, presented visually.
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

          <div className="mt-8 overflow-hidden rounded-[2.2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px]">
                <img src={activeExam.image} alt={activeExam.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.52)_100%)]" />
              </div>
              <div className="flex flex-col justify-between gap-6 bg-[linear-gradient(180deg,#06142f_0%,#0b2a67_100%)] p-8">
                <div>
                  <div className={`h-2 w-28 rounded-full bg-gradient-to-r ${activeExam.accent}`} />
                  <h3 className="mt-5 text-4xl font-semibold tracking-tight">{activeExam.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-blue-100/90">{activeExam.line}</p>
                </div>
                <Button asChild size="xl" variant="secondary" className="w-fit rounded-full bg-white text-slate-950 hover:bg-slate-100">
                  <Link to={activeExam.href}>
                    Learn More
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Study Abroad</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Visual destination pathways for students planning abroad.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {studyDestinations.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_18px_42px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.58)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-2xl font-semibold tracking-tight">{item.title}</p>
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
              Accreditation and trust, shown with stronger visual weight.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {accreditationTiles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-7 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[linear-gradient(135deg,#06142f_0%,#2563eb_100%)] text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Events</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Live events and student sessions.
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full border-slate-300 bg-white">
              <Link to="/event">View Events</Link>
            </Button>
          </div>

          <div className="mt-8">
            {eventsLoading ? (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
                Loading upcoming events...
              </div>
            ) : events.length > 0 ? (
              <div className="grid gap-5 lg:grid-cols-3">
                {events.map((event) => (
                  <article
                    key={event._id}
                    className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={event.image || "/images/Bristy/Event455318Img-min-1024x615.jpg"}
                        alt={event.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.56)_100%)]" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{event.title}</h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600">
                        {event.description || "More event details will be announced soon."}
                      </p>
                      <div className="mt-5 space-y-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-blue-700" />
                          <span>{formatEventDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-blue-700" />
                          <span>{event.time || "Time to be announced"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-700" />
                          <span>{event.location || "Venue to be announced"}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-2xl font-semibold tracking-tight text-slate-950">
                  Upcoming education events will appear here.
                </p>
                <Button asChild size="lg" className="mt-5 rounded-full">
                  <Link to="/contact">Request Event Updates</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Testimonials</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Student stories, presented cleanly.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonialCards.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-[#071a3f] text-white shadow-[0_20px_48px_rgba(15,23,42,0.12)]"
              >
                <div className="grid gap-0 sm:grid-cols-[0.92fr_1.08fr] lg:grid-cols-1">
                  <div className="relative h-72 overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.52)_100%)]" />
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                      <UserRound className="h-3.5 w-3.5" />
                      {item.destination}
                    </div>
                    <p className="mt-4 text-lg leading-8 text-white/92">"{item.text}"</p>
                    <p className="mt-5 text-base font-semibold">{item.name}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-18 pt-10 lg:pb-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] bg-[linear-gradient(135deg,#06142f_0%,#0b2a67_58%,#2563eb_100%)] p-8 text-white shadow-[0_36px_100px_rgba(2,8,23,0.18)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div className="max-w-3xl">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Final CTA
                </span>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Start your study abroad journey today
                </h2>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="secondary" className="bg-white text-slate-950 hover:bg-slate-100">
                    <Link to="/contact">
                      Book Free Consultation
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 rounded-[1.8rem] border border-white/12 bg-white/10 p-5 text-sm backdrop-blur">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Address</p>
                  <p className="mt-2 leading-6 text-white">{CONTACT_ADDRESS}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Phone</p>
                  <p className="mt-2 leading-6 text-white">{CONTACT_PHONES.join(", ")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Social</p>
                  <div className="mt-2 flex flex-col gap-1 leading-6">
                    <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-white hover:text-cyan-200">
                      www.facebook.com/abroadways
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white hover:text-cyan-200">
                      instagram.com/abroadwaysbd
                    </a>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-blue-100">
                  <Sparkles className="h-4 w-4 text-cyan-200" />
                  Stronger visuals. Clearer action. Better first impression.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
