import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function DuolingoSyllabusPage() {
    return (
        <GuidePageLayout
            title="Duolingo English Test Syllabus and Question Types"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "Duolingo", path: "/exams/duolingo/preparation" },
                { label: "Syllabus", path: "/exams/duolingo/syllabus" },
            ]}
            intro={[
                "The Duolingo English Test uses adaptive question styles to assess reading, writing, listening, and speaking ability in a compact online format.",
                "Understanding the question types helps students prepare more efficiently and avoid relying on generic English practice alone.",
            ]}
            nextSteps={[
                { title: "Duolingo Guide", href: "/exams/duolingo/preparation" },
                { title: "Duolingo Sample Questions", href: "/exams/duolingo/sample" },
                { title: "Talk to Abroadways", href: "/contact" },
            ]}
        />
    );
}
