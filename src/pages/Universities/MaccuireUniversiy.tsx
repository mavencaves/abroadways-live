import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import MaccuireUniversityInfo from "@/components/universities/MaccuireUniversityInfo";

const categories = [
    {
        id: "city-value",
        name: "City value",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Sydney-based", description: "A strong option for students who want academic study inside a major Australian city." }],
    },
    {
        id: "career-focus",
        name: "Career focus",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Practical", description: "Often considered for employability-oriented courses and practical postgraduate planning." }],
    },
    {
        id: "student-fit",
        name: "Student fit",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Balanced", description: "Suitable for students comparing cost, city access, and recognised Australian pathways." }],
    },
];

const highlights = [
    { title: "Location", text: "Sydney student environment" },
    { title: "Academic tone", text: "Modern and practical" },
    { title: "Popular for", text: "Business and technology" },
    { title: "Planning style", text: "Career-oriented" },
];

const courses = [
    { name: "Accounting", count: "1", active: true },
    { name: "Biology", count: "1" },
    { name: "Finance", count: "1" },
    { name: "Biotechnology", count: "1" },
    { name: "Fine Arts", count: "1" },
];

const intakes = [
    { date: "JAN 2026", status: "Applications Open" },
    { date: "JUL 2026", status: "Applications Open" },
];

export default function MaccuireUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/mcq.jpg"
            name="Macquarie University"
            location="Sydney, Australia"
            logo="/logo/macq.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="Core planning details for students exploring Macquarie as an Australia destination option."
                    cards={highlights}
                />
                <MaccuireUniversityInfo />
                <TopCoursesSection courses={courses} mscCourseName="Master of Applied Finance" mscDuration="18 months" />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Academic transcripts and course-relevant background" },
                        { label: "English proficiency and application readiness" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
