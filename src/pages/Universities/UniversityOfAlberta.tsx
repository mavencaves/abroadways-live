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
            { rank: "৯৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "৯৬ – ১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "১১০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "১২৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "webometrics_national",
        name: "ওয়েবোমেট্রিক্স - ন্যাশনাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
    {
        id: "times_higher_ranking",
        name: "টাইমস হায়ার র‌্যাঙ্কিং",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৯০৮"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "৩৮০০০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "৭২০০"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "২০:১"},
    {title: "গৃহীত হার", text: "৫০%"},
    {title: "স্বীকৃতি", text: "অ্যাসোসিয়েশন টু অ্যাডভান্স কলিজিয়েট স্কুলস অফ বিজনেস (AACSB)"},
    {title: "গড় পড়াশোনার খরচ", text: "BDT ৬ লক্ষ"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ৪ লক্ষ"},
]

const courses = [
    {name: "হিসাববিজ্ঞান", count: "২", active: true},
    {name: "অ্যানিমেল হাসব্যান্ড্রি", count: "১"},
    {name: "নৃবিজ্ঞান", count: "৩"},
    {name: "অ্যানিমেল অ্যান্ড ভেটেরিনারি স্টাডিজ", count: "১"},
    {name: "প্রত্নতত্ত্ব", count: "১"},
]

const intakes = [
    {date: "JAN'2026", status: "ভর্তি চলছে"},
    {date: "MAR'2026", status: "ভর্তি চলছে"},
    {date: "APR'2026", status: "ভর্তি চলছে"},
    {date: "MAY'2026", status: "ভর্তি চলছে"},
    {date: "JUL'2026", status: "ভর্তি চলছে"},
    {date: "SEP'2026", status: "ভর্তি চলছে"},
    {date: "OCT'2026", status: "ভর্তি চলছে"},
    {date: "NOV'2026", status: "ভর্তি চলছে"},
]

export default function UniversityOfAlberta() {
    return (
        <UniversityLayout
            backgroundUrl="/images/alberta.jpg"
            name="আলবার্টা বিশ্ববিদ্যালয়"
            location="এডমন্টন, কানাডা"
            logo="/images/icons/alberta.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="কানাডায় পড়াশোনা সম্পর্কিত মূল বিবরণ"
                    cards={highlights}
                />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="ব্যাচেলর অফ কমার্স ইন অ্যাকাউন্টিং"
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
