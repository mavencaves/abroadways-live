import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Resources", path: "/resources" },
    { label: "Application Documents", path: "/resources" },
    { label: "Statement of Purpose", path: "/resources/sop" },
];

const infoData = [
    [
        { label: "PhD SOP Guide", href: "/resources/sop/phd" },
        { label: "LOR for Master's", href: "/resources/recommendation-letter/masters" },
        { label: "Visa Predictor", href: "/visa-predictor" },
    ],
    [
        { label: "Study Abroad Eligibility", href: "/resources/eligibility" },
        { label: "IELTS Guide", href: "/exams/ielts/overview" },
        { label: "PTE Guide", href: "/exams/pte/overview" },
    ],
];

const faqs = [
    {
        id: "sop-faq-1",
        question: "What should a strong SOP include?",
        answer:
            "A strong SOP should explain your academic background, career direction, choice of course, reason for selecting the university, and how the program supports your future goals.",
    },
    {
        id: "sop-faq-2",
        question: "Can I use the same SOP for every university?",
        answer:
            "You can keep the same core story, but each SOP should be tailored for the university, course, and country you are applying to. Generic SOPs reduce impact.",
    },
    {
        id: "sop-faq-3",
        question: "How long should an SOP be?",
        answer:
            "Most SOPs work best at around 800 to 1,200 words, but you should always follow the specific word limit or format requested by the institution.",
    },
    {
        id: "sop-faq-4",
        question: "Can Abroadways help me improve my SOP draft?",
        answer:
            "Yes. Abroadways can help students refine clarity, structure, tone, and relevance so the final SOP feels more credible, focused, and application-ready.",
    },
];

export default function SOP() {
    return (
        <GuidePageLayout
            title="Statement of Purpose (SOP) Guide for Study Abroad Applications"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "Your Statement of Purpose is one of the most important parts of a study abroad application. It helps admissions teams understand who you are beyond grades and test scores.",
                "This guide explains how Bangladeshi students can structure an SOP clearly, present their goals with confidence, and avoid the most common mistakes that make applications feel weak or generic.",
            ]}
            notice={{
                title: "Application Writing Support",
                body: "Use this page as a planning guide first. If you already have a draft, Abroadways can help you strengthen the story, improve tone, and align the SOP with your target course and destination.",
                tone: "orange",
            }}
            cards={[
                {
                    title: "Clear Personal Story",
                    description:
                        "Explain the academic journey, turning points, and motivations that led you to apply for your chosen program.",
                },
                {
                    title: "Strong Academic Fit",
                    description:
                        "Show why the course, university, and country match your background, interests, and long-term direction.",
                },
                {
                    title: "Credible Career Goals",
                    description:
                        "Connect your planned studies with realistic career outcomes so the application feels purposeful and mature.",
                },
            ]}
            sections={[
                {
                    title: "What admissions teams want to see in an SOP",
                    paragraphs: [
                        "Admissions teams look for clarity, motivation, and alignment. They want to understand why you chose the program, how your background prepared you, and what you plan to do after graduation.",
                        "A good SOP is not a list of achievements. It is a focused narrative that connects your academic profile, work experience, interests, and future goals in a way that feels honest and well thought out.",
                    ],
                },
                {
                    title: "How to structure your SOP",
                    bullets: [
                        "Open with a focused introduction that establishes your purpose.",
                        "Summarize your academic background and relevant experience.",
                        "Explain why this subject area matters to you now.",
                        "Show why you selected this university and course.",
                        "Close with realistic academic and career goals.",
                    ],
                },
                {
                    title: "Common mistakes to avoid",
                    bullets: [
                        "Writing a generic SOP without tailoring it to the university.",
                        "Using exaggerated claims that do not match your profile.",
                        "Repeating CV information without adding context or meaning.",
                        "Using overly emotional storytelling without academic relevance.",
                        "Submitting a draft with grammar, tone, or structure problems.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Read the PhD SOP guide", href: "/resources/sop/phd" },
                { title: "Review LOR guidance", href: "/resources/recommendation-letter/masters" },
                { title: "Check your study abroad readiness", href: "/resources/eligibility" },
            ]}
            infoTitle="Related Resources"
            infoData={infoData}
            faqs={faqs}
        />
    );
}
