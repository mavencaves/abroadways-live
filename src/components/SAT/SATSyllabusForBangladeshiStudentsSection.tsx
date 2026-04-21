import { useState } from "react";

export default function SATSyllabusForBangladeshiStudentsSection() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const accordionItems = [
        { title: "Algebra", content: "" },
        { title: "Advanced Mathematics", content: "" },
        { title: "Problem-solving and Data Analysis", content: "" },
        { title: "Geometry and Trigonometry", content: "" }
    ];

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৪. বাংলাদেশি শিক্ষার্থীদের জন্য SAT পরীক্ষা সিলেবাস
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        বাংলাদেশি শিক্ষার্থীদের জন্য SAT সিলেবাস অন্য আন্তর্জাতিক শিক্ষার্থীদের মতোই, তবে আপনার শিক্ষাগত পটভূমি অনুযায়ী কিছু সমন্বয় প্রয়োজন হতে পারে।
                    </p>
                </div>

                {/* Focus Areas for Bangladeshi Students */}
                <div className="mb-8">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                একজন বাংলাদেশি শিক্ষার্থী হিসেবে, আপনাকে কিছু বিষয়ের উপর অধিক মনোযোগ দিতে হতে পারে, বিশেষ করে Mathematics সেকশনে, যেহেতু এই বিষয়গুলিতে শিক্ষার্থীদের সাধারণত শক্ত ভিত্তি থাকে।
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                উদাহরণস্বরূপ, যদি আপনি ইঞ্জিনিয়ারিং পড়াশোনার পরিকল্পনা করেন, তবে আপনাকে জানা উচিত যে, SAT পরীক্ষার ইঞ্জিনিয়ারিং সিলেবাসের জন্য আপনাকে SAT Math সিলেবাস এবং SAT Physics সাবজেক্ট টেস্ট-এর উপর ফোকাস করতে হবে, যাতে আপনার আবেদন আরও শক্তিশালী হয়।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Math Topics Accordion */}
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

                {/* Important Tips for Bangladeshi Students */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">🇧🇩</span>
                        <h3 className="text-lg font-semibold text-blue-800">
                            বাংলাদেশি শিক্ষার্থীদের জন্য বিশেষ টিপস
                        </h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-blue-700">
                                গণিতে আপনার শক্তিশালী ভিত্তি কাজে লাগান - বাংলাদেশি শিক্ষার্থীরা সাধারণত গণিতে ভালো করেন
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-blue-700">
                                ইংরেজি Reading এবং Writing সেকশনে অতিরিক্ত অনুশীলন করুন
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-blue-700">
                                ইঞ্জিনিয়ারিং বা সায়েন্স ক্ষেত্রে আগ্রহী হলে SAT Subject Tests বিবেচনা করুন
                            </p>
                        </div>
                    </div>
                </div>

                {/* Strengths and Focus Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-green-800 mb-2">💪 আপনার শক্তিশালী দিক</h4>
                        <div className="space-y-2">
                            <p className="text-green-700 text-sm">
                                • গণিত এবং বিজ্ঞানে দৃঢ় ভিত্তি
                            </p>
                            <p className="text-green-700 text-sm">
                                • Algebra এবং Geometry-তে ভালো প্রস্তুতি
                            </p>
                            <p className="text-green-700 text-sm">
                                • Problem-solving দক্ষতা
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">🎯 ফোকাস এলাকা</h4>
                        <div className="space-y-2">
                            <p className="text-orange-700 text-sm">
                                • ইংরেজি vocabulary এবং reading comprehension
                            </p>
                            <p className="text-orange-700 text-sm">
                                • Writing এবং grammar rules
                            </p>
                            <p className="text-orange-700 text-sm">
                                • Data analysis এবং statistics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
