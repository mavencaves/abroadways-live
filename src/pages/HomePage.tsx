import { Link } from "react-router";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Compass,
  Globe2,
  GraduationCap,
  Languages,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustBadge from "@/components/trust-badge";
import {
  CONTACT_ADDRESS,
  CONTACT_PHONES,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from "@/data/contact-info";

const services = [
  {
    title: "Study Abroad",
    description: "End-to-end admission and visa guidance with a student-first approach.",
    href: "/study-abroad",
    icon: GraduationCap,
  },
  {
    title: "Mock Tests",
    description: "Original practice tests, timed sessions, and score-focused preparation.",
    href: "/mock-tests",
    icon: BrainCircuit,
  },
  {
    title: "AbroadAI",
    description: "Smart guidance for destinations, documents, exams, and next steps.",
    href: "/abroadai",
    icon: Bot,
  },
  {
    title: "LanguageCert / IELTS",
    description: "UKVI-approved exam support with practical prep and booking guidance.",
    href: "/exams/overview",
    icon: Languages,
  },
];

const destinations = [
  {
    title: "Asia",
    description: "Fast-growing education routes with practical, career-focused options.",
    href: "/study-abroad/asia",
  },
  {
    title: "Europe",
    description: "High-quality degrees, diverse campuses, and wide scholarship pathways.",
    href: "/study-abroad/europe",
  },
  {
    title: "North America",
    description: "Flexible academic systems and globally recognised university choices.",
    href: "/study-abroad/north-america",
  },
  {
    title: "Australia & Oceania",
    description: "Student-friendly destinations with strong post-study opportunities.",
    href: "/study-abroad/australia-oceania",
  },
];

const trustPoints = [
  "UKVI Approved LanguageCert Test Center",
  "ICEF Accredited",
  "AIRC Certified",
  "Student-first guidance",
];

const productHighlights = [
  {
    title: "Mock Tests",
    description:
      "Practice with original question banks, structured test sets, timed sessions, and sharper performance reports.",
    href: "/mock-tests",
    cta: "Explore Mock Tests",
    image: "/images/exams/hero.webp",
  },
  {
    title: "AbroadAI",
    description:
      "Ask focused questions about destinations, scholarships, documents, exams, and your next move in the journey.",
    href: "/abroadai",
    cta: "Open AbroadAI",
    image: "/images/Bristy/world.avif",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f6f8fc] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(12,74,110,0.14),transparent_28%),linear-gradient(180deg,#eef4ff_0%,#ffffff_62%,#f6f8fc_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-24">
          <div className="max-w-2xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <TrustBadge className="bg-white/90 text-slate-900 shadow-sm ring-1 ring-slate-200" />
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Premium Study Abroad Guidance
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Study abroad planning, made clear and beautifully simple.
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                Abroadways helps students move from first question to confident application with focused guidance,
                trusted exam support, and modern preparation tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="xl" className="shadow-[0_18px_40px_rgba(37,99,235,0.24)]">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-slate-300 bg-white text-slate-900">
                <Link to="/study-abroad">Explore Study Abroad</Link>
              </Button>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {[
                "Guidance for every stage",
                "Trusted exam support",
                "Clear next-step planning",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-blue-200/50 blur-2xl lg:block" />
            <div className="absolute -bottom-4 right-0 hidden h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl lg:block" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.14)]">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[420px] overflow-hidden">
                  <img
                    src="/images/Bristy/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg"
                    alt="Students planning their study abroad future"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(6,20,47,0.38)_100%)]" />
                </div>
                <div className="flex flex-col justify-between gap-5 bg-[linear-gradient(180deg,#06142f_0%,#0b2a67_100%)] p-6 text-white">
                  <div className="space-y-4">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                      Abroadways
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight">Premium support for ambitious students.</h2>
                    <p className="text-sm leading-6 text-blue-100/90">
                      Focused destination guidance, exam preparation, and AI-assisted planning in one experience.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Destination strategy",
                      "Exam and language preparation",
                      "Application and visa support",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm">
                        <CheckCircle2 className="h-4.5 w-4.5 text-cyan-200" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Services</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                A cleaner path to the outcomes students actually care about.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Simple entry points, fewer decisions, and stronger calls to action.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_48px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Explore
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Study Destinations</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Explore destinations through one study abroad hub.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Destination browsing stays anchored under Study Abroad, with clear regional starting points.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {destinations.map((destination, index) => (
              <Link
                key={destination.title}
                to={destination.href}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_48px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    {index % 2 === 0 ? <Globe2 className="h-5 w-5" /> : <MapPinned className="h-5 w-5" />}
                  </div>
                  <Compass className="h-5 w-5 text-slate-300 transition group-hover:text-blue-500" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{destination.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{destination.description}</p>
                <div className="mt-6 text-sm font-semibold text-blue-700">Open region</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-[2rem] bg-[linear-gradient(135deg,#06142f_0%,#0b2a67_58%,#123781_100%)] p-8 text-white shadow-[0_30px_90px_rgba(2,8,23,0.18)] lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Why Abroadways</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Trusted by students who want clarity, not clutter.
              </h2>
              <p className="mt-4 text-sm leading-7 text-blue-100/90">
                A premium guidance experience built around confidence, credibility, and the next right step.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point, index) => (
                <div
                  key={point}
                  className={`rounded-[1.5rem] border px-5 py-5 ${
                    index === 3
                      ? "border-cyan-300/30 bg-cyan-300/10"
                      : "border-white/10 bg-white/8"
                  }`}
                >
                  <ShieldCheck className="h-5 w-5 text-cyan-200" />
                  <p className="mt-4 text-base font-semibold text-white">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Products</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Two standout products, one consistent student experience.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {productHighlights.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
              >
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[260px]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    <div
                      className={`absolute inset-0 ${
                        index === 0
                          ? "bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.56)_100%)]"
                          : "bg-[linear-gradient(180deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.62)_100%)]"
                      }`}
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-6 bg-[linear-gradient(180deg,#06142f_0%,#0b2a67_100%)] p-7">
                    <div>
                      <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                        {item.title}
                      </div>
                      <h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-blue-100/90">{item.description}</p>
                    </div>
                    <Button asChild size="lg" variant="secondary" className="w-fit rounded-full bg-white text-slate-950 hover:bg-slate-100">
                      <Link to={item.href}>
                        {item.cta}
                        <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)] p-8 text-center shadow-[0_24px_60px_rgba(15,23,42,0.10)] lg:p-12">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Final CTA
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Ready to plan your next step with Abroadways?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Book a consultation and move forward with clearer guidance, stronger preparation, and student-first support.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="xl">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-slate-300 bg-white">
                <Link to="/study-abroad">Explore Study Abroad</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white/85 p-5 text-left shadow-sm md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Address</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{CONTACT_ADDRESS}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Phone</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{CONTACT_PHONES.join(", ")}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Social</p>
                <div className="mt-2 flex flex-col gap-1 text-sm leading-6">
                  <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-blue-700">
                    www.facebook.com/abroadways
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-blue-700">
                    instagram.com/abroadwaysbd
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500">
              <Sparkles className="h-4 w-4 text-blue-500" />
              Clean journey. Clear next step. Stronger outcomes.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
