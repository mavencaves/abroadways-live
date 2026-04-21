import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function Speaking() {
    return (
        <GuidePageLayout
            title="IELTS Speaking Practice: Sound Natural, Structured, and More Confident"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "IELTS", path: "/exams/ielts/overview" },
                { label: "Speaking Practice", path: "/exams/ielts/practice/speaking" },
            ]}
            intro={[
                "IELTS Speaking is not about sounding perfect. It is about speaking clearly, staying relevant, and showing control over vocabulary and grammar in real time.",
                "Students usually improve faster when they practise familiar topics, time their cue-card responses, and listen back to their own speaking patterns.",
            ]}
            sections={[
                {
                    title: "How to practise effectively",
                    bullets: [
                        "Record your answers and review fluency, hesitation, and pronunciation patterns.",
                        "Practise cue cards with structure: opening idea, supporting details, and a confident close.",
                        "Expand answers naturally instead of giving very short responses.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Cue Cards", href: "/ielts-cue-cards" },
                { title: "IELTS Writing Practice", href: "/exams/ielts/practice/writing" },
                { title: "Ask Abroadways", href: "/contact" },
            ]}
        />
    );
}
