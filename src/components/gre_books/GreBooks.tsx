import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Resources", path: "/resources" },
    { label: "Books", path: "/resources" },
    { label: "GRE Books", path: "/resources/books/gre" },
];

const greInfo = [
    [
        { label: "GRE Overview", href: "/exams/gre/overview" },
        { label: "GRE Preparation", href: "/exams/gre/preparation" },
        { label: "GRE Registration", href: "/exams/gre/registration" },
    ],
    [
        { label: "GRE Syllabus", href: "/exams/gre/syllabus" },
        { label: "GRE Slot Booking", href: "/exams/gre/slot-booking" },
        { label: "IELTS Books", href: "/resources/books/ielts" },
    ],
];

const faqs = [
    {
        id: "gre-books-1",
        question: "Which GRE books are best for beginners?",
        answer:
            "Most students should begin with the ETS Official Guide, then add a structured practice source such as Manhattan 5 lb. or another trusted problem bank for daily drilling.",
    },
    {
        id: "gre-books-2",
        question: "Do I need separate books for Verbal and Quant?",
        answer:
            "That depends on your baseline. If one section is much weaker, section-specific books can help. Otherwise, a strong general guide plus timed practice is often enough at the start.",
    },
    {
        id: "gre-books-3",
        question: "Can I prepare for the GRE using PDFs only?",
        answer:
            "PDFs can help for review, but you should combine them with timed question practice and official-style testing so you understand pacing and exam conditions properly.",
    },
];

export default function GreBooksPage() {
    return (
        <GuidePageLayout
            title="Best GRE Books and Study Materials for 2026 Preparation"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "Choosing the right GRE books can make preparation more structured, especially for students balancing classes, work, and university application deadlines.",
                "This page highlights the types of GRE study materials that work best for Bangladeshi students preparing for graduate admission in the United States, Canada, Europe, and other major destinations.",
            ]}
            notice={{
                title: "Study Smarter",
                body: "The most effective GRE preparation plan usually combines one official guide, one question bank, and a regular timed practice routine instead of collecting too many books at once.",
                tone: "blue",
            }}
            cards={[
                {
                    title: "Official Practice First",
                    description:
                        "Start with ETS materials to understand real question style, scoring expectations, and the overall structure of the GRE exam.",
                },
                {
                    title: "Section-Focused Reinforcement",
                    description:
                        "Add Verbal or Quant-focused practice books when you need extra support in vocabulary, reading comprehension, algebra, or data interpretation.",
                },
                {
                    title: "Timed Revision Support",
                    description:
                        "Use mock tests, review notes, and error tracking to turn book practice into measurable score improvement.",
                },
            ]}
            sections={[
                {
                    title: "How to choose GRE books wisely",
                    paragraphs: [
                        "Avoid buying too many books at the beginning. A smaller, high-quality set is easier to finish and much more useful for tracking progress.",
                        "Look for study materials that explain concepts clearly, offer realistic practice, and help you review your mistakes. Good preparation is less about volume and more about consistency.",
                    ],
                },
                {
                    title: "Recommended study mix",
                    bullets: [
                        "One official GRE guide for format and credibility.",
                        "One strong Quant or Verbal workbook based on your weaker area.",
                        "A practice set with timed mock exams.",
                        "A mistake log to review repeated errors and weak topics.",
                    ],
                },
                {
                    title: "Mistakes students often make",
                    bullets: [
                        "Collecting many books but finishing none of them.",
                        "Practicing without reviewing incorrect answers properly.",
                        "Ignoring timed practice until the final stage.",
                        "Using materials that are not aligned with the current GRE format.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Review the GRE overview", href: "/exams/gre/overview" },
                { title: "Build your GRE preparation plan", href: "/exams/gre/preparation" },
                { title: "Explore IELTS books", href: "/resources/books/ielts" },
            ]}
            infoTitle="GRE Planning Links"
            infoData={greInfo}
            faqs={faqs}
            faqTitle="GRE Book Selection FAQs"
        />
    );
}
