import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import QueenslandUniversityInfo from "@/components/universities/QueenslandUniversityInfo";

const categories = [
    {
        id: "research",
        name: "Research reputation",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Strong", description: "Recognised as a solid Australian university for research, science, and applied study pathways." }],
    },
    {
        id: "student-demand",
        name: "Student demand",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Growing", description: "Shortlisted by students comparing quality education with a strong Brisbane destination experience." }],
    },
    {
        id: "fit",
        name: "Best fit",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Balanced", description: "Works well for students balancing quality, city lifestyle, and long-term study planning." }],
    },
];

const highlights = [
    { title: "City environment", text: "Brisbane-based campus life" },
    { title: "Academic reputation", text: "Research-oriented" },
    { title: "Popular areas", text: "Business, engineering, health" },
    { title: "Study planning", text: "Quality with balance" },
];

const courses = [
    { name: "Accounting", count: "1", active: true },
    { name: "Advertising", count: "1" },
    { name: "Aerospace Engineering", count: "1" },
    { name: "Animal and Veterinary Studies", count: "1" },
    { name: "Neuroscience", count: "1" },
];

const intakes = [{ date: "JUL 2026", status: "Applications Open" }];

export default function QueenslandUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/queensland.jpeg"
            name="The University of Queensland"
            location="Brisbane, Queensland, Australia"
            logo="/logo/queens.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="Important planning details for students comparing Queensland within their Australia study shortlist."
                    cards={highlights}
                />
                <QueenslandUniversityInfo />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="Master of Commerce in Professional Accounting"
                    mscDuration="24 months"
                />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Academic transcripts and course-specific preparation" },
                        { label: "English proficiency and complete supporting documents" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
