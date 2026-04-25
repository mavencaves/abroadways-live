import { ArrowRight, BadgeCheck, BookOpenCheck, CircleDollarSign, Route, Users } from "lucide-react";
import { Link } from "react-router";

const advantages = [
  {
    icon: Route,
    title: "Structured planning",
    description: "We help students compare countries, courses, timeline risks, and admission readiness before they commit.",
  },
  {
    icon: CircleDollarSign,
    title: "Practical financial guidance",
    description: "Students and families can explore tuition, living cost expectations, scholarships, and payment planning with more clarity.",
  },
  {
    icon: BookOpenCheck,
    title: "Application support",
    description: "From exam readiness to documents and submission sequencing, the journey is easier when each step has context.",
  },
  {
    icon: Users,
    title: "Human support and digital tools",
    description: "Abroadways combines counsellor guidance, operational follow-up, and platform tools across the student journey.",
  },
];

export default function MavencaveAdvantage() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">Why Abroadways</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
            A clearer, more guided way to plan international education.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            This page now serves as a clean Abroadways overview for students who land on an older facilities route but
            still need to understand what the platform and counselling workflow actually offer.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-8 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  <BadgeCheck className="h-4 w-4" />
                  Current platform direction
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950">Students can move from planning into action without switching systems.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  Abroadways now connects public guidance, consultation flows, CRM follow-up, student portal access,
                  documents, appointments, and payment tracking in one platform.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/study-abroad"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  Explore Study Abroad
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Talk to Abroadways
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
