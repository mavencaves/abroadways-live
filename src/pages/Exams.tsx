import CTASection from "@/components/cta.tsx";
import ExamGrid from "@/components/exams/exam-grid.tsx";
import { ExamsHero } from "@/components/exams/exams-hero.tsx";
import StatsSection from "@/components/exams/stats.tsx";
import ExamTestimonials from "@/components/exams/testimonials.tsx";
import UpcomingExamSection from "@/components/exams/upcoming-exams.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";

const faqData = [
    {
        id: "item-1",
        question: "Which exams do students usually need for higher education abroad?",
        answer: (
            <div className="space-y-4 text-sm leading-7 text-slate-600">
                <p>
                    Most students need an English proficiency test such as <strong>LanguageCert</strong>,{" "}
                    <strong>IELTS</strong>, <strong>TOEFL</strong>, <strong>PTE</strong>, or sometimes{" "}
                    <strong>Duolingo English Test</strong>, depending on the country and university.
                </p>
                <p>
                    Some academic pathways also require admission exams such as <strong>SAT</strong> for undergraduate
                    applications, <strong>GRE</strong> for many graduate programs, or <strong>GMAT</strong> for MBA and
                    business-related programs.
                </p>
                <p>
                    The right exam depends on your destination, university shortlist, program level, and timeline.
                </p>
            </div>
        ),
    },
    {
        id: "item-2",
        question: "How do I choose between LanguageCert, IELTS, PTE, TOEFL, and Duolingo?",
        answer: (
            <div className="space-y-4 text-sm leading-7 text-slate-600">
                <p>
                    The best option depends on university acceptance, visa requirements, test availability, score
                    turnaround time, and your comfort with the exam format.
                </p>
                <ul className="ml-4 list-disc space-y-2">
                    <li>
                        <strong>LanguageCert:</strong> Especially important where UKVI-approved pathways matter.
                    </li>
                    <li>
                        <strong>IELTS:</strong> A widely accepted and familiar option for the UK, Canada, Australia,
                        and many other destinations.
                    </li>
                    <li>
                        <strong>PTE:</strong> Often preferred by students who want a fully computer-based format and
                        faster score reporting.
                    </li>
                    <li>
                        <strong>TOEFL:</strong> Common for students applying to universities in the USA and other
                        globally recognized institutions.
                    </li>
                    <li>
                        <strong>Duolingo:</strong> More flexible and affordable, though acceptance varies by
                        institution.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: "item-3",
        question: "What score is considered competitive for good universities?",
        answer: (
            <div className="space-y-4 text-sm leading-7 text-slate-600">
                <p>Score expectations vary by university and program, but these are common reference points:</p>
                <ul className="ml-4 list-disc space-y-2">
                    <li>
                        <strong>IELTS:</strong> 6.0 to 7.5+
                    </li>
                    <li>
                        <strong>TOEFL iBT:</strong> 80 to 100+
                    </li>
                    <li>
                        <strong>PTE Academic:</strong> 55 to 70+
                    </li>
                    <li>
                        <strong>Duolingo:</strong> 105 to 120+
                    </li>
                    <li>
                        <strong>GRE / GMAT / SAT:</strong> Competitive ranges depend strongly on the target institution
                        and level of study.
                    </li>
                </ul>
                <p>
                    Always confirm the exact requirement for your shortlisted university before booking a test date.
                </p>
            </div>
        ),
    },
    {
        id: "item-4",
        question: "How should I start preparing for an exam?",
        answer: (
            <div className="space-y-4 text-sm leading-7 text-slate-600">
                <ul className="ml-4 list-disc space-y-2">
                    <li>Understand the exam format, sections, and scoring method first.</li>
                    <li>Set a target score based on your destination and university goals.</li>
                    <li>Use official preparation materials and take practice tests regularly.</li>
                    <li>Build a realistic timeline for reading, listening, writing, speaking, or aptitude preparation.</li>
                    <li>Get expert guidance if you want to reduce mistakes and prepare more strategically.</li>
                </ul>
            </div>
        ),
    },
    {
        id: "item-5",
        question: "Can I retake IELTS or other exams if I need a better score?",
        answer: (
            <div className="space-y-4 text-sm leading-7 text-slate-600">
                <p>
                    Yes. Most major exams can be retaken if you want to improve your score, provided test dates are
                    available and you meet the exam board rules.
                </p>
                <p>
                    Before retaking, it is wise to review weak areas, update your preparation approach, and confirm
                    whether your target university accepts the latest score, best score, or a specific reporting format.
                </p>
            </div>
        ),
    },
];

const countryOptions = [
    { value: "all", label: "All Destinations" },
    { value: "uk", label: "United Kingdom" },
    { value: "canada", label: "Canada" },
    { value: "europe", label: "Europe" },
    { value: "usa", label: "United States" },
    { value: "australia", label: "Australia" },
];

export default function ExamsPage() {
    return (
        <div className="flex flex-col items-center gap-0 bg-slate-50">
            <ExamsHero
                badge="Exam Planning"
                heading="Explore the right English tests and admission exams for higher education abroad."
                description="Compare LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, SAT, and Duolingo pathways with clearer guidance for Bangladeshi students and parents."
                image={{
                    src: "/images/exams/hero.webp",
                    alt: "Students exploring exam options for study abroad",
                }}
                countryOptions={countryOptions}
            />
            <StatsSection />
            <ExamGrid />
            <UpcomingExamSection />
            <ExamTestimonials />
            <div className="w-full px-4 pb-18 sm:px-6 lg:px-8">
                <FAQAccordion
                    title="Questions about exams? Start here."
                    data={faqData}
                    className="max-w-5xl"
                />
            </div>
            <CTASection />
        </div>
    );
}
