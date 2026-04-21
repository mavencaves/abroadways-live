import { ExamCard } from "@/components/exams/exam-card.tsx";

import canadaFlag from "/images/exams/canada.png";
import germanyFlag from "/images/exams/germany.png";
import irelandFlag from "/images/exams/ireland.png";
import newZealandFlag from "/images/exams/new-zealand.png";
import usaFlag from "/images/exams/usa.png";
import duolingoFlag from "/images/exams/duolingo.png";

const exams = [
    {
        flag: canadaFlag,
        title: "IELTS",
        description:
            "A widely accepted English proficiency test for the UK, Canada, Australia, and many other study destinations.",
        linkLabel: "Explore IELTS",
        href: "/exams/ielts/overview",
    },
    {
        flag: germanyFlag,
        title: "SAT",
        description:
            "An important admissions exam for undergraduate applicants targeting selected universities, especially in the USA.",
        linkLabel: "Explore SAT",
        href: "/exams/sat/preparation",
    },
    {
        flag: irelandFlag,
        title: "TOEFL",
        description:
            "A globally recognized English test often used by students applying to universities in the USA and beyond.",
        linkLabel: "Explore TOEFL",
        href: "/exams/toefl/overview",
    },
    {
        flag: newZealandFlag,
        title: "GRE",
        description:
            "A common graduate admissions exam for master's and research-focused pathways in international universities.",
        linkLabel: "Explore GRE",
        href: "/exams/gre/overview",
    },
    {
        flag: usaFlag,
        title: "GMAT",
        description:
            "A recognized admissions test for MBA and business-related graduate programs at many international institutions.",
        linkLabel: "Explore GMAT",
        href: "/exams/gmat/overview",
    },
    {
        flag: duolingoFlag,
        title: "Duolingo English Test",
        description:
            "A flexible, online English proficiency option accepted by many universities for faster and more affordable testing.",
        linkLabel: "Explore Duolingo",
        href: "/exams/duolingo/preparation",
    },
];

export default function ExamGrid() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-0">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Popular Exams</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
                    Explore the most relevant exams for study abroad planning.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                    Start with the exam that matches your destination, academic level, visa pathway, and university
                    requirements.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {exams.map((exam) => (
                    <ExamCard key={exam.title} {...exam} />
                ))}
            </div>
        </section>
    );
}
