export default function GREEligibilitySection() {
    return (
        <section className="max-w-7xl mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৮. GRE যোগ্যতা: GRE এর জন্য প্রয়োজনীয় কাগজপত্র
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h3 className="font-semibold text-purple-600 mb-2">বয়সের সীমা</h3>
                        <p className="text-gray-700 text-sm">
                            GRE মূলত স্নাতকোত্তর অধ্যয়নরত ছাত্রছাত্রীদের দ্বারা পছন্দনীয়।
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h3 className="font-semibold text-purple-600 mb-2">বিশ্ববিদ্যালয়ের প্রয়োজনীয়তা</h3>
                        <p className="text-gray-700 text-sm">
                            বিশ্ববিদ্যালয়গুলি ভর্তির জন্য সর্বনিম্ন প্রয়োজনীয়তা নির্ধারণ করে।
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h3 className="font-semibold text-purple-600 mb-2">পরিচয়পত্র প্রমাণ</h3>
                        <p className="text-gray-700 text-sm">
                            GRE রেজিস্ট্রেশনের জন্য আপনার একটি বৈধ পাসপোর্ট প্রয়োজন হবে।
                        </p>
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            GRE আবেদনের জন্য কোন নির্দিষ্ট প্রয়োজনীয়তা নেই।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            GRE মূলত স্নাতকোত্তর অধ্যয়নরত ছাত্রছাত্রীদের দ্বারা পছন্দনীয়।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            বিশ্ববিদ্যালয়গুলি ভর্তির জন্য সর্বনিম্ন প্রয়োজনীয়তা নির্ধারণ করে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            মনে রাখবেন যে GRE রেজিস্ট্রেশনের জন্য আপনার একটি বৈধ পাসপোর্ট প্রয়োজন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার পাসপোর্টের ফটোকপি নয়, মূল কপি জমা দিতে ভুলবেন না।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার পাসপোর্টে আপনার নাম, ছবি এবং স্বাক্ষর থাকতে হবে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার ID এ থাকা নাম রেজিস্ট্রেশন ফর্মের নামের সাথে মিলতে হবে।
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        GRE যোগ্যতা সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
