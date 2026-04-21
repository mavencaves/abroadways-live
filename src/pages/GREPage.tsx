import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GREPage() {
    return (
        <GuidePageLayout
            title="GRE Exam Guide 2026: Overview, Registration, Syllabus, Preparation, and Score Planning"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GRE", path: "/exams/gre/overview" },
            ]}
            intro={[
                "The GRE is a widely recognised admissions test for graduate and postgraduate study, especially for students applying to competitive programmes abroad.",
                "Students in Bangladesh should treat GRE planning as part of a broader application strategy that includes target universities, score goals, scholarships, and timelines.",
            ]}
            cards={[
                { title: "Graduate Admissions", description: "GRE scores are commonly used for master's and PhD applications across a range of disciplines." },
                { title: "Score Strategy", description: "A strong score target depends on programme selectivity, department expectations, and your wider application profile." },
                { title: "Smart Preparation", description: "GRE preparation works best when you balance concept review, timed practice, and test-taking strategy." },
            ]}
            nextSteps={[
                { title: "GRE Registration", href: "/exams/gre/registration" },
                { title: "GRE Preparation", href: "/exams/gre/preparation" },
                { title: "GRE Syllabus", href: "/exams/gre/syllabus" },
            ]}
        />
    );
}
