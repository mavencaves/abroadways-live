import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Study Abroad", path: "/study-abroad" },
    { label: "Exams", path: "/exams/overview" },
    { label: "IELTS", path: "/exams/ielts/overview" },
    { label: "IELTS Results", path: "/exams/ielts/results" },
];

export default function IeltsResultsPage() {
    return (
        <GuidePageLayout
            title="IELTS Results and Band Scores: When Results Arrive and How to Read Them"
            updatedDate="20 April 2026"
            customSegments={customSegments}
            intro={[
                "IELTS results matter because many universities and visa processes care about both the overall band score and the minimum score in each skill.",
                "Understanding your report correctly helps you decide whether you can move forward, request remarking, or prepare for a retake.",
            ]}
            sections={[
                {
                    title: "How to review your result",
                    bullets: [
                        "Check your overall band score first, then review listening, reading, writing, and speaking individually.",
                        "Compare your result with the exact admission requirement of your target university or pathway.",
                        "If one skill is significantly below target, plan improvement around that skill rather than restarting preparation blindly.",
                    ],
                },
                {
                    title: "When a retake may help",
                    paragraphs: [
                        "A retake may be worth considering if you narrowly missed a required score, especially when your destination or application cycle is still open.",
                        "Students should also compare whether a retake, an alternative accepted test, or a different intake makes more sense for their timeline.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Practice Hub", href: "/exams/ielts/practice/all-in-one" },
                { title: "IELTS Writing Practice", href: "/exams/ielts/practice/writing" },
                { title: "Talk to Abroadways", href: "/contact" },
            ]}
            infoTitle="IELTS Result Support"
            infoData={[
                [
                    { label: "IELTS Practice Hub", href: "/exams/ielts/practice/all-in-one" },
                    { label: "IELTS Writing Practice", href: "/exams/ielts/practice/writing" },
                    { label: "IELTS Speaking Practice", href: "/exams/ielts/practice/speaking" },
                ],
            ]}
        />
    );
}
