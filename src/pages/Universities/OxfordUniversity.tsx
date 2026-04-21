import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import OxfordUniversityInfo from "@/components/universities/OxfordUniversityInfo";

const categories = [
    {
        id: "qs",
        name: "QS World University Rankings",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Global recognition", description: "Consistently associated with top-tier academic reputation and highly selective admissions." }],
    },
    {
        id: "times",
        name: "Times Higher Education",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Research-led", description: "Widely regarded for teaching quality, research impact, and international academic prestige." }],
    },
    {
        id: "student-demand",
        name: "Student demand",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Highly selective", description: "Best suited to students building an ambitious and academically strong UK application strategy." }],
    },
];

const highlights = [
    { title: "Institution type", text: "Historic collegiate university" },
    { title: "Learning style", text: "Tutorial-led and research-focused" },
    { title: "International appeal", text: "Global student demand" },
    { title: "Application profile", text: "Very competitive" },
];

const courses = [
    { name: "Law", count: "1", active: true },
    { name: "Economics", count: "1" },
    { name: "Public Policy", count: "1" },
    { name: "Computer Science", count: "1" },
    { name: "Business and Finance", count: "1" },
];

const intakes = [
    { date: "MAY 2026", status: "Applications Open" },
    { date: "JUN 2026", status: "Applications Open" },
    { date: "SEP 2026", status: "Applications Open" },
];

export default function OxfordUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/westminster.jpg"
            name="University of Oxford"
            location="Oxford, England, United Kingdom"
            logo="/logo/oxford"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="Important planning signals for students considering Oxford as a premium UK study destination."
                    cards={highlights}
                />
                <OxfordUniversityInfo />
                <TopCoursesSection courses={courses} mscCourseName="MSc in Financial Economics" mscDuration="12 months" />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Strong academic transcripts and competitive profile" },
                        { label: "English language proficiency requirements" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
