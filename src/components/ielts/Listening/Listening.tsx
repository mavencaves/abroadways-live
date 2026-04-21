import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function Listening() {
    return (
        <GuidePageLayout
            title="IELTS Listening Practice: Build Accuracy, Concentration, and Score Confidence"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "IELTS", path: "/exams/ielts/overview" },
                { label: "Listening Practice", path: "/exams/ielts/practice/listening" },
            ]}
            intro={[
                "IELTS Listening rewards students who practise actively, not passively. The goal is to build recognition speed, note-taking discipline, and confidence under time pressure.",
                "A strong listening routine should include different accents, timed mock audio, and review of common answer traps such as distractors, plurals, and spelling errors.",
            ]}
            sections={[
                {
                    title: "How to improve listening performance",
                    bullets: [
                        "Practise with timed recordings and review why each wrong answer happened.",
                        "Train your ear with different accents instead of listening to only one voice style.",
                        "Focus on spelling, number forms, and instruction words because these often cost marks.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Reading Practice", href: "/exams/ielts/practice/reading" },
                { title: "IELTS Speaking Practice", href: "/exams/ielts/practice/speaking" },
                { title: "IELTS Practice Hub", href: "/exams/ielts/practice/all-in-one" },
            ]}
        />
    );
}
