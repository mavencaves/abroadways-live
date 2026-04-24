import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, BrainCircuit, Loader2, MessageSquareText, ShieldAlert, UserRound } from "lucide-react";
import { chatApi } from "@/lib/api";
import { toast } from "sonner";

type TopicSummary = {
  topic: string;
  label: string;
  count: number;
};

type ChatInsightItem = {
  _id: string;
  title: string;
  topic: string;
  riskLevel: "low" | "medium" | "high";
  needsReview: boolean;
  latestUserPrompt: string;
  latestAssistantReply: string;
  messageCount: number;
  updatedAt: string;
  createdAt: string;
  student: {
    _id: string;
    name: string;
    email: string;
  };
  profile?: {
    preferredCountry?: string;
    qualification?: string;
    examInterest?: string;
    intake?: string;
    applicationStage?: string;
    documentStatusSummary?: string;
  } | null;
  contextSnapshot?: {
    preferredCountry?: string;
    qualification?: string;
    examInterest?: string;
    intake?: string;
    applicationStage?: string;
    documentStatusSummary?: string;
    paymentStatusSummary?: string;
    appointmentStatusSummary?: string;
  };
  latestMessages?: Array<{
    role: "user" | "assistant";
    content: string;
    createdAt?: string;
  }>;
};

type InsightsResponse = {
  summary: {
    totalSessions: number;
    activeStudents: number;
    totalMessages: number;
    highRiskSessions: number;
    needsReviewSessions: number;
    commonTopics: TopicSummary[];
  };
  items: ChatInsightItem[];
};

const riskFilterOptions = [
  { value: "all", label: "All risk levels" },
  { value: "high", label: "High risk" },
  { value: "medium", label: "Medium risk" },
  { value: "low", label: "Low risk" },
];

const reviewFilterOptions = [
  { value: "all", label: "All sessions" },
  { value: "needs-review", label: "Needs review" },
  { value: "high-risk", label: "High-risk only" },
];

