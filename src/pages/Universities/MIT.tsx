import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import MITinfo from "@/components/universities/MITinfo";

const categories = [
    {
        id: "innovation",
        name: "Innovation profile",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Top tier", description: "Known globally for science, technology, engineering, and advanced research." }],
    },
    {
        id: "research",
        name: "Research reputation",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Elite", description: "A highly selective route for students targeting world-class research environments." }],
    },
    {
        id: "student-fit",
        name: "Application fit",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Exceptional profile", description: "Best suited to students with very strong academic preparation and ambitious goals." }],
    },
];

const highlights = [
    { title: "Institution type", text: "Technology and research leader" },
    { title: "Academic strength", text: "Highly specialised" },
    { title: "Global appeal", text: "Extremely competitive" },
    { title: "Best for", text: "STEM-focused applicants" },
];

const courses = [
    { name: "Architecture", count: "1", active: true },
    { name: "Aerospace Engineering", count: "1" },
    { name: "Computer Science", count: "1" },
    { name: "Data Science", count: "1" },
    { name: "Artificial Intelligence", count: "1" },
];

const intakes = [
    { date: "JAN 2026", status: "Applications Open" },
    { date: "SEP 2026", status: "Applications Open" },
];

export default function MIT() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/mit.jpeg"
            name="Massachusetts Institute of Technology"
            location="Cambridge, Massachusetts, United States"
            logo="/logo/mit.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="Important planning signals for students considering MIT as an advanced US study and research destination."
                    cards={highlights}
                />
                <MITinfo />
                <TopCoursesSection courses={courses} mscCourseName="MS in Computer Science" mscDuration="24 months" />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Outstanding academic record and strong subject preparation" },
                        { label: "English proficiency and highly competitive application materials" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
