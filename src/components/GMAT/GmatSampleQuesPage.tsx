import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GmatSampleQuesPage() {
    return (
        <GuidePageLayout
            title="GMAT Sample Questions: How to Use Practice Material More Effectively"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GMAT", path: "/exams/gmat/overview" },
                { label: "Sample Questions", path: "/exams/gmat/sample-question" },
            ]}
            intro={[
                "GMAT sample questions are useful when students treat them as diagnostic tools rather than just score checks.",
                "The best approach is to review why an answer is correct, what trap appeared, and how timing affected the decision.",
            ]}
            nextSteps={[
                { title: "GMAT Preparation", href: "/exams/gmat/preparation" },
                { title: "GMAT Syllabus", href: "/exams/gmat/syllabus" },
                { title: "Talk to Abroadways", href: "/contact" },
            ]}
        />
    );
}
