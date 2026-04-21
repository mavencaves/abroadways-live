
export default function ToeflResultsSection() {
    return (
        <section className="max-w-7xl mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৪. TOEFL ফলাফল: কিভাবে আপনার TOEFL ফলাফল দেখবেন?
                </h2>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <p className="text-purple-800 font-medium mb-2">
                        একটি ভালো TOEFL ফলাফল নির্ভর করে আপনি যে বিশ্ববিদ্যালয়গুলিতে আবেদন করার পরিকল্পনা করছেন তাদের প্রয়োজনীয়তার উপর।
                    </p>
                    <p className="text-purple-800 font-medium">
                        সাধারণত, একটি ভালো TOEFL iBT স্কোর ৮০ থেকে ১০০ এর মধ্যে পড়ে।
                    </p>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            TOEFL iBT ফলাফল সাধারণত পরীক্ষার ৪-৮ দিনের মধ্যে প্রকাশিত হয়।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার ETS অ্যাকাউন্টে লগইন করে ফলাফল বিভাগে গিয়ে আপনার TOEFL ফলাফল দেখতে পারেন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            শীর্ষ র‌্যাঙ্কিং বিশ্ববিদ্যালয়গুলি সাধারণত উচ্চ স্কোরের প্রয়োজনীয়তা রাখে (১০০-১১৫ এর মধ্যে)।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            এছাড়াও, উন্নত স্তরের বোঝাপড়ার সাথে কোর্সগুলি আরও উচ্চ স্কোরের দাবি করবে।
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        TOEFL ফলাফল সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
