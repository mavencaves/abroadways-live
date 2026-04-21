import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Exams", path: "/exams/overview" },
    { label: "IELTS", path: "/exams/ielts/overview" },
    { label: "Cue Cards", path: "/ielts-cue-cards" },
];

const faqs = [
    {
        id: "cue-card-1",
        question: "How should I answer an IELTS cue card prompt?",
        answer:
            "Use a clear structure: introduce the topic, explain key details, give one or two examples, and end with a short personal reflection or conclusion.",
    },
    {
        id: "cue-card-2",
        question: "Do I need advanced vocabulary for cue cards?",
        answer:
            "You do not need forced vocabulary. Natural, accurate English with good fluency, clear ideas, and topic-relevant words usually performs better than memorized phrases.",
    },
    {
        id: "cue-card-3",
        question: "What if I am not familiar with the topic?",
        answer:
            "That is common. Stay calm, make reasonable details, and keep speaking logically. IELTS assesses your communication ability, not whether the topic is perfectly real.",
    },
];

export default function CueCardPage() {
    return (
        <GuidePageLayout
            title="IELTS Speaking Cue Card Practice Guide"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "Cue card practice is one of the best ways to improve IELTS Speaking Part 2. It helps students build fluency, organize ideas quickly, and speak with better confidence under time pressure.",
                "This page gives a simple practice framework for Bangladeshi students preparing for IELTS speaking topics around personal experiences, clothing, routines, and descriptive prompts.",
            ]}
            cards={[
                {
                    title: "Practice with Structure",
                    description:
                        "Train yourself to answer with a clear beginning, middle, and end instead of speaking randomly.",
                },
                {
                    title: "Build Topic Vocabulary",
                    description:
                        "Learn a small set of natural words and phrases that fit common speaking topics without sounding memorized.",
                },
                {
                    title: "Improve Fluency Under Time Pressure",
                    description:
                        "Regular cue card practice helps you think faster and speak more smoothly during the real exam.",
                },
            ]}
            sections={[
                {
                    title: "Sample cue card themes to practice",
                    bullets: [
                        "Describe an item of clothing that someone gave you.",
                        "Describe an occasion when you wore your favourite clothes.",
                        "Describe a person who wears unusual clothes.",
                        "Describe a piece of clothing you wear most often.",
                        "Describe a uniform you wore at school or work.",
                    ],
                },
                {
                    title: "How to prepare stronger answers",
                    bullets: [
                        "Spend one minute planning short keywords before speaking.",
                        "Use simple transitions such as first, then, because, and finally.",
                        "Add one personal example to make the answer sound natural.",
                        "Avoid memorizing full scripts that can sound unnatural in the test.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Read the IELTS overview", href: "/exams/ielts/overview" },
                { title: "Practice IELTS speaking", href: "/exams/ielts/practice/speaking" },
                { title: "Review IELTS books", href: "/resources/books/ielts" },
            ]}
            infoTitle="IELTS Practice Links"
            infoData={[
                [
                    { label: "IELTS Speaking Practice", href: "/exams/ielts/practice/speaking" },
                    { label: "IELTS Writing Practice", href: "/exams/ielts/practice/writing" },
                    { label: "IELTS Reading Practice", href: "/exams/ielts/practice/reading" },
                ],
                [
                    { label: "IELTS Listening Practice", href: "/exams/ielts/practice/listening" },
                    { label: "IELTS Exam Dates", href: "/exams/ielts/dates" },
                    { label: "IELTS Books", href: "/resources/books/ielts" },
                ],
            ]}
            faqs={faqs}
            faqTitle="IELTS Cue Card FAQs"
        />
    );
}
