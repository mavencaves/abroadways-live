//@ts-nocheck
import  { useState } from 'react';
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/24/outline';


// -------------------------------------------------------------------------
// 1. DATA STRUCTURE (স্ক্রিনশট থেকে সমস্ত কন্টেন্ট)
// -------------------------------------------------------------------------

const patternData = {
    overview: {
        title: "১. ডুয়োলিঙ্গো ইংলিশ টেস্ট প্যাটার্ন",
        description: "ডুয়োলিঙ্গো ইংলিশ টেস্ট একটি ১ ঘন্টার পরীক্ষা, যা পেমেন্ট সম্পন্ন করার পর যেকোনো স্থান থেকে অনলাইনে নেওয়া যায়।",
        format2025: {
            title: "২০২৫ সালের Duolingo English Test ফরমেট-এ রয়েছে ৩টি সেকশন:",
            sections: [
                "Introduction (৫ মিনিট)",
                "Adaptive Test (৪৫ মিনিট)",
                "Writing & Speaking Sample (১০ মিনিট)"
            ]
        },
        scoring: "ডুয়োলিঙ্গো টেস্ট ১০-১৬০ স্কেলে স্কোর করা হয়, যেখানে প্রতিটি সঠিক উত্তরের জন্য ০ মার্কস দেওয়া হয়। Adaptive Test সেকশনে, প্রশ্নের কঠিনতার স্তর আপনার পারফরম্যান্সের ওপর নির্ভর করে। আপনি যদি বেশি প্রশ্ন সঠিকভাবে উত্তর দেন, তবে পরবর্তী প্রশ্নগুলো কঠিন হয়ে যাবে, এবং যদি কম উত্তর দেন, প্রশ্নগুলো সহজ হবে।",
        note: "নিচে প্রতিটি সেকশন কী ধারণ করে এবং কীভাবে এগুলোতে ভালো স্কোর করা যায় তার বিস্তারিত ব্যাখ্যা দেওয়া হলো।"
    },
    
    sections: [
        {
            id: 'intro',
            title: "২. ডুয়োলিঙ্গো ইংলিশ টেস্ট ফরম্যাট: Introduction & Onboarding",
            time: "৫ মিনিট",
            items: [
                "এই সেকশন শুধুমাত্র ৫ মিনিটের জন্য, কোনো প্রশ্ন নেই।",
                "আপনার পরীক্ষার বিস্তারিত স্ক্রিন রুলসটি রিড করুন।",
                "বিচ্যুতি এড়াতে সব নিয়ম মনোযোগ দিয়ে পড়ুন।",
                "পরীক্ষার জন্য প্রযুক্তিগত প্রয়োজনীয়তা নিশ্চিত করুন, যেমন ক্যামেরা সেটআপ, শক্তিশালী ইন্টারনেট সংযোগ ইত্যাদি।",
                "প্রতিটি সেকশনের সময়সীমা রয়েছে, তাই প্রতিটি অংশের জন্য সময় মেনে চলুন।",
                "এভাবে, আপনি স্মার্টভাবে সময় ব্যবস্থাপনা করতে পারবেন এবং প্রতিটি অংশ সময়মতো সম্পন্ন করতে পারবেন।"
            ]
        },
        {
            id: 'adaptive',
            title: "ডুয়োলিঙ্গো ইংলিশ টেস্ট ফরম্যাট: Adaptive Test",
            time: "৪৫ মিনিট",
            description: "Adaptive Test-এ বিভিন্ন ধরনের প্রশ্ন থাকে, যা পরীক্ষার্থীর Writing, Speaking, Listening, এবং Reading দক্ষতা মূল্যায়ন করে। পরীক্ষা এমনভাবে ডিজাইন করা হয়েছে যাতে দুইটি দক্ষতার সমন্বয়ে স্কোর মূল্যায়ন করা যায়। উদাহরণস্বরূপ, \"Listen, then Speak\" টাস্ক DET-কে আপনার কথোপকথন দক্ষতা যাচাই করতে সাহায্য করে।",
            note: "এই সেকশনটি ৪৫ মিনিটের জন্য এবং প্রশ্নের কঠিনতা আপনার পারফরম্যান্স অনুযায়ী রিয়েল-টাইমে পরিবর্তিত হয়।",
            subSections: [
                {
                    title: "Adaptive Test-এর বিভিন্ন ধরনের প্রশ্ন হলো:",
                    table: [
                        { type: "Read and Select", measures: "সঠিক ইংরেজি শব্দ এবং ভুয়া শব্দ চিহ্নিত করার দক্ষতা", frequency: "১৫-১৮ বার" },
                        { type: "Read and Complete", measures: "একটি বাক্যে অনুপস্থিত অক্ষর পূরণ করার ক্ষমতা", frequency: "৬-৯ বার" },
                        { type: "Read Aloud", measures: "লিখিত বাক্য উচ্চারণ করে সঠিকভাবে শব্দ উচ্চারণের ক্ষমতা", frequency: "৩-৫ বার" },
                        { type: "Fill in the Blanks", measures: "শব্দ সম্পূর্ণ করতে শব্দভান্ডারের দক্ষতা যাচাই", frequency: "৬-৯ বার" },
                        { type: "Listen and Type", measures: "কতটা ভালোভাবে কথা ইংরেজি বোঝা যায় তা যাচাই", frequency: "৬-৯ বার" },
                        { type: "Write About the Photo", measures: "দেখা বস্তু বা দৃশ্য সম্পর্কে লিখে বর্ণনা করার ক্ষমতা", frequency: "৩ বার" },
                        { type: "Speak About the Photo", measures: "দেখা বস্তু বা দৃশ্য সম্পর্কে কথা বলার ক্ষমতা", frequency: "৩ বার" },
                        { type: "Listen, then Speak", measures: "কোনো ব্যক্তির সঙ্গে কথোপকথন চালানোর ক্ষমতা", frequency: "২ বার" },
                        { type: "Read, then Speak", measures: "নির্দিষ্ট বিষয়ে কথা বলা এবং কথোপকথন শুরু করার ক্ষমতা", frequency: "১ বার" },
                        { type: "Interactive Writing", measures: "আপনার প্রাথমিক উত্তর ও মতামতের ওপর ভিত্তি করে অনুসরণ প্রশ্ন দিয়ে প্রসারিত করার ক্ষমতা", frequency: "১ বার" },
                    ]
                },
                {
                    title: "ইন্টারঅ্যাক্টিভ রিডিং (Interactive Reading)",
                    description: "এই সেকশনটি পরীক্ষা করে আপনি একাডেমিক লেখা পড়ার দক্ষতা এবং তা থেকে বোঝা যায় নির্দিষ্ট পাঠ্যের সাথে সম্পর্কিত বিভিন্ন ধরণের প্রশ্ন করা হয়, যাতে পঠন দক্ষতা ও বোধগম্যতা (literacy & comprehension) সাব-স্কোর মূল্যায়ন করা যায়।",
                    table: [
                        { type: "Complete the sentences", measures: "প্রতিটি খালির জন্য সঠিক শব্দ নির্বাচন করার দক্ষতার শব্দভান্ডার", frequency: "২ বার" },
                        { type: "Complete the passage", measures: "দুটি পাঠ্যের মধ্যে সেতুবন্ধন দিয়ে সংযোগ করার ক্ষমতা", frequency: "২ বার" },
                        { type: "Highlight the answer", measures: "প্রশ্নের উত্তর দেয় এমন সঠিক বাক্য চিহ্নিত করার ক্ষমতা", frequency: "৪ বার" },
                        { type: "Identify the Idea", measures: "একটি বাক্যে পুরা পাঠ্যের সংক্ষিপ্তসার দেওয়ার ক্ষমতা", frequency: "২ বার" },
                        { type: "Title the passage", measures: "পাঠ্যের বিষয়বস্তু বর্ণনা করার ক্ষমতা", frequency: "২ বার" },
                    ]
                },
                {
                    title: "ইন্টারঅ্যাক্টিভ লিসেনিং (Interactive Listening)",
                    description: "এই সেকশনটি আপনার Listening এবং Speaking দক্ষতা পরীক্ষা করে। এটি একটি কথোপকথনের মাধ্যমে আপনার ইংরেজিতে কথা বলার ক্ষমতাকে মূল্যায়ন করে।",
                    note: "এটি উল্লেখযোগ্য যে ডুয়োলিঙ্গো ইংলিশ টেস্ট-এ কোনো নির্ধারিত প্রশ্নের ক্রম নেই, এবং প্রশ্নের ঘনত্বও পরিবর্তিত হতে পারে, কারণ পরীক্ষা adaptive। তাই, ভালো স্কোরের জন্য আপনাকে যেকোনো ক্রমে উত্তর দিতে প্রস্তুত থাকতে হবে।",
                    table: [
                        { type: "Listen and respond", measures: "কোনো নির্দিষ্ট পরিস্থিতি শুনে সর্বোত্তম উত্তর নির্বাচন করার ক্ষমতা", frequency: "১০ বার" },
                        { type: "Summarise the conversation", measures: "কারও সঙ্গে কথোপকথনের সংক্ষিপ্তসার লিখে বর্ণনা করার ক্ষমতা", frequency: "১ বার" },
                    ]
                },
            ]
        },
        {
            id: 'sample',
            title: "ডুয়োলিঙ্গো ইংলিশ টেস্ট ফরম্যাট: Writing & Speaking Sample",
            time: "১০ মিনিট",
            description: "Writing এবং Speaking স্যাম্পল প্রশ্নে আপনাকে একটি প্রম্পট দেওয়া হবে এবং সীমিত সময়ের মধ্যে উত্তর দিতে হবে। এই সেকশনটি মাত্র ১০ মিনিটের জন্য।",
            subSections: [
                {
                    title: "Speaking Sample Question:",
                    items: [
                        "আপনাকে একটি প্রম্পট দেওয়া হবে এবং ৩০ সেকেন্ড সময় পাবেন পড়ে এবং প্রস্তুত হওয়ার জন্য।",
                        "এরপর, ৩ মিনিট সময় পাবেন উত্তর দেওয়ার জন্য, যার মধ্যে নূন্যতম ১ মিনিট কথা বলা বাধ্যতামূলক।"
                    ]
                },
                {
                    title: "Writing Sample Question:",
                    items: [
                        "Writing স্যাম্পল প্রশ্নের উত্তর দিতে ৫ মিনিট সময় পাবেন।",
                        "নূন্যতম ৫০ শব্দ লিখতে হবে।"
                    ]
                }
            ],
            closing: "এখন যেহেতু আপনি পরীক্ষার ফরম্যাট জানেন, পরবর্তী ধাপ হলো স্মার্ট প্রিপারেশন প্ল্যান। সময় নষ্ট না করে অনুমান করে পড়াশোনা করার চেয়ে আমাদের প্রমাণিত ডুয়োলিঙ্গো ইংলিশ টেস্ট প্রস্তুতি গাইড অনুসরণ করুন, যা আপনাকে কার্যকরভাবে প্রস্তুতি নিতে সাহায্য করবে।"
        }
    ],

    faq: [
        { id: 1, question: "ডুয়োলিঙ্গো ইংলিশ টেস্ট কতবার নেওয়া যায়?", answer: "আপনি প্রতি ৩০ দিনের মধ্যে সর্বোচ্চ দুইবার DET পরীক্ষা দিতে পারবেন। এর মধ্যে বাতিল বা স্কোর না হওয়া পরীক্ষাও অন্তর্ভুক্ত।" },
        { id: 2, question: "ডুয়োলিঙ্গো টেস্ট কতটা কঠিন?", answer: "DET একটি অ্যাডাপ্টিভ টেস্ট, যার মানে প্রশ্ন আপনার দক্ষতার স্তর অনুযায়ী কঠিন বা সহজ হয়। IELTS বা TOEFL এর তুলনায় এর ফরম্যাট দ্রুত এবং সহজ, কিন্তু ভালো স্কোর পেতে হলে নির্দিষ্ট ফরম্যাট অনুযায়ী প্রস্তুতি নিতে হবে।" },
        { id: 3, question: "ডুয়োলিঙ্গো টেস্টের সিলেবাস কী?", answer: "DET-এর সিলেবাসে মূলত চারটি দক্ষতা (Reading, Writing, Listening, Speaking) মূল্যায়ন করা হয়। প্রধানত Read & Select, Listen & Type, Interactive Reading, Interactive Listening এবং Writing/Speaking Sample এর মতো কাজগুলো থাকে।" },
        { id: 4, question: "ডুয়োলিঙ্গো সহজে কীভাবে পাস করবেন?", answer: "সহজে পাস করার জন্য: ১. অফিশিয়াল ফ্রি প্র্যাকটিস টেস্ট নিন। ২. আপনার দুর্বলতা (যেমন Speaking বা Writing) চিহ্নিত করুন। ৩. প্রতিদিন নিয়মিত ৩০ মিনিটের জন্য অভ্যস্ত হোন। ৪. প্রশ্ন ফরম্যাট অনুযায়ী দ্রুত উত্তর দেওয়ার কৌশল শিখুন।" },
        { id: 5, question: "ডুয়োলিঙ্গো-তে মার্কস কীভাবে বিতরণ করা হয়?", answer: "DET ১০-১৬০ স্কেলে স্কোর করা হয় এবং চারটি সাব-স্কোর (Literacy, Comprehension, Conversation, Production) দেওয়া হয়। Adaptive Test-এ সঠিক উত্তরের কঠিনতার ওপর ভিত্তি করে নম্বর পরিবর্তন হয়, কোনো নির্দিষ্ট প্রশ্নের জন্য নির্দিষ্ট মার্কস বরাদ্দ থাকে না।" },
    ]
};


