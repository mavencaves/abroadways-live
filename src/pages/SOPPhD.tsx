import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Resources", path: "/resources" },
    { label: "Application Documents", path: "/resources" },
    { label: "PhD SOP", path: "/resources/sop/phd" },
];

const faqs = [
    {
        id: "phd-sop-1",
        question: "What is the ideal length for a PhD SOP?",
        answer:
            "Most PhD SOPs work well at around 1,000 to 1,500 words, but you should always follow the department's published instructions if they provide a specific limit.",
    },
    {
        id: "phd-sop-2",
        question: "Can I submit the same PhD SOP to every university?",
        answer:
            "No. A PhD SOP should be customized for each university and department, especially where faculty research interests, laboratory strengths, and supervision fit are important.",
    },
    {
        id: "phd-sop-3",
        question: "How should I begin a PhD SOP?",
        answer:
            "Start with a focused research motivation. A strong opening often highlights the problem, question, or academic experience that led you toward your intended research path.",
    },
    {
        id: "phd-sop-4",
        question: "What if I do not have formal research experience?",
        answer:
            "You can still highlight research-related coursework, thesis work, capstone projects, internships, data analysis, lab exposure, or independent academic work that shows research potential.",
    },
    {
        id: "phd-sop-5",
        question: "Should I mention professors in my SOP?",
        answer:
            "Yes, when relevant. Mentioning one to three faculty members whose work genuinely aligns with your proposed area can strengthen your SOP, as long as the references are specific and thoughtful.",
    },
];

export default function SOPPhD() {
    return (
        <GuidePageLayout
            title="PhD Statement of Purpose Guide for International Applications"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "A PhD Statement of Purpose should do more than describe your academic background. It needs to demonstrate research readiness, intellectual fit, and a clear direction for advanced study.",
                "This guide is designed for students from Bangladesh preparing competitive doctoral applications for the UK, Europe, North America, and other major higher education destinations.",
            ]}
            notice={{
                title: "Research-Focused Writing",
                body: "PhD SOPs require a sharper academic tone than general master's applications. Prioritize research fit, faculty alignment, and your long-term academic direction.",
                tone: "blue",
            }}
            cards={[
                {
                    title: "Research Readiness",
                    description:
                        "Demonstrate how your previous study, thesis work, or independent projects prepared you for doctoral-level research.",
                },
                {
                    title: "Faculty Alignment",
                    description:
                        "Show that you understand the university's research environment and can explain why it fits your proposed area.",
                },
                {
                    title: "Academic Direction",
                    description:
                        "Present a clear future plan that connects your research interests, doctoral training, and long-term career pathway.",
                },
            ]}
            sections={[
                {
                    title: "What makes a PhD SOP different",
                    paragraphs: [
                        "A PhD SOP is more analytical and research-focused than a general SOP for taught programs. Universities want evidence of academic maturity, subject depth, and the ability to pursue an original line of inquiry.",
                        "Instead of broad personal storytelling, a strong PhD SOP should highlight research interests, preparation, technical or methodological exposure, and why a particular department makes sense for your goals.",
                    ],
                },
                {
                    title: "Suggested structure for a strong PhD SOP",
                    bullets: [
                        "Open with your research interest and why it matters.",
                        "Explain your academic preparation and any relevant thesis or project work.",
                        "Highlight research methods, tools, or field-specific experience.",
                        "Show why the target department and faculty are a good fit.",
                        "Close with a focused academic and career vision.",
                    ],
                },
                {
                    title: "Mistakes to avoid in doctoral applications",
                    bullets: [
                        "Using a general SOP that does not mention research direction.",
                        "Listing achievements without showing academic depth.",
                        "Ignoring faculty fit or departmental strengths.",
                        "Writing vague career goals that do not match doctoral study.",
                        "Submitting a document that sounds generic, rushed, or overly promotional.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Review the general SOP guide", href: "/resources/sop" },
                { title: "Explore study abroad eligibility", href: "/resources/eligibility" },
                { title: "Plan your exam pathway", href: "/exams/overview" },
            ]}
            infoTitle="Useful Planning Links"
            infoData={[
                [
                    { label: "General SOP Guide", href: "/resources/sop" },
                    { label: "GRE Guide", href: "/exams/gre/overview" },
                    { label: "IELTS Guide", href: "/exams/ielts/overview" },
                ],
                [
                    { label: "PTE Guide", href: "/exams/pte/overview" },
                    { label: "Master's Recommendation Letter", href: "/resources/recommendation-letter/masters" },
                    { label: "Study Abroad Eligibility", href: "/resources/eligibility" },
                ],
            ]}
            faqs={faqs}
        />
    );
}
