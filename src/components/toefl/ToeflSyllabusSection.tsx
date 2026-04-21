export default function ToeflSyllabusSection() {
    return (
        <section className="max-w-7xl mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৯. TOEFL সিলেবাস: পরীক্ষায় কি থাকে?
                </h2>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <p className="text-purple-800 font-medium">
                        TOEFL পরীক্ষার সিলেবাসে দৈনন্দিন প্রসঙ্গ, একাডেমিক বিষয়, বৈশ্বিক সমস্যা, সাংস্কৃতিক পরিস্থিতি এবং সাধারণ জ্ঞানের আলোচনা অন্তর্ভুক্ত রয়েছে।
                    </p>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            <strong>TOEFL Reading</strong> জটিল তথ্য পড়া এবং বোঝার আপনার ক্ষমতা পরীক্ষা করে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            <strong>TOEFL Listening</strong> কথ্য ইংরেজি থেকে বোধগম্যতা অর্জনের আপনার ক্ষমতা পরীক্ষা করে। এটি পরীক্ষককে বুঝতে সাহায্য করে যে আপনি লেকচার এবং অন্যান্য কথোপকথনের সাথে কতটা ভালোভাবে তাল মিলাতে পারেন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            <strong>TOEFL Writing</strong> কাগজে আপনার ধারণাগুলি কতটা ভালোভাবে যোগাযোগ করতে পারেন তা বোঝার জন্য ডিজাইন করা হয়েছে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            <strong>TOEFL Speaking</strong> আপনার কথ্য ইংরেজি পরীক্ষা করে। মূল ফোকাস আপনার ভাষার দক্ষতা এবং সাবলীলতার উপর।
                        </p>
                    </div>
                </div>

                <div className="mb-6">
                    <p className="text-gray-700 font-medium mb-4">TOEFL প্যাটার্ন নিচে দেখানো হয়েছে।</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                        <div className="bg-purple-600 text-white p-3 rounded-lg text-center font-medium">
                            TOEFL Reading Section
                        </div>
                        <div className="bg-purple-100 text-purple-800 p-3 rounded-lg text-center font-medium">
                            TOEFL Listening Section
                        </div>
                        <div className="bg-purple-100 text-purple-800 p-3 rounded-lg text-center font-medium">
                            TOEFL Speaking Section
                        </div>
                        <div className="bg-purple-100 text-purple-800 p-3 rounded-lg text-center font-medium">
                            TOEFL Writing Section
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">TOEFL Reading Section</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                            <p className="text-purple-700">২টি রিডিং প্যাসেজ, প্রতিটিতে ১০টি প্রশ্ন</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                            <p className="text-purple-700">৩৬ মিনিট</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        TOEFL সিলেবাস সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
