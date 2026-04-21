import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";

const categories = [
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৬০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "২৬৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২৯", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "৩০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "৩১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "২৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
            { rank: "৩৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২০" },
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "৪২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২০"},
        ]
    },
    {
        id: "webometrics_national",
        name: "ওয়েবোমেট্রিক্স - ন্যাশনাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
    {
        id: "times_higher_ranking",
        name: "টাইমস হায়ার র‌্যাঙ্কিং",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৮২১"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "৩৯২৬৭"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "৯৯৯৯"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১৫:১"},
    {title: "গৃহীত হার", text: "৫২%"},
    {title: "স্বীকৃতি", text: "অ্যাসোসিয়েশন অফ ইউনিভার্সিটিজ অ্যান্ড কলেজেস অফ কানাডা (AUCC)"},
    {title: "গড় পড়াশোনার খরচ", text: "BDT ৬ লক্ষ"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ২ লক্ষ"},
]

const courses = [
    {name: "এরোস্পেস ইঞ্জিনিয়ারিং", count: "১", active: true},
    {name: "বায়োটেকনোলজি", count: "১"},
    {name: "ব্যাংকিং ও ফাইনান্স", count: "১"},
    {name: "আর্কিটেকচার", count: "১"},
    {name: "জীববিজ্ঞান", count: "১"},
]

const intakes = [
    {date: "JAN'2026", status: "ভর্তি চলছে"},
    {date: "MAR'2026", status: "ভর্তি চলছে"},
    {date: "MAY'2026", status: "ভর্তি চলছে"},
    {date: "AUG'2026", status: "ভর্তি চলছে"},
    {date: "SEP'2026", status: "ভর্তি চলছে"},
]

export default function McGillUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/mcgill.jpg"
            name="ম্যাকগিল বিশ্ববিদ্যালয়"
            location="মন্ট্রিয়াল, কানাডা"
            logo="/images/icons/mcgill.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="কানাডায় পড়াশোনা সম্পর্কিত মূল বিবরণ"
                    cards={highlights}
                />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="এমইঞ্জ ইন এরোস্পেস ইঞ্জিনিয়ারিং"
                    mscDuration="২৪ মাস"
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
