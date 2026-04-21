import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Resources", path: "/resources" },
    { label: "Books", path: "/resources" },
    { label: "PTE Books", path: "/resources/books/pte" },
];

const pteInfo = [
    [
        { label: "PTE Overview", href: "/exams/pte/overview" },
        { label: "Exams Overview", href: "/exams/overview" },
        { label: "Study Abroad Eligibility", href: "/resources/eligibility" },
    ],
    [
        { label: "IELTS Guide", href: "/exams/ielts/overview" },
        { label: "SOP Guide", href: "/resources/sop" },
        { label: "IELTS Books", href: "/resources/books/ielts" },
    ],
];

const faqs = [
    {
        id: "pte-books-1",
        question: "What are the best PTE books for self-study?",
        answer:
            "The best self-study mix usually includes one official-style guide, section-based practice support, and timed mock tests so you can build both accuracy and pacing.",
    },
    {
        id: "pte-books-2",
        question: "Should I use books or online practice for PTE?",
        answer:
            "Use both. Books help with explanation and strategy, while online practice helps you get familiar with question timing, computer-based delivery, and integrated task types.",
    },
    {
        id: "pte-books-3",
        question: "How many weeks should I study before the PTE exam?",
        answer:
            "Most students benefit from six to ten weeks of structured preparation, depending on their current English level, target score, and available study time.",
    },
];

export default function PteBooks() {
    return (
        <GuidePageLayout
            title="Best PTE Books and Study Resources for 2026 Test Preparation"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "PTE preparation becomes much easier when you use the right combination of study books, official-style practice, and section-specific review support.",
                "This guide is built for students in Bangladesh who want a cleaner path to preparing for PTE Academic for study abroad applications, visa planning, and university admission.",
            ]}
            notice={{
                title: "Practical Prep Advice",
                body: "Do not rely on random material alone. A balanced PTE plan should combine official-style resources, section practice, and timed mock work so your score reflects real exam readiness.",
                tone: "orange",
            }}
            cards={[
                {
                    title: "Official-Style Familiarity",
                    description:
                        "Choose materials that match the current PTE format so your practice feels relevant and accurate.",
                },
                {
                    title: "Section-by-Section Improvement",
                    description:
                        "Use targeted books or modules for speaking, writing, reading, and listening when one area needs extra attention.",
                },
                {
                    title: "Exam-Day Readiness",
                    description:
                        "Timed practice helps you build confidence with computer-based tasks, score patterns, and response timing.",
                },
            ]}
            sections={[
                {
                    title: "How to choose the right PTE books",
                    paragraphs: [
                        "The best books are clear, current, and closely aligned with the computer-based nature of the PTE exam. Students should prioritize materials that explain task strategy as well as answer technique.",
                        "If your English basics are still developing, pair a core PTE guide with extra grammar, vocabulary, and listening support. If your foundation is stronger, focus more on timing and task execution.",
                    ],
                },
                {
                    title: "A practical PTE study mix",
                    bullets: [
                        "One main guide that explains the full PTE format.",
                        "Section-specific support for your weaker skills.",
                        "Timed mock practice for score and pacing awareness.",
                        "A short revision plan for frequent mistakes and templates.",
                    ],
                },
                {
                    title: "Common preparation mistakes",
                    bullets: [
                        "Using outdated books that do not reflect the current test.",
                        "Over-focusing on templates without understanding the task.",
                        "Ignoring listening and speaking timing practice.",
                        "Studying without checking actual score progress.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Read the PTE overview", href: "/exams/pte/overview" },
                { title: "Check study abroad eligibility", href: "/resources/eligibility" },
                { title: "Explore IELTS books", href: "/resources/books/ielts" },
            ]}
            infoTitle="PTE Planning Links"
            infoData={pteInfo}
            faqs={faqs}
            faqTitle="PTE Book Selection FAQs"
        />
    );
}
