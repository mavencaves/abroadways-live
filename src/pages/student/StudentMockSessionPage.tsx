import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { OBJECTIVE_QUESTION_TYPES, SUBJECTIVE_QUESTION_TYPES, formatMockSectionTitle } from "@/data/mock-test-config";

type SessionQuestion = {
  _id: string;
  sectionKey: string;
  type: string;
  text: string;
  options?: Array<any>;
  marks?: number;
};

type SessionResponse = {
  _id: string;
  status: string;
  mode?: string;
  startedAt?: string;
  durationMinutes?: number;
  exam?: { title?: string };
  testSet?: { title?: string };
  questionOrder: SessionQuestion[];
  answers: Array<{
    _id: string;
    question: SessionQuestion | string;
    answer: any;
    marksObtained?: number;
    graded?: boolean;
    feedback?: string;
  }>;
};

const formatDuration = (totalSeconds: number) => {
  const safe = Math.max(totalSeconds, 0);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;
  return [hours, minutes, seconds]
    .map((value) => `${value}`.padStart(2, "0"))
    .join(":");
};

export default function StudentMockSessionPage() {
  const { sessionId = "" } = useParams();
  const navigate = useNavigate();
  const [session, setSession] = useState<SessionResponse | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [draftAnswers, setDraftAnswers] = useState<Record<string, any>>({});
  const [savingQuestionId, setSavingQuestionId] = useState("");
  const [isFinishing, setIsFinishing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);
    mockTestsApi
      .getSession(sessionId)
      .then((response) => {
        const nextSession = response.data;
        setSession(nextSession);
        const nextDrafts: Record<string, any> = {};
        for (const item of nextSession.answers || []) {
          const questionId = typeof item.question === "string" ? item.question : item.question?._id;
          if (questionId) {
            nextDrafts[questionId] = item.answer ?? "";
          }
        }
        setDraftAnswers(nextDrafts);
      })
      .catch((err) => {
        setError(err?.response?.data?.message || "We could not load this mock-test session.");
      })
      .finally(() => setIsLoading(false));
  }, [sessionId]);

  useEffect(() => {
    if (!session?.startedAt || !session?.durationMinutes || session.status !== "ongoing") {
      return;
    }

    const updateRemaining = () => {
      const durationMinutes = session.durationMinutes || 0;
      const endTime = new Date(session.startedAt as string).getTime() + durationMinutes * 60 * 1000;
      const diffSeconds = Math.floor((endTime - Date.now()) / 1000);
      setRemainingSeconds(diffSeconds);
      if (diffSeconds <= 0) {
        void handleFinish();
      }
    };

    updateRemaining();
    const intervalId = window.setInterval(updateRemaining, 1000);
    return () => window.clearInterval(intervalId);
  }, [session]);

  const questions = session?.questionOrder || [];
  const currentQuestion = questions[currentIndex];

  const completion = useMemo(() => {
    if (!questions.length) return 0;
    const answeredCount = questions.filter((question) => {
      const answer = draftAnswers[question._id];
      return Array.isArray(answer) ? answer.length > 0 : `${answer ?? ""}`.trim().length > 0;
    }).length;
    return Math.round((answeredCount / questions.length) * 100);
  }, [draftAnswers, questions]);

  const updateDraftAnswer = (questionId: string, value: any) => {
    setDraftAnswers((current) => ({
      ...current,
      [questionId]: value,
    }));
  };

  const saveCurrentAnswer = async () => {
    if (!session || !currentQuestion) return;
    setSavingQuestionId(currentQuestion._id);
    setError("");

    try {
      const response = await mockTestsApi.submitAnswer(session._id, {
        questionId: currentQuestion._id,
        answer: draftAnswers[currentQuestion._id] ?? "",
      });
      setSession(response.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not save this answer.");
    } finally {
      setSavingQuestionId("");
    }
  };

  const handleFinish = async () => {
    if (!session || isFinishing || session.status !== "ongoing") return;
    setIsFinishing(true);
    setError("");
    try {
      const response = await mockTestsApi.finishSession(session._id);
      navigate(`/student/mock-tests/results/${response.data.result._id}`, { replace: true });
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not finish this session.");
    } finally {
      setIsFinishing(false);
    }
  };

  if (isLoading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">Loading session...</div>;
  }

  if (error && !session) {
    return <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">{error}</div>;
  }

  if (!session || !currentQuestion) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600">This session is unavailable.</div>;
  }

  const currentValue = draftAnswers[currentQuestion._id] ?? "";
  const questionType = currentQuestion.type || "mcq";
  const isObjective = OBJECTIVE_QUESTION_TYPES.includes(questionType as any);
  const isSubjective = SUBJECTIVE_QUESTION_TYPES.includes(questionType as any);
  const usesOptionSelection = ["mcq", "tf"].includes(questionType);

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-blue-200">
                {session.exam?.title || "Mock test"} · {session.testSet?.title || "Timed session"}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Live practice session</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Save answers as you go, monitor your timer, and finish when you are ready to generate the result report.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Timer</p>
              <p className="mt-2 text-2xl font-semibold">{remainingSeconds === null ? "--:--:--" : formatDuration(remainingSeconds)}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Progress</p>
              <p className="mt-2 text-2xl font-semibold">{completion}%</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Question</p>
              <p className="mt-2 text-2xl font-semibold">
                {currentIndex + 1}/{questions.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {error ? (
        <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">{error}</div>
      ) : null}

      <section className="grid gap-6 xl:grid-cols-[0.32fr_0.68fr]">
        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Question navigator</h2>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {questions.map((question, index) => {
                const hasAnswer = `${draftAnswers[question._id] ?? ""}`.trim().length > 0;
                return (
                  <button
                    key={question._id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      currentIndex === index
                        ? "bg-slate-900 text-white"
                        : hasAnswer
                          ? "bg-blue-50 text-blue-700"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={handleFinish}
              disabled={isFinishing}
              className="mt-5 w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {isFinishing ? "Finishing..." : "Finish and score session"}
            </button>
          </div>
        </aside>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                {formatMockSectionTitle(currentQuestion.sectionKey || "general")} · {questionType}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Question {currentIndex + 1}</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              {currentQuestion.marks || 1} mark{(currentQuestion.marks || 1) === 1 ? "" : "s"}
            </span>
          </div>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl bg-slate-50 p-5 text-base leading-7 text-slate-700">{currentQuestion.text}</div>

            {isObjective && usesOptionSelection ? (
              <div className="space-y-3">
                {(currentQuestion.options?.length ? currentQuestion.options : ["True", "False"]).map((option, index) => {
                  const label = typeof option === "string" ? option : option?.label || option?.value || `Option ${index + 1}`;
                  const value = typeof option === "string" ? option : option?.value || option?.label || label;
                  return (
                    <label
                      key={`${currentQuestion._id}-${index}`}
                      className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-blue-200 hover:bg-blue-50/50"
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion._id}`}
                        className="mt-1 h-4 w-4 accent-blue-600"
                        checked={currentValue === value}
                        onChange={() => updateDraftAnswer(currentQuestion._id, value)}
                      />
                      <span className="text-sm leading-6 text-slate-700">{label}</span>
                    </label>
                  );
                })}
              </div>
            ) : isSubjective ? (
              <textarea
                value={currentValue}
                onChange={(event) => updateDraftAnswer(currentQuestion._id, event.target.value)}
                rows={10}
                placeholder="Write your response here..."
                className="min-h-[220px] w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            ) : (
              <input
                type="text"
                value={currentValue}
                onChange={(event) => updateDraftAnswer(currentQuestion._id, event.target.value)}
                placeholder="Enter your answer"
                className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}
                  disabled={currentIndex === 0}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentIndex((value) => Math.min(questions.length - 1, value + 1))}
                  disabled={currentIndex === questions.length - 1}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>

              <button
                type="button"
                onClick={saveCurrentAnswer}
                disabled={savingQuestionId === currentQuestion._id}
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {savingQuestionId === currentQuestion._id ? "Saving..." : "Save answer"}
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
