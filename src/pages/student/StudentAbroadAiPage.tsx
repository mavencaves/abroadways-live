import { type FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import { Loader2, Pencil, Plus, Send, Sparkles, Trash2 } from "lucide-react";
import { chatApi, studentApi } from "@/lib/api";
import { toast } from "sonner";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
  pending?: boolean;
}

interface ChatSessionSummary {
  _id: string;
  title: string;
  assistantMode?: "general" | "student-portal";
  createdAt: string;
  updatedAt: string;
}

interface ChatMessageResponse {
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
}

interface StudentProfileSnapshot {
  preferredCountry?: string;
  qualification?: string;
  examInterest?: string;
  intake?: string;
  applicationStage?: string;
  documents?: Array<{ status?: string }>;
}

const sidebarOptions = [
  { label: "Appointments", path: "/student/appointments" },
  { label: "Documents", path: "/student/documents" },
  { label: "Payments", path: "/student/payments" },
];

const starterPrompts = [
  "Based on my profile, what should I prioritize for my next study abroad step?",
  "Which scholarships or affordable destinations fit my profile best?",
  "What documents should I prepare next for my application stage?",
  "How should I plan my exam, consultation, and payment steps in order?",
];

const formatMessages = (messages: ChatMessageResponse[] = [], sessionId: string): ChatMessage[] =>
  messages.map((message, index) => ({
    id: `${sessionId}-${index}-${message.createdAt ?? index}`,
    role: message.role === "assistant" ? "assistant" : "user",
    content: message.content,
    createdAt: message.createdAt,
    pending: false,
  }));

const formatDocumentSummary = (documents: StudentProfileSnapshot["documents"] = []) => {
  if (!documents.length) return "No uploaded documents yet";

  const counts = documents.reduce<Record<string, number>>((accumulator, document) => {
    const key = document.status || "uploaded";
    accumulator[key] = (accumulator[key] || 0) + 1;
    return accumulator;
  }, {});

  return Object.entries(counts)
    .map(([status, count]) => `${count} ${status.replace(/-/g, " ")}`)
    .join(", ");
};

