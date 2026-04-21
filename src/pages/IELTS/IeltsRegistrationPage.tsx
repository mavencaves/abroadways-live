import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Study Abroad", path: "/study-abroad" },
    { label: "Exams", path: "/exams/overview" },
    { label: "IELTS", path: "/exams/ielts/overview" },
    { label: "IELTS Registration", path: "/exams/ielts/registration" },
];

export default function IeltsRegistrationPage() {
    return (
        <GuidePageLayout
            title="IELTS Registration in Bangladesh: How to Book, What You Need, and Common Mistakes to Avoid"
            updatedDate="20 April 2026"
            customSegments={customSegments}
            intro={[
                "IELTS registration becomes much easier when students know which format to book, what documents to prepare, and how their exam date fits the application timeline.",
                "This page gives you a practical registration checklist so you can move forward without avoidable delays.",
            ]}
            sections={[
                {
                    title: "Before you register",
                    bullets: [
                        "Confirm the correct test type and whether UKVI approval is required.",
                        "Keep your passport details ready and make sure your name matches official records.",
                        "Choose a test date that still leaves enough time for score reporting, applications, and visa processing.",
                    ],
                },
                {
                    title: "Common booking mistakes",
                    bullets: [
                        "Booking the wrong IELTS version for your university or visa requirement.",
                        "Leaving too little time between the test date and application deadline.",
                        "Ignoring section-score minimums and focusing only on the overall band target.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "IELTS Fees", href: "/exams/ielts/fees" },
                { title: "IELTS Test Centres", href: "/exams/ielts/centers" },
                { title: "Book Consultation", href: "/contact" },
            ]}
            infoTitle="IELTS Registration Links"
            infoData={[
                [
                    { label: "IELTS Fees", href: "/exams/ielts/fees" },
                    { label: "IELTS Test Centres", href: "/exams/ielts/centers" },
                    { label: "IELTS Slot Booking", href: "/exams/ielts/slot-booking" },
                ],
            ]}
        />
    );
}