export default function AiMonitoringPage() {
  const [data, setData] = useState<InsightsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("all");
  const [reviewFilter, setReviewFilter] = useState("all");
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);

  useEffect(() => {
    const loadInsights = async () => {
      setLoading(true);
      try {
        const response = await chatApi.getAdminInsights();
        setData(response.data);
        if (response.data?.items?.length) {
          setSelectedSessionId((current) => current ?? response.data.items[0]._id);
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Failed to load AbroadAI monitoring data.");
      } finally {
        setLoading(false);
      }
    };

    loadInsights();
  }, []);

  const filteredItems = useMemo(() => {
    const source = data?.items || [];
    const query = search.trim().toLowerCase();

    return source.filter((item) => {
      if (riskFilter !== "all" && item.riskLevel !== riskFilter) {
        return false;
      }

      if (reviewFilter === "needs-review" && !item.needsReview) {
        return false;
      }

      if (reviewFilter === "high-risk" && item.riskLevel !== "high") {
        return false;
      }

      if (!query) {
        return true;
      }

      const haystack = [
        item.student.name,
        item.student.email,
        item.title,
        item.topic,
        item.latestUserPrompt,
        item.latestAssistantReply,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [data?.items, riskFilter, reviewFilter, search]);

  const selectedSession = useMemo(
    () => filteredItems.find((item) => item._id === selectedSessionId) ?? filteredItems[0] ?? null,
    [filteredItems, selectedSessionId]
  );

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-slate-500 shadow-sm">
        <div className="flex items-center gap-3">
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading AbroadAI monitoring...
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700 shadow-sm">
        AbroadAI monitoring is unavailable right now.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,#06142f_0%,#0b2453_55%,#144599_100%)] px-6 py-8 text-white shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">AbroadAI monitoring</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight">Track student AI usage, common topics, and risky queries</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-blue-100">
              Review how students are using AbroadAI, spot repeated concerns early, and escalate conversations that
              need human support.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">AI sessions</p>
            <BrainCircuit className="h-4 w-4 text-blue-700" />
          </div>
          <p className="mt-3 text-3xl font-semibold text-slate-950">{data.summary.totalSessions}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Active students</p>
            <UserRound className="h-4 w-4 text-blue-700" />
          </div>
          <p className="mt-3 text-3xl font-semibold text-slate-950">{data.summary.activeStudents}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Messages</p>
            <MessageSquareText className="h-4 w-4 text-blue-700" />
          </div>
          <p className="mt-3 text-3xl font-semibold text-slate-950">{data.summary.totalMessages}</p>
        </div>
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-amber-800">Needs review</p>
            <AlertTriangle className="h-4 w-4 text-amber-700" />
          </div>
          <p className="mt-3 text-3xl font-semibold text-amber-950">{data.summary.needsReviewSessions}</p>
        </div>
        <div className="rounded-3xl border border-red-200 bg-red-50 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-red-800">High-risk queries</p>
            <ShieldAlert className="h-4 w-4 text-red-700" />
          </div>
          <p className="mt-3 text-3xl font-semibold text-red-950">{data.summary.highRiskSessions}</p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">AI query list</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-950">Student conversations</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search student, email, or query"
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-blue-400"
                />
                <select
                  value={riskFilter}
                  onChange={(event) => setRiskFilter(event.target.value)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-400"
                >
                  {riskFilterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <select
                  value={reviewFilter}
                  onChange={(event) => setReviewFilter(event.target.value)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-400"
                >
                  {reviewFilterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {filteredItems.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-500">
                  No AI sessions match the current filters.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <button
                    key={item._id}
                    type="button"
                    onClick={() => setSelectedSessionId(item._id)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      selectedSession?._id === item._id
                        ? "border-blue-200 bg-blue-50"
                        : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base font-semibold text-slate-950">{item.student.name}</span>
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{item.student.email}</span>
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              item.riskLevel === "high"
                                ? "bg-red-100 text-red-700"
                                : item.riskLevel === "medium"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {item.riskLevel} risk
                          </span>
                          {item.needsReview ? (
                            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                              Needs review
                            </span>
                          ) : null}
                        </div>
                        <p className="text-sm font-medium text-slate-700">{item.title}</p>
                        <p className="line-clamp-2 text-sm text-slate-600">{item.latestUserPrompt || "No student prompt saved yet."}</p>
                      </div>
                      <div className="shrink-0 text-right text-xs text-slate-500">
                        <p>{new Date(item.updatedAt).toLocaleString()}</p>
                        <p className="mt-1 capitalize">{item.topic.replace(/-/g, " ")}</p>
                        <p className="mt-1">{item.messageCount} messages</p>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Common topics</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">What students ask most</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {data.summary.commonTopics.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                  No topic data yet.
                </div>
              ) : (
                data.summary.commonTopics.map((topic) => (
                  <div key={topic.topic} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">{topic.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-blue-800">{topic.count}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{topic.topic}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Session detail</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">Selected conversation</h2>

          {!selectedSession ? (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
              Select a student AI session to inspect messages and profile context.
            </div>
          ) : (
            <div className="mt-4 space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <p><span className="font-medium">Student:</span> {selectedSession.student.name}</p>
                <p className="mt-2"><span className="font-medium">Email:</span> {selectedSession.student.email}</p>
                <p className="mt-2"><span className="font-medium">Topic:</span> {selectedSession.topic.replace(/-/g, " ")}</p>
                <p className="mt-2"><span className="font-medium">Last updated:</span> {new Date(selectedSession.updatedAt).toLocaleString()}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-medium text-slate-900">Profile context</p>
                <div className="mt-3 grid gap-2">
                  <p><span className="font-medium">Preferred country:</span> {selectedSession.profile?.preferredCountry || selectedSession.contextSnapshot?.preferredCountry || "Not set"}</p>
                  <p><span className="font-medium">Qualification:</span> {selectedSession.profile?.qualification || selectedSession.contextSnapshot?.qualification || "Not set"}</p>
                  <p><span className="font-medium">Exam interest:</span> {selectedSession.profile?.examInterest || selectedSession.contextSnapshot?.examInterest || "Not set"}</p>
                  <p><span className="font-medium">Intake:</span> {selectedSession.profile?.intake || selectedSession.contextSnapshot?.intake || "Not set"}</p>
                  <p><span className="font-medium">Application stage:</span> {selectedSession.profile?.applicationStage || selectedSession.contextSnapshot?.applicationStage || "Not set"}</p>
                  <p><span className="font-medium">Document status:</span> {selectedSession.profile?.documentStatusSummary || selectedSession.contextSnapshot?.documentStatusSummary || "No document data"}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-medium text-slate-900">Latest messages</p>
                {selectedSession.latestMessages?.length ? (
                  selectedSession.latestMessages.map((message, index) => (
                    <div
                      key={`${selectedSession._id}-${index}-${message.createdAt ?? index}`}
                      className={`rounded-2xl px-4 py-3 text-sm ${
                        message.role === "user"
                          ? "bg-blue-700 text-white"
                          : "border border-slate-200 bg-slate-50 text-slate-800"
                      }`}
                    >
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                        {message.role === "user" ? "Student" : "AbroadAI"}
                      </p>
                      <p className="whitespace-pre-wrap leading-7">{message.content}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                    No messages saved for this session.
                  </div>
                )}
              </div>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}
