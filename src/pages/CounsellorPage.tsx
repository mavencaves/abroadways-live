import { Clock3, MessageSquareMore, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router";

const advisors = [
  {
    name: "Student Destination Advisors",
    description: "Guidance focused on country fit, course planning, and timeline decisions for undergraduate and postgraduate routes.",
  },
  {
    name: "Admissions and Documentation Team",
    description: "Support around SOP direction, document readiness, and application sequencing once the target path is clear.",
  },
  {
    name: "Visa and Application Support Specialists",
    description: "Structured follow-up for the later stages of the journey, including offer handling and visa preparation.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Guidance built around fit",
    text: "We focus on country fit, budget reality, intake timing, and application strength instead of generic recommendations.",
  },
  {
    icon: Clock3,
    title: "Clearer next steps",
    text: "Students get a more structured view of what to do now, what to prepare next, and what can wait.",
  },
  {
    icon: MessageSquareMore,
    title: "Consultation with context",
    text: "Your profile, destination preferences, exam readiness, and document situation all help shape the conversation.",
  },
];

export default function CounsellorPage() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">Counselling</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
            Speak with Abroadways for clearer study abroad direction.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            Our counselling flow is designed to help students compare destinations, understand documentation, and move
            through the application journey with more confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              Book a consultation
            </Link>
            <Link
              to="/study-abroad"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 text-blue-700">
            <Sparkles className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em]">How Abroadways helps</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-8 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Consultation coverage</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">The teams students usually work with</h2>
            </div>
            <div className="w-full max-w-3xl space-y-4">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="rounded-[1.6rem] border border-slate-200 bg-white px-6 py-5">
                  <h3 className="text-lg font-semibold text-slate-950">{advisor.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{advisor.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Start with Abroadways
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center rounded-full border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              Read planning resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
