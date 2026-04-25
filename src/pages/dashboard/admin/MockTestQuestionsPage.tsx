import { type FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { MOCK_TEST_EXAMS } from "@/data/mock-test-config";

type QuestionItem = {
  _id: string;
  sectionKey: string;
  type: string;
  text: string;
  options?: string[];
  correctAnswer?: any;
  marks?: number;
  difficulty?: "easy" | "medium" | "hard";
  tags?: string[];
  explanation?: string;
  isActive?: boolean;
};

const QUESTION_TYPES = ["mcq", "tf", "numeric", "fill", "writing", "speaking", "essay"];

const emptyForm = {
  id: "",
  sectionKey: "",
  type: "mcq",
  text: "",
  optionsText: "",
  correctAnswer: "",
  marks: "1",
  difficulty: "medium" as "easy" | "medium" | "hard",
  tagsText: "",
  explanation: "",
  isActive: true,
};

export default function MockTestQuestionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const examSlug = searchParams.get("exam") || "ielts";
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [typeFilter, setTypeFilter] = useState(searchParams.get("type") || "");
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadQuestions = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await mockTestsApi.getQuestions({
        examSlug,
        search: search || undefined,
        type: typeFilter || undefined,
      });
      setQuestions(response.data || []);
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not load the question bank.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadQuestions();
  }, [examSlug, typeFilter]);

  const questionCounts = useMemo(() => {
    return {
      total: questions.length,
      objective: questions.filter((question) => ["mcq", "tf", "numeric", "fill"].includes(question.type)).length,
      subjective: questions.filter((question) => ["writing", "speaking", "essay"].includes(question.type)).length,
    };
  }, [questions]);

  const handleFilterSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextParams: Record<string, string> = { exam: examSlug };
    if (search.trim()) nextParams.search = search.trim();
    if (typeFilter) nextParams.type = typeFilter;
    setSearchParams(nextParams);
    void loadQuestions();
  };

  const resetForm = () => {
    setForm(emptyForm);
  };

  const handleEdit = (question: QuestionItem) => {
    setForm({
      id: question._id,
      sectionKey: question.sectionKey || "",
      type: question.type || "mcq",
      text: question.text || "",
      optionsText: (question.options || []).join("\n"),
      correctAnswer:
        typeof question.correctAnswer === "string" ? question.correctAnswer : JSON.stringify(question.correctAnswer ?? ""),
      marks: `${question.marks || 1}`,
      difficulty: question.difficulty || "medium",
      tagsText: (question.tags || []).join(", "),
      explanation: question.explanation || "",
      isActive: question.isActive !== false,
    });
    setSuccess("");
    setError("");
  };

  const handleDelete = async (questionId: string) => {
    if (!window.confirm("Delete this question from the question bank?")) return;
    try {
      await mockTestsApi.deleteQuestion(questionId);
      setSuccess("Question deleted.");
      if (form.id === questionId) resetForm();
      await loadQuestions();
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not delete this question.");
    }
  };

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();
    setIsSaving(true);
    setError("");
    setSuccess("");

    const options = form.optionsText
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
    const payload = {
      examSlug,
      sectionKey: form.sectionKey.trim(),
      type: form.type,
      text: form.text.trim(),
      options,
      correctAnswer: form.correctAnswer.trim(),
      marks: Number(form.marks) || 1,
      difficulty: form.difficulty,
      tags: form.tagsText
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      explanation: form.explanation.trim(),
      isActive: form.isActive,
    };

    try {
      if (form.id) {
        await mockTestsApi.updateQuestion(form.id, payload);
        setSuccess("Question updated.");
      } else {
        await mockTestsApi.createQuestion(payload);
        setSuccess("Question created.");
      }
      resetForm();
      await loadQuestions();
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not save this question.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Mock-test questions</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Build and maintain an original question bank for every exam track. Objective items auto-score, while writing and speaking stay review-ready.
          </p>
        </div>
      </section>

      {error ? <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">{error}</div> : null}
      {success ? <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700">{success}</div> : null}

      <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <form onSubmit={handleSave} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{form.id ? "Edit question" : "Create question"}</h2>
              <p className="mt-1 text-sm text-slate-600">Only original practice content should be added here.</p>
            </div>
            {form.id ? (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                New question
              </button>
            ) : null}
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Exam
                <select
                  value={examSlug}
                  onChange={(event) =>
                    setSearchParams({
                      exam: event.target.value,
                      ...(search.trim() ? { search: search.trim() } : {}),
                      ...(typeFilter ? { type: typeFilter } : {}),
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  {MOCK_TEST_EXAMS.map((exam) => (
                    <option key={exam.slug} value={exam.slug}>
                      {exam.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Section key
                <input
                  value={form.sectionKey}
                  onChange={(event) => setForm((current) => ({ ...current, sectionKey: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  placeholder="reading, listening, quant"
                  required
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Type
                <select
                  value={form.type}
                  onChange={(event) => setForm((current) => ({ ...current, type: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  {QUESTION_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Difficulty
                <select
                  value={form.difficulty}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, difficulty: event.target.value as "easy" | "medium" | "hard" }))
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Marks
                <input
                  type="number"
                  min="1"
                  value={form.marks}
                  onChange={(event) => setForm((current) => ({ ...current, marks: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Question text
              <textarea
                rows={5}
                value={form.text}
                onChange={(event) => setForm((current) => ({ ...current, text: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                placeholder="Write the original practice question here"
                required
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Options
              <textarea
                rows={4}
                value={form.optionsText}
                onChange={(event) => setForm((current) => ({ ...current, optionsText: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                placeholder="One option per line for MCQ/TF items"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Correct answer
              <input
                value={form.correctAnswer}
                onChange={(event) => setForm((current) => ({ ...current, correctAnswer: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                placeholder="Leave blank for manual-review questions if needed"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Tags
              <input
                value={form.tagsText}
                onChange={(event) => setForm((current) => ({ ...current, tagsText: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                placeholder="vocabulary, multiple-choice, map"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Explanation
              <textarea
                rows={3}
                value={form.explanation}
                onChange={(event) => setForm((current) => ({ ...current, explanation: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                placeholder="Optional explanation or reviewer guidance"
              />
            </label>

            <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(event) => setForm((current) => ({ ...current, isActive: event.target.checked }))}
                className="h-4 w-4 accent-blue-600"
              />
              Active and available for test-set building
            </label>

            <button
              type="submit"
              disabled={isSaving}
              className="w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {isSaving ? "Saving..." : form.id ? "Update question" : "Create question"}
            </button>
          </div>
        </form>

        <div className="space-y-5">
          <form onSubmit={handleFilterSubmit} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-[0.8fr_1fr_1fr_auto]">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Exam
                <select
                  value={examSlug}
                  onChange={(event) =>
                    setSearchParams({
                      exam: event.target.value,
                      ...(search.trim() ? { search: search.trim() } : {}),
                      ...(typeFilter ? { type: typeFilter } : {}),
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  {MOCK_TEST_EXAMS.map((exam) => (
                    <option key={exam.slug} value={exam.slug}>
                      {exam.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Search
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search question text"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Type
                <select
                  value={typeFilter}
                  onChange={(event) => setTypeFilter(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">All types</option>
                  {QUESTION_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="mt-auto rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Apply
              </button>
            </div>
          </form>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Total", `${questionCounts.total}`],
              ["Objective", `${questionCounts.objective}`],
              ["Manual review", `${questionCounts.subjective}`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h2 className="text-xl font-semibold text-slate-900">Question bank</h2>
            </div>
            {isLoading ? (
              <div className="p-8 text-center text-sm text-slate-600">Loading questions...</div>
            ) : questions.length ? (
              <div className="divide-y divide-slate-100">
                {questions.map((question) => (
                  <article key={question._id} className="space-y-4 px-6 py-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {question.sectionKey}
                          </span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {question.type}
                          </span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {question.difficulty}
                          </span>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${question.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                            {question.isActive ? "Active" : "Inactive"}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{question.text}</h3>
                        <p className="text-sm text-slate-500">
                          {question.marks || 1} mark{(question.marks || 1) === 1 ? "" : "s"} · Tags:{" "}
                          {(question.tags || []).join(", ") || "None"}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(question)}
                          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(question._id)}
                          className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {question.options?.length ? (
                      <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                        <strong className="text-slate-900">Options:</strong> {question.options.join(" · ")}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-sm text-slate-600">No questions match the current filters.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
