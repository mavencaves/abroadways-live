import { type FAQItem } from "@/components/study-abroad/FAQAccordion.tsx";
import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Study Abroad", path: "/study-abroad" },
    { label: "Exams", path: "/exams/overview" },
    { label: "IELTS", path: "/exams/ielts/overview" },
    { label: "IELTS Types", path: "/exams/ielts/types" },
];

const faqs: FAQItem[] = [
    {
        id: "types-1",
        question: "How many IELTS test types are there?",
        answer: <>The main test types are IELTS Academic, IELTS General Training, and IELTS Life Skills. Some students may also need a UKVI-approved version depending on visa rules.</>,
    },
    {
        id: "types-2",
        question: "Which IELTS type is best for university admission?",
        answer: <>Most universities ask for IELTS Academic, but you should always verify the exact requirement on the university or programme page.</>,
    },
    {
        id: "types-3",
        question: "Is IELTS General Training easier than IELTS Academic?",
        answer: <>Many students find General Training more practical, but the right choice depends on your purpose, not on difficulty alone.</>,
    },
];

export default function IeltsTypesPage() {
    return (
        <GuidePageLayout
            title="IELTS Test Types Explained: Academic, General Training, Life Skills, and UKVI Options"
            updatedDate="20 April 2026"
            customSegments={customSegments}
            intro={[
                "Choosing the right IELTS format is one of the first important decisions for students planning higher education, migration, or UK-related applications.",
                "This guide helps you understand the difference between each IELTS type so you can register for the correct exam the first time.",
            ]}
            cards={[
                { title: "IELTS Academic", description: "Usually required for undergraduate, postgraduate, and university-focused study abroad applications." },
                { title: "IELTS General Training", description: "Common for migration, work-related pathways, and some non-academic requirements." },
                { title: "IELTS Life Skills and UKVI", description: "Relevant for specific UK visa and settlement pathways when institutions ask for approved test formats." },
            ]}
            sections={[
                {
                    title: "How to choose correctly",
                    bullets: [
                        "Check your university offer conditions before paying for the test.",
                        "Confirm whether your destination country requires a UKVI-approved version.",
                        "If you are unsure, ask for counselling before registration so you avoid delays or duplicate booking costs.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Overview", href: "/exams/ielts/overview" },
                { title: "IELTS Registration", href: "/exams/ielts/registration" },
                { title: "Talk to an Advisor", href: "/contact" },
            ]}
            infoTitle="Useful IELTS Type Links"
            infoData={[
                [
                    { label: "IELTS Overview", href: "/exams/ielts/overview" },
                    { label: "IELTS Registration", href: "/exams/ielts/registration" },
                    { label: "IELTS Test Centres", href: "/exams/ielts/centers" },
                ],
            ]}
            faqs={faqs}
        />
    );
}
