import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GRERegistrationPage() {
    return (
        <GuidePageLayout
            title="GRE Registration: Booking Steps, Documents, and Planning Advice"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GRE", path: "/exams/gre/overview" },
                { label: "Registration", path: "/exams/gre/registration" },
            ]}
            intro={[
                "GRE registration is straightforward when students prepare documents, identify their preferred test date early, and understand the wider application timeline.",
                "Before you register, make sure the test date still supports your university deadlines, score reporting, and scholarship planning.",
            ]}
            sections={[
                {
                    title: "Registration checklist",
                    bullets: [
                        "Keep valid identification and account details ready.",
                        "Choose a test date that leaves enough time for score release and application preparation.",
                        "Check whether you may need to retake the test and plan accordingly.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "GRE Preparation", href: "/exams/gre/preparation" },
                { title: "GRE Slot Booking", href: "/exams/gre/slot-booking" },
                { title: "Talk to Abroadways", href: "/contact" },
            ]}
        />
    );
}
