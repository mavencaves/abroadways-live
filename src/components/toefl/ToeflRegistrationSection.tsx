
export default function ToeflRegistrationSection() {
    return (
        <section className="max-w-7xl mx-auto s py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৭. TOEFL রেজিস্ট্রেশন: কিভাবে TOEFL এর জন্য রেজিস্ট্রেশন করবেন?
                </h2>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <p className="text-purple-800 font-medium">
                        নতুন TOEFL আপডেট অনুযায়ী, রেজিস্ট্রেশন প্রক্রিয়া অনেক সহজ করা হয়েছে।
                    </p>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                            <p className="text-gray-700 font-medium mb-2">
                                একটি ETS অ্যাকাউন্ট তৈরি করে আপনি অনলাইনে রেজিস্ট্রেশন করতে পারেন। রেজিস্ট্রেশন করতে এই ধাপগুলি অনুসরণ করুন।
                            </p>
                            <ul className="ml-6 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-600">অফিসিয়াল ETS TOEFL ওয়েবসাইট ভিজিট করুন।</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-600">একটি ETS অ্যাকাউন্ট তৈরি করুন।</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-600">উপলব্ধ বিকল্পগুলি থেকে আপনার পছন্দের পরীক্ষার তারিখ এবং স্থান নির্বাচন করুন।</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-600">আপনার বিবরণ দিয়ে রেজিস্ট্রেশন ফর্ম সম্পূর্ণ করুন।</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-600">একটি বৈধ পেমেন্ট পদ্ধতি ব্যবহার করে TOEFL পরীক্ষার ফি পরিশোধ করুন।</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনি ফোন বা মেইলের মাধ্যমেও রেজিস্ট্রেশন করতে পারেন।
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        TOEFL রেজিস্ট্রেশন সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
