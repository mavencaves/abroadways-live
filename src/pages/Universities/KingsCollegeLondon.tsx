import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";

// About section component for King's College London
const KingsCollegeInfo = () => {
    return (
        <section className="mx-auto bg-white rounded-2xl p-10 shadow-md">
            <h2 className="text-3xl font-bold mb-6">
                কিংস কলেজ লন্ডন সম্পর্কে
            </h2>
            <p className="mb-4 leading-relaxed text-gray-800">
                ১৯০ বছরেরও বেশি সমৃদ্ধ ইতিহাসের সঙ্গে সংহত, কিংস কলেজ লন্ডন কেবল শেখার একটি স্থান নয়—এটি বিশ্বব্যাপী প্রভাব সৃষ্টির জন্য একটি লঞ্চপ্যাড।
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                ১৮২৯ সালে কিং জর্জ চতুর্থ এবং ডিউক অব ওয়েলিংটনের পৃষ্ঠপোষকতায় রয়্যাল চার্টারের মাধ্যমে প্রতিষ্ঠিত। অত্যাধুনিক গবেষণা এবং রূপান্তরমূলক শিক্ষার জন্য খ্যাত, কিংস কলেজ লন্ডন ধারাবাহিকভাবে বিশ্বের সেরা বিশ্ববিদ্যালয়গুলোর মধ্যে অবস্থান করে।
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                কিংসের বহু ক্যাম্পাস রয়েছে, যা শহরের বিভিন্ন কৌশলগত স্থানে অবস্থিত, যা আপনাকে সবকিছুর কেন্দ্রে রাখে।
                <div className="ml-8 mt-2">
                    <li>স্ট্র্যান্ড ক্যাম্পাস (সেন্ট্রাল লন্ডন)</li>
                    <li>গাই'স ক্যাম্পাস (সাউথওয়ার্ক)</li>
                    <li>সেন্ট থমাস' ক্যাম্পাস (সাউথওয়ার্ক)</li>
                    <li>ওয়াটারলু ক্যাম্পাস (ল্যামবেথ)</li>
                    <li>ডেনমার্ক হিল ক্যাম্পাস (সাউথ লন্ডন)</li>
                    <li>ওয়েস্টন এডুকেশন সেন্টার (ডেনমার্ক হিল)</li>
                    <li>সিলউড পার্ক ক্যাম্পাস (অ্যাসকট, বার্কশায়ার)</li>
                </div>
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                ভাবুন তো, ১৯০+ দেশের প্রায় ৩৩,০০০ শিক্ষার্থী সমৃদ্ধ একটি প্রাণবন্ত কমিউনিটি! এটাই সেই গ্লোবাল ফ্যামিলি, যার অংশ হবেন আপনি কিংস কলেজ লন্ডনে। তবে সবচেয়ে বড় দিক হলো—এই খ্যাতনামা নেটওয়ার্ক কেবল সহপাঠী পর্যন্ত সীমাবদ্ধ নয়।
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                কিংসের বিশ্বের ২৫০,০০০+ সফল অ্যালামনাই রয়েছে। কিংস কলেজ লন্ডনে পড়াশোনা করা কেবল শিক্ষা নয়, এটি এমন একটি ভবিষ্যতের লঞ্চপ্যাড যা সম্পর্ক এবং সম্ভাবনার সঙ্গে ভরা।
            </p>
        </section>
    );
}

