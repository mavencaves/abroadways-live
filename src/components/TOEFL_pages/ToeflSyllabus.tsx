import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

const customSegments = [
    { label: "Exams", path: "/exams/overview" },
    { label: "TOEFL", path: "/exams/toefl/overview" },
    { label: "Syllabus", path: "/exams/toefl/syllabus" },
];

export default function ToeflSyllabus() {
    return (
        <GuidePageLayout
            title="TOEFL Syllabus and Exam Pattern Guide"
            updatedDate="Updated April 20, 2026"
            customSegments={customSegments}
            intro={[
                "Students preparing for TOEFL should understand the test pattern before they begin serious practice. A clear view of the syllabus helps you allocate time across the four sections more effectively.",
                "This page outlines the main TOEFL focus areas so students can plan preparation with better structure and confidence.",
            ]}
            cards={[
                {
                    title: "Reading",
                    description:
                        "Build confidence in academic passages, information tracking, and answering questions accurately under time pressure.",
                },
                {
                    title: "Listening",
                    description:
                        "Practice lectures and conversations while improving note-taking and idea retention.",
                },
                {
                    title: "Speaking and Writing",
                    description:
                        "Develop clear responses, organized ideas, and natural academic English for integrated tasks.",
                },
            ]}
            sections={[
                {
                    title: "Main TOEFL skill areas",
                    bullets: [
                        "Reading academic-style passages and answering comprehension questions.",
                        "Listening to conversations and lectures with active note-taking.",
                        "Speaking in a clear, organized way under timed conditions.",
                        "Writing structured responses based on reading, listening, and independent ideas.",
                    ],
                },
                {
                    title: "How to use the syllabus for preparation",
                    paragraphs: [
                        "Students should not treat the TOEFL syllabus as a list to memorize. It is a guide for building balanced skill development across all four sections.",
                        "A good study plan combines concept review, section practice, timed drills, and full mock testing. This helps you turn syllabus awareness into exam performance.",
                    ],
                },
            ]}
            nextSteps={[
                { title: "Start TOEFL preparation", href: "/exams/toefl/preparation" },
                { title: "Review TOEFL registration", href: "/exams/toefl/registration" },
                { title: "Read the TOEFL result guide", href: "/exams/toefl/result" },
            ]}
            infoTitle="TOEFL Study Links"
            infoData={[
                [
                    { label: "TOEFL Overview", href: "/exams/toefl/overview" },
                    { label: "TOEFL Preparation", href: "/exams/toefl/preparation" },
                    { label: "TOEFL Registration", href: "/exams/toefl/registration" },
                ],
                [
                    { label: "TOEFL Result Guide", href: "/exams/toefl/result" },
                    { label: "IELTS Overview", href: "/exams/ielts/overview" },
                    { label: "GRE Overview", href: "/exams/gre/overview" },
                ],
            ]}
            faqs={[
                {
                    id: "toefl-syllabus-1",
                    question: "Does TOEFL test all four English skills?",
                    answer:
                        "Yes. TOEFL evaluates reading, listening, speaking, and writing, which is why balanced preparation is important.",
                },
                {
                    id: "toefl-syllabus-2",
                    question: "Should I study each section separately?",
                    answer:
                        "You should understand each section individually, but your overall preparation plan should keep all four skills active throughout the study period.",
                },
            ]}
        />
    );
}
