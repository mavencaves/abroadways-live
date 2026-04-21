import TrustBadge from "@/components/trust-badge";
import { CheckCircle2, Shield, Users2 } from "lucide-react";

const trustPoints = [
    {
        title: "Student-focused guidance",
        description: "Advice shaped around academic profile, budget, destination fit, and long-term education goals.",
        icon: Users2,
    },
    {
        title: "Transparent process",
        description: "Students and parents receive clear next steps, practical timelines, and honest support from start to finish.",
        icon: CheckCircle2,
    },
    {
        title: "Scholarship and visa support",
        description: "From funding strategy to final visa preparation, we help students stay better prepared and more confident.",
        icon: Shield,
    },
];

const credibilityPoints = [
    "Premium guidance for students and parents making high-stakes academic decisions",
    "A visible trust position through our UKVI Approved LanguageCert Test Centre support",
    "Coverage across the UK, Canada, Europe, Australia, the USA, and other key destinations",
];

export default function ExpertsSection() {
    return (
        <section className="section-shell bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]">
            <div className="section-container">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_42px_rgba(15,23,42,0.07)] md:p-8">
                        <p className="section-kicker">Why Students and Parents Trust Abroadways</p>
                        <h2 className="section-title">
                            Credibility built through clarity, consistency, and real student support.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-slate-600">
                            Trust matters most when families are choosing the right country, budget, test pathway, and
                            long-term education plan. Abroadways is designed to reduce uncertainty and improve confidence.
                        </p>

                        <div className="mt-7 rounded-[1.5rem] border border-orange-200/60 bg-orange-50/70 p-5">
                            <TrustBadge className="w-fit" />
                            <p className="mt-4 text-sm leading-7 text-slate-700">
                                This is one of our strongest trust signals for students who need an approved, credible
                                English testing pathway supported by real advisory guidance.
                            </p>
                        </div>

                        <div className="mt-7 space-y-3">
                            {credibilityPoints.map((point) => (
                                <div key={point} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                                    <p className="text-sm leading-7 text-slate-600">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {trustPoints.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`rounded-[1.75rem] border p-7 shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)] ${
                                        index === 0
                                            ? "bg-[linear-gradient(160deg,#0a214d_0%,#11387f_70%,#1a58c5_100%)] text-white border-transparent"
                                            : "border-slate-200 bg-white"
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-[1rem] ${
                                                index === 0 ? "bg-white/12 text-white" : "bg-blue-100 text-blue-700"
                                            }`}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div className={`h-1.5 w-12 rounded-full ${index === 0 ? "bg-orange-300" : "bg-blue-700"}`} />
                                    </div>

                                    <h3 className={`mt-5 text-xl font-semibold ${index === 0 ? "text-white" : "text-slate-950"}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-blue-100" : "text-slate-600"}`}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
