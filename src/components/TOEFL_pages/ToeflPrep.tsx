import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Exams", path: "/exams/overview" },
    { label: "TOEFL", path: "/exams/toefl/overview" },
    { label: "Preparation", path: "/exams/toefl/preparation" },
];

export default function ToeflPrep() {
    return (
        <GuidePageLayout
            title="TOEFL Preparation Guide for Bangladeshi Students"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "TOEFL preparation works best when students understand the exam format early and build a consistent plan for reading, listening, speaking, and writing.",
                "This guide outlines a practical TOEFL preparation strategy for students applying to universities abroad and looking for a clear, step-by-step study approach.",
            ]}
            cards={[
                {
                    title: "Understand the Format",
                    description:
                        "Learn how each TOEFL section works before you begin timed practice so your study time becomes more efficient.",
                },
                {
                    title: "Build Section Strength",
                    description:
                        "Identify your weak modules early and use targeted practice to improve accuracy, timing, and confidence.",
                },
                {
                    title: "Study with Deadlines in Mind",
                    description:
                        "Plan your exam date around application timelines so your scores arrive in time for university review.",
                },
            ]}
            sections={[
                {
                    title: "A practical TOEFL study plan",
                    bullets: [
                        "Start with a diagnostic test to understand your current level.",
                        "Break preparation into reading, listening, speaking, and writing blocks.",
                        "Practice timed sets every week to improve pacing.",
                        "Review errors carefully instead of only counting scores.",
                        "Increase mock test practice closer to your exam date.",
                    ],
                },
                {
                    title: "How students improve faster",
                    paragraphs: [
                        "Strong TOEFL preparation is less about studying for long hours and more about building a repeatable routine. Short daily practice with focused review usually outperforms irregular marathon sessions.",
                        "Students preparing for study abroad should also align TOEFL planning with SOP work, university applications, and document preparation so deadlines stay realistic.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Review the TOEFL overview", href: "/exams/toefl/overview" },
                { title: "Read the TOEFL syllabus", href: "/exams/toefl/syllabus" },
                { title: "Check TOEFL registration steps", href: "/exams/toefl/registration" },
            ]}
            infoTitle="TOEFL Planning Links"
            infoData={[
                [
                    { label: "TOEFL Overview", href: "/exams/toefl/overview" },
                    { label: "TOEFL Registration", href: "/exams/toefl/registration" },
                    { label: "TOEFL Syllabus", href: "/exams/toefl/syllabus" },
                ],
                [
                    { label: "TOEFL Result Guide", href: "/exams/toefl/result" },
                    { label: "IELTS Overview", href: "/exams/ielts/overview" },
                    { label: "PTE Overview", href: "/exams/pte/overview" },
                ],
            ]}
            faqs={[
                {
                    id: "toefl-prep-1",
                    question: "How long should I study for TOEFL?",
                    answer:
                        "That depends on your current English level and target score, but many students benefit from six to ten weeks of structured preparation.",
                },
                {
                    id: "toefl-prep-2",
                    question: "Should I prepare for all sections together?",
                    answer:
                        "Yes, but you should give extra time to weaker sections while maintaining regular exposure to all four parts of the exam.",
                },
            ]}
        />
    );
}
