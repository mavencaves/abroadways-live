import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Resources", path: "/resources" },
    { label: "Books", path: "/resources" },
    { label: "IELTS Books", path: "/resources/books/ielts" },
];

export default function IeltsBooksPage() {
    return (
        <GuidePageLayout
            title="Best IELTS Preparation Books for Students in Bangladesh"
            updatedDate="20 April 2026"
            customSegments={customSegments}
            intro={[
                "The right IELTS books can improve confidence, structure practice more clearly, and help students build skill-specific discipline before test day.",
                "A strong preparation set usually combines official practice materials, a skills-based guide, and timed mock test exposure.",
            ]}
            cards={[
                { title: "Official Practice Material", description: "Use official-style question sets so your practice stays close to the real exam experience." },
                { title: "Skill-Building Books", description: "Choose focused books for writing, speaking, vocabulary, or reading if one area needs extra work." },
                { title: "Mock-Test Resources", description: "Timed mock tests help you manage pressure, pacing, and answer discipline before the real exam." },
            ]}
            sections={[
                {
                    title: "How students should choose books",
                    bullets: [
                        "Start with reliable official or highly trusted exam-prep sources.",
                        "Do not collect too many books at once; a smaller focused set works better.",
                        "Match your books with your target band score and weakest skill areas.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Overview", href: "/exams/ielts/overview" },
                { title: "IELTS Practice Hub", href: "/exams/ielts/practice/all-in-one" },
                { title: "Talk to Abroadways", href: "/contact" },
            ]}
            infoTitle="IELTS Book Planning Links"
            infoData={[
                [
                    { label: "IELTS Practice Hub", href: "/exams/ielts/practice/all-in-one" },
                    { label: "IELTS Writing Practice", href: "/exams/ielts/practice/writing" },
                    { label: "IELTS Speaking Practice", href: "/exams/ielts/practice/speaking" },
                ],
            ]}
        />
    );
}
