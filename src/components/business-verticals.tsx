import { Link } from "react-router";
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, GraduationCap, LaptopMinimalCheck, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const verticals = [
    {
        title: "IT Training Services",
        description:
            "Practical digital upskilling designed for students and young professionals who want stronger academic readiness, modern workplace fluency, and certification-friendly learning pathways.",
        icon: LaptopMinimalCheck,
        highlights: [
            "AI and productivity tools",
            "Coding and programming foundations",
            "Digital skills and job-readiness support",
            "Certification-focused learning guidance",
        ],
        ctaLabel: "Explore Training Support",
        ctaHref: "/contact",
        accent: "blue",
    },
    {
        title: "English Medium School",
        description:
            "Academic pathway support for students and families seeking stronger English-medium preparation, international curriculum confidence, and smoother long-term progression planning.",
        icon: BookOpenCheck,
        highlights: [
            "English-medium academic support",
            "Pathway preparation for future study abroad",
            "International curriculum readiness",
            "Language and academic skills development",
        ],
        ctaLabel: "Discuss School Pathways",
        ctaHref: "/contact",
        accent: "orange",
    },
];

export default function BusinessVerticalsSection() {
    return (
        <section className="section-shell bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
            <div className="section-container">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div className="section-intro">
                        <p className="section-kicker">Extended Services</p>
                        <h2 className="section-title">
                            Abroadways supports study goals through a broader student development ecosystem.
                        </h2>
                    </div>

                    <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)] md:p-7">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/50 bg-[linear-gradient(180deg,#fff7ed_0%,#ffedd5_100%)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-700">
                                <ShieldCheck className="h-3.5 w-3.5 text-orange-500" />
                                UKVI Approved LanguageCert Test Centre
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">
                                <GraduationCap className="h-3.5 w-3.5" />
                                Student-first support system
                            </span>
                        </div>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                            Beyond study abroad counselling, Abroadways is building complementary education and skill
                            pathways so students can strengthen academic preparation, confidence, and future readiness
                            under one trusted brand.
                        </p>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 xl:grid-cols-2">
                    {verticals.map((vertical) => {
                        const Icon = vertical.icon;
                        const isOrangeAccent = vertical.accent === "orange";

                        return (
                            <Card
                                key={vertical.title}
                                className={`overflow-hidden border-slate-200/80 shadow-[0_18px_42px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(15,23,42,0.10)] ${
                                    isOrangeAccent
                                        ? "bg-[linear-gradient(180deg,#ffffff_0%,#fffaf5_100%)]"
                                        : "bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]"
                                }`}
                            >
                                <CardContent className="p-7 md:p-8">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div
                                            className={`flex h-14 w-14 items-center justify-center rounded-[1.25rem] ${
                                                isOrangeAccent ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"
                                            }`}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span
                                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                                                isOrangeAccent
                                                    ? "bg-orange-50 text-orange-700"
                                                    : "bg-blue-50 text-blue-700"
                                            }`}
                                        >
                                            <BriefcaseBusiness className="h-3.5 w-3.5" />
                                            New business pillar
                                        </span>
                                    </div>

                                    <div className={`mt-6 h-1.5 w-14 rounded-full ${isOrangeAccent ? "bg-orange-500" : "bg-blue-700"}`} />
                                    <h3 className="mt-6 text-2xl font-semibold text-slate-950">{vertical.title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-slate-600">{vertical.description}</p>

                                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                        {vertical.highlights.map((highlight) => (
                                            <div
                                                key={highlight}
                                                className="rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm font-medium text-slate-700"
                                            >
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-7">
                                        <Button
                                            asChild
                                            variant={isOrangeAccent ? "outline" : "default"}
                                            className={`rounded-full px-6 ${
                                                isOrangeAccent
                                                    ? "border-orange-300 text-orange-700 hover:bg-orange-50"
                                                    : ""
                                            }`}
                                        >
                                            <Link to={vertical.ctaHref}>
                                                {vertical.ctaLabel}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
