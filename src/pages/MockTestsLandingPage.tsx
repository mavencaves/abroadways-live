import { Link } from "react-router";
import { MOCK_TEST_EXAMS } from "@/data/mock-test-config";

export default function MockTestsLandingPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_42%),linear-gradient(180deg,_#020617,_#0f172a_62%,_#e2e8f0_62%,_#f8fafc_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-200">
              Abroadways Mock Tests
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                A dedicated exam-practice platform inside Abroadways.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Practice with original questions, timed sessions, score reports, and section-level weakness analysis
                across IELTS, PTE, TOEFL, LanguageCert, GRE, and GMAT.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/student/mock-tests"
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Open student practice
              </Link>
              <Link
                to="/mock-tests/ielts"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:text-blue-200"
              >
                Explore exam libraries
              </Link>
            </div>
          </div>
          <div className="grid w-full max-w-xl grid-cols-2 gap-4">
            {[
              ["Original question bank", "Only custom practice content."],
              ["Timed sessions", "Exam-mode pacing with countdown."],
              ["Auto + manual review", "Objective scoring and writing feedback."],
              ["Weakness analysis", "Recommended next practice after every result."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h2 className="text-sm font-semibold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Choose your exam track</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every exam track has its own landing page, published test-set library, and student-facing analytics flow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {MOCK_TEST_EXAMS.map((exam) => (
              <article
                key={exam.slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`h-2 bg-gradient-to-r ${exam.accent}`} />
                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                      {exam.eyebrow}
                    </span>
                    <h3 className="text-2xl font-semibold text-slate-900">{exam.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{exam.description}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">Best for</p>
                    <p className="mt-1">{exam.audience}</p>
                    <p className="mt-3 text-blue-700">{exam.highlight}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Link
                      to={`/mock-tests/${exam.slug}`}
                      className="text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                    >
                      View library
                    </Link>
                    <Link
                      to={`/student/mock-tests/${exam.slug}`}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Practice now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
