import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function SATPreparationPage() {
    return (
        <GuidePageLayout
            title="SAT Preparation Guide: Reading, Writing, Math, and Test Strategy"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "SAT", path: "/exams/sat/preparation" },
            ]}
            intro={[
                "SAT preparation should combine concept review, timed practice, and a clear understanding of the score range your preferred universities expect.",
                "Students usually perform better when they prepare steadily over time instead of relying on last-minute intensive practice.",
            ]}
            nextSteps={[
                { title: "SAT Eligibility", href: "/exams/sat/eligibility" },
                { title: "SAT Registration", href: "/exams/sat/registration" },
                { title: "SAT Syllabus", href: "/exams/sat/syllabus" },
            ]}
        />
    );
}
