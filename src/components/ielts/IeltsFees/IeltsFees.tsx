import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function IeltsFees() {
    return (
        <GuidePageLayout
            title="IELTS Fees in Bangladesh: Registration Cost, Recheck Considerations, and Planning Tips"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "IELTS", path: "/exams/ielts/overview" },
                { label: "Fees", path: "/exams/ielts/fees" },
            ]}
            intro={[
                "IELTS costs should be planned as part of your full application budget, not treated as an isolated exam fee.",
                "Students should also account for preparation support, travel to the test centre, and the possibility of a retake if the target score is missed.",
            ]}
            sections={[
                {
                    title: "What to budget for",
                    bullets: [
                        "The main test registration fee.",
                        "Travel, identification, and preparation-related costs.",
                        "Potential remarking or retake costs if your score falls short of the requirement.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Registration", href: "/exams/ielts/registration" },
                { title: "IELTS Results", href: "/exams/ielts/results" },
                { title: "Talk to Abroadways", href: "/contact" },
            ]}
        />
    );
}
