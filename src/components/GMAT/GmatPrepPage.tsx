import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GmatPrepPage() {
    return (
        <GuidePageLayout
            title="GMAT Preparation: Quant, Verbal, Data Insights, and Test Strategy"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GMAT", path: "/exams/gmat/overview" },
                { label: "Preparation", path: "/exams/gmat/preparation" },
            ]}
            intro={[
                "Strong GMAT preparation combines concept mastery, disciplined timing, and smart review of mistakes across every section.",
                "Students usually perform better when they measure progress through targeted practice and full-length timed tests.",
            ]}
            nextSteps={[
                { title: "GMAT Registration", href: "/exams/gmat/registration" },
                { title: "GMAT Sample Questions", href: "/exams/gmat/sample-question" },
                { title: "GMAT Syllabus", href: "/exams/gmat/syllabus" },
            ]}
        />
    );
}
