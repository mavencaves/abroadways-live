import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function PTEPage() {
    return (
        <GuidePageLayout
            title="PTE Academic Guide 2026: Format, Registration, Results, and Preparation"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "PTE", path: "/exams/pte/overview" },
            ]}
            intro={[
                "PTE Academic is a fast, computer-based English proficiency test that many students compare with IELTS and TOEFL for study abroad planning.",
                "It can be a strong option for students who prefer computer-based assessment and faster result cycles.",
            ]}
            sections={[
                {
                    title: "Why students choose PTE",
                    bullets: [
                        "Fully computer-based testing experience.",
                        "Widely accepted in multiple study destinations.",
                        "Often chosen by students who want efficient scheduling and result timelines.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "PTE Overview", href: "/exams/pte/overview" },
                { title: "PTE Books", href: "/resources/books/pte" },
                { title: "Talk to Abroadways", href: "/contact" },
            ]}
        />
    );
}
