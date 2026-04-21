import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GRESlotBookingPage() {
    return (
        <GuidePageLayout
            title="GRE Slot Booking: Choosing the Right Test Date and Centre"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GRE", path: "/exams/gre/overview" },
                { label: "Slot Booking", path: "/exams/gre/slot-booking" },
            ]}
            intro={[
                "The best GRE slot is not always the earliest available one. Students should match the booking to preparation quality, score goals, and application deadlines.",
                "A rushed GRE booking can create unnecessary stress and make scholarship or admission planning harder.",
            ]}
            nextSteps={[
                { title: "GRE Registration", href: "/exams/gre/registration" },
                { title: "GRE Preparation", href: "/exams/gre/preparation" },
                { title: "GRE Overview", href: "/exams/gre/overview" },
            ]}
        />
    );
}
