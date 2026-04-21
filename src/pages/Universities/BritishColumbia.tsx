import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";

const categories = [
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫"},
        ]
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৩৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "৩৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "৪৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "৪৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
            { rank: "৪৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২১" },
        ],
    },
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
    {
        id: "webometrics_national",
        name: "ওয়েবোমেট্রিক্স - ন্যাশনাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৯০৮"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "৬৭০০০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১৮৮০০"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১৮:১"},
    {title: "গৃহীত হার", text: "৫২%"},
    {title: "স্বীকৃতি", text: "অ্যাসোসিয়েশন অফ ইউনিভার্সিটিজ অ্যান্ড কলেজেস অফ কানাডা (AUCC)"},
    {title: "গড় পড়াশোনার খরচ", text: "BDT ৭ লক্ষ"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ৩ লক্ষ"},
]

const courses = [
    {name: "হিসাববিজ্ঞান", count: "১", active: true},
    {name: "বায়োলজিক্যাল ইঞ্জিনিয়ারিং", count: "২"},
    {name: "আর্টস / ফাইন আর্ট", count: "১"},
    {name: "আর্কিটেকচার", count: "১"},
    {name: "জীববিজ্ঞান", count: "২"},
]

const intakes = [
    {date: "JAN'2026", status: "ভর্তি চলছে"},
    {date: "MAR'2026", status: "ভর্তি চলছে"},
    {date: "MAY'2026", status: "ভর্তি চলছে"},
    {date: "AUG'2026", status: "ভর্তি চলছে"},
    {date: "SEP'2026", status: "ভর্তি চলছে"},
]

export default function UniversityOfBritishColumbia() {
    return (
        <UniversityLayout
            backgroundUrl="/images/british-columbia-university.webp"
            name="ইউনিভার্সিটি অব ব্রিটিশ কলম্বিয়া"
            location="ভ্যাঙ্কুভার, কানাডা"
            logo="/images/icons/ubc.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="কানাডায় পড়াশোনা সম্পর্কিত মূল বিবরণ"
                    cards={highlights}
                />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="ডিপ্লোমা ইন অ্যাকাউন্টিং"
                    mscDuration="১৬ মাস"
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
