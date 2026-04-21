import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";

// About section component for Imperial College London
const ImperialCollegeInfo = () => {
    return (
        <section className="mx-auto bg-white rounded-2xl p-10 shadow-md">
            <h2 className="text-3xl font-bold mb-6">
                ইম্পেরিয়াল কলেজ লন্ডন সম্পর্কে
            </h2>
            <p className="mb-4 leading-relaxed text-gray-800">
                ইতিহাস এবং উদ্ভাবনে সমৃদ্ধ, ইম্পেরিয়াল কলেজ লন্ডন একটি রূপান্তরমূলক শিক্ষার অভিজ্ঞতা প্রদান করে, যা ধারাবাহিকভাবে বিশ্বের শীর্ষ প্রতিষ্ঠানের মধ্যে স্থান করে নিয়েছে। ইম্পেরিয়াল কলেজ লন্ডন QS World Rankings ২০২৫-এ #2 অবস্থানে পৌঁছেছে (২০২৪-এর #6 থেকে), এবং বর্তমানে এটি যুক্তরাজ্যের অপ্রতিদ্বন্দ্বী নেতা।
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                ১৯০৭ সালে প্রতিষ্ঠিত ইম্পেরিয়ালের ইতিহাস শুরু হয় প্রিন্স আলবার্টের লন্ডনে একটি বৈজ্ঞানিক ও সাংস্কৃতিক কেন্দ্র গড়ার ভিশন দিয়ে। আজ, সেই ভিশন ইম্পেরিয়ালের জীবন্ত ক্যাম্পাসে বিকশিত হয়েছে:
            </p>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">ক্যাম্পাসসমূহ:</h3>
                <div className="ml-8 mt-2 space-y-1">
                    <li>সাউথ কেনসিংটন ক্যাম্পাস: কেন্দ্রীয় লন্ডন, যুক্তরাজ্য (মুখ্য ক্যাম্পাস)</li>
                    <li>হোয়াইট সিটি ক্যাম্পাস: পশ্চিম লন্ডন, যুক্তরাজ্য</li>
                    <li>হ্যামারসমিথ ক্যাম্পাস: পশ্চিম লন্ডন, যুক্তরাজ্য</li>
                    <li>চারিং ক্রস ক্যাম্পাস: হ্যামারসমিথ, পশ্চিম লন্ডন, যুক্তরাজ্য</li>
                    <li>সেন্ট মেরিজ ক্যাম্পাস: প্যাডিংটন, কেন্দ্রীয় লন্ডন, যুক্তরাজ্য</li>
                    <li>সিলউড পার্ক ক্যাম্পাস: অ্যাসকট, বার্কশায়ার, যুক্তরাজ্য</li>
                </div>
            </div>

            <p className="mb-4 leading-relaxed text-gray-800">
                ইম্পেরিয়ালের প্রায় ৬০%-এর বেশি ছাত্র-ছাত্রী ১৪০টিরও বেশি দেশ থেকে আগত, যা একটি সমৃদ্ধ চিন্তাভাবনা ও দৃষ্টিভঙ্গির বিনিময়কে উৎসাহিত করে। ইম্পেরিয়ালের মোট ছাত্রসংখ্যা প্রায় ২৪,০০০ এবং কর্মচারী সংখ্যা প্রায় ৮,০০০।
            </p>
        </section>
    );
}