// -------------------------------------------------------------------------
// 2. REUSABLE COMPONENTS
// -------------------------------------------------------------------------

// --- Accordion Component for FAQs ---
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-indigo-300 last:border-b-0">
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
            >
                <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

// --- Table Component ---
const TestTable = ({ data, headerText }) => (
    <div className="overflow-x-auto my-4 shadow-md rounded-lg border border-indigo-300">
        <h3 className="text-md md:text-lg font-bold text-gray-800 p-3 bg-indigo-100/50 border-b border-indigo-300">{headerText}</h3>
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-600 text-white">
                <tr>
                    <th className="px-6 py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">প্রশ্নের ধরন</th>
                    <th className="px-6 py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">এটি কী পরীক্ষা করে</th>
                    <th className="px-6 py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">প্রশ্নের ঘনত্ব</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
                {data.map((row, index) => (
                    <tr key={index} className="hover:bg-indigo-50">
                        <td className="px-6 py-4 whitespace-normal text-sm md:text-base font-medium text-gray-900">{row.type}</td>
                        <td className="px-6 py-4 whitespace-normal text-sm md:text-base text-gray-800">{row.measures}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-800">{row.frequency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------

const DuolingoSyllabus = () => {

    const SectionHeader = "text-xl md:text-2xl font-bold text-indigo-800 mb-4 border-b pb-2 border-indigo-200";
    const SubSectionHeader = "text-lg md:text-xl font-semibold text-indigo-700 mt-6 mb-3";
    const ListStyle = "list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm md:text-base";

    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto">
                
                {/* 1. Overall Pattern Overview */}
                <section className="my-6 p-5 md:p-8 bg-white rounded-xl shadow-lg border border-indigo-100">
                    <h2 className={SectionHeader}>{patternData.overview.title}</h2>
                    <p className="text-gray-700 mb-4 text-base md:text-lg">
                        {patternData.overview.description}
                    </p>
                    
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{patternData.overview.format2025.title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-base md:text-lg font-semibold">
                        {patternData.overview.format2025.sections.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    
                    <p className="text-gray-700 mt-5 text-sm md:text-base">
                        **স্কোরিং সিস্টেম:** {patternData.overview.scoring}
                    </p>
                    <p className="text-gray-500 italic mt-3 text-sm">{patternData.overview.note}</p>
                </section>

                {/* 2. Detailed Sections - Introduction */}
                <section className="my-6 p-5 md:p-8 bg-white rounded-xl shadow-lg border border-indigo-100">
                    <h2 className={SectionHeader}>
                        {patternData.sections[0].title}
                        <span className="text-sm font-normal text-gray-500 ml-3">({patternData.sections[0].time})</span>
                    </h2>
                    <ul className={ListStyle}>
                        {patternData.sections[0].items.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className='flex-1'>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 3. Detailed Sections - Adaptive Test */}
                <section className="my-6 p-5 md:p-8 bg-white rounded-xl shadow-lg border border-indigo-100">
                    <h2 className={SectionHeader}>
                        {patternData.sections[1].title}
                        <span className="text-sm font-normal text-gray-500 ml-3">({patternData.sections[1].time})</span>
                    </h2>
                    <p className="text-gray-700 mb-3 text-base md:text-lg">{patternData.sections[1].description}</p>
                    <p className="text-gray-500 italic mt-3 text-sm mb-4">{patternData.sections[1].note}</p>

                    {/* Adaptive Test General Questions Table */}
                    <h3 className={SubSectionHeader}>{patternData.sections[1].subSections[0].title}</h3>
                    <TestTable 
                        data={patternData.sections[1].subSections[0].table}
                        headerText="Adaptive Test এর প্রশ্ন প্রকারভেদ"
                    />

                    {/* Interactive Reading Table */}
                    <h3 className={SubSectionHeader}>৩.১. {patternData.sections[1].subSections[1].title}</h3>
                    <p className="text-gray-700 mb-3 text-base">{patternData.sections[1].subSections[1].description}</p>
                    <TestTable 
                        data={patternData.sections[1].subSections[1].table}
                        headerText="Interactive Reading প্রশ্ন প্রকারভেদ"
                    />
                    
                    {/* Interactive Listening Table */}
                    <h3 className={SubSectionHeader}>৩.২. {patternData.sections[1].subSections[2].title}</h3>
                    <p className="text-gray-700 mb-3 text-base">{patternData.sections[1].subSections[2].description}</p>
                    <TestTable 
                        data={patternData.sections[1].subSections[2].table}
                        headerText="Interactive Listening প্রশ্ন প্রকারভেদ"
                    />
                    <p className="text-gray-500 italic mt-3 text-sm">{patternData.sections[1].subSections[2].note}</p>
                </section>
                
                {/* 4. Detailed Sections - Writing & Speaking Sample */}
                <section className="my-6 p-5 md:p-8 bg-white rounded-xl shadow-lg border border-indigo-100">
                    <h2 className={SectionHeader}>
                        {patternData.sections[2].title}
                        <span className="text-sm font-normal text-gray-500 ml-3">({patternData.sections[2].time})</span>
                    </h2>
                    <p className="text-gray-700 mb-4 text-base md:text-lg">{patternData.sections[2].description}</p>

                    {/* Speaking Sample */}
                    <h3 className={SubSectionHeader}>{patternData.sections[2].subSections[0].title}</h3>
                    <ul className={ListStyle}>
                        {patternData.sections[2].subSections[0].items.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>

                    {/* Writing Sample */}
                    <h3 className={SubSectionHeader}>{patternData.sections[2].subSections[1].title}</h3>
                    <ul className={ListStyle}>
                        {patternData.sections[2].subSections[1].items.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    
                    <p className="text-gray-800 font-semibold mt-6 pt-4 border-t border-indigo-100 text-base md:text-lg">{patternData.sections[2].closing}</p>
                </section>

                {/* 5. Frequently Asked Questions (FAQ) */}
                <section className="my-8 p-6 md:p-8 bg-indigo-50 rounded-xl shadow-2xl border border-indigo-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-300 pb-2">
                        শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্নসমূহ-
                    </h2>
                    <div className="divide-y divide-indigo-300">
                        {patternData.faq.map(item => (
                            <FAQItem 
                                key={item.id} 
                                question={item.question} 
                                answer={item.answer} 
                            />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default DuolingoSyllabus;