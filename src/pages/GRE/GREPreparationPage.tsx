import GuidePageLayout from "@/components/exams/guide-page-layout.tsx";

export default function GREPreparationPage() {
    return (
        <GuidePageLayout
            title="GRE Preparation Guide: Verbal, Quant, Writing, and Smart Study Planning"
            updatedDate="20 April 2026"
            customSegments={[
                { label: "Exams", path: "/exams/overview" },
                { label: "GRE", path: "/exams/gre/overview" },
                { label: "Preparation", path: "/exams/gre/preparation" },
            ]}
            intro={[
                "GRE preparation becomes more manageable when students work section by section instead of treating the exam as one large unknown task.",
                "A strong study plan should cover verbal reasoning, quantitative reasoning, analytical writing, and full-length test practice.",
            ]}
            sections={[
                { title: "Verbal strategy", bullets: ["Practise reading comprehension with careful logic tracking.", "Review vocabulary in context instead of memorising isolated word lists."] },
                { title: "Quant strategy", bullets: ["Focus on arithmetic, algebra, number properties, and data interpretation.", "Use timed practice to improve both accuracy and pacing."] },
                { title: "Writing strategy", bullets: ["Learn how to build a structured analytical response.", "Practise clear argument organisation and concise academic writing."] },
            ]}
            nextSteps={[
                { title: "GRE Overview", href: "/exams/gre/overview" },
                { title: "GRE Registration", href: "/exams/gre/registration" },
                { title: "GRE Slot Booking", href: "/exams/gre/slot-booking" },
            ]}
        />
    );
}
