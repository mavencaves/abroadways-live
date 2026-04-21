import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Exams", path: "/exams/overview" },
    { label: "TOEFL", path: "/exams/toefl/overview" },
    { label: "Registration", path: "/exams/toefl/registration" },
];

export default function ToeflRegistration() {
    return (
        <GuidePageLayout
            title="TOEFL Registration Guide for International Applicants"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "Students planning to take TOEFL should register early enough to match university deadlines, score reporting timelines, and preparation readiness.",
                "This guide explains the registration process at a practical level so students can avoid common mistakes while booking the exam.",
            ]}
            notice={{
                title: "Register Early",
                body: "A safe approach is to plan your TOEFL test date well before your application deadline so you still have time for retakes or score delivery if needed.",
                tone: "blue",
            }}
            sections={[
                {
                    title: "What you need before registering",
                    bullets: [
                        "A valid identification document that matches your exam profile.",
                        "A clear target test date based on application deadlines.",
                        "A working payment method accepted by the official platform.",
                        "An understanding of your preferred test center or at-home option, where available.",
                    ],
                },
                {
                    title: "Step-by-step registration approach",
                    bullets: [
                        "Create or log in to your official TOEFL account.",
                        "Select the exam format, date, and location.",
                        "Enter your personal details carefully and exactly.",
                        "Review the booking summary before payment.",
                        "Save your confirmation and follow all official instructions.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Review TOEFL preparation", href: "/exams/toefl/preparation" },
                { title: "Read the TOEFL syllabus", href: "/exams/toefl/syllabus" },
                { title: "Check the TOEFL result guide", href: "/exams/toefl/result" },
            ]}
            infoTitle="Related TOEFL Links"
            infoData={[
                [
                    { label: "TOEFL Overview", href: "/exams/toefl/overview" },
                    { label: "TOEFL Preparation", href: "/exams/toefl/preparation" },
                    { label: "TOEFL Syllabus", href: "/exams/toefl/syllabus" },
                ],
                [
                    { label: "TOEFL Result Guide", href: "/exams/toefl/result" },
                    { label: "IELTS Overview", href: "/exams/ielts/overview" },
                    { label: "Study Abroad Eligibility", href: "/resources/eligibility" },
                ],
            ]}
            faqs={[
                {
                    id: "toefl-reg-1",
                    question: "When should I register for TOEFL?",
                    answer:
                        "You should register early enough to leave room for preparation, score reporting, and a possible retake before your university deadlines.",
                },
                {
                    id: "toefl-reg-2",
                    question: "Can I change my test date after booking?",
                    answer:
                        "Official policies can change, so students should check the latest TOEFL rules for rescheduling, cancellation, and payment conditions before registering.",
                },
            ]}
        />
    );
}
