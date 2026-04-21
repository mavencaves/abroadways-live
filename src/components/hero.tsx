import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    ChevronRight,
    MessageSquareText,
    Mic,
    Plus,
    Send,
    SendHorizonal,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";
import TrustBadge from "@/components/trust-badge";

export default function HeroSection() {
    const highlights = [
        "Study abroad from Bangladesh with expert counselling and visa guidance",
        "Support for the UK, Canada, Europe, Australia, USA, and more",
        "LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, and SAT planning",
    ];

    const sampleQuestions = [
        "Which universities fit my budget and profile?",
        "Can I study in Europe with scholarship support?",
        "What documents do I need for a student visa?",
        "Which exam should I take: LanguageCert, IELTS, or PTE?",
    ];

    return (
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(78,129,255,0.24),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] text-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
            <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -left-16 bottom-12 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="section-container relative grid min-h-[calc(100dvh-84px)] gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:py-18">
                <div className="flex flex-col justify-center">
                    <TrustBadge className="mb-5 w-fit" />

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                        Premium Study Abroad Consultancy For Bangladesh
                    </p>

                    <h1 className="max-w-[15ch] font-serif text-[clamp(2rem,3.45vw,3.3rem)] leading-[1.1] tracking-[-0.035em] text-white drop-shadow-[0_14px_48px_rgba(2,8,23,0.24)]">
                        Abroadways helps Bangladeshi students plan higher education abroad with more clarity,
                        stronger choices, and better visa confidence.
                    </h1>

                    <p className="mt-6 max-w-[46rem] text-[0.99rem] leading-8 text-blue-100 sm:text-[1.02rem]">
                        Get expert support for admissions, scholarships, visa guidance, and exam pathways including
                        LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, and SAT.
                    </p>

                    <div className="mt-7 flex max-w-3xl flex-wrap gap-3">
                        {highlights.map((item) => (
                            <div
                                key={item}
                                className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-blue-50 backdrop-blur"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Button
                            asChild
                            size="xl"
                            className="h-13 rounded-full bg-white px-8 text-base font-semibold text-slate-950 hover:bg-blue-50"
                        >
                            <Link to="/contact">
                                Book A Free Consultation
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="xl"
                            variant="outline"
                            className="h-13 rounded-full border-white/25 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10"
                        >
                            <Link to="/abroadai">
                                Try AbroadAI Free
                                <MessageSquareText className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-11 grid max-w-3xl gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
                        <div>
                            <div className="text-3xl font-bold text-white">1:1</div>
                            <div className="mt-1 text-sm text-blue-100">Student-first guidance</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">10+</div>
                            <div className="mt-1 text-sm text-blue-100">Popular study destinations</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">7+</div>
                            <div className="mt-1 text-sm text-blue-100">Exam pathways supported</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <Card className="w-full rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
                        <CardContent className="p-5 sm:p-6">
                            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-6 sm:p-7">
                                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Free Student Assistant</p>
                                        <h2 className="mt-2 text-[1.65rem] font-semibold leading-tight text-white">
                                            Start With AbroadAI Or Speak To An Advisor
                                        </h2>
                                        <p className="mt-3 max-w-lg text-sm leading-7 text-blue-100">
                                            Ask anything about universities, scholarships, SOPs, visas, and exam planning.
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-200">
                                        <ShieldCheck className="h-4 w-4" />
                                        100% free for students
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold text-white">What can you ask?</h3>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        {sampleQuestions.map((question) => (
                                            <Link
                                                key={question}
                                                to="/abroadai"
                                                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-blue-50 transition hover:bg-white/10"
                                            >
                                                {question}
                                                <Send className="h-4 w-4" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-3">
                                    <button
                                        type="button"
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/30 bg-white/10 transition hover:bg-white/15"
                                        aria-label="Add"
                                    >
                                        <Plus className="h-5 w-5 text-white" />
                                    </button>
                                    <div className="flex flex-1 items-center gap-3 rounded-full border border-white/12 bg-white px-3 py-2">
                                        <Input
                                            type="text"
                                            readOnly
                                            placeholder="Ask anything about studying abroad..."
                                            className="h-auto border-none bg-transparent text-sm text-slate-900 shadow-none focus-visible:ring-0"
                                        />
                                        <Link
                                            to="/abroadai"
                                            className="rounded-full p-2 transition hover:bg-slate-100"
                                            aria-label="Send question"
                                        >
                                            <SendHorizonal className="h-4 w-4 text-slate-600" />
                                        </Link>
                                    </div>
                                    <Link
                                        to="/abroadai"
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-700"
                                        aria-label="Voice input"
                                    >
                                        <Mic className="h-5 w-5 text-white" />
                                    </Link>
                                </div>

                                <div className="mt-6 grid gap-4 md:grid-cols-2">
                                    <Link
                                        to="/abroadai"
                                        className="rounded-[1.25rem] bg-white px-5 py-4 text-slate-900 shadow-lg transition hover:bg-blue-50"
                                    >
                                        <div className="text-sm font-semibold text-blue-700">AbroadAI</div>
                                        <div className="mt-1 text-sm leading-7 text-slate-600">
                                            Get instant answers for study abroad from Bangladesh.
                                        </div>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="rounded-[1.25rem] border border-white/12 bg-white/6 px-5 py-4 transition hover:bg-white/10"
                                    >
                                        <div className="text-sm font-semibold text-white">Consultation Support</div>
                                        <div className="mt-1 text-sm leading-7 text-blue-100">
                                            Book expert help for admissions, scholarships, and visa planning.
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
