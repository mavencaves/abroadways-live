import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function Reading() {
    return (
        <GuidePageLayout
            title="IELTS Reading Practice: Improve Accuracy, Speed, and Passage Strategy"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "IELTS", path: "/exams/ielts/overview" },
                { label: "Reading Practice", path: "/exams/ielts/practice/reading" },
            ]}
            intro={[
                "IELTS Reading is easier to manage when students understand question types, passage navigation, and timing discipline.",
                "A good reading strategy balances skimming, scanning, and detail checking without losing time on difficult questions.",
            ]}
            sections={[
                {
                    title: "Reading practice priorities",
                    bullets: [
                        "Practise true/false/not given and matching question types regularly.",
                        "Learn to move on quickly when one question is consuming too much time.",
                        "Review keyword traps and paraphrased language, not just correct answers.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Listening Practice", href: "/exams/ielts/practice/listening" },
                { title: "IELTS Writing Practice", href: "/exams/ielts/practice/writing" },
                { title: "IELTS Books", href: "/resources/books/ielts" },
            ]}
        />
    );
}
