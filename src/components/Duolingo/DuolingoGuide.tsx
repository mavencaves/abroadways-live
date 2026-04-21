//@ts-nocheck
// src/components/DuolingoGuidePage.jsx

import {useState} from 'react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';

// --- Data Structure (Based on all screenshots) ---
const updates = [
    {
        date: "১১ ফেব্রুয়ারি ২০২৩:",
        text: "ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি $৪৯ থেকে $৫৯ (প্রায় BDT ৬,৫০০) বৃদ্ধি পেয়েছে।"
    },
    {
        date: "২৮ অক্টোবর ২০২২:",
        text: "কম্পিউটারের প্রাইমারি ক্যামেরার পাশাপাশি ফোন বা ট্যাবলেট ব্যবহার করে সেকেন্ডারি ক্যামেরা সেটআপ রাখা বাধ্যতামূলক করা হয়েছে। সেকেন্ডারি ক্যামেরায় কম্পিউটার স্ক্রিন এবং কীবোর্ড স্পষ্টভাবে দৃশ্যমান থাকতে হবে।"
    },
    {
        date: "১ জুলাই ২০২২:",
        text: "Speaking, Listening, Writing এবং Reading-এর জন্য আলাদা সাব-স্কোর ছাত্রছাত্রীদের স্কোরকার্ডে উপলব্ধ করা হবে। এটি বিশ্ববিদ্যালয়গুলিকে DET স্কোরগুলো IELTS-এর সাথে তুলনা করতে সাহায্য করবে।"
    },
    {
        date: "২ এপ্রিল ২০২২:",
        text: "পরীক্ষায় নতুন সেকশন যোগ করা হয়েছে, যা শিক্ষার্থীদের ইংরেজি দক্ষতা আরও ভালোভাবে মূল্যায়ন করতে সাহায্য করবে। নতুন সেকশনগুলো হলো Fill in the Blanks, Interactive Writing, Read and Select, এবং Frequency! এই নতুন সেকশনগুলোর যোগের সাথে \"Read, Then Write\" ধরণের ধীরে ধীরে বাদ দেওয়া হয়েছে।"
    }
];


const feeDetails = {
    price: "৭০ ডলার",
    table: [
        {test: "১ টেস্টের জন্য ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি", fee: "$৭০"},
        {test: "২ টেস্টের প্যাকেজের জন্য ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি", fee: "$১০০ (যার অর্থ প্রতি টেস্ট $৫০)"},
    ],
    cancellation: [
        "আপনার রেজিস্ট্রেশন বাতিল করলে ফি ফেরত দেওয়া হবে না।",
        "তবে, যদি আপনি নির্ধারিত তারিখে পরীক্ষা দিতে প্রস্তুত না থাকেন, তাহলে পরীক্ষার তারিখ ২৮ দিনের মধ্যে পুনঃনির্ধারণ করতে পারবেন।",
    ],
    reschedule: [
        "DET-এর রিস্কেডিউলিং সুবিধাটা পরীক্ষার তারিখের ২৮ দিন আগে পর্যন্ত প্রযোজ্য থাকে।",
        "এই সময়সীমার মধ্যে আপনি আপনার পরীক্ষা তারিখ একাধিকবার পুনঃনির্ধারণ করতে পারবেন কোনো অতিরিক্ত খরচ ছাড়াই।",
        "যদি ২৮ দিনের সময়সীমা মিস হয়ে যায় এবং রিস্কেডিউল করতে হয়, তাহলে আপনার পরীক্ষা বাতিল হয়ে যাবে এবং নতুন তারিখে DET-এর জন্য আপনাকে পুনরায় রেজিস্ট্রেশন ও ফি প্রদান করতে হবে।",
    ],
    payment: [
        "গ্রহণযোগ্য ক্রেডিট কার্ড: Visa, Mastercard, এবং American Express।",
        "ডেবিট কার্ড: বাংলাদেশে অনেক ব্যাংক ইসুকৃত ডেবিট কার্ডও গ্রহণযোগ্যা তবে, আগেই নিশ্চিত করুন যে আপনার ডেবিট কার্ড আন্তর্জাতিক লেনদেন সমর্থন করে।",
        "গুরুত্বপূর্ণ নোট: বাংলাদেশে DET নগদ বা তৃতীয় পক্ষের ওয়ালেট গ্রহণ করে না।",
        "পেমেন্ট সরাসরি DET ওয়েবসাইট এর মাধ্যমে করা হয়, যা নিরাপদ লেনদেন নিশ্চিত করে।",
    ],
    waiverEligibility: [
        "নিম্ন-আয়ের পরিবারের শিক্ষার্থী।",
        "বাহ্যিক পরিস্থিতির কারণে পর্যাপ্ত তহবিল না থাকা শিক্ষার্থী, যেমন চাকরিরচ্যুতি বা চিকিৎসা জরুরি পরিস্থিতি।",
        "আর্থিক সহায়তার নথি প্রদান করতে সক্ষম শিক্ষার্থী।",
    ],
};

