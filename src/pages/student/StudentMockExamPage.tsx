import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { MOCK_TEST_EXAM_MAP, formatMockSectionTitle } from "@/data/mock-test-config";

type TestSet = {
  _id: string;
  title: string;
  description?: string;
  durationMinutes?: number;
  status: "draft" | "published" | "archived";
  sectionConfig?: Array<{
    key: string;
    title?: string;
    questionCount?: number;
    durationMinutes?: number;
  }>;
  questionIds?: any[];
};

type ResultItem = {
  _id: string;
  totalScore?: number;
  totalMax?: number;
  pendingManualReview?: number;
  createdAt?: string;
};

export default function StudentMockExamPage() {
  const { exam = "" } = useParams();
  const navigate = useNavigate();
  const examMeta = MOCK_TEST_EXAM_MAP[exam];

  const [testSets, setTestSets] = useState<TestSet[]>([]);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [startingSetId, setStartingSetId] = useState("");
  const [mode, setMode] = useState<"practice" | "exam">("exam");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");
    Promise.all([mockTestsApi.getExamTestSets(exam), mockTestsApi.getMyResults(exam)])
      .then(([testSetsResponse, resultsResponse]) => {
        setTestSets(testSetsResponse.data || []);
        setResults(resultsResponse.data || []);
      })
      .catch((err) => {
        setError(err?.response?.data?.message || "We could not load the practice dashboard for this exam.");
      })
      .finally(() => setIsLoading(false));
  }, [exam]);

  const totalPublishedQuestions = useMemo(
    () => testSets.reduce((sum, set) => sum + (set.questionIds?.length || 0), 0),
    [testSets]
  );

  const handleStart = async (testSetId: string) => {
    try {
      setStartingSetId(testSetId);
      const response = await mockTestsApi.startSession({ testSetId, mode });
      navigate(`/student/mock-tests/session/${response.data._id}`);
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not start this session right now.");
    } finally {
      setStartingSetId("");
    }
  };

  if (!examMeta) {
    return (
      <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
        This mock-test exam track is not available.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${examMeta.accent} p-8 text-white shadow-sm`}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-50">
              {examMeta.eyebrow}
            </span>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{examMeta.title} practice dashboard</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50/90 md:text-base">
                Choose a published test set, start a timed session, and review section-level performance after each attempt.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              ["Published sets", `${testSets.length}`],
              ["Questions", `${totalPublishedQuestions}`],
              ["My results", `${results.length}`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-50/80">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {error ? (
        <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">{error}</div>
      ) : null}

      <section className="grid gap-8 xl:grid-cols-[1.18fr_0.82fr]">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Start a new attempt</h2>
              <p className="mt-1 text-sm text-slate-600">Choose how you want your next session to behave.</p>
            </div>
            <div className="inline-flex rounded-full bg-slate-100 p-1 text-sm">
              {(["exam", "practice"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMode(value)}
                  className={`rounded-full px-4 py-2 font-semibold transition ${
                    mode === value ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {value === "exam" ? "Exam mode" : "Practice mode"}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">Loading test sets...</div>
          ) : testSets.length ? (
            <div className="space-y-4">
              {testSets.map((set) => (
                <article key={set._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-slate-900">{set.title}</h3>
                      <p className="max-w-3xl text-sm leading-6 text-slate-600">
                        {set.description || "A published mock-test set built from original Abroadways questions."}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                      {set.durationMinutes || 60} minutes
                    </div>
                  </div>
                  {set.sectionConfig?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {set.sectionConfig.map((section) => (
                        <span
                          key={`${set._id}-${section.key}`}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {section.title || formatMockSectionTitle(section.key)} · {section.questionCount || 0}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-sm text-slate-500">{set.questionIds?.length || 0} questions in this set</span>
                    <button
                      type="button"
                      onClick={() => handleStart(set._id)}
                      disabled={startingSetId === set._id}
                      className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
                    >
                      {startingSetId === set._id ? "Starting..." : "Start timed session"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
              Published test sets for this exam are not available yet. Please check back soon.
            </div>
          )}
        </div>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Recent attempts</h2>
            <div className="mt-5 space-y-4">
              {results.length ? (
                results.slice(0, 5).map((result) => (
                  <Link
                    key={result._id}
                    to={`/student/mock-tests/results/${result._id}`}
                    className="block rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">
                          Score {(result.totalScore || 0)}/{result.totalMax || 0}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {result.createdAt ? new Date(result.createdAt).toLocaleString() : "Completed attempt"}
                        </p>
                      </div>
                      {(result.pendingManualReview || 0) > 0 ? (
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                          Pending review
                        </span>
                      ) : (
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Ready
                        </span>
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-600">
                  Once you finish a session, its result report will show up here.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Need the full overview?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Visit the public product page to see section coverage, practice scope, and published library details.
            </p>
            <Link
              to={`/mock-tests/${examMeta.slug}`}
              className="mt-5 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Open public overview
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
