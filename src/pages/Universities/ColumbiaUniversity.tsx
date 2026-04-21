import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import ColumbiaUniversityInfo from "@/components/universities/ColumbiaUniversityInfo.tsx";

const categories = [
    {
        id: "qs",
        name: "QS World University Rankings",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Global prestige", description: "Recognised internationally for academic visibility and strong postgraduate demand." }],
    },
    {
        id: "research",
        name: "Research profile",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "High impact", description: "A strong option for students targeting research depth and a major global city environment." }],
    },
    {
        id: "admissions",
        name: "Admissions profile",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Selective", description: "Best approached with careful planning around tests, essays, and overall profile strength." }],
    },
];

const highlights = [
    { title: "Location advantage", text: "New York City access" },
    { title: "Academic profile", text: "Research-intensive" },
    { title: "Student environment", text: "Global and competitive" },
    { title: "Planning intensity", text: "High" },
];

const courses = [
    { name: "Finance", count: "1", active: true },
    { name: "Biomedical Engineering", count: "1" },
    { name: "Civil Engineering", count: "1" },
    { name: "Computer Science", count: "1" },
    { name: "Business Administration", count: "1" },
];

const intakes = [
    { date: "JAN 2026", status: "Applications Open" },
    { date: "AUG 2026", status: "Applications Open" },
    { date: "SEP 2026", status: "Applications Open" },
];

export default function ColumbiaUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/columbia.jpg"
            name="Columbia University"
            location="New York City, New York, United States"
            logo="/logo/columbia.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="Core planning signals for students exploring Columbia as a premium US destination."
                    cards={highlights}
                />
                <ColumbiaUniversityInfo />
                <TopCoursesSection courses={courses} mscCourseName="MS in Finance" mscDuration="18 months" />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Strong academic profile and supporting documents" },
                        { label: "English language proficiency and application readiness" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
