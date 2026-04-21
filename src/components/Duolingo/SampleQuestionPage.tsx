import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function SampleQuestionPage() {
    return (
        <GuidePageLayout
            title="Duolingo Sample Questions: How to Practise with More Purpose"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "Duolingo", path: "/exams/duolingo/preparation" },
                { label: "Sample Questions", path: "/exams/duolingo/sample" },
            ]}
            intro={[
                "Sample questions help students understand how the Duolingo English Test feels under adaptive conditions.",
                "The most useful practice method is to review both performance accuracy and response confidence instead of just counting correct answers.",
            ]}
            nextSteps={[
                { title: "Duolingo Guide", href: "/exams/duolingo/preparation" },
                { title: "Duolingo Syllabus", href: "/exams/duolingo/syllabus" },
                { title: "Duolingo Fees", href: "/exams/duolingo/fees" },
            ]}
        />
    );
}
