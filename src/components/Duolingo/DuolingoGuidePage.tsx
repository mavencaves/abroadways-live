import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function DuolingoGuidePage() {
    return (
        <GuidePageLayout
            title="Duolingo English Test Guide: Preparation, Format, and Student Use Cases"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "Duolingo", path: "/exams/duolingo/preparation" },
            ]}
            intro={[
                "The Duolingo English Test is increasingly used by students who need a flexible, online English proficiency option for study abroad applications.",
                "Students should still verify university acceptance before relying on Duolingo as their main English test pathway.",
            ]}
            nextSteps={[
                { title: "Duolingo Fees", href: "/exams/duolingo/fees" },
                { title: "Duolingo Sample Questions", href: "/exams/duolingo/sample" },
                { title: "Duolingo Syllabus", href: "/exams/duolingo/syllabus" },
            ]}
        />
    );
}
