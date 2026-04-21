import CTASection from "@/components/cta.tsx";
import { Button } from "@/components/ui/button";
import { Bot, Calculator, ClipboardPenLine, FileText, Languages, Sparkles } from "lucide-react";
import { Link } from "react-router";

const resourceCards = [
    {
        title: "AbroadAI",
        description: "A free AI assistant for students with quick guidance on universities, scholarships, visas, SOPs, and exams.",
        icon: Bot,
        href: "/abroadai",
        cta: "Try AbroadAI Free",
    },
    {
        title: "SOP Generator",
        description: "Build stronger first drafts for your application materials with a cleaner, student-focused writing flow.",
        icon: FileText,
        href: "/resources/sop",
        cta: "Open SOP Generator",
    },
    {
        title: "Visa Predictor",
        description: "Explore a structured future-ready flow for visa-related guidance and application preparation.",
        icon: Sparkles,
        href: "/visa-predictor",
        cta: "Use Visa Predictor",
    },
    {
        title: "Exam Guides",
        description: "Review English test and admissions exam pathways for LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, and SAT.",
        icon: Languages,
        href: "/exams/overview",
        cta: "Explore Exam Guides",
    },
    {
        title: "Cost Calculator",
        description: "Get planning support around budgets and study abroad cost expectations before making major decisions.",
        icon: Calculator,
        href: "/calculator/cost",
        cta: "Open Calculator",
    },
    {
        title: "CGPA Calculator",
        description: "Use a quick academic conversion tool to prepare your profile for applications and conversations.",
        icon: ClipboardPenLine,
        href: "/calculator/cgpa",
        cta: "Calculate CGPA",
    },
];

export default function ResourcesPage() {
    return (
        <div className="bg-slate-50">
            <section className="bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Resources</p>
                        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                            Smart tools and study abroad resources built for students in Bangladesh.
                        </h1>
                        <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
                            Use Abroadways resources to move faster with better clarity across SOP writing, visa
                            guidance, exam planning, budgeting, and university decision-making.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {resourceCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.title} className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-slate-200">
                                    <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h2 className="mt-5 text-2xl font-semibold text-slate-950">{card.title}</h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                                    <Button asChild className="mt-6 rounded-full bg-blue-700 hover:bg-blue-800">
                                        <Link to={card.href}>{card.cta}</Link>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
