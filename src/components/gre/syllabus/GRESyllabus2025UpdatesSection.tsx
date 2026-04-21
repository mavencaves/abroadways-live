export default function GRESyllabus2025UpdatesSection() {
    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ১. GRE সিলেবাস ২০২৫: সর্বশেষ আপডেট
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        GRE পরীক্ষায় ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে এবং বর্তমান বিজনেস স্কুলগুলোর চাহিদা পূরণ করতে বেশ কিছু পরিবর্তন আনা হয়েছে।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নতুন GRE সিলেবাসে যা পরিবর্তন হয়েছে:
                    </p>
                </div>

                {/* Updates List */}
                <div className="space-y-4 mb-8">
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-blue-700">
                                GRE এখন আরও ছোট হয়েছে। পুরো পরীক্ষা শেষ করতে মাত্র ২ ঘণ্টা লাগবে।
                            </p>
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-green-700">
                                Analytical Writing সেকশন থেকে "Analyse an Argument" টাস্ক বাদ দেওয়া হয়েছে।
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-orange-700">
                                Quantitative এবং Verbal Reasoning সেকশনে প্রশ্নের সংখ্যা কমানো হয়েছে।
                            </p>
                        </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-purple-700">
                                Unscored সেকশন বাতিল করা হয়েছে।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
