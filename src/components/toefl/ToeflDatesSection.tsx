export default function ToeflDatesSection() {
    return (
        <section className="max-w-7xl mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ২. TOEFL পরীক্ষার তারিখ: কখন TOEFL পরীক্ষা অনুষ্ঠিত হয়?
                </h2>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <p className="text-purple-800 font-medium">
                        ETS অনুযায়ী, আপনার পছন্দের তারিখ এবং স্লট পেতে আপনাকে অন্তত ৪ মাস আগে রেজিস্ট্রেশন করতে হবে।
                    </p>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            ETS সারা বছর TOEFL পরিচালনা করে যাতে আপনি আপনার সুবিধামতো TOEFL তারিখ বেছে নিতে পারেন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            তবে আমরা সময়ের আগে বুকিং করার পরামর্শ দিই।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            TOEFL iBT রেজিস্ট্রেশনের শেষ তারিখ হবে আপনার পছন্দের তারিখের ৭ দিন আগে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            TOEFL Essential একটি অনলাইন পরীক্ষা যা সপ্তাহে একবার বা দুইবার অনুষ্ঠিত হয়, সাধারণত শনিবার এবং রবিবার। স্লট দিনে ২৪ ঘন্টা উপলব্ধ।
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        TOEFL তারিখ সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
