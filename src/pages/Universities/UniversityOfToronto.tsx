import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";

const TorontoUniversityInfo = () => {
    return (
        <section className="mx-auto rounded-2xl bg-white p-10 shadow-md">
            <h2 className="mb-6 text-3xl font-bold">About the University of Toronto</h2>
            <p className="mb-4 leading-relaxed text-gray-800">
                The University of Toronto is one of Canada&apos;s most recognised institutions, known for research
                strength, strong academic standards, and wide international student demand.
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                Students often shortlist Toronto for engineering, business, computer science, health sciences, and
                postgraduate pathways that benefit from strong global visibility.
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                Its city location, large academic ecosystem, and strong graduate outcomes make it especially attractive
                for students who want both institutional prestige and broad subject choice.
            </p>
            <p className="mb-0 leading-relaxed text-gray-800">
                Abroadways treats Toronto as a premium Canada destination where profile quality, budget readiness, and
                thoughtful shortlisting matter from the very beginning.
            </p>
        </section>
    );
};

const categories = [
    {
        id: "canada-prestige",
        name: "Canada prestige",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Top choice", description: "Often viewed as a leading Canada option for high-performing international students." }],
    },
    {
        id: "research",
        name: "Research environment",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Research-led", description: "Strong for students interested in advanced academics, innovation, and postgraduate study." }],
    },
    {
        id: "student-fit",
        name: "Student fit",
        icon: <Star className="h-6 w-6 text-blue-700" />,
        items: [{ rank: "Premium Canada route", description: "Well suited to students balancing reputation, quality, and long-term study outcomes." }],
    },
];

const highlights = [
    { title: "Destination value", text: "Premium Canada option" },
    { title: "Academic tone", text: "Research-intensive" },
    { title: "Student environment", text: "Large and international" },
    { title: "Planning approach", text: "Competitive but structured" },
];

const courses = [
    { name: "Aerospace Engineering", count: "1", active: true },
    { name: "Biomedical Engineering", count: "1" },
    { name: "Banking and Finance", count: "1" },
    { name: "Architecture", count: "1" },
    { name: "Business Administration", count: "1" },
];

const intakes = [
    { date: "JAN 2026", status: "Applications Open" },
    { date: "MAY 2026", status: "Applications Open" },
    { date: "SEP 2026", status: "Applications Open" },
];

export default function UniversityOfToronto() {
    return (
        <UniversityLayout
            backgroundUrl="/images/toronto.jpg"
            name="University of Toronto"
            location="Toronto, Canada"
            logo="/logo/toronto.png"
        >
            <div className="mx-auto flex flex-col gap-10">
                <HighlightSection
                    mainTitle="Key study snapshot"
                    mainText="Core planning details for students comparing Toronto as a high-value Canada destination."
                    cards={highlights}
                />
                <TorontoUniversityInfo />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="Master of Applied Science in Aerospace Engineering"
                    mscDuration="20 months"
                />
                <IntakeSection intakes={intakes} />
                <EligibilityConditionSection
                    conditions={[
                        { label: "Academic transcripts and destination-fit course planning" },
                        { label: "English proficiency and complete supporting documents" },
                    ]}
                />
                <RankingSection categories={categories} />
            </div>
        </UniversityLayout>
    );
}
