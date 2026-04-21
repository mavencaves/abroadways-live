import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function SATSyllabusPage() {
    return (
        <GuidePageLayout
            title="SAT Syllabus and Exam Pattern: Reading, Writing, and Math"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "SAT", path: "/exams/sat/preparation" },
                { label: "Syllabus", path: "/exams/sat/syllabus" },
            ]}
            intro={[
                "The SAT evaluates core academic readiness for undergraduate study, with emphasis on reading, writing, language, and mathematics.",
                "Understanding the structure early helps students prepare more efficiently and set realistic score targets.",
            ]}
            nextSteps={[
                { title: "SAT Preparation", href: "/exams/sat/preparation" },
                { title: "SAT Registration", href: "/exams/sat/registration" },
                { title: "SAT Eligibility", href: "/exams/sat/eligibility" },
            ]}
        />
    );
}
