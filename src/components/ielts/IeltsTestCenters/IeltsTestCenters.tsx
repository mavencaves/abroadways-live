import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function IeltsTestCenters() {
    return (
        <GuidePageLayout
            title="IELTS Test Centres in Bangladesh: What to Check Before You Book"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "IELTS", path: "/exams/ielts/overview" },
                { label: "Test Centres", path: "/exams/ielts/centers" },
            ]}
            intro={[
                "Choosing the right IELTS test centre can affect convenience, travel stress, and your overall exam experience.",
                "Students should compare location, available dates, and practical accessibility before confirming a centre.",
            ]}
            sections={[
                {
                    title: "How to compare centres",
                    bullets: [
                        "Choose a centre you can reach comfortably without adding unnecessary travel pressure.",
                        "Check whether the centre supports the exact format you want to book.",
                        "Confirm date availability early during popular admission seasons.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Exam Dates", href: "/exams/ielts/dates" },
                { title: "IELTS Registration", href: "/exams/ielts/registration" },
                { title: "IELTS Slot Booking", href: "/exams/ielts/slot-booking" },
            ]}
        />
    );
}
