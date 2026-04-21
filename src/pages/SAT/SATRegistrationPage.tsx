import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function SATRegistrationPage() {
    return (
        <GuidePageLayout
            title="SAT Registration: What Students Need Before Booking"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "SAT", path: "/exams/sat/preparation" },
                { label: "Registration", path: "/exams/sat/registration" },
            ]}
            intro={[
                "SAT registration works best when students plan their exam timing alongside undergraduate application deadlines.",
                "Before you book, review score-use policies, test dates, and how much preparation time you realistically need.",
            ]}
            nextSteps={[
                { title: "SAT Preparation", href: "/exams/sat/preparation" },
                { title: "SAT Syllabus", href: "/exams/sat/syllabus" },
                { title: "Talk to Abroadways", href: "/contact" },
            ]}
        />
    );
}