const syllabusData = {
    testDuration: "এক ঘণ্টার পরীক্ষা",
    format: "অ্যাডাপ্টিড (adaptive) এবং গ্রেডেড (graded) প্রশ্নের একটি সংমিশ্রণ",
    sections: [
        {section: "Introduction & Onboarding", time: "৫ মিনিট", description: "প্রযুক্তিস্থিত এবং আইডি যাচাই"},
        {
            section: "Adaptive Test",
            time: "৪৫ মিনিট",
            description: "আপনার পারফরম্যান্স অনুযায়ী প্রশ্নগুলোর কঠোরতার স্তর পরিবর্তিত হবে"
        },
        {section: "Writing & Speaking", time: "১০ মিনিট", description: "কম্পিউটার এর ওপর ভিত্তি করে দেওয়া প্রশ্ন"},
    ]
};

const faqData = [
    {
        id: 1,
        question: "ডুয়োলিঙ্গো কি IELTS-এর চেয়ে সস্তা?",
        answer: "হ্যাঁ, ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET) সাধারণত IELTS বা TOEFL-এর চেয়ে উল্লেখযোগ্যভাবে সস্তা। DET ফি প্রায় $৭০।"
    },
    {
        id: 2,
        question: "ডুয়োলিঙ্গো পরীক্ষার তারিখ পুনঃনির্ধারণ করা যায় কি?",
        answer: "পরীক্ষার তারিখের ২৮ দিন আগে পর্যন্ত কোনো অতিরিক্ত খরচ ছাড়াই পুনঃনির্ধারণ করা যায়। তবে, ২৮ দিনের সময়সীমা মিস হলে আপনাকে পুনরায় রেজিস্ট্রেশন করতে হবে।"
    },
    {
        id: 3,
        question: "পরীক্ষার ঠিক আগে কি আমি DET-এর স্লট বুক করতে পারি?",
        answer: "হ্যাঁ, ডুয়োলিঙ্গো ইংলিশ টেস্টের জন্য আপনি নির্ধারিত পরীক্ষার তারিখের ২৪ ঘণ্টা আগে পর্যন্ত রেজিস্ট্রেশন করতে পারেন, এর কোনো অতিরিক্ত লেট রেজিস্ট্রেশন ফি দিতে হয় না।"
    },
    {
        id: 4,
        question: "কোন কোন দেশ ডুয়োলিঙ্গো গ্রহণ করে?",
        answer: "TOEFL এবং IELTS-এর পাশাপাশি, ডুয়োলিঙ্গো ইংলিশ টেস্ট ৫,০০০+ প্রতিষ্ঠান দ্বারা স্বীকৃত, যা বিশ্বের বিভিন্ন দেশে মান্য, যেমন- যুক্তরাজ্য, নিউজিল্যান্ড, অস্ট্রেলিয়া এবং কানাডা।"
    },
    {
        id: 5,
        question: "ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি কিভাবে প্রদান করা যায়?",
        answer: "ক্রেডিট কার্ড এবং ডেবিট কার্ডের মাধ্যমে পেমেন্ট করা যায়। DET নগদ বা তৃতীয় পক্ষের ওয়ালেট গ্রহণ করে না।"
    },
    {
        id: 6,
        question: "ডুয়োলিঙ্গো ইংলিশ টেস্ট কতবার নেওয়া যায়?",
        answer: "আপনি প্রতি ৩০ দিনে সর্বোচ্চ দুইবার DET পরীক্ষা দিতে পারেন (যার মধ্যে বাতিল বা স্কোর না হওয়া পরীক্ষাও অন্তর্ভুক্ত)।"
    },
    {
        id: 7,
        question: "ডুয়োলিঙ্গো টেস্টের জন্য কীভাবে প্রস্তুতি নেবেন?",
        answer: "প্রস্তুতি শুরু করার জন্য প্রথমে অফিশিয়াল ফ্রি প্রাকটিস টেস্ট দিন। প্রাপ্ত স্কোরের ওপর ভিত্তি করে আপনার দুর্বলতা চিহ্নিত করুন এবং Speaking বা Writing-এর মতো দুর্বল সেকশনগুলিতে বেশি সময় দিন।"
    },
    {
        id: 8,
        question: "ডুয়োলিঙ্গো-এর পূর্ণ স্কোর কত?",
        answer: "DET-এর পূর্ণ স্কোর হলো ১৬০। একটি DET স্কোর ১২০ প্রায় IELTS ব্যান্ড স্কোর ৬.৫-এর সমতুল্য।"
    },
    {
        id: 9,
        question: "কি আমি ভিসা আবেদন করার জন্য ডুয়োলিঙ্গো ইংলিশ টেস্ট ব্যবহার করতে পারি?",
        answer: "হ্যাঁ, বিশ্বজুড়ে হাজারো বিশ্ববিদ্যালয় এবং কিছু ভিসা কর্তৃপক্ষ DET স্কোর গ্রহণ করে।"
    },
];


