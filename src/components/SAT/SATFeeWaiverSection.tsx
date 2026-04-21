export default function SATFeeWaiverSection() {
    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৫. SAT পরীক্ষার ফি মওকুফের জন্য যোগ্যতার মানদণ্ড
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        SAT পরীক্ষা এমন শিক্ষার্থীদের জন্য ফি ওয়েভার সুবিধা প্রদান করে, যারা আর্থিক কারণে রেজিস্ট্রেশনের খরচ বহন করতে সমস্যায় পড়তে পারে।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        বাংলাদেশ স্কলার্স প্রোগ্রামে যোগ্য হতে হলে আপনাকে নিচের শর্তগুলো পূরণ করতে হবে:
                    </p>
                </div>

                {/* Income-Based Eligibility */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                        ১. আয়ভিত্তিক যোগ্যতা
                    </h3>

                    <div className="space-y-4">
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-green-700">
                                    <strong>SAT রেজিস্ট্রেশনে ৯০% ছাড়:</strong> যেসব শিক্ষার্থীর পরিবারের বার্ষিক আয় ৮ লাখ টাকার কম।
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-blue-700">
                                    <strong>SAT রেজিস্ট্রেশনে ৫০% ছাড়:</strong> যেসব শিক্ষার্থীর পরিবারের বার্ষিক আয় ৮ লাখ থেকে ১৫ লাখ টাকার মধ্যে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Merit-Based Scholarship Eligibility */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                        ২. মেধাভিত্তিক স্কলারশিপ যোগ্যতা
                    </h3>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                স্কলারশিপের জন্য আবেদন করতে শিক্ষার্থীদের SAT পরীক্ষায় অন্তত <strong>১৩০০ স্কোর</strong> অর্জন করতে হবে।
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                স্কলারশিপ শুধুমাত্র অংশগ্রহণকারী বাংলাদেশি বিশ্ববিদ্যালয়গুলোতে পাওয়া যাবে।
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">
                                যেসব শিক্ষার্থীর পরিবারের বার্ষিক আয় <strong>৮ লাখ টাকার কম</strong>, তারা পূর্ণ টিউশন ফি স্কলারশিপের জন্য যোগ্য।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Special Recognition Section */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">🏆</span>
                        <h3 className="text-lg font-semibold text-orange-800">
                            বিশেষ স্বীকৃতি
                        </h3>
                    </div>
                    <p className="text-orange-700 leading-relaxed">
                        SAT-এ <strong>১৩০০ বা তার বেশি স্কোর</strong> করলে আপনি শুধু স্কলারশিপের যোগ্যই হবেন না, বরং <strong>SAT Bangladesh Top Performer</strong> হিসেবে স্বীকৃতি পাবেন, যা বিশ্ববিদ্যালয়ে আবেদন করার সময় আপনাকে প্রতিযোগিতায় বাড়তি সুবিধা দেবে।
                    </p>
                </div>

                {/* Summary Table */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        সংক্ষিপ্ত তালিকা
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                            <thead>
                            <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                                <th className="border border-gray-300 p-3 text-left font-medium">আয়ের পরিসীমা</th>
                                <th className="border border-gray-300 p-3 text-left font-medium">ছাড়ের হার</th>
                                <th className="border border-gray-300 p-3 text-left font-medium">স্কলারশিপ সুবিধা</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 p-3">৮ লাখ টাকার কম</td>
                                <td className="border border-gray-300 p-3">৯০% ছাড়</td>
                                <td className="border border-gray-300 p-3">পূর্ণ টিউশন ফি স্কলারশিপ</td>
                            </tr>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="border border-gray-300 p-3">৮-১৫ লাখ টাকা</td>
                                <td className="border border-gray-300 p-3">৫০% ছাড়</td>
                                <td className="border border-gray-300 p-3">আংশিক স্কলারশিপ সুবিধা</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 p-3">১৫ লাখ টাকার বেশি</td>
                                <td className="border border-gray-300 p-3">কোনো ছাড় নেই</td>
                                <td className="border border-gray-300 p-3">মেধাভিত্তিক স্কলারশিপ (১৩০০+ স্কোর)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Important Note */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">⚠️</span>
                        <h4 className="font-semibold text-red-800">গুরুত্বপূর্ণ তথ্য</h4>
                    </div>
                    <p className="text-red-700">
                        স্কলারশিপ ও ফি মওকুফের জন্য আয়ের প্রমাণপত্র এবং প্রয়োজনীয় কাগজপত্র জমা দিতে হবে। আবেদনের সময়সীমা মেনে চলা অত্যন্ত গুরুত্বপূর্ণ।
                    </p>
                </div>
            </div>
        </section>
    );
}
