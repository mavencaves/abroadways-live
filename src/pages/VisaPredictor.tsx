import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Resources", path: "/resources" },
    { label: "Visa Planning", path: "/resources" },
    { label: "Visa Predictor", path: "/visa-predictor" },
];

const faqs = [
    {
        id: "visa-predictor-1",
        question: "What is the purpose of the visa predictor?",
        answer:
            "The visa predictor is a planning tool that helps students think through profile strength, documentation readiness, and common risk areas before they move deeper into the application process.",
    },
    {
        id: "visa-predictor-2",
        question: "Does the predictor guarantee visa approval?",
        answer:
            "No. It is a guidance tool, not a guarantee. Final decisions always depend on the embassy, official requirements, documentation quality, and the overall credibility of the application.",
    },
    {
        id: "visa-predictor-3",
        question: "Who should use this tool?",
        answer:
            "It is useful for students and families who want an early sense of application readiness before consultation, university filing, or final visa submission planning.",
    },
];

export default function VisaPredictor() {
    return (
        <GuidePageLayout
            title="Visa Predictor and Readiness Guide for Study Abroad Applicants"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "Visa success depends on much more than one document. Students need a credible profile, a clear academic pathway, financial planning, and properly prepared supporting materials.",
                "This resource helps Bangladeshi students understand the major factors that influence visa readiness so they can identify weak points early and prepare more confidently.",
            ]}
            notice={{
                title: "Planning Tool",
                body: "This page is designed as a structured readiness guide. It does not replace official embassy requirements or one-to-one consultation for complex cases.",
                tone: "orange",
            }}
            cards={[
                {
                    title: "Profile Readiness",
                    description:
                        "Review how your academic background, test scores, course logic, and destination choice fit together before you proceed.",
                },
                {
                    title: "Document Strength",
                    description:
                        "Check whether your SOP, financial planning, offer documents, and supporting papers present a clear and credible story.",
                },
                {
                    title: "Application Confidence",
                    description:
                        "Identify the areas that need improvement before consultation, visa file preparation, or interview-style questioning.",
                },
            ]}
            sections={[
                {
                    title: "What influences visa readiness",
                    bullets: [
                        "Academic background and progression logic.",
                        "Course selection and destination fit.",
                        "English proficiency and test readiness.",
                        "Financial planning and source of funds.",
                        "Consistency across SOP, documents, and application intent.",
                    ],
                },
                {
                    title: "How students should use this page",
                    paragraphs: [
                        "Use this resource as an early-stage planning checklist. It is most valuable before you submit applications or schedule visa preparation support.",
                        "If your case includes study gaps, low scores, complex financial history, or multiple refusals, you should treat this guide as a starting point and seek direct guidance before proceeding.",
                    ],
                },
                {
                    title: "When to seek expert support",
                    bullets: [
                        "You are unsure whether your profile supports your target country.",
                        "Your documents feel generic or inconsistent.",
                        "You want help improving your SOP and supporting explanation.",
                        "You need a clearer plan for exam preparation, admissions, and visa timing.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Check study abroad eligibility", href: "/resources/eligibility" },
                { title: "Review SOP guidance", href: "/resources/sop" },
                { title: "Explore exam planning", href: "/exams/overview" },
            ]}
            infoTitle="Related Planning Resources"
            infoData={[
                [
                    { label: "Study Abroad Eligibility", href: "/resources/eligibility" },
                    { label: "SOP Guide", href: "/resources/sop" },
                    { label: "PhD SOP Guide", href: "/resources/sop/phd" },
                ],
                [
                    { label: "LOR for Master's", href: "/resources/recommendation-letter/masters" },
                    { label: "IELTS Guide", href: "/exams/ielts/overview" },
                    { label: "PTE Overview", href: "/exams/pte/overview" },
                ],
            ]}
            faqs={faqs}
            faqTitle="Visa Planning FAQs"
        />
    );
}
