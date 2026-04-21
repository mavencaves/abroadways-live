import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function DuolingoFeesPage() {
    return (
        <GuidePageLayout
            title="Duolingo English Test Fees and Planning Considerations"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "Duolingo", path: "/exams/duolingo/preparation" },
                { label: "Fees", path: "/exams/duolingo/fees" },
            ]}
            intro={[
                "Students often choose the Duolingo English Test because it can be more flexible and affordable than some traditional English proficiency routes.",
                "Even then, fee planning should still be tied to university acceptance, application timing, and retake possibilities.",
            ]}
            nextSteps={[
                { title: "Duolingo Preparation", href: "/exams/duolingo/preparation" },
                { title: "Duolingo Syllabus", href: "/exams/duolingo/syllabus" },
                { title: "Ask Abroadways", href: "/contact" },
            ]}
        />
    );
}
