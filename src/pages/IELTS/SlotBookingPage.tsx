import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Study Abroad", path: "/study-abroad" },
    { label: "Exams", path: "/exams/overview" },
    { label: "IELTS", path: "/exams/ielts/overview" },
    { label: "Slot Booking", path: "/exams/ielts/slot-booking" },
];

export default function SlotBookingPage() {
    return (
        <GuidePageLayout
            title="IELTS Slot Booking: How to Choose the Right Date and Centre"
            updatedDate="20 April 2026"
            customSegments={customSegments}
            intro={[
                "Booking the right IELTS slot is not just about seat availability. It should align with your university deadlines, visa timeline, and realistic preparation window.",
                "Students often make better decisions when they compare centre access, result timing, and retake flexibility before finalising the booking.",
            ]}
            sections={[
                {
                    title: "How to choose your slot wisely",
                    bullets: [
                        "Book early during peak admission seasons to avoid limited centre availability.",
                        "Keep enough time between the exam date and your application deadline.",
                        "Choose a centre location that reduces travel stress and helps you stay focused on test day.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Registration", href: "/exams/ielts/registration" },
                { title: "IELTS Test Centres", href: "/exams/ielts/centers" },
                { title: "IELTS Exam Dates", href: "/exams/ielts/dates" },
            ]}
            infoTitle="IELTS Slot Booking Links"
            infoData={[
                [
                    { label: "IELTS Registration", href: "/exams/ielts/registration" },
                    { label: "IELTS Test Centres", href: "/exams/ielts/centers" },
                    { label: "IELTS Exam Dates", href: "/exams/ielts/dates" },
                ],
            ]}
        />
    );
}
