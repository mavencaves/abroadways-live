import { Link } from "react-router";
import { ArrowRight, BookOpenText, GraduationCap } from "lucide-react";

const featuredCourses = [
  {
    title: "MS in Computer Science",
    destination: "United States",
    href: "/study-abroad/usa/courses/mscs",
    description: "A high-interest route for students focused on research, software, and advanced technical pathways.",
  },
  {
    title: "Master of Public Health",
    destination: "United States",
    href: "/study-abroad/usa/courses/mph",
    description: "A practical option for students aiming for health policy, public systems, and global health careers.",
  },
  {
    title: "LLM",
    destination: "United Kingdom",
    href: "/study-abroad/uk/courses/llm",
    description: "A strong postgraduate law pathway for students targeting international legal education routes.",
  },
  {
    title: "MBA",
    destination: "Canada",
    href: "/study-abroad/canada/courses/mba",
    description: "A widely searched management pathway for students planning leadership and business careers abroad.",
  },
  {
    title: "Business and Management",
    destination: "United Kingdom",
    href: "/study-abroad/uk/courses/msc-business-management",
    description: "A premium study option for students comparing business-focused postgraduate pathways.",
  },
  {
    title: "MSc in Information Technology",
    destination: "Australia",
    href: "/study-abroad/australia/courses/msc-it",
    description: "An employability-focused route for students targeting applied technology and systems careers.",
  },
];

export default function CoursesLandingPage() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(78,129,255,0.24),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-15" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Courses</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
              Explore popular study abroad courses before choosing the country, budget, and application path.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
              This page gives students a cleaner public entry point into high-interest courses that already connect to
              live routes in the current project.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCourses.map((course) => (
              <Link
                key={course.title}
                to={course.href}
                className="group rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_16px_38px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_52px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <BookOpenText className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-700">
                    {course.destination}
                  </span>
                </div>
                <div className="mt-5 h-1.5 w-12 rounded-full bg-blue-700" />
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{course.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{course.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:text-blue-900">
                  View Course Pathway
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-[1.9rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-7 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Need help choosing?</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">Compare course fit, country fit, and budget with Abroadways.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  If you are not sure which course should come first, start with a consultation and we can map it
                  against destinations, scholarships, and visa planning.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <GraduationCap className="h-4 w-4" />
                Book A Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
