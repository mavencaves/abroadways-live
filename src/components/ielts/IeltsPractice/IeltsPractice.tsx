import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function IeltsPractice() {
    return (
        <GuidePageLayout
            title="IELTS Practice Hub: Listening, Reading, Writing, and Speaking in One Place"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "IELTS", path: "/exams/ielts/overview" },
                { label: "Practice Hub", path: "/exams/ielts/practice/all-in-one" },
            ]}
            intro={[
                "This IELTS practice hub is designed for students who want one structured starting point for every tested skill.",
                "Instead of preparing randomly, use this page to decide which skill needs the most work and where to go next.",
            ]}
            cards={[
                { title: "Listening", description: "Improve concentration, note-taking, and answer accuracy across different accents." },
                { title: "Reading", description: "Work on passage strategy, timing, and question-type control." },
                { title: "Writing", description: "Build stronger structure, vocabulary control, and task response quality." },
                { title: "Speaking", description: "Practise fluency, confidence, and cue-card structure with natural delivery." },
            ]}
            nextSteps={[
                { title: "Listening Practice", href: "/exams/ielts/practice/listening" },
                { title: "Reading Practice", href: "/exams/ielts/practice/reading" },
                { title: "Writing Practice", href: "/exams/ielts/practice/writing" },
            ]}
        />
    );
}
