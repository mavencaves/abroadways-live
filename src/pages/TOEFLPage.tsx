import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function TOEFLPage() {
    return (
        <GuidePageLayout
            title="TOEFL Exam Guide 2026: Registration, Results, Syllabus, and Preparation Support"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "TOEFL", path: "/exams/toefl/overview" },
            ]}
            intro={[
                "TOEFL is an important English test for students targeting universities that accept or prefer TOEFL scores for admission.",
                "For Bangladeshi students, the most important planning factors are accepted destinations, score timelines, and the difference between TOEFL and other English test options.",
            ]}
            cards={[
                { title: "University Acceptance", description: "Many institutions across the United States, Canada, and other destinations continue to accept TOEFL scores." },
                { title: "Academic English Focus", description: "TOEFL preparation is especially useful for students who want strong exposure to academic listening, reading, and speaking tasks." },
                { title: "Route Comparison", description: "Students should compare TOEFL with IELTS, PTE, and LanguageCert depending on destination and application strategy." },
            ]}
            nextSteps={[
                { title: "TOEFL Registration", href: "/exams/toefl/registration" },
                { title: "TOEFL Syllabus", href: "/exams/toefl/syllabus" },
                { title: "TOEFL Preparation", href: "/exams/toefl/preparation" },
            ]}
        />
    );
}