export default function StudentAbroadAiPage() {
  const [selectedOption, setSelectedOption] = useState(sidebarOptions[0]?.label ?? "Appointments");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessions, setSessions] = useState<ChatSessionSummary[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [profile, setProfile] = useState<StudentProfileSnapshot | null>(null);
  const [isLoadingSessions, setIsLoadingSessions] = useState(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    loadProfile();
    loadSessions();
  }, []);

  const loadProfile = async () => {
    setIsLoadingProfile(true);
    try {
      const response = await studentApi.getProfile();
      setProfile(response.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load your student profile for AbroadAI.");
    } finally {
      setIsLoadingProfile(false);
    }
  };

  const loadSessions = async (sessionToSelect?: string) => {
    setIsLoadingSessions(true);
    try {
      const response = await chatApi.getSessions();
      const data: ChatSessionSummary[] = Array.isArray(response.data) ? response.data : [];
      const studentSessions = data.filter((session) => session.assistantMode === "student-portal" || !session.assistantMode);
      setSessions(studentSessions);

      const sessionId =
        sessionToSelect ??
        (activeSessionId && studentSessions.some((session) => session._id === activeSessionId)
          ? activeSessionId
          : studentSessions[0]?._id ?? null);

      if (sessionId) {
        handleSelectSession(sessionId);
      } else {
        setActiveSessionId(null);
        setMessages([]);
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to load your AI chats.";
      toast.error(message);
    } finally {
      setIsLoadingSessions(false);
    }
  };

  const handleSelectSession = async (sessionId: string) => {
    setActiveSessionId(sessionId);
    setIsLoadingMessages(true);
    setMessages([]);

    try {
      const response = await chatApi.getSessionById(sessionId);
      const sessionMessages = formatMessages(response?.data?.messages ?? [], sessionId);
      setMessages(sessionMessages);
    } catch (error: any) {
      const message = error?.response?.data?.message || "Unable to load this AI conversation.";
      toast.error(message);
      setActiveSessionId(null);
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const handleNewChat = async () => {
    try {
      const response = await chatApi.createSession({ assistantMode: "student-portal" });
      const newSession: ChatSessionSummary = response.data;
      setSessions((prev) => [newSession, ...prev]);
      setActiveSessionId(newSession._id);
      setMessages([]);
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to create a new AI chat.";
      toast.error(message);
    }
  };

  const handleDeleteSession = async (sessionId: string) => {
    if (!window.confirm("Delete this AI conversation? This cannot be undone.")) {
      return;
    }

    try {
      await chatApi.deleteSession(sessionId);
      setSessions((prev) => prev.filter((session) => session._id !== sessionId));

      if (activeSessionId === sessionId) {
        const remaining = sessions.filter((session) => session._id !== sessionId);
        const nextSessionId = remaining[0]?._id ?? null;
        if (nextSessionId) {
          handleSelectSession(nextSessionId);
        } else {
          setActiveSessionId(null);
          setMessages([]);
        }
      }

      toast.success("AI conversation deleted.");
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to delete the AI conversation.";
      toast.error(message);
    }
  };

  const handleRenameSession = async (session: ChatSessionSummary) => {
    const nextTitle = window.prompt("Rename AI conversation", session.title);
    if (!nextTitle || nextTitle.trim() === session.title) {
      return;
    }

    try {
      const response = await chatApi.updateSessionTitle(session._id, { title: nextTitle.trim() });
      const updatedSession: ChatSessionSummary = response.data;
      setSessions((prev) => prev.map((item) => (item._id === session._id ? { ...item, ...updatedSession } : item)));
      toast.success("AI conversation renamed.");
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to rename the AI conversation.";
      toast.error(message);
    }
  };

  const ensureActiveSession = async (): Promise<string | null> => {
    if (activeSessionId) {
      return activeSessionId;
    }

    try {
      const response = await chatApi.createSession({ assistantMode: "student-portal" });
      const session: ChatSessionSummary = response.data;
      setSessions((prev) => [session, ...prev]);
      setActiveSessionId(session._id);
      setMessages([]);
      return session._id;
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to start a new AI conversation.";
      toast.error(message);
      return null;
    }
  };

  const sendPrompt = async (prompt: string) => {
    const trimmed = prompt.trim();
    if (!trimmed) {
      return;
    }

    const sessionId = await ensureActiveSession();
    if (!sessionId) {
      return;
    }

    setInput("");

    const userMessage: ChatMessage = {
      id: `${sessionId}-user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    const assistantPlaceholderId = `${sessionId}-assistant-${Date.now()}`;
    const assistantPlaceholder: ChatMessage = {
      id: assistantPlaceholderId,
      role: "assistant",
      content: "",
      pending: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    setIsSending(true);

    try {
      const response = await chatApi.sendMessage(sessionId, { prompt: trimmed });
      const updatedSession = response?.data?.session;

      if (!updatedSession) {
        throw new Error("No session data returned from server.");
      }

      setMessages(formatMessages(updatedSession.messages ?? [], updatedSession._id));
      setSessions((prev) => {
        const existing = prev.find((session) => session._id === updatedSession._id);
        const updatedSummary: ChatSessionSummary = {
          _id: updatedSession._id,
          title: updatedSession.title ?? existing?.title ?? "New chat",
          assistantMode: updatedSession.assistantMode ?? existing?.assistantMode ?? "student-portal",
          createdAt: existing?.createdAt ?? updatedSession.createdAt ?? new Date().toISOString(),
          updatedAt: updatedSession.updatedAt ?? new Date().toISOString(),
        };
        const remaining = prev.filter((session) => session._id !== updatedSession._id);
        return [updatedSummary, ...remaining];
      });
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to send your message.";
      toast.error(message);
      setMessages((prev) =>
        prev.filter((message) => message.id !== userMessage.id && message.id !== assistantPlaceholderId)
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendPrompt(input);
  };

  const isConversationEmpty = useMemo(
    () => !messages.length && !isLoadingMessages,
    [messages.length, isLoadingMessages]
  );

  const profileSummary = useMemo(
    () => ({
      preferredCountry: profile?.preferredCountry || "Not added yet",
      qualification: profile?.qualification || "Not added yet",
      examInterest: profile?.examInterest || "Not added yet",
      intake: profile?.intake || "Not added yet",
      applicationStage: profile?.applicationStage?.replace(/-/g, " ") || "Not added yet",
      documentSummary: formatDocumentSummary(profile?.documents),
    }),
    [profile]
  );

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,#06142f_0%,#0b2453_55%,#144599_100%)] px-6 py-8 text-white shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Student AbroadAI</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Personalized study abroad guidance inside your student portal
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">
              AbroadAI uses your profile context to guide you on destinations, scholarships, exams, documents,
              visa preparation, and the next steps in your application journey.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm text-blue-50 backdrop-blur">
            <p className="font-semibold text-white">Important disclaimer</p>
            <p className="mt-2 leading-7">
              AbroadAI provides guidance, not final visa or admission decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.15fr_2fr]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Profile context</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">What AbroadAI can use</h2>
            </div>
            {isLoadingProfile ? <Loader2 className="h-4 w-4 animate-spin text-slate-400" /> : null}
          </div>

          <div className="mt-4 grid gap-3 text-sm text-slate-700">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p><span className="font-medium">Preferred country:</span> {profileSummary.preferredCountry}</p>
              <p className="mt-2"><span className="font-medium">Qualification:</span> {profileSummary.qualification}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p><span className="font-medium">Exam interest:</span> {profileSummary.examInterest}</p>
              <p className="mt-2"><span className="font-medium">Target intake:</span> {profileSummary.intake}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p><span className="font-medium">Application stage:</span> {profileSummary.applicationStage}</p>
              <p className="mt-2"><span className="font-medium">Document status:</span> {profileSummary.documentSummary}</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            Update your profile, documents, payments, and appointments to get more relevant AI guidance.
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Helpful links</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">Student actions</h2>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {sidebarOptions.map((option) => (
              <NavLink
                key={option.label}
                to={option.path}
                onClick={() => setSelectedOption(option.label)}
                className={({ isActive }) =>
                  `rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                    selectedOption === option.label || isActive
                      ? "border-blue-200 bg-blue-50 text-blue-900"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50"
                  }`
                }
              >
                {option.label}
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="flex min-h-[42rem] flex-col rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
          <div className="p-4">
            <button
              onClick={handleNewChat}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-800"
            >
              <Plus className="h-4 w-4" />
              Start a new AI chat
            </button>
          </div>

          <div className="mx-4 border-t border-slate-200" />

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Previous chats</h3>
            {isLoadingSessions ? (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading chats...
              </div>
            ) : sessions.length === 0 ? (
              <p className="text-sm italic text-slate-400">No student AI conversations yet.</p>
            ) : (
              <ul className="flex flex-col gap-2 text-sm">
                {sessions.map((session) => {
                  const isActive = session._id === activeSessionId;
                  return (
                    <li
                      key={session._id}
                      className={`group rounded-2xl border px-3 py-3 transition ${
                        isActive ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <button onClick={() => handleSelectSession(session._id)} className="flex w-full text-left">
                        <span className="truncate font-medium text-slate-800">{session.title || "New chat"}</span>
                      </button>
                      <div className="mt-2 flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() => handleRenameSession(session)}
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
                        >
                          <Pencil className="h-3 w-3" />
                          Rename
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteSession(session._id)}
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-red-500 hover:bg-red-50"
                        >
                          <Trash2 className="h-3 w-3" />
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </aside>

        <main className="flex min-h-[42rem] flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Ask AbroadAI now</h2>
              <p className="mt-1 text-sm text-slate-500">
                Personalized guidance for destinations, exams, documents, payments, and application steps.
              </p>
            </div>
            <div className="hidden rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 md:block">
              Student-aware guidance
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2">
            {isLoadingMessages ? (
              <div className="flex h-full items-center justify-center text-slate-500">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Loading conversation...
              </div>
            ) : isConversationEmpty ? (
              <div className="flex h-full flex-col justify-center">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">AbroadAI is ready to help</h3>
                      <p className="text-sm text-slate-600">
                        Ask about your next study abroad step, missing documents, scholarship options, visa planning,
                        or how your appointments and payments fit into the process.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 md:grid-cols-2">
                    {starterPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => sendPrompt(prompt)}
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <div key={message.id} className="space-y-2">
                    {message.role === "user" ? (
                      <div className="flex justify-end">
                        <div className="max-w-[75%] rounded-2xl rounded-br-md bg-blue-700 px-4 py-3 text-white shadow-lg">
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-start">
                        <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-slate-800 shadow">
                          {message.pending ? (
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              AbroadAI is preparing your answer...
                            </div>
                          ) : (
                            <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                          )}
                        </div>
                      </div>
                    )}
                    {message.createdAt && !message.pending ? (
                      <div className={`text-xs text-slate-400 ${message.role === "user" ? "text-right" : "text-left"}`}>
                        {new Date(message.createdAt).toLocaleString()}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows={4}
              placeholder="Ask AbroadAI about your destinations, scholarships, documents, visa preparation, or account status..."
              className="w-full resize-none rounded-[1.5rem] border border-slate-300 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={isSending}
            />
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                AbroadAI provides guidance, not final visa or admission decisions.
              </p>
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  !input.trim() || isSending
                    ? "cursor-not-allowed bg-slate-300 text-slate-500"
                    : "bg-blue-700 text-white hover:bg-blue-800"
                }`}
              >
                {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {isSending ? "Sending..." : "Get personalized guidance"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