// Custom intake section for Imperial College London
const ImperialIntakeSection = () => {
    return (
        <section className="mx-auto bg-white rounded-2xl p-10 shadow-md">
            <h2 className="text-3xl font-bold mb-6">
                ভর্তি গ্রহণ ও আবেদন শেষ তারিখ
            </h2>
            <p className="mb-4 leading-relaxed text-gray-800">
                ইম্পেরিয়াল কলেজ লন্ডন আপনাকে আপনার ভবিষ্যত শুরু করার সুযোগ দেয় যখনই আপনি প্রস্তুত! তারা বছরে তিনটি ইন্টেক অফার করে, যা আপনাকে সর্বোচ্চ নমনীয়তা দেয়।
            </p>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">ইন্টেকের বিভাজন:</h3>
            </div>

            <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-900">সেপ্টেম্বর (শরৎ সেমেস্টার):</h4>
                <p className="ml-4 text-gray-800 leading-relaxed">
                    এটি শুরু করার সবচেয়ে জনপ্রিয় সময়, বিশ্ববিদ্যালয়ের জন্য "অফিসিয়াল প্রথম দিন"ের মতো। একই সময়ে নতুন শিক্ষার্থীদের সাথে পরিচিত হওয়ার জন্য এটি একটি চমৎকার সুযোগ। ভাবুন এটি একটি বড় গ্রুপ প্রজেক্টের মতো যেখানে সবাই নতুন এবং উচ্ছ্বসিত!
                </p>
            </div>

            <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-900">জানুয়ারি (শীতকালীন সেমেস্টার):</h4>
                <p className="ml-4 text-gray-800 leading-relaxed">
                    হয়তো আপনি আগে একটি কোর্স শেষ করেছেন বা শুরু করতে অধৈর্যতা বোধ করছেন – কোনো সমস্যা নেই! জানুয়ারি ইন্টেক আপনাকে বছরের মাঝামাঝি শুরু করার সুযোগ দেয়। এটি এমন একটি নতুন ক্লাবের মতো যেখানে সবাই প্রথম প্রজেক্টের মধ্যভাগে আছে, কিন্তু আপনাকে স্বাগত জানানোর জন্য তারা এখনও খুশি।
                </p>
            </div>

            <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-900">মে (গ্রীষ্মকালীন সেমেস্টার): (সব প্রোগ্রামে নেই)</h4>
                <p className="ml-4 text-gray-800 leading-relaxed">
                    এটি কিছু প্রোগ্রামের জন্য একটি ছোট, আরও ফোকাসড বিকল্প। ভাবুন এটি সুপার-স্মার্ট শিক্ষার্থীদের জন্য গ্রীষ্মকালীন ক্যাম্পের মতো – আপনি একটি নির্দিষ্ট বিষয়ের গভীরে প্রবেশ করবেন এবং পরবর্তী সেমেস্টার শুরু হওয়ার আগে কিছু ক্রেডিট অর্জন করবেন।
                </p>
            </div>

            <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="font-semibold text-blue-900">SEP'2026</span>
                            <span className="ml-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">ভর্তি চলছে</span>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="font-semibold text-blue-900">OCT'2026</span>
                            <span className="ml-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">ভর্তি চলছে</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
            {rank: "১৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩"},
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "১০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩"},
            {rank: "১২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২১"},
        ]
    },
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৩৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "guardian_global",
        name: "গার্ডিয়ান গ্লোবাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৫", description: "সেরা জাতীয় স্কুলসমূহে  – ২০২৫" },
            { rank: "৫", description: "সেরা জাতীয় স্কুলসমূহে – ২০২৪" },
            { rank: "৫", description: "সেরা জাতীয় স্কুলসমূহে – ২০২৩" },
            { rank: "৭", description: "সেরা জাতীয় স্কুলসমূহে – ২০২২" },
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৯০৭"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "১৭০০০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১০১৯৯"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "২৩:৮"},
    {title: "গৃহীত হার", text: "১৪.৩%"},
    {title: "স্বীকৃতি", text: "AACSB"},
    {title: "গড় পড়াশোনার খরচ", text: "BDT ৮৫ লক্ষ"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ৩ লক্ষ"},
]

const courses = [
    {name: "হিসাববিজ্ঞান", count: "১", active: true},
    {name: "ব্যাংকিং ও ফাইনান্স", count: "৩"},
    {name: "জীবরসায়ন", count: "১"},
    {name: "কৃত্রিম বুদ্ধিমত্তা / মেশিন লার্নিং", count: "১"},
    {name: "এয়ারস্পেস ইঞ্জিনিয়ারিং", count: "২"},
]


export default function ImperialCollegeLondon() {
    return (
        <UniversityLayout
            backgroundUrl="/images/imperial-college.jpg"
            name="ইম্পেরিয়াল কলেজ লন্ডন"
            location="লন্ডন, যুক্তরাজ্য"
            logo="/logo/imperial-college.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাজ্যে পড়াশোনা সংক্রান্ত মূল বিবরণগুলো এখানে দেওয়া হলো"
                    cards={highlights}
                />

                <ImperialCollegeInfo />

                <TopCoursesSection
                    courses={courses}
                    mscCourseName="এমএসসি ইন ফাইন্যান্স ও অ্যাকাউন্টিং"
                    mscDuration="১২ মাস"
                />

                <ImperialIntakeSection />

                <EligibilityConditionSection
                    conditions={[
                        {label: "প্রয়োজনীয় পরীক্ষা"},
                        {label: "অতিরিক্ত প্রয়োজনীয়তা"}
                    ]}
                />
                <RankingSection
                    categories={categories}
                />
            </div>
        </UniversityLayout>
    );
}
