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
            {rank: "৩৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩"},
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "২৯", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩"},
            {rank: "৩০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২০"},
        ]
    },
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৪৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "২৭ – ১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "১৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "১৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
            { rank: "২০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২০" },
        ],
    },
    {
        id: "complete_university",
        name: "কমপ্লিট ইউনিভার্সিটি গাইড",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১৫ – ১৫০০", description: "সেরা জাতীয় স্কুলসমূহে – ২০২৪" },
        ],
    },
    {
        id: "guardian_global",
        name: "গার্ডিয়ান গ্লোবাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১৫", description: "সেরা জাতীয় স্কুলসমূহে  – ২০২৫" },
            { rank: "১৪", description: "সেরা জাতীয় স্কুলসমূহে – ২০২৪" },
            { rank: "১২", description: "সেরা জাতীয় স্কুলসমূহে – ২০২৩" },
            { rank: "১২", description: "সেরা জাতীয় স্কুলসমূহে – ২০২২" },
        ],
    },
]

const highlights = [
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "৪৪০০০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১৯০০০"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১৬:১"},
    {title: "গৃহীত হার", text: "৪০%"},
    {title: "স্বীকৃতি", text: "এসোসিয়েশন টু অ্যাডভান্স কলেজিয়েট স্কুলস অফ বিজনেস (AACSB)"},
    {title: "গড় পড়াশোনার খরচ", text: "BDT ৮ লক্ষ"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ৪ লক্ষ"},
]

const courses = [
    {name: "হিসাববিজ্ঞান", count: "৬", active: true},
    {name: "অ্যানিমেশন", count: "২"},
    {name: "নৃবিজ্ঞান", count: "২"},
    {name: "প্রাণী ও ভেটেরিনারি স্টাডিজ", count: "৪"},
    {name: "প্রত্নতত্ত্ব", count: "১৬"},
]

const intakes = [
    {date: "APR'2026", status: "ভর্তি চলছে"},
    {date: "SEP'2026", status: "ভর্তি চলছে"},
    {date: "OCT'2026", status: "ভর্তি চলছে"},
]

export default function UniversityOfEdinburgh() {
    return (
        <UniversityLayout
            backgroundUrl="/images/edinburgh.jpg"
            name="এডিনবার্গ বিশ্ববিদ্যালয়"
            location="এডিনবার্গ, যুক্তরাজ্য"
            logo="/logo/edinburgh.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাজ্যে পড়াশোনা সংক্রান্ত মূল বিবরণগুলো এখানে দেওয়া হলো"
                    cards={highlights}
                />
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="এলএলবি (অনার্স) ইন ল' এবং অ্যাকাউন্টেন্সি"
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
