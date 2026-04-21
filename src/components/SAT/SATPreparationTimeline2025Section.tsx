export default function SATPreparationTimeline2025Section() {
    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ১. SAT প্রস্তুতির টাইমলাইন ২০২৫
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        অধিকাংশ শিক্ষার্থী উচ্চ স্কোর পাওয়ার জন্য SAT-এর জন্য এক বছর আগে থেকেই প্রস্তুতি নেয়। শুরু করা যত তাড়াতাড়ি সম্ভব, তত ভালো ফল পাওয়ার সম্ভাবনা বেশি। যদি আপনি ২০২৬ সালের intake-এর জন্য প্রস্তুতি নিচ্ছেন, তাহলে নিচের সময়রেখা অনুসরণ করতে পারেন:
                    </p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-6">
                    {/* 12-14 Months */}
                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <h3 className="text-lg font-bold text-blue-800 mb-4">
                            ১২–১৪ মাস আগে
                        </h3>
                        <p className="text-blue-700">
                            SAT-এর ফরম্যাট এবং স্ট্রাকচারের সাথে পরিচিত হন। আপনার শক্তি ও দুর্বলতা বোঝার জন্য ডায়াগনস্টিক টেস্ট শুরু করুন।
                        </p>
                    </div>

                    {/* 8-10 Months */}
                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                        <h3 className="text-lg font-bold text-green-800 mb-4">
                            ৮–১০ মাস আগে
                        </h3>
                        <p className="text-green-700">
                            একটি স্ট্রাকচারড SAT প্রস্তুতি ক্লাসে ভর্তি হন বা অনলাইন SAT prep কোর্স করুন, যেখানে বিশেষজ্ঞের গাইডলাইন পাবেন।
                        </p>
                    </div>

                    {/* 6 Months */}
                    <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                        <h3 className="text-lg font-bold text-orange-800 mb-4">
                            ৬ মাস আগে
                        </h3>
                        <p className="text-orange-700">
                            অনুশীলন বাড়ান, দুর্বল দিকগুলিতে ফোকাস করুন এবং নিয়মিত ফুল-লেংথ মক টেস্ট দিন।
                        </p>
                    </div>

                    {/* 3 Months */}
                    <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                        <h3 className="text-lg font-bold text-purple-800 mb-4">
                            ৩ মাস আগে
                        </h3>
                        <p className="text-purple-700">
                            আপনার কৌশলগুলো ফাইন-টিউন করুন, সময় ব্যবস্থাপনা এবং সঠিকতার দিকে বিশেষ মনোযোগ দিন।
                        </p>
                    </div>

                    {/* 1 Month */}
                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-bold text-red-800 mb-4">
                            ১ মাস আগে
                        </h3>
                        <p className="text-red-700">
                            সব ম্যাটেরিয়াল রিভিউ করুন এবং সপ্তাহে অন্তত দুইবার পরীক্ষার পরিস্থিতিতে মক টেস্ট দিন।
                        </p>
                    </div>
                </div>

                {/* Timeline Visual */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
                        📅 SAT প্রস্তুতির সময়রেখা
                    </h3>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">
                                ১২-১ৄ
                            </div>
                            <p className="text-blue-700 text-sm font-medium">পরিচিতি ও ডায়াগনস্টিক</p>
                        </div>
                        <div className="hidden md:block text-gray-400 text-2xl">→</div>
                        <div className="text-center">
                            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">
                                ৮-১০
                            </div>
                            <p className="text-green-700 text-sm font-medium">কোর্স ও গাইডলাইন</p>
                        </div>
                        <div className="hidden md:block text-gray-400 text-2xl">→</div>
                        <div className="text-center">
                            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">
                                ৬
                            </div>
                            <p className="text-orange-700 text-sm font-medium">অনুশীলন বৃদ্ধি</p>
                        </div>
                        <div className="hidden md:block text-gray-400 text-2xl">→</div>
                        <div className="text-center">
                            <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">
                                ৩
                            </div>
                            <p className="text-purple-700 text-sm font-medium">কৌশল উন্নয়ন</p>
                        </div>
                        <div className="hidden md:block text-gray-400 text-2xl">→</div>
                        <div className="text-center">
                            <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">
                                ১
                            </div>
                            <p className="text-red-700 text-sm font-medium">চূড়ান্ত প্রস্তুতি</p>
                        </div>
                    </div>
                </div>

                {/* Key Takeaway */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">⏰</span>
                        <h4 className="font-semibold text-yellow-800">মনে রাখবেন</h4>
                    </div>
                    <p className="text-yellow-700">
                        যত তাড়াতাড়ি শুরু করবেন, তত ভালো ফল পাওয়ার সম্ভাবনা বেশি। ধৈর্য ও নিয়মিত অনুশীলনই সফলতার চাবিকাঠি।
                    </p>
                </div>
            </div>
        </section>
    );
}
