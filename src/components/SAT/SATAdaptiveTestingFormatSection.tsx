export default function SATAdaptiveTestingFormatSection() {
    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৫. SAT Adaptive টেস্টিং ফরম্যাট
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        ডিজিটাল SAT-তে পরিচয় করানো এডাপটিভ টেস্টিং ফিচার পরীক্ষাটিকে প্রতিটি শিক্ষার্থীর বোঝার স্তরের সাথে আরও মানানসই করে তোলে।
                    </p>
                </div>

                {/* How Adaptive Testing Works */}
                <div className="mb-8">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                এই ফরম্যাটটি আপনার প্রতিটি উত্তর অনুযায়ী প্রশ্নের কঠিনতা পরিবর্তন করে, যা একটি ব্যক্তিগতকৃত পরীক্ষার অভিজ্ঞতা নিশ্চিত করে।
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                এডাপটিভ সিস্টেম নিশ্চিত করে যে, আপনি অত্যন্ত কঠিন প্রশ্নে চাপযুক্ত বা সহজ প্রশ্নে বিরক্ত হবেন না।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                        এডাপটিভ টেস্টিং-এর মূল সুবিধাসমূহ:
                    </h3>

                    <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-blue-700">
                                    প্রতিটি শিক্ষার্থীর জন্য উপযুক্ত প্রশ্ন প্রদান করে ন্যায়পরায়ণতা বাড়ায়।
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-green-700">
                                    শিক্ষার্থীর ক্ষমতার নির্ভুল মূল্যায়ন দেয়।
                                </p>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-orange-700">
                                    প্রতিটি শিক্ষার্থীকে সঠিকভাবে চ্যালেঞ্জ করার মাধ্যমে চাপ কমায়।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Visually */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-purple-800 mb-4">
                        🎯 কীভাবে Adaptive Testing কাজ করে
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                                ১
                            </div>
                            <p className="text-purple-700 text-sm">
                                আপনি একটি প্রশ্নের উত্তর দেন
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                                ২
                            </div>
                            <p className="text-purple-700 text-sm">
                                সিস্টেম আপনার উত্তর বিশ্লেষণ করে
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                                ৩
                            </div>
                            <p className="text-purple-700 text-sm">
                                পরবর্তী প্রশ্নের কঠিনতা সমন্বয় করা হয়
                            </p>
                        </div>
                    </div>
                </div>

                {/* Advantages for Different Students */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-teal-800 mb-2">📚 দুর্বল শিক্ষার্থীদের জন্য</h4>
                        <div className="space-y-2">
                            <p className="text-teal-700 text-sm">
                                • অত্যধিক কঠিন প্রশ্নে হতাশা কম
                            </p>
                            <p className="text-teal-700 text-sm">
                                • নিজের স্তর অনুযায়ী প্রশ্ন পাওয়া
                            </p>
                            <p className="text-teal-700 text-sm">
                                • আত্মবিশ্বাস বৃদ্ধি
                            </p>
                        </div>
                    </div>

                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-indigo-800 mb-2">🏆 উন্নত শিক্ষার্থীদের জন্য</h4>
                        <div className="space-y-2">
                            <p className="text-indigo-700 text-sm">
                                • সহজ প্রশ্নে সময় নষ্ট কম
                            </p>
                            <p className="text-indigo-700 text-sm">
                                • চ্যালেঞ্জিং প্রশ্ন বেশি পাওয়া
                            </p>
                            <p className="text-indigo-700 text-sm">
                                • দক্ষতার সঠিক মূল্যায়ন
                            </p>
                        </div>
                    </div>
                </div>

                {/* Important Note */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <h4 className="font-semibold text-yellow-800">গুরুত্বপূর্ণ তথ্য</h4>
                    </div>
                    <p className="text-yellow-700">
                        Adaptive testing মানে এই নয় যে কঠিন প্রশ্নের উত্তর দিলে আপনার স্কোর বেশি হবে। স্কোরিং সিস্টেম সব প্রশ্নের কঠিনতার স্তর বিবেচনা করে চূড়ান্ত ফলাফল নির্ধারণ করে।
                    </p>
                </div>
            </div>
        </section>
    );
}
