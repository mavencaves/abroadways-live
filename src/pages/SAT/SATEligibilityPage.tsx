import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function SATEligibilityPage() {
    return (
        <GuidePageLayout
            title="SAT Eligibility: Who Should Take the SAT and When It Makes Sense"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "SAT", path: "/exams/sat/preparation" },
                { label: "Eligibility", path: "/exams/sat/eligibility" },
            ]}
            intro={[
                "The SAT is most relevant for students targeting undergraduate admissions where standardised testing is accepted or recommended.",
                "Eligibility is less about a formal restriction and more about whether the SAT supports your admission strategy and target institutions.",
            ]}
            nextSteps={[
                { title: "SAT Preparation", href: "/exams/sat/preparation" },
                { title: "SAT Registration", href: "/exams/sat/registration" },
                { title: "SAT Syllabus", href: "/exams/sat/syllabus" },
            ]}
        />
    );
}
