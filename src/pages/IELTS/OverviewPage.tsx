import { type FAQItem } from "@/components/study-abroad/FAQAccordion.tsx";
import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Study Abroad", path: "/study-abroad" },
    { label: "Exams", path: "/exams/overview" },
    { label: "IELTS", path: "/exams/ielts/overview" },
];

const faqs: FAQItem[] = [
    {
        id: "overview-1",
        question: "What is IELTS used for?",
        answer: <>IELTS is accepted by universities, visa authorities, and employers to assess English proficiency for study, migration, and professional registration.</>,
    },
    {
        id: "overview-2",
        question: "How long is an IELTS score valid?",
        answer: <>An IELTS score is typically valid for two years from the test date. Institutions may ask for a more recent result depending on their policy.</>,
    },
    {
        id: "overview-3",
        question: "Is IELTS available in Bangladesh throughout the year?",
        answer: <>Yes. Multiple IELTS sessions are available across the year in Bangladesh, although availability depends on test format, city, and seat demand.</>,
    },
];

export default function IeltsOverviewPage() {
    return (
        <GuidePageLayout
            title="IELTS Exam Guide 2026: Format, Fees, Registration, Results, and Preparation"
            updatedDate="20 April 2026"
            customSegments={customSegments}
            intro={[
                "IELTS remains one of the most widely accepted English proficiency tests for students in Bangladesh planning to study abroad, apply for scholarships, or strengthen visa applications.",
                "This page gives you a practical overview of how IELTS works, which version you may need, and how to prepare with more confidence before test day.",
            ]}
            notice={{
                title: "UKVI Trust Note",
                body: "Abroadways is a UKVI Approved LanguageCert Test Centre. If you are comparing English test options for UK-related pathways, our advisors can help you choose the right route.",
                tone: "orange",
            }}
            cards={[
                {
                    title: "Academic and General Training",
                    description: "Choose the format that matches your university, migration, or professional requirement before you register.",
                },
                {
                    title: "Four Core Skills",
                    description: "IELTS measures listening, reading, writing, and speaking in one structured assessment.",
                },
                {
                    title: "Planning Matters",
                    description: "Good preparation includes test familiarity, timed practice, and a clear target score for your destination.",
                },
            ]}
            sections={[
                {
                    title: "What you should know before booking",
                    paragraphs: [
                        "Before you register, confirm whether your university or visa process requires IELTS Academic, IELTS General Training, or a UKVI-approved version.",
                        "Students should also compare test dates, result timelines, and preparation intensity so the exam fits the overall application calendar.",
                    ],
                },
                {
                    title: "What makes a strong IELTS plan",
                    bullets: [
                        "Set a realistic target band score based on the universities or countries you are applying to.",
                        "Use timed mock tests so you can understand pressure, pacing, and answer patterns.",
                        "Review weak skills individually instead of preparing every section the same way.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Compare IELTS Types", href: "/exams/ielts/types" },
                { title: "Check IELTS Eligibility", href: "/exams/ielts/eligibility" },
                { title: "Book IELTS Support", href: "/contact" },
            ]}
            infoTitle="IELTS Planning Shortcuts"
            infoData={[
                [
                    { label: "IELTS Types", href: "/exams/ielts/types" },
                    { label: "IELTS Eligibility", href: "/exams/ielts/eligibility" },
                    { label: "IELTS Registration", href: "/exams/ielts/registration" },
                ],
                [
                    { label: "IELTS Results", href: "/exams/ielts/results" },
                    { label: "IELTS Syllabus", href: "/exams/ielts/syllabus" },
                    { label: "IELTS Books", href: "/resources/books/ielts" },
                ],
            ]}
            faqs={faqs}
        />
    );
}
