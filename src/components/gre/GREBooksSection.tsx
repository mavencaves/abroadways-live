
export default function GREBooksSection() {
    return (
        <section className="max-w-7xl mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ১০. GRE বই: GRE এর জন্য সেরা রিসোর্স কোনগুলো?
                </h2>

                <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার কাঙ্ক্ষিত গ্রেড অর্জনের জন্য GRE প্রস্তুতি সঠিক হতে হবে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            GRE বইগুলি আপনার GRE প্রস্তুতি নিখুঁত করার জন্য সেরা উপকরণগুলির মধ্যে কিছু।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            এই বইগুলির বেশিরভাগই নমুনা প্রশ্নপত্র বা অনুশীলন পরীক্ষা রয়েছে যা আপনার প্রস্তুতিতে সহায়তা করে।
                        </p>
                    </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100 mb-6">
                    <h3 className="text-lg font-semibold text-purple-800 mb-4">
                        এখানে আমাদের শীর্ষ ৫টি GRE বই:
                    </h3>

                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">১.</span>
                            <p className="text-purple-700 font-medium">
                                The Official Guide to the GRE General Test by ETS
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">২.</span>
                            <p className="text-purple-700 font-medium">
                                Official GRE Super Power Pack - ETS
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">৩.</span>
                            <p className="text-purple-700 font-medium">
                                Official GRE Verbal Reasoning Practice Questions - ETS
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">৪.</span>
                            <p className="text-purple-700 font-medium">
                                Princeton Review GRE Premium Prep, 2023 - Princeton Review
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold min-w-[20px]">৫.</span>
                            <p className="text-purple-700 font-medium">
                                GRE Test Prep - Barron
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        GRE বই সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
