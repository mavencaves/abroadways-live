
export default function GREResultSection() {
    return (
        <section className="max-w-7xl mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৪. GRE ফলাফল: কিভাবে আপনার GRE ফলাফল দেখবেন?
                </h2>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-600 mb-3">
                        General Test
                    </h3>
                    <p className="text-gray-600 mb-4">
                        আপনার পরীক্ষার তারিখ থেকে ১০-১৫ দিনের মধ্যে ফলাফল প্রকাশিত হয়।
                    </p>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            ETS আপনার ফলাফল ঘোষণার জন্য একটি ইমেইল বিজ্ঞপ্তি পাঠায়।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার ETS অ্যাকাউন্টে লগইন করে ETS ওয়েবসাইটে আপনার ফলাফল দেখতে পারেন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            ETS আপনার ফলাফলের ১০-১৫ দিনের মধ্যে বিশ্ববিদ্যালয়গুলিতে আপনার স্কোর পাঠায়।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার GRE ফলাফল পরীক্ষার তারিখ থেকে পাঁচ বছর পর্যন্ত বৈধ।
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        GRE ফলাফল সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
