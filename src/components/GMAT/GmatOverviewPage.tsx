import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GmatOverviewPage() {
    return (
        <GuidePageLayout
            title="GMAT Focus Guide 2026: Overview, Registration, Syllabus, and Preparation"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GMAT", path: "/exams/gmat/overview" },
            ]}
            intro={[
                "The GMAT is widely used for business-school admissions and is especially relevant for students targeting MBA and management-related programmes abroad.",
                "Students should think about GMAT preparation in the wider context of admissions competitiveness, profile strength, and application timing.",
            ]}
            nextSteps={[
                { title: "GMAT Preparation", href: "/exams/gmat/preparation" },
                { title: "GMAT Registration", href: "/exams/gmat/registration" },
                { title: "GMAT Syllabus", href: "/exams/gmat/syllabus" },
            ]}
        />
    );
}
