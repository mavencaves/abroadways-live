import { Link } from "react-router";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Globe2,
  GraduationCap,
  Languages,
  Layers3,
  MapPinned,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Trophy,
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
    title: "Study Abroad Guidance",
    description: "Admissions, visas, and destination planning with premium student-first counselling.",
    href: "/study-abroad",
    icon: GraduationCap,
  },
  {
    title: "IELTS / PTE / LanguageCert",
    description: "Clear exam support and preparation pathways for students moving abroad.",
    href: "/exams/overview",
    icon: Languages,
  },
  {
    title: "Mock Tests",
    description: "Original practice tests, timed sessions, and structured result feedback.",
    href: "/mock-tests",
    icon: BrainCircuit,
  },
  {
    title: "AbroadAI",
    description: "AI-powered guidance for destinations, exams, documents, and next steps.",
    href: "/abroadai",
    icon: Bot,
  },
  {
    title: "Student Portal",
    description: "A connected experience for documents, appointments, payments, and follow-up.",
    href: "/login",
    icon: Layers3,
  },
];

const examPrepCards = [
  { title: "IELTS", href: "/exams/ielts/overview", accent: "from-blue-600 to-cyan-400" },
  { title: "PTE", href: "/exams/pte/overview", accent: "from-slate-900 to-blue-700" },
  { title: "TOEFL", href: "/exams/toefl/overview", accent: "from-indigo-700 to-blue-500" },
  { title: "LanguageCert", href: "/exams/overview", accent: "from-cyan-700 to-sky-400" },
  { title: "GRE", href: "/exams/gre/overview", accent: "from-slate-800 to-slate-500" },
  { title: "GMAT", href: "/exams/gmat/overview", accent: "from-blue-900 to-indigo-500" },
];

const destinations = [
  {
    title: "Europe",
    href: "/study-abroad/europe",
  },
  {
    title: "North America",
    href: "/study-abroad/north-america",
  },
  {
    title: "Australia & Oceania",
    href: "/study-abroad/australia-oceania",
  },
  {
    title: "Asia",
    href: "/study-abroad/asia",
  },
];

const trustPoints = [
  "UKVI Approved LanguageCert Test Center",
  "ICEF Accredited",
  "AIRC Certified",
  "Student-first counselling",
  "AI-powered student support",
];

