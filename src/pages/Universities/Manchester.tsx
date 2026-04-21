import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import ManchesterUniversityInfo from "@/components/universities/ManchesterUniversityInfo.tsx";

const categories = [
    {
        id: "uk-reputation",
        name: "UK reputation",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Well established", description: "Frequently shortlisted by students looking for a recognised UK research university." }],
    },
    {
        id: "global-profile",
        name: "Global profile",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Research visibility", description: "Known for strong subject depth across business, engineering, health, and social sciences." }],
    },
    {
        id: "student-fit",
        name: "Student fit",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Balanced choice", description: "Suitable for students comparing reputation, city life, and broader subject availability." }],
    },
];

const highlights = [
    { title: "Destination type", text: "Major UK city university" },
    { title: "Academic style", text: "Research-led and broad" },
    { title: "International demand", text: "Strong" },
    { title: "Student planning", text: "Structured and practical" },
];

const courses = [
    { name: "Accounting", count: "1", active: true },
    { name: "Aerospace Engineering", count: "1" },
    { name: "Anthropology", count: "1" },
    { name: "Archaeology", count: "1" },
    { name: "Architecture", count: "1" },
];

const intakes = [
    { date: "FEB 2026", status: "Applications Open" },
    { date: "AUG 2026", status: "Applications Open" },
];

export default function UniversityOfManchester() {
    return (
        <UniversityLayout
            backgroundUrl="/images/manchester.jpg"
            name="The University of Manchester"
            location="Manchester, United Kingdom"
            logo="/logo/manchester.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="Core details for students comparing Manchester within their UK study abroad shortlist."
                    cards={highlights}
                />
                <ManchesterUniversityInfo />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="BSc in Management (Accounting and Finance)"
                    mscDuration="36 months"
                />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Academic transcripts and subject-relevant background" },
                        { label: "English language proficiency and supporting documents" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
