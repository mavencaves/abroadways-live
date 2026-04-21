import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Exams", path: "/exams/overview" },
    { label: "TOEFL", path: "/exams/toefl/overview" },
    { label: "Results", path: "/exams/toefl/result" },
];

export default function ToeflResult() {
    return (
        <GuidePageLayout
            title="TOEFL Results Guide: Scores, Reports, and Next Steps"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "After the TOEFL exam, students usually want to understand how scores are reported, what a strong result looks like, and how universities review section performance.",
                "This page gives a simple overview of TOEFL score interpretation so students can plan applications, retakes, and university selection more clearly.",
            ]}
            sections={[
                {
                    title: "How TOEFL results are used",
                    bullets: [
                        "Universities review overall score and, in some cases, section-level performance.",
                        "A good score depends on the specific institution and program.",
                        "Highly competitive programs may expect stronger reading, speaking, or writing performance depending on the field.",
                    ],
                },
                {
                    title: "How students should respond to their score",
                    paragraphs: [
                        "If your TOEFL score already meets university expectations, focus on the rest of your application, including SOP, recommendations, and document quality.",
                        "If the result is below target, compare section performance carefully. A targeted preparation plan for a retake is usually more effective than restarting everything from zero.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Review TOEFL preparation guidance", href: "/exams/toefl/preparation" },
                { title: "Check TOEFL registration steps", href: "/exams/toefl/registration" },
                { title: "Compare with IELTS options", href: "/exams/overview" },
            ]}
            infoTitle="Useful TOEFL Links"
            infoData={[
                [
                    { label: "TOEFL Overview", href: "/exams/toefl/overview" },
                    { label: "TOEFL Preparation", href: "/exams/toefl/preparation" },
                    { label: "TOEFL Registration", href: "/exams/toefl/registration" },
                ],
                [
                    { label: "TOEFL Syllabus", href: "/exams/toefl/syllabus" },
                    { label: "IELTS Overview", href: "/exams/ielts/overview" },
                    { label: "PTE Overview", href: "/exams/pte/overview" },
                ],
            ]}
            faqs={[
                {
                    id: "toefl-result-1",
                    question: "What is considered a good TOEFL score?",
                    answer:
                        "A good TOEFL score depends on the institution and program, but higher-ranked universities often expect stronger overall and section-level performance.",
                },
                {
                    id: "toefl-result-2",
                    question: "Should I retake TOEFL after a low score?",
                    answer:
                        "If your score does not meet your target universities' requirements, a retake can be worthwhile, especially when you know which section needs the most improvement.",
                },
            ]}
        />
    );
}
