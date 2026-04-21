
export default function ToeflBooksSection() {
    return (
        <section className="max-w-7xl mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ১০. TOEFL বই: TOEFL এর জন্য সেরা রিসোর্স কোনগুলো?
                </h2>

                <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            TOEFL বইগুলি সাধারণত বিভাগ-ভিত্তিক অধ্যয়ন উপকরণ এবং অনুশীলন পরীক্ষা সহ একটি অল-ইন-ওয়ান রিসোর্স।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            বই জ্ঞানের একটি দুর্দান্ত উৎস হতে পারে, বিশেষ করে যদি আপনি স্ব-অধ্যয়নের পরিকল্পনা করেন।
                        </p>
                    </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100 mb-6">
                    <h3 className="text-lg font-semibold text-purple-800 mb-4">
                        প্রস্তুতির জন্য শীর্ষ ৫টি TOEFL বই
                    </h3>

                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">১.</span>
                            <p className="text-purple-700 font-medium">
                                The Official Guide to the TOEFL iBT Test (সর্বশেষ সংস্করণ)
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">২.</span>
                            <p className="text-purple-700 font-medium">
                                The TOEFL iBT Test Prep Planner
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">৩.</span>
                            <p className="text-purple-700 font-medium">
                                Official TOEFL iBT Tests, Volumes 1 & 2
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">৪.</span>
                            <p className="text-purple-700 font-medium">
                                TOEFL Preparation Book, 2020 and 2021 by Test Prep Books
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">৫.</span>
                            <p className="text-purple-700 font-medium">
                                TOEFL iBT Prep, 2021 by The Princeton Review
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        TOEFL বই সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
