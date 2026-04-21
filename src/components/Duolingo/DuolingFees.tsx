import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Exams", path: "/exams/overview" },
    { label: "Duolingo", path: "/exams/duolingo/preparation" },
    { label: "Fees", path: "/exams/duolingo/fees" },
];

const infoData = [
    [
        { label: "Duolingo Preparation Guide", href: "/exams/duolingo/preparation" },
        { label: "Duolingo Sample Questions", href: "/exams/duolingo/sample" },
        { label: "Duolingo Syllabus", href: "/exams/duolingo/syllabus" },
    ],
    [
        { label: "IELTS Overview", href: "/exams/ielts/overview" },
        { label: "PTE Overview", href: "/exams/pte/overview" },
        { label: "Study Abroad Eligibility", href: "/resources/eligibility" },
    ],
];

const faqs = [
    {
        id: "duolingo-fees-1",
        question: "How much does the Duolingo English Test usually cost?",
        answer:
            "The exact fee can change over time, so students should always confirm the latest price on the official Duolingo English Test platform before booking.",
    },
    {
        id: "duolingo-fees-2",
        question: "Can I reschedule a Duolingo test?",
        answer:
            "Policies can change, but students should review the official test rules carefully before payment to understand any rescheduling, cancellation, or refund limitations.",
    },
    {
        id: "duolingo-fees-3",
        question: "Is the Duolingo English Test accepted for study abroad?",
        answer:
            "Many universities accept it, but acceptance depends on the country, institution, and program. Always verify requirements directly with the university before applying.",
    },
];

export default function DuolingoFees() {
    return (
        <GuidePageLayout
            title="Duolingo English Test Fees and Booking Guidance"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "The Duolingo English Test can be an accessible option for students who need a flexible English proficiency pathway for university applications.",
                "Before booking, students should understand current fee expectations, payment steps, acceptance policies, and whether the test fits their target universities and visa goals.",
            ]}
            notice={{
                title: "Always Verify Current Fees",
                body: "Exam fees and policies can change. Abroadways recommends checking the official Duolingo English Test website for the latest payment, cancellation, and booking rules before making a decision.",
                tone: "orange",
            }}
            cards={[
                {
                    title: "Check University Acceptance",
                    description:
                        "Do not book the test only because it is convenient. First confirm that your target universities and programs accept Duolingo scores.",
                },
                {
                    title: "Understand Total Planning Cost",
                    description:
                        "Compare the exam fee with your application timeline, preparation needs, and destination-specific admission requirements.",
                },
                {
                    title: "Prepare Before You Pay",
                    description:
                        "Even with a shorter format, Duolingo still requires practice, device readiness, and familiarity with test rules.",
                },
            ]}
            sections={[
                {
                    title: "What students should check before booking",
                    bullets: [
                        "Whether the university accepts Duolingo for your target intake.",
                        "The latest official exam fee and payment method.",
                        "Technical requirements for taking the test.",
                        "How fast the result timeline fits your application deadlines.",
                        "Whether another exam such as IELTS or PTE may be a better long-term option.",
                    ],
                },
                {
                    title: "How to make a better exam decision",
                    paragraphs: [
                        "Students often choose the lowest-cost option first, but the right exam depends on destination, university preference, visa context, and preparation time.",
                        "If you are applying to multiple countries or universities with mixed acceptance policies, a broader exam like IELTS may still offer more flexibility. If your shortlist supports Duolingo, it can be a useful fast-track option.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Read the Duolingo guide", href: "/exams/duolingo/preparation" },
                { title: "Review Duolingo sample questions", href: "/exams/duolingo/sample" },
                { title: "Compare IELTS and PTE options", href: "/exams/overview" },
            ]}
            infoTitle="Related Duolingo and Exam Links"
            infoData={infoData}
            faqs={faqs}
            faqTitle="Duolingo Fee FAQs"
        />
    );
}
