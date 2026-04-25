import { useEffect, useState } from "react";
import { Link } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { MOCK_TEST_EXAMS } from "@/data/mock-test-config";

type SummaryResponse = {
  examCount: number;
  questionCount: number;
  testSetCount: number;
  publishedSetCount: number;
  resultCount: number;
  pendingReviewCount: number;
};

export default function MockTestsPage() {
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    mockTestsApi
      .getAdminSummary()
      .then((response) => setSummary(response.data))
      .catch((err) => setError(err?.response?.data?.message || "We could not load the mock-test workspace."))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
              Mock-test management
            </span>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Abroadways Mock Tests</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Manage the question bank, publish test sets, review subjective responses, and keep the product ready for students.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/dashboard/mock-tests/questions"
                className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Manage questions
              </Link>
              <Link
                to="/dashboard/mock-tests/test-sets"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-blue-300 hover:text-blue-200"
              >
                Build test sets
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Questions", `${summary?.questionCount || 0}`],
              ["Test sets", `${summary?.testSetCount || 0}`],
              ["Published", `${summary?.publishedSetCount || 0}`],
              ["Pending review", `${summary?.pendingReviewCount || 0}`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{label}</p>
                <p className="mt-2 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {error ? (
        <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">{error}</div>
      ) : null}

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Exam tracks</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                These product tracks are available for question management, test-set publishing, and result analysis.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {MOCK_TEST_EXAMS.map((exam) => (
              <div key={exam.slug} className="rounded-3xl border border-slate-200 p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">{exam.eyebrow}</span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{exam.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{exam.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    to={`/dashboard/mock-tests/questions?exam=${exam.slug}`}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Questions
                  </Link>
                  <Link
                    to={`/dashboard/mock-tests/test-sets?exam=${exam.slug}`}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Test sets
                  </Link>
                  <Link
                    to={`/dashboard/mock-tests/results?exam=${exam.slug}`}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Results
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Operational status</h2>
            {isLoading ? (
              <div className="mt-4 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600">Loading summary...</div>
            ) : (
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  <strong className="text-slate-900">{summary?.resultCount || 0}</strong> student result reports are stored in the platform.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  <strong className="text-slate-900">{summary?.pendingReviewCount || 0}</strong> result reports currently need manual writing or speaking review.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  <strong className="text-slate-900">{summary?.publishedSetCount || 0}</strong> published test sets are live for students right now.
                </div>
              </div>
            )}
          </div>
        </aside>
      </section>
    </div>
  );
}
