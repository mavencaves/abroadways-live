import { type FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import { BadgeCheck, Loader2, Pencil, Plus, Send, Sparkles, Trash2 } from "lucide-react";
import { chatApi } from "@/lib/api";
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
  createdAt: string;
  updatedAt: string;
}

interface ChatMessageResponse {
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
}

const sidebarOptions = [
  { label: "Visa Predictor", path: "/visa-predictor" },
  { label: "SOP Generator", path: "/resources/sop" },
];

const DEFAULT_TITLE = "New chat";

const starterPrompts = [
  "Which countries in Europe are best for affordable study abroad options from Bangladesh?",
  "What documents do I need for a UK student visa application?",
  "Suggest scholarship-friendly universities in Canada for business or IT.",
  "Which exam should I take: LanguageCert, IELTS, PTE, or TOEFL?",
];

const formatMessages = (messages: ChatMessageResponse[] = [], sessionId: string): ChatMessage[] =>
  messages.map((message, index) => ({
    id: `${sessionId}-${index}-${message.createdAt ?? index}`,
    role: message.role === "assistant" ? "assistant" : "user",
    content: message.content,
    createdAt: message.createdAt,
    pending: false,
  }));

export default function MavenCaveAi() {
  const [selectedOption, setSelectedOption] = useState(sidebarOptions[0]?.label ?? "Visa Predictor");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessions, setSessions] = useState<ChatSessionSummary[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [isLoadingSessions, setIsLoadingSessions] = useState(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async (sessionToSelect?: string) => {
    setIsLoadingSessions(true);
    try {
      const response = await chatApi.getSessions();
      const data: ChatSessionSummary[] = Array.isArray(response.data) ? response.data : [];
      setSessions(data);

      const sessionId =
        sessionToSelect ??
        (activeSessionId && data.some((session) => session._id === activeSessionId)
          ? activeSessionId
          : data[0]?._id ?? null);

      if (sessionId) {
        handleSelectSession(sessionId);
      } else {
        setActiveSessionId(null);
        setMessages([]);
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to load your chats.";
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
      const message = error?.response?.data?.message || "Unable to load this chat.";
      toast.error(message);
      setActiveSessionId(null);
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const handleNewChat = async () => {
    try {
      const response = await chatApi.createSession();
      const newSession: ChatSessionSummary = response.data;
      setSessions((prev) => [newSession, ...prev]);
      setActiveSessionId(newSession._id);
      setMessages([]);
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to create a new chat.";
      toast.error(message);
    }
  };

  const handleDeleteSession = async (sessionId: string) => {
    if (!window.confirm("Delete this chat? This cannot be undone.")) {
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

      toast.success("Chat deleted.");
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to delete chat.";
      toast.error(message);
    }
  };

  const handleRenameSession = async (session: ChatSessionSummary) => {
    const nextTitle = window.prompt("Rename chat", session.title);
    if (!nextTitle || nextTitle.trim() === session.title) {
      return;
    }

    try {
      const response = await chatApi.updateSessionTitle(session._id, { title: nextTitle.trim() });
      const updatedSession: ChatSessionSummary = response.data;
      setSessions((prev) =>
        prev.map((item) => (item._id === session._id ? { ...item, ...updatedSession } : item))
      );
      toast.success("Chat renamed.");
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to rename chat.";
      toast.error(message);
    }
  };

  const ensureActiveSession = async (): Promise<string | null> => {
    if (activeSessionId) {
      return activeSessionId;
    }

    try {
      const response = await chatApi.createSession();
      const session: ChatSessionSummary = response.data;
      setSessions((prev) => [session, ...prev]);
      setActiveSessionId(session._id);
      setMessages([]);
      return session._id;
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to start a new chat.";
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
      pending: false,
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
          title: updatedSession.title ?? existing?.title ?? DEFAULT_TITLE,
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

  const activeSession = useMemo(
    () => sessions.find((session) => session._id === activeSessionId) ?? null,
    [sessions, activeSessionId]
  );

  return (
    <div className="min-h-screen bg-[#f5f8fd]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">AbroadAI</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-950">Your Free Study Abroad Assistant</h1>
          </div>
          <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            100% free for students
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#06142f_0%,#0b2453_55%,#144599_100%)] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Free Student Support</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Ask anything about universities, visas, scholarships, and exams instantly.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">
              AbroadAI helps Bangladeshi students explore study abroad options in the UK, Canada, and Europe with
              fast guidance on applications, visa planning, scholarship questions, and LanguageCert, IELTS, PTE, and
              TOEFL pathways.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">100% free</div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">Built for students</div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                UKVI Approved LanguageCert Test Centre trust
              </div>
            </div>
          </div>

          <div className="grid gap-3 text-sm text-blue-50 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <BadgeCheck className="mb-3 h-5 w-5 text-cyan-300" />
              University shortlist guidance
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <BadgeCheck className="mb-3 h-5 w-5 text-cyan-300" />
              Visa and documentation support
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <BadgeCheck className="mb-3 h-5 w-5 text-cyan-300" />
              Exam and scholarship questions
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl overflow-hidden" style={{ height: "calc(100vh - 19rem)" }}>
        <aside className="flex w-72 flex-col border-r border-slate-200 bg-white shadow-sm">
          <div className="p-4">
            <button
              onClick={handleNewChat}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800 transition"
            >
              <Plus className="h-4 w-4" />
              Start a new chat
            </button>
          </div>

          <div className="px-4 pb-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Helpful tools</p>
            <nav className="flex flex-col gap-2">
              {sidebarOptions.map((opt) => (
                <NavLink
                  key={opt.label}
                  to={opt.path}
                  onClick={() => setSelectedOption(opt.label)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition ${
                      selectedOption === opt.label || isActive
                        ? "bg-blue-700 text-white shadow"
                        : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                    }`
                  }
                >
                  {opt.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="mx-4 border-t border-slate-200" />

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Chats</h3>
            {isLoadingSessions ? (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading chats...
              </div>
            ) : sessions.length === 0 ? (
              <p className="text-sm italic text-slate-400">No chats yet</p>
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
                      <button
                        onClick={() => handleSelectSession(session._id)}
                        className="flex w-full items-center justify-between gap-2 text-left"
                      >
                        <span className="truncate font-medium text-slate-800">
                          {session.title || DEFAULT_TITLE}
                        </span>
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

        <main className="flex flex-1 flex-col overflow-hidden bg-white p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Ask AbroadAI now</h2>
              <p className="mt-1 text-sm text-slate-500">
                {activeSession?.title || "Free guidance for students planning to study abroad from Bangladesh."}
              </p>
            </div>
            <div className="hidden rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 md:block">
              Instant answers for students
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
                        Ask about universities, scholarships, visa guidance, LanguageCert, IELTS, PTE, TOEFL, or your
                        next study abroad step.
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
                    {message.createdAt && !message.pending && (
                      <div className={`text-xs text-slate-400 ${message.role === "user" ? "text-right" : "text-left"}`}>
                        {new Date(message.createdAt).toLocaleString()}
                      </div>
                    )}
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
              placeholder="Ask AbroadAI about universities, visa guidance, scholarships, or exam planning..."
              className="w-full resize-none rounded-[1.5rem] border border-slate-300 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={isSending}
            />
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                AbroadAI is free for students and designed to help you move faster with better clarity.
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
                {isSending ? "Sending..." : "Get Instant Answers"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
