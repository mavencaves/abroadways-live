import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GRESyllabusPatternPage() {
    return (
        <GuidePageLayout
            title="GRE Syllabus and Exam Pattern: Verbal, Quantitative, and Analytical Writing"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GRE", path: "/exams/gre/overview" },
                { label: "Syllabus", path: "/exams/gre/syllabus" },
            ]}
            intro={[
                "The GRE syllabus tests academic reasoning across verbal, quantitative, and analytical writing sections.",
                "Students score better when they understand the structure of each section before they begin serious preparation.",
            ]}
            sections={[
                { title: "Verbal reasoning", paragraphs: ["Tests reading comprehension, text completion, sentence equivalence, and vocabulary in context."] },
                { title: "Quantitative reasoning", paragraphs: ["Focuses on arithmetic, algebra, data interpretation, and logical quantitative problem solving."] },
                { title: "Analytical writing", paragraphs: ["Measures your ability to build and communicate a reasoned argument in a structured written format."] },
            ]}
            nextSteps={[
                { title: "GRE Preparation", href: "/exams/gre/preparation" },
                { title: "GRE Registration", href: "/exams/gre/registration" },
                { title: "GRE Books", href: "/resources/books/gre" },
            ]}
        />
    );
}