// Custom intake section for King's College London
const KingsIntakeSection = () => {
    return (
        <section className="mx-auto bg-white rounded-2xl p-10 shadow-md">
            <h2 className="text-3xl font-bold mb-6">
                ভর্তি গ্রহণ ও আবেদন শেষ তারিখ
            </h2>
            <p className="mb-4 leading-relaxed text-gray-800">
                কিংস কলেজ লন্ডন তাদের নমনীয় ভর্তি ব্যবস্থার মাধ্যমে প্রচলিত ধারা ভেঙে দিয়েছে। অনেক বিশ্ববিদ্যালয়ের মতো নয়, কিংস সারা বছর জুড়ে একাধিক ভর্তি সুযোগ প্রদান করে।
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                আপনি আপনার একাডেমিক যাত্রা শুরু করতে পারেন সেপ্টেম্বরে (সবচেয়ে জনপ্রিয়) অথবা জানুয়ারিতে। এই অভিযোজনযোগ্যতা আপনাকে আপনার ব্যক্তিগত প্রয়োজন ও পছন্দ অনুযায়ী শিক্ষা সময়সূচি নির্ধারণের সুযোগ দেয়।
            </p>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">সেপ্টেম্বর ভর্তি (সবচেয়ে জনপ্রিয়):</h3>
                <div className="ml-4 space-y-1 text-gray-800">
                    <p>• ঐতিহ্যবাহী একাডেমিক বছরের সাথে সামঞ্জস্যপূর্ণ।</p>
                    <p>• যারা বেশিরভাগ শিক্ষার্থীর সাথে পড়াশোনা শুরু করতে চান, তাদের জন্য আদর্শ।</p>
                    <p>• সর্বাধিক সংখ্যক কোর্স ও কার্যক্রমের সুযোগ দেয়।</p>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">জানুয়ারি ভর্তি:</h3>
                <div className="ml-4 space-y-1 text-gray-800">
                    <p>• যারা নতুন বছরে নতুনভাবে শুরু করতে চান, তাদের জন্য উপযুক্ত।</p>
                    <p>• প্রস্তুতির জন্য অতিরিক্ত সময় প্রয়োজন এমন শিক্ষার্থীদের নমনীয়তা প্রদান করে।</p>
                    <p>• একাডেমিক বছরের মাঝপথে যুক্ত হলেও পড়াশোনার গতি হারানো ছাড়াই যোগদান করার সুযোগ দেয়।</p>
                </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="font-semibold text-blue-900">SEP'2026</span>
                        <span className="ml-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">ভর্তি চলছে</span>
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
            {rank: "৩৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩"},
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "৩৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩"},
            {rank: "১১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২১"},
        ]
    },
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৬৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৪০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "৪০ – ১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "৩৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "৩৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "complete_university",
        name: "কমপ্লিট ইউনিভার্সিটি গাইড",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২৪ – ১৫০০", description: "সেরা জাতীয় স্কুলসমূহে – ২০২৪" },
        ],
    },
    {
        id: "guardian_global",
        name: "গার্ডিয়ান গ্লোবাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২৮", description: "সেরা জাতীয় স্কুলসমূহে  – ২০২৫" },
            { rank: "২৩", description: "সেরা জাতীয় স্কুলসমূহে – ২০২ৄ" },
            { rank: "২৯", description: "সেরা জাতীয় স্কুলসমূহে – ২০২৩" },
            { rank: "২৩", description: "সেরা জাতীয় স্কুলসমূহে – ২০২২" },
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৮২৯"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "২৯৬০০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১০৯৯৯"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১২:৫"},
    {title: "গৃহীত হার", text: "১৩%"},
    {title: "স্বীকৃতি", text: "AACSB"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ২ লক্ষ"},
]

const courses = [
    {name: "হিসাববিজ্ঞান", count: "৯", active: true},
    {name: "ব্যাংকিং ও ফাইনান্স", count: "২"},
    {name: "জীবরসায়ন", count: "৫"},
    {name: "কৃত্রিম বুদ্ধিমত্তা / মেশিন লার্নিং", count: "৪"},
    {name: "জীববিজ্ঞান", count: "৮"},
]


export default function KingsCollegeLondon() {
    return (
        <UniversityLayout
            backgroundUrl="/images/king's-college.jpg"
            name="কিংস কলেজ লন্ডন"
            location="লন্ডন, যুক্তরাজ্য"
            logo="/logo/king's-college.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাজ্যে পড়াশোনা সংক্রান্ত মূল বিবরণগুলো এখানে দেওয়া হলো"
                    cards={highlights}
                />

                <KingsCollegeInfo />

                <TopCoursesSection
                    courses={courses}
                    mscCourseName="বিএসসি ইন অ্যাকাউন্টিং & ফাইন্যান্স"
                    mscDuration="৩৬ মাস"
                />

                <KingsIntakeSection />

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
