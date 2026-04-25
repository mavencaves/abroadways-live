import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { MOCK_TEST_EXAMS, formatMockSectionTitle } from "@/data/mock-test-config";

type AdminResultItem = {
  _id: string;
  totalScore?: number;
  totalMax?: number;
  pendingManualReview?: number;
  createdAt?: string;
  exam?: { slug?: string; title?: string };
  testSet?: { title?: string };
  user?: { name?: string; email?: string };
};

type ResultDetail = {
  _id: string;
  totalScore?: number;
  totalMax?: number;
  pendingManualReview?: number;
  user?: { name?: string; email?: string };
  exam?: { title?: string };
  testSet?: { title?: string };
  session?: {
    answers?: Array<{
      _id: string;
      answer: any;
      marksObtained?: number;
      graded?: boolean;
      feedback?: string;
      question?: {
        _id: string;
        text?: string;
        sectionKey?: string;
        marks?: number;
      };
    }>;
  };
};

export default function MockTestResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const examSlug = searchParams.get("exam") || "";
  const status = searchParams.get("status") || "";

  const [results, setResults] = useState<AdminResultItem[]>([]);
  const [selectedResultId, setSelectedResultId] = useState("");
  const [selectedResult, setSelectedResult] = useState<ResultDetail | null>(null);
  const [reviewDraft, setReviewDraft] = useState<Record<string, { marks: string; feedback: string }>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadResults = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await mockTestsApi.getAdminResults({
        examSlug: examSlug || undefined,
        status: status || undefined,
      });
      const nextResults = response.data || [];
      setResults(nextResults);
      if (!selectedResultId && nextResults.length) {
        setSelectedResultId(nextResults[0]._id);
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not load mock-test results.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadResults();
  }, [examSlug, status]);

  useEffect(() => {
    if (!selectedResultId) {
      setSelectedResult(null);
      return;
    }

    setIsDetailLoading(true);
    setError("");
    mockTestsApi
      .getResult(selectedResultId)
      .then((response) => {
        const detail = response.data;
        setSelectedResult(detail);
        const nextDraft: Record<string, { marks: string; feedback: string }> = {};
        for (const answer of detail.session?.answers || []) {
          nextDraft[answer._id] = {
            marks: `${answer.marksObtained ?? ""}`,
            feedback: answer.feedback || "",
          };
        }
        setReviewDraft(nextDraft);
      })
      .catch((err) => setError(err?.response?.data?.message || "We could not load the selected result."))
      .finally(() => setIsDetailLoading(false));
  }, [selectedResultId]);

  const reviewableAnswers = useMemo(
    () => (selectedResult?.session?.answers || []).filter((answer) => !answer.graded),
    [selectedResult]
  );

  const handleSaveReview = async () => {
    if (!selectedResult) return;
    setIsSaving(true);
    setError("");
    setSuccess("");
    try {
      await mockTestsApi.manualReviewResult(selectedResult._id, {
        scores: reviewableAnswers.map((answer) => ({
          answerId: answer._id,
          marks: Number(reviewDraft[answer._id]?.marks || 0),
          feedback: reviewDraft[answer._id]?.feedback || "",
        })),
      });
      setSuccess("Manual review saved.");
      await loadResults();
      const refreshed = await mockTestsApi.getResult(selectedResult._id);
      setSelectedResult(refreshed.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not save the manual review.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Mock-test results</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Review student performance, complete manual marking for writing and speaking, and monitor which exams need attention.
        </p>
      </section>

      {error ? <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">{error}</div> : null}
      {success ? <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700">{success}</div> : null}

      <section className="grid gap-6 xl:grid-cols-[0.45fr_0.55fr]">
        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Exam
                <select
                  value={examSlug}
                  onChange={(event) => {
                    const nextParams: Record<string, string> = {};
                    if (event.target.value) nextParams.exam = event.target.value;
                    if (status) nextParams.status = status;
                    setSearchParams(nextParams);
                  }}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">All exams</option>
                  {MOCK_TEST_EXAMS.map((exam) => (
                    <option key={exam.slug} value={exam.slug}>
                      {exam.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Status
                <select
                  value={status}
                  onChange={(event) => {
                    const nextParams: Record<string, string> = {};
                    if (examSlug) nextParams.exam = examSlug;
                    if (event.target.value) nextParams.status = event.target.value;
                    setSearchParams(nextParams);
                  }}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">All results</option>
                  <option value="pending-review">Pending review</option>
                </select>
              </label>
              <button
                type="button"
                onClick={() => void loadResults()}
                className="mt-auto rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Refresh
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h2 className="text-xl font-semibold text-slate-900">Result queue</h2>
            </div>
            {isLoading ? (
              <div className="p-8 text-center text-sm text-slate-600">Loading results...</div>
            ) : results.length ? (
              <div className="divide-y divide-slate-100">
                {results.map((result) => (
                  <button
                    key={result._id}
                    type="button"
                    onClick={() => setSelectedResultId(result._id)}
                    className={`flex w-full flex-col items-start gap-2 px-6 py-5 text-left transition ${
                      selectedResultId === result._id ? "bg-blue-50/60" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex w-full flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-900">{result.user?.name || "Student"}</p>
                        <p className="mt-1 text-sm text-slate-500">{result.user?.email || "No email available"}</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {result.totalScore || 0}/{result.totalMax || 0}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">
                      {result.exam?.title || "Mock test"} · {result.testSet?.title || "Untitled set"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          (result.pendingManualReview || 0) > 0
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {(result.pendingManualReview || 0) > 0 ? "Pending manual review" : "Fully graded"}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {result.createdAt ? new Date(result.createdAt).toLocaleString() : "Recent"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-sm text-slate-600">No results match the current filters.</div>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          {isDetailLoading ? (
            <div className="py-16 text-center text-sm text-slate-600">Loading selected result...</div>
          ) : selectedResult ? (
            <div className="space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{selectedResult.user?.name || "Student result"}</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedResult.exam?.title || "Mock test"} · {selectedResult.testSet?.title || "Untitled set"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Score</p>
                  <p className="text-2xl font-semibold text-slate-900">
                    {selectedResult.totalScore || 0}/{selectedResult.totalMax || 0}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["Responses", `${selectedResult.session?.answers?.length || 0}`],
                  ["Pending review", `${selectedResult.pendingManualReview || 0}`],
                  ["Student email", selectedResult.user?.email || "Not available"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Response review</h3>
                {(selectedResult.session?.answers || []).length ? (
                  selectedResult.session!.answers!.map((answer) => {
                    const pending = !answer.graded;
                    return (
                      <div key={answer._id} className="rounded-2xl border border-slate-200 p-5">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                              {formatMockSectionTitle(answer.question?.sectionKey || "general")}
                            </p>
                            <h4 className="mt-2 text-lg font-semibold text-slate-900">{answer.question?.text || "Question"}</h4>
                          </div>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pending ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                            {pending ? "Needs review" : "Graded"}
                          </span>
                        </div>

                        <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                          <strong>Your answer:</strong>{" "}
                          {typeof answer.answer === "string" ? answer.answer : JSON.stringify(answer.answer)}
                        </div>

                        {pending ? (
                          <div className="mt-4 grid gap-4 md:grid-cols-[0.28fr_0.72fr]">
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                              Marks
                              <input
                                type="number"
                                min="0"
                                max={answer.question?.marks || 10}
                                value={reviewDraft[answer._id]?.marks || ""}
                                onChange={(event) =>
                                  setReviewDraft((current) => ({
                                    ...current,
                                    [answer._id]: {
                                      marks: event.target.value,
                                      feedback: current[answer._id]?.feedback || "",
                                    },
                                  }))
                                }
                                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                              />
                            </label>
                            <label className="space-y-2 text-sm font-medium text-slate-700">
                              Feedback
                              <textarea
                                rows={3}
                                value={reviewDraft[answer._id]?.feedback || ""}
                                onChange={(event) =>
                                  setReviewDraft((current) => ({
                                    ...current,
                                    [answer._id]: {
                                      marks: current[answer._id]?.marks || "",
                                      feedback: event.target.value,
                                    },
                                  }))
                                }
                                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                                placeholder="Add targeted improvement notes"
                              />
                            </label>
                          </div>
                        ) : (
                          <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900">
                            <strong>Score:</strong> {answer.marksObtained || 0}/{answer.question?.marks || 0}
                            {answer.feedback ? (
                              <>
                                <br />
                                <strong>Feedback:</strong> {answer.feedback}
                              </>
                            ) : null}
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-600">
                    No answer data is available for this result.
                  </div>
                )}
              </div>

              {reviewableAnswers.length ? (
                <button
                  type="button"
                  onClick={handleSaveReview}
                  disabled={isSaving}
                  className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                  {isSaving ? "Saving review..." : "Save manual review"}
                </button>
              ) : null}
            </div>
          ) : (
            <div className="py-16 text-center text-sm text-slate-600">Select a result from the left to review it.</div>
          )}
        </div>
      </section>
    </div>
  );
}
