import { type FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { mockTestsApi } from "@/lib/api";
import { MOCK_TEST_EXAM_MAP, MOCK_TEST_EXAMS } from "@/data/mock-test-config";

type QuestionItem = {
  _id: string;
  sectionKey: string;
  type: string;
  text: string;
  marks?: number;
};

type StudentOption = {
  _id: string;
  studentProfileId: string;
  name: string;
  email: string;
  preferredCountry?: string;
  examInterest?: string;
};

type TestSetItem = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  instructions?: string;
  durationMinutes?: number;
  accessType?: "free" | "paid";
  price?: number;
  currency?: string;
  status: "draft" | "published" | "archived";
  questionIds?: QuestionItem[];
  assignedUsers?: Array<{ _id: string; name?: string; email?: string }>;
  sectionConfig?: Array<{
    key: string;
    title?: string;
    questionCount?: number;
    durationMinutes?: number;
  }>;
};

const emptyForm = {
  id: "",
  title: "",
  slug: "",
  description: "",
  instructions: "",
  durationMinutes: "60",
  accessType: "free" as "free" | "paid",
  price: "0",
  currency: "BDT",
  status: "draft" as "draft" | "published" | "archived",
  questionIds: [] as string[],
  assignedUsers: [] as string[],
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function MockTestTestSetsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const examSlug = searchParams.get("exam") || "ielts";
  const [statusFilter, setStatusFilter] = useState(searchParams.get("status") || "");
  const [testSets, setTestSets] = useState<TestSetItem[]>([]);
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [students, setStudents] = useState<StudentOption[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadData = async () => {
    setIsLoading(true);
    setError("");
    try {
      const [setsResponse, questionsResponse, studentsResponse] = await Promise.all([
        mockTestsApi.getAdminTestSets({ examSlug, status: statusFilter || undefined }),
        mockTestsApi.getQuestions({ examSlug }),
        mockTestsApi.getAssignableStudents(),
      ]);
      setTestSets(setsResponse.data || []);
      setQuestions(questionsResponse.data || []);
      setStudents(studentsResponse.data || []);
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not load test-set management.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
  }, [examSlug, statusFilter]);

  const selectedQuestionCount = form.questionIds.length;

  const selectedSectionConfig = useMemo(() => {
    const sectionMap = new Map<string, { key: string; title: string; questionCount: number; durationMinutes: number }>();
    for (const question of questions) {
      if (!form.questionIds.includes(question._id)) continue;
      const current = sectionMap.get(question.sectionKey) || {
        key: question.sectionKey,
        title: question.sectionKey,
        questionCount: 0,
        durationMinutes: 0,
      };
      current.questionCount += 1;
      sectionMap.set(question.sectionKey, current);
    }
    return [...sectionMap.values()];
  }, [form.questionIds, questions]);

  const handleEdit = (testSet: TestSetItem) => {
    setForm({
      id: testSet._id,
      title: testSet.title,
      slug: testSet.slug,
      description: testSet.description || "",
      instructions: testSet.instructions || "",
      durationMinutes: `${testSet.durationMinutes || 60}`,
      accessType: testSet.accessType || "free",
      price: `${testSet.price || 0}`,
      currency: testSet.currency || "BDT",
      status: testSet.status || "draft",
      questionIds: (testSet.questionIds || []).map((question) => question._id),
      assignedUsers: (testSet.assignedUsers || []).map((user) => user._id),
    });
    setError("");
    setSuccess("");
  };

  const resetForm = () => setForm(emptyForm);

  const handleDelete = async (testSetId: string) => {
    if (!window.confirm("Delete this test set?")) return;
    try {
      await mockTestsApi.deleteTestSet(testSetId);
      setSuccess("Test set deleted.");
      if (form.id === testSetId) resetForm();
      await loadData();
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not delete this test set.");
    }
  };

  const toggleQuestion = (questionId: string) => {
    setForm((current) => ({
      ...current,
      questionIds: current.questionIds.includes(questionId)
        ? current.questionIds.filter((item) => item !== questionId)
        : [...current.questionIds, questionId],
    }));
  };

  const toggleAssignedUser = (userId: string) => {
    setForm((current) => ({
      ...current,
      assignedUsers: current.assignedUsers.includes(userId)
        ? current.assignedUsers.filter((item) => item !== userId)
        : [...current.assignedUsers, userId],
    }));
  };

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();
    setIsSaving(true);
    setError("");
    setSuccess("");

    const payload = {
      examSlug,
      title: form.title.trim(),
      slug: slugify(form.slug || form.title),
      description: form.description.trim(),
      instructions: form.instructions.trim(),
      durationMinutes: Number(form.durationMinutes) || 60,
      accessType: form.accessType,
      price: form.accessType === "paid" ? Number(form.price || 0) : 0,
      currency: form.currency || "BDT",
      status: form.status,
      questionIds: form.questionIds,
      assignedUsers: form.assignedUsers,
      sectionConfig: selectedSectionConfig,
    };

    try {
      if (form.id) {
        await mockTestsApi.updateTestSet(form.id, payload);
        setSuccess("Test set updated.");
      } else {
        await mockTestsApi.createTestSet(payload);
        setSuccess("Test set created.");
      }
      resetForm();
      await loadData();
    } catch (err: any) {
      setError(err?.response?.data?.message || "We could not save this test set.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Mock-test test sets</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Build timed sets, decide whether each set is free or premium, and assign access to specific students when needed.
        </p>
      </section>

      {error ? <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">{error}</div> : null}
      {success ? <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700">{success}</div> : null}

      <section className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
        <form onSubmit={handleSave} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{form.id ? "Edit test set" : "Create test set"}</h2>
              <p className="mt-1 text-sm text-slate-600">Published premium sets will require purchase or assignment before students can start them.</p>
            </div>
            {form.id ? (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                New set
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
                    setSearchParams(statusFilter ? { exam: event.target.value, status: statusFilter } : { exam: event.target.value })
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
                Status
                <select
                  value={form.status}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      status: event.target.value as "draft" | "published" | "archived",
                    }))
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Title
              <input
                value={form.title}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    title: event.target.value,
                    slug: current.id ? current.slug : slugify(event.target.value),
                  }))
                }
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                placeholder={`${MOCK_TEST_EXAM_MAP[examSlug]?.title || "Exam"} Full Mock 01`}
                required
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Slug
                <input
                  value={form.slug}
                  onChange={(event) => setForm((current) => ({ ...current, slug: slugify(event.target.value) }))}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Duration (minutes)
                <input
                  type="number"
                  min="1"
                  value={form.durationMinutes}
                  onChange={(event) => setForm((current) => ({ ...current, durationMinutes: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Access
                <select
                  value={form.accessType}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      accessType: event.target.value as "free" | "paid",
                      price: event.target.value === "free" ? "0" : current.price || "0",
                    }))
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Price
                <input
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={(event) => setForm((current) => ({ ...current, price: event.target.value }))}
                  disabled={form.accessType === "free"}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-50"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Currency
                <input
                  value={form.currency}
                  onChange={(event) => setForm((current) => ({ ...current, currency: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Description
              <textarea
                rows={3}
                value={form.description}
                onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                placeholder="What this mock test covers"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Instructions
              <textarea
                rows={4}
                value={form.instructions}
                onChange={(event) => setForm((current) => ({ ...current, instructions: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                placeholder="Show these instructions before the student starts the session"
              />
            </label>

            <div className="rounded-3xl border border-slate-200 p-4">
              <h3 className="text-lg font-semibold text-slate-900">Assigned student access</h3>
              <p className="mt-1 text-sm text-slate-600">
                Assigned students can open this set even if it is marked as paid.
              </p>
              <div className="mt-4 max-h-56 space-y-2 overflow-y-auto">
                {students.length ? (
                  students.map((student) => {
                    const selected = form.assignedUsers.includes(student._id);
                    return (
                      <label
                        key={student._id}
                        className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                          selected ? "border-blue-200 bg-blue-50" : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleAssignedUser(student._id)}
                          className="mt-1 h-4 w-4 accent-blue-600"
                        />
                        <span>
                          <span className="block font-semibold text-slate-900">{student.name}</span>
                          <span className="block text-slate-500">{student.email}</span>
                        </span>
                      </label>
                    );
                  })
                ) : (
                  <p className="text-sm text-slate-500">No student accounts are available for assignment yet.</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Selected questions</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {selectedQuestionCount} question{selectedQuestionCount === 1 ? "" : "s"} selected
                  </p>
                </div>
              </div>
              {selectedSectionConfig.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedSectionConfig.map((section) => (
                    <span key={section.key} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {section.key} · {section.questionCount}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-500">Select questions from the library to build this set.</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSaving || !form.questionIds.length}
              className="w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {isSaving ? "Saving..." : form.id ? "Update test set" : "Create test set"}
            </button>
          </div>
        </form>

        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-[0.8fr_1fr_auto]">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Exam
                <select
                  value={examSlug}
                  onChange={(event) =>
                    setSearchParams(statusFilter ? { exam: event.target.value, status: statusFilter } : { exam: event.target.value })
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
                Status
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">All statuses</option>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </label>
              <button
                type="button"
                onClick={() => void loadData()}
                className="mt-auto rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Refresh
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h2 className="text-xl font-semibold text-slate-900">Existing test sets</h2>
            </div>
            {isLoading ? (
              <div className="p-8 text-center text-sm text-slate-600">Loading sets...</div>
            ) : testSets.length ? (
              <div className="divide-y divide-slate-100">
                {testSets.map((testSet) => (
                  <article key={testSet._id} className="space-y-4 px-6 py-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {testSet.status}
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              testSet.accessType === "paid" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {testSet.accessType === "paid" ? "Paid" : "Free"}
                          </span>
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {testSet.durationMinutes || 60} min
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{testSet.title}</h3>
                        <p className="text-sm text-slate-500">
                          {testSet.questionIds?.length || 0} questions · slug: {testSet.slug}
                        </p>
                        {testSet.accessType === "paid" ? (
                          <p className="text-sm font-semibold text-amber-700">
                            {(testSet.price || 0).toLocaleString("en-BD")} {testSet.currency || "BDT"}
                          </p>
                        ) : null}
                        {testSet.assignedUsers?.length ? (
                          <p className="text-sm text-slate-600">
                            Assigned to {testSet.assignedUsers.length} student{testSet.assignedUsers.length === 1 ? "" : "s"}
                          </p>
                        ) : null}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(testSet)}
                          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(testSet._id)}
                          className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{testSet.description || "No description provided yet."}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-sm text-slate-600">No test sets found for the current filters.</div>
            )}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h2 className="text-xl font-semibold text-slate-900">Question library</h2>
            </div>
            <div className="max-h-[520px] divide-y divide-slate-100 overflow-y-auto">
              {questions.length ? (
                questions.map((question) => {
                  const selected = form.questionIds.includes(question._id);
                  return (
                    <label key={question._id} className="flex cursor-pointer gap-3 px-6 py-4 transition hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleQuestion(question._id)}
                        className="mt-1 h-4 w-4 accent-blue-600"
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {question.sectionKey}
                          </span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {question.type}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-medium text-slate-900">{question.text}</p>
                      </div>
                    </label>
                  );
                })
              ) : (
                <div className="p-8 text-center text-sm text-slate-600">
                  Add questions in the question bank first, then build test sets from them.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
