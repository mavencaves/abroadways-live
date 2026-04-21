import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Resources", path: "/resources" },
    { label: "Application Documents", path: "/resources" },
    { label: "Recommendation Letter for Master's", path: "/resources/recommendation-letter/masters" },
];

const faqs = [
    {
        id: "lor-1",
        question: "Who should write my LOR for a master's application?",
        answer:
            "The best recommender is someone who knows your academic or professional performance well, such as a university lecturer, supervisor, department head, or employer with relevant context.",
    },
    {
        id: "lor-2",
        question: "How many recommendation letters do universities usually ask for?",
        answer:
            "Most universities ask for two or three recommendation letters. Always confirm the exact number and format requirement on the university's application page.",
    },
    {
        id: "lor-3",
        question: "What should a strong LOR mention?",
        answer:
            "A strong LOR should describe your academic ability, work ethic, communication, responsibility, and suitability for postgraduate study using specific examples where possible.",
    },
    {
        id: "lor-4",
        question: "When should I request a recommendation letter?",
        answer:
            "You should usually ask at least four to six weeks before the deadline so your recommender has enough time to prepare a thoughtful letter.",
    },
];

export default function LorMasters() {
    return (
        <GuidePageLayout
            title="Recommendation Letter (LOR) Guide for Master's Applications"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "A strong Letter of Recommendation can reinforce the academic and professional story presented in your application. It adds third-party credibility to your profile.",
                "This guide explains what a master's LOR should include, who should write it, and how Bangladeshi students can request recommendation letters in a professional and timely way.",
            ]}
            notice={{
                title: "Document Planning",
                body: "Recommendation letters should support your SOP, transcripts, and application goals. The strongest applications keep all of these documents aligned.",
                tone: "orange",
            }}
            cards={[
                {
                    title: "Choose the Right Recommender",
                    description:
                        "Select someone who knows your work well and can describe your academic ability or professional contribution with real examples.",
                },
                {
                    title: "Provide Helpful Context",
                    description:
                        "Share your CV, shortlisted programs, deadlines, and key achievements so your recommender can write a stronger and more relevant letter.",
                },
                {
                    title: "Stay Professional",
                    description:
                        "Request recommendation letters early, follow up politely, and make the submission process easy for your recommender.",
                },
            ]}
            sections={[
                {
                    title: "What a master's LOR should cover",
                    bullets: [
                        "Your relationship with the recommender and how long they have known you.",
                        "Your academic performance, discipline, and classroom or workplace strengths.",
                        "Specific examples that support the recommendation.",
                        "Your suitability for master's-level study and future growth.",
                        "A clear and confident endorsement for admission.",
                    ],
                },
                {
                    title: "Who should write your recommendation letter",
                    paragraphs: [
                        "For most students, the best recommender is a professor, lecturer, project supervisor, or direct manager who can speak meaningfully about your work. Titles matter less than quality and specificity.",
                        "Avoid choosing someone famous who barely knows you. Admissions teams value relevant detail much more than generic praise from a senior person with limited knowledge of your profile.",
                    ],
                },
                {
                    title: "Common mistakes students make",
                    bullets: [
                        "Requesting letters too late and rushing the recommender.",
                        "Using recommenders who cannot provide strong examples.",
                        "Submitting overly generic letters with no program relevance.",
                        "Sending inconsistent information across SOP, CV, and LOR.",
                        "Failing to check whether the university requires direct upload or sealed submission.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Read the SOP guide", href: "/resources/sop" },
                { title: "Review PhD SOP guidance", href: "/resources/sop/phd" },
                { title: "Check study abroad eligibility", href: "/resources/eligibility" },
            ]}
            infoTitle="Related Application Resources"
            infoData={[
                [
                    { label: "SOP Guide", href: "/resources/sop" },
                    { label: "PhD SOP Guide", href: "/resources/sop/phd" },
                    { label: "Study Abroad Eligibility", href: "/resources/eligibility" },
                ],
                [
                    { label: "IELTS Guide", href: "/exams/ielts/overview" },
                    { label: "GRE Guide", href: "/exams/gre/overview" },
                    { label: "PTE Guide", href: "/exams/pte/overview" },
                ],
            ]}
            faqs={faqs}
            faqTitle="Recommendation Letter FAQs"
        />
    );
}
