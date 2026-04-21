import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";
import TrustBadge from "@/components/trust-badge";

const features = [
    {
        title: "Bangladesh-focused counselling",
        desc: "Advice built around budget realities, documentation standards, visa strength, and destination fit for Bangladeshi students.",
        icon: CheckCircle2,
    },
    {
        title: "End-to-end application support",
        desc: "From course selection and SOP planning to submission and pre-departure readiness, every stage remains connected.",
        icon: Sparkles,
    },
    {
        title: "Scholarship and affordability strategy",
        desc: "We help students evaluate tuition, scholarships, living costs, and long-term return before they commit.",
        icon: ShieldCheck,
    },
    {
        title: "Clear communication for students and parents",
        desc: "Families get realistic timelines, polished guidance, and transparency instead of confusing sales-driven advice.",
        icon: BadgeCheck,
    },
];

export default function WhyAbroadways() {
    return (
        <section className="section-shell bg-slate-50">
            <div className="section-container">
                <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
                    <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#071a3f_0%,#0d2f6f_62%,#174cb0_100%)] p-7 text-white shadow-[0_26px_60px_rgba(8,26,60,0.18)] md:p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_24%)]" />
                        <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-white/10 bg-white/6 blur-2xl" />

                        <div className="relative">
                        <p className="section-kicker-on-dark">Why Choose Abroadways</p>
                        <h2 className="mt-3 font-serif text-3xl leading-tight md:text-[2.6rem]">
                            A more premium, trustworthy path for students planning higher education abroad.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-blue-100">
                            Abroadways is designed to feel clear, credible, and student-first at every decision point,
                            especially when the academic and financial stakes are high.
                        </p>

                        <div className="mt-7 rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                            <TrustBadge className="w-fit" />
                            <p className="mt-4 text-sm leading-7 text-blue-100">
                                This trust positioning matters for students who need an officially approved English
                                testing pathway supported by real guidance, not just a booking link.
                            </p>
                        </div>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-[1.35rem] border border-white/12 bg-slate-950/20 p-4 backdrop-blur-sm">
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Trust Signal</div>
                                <div className="mt-2 text-2xl font-semibold text-white">Student-first</div>
                                <div className="mt-1 text-sm leading-6 text-blue-100">Guidance designed for clarity, not pressure.</div>
                            </div>
                            <div className="rounded-[1.35rem] border border-white/12 bg-slate-950/20 p-4 backdrop-blur-sm">
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Consultancy Style</div>
                                <div className="mt-2 text-2xl font-semibold text-white">Premium</div>
                                <div className="mt-1 text-sm leading-6 text-blue-100">More structured, more transparent, more reassuring.</div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-orange-200">
                            <span>Trusted by students and parents seeking clarity</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="rounded-[1.8rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                <div className="max-w-2xl">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                                        <Star className="h-3.5 w-3.5" />
                                        Why Students And Parents Trust Abroadways
                                    </div>
                                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                                        Abroadways is built to look and feel more dependable at the exact moment students are
                                        comparing countries, expenses, documentation, and exam pathways.
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[320px]">
                                    <div className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-4 text-center">
                                        <div className="text-2xl font-semibold text-slate-950">1:1</div>
                                        <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Guidance</div>
                                    </div>
                                    <div className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-4 text-center">
                                        <div className="text-2xl font-semibold text-slate-950">UKVI</div>
                                        <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Approved trust</div>
                                    </div>
                                    <div className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-4 text-center">
                                        <div className="text-2xl font-semibold text-slate-950">Clear</div>
                                        <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Process</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`rounded-[1.75rem] border p-7 shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)] ${
                                        index === 0
                                            ? "border-blue-200 bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)]"
                                            : "border-slate-200 bg-white"
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-blue-100 text-blue-700">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div className="h-1.5 w-12 rounded-full bg-orange-300" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
