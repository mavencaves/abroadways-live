import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Study Abroad", path: "/study-abroad" },
    { label: "Exams", path: "/exams/overview" },
    { label: "IELTS", path: "/exams/ielts/overview" },
    { label: "IELTS Syllabus", path: "/exams/ielts/syllabus" },
];

export default function IeltsSyllabus() {
    return (
        <GuidePageLayout
            title="IELTS Syllabus and Exam Pattern: What Each Section Tests"
            updatedDate="20 April 2026"
            customSegments={customSegments}
            intro={[
                "The IELTS syllabus is built around four tested skills: listening, reading, writing, and speaking.",
                "Students often improve faster when they understand not just the topics, but also the question patterns and timing rules behind each section.",
            ]}
            sections={[
                {
                    title: "Listening and Reading",
                    paragraphs: [
                        "These sections assess your ability to follow spoken English, understand written passages, identify details, and respond accurately under time pressure.",
                    ],
                },
                {
                    title: "Writing and Speaking",
                    paragraphs: [
                        "These sections evaluate clarity, grammar, structure, vocabulary range, and your ability to communicate ideas naturally and purposefully.",
                    ],
                },
                {
                    title: "Preparation focus",
                    bullets: [
                        "Practise using real timing conditions.",
                        "Review recurring question types rather than memorising isolated answers.",
                        "Build vocabulary in context so it improves both writing and speaking performance.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Listening Practice", href: "/exams/ielts/practice/listening" },
                { title: "IELTS Reading Practice", href: "/exams/ielts/practice/reading" },
                { title: "IELTS Writing Practice", href: "/exams/ielts/practice/writing" },
            ]}
            infoTitle="IELTS Syllabus Support"
            infoData={[
                [
                    { label: "Listening Practice", href: "/exams/ielts/practice/listening" },
                    { label: "Reading Practice", href: "/exams/ielts/practice/reading" },
                    { label: "Writing Practice", href: "/exams/ielts/practice/writing" },
                ],
                [
                    { label: "Speaking Practice", href: "/exams/ielts/practice/speaking" },
                    { label: "Practice Hub", href: "/exams/ielts/practice/all-in-one" },
                    { label: "IELTS Books", href: "/resources/books/ielts" },
                ],
            ]}
        />
    );
}
