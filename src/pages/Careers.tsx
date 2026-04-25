import { BriefcaseBusiness, Compass, HeartHandshake, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";

const openRoles = [
  {
    title: "Student Counselling Associate",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    summary: "Support students through destination research, admissions planning, and consultation follow-up.",
  },
  {
    title: "IELTS Trainer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    summary: "Lead practical English test preparation with a strong focus on student readiness and score improvement.",
  },
  {
    title: "Content and SEO Writer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    summary: "Create high-trust study abroad content that helps students make better academic and visa decisions.",
  },
  {
    title: "Operations Coordinator",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    summary: "Keep student workflows, documentation, and internal handoffs organised across service teams.",
  },
];

const values = [
  {
    icon: Compass,
    title: "Purpose-led work",
    description: "We focus on helping students move from uncertainty to a clear, practical international study plan.",
  },
  {
    icon: HeartHandshake,
    title: "Student-first culture",
    description: "Our teams are expected to combine care, responsiveness, and honest guidance in every interaction.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real growth opportunities",
    description: "You will work across counselling, content, operations, and digital systems that are actively scaling.",
  },
];

export default function Careers() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">Careers at Abroadways</p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
              Join a team that helps students make confident study abroad decisions.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
              Abroadways is building a stronger guidance platform for students, families, and counsellors. We look for
              thoughtful people who care about clarity, execution, and student outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
              >
                Apply via Consultation Team
              </Link>
              <a
                href="mailto:careers@abroadways.com.bd"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Email Careers
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.6rem] border border-white/15 bg-white/10 p-5 shadow-[0_20px_45px_rgba(15,23,42,0.12)] sm:last:col-span-2"
              >
                <div className="inline-flex rounded-2xl bg-white/15 p-3 text-blue-100">
                  <value.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{value.title}</h2>
                <p className="mt-2 text-sm leading-7 text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Open Roles</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Current opportunities</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                These roles reflect the kinds of hires Abroadways is prioritising as we grow our student services,
                content, and operations capabilities.
              </p>
            </div>
            <a
              href="mailto:careers@abroadways.com.bd?subject=Application%20for%20Abroadways"
              className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              <Mail className="h-4 w-4" />
              Send Your CV
            </a>
          </div>

          <div className="mt-8 space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-slate-950">{role.title}</h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                        {role.type}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 text-blue-700" />
                      {role.location}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{role.summary}</p>
                  </div>

                  <a
                    href={`mailto:careers@abroadways.com.bd?subject=${encodeURIComponent(`Application - ${role.title}`)}`}
                    className="inline-flex items-center justify-center rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    Apply for this role
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
