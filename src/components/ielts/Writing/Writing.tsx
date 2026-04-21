import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function Writing() {
    return (
        <GuidePageLayout
            title="IELTS Writing Practice: Task Structure, Clarity, and Band Score Improvement"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "IELTS", path: "/exams/ielts/overview" },
                { label: "Writing Practice", path: "/exams/ielts/practice/writing" },
            ]}
            intro={[
                "IELTS Writing improves when students work on structure, clarity, and response quality rather than memorising phrases alone.",
                "Task 1 and Task 2 need different strategies, so your preparation should reflect the exact type of writing the exam expects.",
            ]}
            sections={[
                {
                    title: "Writing practice priorities",
                    bullets: [
                        "Use clear paragraph structure and keep each paragraph focused on one purpose.",
                        "Build task-specific vocabulary instead of forcing advanced words into every sentence.",
                        "Review grammar through real writing, not through isolated exercises only.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Books", href: "/resources/books/ielts" },
                { title: "IELTS Results and Band Scores", href: "/exams/ielts/results" },
                { title: "IELTS Practice Hub", href: "/exams/ielts/practice/all-in-one" },
            ]}
        />
    );
}
