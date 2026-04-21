import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import SydneyUniversityInfo from "@/components/universities/SydneyUniversityInfo";

const categories = [
    {
        id: "prestige",
        name: "Prestige profile",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Recognised", description: "A well-known Australian university with strong international academic visibility." }],
    },
    {
        id: "course-breadth",
        name: "Course breadth",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Wide range", description: "Popular across business, engineering, health sciences, and postgraduate pathways." }],
    },
    {
        id: "city-value",
        name: "City value",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Strong appeal", description: "A premium option for students who want a major city experience alongside study." }],
    },
];

const highlights = [
    { title: "Destination type", text: "Premium Sydney campus" },
    { title: "Student environment", text: "International and high-demand" },
    { title: "Academic tone", text: "Prestige with breadth" },
    { title: "Planning style", text: "Premium route" },
];

const courses = [
    { name: "Accounting", count: "1", active: true },
    { name: "Advertising", count: "1" },
    { name: "Aerospace Engineering", count: "1" },
    { name: "Animal and Veterinary Studies", count: "1" },
    { name: "Neuroscience", count: "1" },
];

const intakes = [
    { date: "JAN 2026", status: "Applications Open" },
    { date: "JUL 2026", status: "Applications Open" },
    { date: "SEP 2026", status: "Applications Open" },
];

export default function SydneyUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/sydney.jpeg"
            name="The University of Sydney"
            location="Sydney, New South Wales, Australia"
            logo="/logo/sydney.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="A quick overview for students comparing Sydney as part of a premium Australia application plan."
                    cards={highlights}
                />
                <SydneyUniversityInfo />
                <TopCoursesSection courses={courses} mscCourseName="Master of Finance" mscDuration="18 months" />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Academic transcripts and destination-fit shortlist" },
                        { label: "English proficiency and complete supporting documents" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
