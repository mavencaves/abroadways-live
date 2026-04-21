import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import YaleUniversityInfo from "@/components/universities/YaleUniversityInfo.tsx";

const categories = [
    {
        id: "global-prestige",
        name: "Global prestige",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Elite", description: "Widely associated with academic prestige, selective admissions, and high-value graduate outcomes." }],
    },
    {
        id: "academic-profile",
        name: "Academic profile",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Research and scholarship", description: "Strong for students seeking a rigorous and intellectually demanding US environment." }],
    },
    {
        id: "student-fit",
        name: "Best fit",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Highly selective", description: "Best approached by students with strong profiles, strong preparation, and ambitious goals." }],
    },
];

const highlights = [
    { title: "Institution type", text: "Ivy League university" },
    { title: "Academic tone", text: "Prestige and scholarship-led" },
    { title: "Student environment", text: "Selective and global" },
    { title: "Planning intensity", text: "High" },
];

const courses = [
    { name: "Law", count: "1", active: true },
    { name: "Business Administration", count: "1" },
    { name: "Environmental Studies", count: "1" },
    { name: "Political Science", count: "1" },
    { name: "Engineering", count: "1" },
];

const intakes = [
    { date: "AUG 2026", status: "Applications Open" },
    { date: "SEP 2026", status: "Applications Open" },
];

export default function YaleUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/yale.jpg"
            name="Yale University"
            location="New Haven, Connecticut, United States"
            logo="/logo/yale.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="Important planning details for students considering Yale as a premium and highly competitive US destination."
                    cards={highlights}
                />
                <YaleUniversityInfo />
                <TopCoursesSection courses={courses} mscCourseName="Master of Environmental Management" mscDuration="24 months" />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Outstanding academic background and strong supporting documents" },
                        { label: "English proficiency and selective application readiness" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
