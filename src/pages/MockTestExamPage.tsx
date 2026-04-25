import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { MOCK_TEST_EXAM_MAP, formatMockSectionTitle } from "@/data/mock-test-config";

type LandingResponse = {
  exam: {
    _id: string;
    slug: string;
    title: string;
    description: string;
    sections?: Array<{
      key: string;
      title: string;
      durationMinutes?: number;
      instructions?: string;
    }>;
  };
  questionCount: number;
  testSets: Array<{
    _id: string;
    title: string;
    description?: string;
    durationMinutes?: number;
    questionIds?: any[];
    sectionConfig?: Array<{
      key: string;
      questionCount?: number;
    }>;
  }>;
};

export default function MockTestExamPage() {
  const { exam = "" } = useParams();
  const examMeta = MOCK_TEST_EXAM_MAP[exam];
  const [data, setData] = useState<LandingResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");
    mockTestsApi
      .getExamLanding(exam)
      .then((response) => setData(response.data))
      .catch((err) => {
        setError(err?.response?.data?.message || "We could not load this mock-test library right now.");
      })
      .finally(() => setIsLoading(false));
  }, [exam]);

  const totalPublishedQuestions = useMemo(() => {
    if (!data) return 0;
    if (data.questionCount) return data.questionCount;
    return data.testSets.reduce((sum, set) => sum + (set.questionIds?.length || 0), 0);
  }, [data]);

  if (!examMeta) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-semibold text-slate-900">Mock-test track not found</h1>
        <p className="mt-4 text-slate-600">The requested exam track is not part of the current Abroadways mock-test catalog.</p>
      </section>
    );
  }

  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-200">
              {examMeta.eyebrow}
            </span>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{examMeta.title} Mock Tests</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                {data?.exam?.description || examMeta.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/student/mock-tests/${examMeta.slug}`}
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Open practice dashboard
              </Link>
              <Link
                to="/mock-tests"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:text-blue-200"
              >
                Browse all exams
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {[
              ["Published sets", `${data?.testSets?.length || 0}`],
              ["Question bank", `${totalPublishedQuestions}`],
              ["Report style", "Band + weakness analysis"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-300">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {isLoading ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">
            Loading exam library...
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-10 text-center text-rose-700">{error}</div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">Section coverage</h2>
                <div className="mt-5 space-y-3">
                  {(data?.exam.sections || []).map((section) => (
                    <div key={section.key} className="rounded-2xl bg-slate-50 p-4">
                      <p className="font-semibold text-slate-900">{section.title || formatMockSectionTitle(section.key)}</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {section.durationMinutes ? `${section.durationMinutes} minutes` : "Timed"} ·{" "}
                        {section.instructions || "Original practice prompts only."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">What students get</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <li>Timed sessions that mimic real exam pacing.</li>
                  <li>Automatic scoring for objective questions.</li>
                  <li>Manual-review workflow for writing and speaking responses.</li>
                  <li>Weakness analysis and recommended next practice after each result.</li>
                </ul>
              </div>
            </aside>

            <div className="space-y-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Published test-set library</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Start from a full timed set or use the student dashboard to review past attempts and keep practicing.
                  </p>
                </div>
              </div>

              {data?.testSets?.length ? (
                <div className="grid gap-5 md:grid-cols-2">
                  {data.testSets.map((set) => (
                    <article key={set._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">{set.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {set.description || "A ready-to-start timed set built from original Abroadways practice questions."}
                          </p>
                        </div>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {set.durationMinutes || 60} min
                        </span>
                      </div>
                      {set.sectionConfig?.length ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {set.sectionConfig.map((section) => (
                            <span
                              key={`${set._id}-${section.key}`}
                              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                            >
                              {formatMockSectionTitle(section.key)} · {section.questionCount || 0}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-sm text-slate-500">{set.questionIds?.length || 0} questions</span>
                        <Link
                          to={`/student/mock-tests/${examMeta.slug}`}
                          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                        >
                          Start in portal
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
                  Published test sets will appear here once the mock-test team publishes them for this exam track.
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
