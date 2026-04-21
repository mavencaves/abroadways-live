import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import MelbourneUniversityInfo from "@/components/universities/MelbourneUniversityInfo";

const categories = [
    {
        id: "australia-prestige",
        name: "Australia prestige",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Premium", description: "Frequently regarded as a top-choice Australian university in global student shortlists." }],
    },
    {
        id: "course-strength",
        name: "Course strength",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Broad and strong", description: "Known for high-demand pathways across finance, business, health, engineering, and research." }],
    },
    {
        id: "student-fit",
        name: "Student fit",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "High ambition", description: "Best for students seeking a premium Australia route with strong global recognition." }],
    },
];

const highlights = [
    { title: "Destination type", text: "Prestige-focused university" },
    { title: "Student environment", text: "Global and urban" },
    { title: "Academic tone", text: "Research and reputation-led" },
    { title: "Planning priority", text: "Profile and funding" },
];

const courses = [
    { name: "Accounting", count: "1", active: true },
    { name: "Biology", count: "1" },
    { name: "Finance", count: "1" },
    { name: "Biotechnology", count: "1" },
    { name: "Fine Arts", count: "1" },
];

const intakes = [
    { date: "FEB 2026", status: "Applications Open" },
    { date: "JUL 2026", status: "Applications Open" },
];

export default function MelbourneUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/melboune.jpg"
            name="The University of Melbourne"
            location="Melbourne, Victoria, Australia"
            logo="/logo/melbourne.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="A quick overview for students considering Melbourne as a premium Australia study destination."
                    cards={highlights}
                />
                <MelbourneUniversityInfo />
                <TopCoursesSection courses={courses} mscCourseName="Master of Finance" mscDuration="18 months" />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Strong academic record and destination-fit planning" },
                        { label: "English language proficiency and full application documents" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
