
export default function GRESyllabusPatternSection() {
    return (
        <section className="max-w-7xl mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    2. GRE সিলেবাস ও প্যাটার্ন: পরীক্ষায় কি থাকে?
                </h2>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <p className="text-purple-800 font-medium mb-2">
                        নতুন আপডেট অনুযায়ী Verbal এবং Quantitative বিভাগে ৪৬টি কম প্রশ্ন থাকবে।
                    </p>
                    <p className="text-purple-800 font-medium">
                        Analytical Writing এ দুটির পরিবর্তে শুধুমাত্র একটি টাস্ক থাকবে।
                    </p>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            GRE তিনটি অংশে বিভক্ত: Verbal, Quantitative এবং Analytical Reasoning।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            নতুন আপডেট অনুযায়ী Verbal এবং Quantitative বিভাগে ৪৬টি কম প্রশ্ন থাকবে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            Analytical Writing এ দুটির পরিবর্তে শুধুমাত্র একটি টাস্ক থাকবে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            Verbal Reasoning বিভাগ প্যাসেজ বিশ্লেষণ, তাদের অর্থ বোঝা এবং লেখকের দৃষ্টিভঙ্গি ব্যাখ্যা করার আপনার দক্ষতা মূল্যায়ন করে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            Quantitative Reasoning বিভাগ পরিমাণগত তথ্য বোঝা এবং গাণিতিক সমস্যা সমাধানের আপনার দক্ষতা মূল্যায়ন করে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            Analytical Reasoning বিভাগ যৌক্তিক এবং কাঠামোগত পদ্ধতিতে আপনার চিন্তা ও ধারণা প্রকাশ করার দক্ষতা মূল্যায়ন করে।
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        GRE সিলেবাস ও প্যাটার্ন সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
