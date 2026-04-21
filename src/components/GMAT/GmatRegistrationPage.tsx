import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GmatRegistrationPage() {
    return (
        <GuidePageLayout
            title="GMAT Registration: Booking Advice, Documents, and Date Planning"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GMAT", path: "/exams/gmat/overview" },
                { label: "Registration", path: "/exams/gmat/registration" },
            ]}
            intro={[
                "GMAT registration is easiest when students understand their target application cycle and book with enough time for score reporting and possible rescheduling.",
                "A rushed booking can create more pressure than progress, especially for competitive business-school applications.",
            ]}
            nextSteps={[
                { title: "GMAT Overview", href: "/exams/gmat/overview" },
                { title: "GMAT Preparation", href: "/exams/gmat/preparation" },
                { title: "GMAT Sample Questions", href: "/exams/gmat/sample-question" },
            ]}
        />
    );
}
