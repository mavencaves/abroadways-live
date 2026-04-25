import { ArrowRight, BookOpenText, FileText, Globe2, GraduationCap, Landmark } from "lucide-react";
import { Link } from "react-router";

const featuredGuides = [
  {
    title: "How to shortlist a destination with more clarity",
    description: "Compare tuition, scholarships, visa realities, and long-term outcomes before you finalise a country.",
    to: "/blog",
    label: "Read blogs",
    icon: Globe2,
  },
  {
    title: "Which documents matter most for study abroad applications",
    description: "Understand the role of SOPs, recommendation letters, finances, and passport readiness in a stronger application plan.",
    to: "/resources",
    label: "Explore resources",
    icon: FileText,
  },
  {
    title: "How to choose exams, country, and intake together",
    description: "Map English test readiness, budget, deadlines, and target universities into one practical decision path.",
    to: "/exams/overview",
    label: "Explore exams",
    icon: GraduationCap,
  },
];

const categories = [
  "Destinations and country fit",
  "Scholarships and financial planning",
  "Application documents and timelines",
  "Visa preparation and post-offer steps",
];

export default function KnowledgeCenter() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">Knowledge Center</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
            Practical guidance for students planning higher education abroad.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            This hub brings together the most useful Abroadways content for students who are comparing destinations,
            preparing applications, and trying to make better decisions with less confusion.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
            <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
              <Landmark className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-950">What students usually need first</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
              {categories.map((category) => (
                <li key={category} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {category}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            {featuredGuides.map((guide) => (
              <div
                key={guide.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
              >
                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <guide.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-slate-950">{guide.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{guide.description}</p>
                <Link
                  to={guide.to}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  {guide.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-8 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Continue your planning</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Use the knowledge hub as a starting point, then move into real planning.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Once you understand the big decisions, the next step is matching them with country options, budgets,
                exam readiness, and application timing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/study-abroad"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                <BookOpenText className="h-4 w-4" />
                Explore Study Abroad
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Read all articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
