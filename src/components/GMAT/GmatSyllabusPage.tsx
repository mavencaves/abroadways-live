import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GmatSyllabusPage() {
    return (
        <GuidePageLayout
            title="GMAT Syllabus and Pattern: Quantitative Reasoning, Verbal Reasoning, and Data Insights"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GMAT", path: "/exams/gmat/overview" },
                { label: "Syllabus", path: "/exams/gmat/syllabus" },
            ]}
            intro={[
                "The GMAT syllabus is built to assess business-school readiness through reasoning, analysis, and decision-making skills.",
                "Understanding the section structure early helps students build more targeted and realistic study plans.",
            ]}
            nextSteps={[
                { title: "GMAT Overview", href: "/exams/gmat/overview" },
                { title: "GMAT Preparation", href: "/exams/gmat/preparation" },
                { title: "GMAT Registration", href: "/exams/gmat/registration" },
            ]}
        />
    );
}