const productHighlights = [
  {
    title: "Mock Test Platform",
    description:
      "Built as a dedicated practice product with original question banks, timed sessions, and clearer performance feedback.",
    href: "/mock-tests",
    cta: "Explore Mock Tests",
    image: "/images/Bristy/fotos-Xdh_J4xW1QE-unsplash.jpg",
  },
  {
    title: "AbroadAI Counselor",
    description:
      "A modern guidance layer for destinations, exams, applications, documents, and student decision-making.",
    href: "/abroadai",
    cta: "Open AbroadAI",
    image: "/images/Bristy/world.avif",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f3f7fd] text-slate-950">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#04142f_0%,#08224e_34%,#0d3276_62%,#ebf3ff_62%,#f3f7fd_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_22%),radial-gradient(circle_at_center_right,rgba(96,165,250,0.16),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:96px_96px] opacity-30" />

        <div className="relative mx-auto grid max-w-[1240px] gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="space-y-7 text-white">
            <div className="flex flex-wrap gap-3">
              <TrustBadge className="border-white/15 bg-white/10 text-white shadow-none" />
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                Premium Education Guidance
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
                Study Abroad with Confidence
              </h1>
              <p className="max-w-2xl text-base leading-8 text-blue-100/90 md:text-lg">
                Abroadways brings counselling, exam support, mock tests, AI guidance, and student tools into one
                premium education brand experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="xl" className="min-w-[220px] shadow-[0_20px_48px_rgba(37,99,235,0.30)]">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="min-w-[220px] border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/14 hover:text-white"
              >
                <Link to="/study-abroad">Explore Study Abroad</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {[
                "UKVI Approved LanguageCert Test Center",
                "ICEF Accredited",
                "AIRC Certified",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-blue-50"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-14 hidden h-40 w-40 rounded-full bg-cyan-200/35 blur-3xl lg:block" />
            <div className="absolute -bottom-8 right-0 hidden h-48 w-48 rounded-full bg-blue-200/30 blur-3xl lg:block" />
            <div className="overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/90 shadow-[0_40px_100px_rgba(2,8,23,0.30)]">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[560px] overflow-hidden">
                  <img
                    src="/images/Bristy/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg"
                    alt="Students preparing for study abroad"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.48)_100%)]" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/20 bg-white/12 p-5 text-white backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Abroadways Experience</p>
                    <p className="mt-2 text-xl font-semibold leading-tight">
                      Built for students who want a stronger path from first consultation to final decision.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6 bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)] p-7 lg:p-8">
                  <div className="space-y-5">
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                      Abroadways
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                      A modern platform for study abroad, exams, and student support.
                    </h2>
                    <p className="text-sm leading-7 text-slate-600">
                      Clear guidance, stronger visuals, and practical student actions without the clutter of a lead-form-first homepage.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {[
                      "Destination strategy and admissions support",
                      "Exam prep, mock tests, and LanguageCert guidance",
                      "Student portal for documents, appointments, and payments",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-[1.35rem] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm"
                      >
                        <Sparkles className="mt-0.5 h-4.5 w-4.5 shrink-0 text-blue-600" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["Students", "Counsel-first experience"],
                      ["Platform", "AI + portal + mock tests"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[1.35rem] bg-slate-950 px-4 py-4 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">{label}</p>
                        <p className="mt-2 text-sm font-medium text-slate-100">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Services</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Built to feel like a major education company.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Bigger cards, clearer routes, less clutter, and stronger visual hierarchy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group rounded-[1.95rem] border border-slate-200 bg-white p-7 shadow-[0_16px_38px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_60px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_100%)] text-blue-700 transition group-hover:bg-[linear-gradient(135deg,#0b2a67_0%,#2563eb_100%)] group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Explore
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-18 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Courses / Exam Prep</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Preparation pathways with a stronger product feel.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Fast access to the exams students actively search for, presented in a cleaner and more premium way.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {examPrepCards.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group overflow-hidden rounded-[1.85rem] border border-slate-200 bg-slate-950 text-white shadow-[0_18px_42px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.16)]"
              >
                <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
                <div className="space-y-8 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/10">
                    <MonitorPlay className="h-5 w-5 text-blue-100" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Structured preparation, guidance, and clearer action into the next step.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    Open route
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Study Abroad</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Keep destination discovery under one strong study abroad hub.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Short and clear on the homepage, with deeper country exploration staying under Study Abroad where it belongs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {destinations.map((destination, index) => (
              <Link
                key={destination.title}
                to={destination.href}
                className="group overflow-hidden rounded-[1.9rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-7 shadow-[0_16px_38px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-slate-950 text-white">
                    {index % 2 === 0 ? <Globe2 className="h-5 w-5" /> : <MapPinned className="h-5 w-5" />}
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300 transition group-hover:text-blue-500" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{destination.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Explore destination pathways through Abroadways Study Abroad.</p>
                <div className="mt-6 text-sm font-semibold text-blue-700">Open region</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2.2rem] bg-[linear-gradient(135deg,#06142f_0%,#0b2a67_52%,#123781_100%)] p-8 text-white shadow-[0_36px_100px_rgba(2,8,23,0.18)] lg:grid-cols-[0.92fr_1.08fr] lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Trust & Accreditation</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
                Trust signals, presented with real brand strength.
              </h2>
              <p className="mt-4 text-sm leading-7 text-blue-100/90">
                Clear credibility markers for students and families who want confidence before they commit.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {trustPoints.map((point, index) => (
                <div
                  key={point}
                  className={`rounded-[1.5rem] border px-5 py-5 ${
                    index >= 3 ? "border-cyan-300/30 bg-cyan-300/10" : "border-white/10 bg-white/8"
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

      <section className="border-y border-slate-200 bg-white py-18 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Products</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Mock Tests and AbroadAI as standout product experiences.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {productHighlights.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2.2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
              >
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[340px]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    <div
                      className={`absolute inset-0 ${
                        index === 0
                          ? "bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.56)_100%)]"
                          : "bg-[linear-gradient(180deg,rgba(2,6,23,0.10)_0%,rgba(2,6,23,0.60)_100%)]"
                      }`}
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-6 bg-[linear-gradient(180deg,#06142f_0%,#0b2a67_100%)] p-8">
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

      <section className="pb-18 pt-10 lg:pb-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#06142f_0%,#0b2a67_60%,#2563eb_100%)] p-8 text-white shadow-[0_36px_100px_rgba(2,8,23,0.18)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div className="max-w-3xl">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Final CTA
                </span>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Ready to plan your study abroad journey?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100/90">
                  Start with a consultation and move forward with clearer direction, stronger preparation, and a more complete support system.
                </p>
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
                  <Trophy className="h-4 w-4 text-cyan-200" />
                  Student-first support with premium delivery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
