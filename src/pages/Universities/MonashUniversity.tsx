import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import MonashUniversityInfo from "@/components/universities/MonashUniversityInfo";

const categories = [
    {
        id: "australia-profile",
        name: "Australia profile",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Premium route", description: "Frequently considered by students looking for a recognised Australian university experience." }],
    },
    {
        id: "academic-range",
        name: "Academic range",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Broad pathways", description: "Known for strong options in business, health, engineering, and technology." }],
    },
    {
        id: "student-fit",
        name: "Student fit",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "International", description: "Attractive to students looking for a strong global student environment and practical progression." }],
    },
];

const highlights = [
    { title: "Study style", text: "Career-focused and international" },
    { title: "Destination value", text: "Premium Australia option" },
    { title: "Student environment", text: "Multi-campus experience" },
    { title: "Planning approach", text: "Profile and budget balanced" },
];

const courses = [
    { name: "Business and Finance", count: "1", active: true },
    { name: "Computer Science", count: "1" },
    { name: "Engineering", count: "1" },
    { name: "Public Health", count: "1" },
    { name: "Data Analytics", count: "1" },
];

const intakes = [
    { date: "FEB 2026", status: "Applications Open" },
    { date: "JUL 2026", status: "Applications Open" },
];

export default function MonashUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/monash.jpeg"
            name="Monash University"
            location="Melbourne, Australia"
            logo="/logo/monash.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="A quick overview for students comparing Monash within their Australia study plan."
                    cards={highlights}
                />
                <MonashUniversityInfo />
                <TopCoursesSection courses={courses} mscCourseName="Master of Business" mscDuration="24 months" />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Academic transcripts and destination-fit shortlist" },
                        { label: "English proficiency and complete application materials" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
