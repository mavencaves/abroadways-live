import { type FormEvent, useMemo, useState } from "react";
import { Link } from "react-router";
import { BadgeCheck, Loader2, Send, Sparkles } from "lucide-react";
import { chatApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

type DemoMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
  pending?: boolean;
};

const DEMO_LIMIT = 2;

const starterPrompts = [
  "Which countries are affordable for Bangladeshi students who need scholarship-friendly options?",
  "What documents do I usually need before starting a student visa application?",
  "Which exam should I compare first: LanguageCert, IELTS, PTE, or TOEFL?",
  "How should I plan scholarships, exams, and applications in the right order?",
];

export default function MavenCaveAi() {
  const { user } = useAuth();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [remainingMessages, setRemainingMessages] = useState(DEMO_LIMIT);
  const [isSending, setIsSending] = useState(false);

  const historyPayload = useMemo(
    () =>
      messages
        .filter((message) => !message.pending)
        .map((message) => ({
          role: message.role,
          content: message.content,
        })),
    [messages]
  );

  const sendPrompt = async (prompt: string) => {
    const trimmed = prompt.trim();
    if (!trimmed || remainingMessages <= 0) {
      return;
    }

    setInput("");

    const userMessage: DemoMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      createdAt: new Date().toISOString(),
    };
    const placeholderId = `assistant-${Date.now()}`;
    const assistantPlaceholder: DemoMessage = {
      id: placeholderId,
      role: "assistant",
      content: "",
      pending: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    setIsSending(true);

    try {
      const response = await chatApi.sendDemoMessage({
        prompt: trimmed,
        history: historyPayload,
      });

      setRemainingMessages(response.data?.remainingMessages ?? Math.max(remainingMessages - 1, 0));
      setMessages((prev) =>
        prev.map((message) =>
          message.id === placeholderId
            ? {
                id: placeholderId,
                role: "assistant",
                content: response.data?.reply || "Sorry, I couldn't generate a response.",
                createdAt: new Date().toISOString(),
                pending: false,
              }
            : message
        )
      );
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "The public AbroadAI demo is unavailable right now. Please try again.";
      toast.error(message);
      setMessages((prev) => prev.filter((message) => message.id !== userMessage.id && message.id !== placeholderId));
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendPrompt(input);
  };

  const dashboardCtaHref = user?.role === "user" ? "/student/abroadai" : "/dashboard/ai";

  return (
    <div className="min-h-screen bg-[#f5f8fd]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">AbroadAI</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-950">Free public demo for study abroad questions</h1>
          </div>
          <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            {remainingMessages} demo message{remainingMessages === 1 ? "" : "s"} left
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#06142f_0%,#0b2453_55%,#144599_100%)] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Guided demo</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Explore destinations, scholarships, exams, documents, and visa planning before you sign up.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">
              The public AbroadAI demo answers general questions for students in Bangladesh. Sign in to unlock
              personalized guidance based on your student profile, documents, appointments, and payments.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">Free demo</div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">General guidance</div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                Personalized support after signup
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm text-blue-50 backdrop-blur lg:max-w-sm">
            <p className="font-semibold text-white">Important disclaimer</p>
            <p className="mt-2 leading-7">
              AbroadAI provides guidance, not final visa or admission decisions.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 xl:grid-cols-[20rem_minmax(0,1fr)]">
        <aside className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What the demo covers</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">Start here</h2>
          </div>
          <div className="grid gap-3 text-sm text-slate-700">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <BadgeCheck className="mb-3 h-5 w-5 text-blue-700" />
              Study abroad destinations and country comparisons
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <BadgeCheck className="mb-3 h-5 w-5 text-blue-700" />
              Scholarships, exams, documents, and visa-prep basics
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <BadgeCheck className="mb-3 h-5 w-5 text-blue-700" />
              Signup unlocks profile-aware support and saved chat history
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            The public demo is intentionally limited. Create an account to continue with personalized guidance.
          </div>

          <div className="flex flex-col gap-3">
            {user ? (
              <Link
                to={dashboardCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Continue in your portal
              </Link>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Create account for full AbroadAI
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </aside>

        <main className="flex min-h-[42rem] flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Ask the public demo</h2>
              <p className="mt-1 text-sm text-slate-500">
                General guidance only. Sign up for profile-aware advice and saved conversations.
              </p>
            </div>
            <div className="hidden rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 md:block">
              Limited demo mode
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col justify-center">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">AbroadAI demo is ready</h3>
                      <p className="text-sm text-slate-600">
                        Start with a general study abroad question. You can use up to two demo prompts before signup.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 md:grid-cols-2">
                    {starterPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => sendPrompt(prompt)}
                        disabled={isSending || remainingMessages <= 0}
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
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
              placeholder="Ask AbroadAI about destinations, scholarships, exams, documents, or visa planning..."
              className="w-full resize-none rounded-[1.5rem] border border-slate-300 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-not-allowed disabled:bg-slate-100"
              disabled={isSending || remainingMessages <= 0}
            />
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                AbroadAI provides guidance, not final visa or admission decisions.
              </p>
              <button
                type="submit"
                disabled={!input.trim() || isSending || remainingMessages <= 0}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  !input.trim() || isSending || remainingMessages <= 0
                    ? "cursor-not-allowed bg-slate-300 text-slate-500"
                    : "bg-blue-700 text-white hover:bg-blue-800"
                }`}
              >
                {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {remainingMessages <= 0 ? "Demo limit reached" : isSending ? "Sending..." : "Get demo guidance"}
              </button>
            </div>
          </form>

          {remainingMessages <= 0 ? (
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              You have reached the public demo limit. Sign up or continue in your portal to save chat history and get
              personalized guidance based on your profile, documents, appointments, and payments.
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}
