import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { formatMockSectionTitle } from "@/data/mock-test-config";

type ResultResponse = {
  _id: string;
  totalScore?: number;
  totalMax?: number;
  pendingManualReview?: number;
  weaknesses?: string[];
  recommendations?: string[];
  createdAt?: string;
  exam?: { title?: string; slug?: string };
  testSet?: { _id?: string; title?: string; accessType?: "free" | "paid"; price?: number; currency?: string };
  breakdown?: Record<
    string,
    {
      title?: string;
      obtained?: number;
      max?: number;
      attempts?: number;
    }
  >;
  access?: {
    accessType?: "free" | "paid";
    price?: number;
    currency?: string;
    locked?: boolean;
    hasFullResultAccess?: boolean;
  };
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
        explanation?: string;
      };
    }>;
  };
};

export default function StudentMockResultPage() {
  const { resultId = "" } = useParams();
  const [result, setResult] = useState<ResultResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    mockTestsApi
      .getResult(resultId)
      .then((response) => setResult(response.data))
      .catch((err) => {
        setError(err?.response?.data?.message || "We could not load this result report.");
      })
      .finally(() => setIsLoading(false));
  }, [resultId]);

  const sectionEntries = useMemo(() => Object.entries(result?.breakdown || {}), [result]);
  const resultLocked = Boolean(result?.access?.locked);

  if (isLoading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">Loading result report...</div>;
  }

  if (error || !result) {
    return <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">{error || "Result not found."}</div>;
  }

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-blue-200">
                {result.exam?.title || "Mock test"} · {result.testSet?.title || "Result report"}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Performance report</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                {resultLocked
                  ? "This is the limited free-view report. Unlock the premium pack to see full answer review, explanations, and targeted recommendations."
                  : "Review your score, section-level performance, manual-review status, and the next practice areas recommended by Abroadways."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {result.exam?.slug ? (
                <Link
                  to={`/student/mock-tests/${result.exam.slug}`}
                  className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Back to exam dashboard
                </Link>
              ) : null}
              <Link
                to="/student/mock-tests"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-blue-300 hover:text-blue-200"
              >
                All mock tests
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Score</p>
              <p className="mt-2 text-3xl font-semibold">
                {result.totalScore || 0}/{result.totalMax || 0}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Access</p>
              <p className="mt-2 text-lg font-semibold">{resultLocked ? "Limited free view" : "Full premium view"}</p>
            </div>
          </div>
        </div>
      </section>

      {resultLocked ? (
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
          <p className="font-semibold">Premium result details are locked.</p>
          <p className="mt-2 text-sm leading-6">
            Unlock this mock-test pack from the payments flow to see explanations, full answer review, weaknesses, and recommended next practice.
          </p>
          <Link
            to="/student/payments"
            className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Go to payments
          </Link>
        </div>
      ) : null}

      <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Section breakdown</h2>
                <p className="mt-2 text-sm text-slate-600">
                  {result.createdAt ? `Generated on ${new Date(result.createdAt).toLocaleString()}` : "Latest scored attempt"}
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {sectionEntries.length ? (
                sectionEntries.map(([key, value]) => {
                  const ratio = value.max ? Math.round(((value.obtained || 0) / value.max) * 100) : 0;
                  return (
                    <div key={key} className="rounded-2xl border border-slate-200 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {value.title || formatMockSectionTitle(key)}
                          </h3>
                          <p className="mt-1 text-sm text-slate-500">
                            {(value.attempts || 0)} answered · {value.obtained || 0}/{value.max || 0}
                          </p>
                        </div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{ratio}%</span>
                      </div>
                      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400" style={{ width: `${ratio}%` }} />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-600">
                  Section scoring details will appear here once answers are evaluated.
                </div>
              )}
            </div>
          </div>

          {!resultLocked ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Answer review</h2>
              <div className="mt-6 space-y-4">
                {(result.session?.answers || []).length ? (
                  result.session!.answers!.map((answer) => (
                    <div key={answer._id} className="rounded-2xl border border-slate-200 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                          {formatMockSectionTitle(answer.question?.sectionKey || "general")}
                        </p>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {answer.marksObtained || 0}/{answer.question?.marks || 0}
                        </span>
                      </div>
                      <p className="mt-3 text-sm font-medium text-slate-900">{answer.question?.text || "Question"}</p>
                      <div className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                        <strong>Your answer:</strong>{" "}
                        {typeof answer.answer === "string" ? answer.answer : JSON.stringify(answer.answer)}
                      </div>
                      {answer.feedback ? (
                        <div className="mt-3 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                          <strong>Reviewer feedback:</strong> {answer.feedback}
                        </div>
                      ) : !answer.graded ? (
                        <p className="mt-3 text-sm text-amber-700">This response is waiting for manual review.</p>
                      ) : null}
                      {answer.question?.explanation ? (
                        <div className="mt-3 rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">
                          <strong>Explanation:</strong> {answer.question.explanation}
                        </div>
                      ) : null}
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-600">
                    Detailed answer review is not available for this result yet.
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Weakness analysis</h2>
            <div className="mt-4 space-y-3">
              {!resultLocked && (result.weaknesses || []).length ? (
                result.weaknesses!.map((weakness) => (
                  <div key={weakness} className="rounded-2xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
                    {formatMockSectionTitle(weakness)}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-600">
                  {resultLocked
                    ? "Weakness analysis unlocks with the premium pack."
                    : "No major weaknesses flagged in this result. Keep practicing to maintain your strengths."}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Recommended next practice</h2>
            <div className="mt-4 space-y-3">
              {!resultLocked && (result.recommendations || []).length ? (
                result.recommendations!.map((item, index) => (
                  <div key={`${item}-${index}`} className="rounded-2xl bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-950">
                    {item}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-600">
                  {resultLocked
                    ? "Recommended practice suggestions unlock with full premium access."
                    : "Recommended practice suggestions will appear once performance patterns are available."}
                </div>
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
