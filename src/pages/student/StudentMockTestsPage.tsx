import { useEffect, useState } from "react";
import { Link } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { MOCK_TEST_EXAM_MAP } from "@/data/mock-test-config";

type CatalogExam = {
  _id: string | null;
  slug: string;
  title: string;
  description: string;
  questionCount: number;
  publishedSetCount: number;
};

type ResultItem = {
  _id: string;
  exam?: { slug: string; title: string };
  totalScore?: number;
  totalMax?: number;
  pendingManualReview?: number;
  createdAt?: string;
};

export default function StudentMockTestsPage() {
  const [catalog, setCatalog] = useState<CatalogExam[]>([]);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");
    Promise.all([mockTestsApi.getCatalog(), mockTestsApi.getMyResults()])
      .then(([catalogResponse, resultsResponse]) => {
        setCatalog(catalogResponse.data || []);
        setResults(resultsResponse.data || []);
      })
      .catch((err) => {
        setError(err?.response?.data?.message || "We could not load your mock-test workspace.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const recentResults = results.slice(0, 4);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
              Student practice hub
            </span>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Mock Tests</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Start a timed practice set, revisit previous results, and keep improving with section-level weakness analysis.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Exam tracks", `${catalog.length}`],
              ["Past attempts", `${results.length}`],
              ["Manual reviews", `${results.filter((item) => (item.pendingManualReview || 0) > 0).length}`],
              ["Ready to start", `${catalog.filter((item) => item.publishedSetCount > 0).length}`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
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

      <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Exam library</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Choose the exam you want to practice and enter its published test-set library.
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">Loading exams...</div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {catalog.map((exam) => {
                const examMeta = MOCK_TEST_EXAM_MAP[exam.slug];
                return (
                  <article key={exam.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="space-y-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                        {examMeta?.eyebrow || "Practice track"}
                      </span>
                      <h3 className="text-2xl font-semibold text-slate-900">{exam.title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{exam.description}</p>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-4 text-sm">
                      <div>
                        <p className="text-slate-500">Published sets</p>
                        <p className="mt-1 font-semibold text-slate-900">{exam.publishedSetCount}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Questions</p>
                        <p className="mt-1 font-semibold text-slate-900">{exam.questionCount}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <Link to={`/mock-tests/${exam.slug}`} className="text-sm font-semibold text-slate-600 hover:text-blue-600">
                        Public overview
                      </Link>
                      <Link
                        to={`/student/mock-tests/${exam.slug}`}
                        className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                      >
                        Open practice
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Recent results</h2>
            <div className="mt-5 space-y-4">
              {recentResults.length ? (
                recentResults.map((result) => (
                  <Link
                    key={result._id}
                    to={`/student/mock-tests/results/${result._id}`}
                    className="block rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">{result.exam?.title || "Mock test result"}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {result.createdAt ? new Date(result.createdAt).toLocaleString() : "Recently completed"}
                        </p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {(result.totalScore || 0)}/{result.totalMax || 0}
                      </span>
                    </div>
                    {(result.pendingManualReview || 0) > 0 ? (
                      <p className="mt-3 text-sm text-amber-700">
                        Awaiting manual review for {result.pendingManualReview} response
                        {result.pendingManualReview === 1 ? "" : "s"}.
                      </p>
                    ) : null}
                  </Link>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-600">
                  Your completed mock-test results will appear here once you finish a session.
                </div>
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
