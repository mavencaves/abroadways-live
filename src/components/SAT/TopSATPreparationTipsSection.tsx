import { useState } from "react";

export default function TopSATPreparationTipsSection() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const accordionItems = [
        { title: "Reading and Writing Section", content: "" },
        { title: "Maths Section", content: "" },
        { title: "Essay Section (If Applicable)", content: "" }
    ];

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ২. শীর্ষ SAT প্রস্তুতি টিপস
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        SAT-এর জন্য প্রস্তুতি শুরু করা প্রথমে ভয় লাগার মতো হতে পারে, কিন্তু এটিকে ছোট ছোট manageable অংশে ভাগ করলে অনেক সহজ হয়। প্রকৃতপক্ষে, যারা স্ট্রাকচারড স্টাডি প্ল্যান অনুসরণ করে, তারা SAT-এ উল্লেখযোগ্যভাবে বেশি স্কোর করে।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে কিছু গুরুত্বপূর্ণ SAT প্রস্তুতি টিপস দেওয়া হলো যা আপনাকে সফল হতে সাহায্য করবে:
                    </p>
                </div>

                {/* Top SAT Preparation Tips Infographic */}
                <div className="mb-8">
                    <div className="bg-gradient-to-br from-sky-100 to-blue-100 border-2 border-sky-300 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-sky-700 text-center mb-8">
                            Top SAT Preparation Tips
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Left Column */}
                            <div className="space-y-3">
                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        01
                                    </div>
                                    <span className="text-sm font-medium">Understand the Exam Format</span>
                                </div>

                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        02
                                    </div>
                                    <span className="text-sm font-medium">Set a Realistic Study Schedule</span>
                                </div>

                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        03
                                    </div>
                                    <span className="text-sm font-medium">Take Diagnostic Tests Early</span>
                                </div>

                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        04
                                    </div>
                                    <span className="text-sm font-medium">Practice with Official SAT Materials</span>
                                </div>

                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        05
                                    </div>
                                    <span className="text-sm font-medium">Learn Time Management</span>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-3">
                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        06
                                    </div>
                                    <span className="text-sm font-medium">Review Mistakes Thoroughly</span>
                                </div>

                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        07
                                    </div>
                                    <span className="text-sm font-medium">Build Stamina with Full-Length Tests</span>
                                </div>

                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        08
                                    </div>
                                    <span className="text-sm font-medium">Focus on Vocabulary Building</span>
                                </div>

                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        09
                                    </div>
                                    <span className="text-sm font-medium">Utilise Online Resources</span>
                                </div>

                                <div className="bg-sky-600 text-white rounded-full px-4 py-3 flex items-center gap-3">
                                    <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                        10
                                    </div>
                                    <span className="text-sm font-medium">Stay Consistent & Positive</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Tips */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold text-blue-800 mb-2">১. পরীক্ষার ফরম্যাট বোঝা</h4>
                            <p className="text-blue-700 text-sm">
                                SAT-এর স্ট্রাকচার, প্রশ্নের সংখ্যা, সময় সীমা এবং স্কোরিং সিস্টেমের সাথে পরিচিত হন। এটি আপনাকে পরীক্ষার সময় সময় ব্যবস্থাপনা করতে সাহায্য করবে।
                            </p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-semibold text-green-800 mb-2">২. স্টাডি প্ল্যান তৈরি করা</h4>
                            <p className="text-green-700 text-sm">
                                আপনার টার্গেট স্কোর অনুযায়ী বাস্তবসম্মত লক্ষ্য নির্ধারণ করুন এবং ২০২৫ সালের SAT তারিখ অনুযায়ী একটি স্টাডি শিডিউল তৈরি করুন।
                            </p>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                            <h4 className="font-semibold text-orange-800 mb-2">৩. ডায়াগনস্টিক টেস্ট শুরুতে নেওয়া</h4>
                            <p className="text-orange-700 text-sm">
                                প্রস্তুতি শুরু করার সময় একটি ডায়াগনস্টিক টেস্ট নিন, যাতে আপনার শক্তি ও দুর্বলতা বোঝা যায়।
                            </p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                            <h4 className="font-semibold text-purple-800 mb-2">৪. অফিসিয়াল SAT ম্যাটেরিয়াল দিয়ে প্র্যাকটিস করা</h4>
                            <p className="text-purple-700 text-sm">
                                Khan Academy-এর Official SAT Practice বা College Board-এর স্টাডি গাইড ব্যবহার করুন।
                            </p>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                            <h4 className="font-semibold text-teal-800 mb-2">৫. সময় ব্যবস্থাপনা শিখুন</h4>
                            <p className="text-teal-700 text-sm">
                                সময়সীমার মধ্যে প্রশ্নের উত্তর দেওয়ার অনুশীলন করুন।
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                            <h4 className="font-semibold text-indigo-800 mb-2">৬. ভুলগুলো ভালোভাবে রিভিউ করা</h4>
                            <p className="text-indigo-700 text-sm">
                                প্রতিটি প্র্যাকটিস টেস্টের পর আপনার ভুলগুলো বিশ্লেষণ করুন।
                            </p>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                            <h4 className="font-semibold text-red-800 mb-2">৭. ফুল-লেন্থ টেস্ট দিয়ে স্ট্যামিনা তৈরি করা</h4>
                            <p className="text-red-700 text-sm">
                                নিয়মিত ফুল-লেন্থ প্র্যাকটিস টেস্ট নিন।
                            </p>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                            <h4 className="font-semibold text-yellow-800 mb-2">৮. ভোকাবুলারি উন্নয়নে ফোকাস করুন</h4>
                            <p className="text-yellow-700 text-sm">
                                Reading এবং Writing সেকশনের জন্য শক্তিশালী ভোকাবুলারি অত্যন্ত গুরুত্বপূর্ণ।
                            </p>
                        </div>

                        <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                            <h4 className="font-semibold text-pink-800 mb-2">৯. অনলাইন রিসোর্স ব্যবহার করুন</h4>
                            <p className="text-pink-700 text-sm">
                                অনলাইন SAT prep টুলস এবং ক্লাস ব্যবহার করুন।
                            </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                            <h4 className="font-semibold text-gray-800 mb-2">১০. কনসিস্টেন্ট এবং পজিটিভ থাকুন</h4>
                            <p className="text-gray-700 text-sm">
                                ধারাবাহিকতা সাফল্যের চাবিকাঠি। আপনার স্টাডি শিডিউল মেনে চলুন।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section-wise Preparation Tips */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-purple-600 mb-6">
                        সেকশন অনুযায়ী SAT প্রস্তুতির টিপস
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        SAT-এর জন্য প্রস্তুতি নেওয়ার জন্য একটি মনোযোগী এবং প্রতিটি সেকশনের জন্য উপযুক্ত পদ্ধতি প্রয়োজন। আপনার Reading, Writing, এবং Math দক্ষতা উন্নত করে আপনি নির্দিষ্ট চ্যালেঞ্জগুলো মোকাবেলা করতে এবং আত্মবিশ্বাস বাড়াতে পারবেন। শুরু করার উপায়গুলো হলো নিম্নরূপ:
                    </p>
                </div>

                {/* Section Accordions */}
                <div className="space-y-4">
                    {accordionItems.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className="w-full bg-purple-100 hover:bg-purple-200 p-4 text-left flex justify-between items-center transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-gray-800 font-medium text-lg">{item.title}</span>
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                    <span className="text-lg font-bold">
                                        {openAccordion === index ? '−' : '+'}
                                    </span>
                                </div>
                            </button>
                            {openAccordion === index && (
                                <div className="p-4 bg-white border-t border-gray-200">
                                    <p className="text-gray-700">{item.content || "বিস্তারিত তথ্য শীঘ্রই যোগ করা হবে।"}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
