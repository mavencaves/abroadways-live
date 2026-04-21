import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function IeltsExamDate() {
    return (
        <GuidePageLayout
            title="IELTS Exam Dates in Bangladesh: How to Choose a Better Test Window"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "IELTS", path: "/exams/ielts/overview" },
                { label: "Exam Dates", path: "/exams/ielts/dates" },
            ]}
            intro={[
                "The right IELTS exam date should support your university deadline, visa planning, and preparation schedule instead of creating pressure at the last minute.",
                "Students often make better choices when they book early and leave buffer time for score release or a possible retake.",
            ]}
            sections={[
                {
                    title: "Date-planning advice",
                    bullets: [
                        "Try to book your test several weeks before critical admission or visa deadlines.",
                        "Avoid choosing a date that leaves no space for score improvement or document processing.",
                        "If your destination is highly competitive, plan for stronger preparation rather than the earliest possible seat.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Registration", href: "/exams/ielts/registration" },
                { title: "IELTS Slot Booking", href: "/exams/ielts/slot-booking" },
                { title: "IELTS Test Centres", href: "/exams/ielts/centers" },
            ]}
        />
    );
}
