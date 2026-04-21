import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";

const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
            {rank: "৪", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৫"},
            {rank: "২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩"},
           
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩"},
            {rank: "৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২"},
           
        ]
    },
       {
        id: "webometrics",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
           
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১২০৯"},
    {title: "মোটা শিক্ষার্থীর সংখ্যা", text: "২৪২৭০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "৯৯৪৯"},

]

const courses = [
    {name: "ব্যাংকিং ও ফাইনান্স", count: "১", active: true},
   
    {name: "ব্যবসা প্রশাসন", count: "১"},
   
    {name: "দর্শন ও ধর্মীয় শিক্ষা", count: "২"},
]

const intakes = [
    {date: "JAN'2026", status: "ভর্তি চলছে"},
   
    {date: "SEP'2026", status: "ভর্তি চলছে"},
    {date: "OCT'2026", status: "ভর্তি চলছে"},
   
]

export default function CambridgeUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/cambridge.jpg"
            name="ক্যামব্রিজ বিশ্ববিদ্যালয়"
            location="ক্যামব্রিজ,যুক্তরাজ্য"
            logo="/logo/cambridge.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাষ্ট্রে পড়াশোনা সংক্রান্ত মূল তথ্য নিতে দেওয়া হলো"
                    cards={highlights}
                />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="এমএসসি ইন ফাইন্যান্স"
                    mscDuration="১৮ মাস"
                />
                <IntakeSection
                    intakes={intakes}
                />
                <EligibilityConditionSection
                    conditions={[
                        {label: "প্রয়োজনীয় পরীক্ষা"}
                    ]}
                />
                <RankingSection
                    categories={categories}
                />
            </div>
        </UniversityLayout>
    );
}