// --- Reusable FAQItem Component (Defined Locally for one-file solution) ---
const FAQItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-indigo-200 last:border-b-0">
            <button
                className="flex justify-between items-center w-full py-4 text-left font-medium text-gray-800 hover:text-indigo-600 transition duration-150"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-base md:text-lg">{question}</span>
                <ChevronDownIcon
                    className={`w-5 h-5 ml-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-indigo-600' : 'text-gray-500'}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}
            >
                <div className="pb-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    {typeof answer === 'string' ? <p>{answer}</p> : answer}
                </div>
            </div>
        </div>
    );
};


// --- Tailwind Class Definitions for Consistency & Responsiveness ---
const PageContainer = "";
const ContentWrapper = "max-w-4xl mx-auto";
const SectionBox = "my-6 p-5 md:p-8 bg-white rounded-xl shadow-lg border border-indigo-100";
const SectionHeader = "text-xl md:text-2xl font-bold text-indigo-800 mb-4 border-b pb-2 border-indigo-200";
const SubSectionHeader = "text-lg md:text-xl font-semibold text-indigo-700 mt-6 mb-3";
const ListStyle = "list-disc list-inside space-y-2 text-gray-700 ml-2 text-sm md:text-base";


// --- Main Component ---
const DuolingoGuide = () => {
    return (
        <div className={PageContainer}>
            <div className={ContentWrapper}>

                {/* 1. Header and Intro (Screenshots 190216, 202502) */}
                <header className="mb-8 p-4 bg-white rounded-xl shadow-xl">
                    <p className="text-sm text-gray-500 mb-2">বিদেশে উচ্চশিক্ষা / পরীক্ষাসমূহ / ডুয়োলিঙ্গো / ফি</p>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 leading-tight">
                        ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি ২০২৫-২০২৬: টেস্ট ফরম্যাট তারিখ, ফি এবং ফলাফল
                    </h1>
                    <p className="text-sm text-gray-500 mt-3">
                        <span role="img" aria-label="clock">🕒</span> আপডেট করা হয়েছে: সেপ্টেম্বর ১২, ২০২৫, ০৯:২০
                    </p>
                    <p className="text-gray-700 mt-4 text-base md:text-lg">
                        ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET) ফি,ফরম্যাট,টিপস এবং সর্বশেষ আপডেটের একটি সারসংক্ষেপ নিচে দেয়া হলো।
                    </p>
                </header>

                {/* 2. Fees, Cancellation & Rescheduling (Screenshots 190248, 190321) */}
                <section className={SectionBox}>

                    <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">

                        {/* Title Section */}
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-500 pb-2">
                            ১. ডুয়োলিঙ্গো ইংলিশ টেস্টের সর্বশেষ আপডেট
                        </h1>

                        {/* Introductory Text */}
                        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                            ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET) কয়েকটি নতুন আপডেট ঘোষণা করেছে। নিচে এই আপডেটগুলোর টাইমলাইন
                            দেওয়া হলো:
                        </p>

                        {/* Updates List (Unordered List) */}
                        <ul className="space-y-6">
                            {updates.map((update, index) => (
                                <li key={index} className="flex flex-col md:flex-row items-start text-gray-700">

                                    {/* Bullet Point / Date Marker */}
                                    {/* Added a custom bullet and separated the date and text for better structure */}
                                    <span className="text-xl text-indigo-600 font-extrabold mr-3 mt-1">•</span>

                                    {/* Content Block */}
                                    <div className="flex-1">
                <span className="font-semibold text-lg text-gray-800 block md:inline">
                  {update.date}
                </span>
                                        <span className="text-base leading-relaxed ml-0 md:ml-2">
                   {update.text}
                </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h2 className={SectionHeader}>১. বাংলাদেশে ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি ২০২৫</h2>

                    {/* Price Table - Responsive */}
                    <div className="overflow-x-auto my-4 shadow-md rounded-lg border border-indigo-300">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">পরীক্ষা</th>
                                <th className="px-6 py-3 text-right text-xs md:text-sm font-medium uppercase tracking-wider">ফি</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                            {feeDetails.table.map((row, index) => (
                                <tr key={index} className="hover:bg-indigo-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">{row.test}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-800 text-right font-bold">{row.fee}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className={SubSectionHeader}>২. ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি ২০২৫: বাতিলের চার্জ</h2>
                    <ul className={ListStyle}>
                        {feeDetails.cancellation.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>

                    <h2 className={SubSectionHeader}>৩. ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি ২০২৫: রিস্কেডিউলিং চার্জ</h2>
                    <ul className={ListStyle}>
                        {feeDetails.reschedule.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </section>

                {/* 3. Payment Methods (Screenshot 190356) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>৪. বাংলাদেশে ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি প্রদানের পদ্ধতি ২০২৫</h2>
                    <p className="text-gray-700 mb-3">ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি প্রদানের জন্য আপনার কাছে দুটি সুবিধাজনক
                        পেমেন্ট অপশন রয়েছে: ক্রেডিট কার্ড এবং ডেবিট কার্ড।</p>
                    <ul className={ListStyle}>
                        <li>{feeDetails.payment[0]}</li>
                        <li>{feeDetails.payment[1]}</li>
                    </ul>
                    <p className="font-bold text-gray-800 mt-4">গুরুত্বপূর্ণ নোট:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 text-sm">
                        <li>{feeDetails.payment[2]}</li>
                        <li>{feeDetails.payment[3]}</li>
                    </ul>
                </section>

                {/* 4. Fee Waiver Tips (Screenshot 190412) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>৫. ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি মওকুফের টিপস</h2>
                    <p className="text-gray-700 mb-3">
                        যদিও DET হলো সবচেয়ে সাশ্রয়ী মূল্যের ইংরেজি দক্ষতা পরীক্ষা, IELTS বা TOEFL-এর তুলনায়, তবুও
                        আপনি পরীক্ষা ফি মুক্তির (fee waiver) সুযোগ পেতে পারেন।
                        প্রতিবছর, ডুয়োলিঙ্গো ইংলিশ টেস্ট এর **Access Program** এর মাধ্যমে সর্বোচ্চ ১০,০০০ শিক্ষার্থীকে
                        ফি মুক্তি দেওয়া হয়।
                    </p>
                    <p className="font-medium text-gray-800 mt-4">ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি মওকুফের জন্য কারা
                        যোগ্য?</p>
                    <ul className={ListStyle}>
                        {feeDetails.waiverEligibility.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <p className="font-medium text-gray-800 mt-4">কীভাবে waiver-এর জন্য আবেদন করবেন?</p>
                    <ul className={ListStyle}>
                        <li>সরাসরি waiver-এর জন্য আবেদন করা যায় না।</li>
                        <li>পরিবর্তে, আপনাকে আপনার **কাউন্সেলর বা বিশ্ববিদ্যালয় পার্টনারের** এর সঙ্গে যোগাযোগ করতে
                            হবে।
                        </li>
                        <li>তারা ডুয়োলিঙ্গো ইংলিশ টেস্ট Access Program portal ব্যবহার করে আপনার পক্ষ থেকে waiver অনুরোধ
                            করতে পারবেন।
                        </li>
                    </ul>
                </section>

                {/* 5. Eligibility (Screenshot 202802) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>৬. ডুয়োলিঙ্গো ইংলিশ টেস্টের যোগ্যতা: প্রয়োজনীয় ডকুমেন্টসমূহ</h2>
                    <p className="text-gray-700 mb-3">
                        ডুয়োলিঙ্গো ইংলিশ টেস্ট দেওয়ার জন্য নিচের বিষয়গুলো বাধ্যতামূলকভাবে প্রয়োজন:
                    </p>
                    <ul className={ListStyle}>
                        <li>**বৈধ সরকারি পরিচয়পত্র** (Passport)</li>
                        <li>সুসংগতভাবে কাজ করা **কম্পিউটার**</li>
                        <li>ভালো **ইন্টারনেট সংযোগ**</li>
                        <li>কোনো বয়স বা শিক্ষাগত যোগ্যতার সীমাবদ্ধতা নেই। যদি আপনার বয়স ১৮ বছরের কম হয়, তবে আপনাকে
                            পিতামাতা/অভিভাবকের অনুমতিপত্র জমা দিতে হবে।
                        </li>
                    </ul>
                </section>

                {/* 6. Registration Process (Screenshot 202747) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>৭. ডুয়োলিঙ্গো ইংলিশ টেস্ট রেজিস্ট্রেশন: কীভাবে DET-তে নিবন্ধন
                        করবেন?</h2>
                    <p className="text-gray-700 mb-3">
                        DET-এর রেজিস্ট্রেশন প্রক্রিয়া খুবই সহজ। ডুয়োলিঙ্গো ইংলিশ টেস্ট-এর জন্য রেজিস্ট্রেশন করতে আপনাকে
                        শুধু অফিশিয়াল ওয়েবসাইটে যেতে হবে।
                    </p>
                    <p className="font-medium text-gray-800 mt-4">ধাপে ধাপে রেজিস্ট্রেশন প্রক্রিয়া:</p>
                    <ul className="list-decimal list-inside space-y-2 text-gray-700 ml-4 text-sm md:text-base">
                        <li>অফিশিয়াল DET ওয়েবসাইট যান।</li>
                        <li>আপনার ইমেইল ঠিকানা দিন এবং সাইনআপ প্রক্রিয়া সম্পূর্ণ করুন।</li>
                        <li>বাম দিকে থাকা **'Purchase the test'** অপশনে ক্লিক করুন।</li>
                        <li>আপনার পছন্দের টেস্ট প্যাক নির্বাচন করুন।</li>
                        <li>পেমেন্ট সম্পন্ন করুন।</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        DET-তে কোনো স্লট বুকিং-এর ধারণা নেই, কারণ আপনি যেকোনো সময় পরীক্ষা দিতে পারবেন।
                    </p>
                </section>

                {/* 7. Syllabus and Format (Screenshot 202839) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>৮. ডুয়োলিঙ্গো ইংলিশ টেস্টের সিলেবাস: টেস্টে কী থাকবে?</h2>
                    <p className="text-gray-700 mb-3">
                        ডুয়োলিঙ্গো ইংলিশ টেস্ট হলো প্রায় **এক ঘণ্টার পরীক্ষা** যা আপনাকে চারটি দক্ষতা মূল্যায়ন করবে:
                        Reading, Writing, Listening, এবং Speaking! এটি একটি **অ্যাডাপ্টিভ টেস্ট**, যার মানে হলো আপনার
                        পারফরম্যান্স অনুযায়ী প্রশ্নগুলোর কঠোরতার স্তর রিয়েল-টাইমে পরিবর্তিত হবে।
                    </p>

                    {/* Syllabus Table - Responsive */}
                    <div className="overflow-x-auto my-4 shadow-md rounded-lg border border-indigo-300">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">সেকশন</th>
                                <th className="px-6 py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">সময়কাল</th>
                                <th className="px-6 py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">বর্ণনা</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                            {syllabusData.sections.map((row, index) => (
                                <tr key={index} className="hover:bg-indigo-50">
                                    <td className="px-6 py-4 whitespace-normal text-sm md:text-base font-medium text-gray-900">{row.section}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-800">{row.time}</td>
                                    <td className="px-6 py-4 whitespace-normal text-sm md:text-base text-gray-800">{row.description}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 8. Overall Preparation (Screenshot 201909) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>৯. সার্বিক DET প্রস্তুতি কৌশলসমূহ</h2>
                    <p className="text-gray-700 mb-3">
                        আপনার DET প্রস্তুতি যারা শুরু করার জন্য, পরীক্ষার ফরম্যাট বোঝা গুরুত্বপূর্ণ কারণ DET-তে
                        অ্যাডাপ্টিভ (adaptive) এবং গ্রেডেড (graded) প্রশ্নের একটি সংমিশ্রণ রয়েছে, যা আপনার রিডিং,
                        রাইটিং, স্পিকিং, এবং লিসেনিং স্কিল মূল্যায়ন করে।
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 text-sm md:text-base">
                        <li>প্রস্তুতি শুরু করার জন্য প্রথমে **অফিশিয়াল ফ্রি প্রাকটিস টেস্ট** দিন, যাতে আপনার বর্তমান
                            দক্ষতার স্তর মূল্যায়ন করা যায়। এটি আপনার শক্তি ও দুর্বলতা সনাক্ত করতে সাহায্য করবে।
                        </li>
                        <li>প্রাকটিস টেস্ট থেকে স্কোর পাওয়ার পর, আপনার DET স্কোর মূল্যায়ন করুন এবং কোন অংশে উন্নতি দরকার
                            তা চিহ্নিত করুন। যেখানে আপনার পারফরম্যান্স দুর্বল, সেই সেকশনে বেশি ফোকাস দিন।
                        </li>
                        <li>একটি DET স্কোর **১২০** প্রায় IELTS ব্যান্ড স্কোর **৬.৫-এর** সমান। আপনার স্কিল উন্নয়নের জন্য
                            IELTS প্রস্তুতির উপকরণ ব্যবহার করাও উপকারী হতে পারে।
                        </li>
                    </ul>
                </section>

                {/* 9. Section-wise Preparation (Screenshots 201930, 201953, 202024, 202056, 202136) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>১০. সেকশন ভিত্তিক প্রস্তুতি টিপস</h2>

                    {/* Speaking */}
                    <h3 className={SubSectionHeader}>Speaking সেকশন:</h3>
                    <ul className={ListStyle}>
                        <li>ইংরেজিতে নিয়মিত যোগাযোগ করুন: বন্ধু বা পরিবারের সঙ্গে ইংরেজিতে কথা বলুন, এবং তাদের আপনার
                            ভুলগুলো সংশোধন করতে বলুন।
                        </li>
                        <li>আপনার বক্তব্য রেকর্ড ও রিভিউ করুন: নিজেকে কথা বলতে রেকর্ড করুন, তারপর ত্রুটির জন্য জায়গাগুলো
                            চিহ্নিত করুন।
                        </li>
                        <li>উচ্চারণ ও ফ্লুয়েন্সিতে ফোকাস করুন: আপনার উচ্চারণের দিকে মন দিন, কথোপকথনে ড্রপ রাখুন, এবং
                            নিশ্চিত করুন যে আপনার ভাষা সুসংগত।
                        </li>
                    </ul>

                    {/* Writing */}
                    <h3 className={SubSectionHeader}>Writing সেকশন:</h3>
                    <ul className={ListStyle}>
                        <li>নিয়মিত প্রাকটিস করুন: নিয়মিত প্রবন্ধ, ছোট আর্টিকেল বা অন্যান্য কনটেন্ট লিখুন, যা আপনার
                            লিখন দক্ষতা উন্নত করবে এবং ভাষার ভান্ডার বাড়াবে।
                        </li>
                        <li>অনলাইন কমিউনিটিতে লিখুন: Reddit বা Quora-র মত প্ল্যাটফর্মে বিভিন্ন আলোচনায় অংশ নিন।</li>
                        <li>গুণগত Writing বিশ্লেষণ করুন: আপনার প্রিয় ব্লগ বা প্রবন্ধগুলো অধ্যয়ন করুন, যাতে কার্যকর লিখন
                            কৌশল বোঝা যায়।
                        </li>
                    </ul>

                    {/* Reading */}
                    <h3 className={SubSectionHeader}>Reading সেকশন:</h3>
                    <ul className={ListStyle}>
                        <li>মূল ধারণা এবং বিশদে মনোযোগ দিন: মূল পয়েন্ট ও সাপোর্টিং ডিটেইলস চিহ্নিত করুন, যা আপনার
                            comprehension দক্ষতা বাড়াতে সাহায্য করবে।
                        </li>
                        <li>নিয়মিত ভোকাবুলারি শিখুন: নিয়মিত অজানা শব্দের চর্চা করুন।</li>
                        <li>ইংরাজিতে খবর অনুসরণ করুন: সাম্প্রতিক ঘটনা সম্পর্কে আপডেটেড থাকুন যাতে বিভিন্ন ধরনের টেক্সট
                            পড়ার অভ্যাস হয় এবং নতুন শব্দ শেখা যায়।
                        </li>
                    </ul>

                    {/* Listening */}
                    <h3 className={SubSectionHeader}>Listening সেকশন:</h3>
                    <ul className={ListStyle}>
                        <li>ইংরেজি মুভি বা সিনেমা দেখুন: এটি আপনাকে প্রাকৃতিক ভাষার উচ্চারণ এবং expressions-এর সঙ্গে
                            পরিচিত করাবে।
                        </li>
                        <li>পডকাস্ট এবং গান শুনুন: একই কনটেন্ট বারবার শোনা vocabulary এবং comprehension বৃদ্ধিতে সাহায্য
                            করে।
                        </li>
                        <li>সাবটাইটেল ব্যবহার করুন: আপনার মাতৃভাষায় সিনেমা বা শো দেখুন, সঙ্গে English সাবটাইটেল ব্যবহার
                            করুন। এটি আপনার native language এবং English-এর মধ্যে সেতুবন্ধন তৈরি করে।
                        </li>
                    </ul>
                </section>

                {/* 10. Daily Routine & Resources (Screenshot 202119, 202910) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>১১. প্রতিদিনের রুটিন ও রিসোর্সেসসমূহ</h2>
                    <h3 className={SubSectionHeader}>প্রতিদিনের রুটিন স্থাপন করুন:</h3>
                    <p className="text-gray-700 mb-3">
                        সাফল্যের জন্য **ধারাবাহিকতা** সবচেয়ে গুরুত্বপূর্ণ। প্রতিদিন **৩০-৩০ মিনিট** মনোযোগী ইংরেজি
                        অনুশীলন করার লক্ষ্য রাখুন। যেহেতু ডুয়োলিঙ্গো ইংলিশ টেস্ট adaptive format অনুসরণ করে, তাই আপনার
                        অনুশীলন সেখানে বিভিন্ন ধরনের প্রশ্ন অন্তর্ভুক্ত করুন।
                    </p>
                    <h3 className={SubSectionHeader}>DET প্রাকটিস টেস্ট: আপনার প্রস্তুতি বাড়িয়ে তুলুন!</h3>
                    <ul className={ListStyle}>
                        <li>DET ওয়েবসাইট এবং আপনার মোবাইলে ফোনে সীমাহীন ফ্রি প্রাকটিস টেস্ট অফার করে।</li>
                        <li>নিয়মিত প্রাকটিস টেস্ট নেওয়ার মাধ্যমে আপনি আপনার প্রস্তুতি মূল্যায়ন করতে পারবেন এবং বুঝতে
                            পারবেন কোন সেকশনগুলোতে আরও উন্নতি প্রয়োজন।
                        </li>
                        <li>**Official DET Website:** DET-এর অফিশিয়াল ওয়েবসাইটে অসীম প্রাকটিস টেস্ট এবং অফিশিয়াল গাইডস
                            পাওয়া যায়।
                        </li>
                    </ul>
                </section>

                {/* 11. Frequently Asked Questions (Reusable Component) - (Screenshots 190440, 202221) */}
                <section className="my-8 p-6 md:p-8 bg-indigo-50 rounded-xl shadow-2xl border border-indigo-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-300 pb-2">
                        শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্নসমূহ-
                    </h2>
                    <div className="divide-y divide-indigo-300">
                        {/* The Reusable FAQItem Component in use */}
                        {faqData.map(item => (
                            <FAQItem
                                key={item.id}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </section>

                {/* 12. Final Thoughts (Screenshot 202136) */}
                <section className='mt-8 text-center text-gray-500 text-sm pb-4'>
                    <h2 className='text-xl font-bold text-indigo-800 mb-2'>১৩. শেষ মন্তব্য / ফাইনাল থটস</h2>
                    <p className='text-base text-gray-700'>
                        এই কৌশলগুলো দৈনন্দিন রুটিনে অন্তর্ভুক্ত করলে আপনার দক্ষতা বৃদ্ধি পাবে এবং ডুয়োলিঙ্গো ইংলিশ
                        টেস্টের জন্য কার্যকরভাবে প্রস্তুতি নেওয়া সম্ভব হবে।
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DuolingoGuide;