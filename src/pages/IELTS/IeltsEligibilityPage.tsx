import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Study Abroad", path: "/study-abroad" },
    { label: "Exams", path: "/exams/overview" },
    { label: "IELTS", path: "/exams/ielts/overview" },
    { label: "IELTS Eligibility", path: "/exams/ielts/eligibility" },
];

export default function IeltsEligibilityPage() {
    return (
        <GuidePageLayout
            title="IELTS Eligibility Guide: Age, Documents, Score Expectations, and Planning Tips"
            updatedDate="20 April 2026"
            customSegments={customSegments}
            intro={[
                "IELTS does not have a strict academic prerequisite, which makes it accessible to a wide range of students and professionals in Bangladesh.",
                "What matters more is whether you have the right identification, understand the score you need, and choose the correct test format for your destination.",
            ]}
            sections={[
                {
                    title: "Basic IELTS eligibility",
                    bullets: [
                        "Most test takers are expected to be at least 16 years old.",
                        "You normally need a valid passport or another accepted identity document depending on test-centre rules.",
                        "Your target score depends on the university, visa, or professional pathway you are applying for.",
                    ],
                },
                {
                    title: "Why score planning matters",
                    paragraphs: [
                        "A student applying to a competitive university may need a stronger overall band and minimum section scores than a student applying to a more flexible pathway.",
                        "That is why IELTS eligibility is not just about whether you can sit for the exam. It is also about whether your current profile and timeline can realistically meet the required score.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Compare IELTS Types", href: "/exams/ielts/types" },
                { title: "Start IELTS Registration", href: "/exams/ielts/registration" },
                { title: "Ask About Score Targets", href: "/contact" },
            ]}
            infoTitle="IELTS Eligibility Shortcuts"
            infoData={[
                [
                    { label: "IELTS Types", href: "/exams/ielts/types" },
                    { label: "IELTS Registration", href: "/exams/ielts/registration" },
                    { label: "IELTS Results", href: "/exams/ielts/results" },
                ],
            ]}
        />
    );
}
