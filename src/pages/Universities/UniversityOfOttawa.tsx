import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";

const categories = [
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১৮৯", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "১৮৯ – ১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "২৩৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "২৩০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২৫২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
    {
        id: "webometrics_national",
        name: "ওয়েবোমেট্রিক্স - ন্যাশনাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
    {
        id: "times_higher_ranking",
        name: "টাইমস হায়ার র‌্যাঙ্কিং",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৮৪৮"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "৪১০০০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "৭০০০"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১৭:১"},
    {title: "গৃহীত হার", text: "৪০%"},
    {title: "স্বীকৃতি", text: "অ্যাসোসিয়েশন টু অ্যাডভান্স কলিজিয়েট স্কুলস অফ বিজনেস (AACSB)"},
    {title: "গড় পড়াশোনার খরচ", text: "BDT ৬ লক্ষ"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ৪ লক্ষ"},
]

const courses = [
    {name: "হিসাববিজ্ঞান", count: "২", active: true},
    {name: "অ্যানিমেল হাসব্যান্ড্রি", count: "২"},
    {name: "নৃবিজ্ঞান", count: "১"},
    {name: "কৃত্রিম বুদ্ধিমত্তা / মেশিন লার্নিং", count: "১"},
    {name: "আর্টস / ফাইন আর্ট", count: "৩"},
]

const intakes = [
    {date: "JAN'2026", status: "ভর্তি চলছে"},
    {date: "MAY'2026", status: "ভর্তি চলছে"},
    {date: "AUG'2026", status: "ভর্তি চলছে"},
    {date: "SEP'2026", status: "ভর্তি চলছে"},
]

export default function UniversityOfOttawa() {
    return (
        <UniversityLayout
            backgroundUrl="/images/ottawa.jpg"
            name="অটোয়া বিশ্ববিদ্যালয়"
            location="অটোয়া, কানাডা"
            logo="/images/icons/ottawa.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="কানাডায় পড়াশোনা সম্পর্কিত মূল বিবরণ"
                    cards={highlights}
                />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="বিকম (অনার্স) ইন অ্যাকাউন্টিং"
                    mscDuration="৪৮ মাস"
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
