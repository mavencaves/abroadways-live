export default function SATExamSyllabusSection() {
    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ১. SAT পরীক্ষা সিলেবাস
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        SAT পরীক্ষা বর্ষজুড়ে একাধিকবার অনুষ্ঠিত হয়, এবং ২০২৫ সালের পরীক্ষার চক্রও প্রায় একই প্যাটার্ন অনুসরণ করবে। এছাড়াও, ডিজিটাল ফরম্যাটে স্থানান্তরের কারণে পরীক্ষার কিছু দিক পরিবর্তিত হয়েছে, তাই আপনাকে সর্বশেষ পরিবর্তনের সঙ্গে পরিচিত হতে হবে।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        মূল কোন এলাকাগুলোতে ফোকাস করতে হবে তা জানা আপনার প্রস্তুতি গুরুত্বপূর্ণভাবে উন্নত করতে এবং পরীক্ষার দিনে সেরা পারফরম্যান্স নিশ্চিত করতে সাহায্য করবে।
                    </p>
                </div>

                {/* SAT Structure */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                        SAT-এর কাঠামো:
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                SAT-এ তিনটি মূল সেকশন আছে যা বিভিন্ন দক্ষতা পরীক্ষা করে। এই সেকশনগুলো আপনার স্কোরের জন্য গুরুত্বপূর্ণ এবং বিভিন্ন একাডেমিক দক্ষতা মূল্যায়নের জন্য ডিজাইন করা হয়েছে।
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                মূল সেকশনের পাশাপাশি, নির্দিষ্ট প্রোগ্রামের জন্য ঐচ্ছিক সাবজেক্ট টেস্ট পাওয়া যায়, যেমন: Physics, Chemistry এবং Advanced English।
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                প্রতিটি সেকশন কী পরীক্ষা করে তা বোঝা আপনার সময় এবং প্রচেষ্টা কার্যকরভাবে ব্যবস্থাপনা করতে সাহায্য করবে প্রস্তুতির সময়।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Sections */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-purple-600 mb-6">
                        মূল সেকশন
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        SAT-এর আবশ্যিক সেকশনগুলো:
                    </p>

                    {/* Reading and Writing Section */}
                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 mb-6">
                        <h3 className="text-lg font-bold text-blue-800 mb-4">
                            ১. Reading and Writing
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-blue-700">
                                    এই সেকশনটি আপনার পাঠ্য বোঝা, বিশ্লেষণ এবং সংক্ষেপ করার ক্ষমতা পরীক্ষা করে।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-blue-700">
                                    এটি Grammar, Comprehension, এবং Vocabulary দক্ষতা যাচাই করে।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Math Section */}
                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500 mb-6">
                        <h3 className="text-lg font-bold text-green-800 mb-4">
                            ২. Math
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-green-700">
                                    এই সেকশনটি আপনার গণিত সমস্যা সমাধান এবং তথ্য বিশ্লেষণ করার ক্ষমতা পরীক্ষা করে।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-green-700">
                                    বিষয়ভিত্তিক বিষয়গুলো অন্তর্ভুক্ত: Algebra, Geometry, এবং Trigonometry।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Information Box */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <h4 className="font-semibold text-yellow-800">গুরুত্বপূর্ণ তথ্য</h4>
                    </div>
                    <p className="text-yellow-700">
                        ডিজিটাল ফরম্যাটে পরিবর্তনের কারণে পরীক্ষার প্যাটার্ন ও দৈর্ঘ্য পরিবর্তিত হয়েছে। নিশ্চিত করুন যে আপনি সর্বশেষ আপডেট সম্পর্কে অবগত আছেন।
                    </p>
                </div>
            </div>
        </section>
    );
}
