export default function SATRegistrationProcessSection() {
    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ২. SAT পরীক্ষা ২০২৫-এর জন্য কীভাবে নিবন্ধন করবেন?
                </h2>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        ২০২৫ সালে বাংলাদেশে SAT রেজিস্ট্রেশন করার ধাপে ধাপে নির্দেশিকা
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে গুরুত্বপূর্ণ নথি, পেমেন্ট এবং টিপসসহ ধাপে ধাপে SAT রেজিস্ট্রেশন করার প্রক্রিয়া দেওয়া হলো। চাইলে আমি ঢাকায় নিকটতম SAT টেস্ট সেন্টারও খুঁজে দিতে পারি।
                    </p>
                </div>

                {/* Step 1 */}
                <div className="mb-8">
                    <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500 mb-4">
                        <h3 className="text-lg font-bold text-purple-800 mb-4">
                            ১. College Board অ্যাকাউন্ট তৈরি করুন
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-purple-700">
                                    College Board SAT ওয়েবসাইটে যান এবং সাইন আপ / লগইন করুন।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-purple-700">
                                    আপনার লগইন তথ্য (ইমেইল/পাসওয়ার্ড) মনে রাখুন এবং কনফার্মেশন ইমেইল স্প্যাম ফোল্ডারে আছে কিনা চেক করুন।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="mb-8">
                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 mb-4">
                        <h3 className="text-lg font-bold text-blue-800 mb-4">
                            ২. গুরুত্বপূর্ণ তারিখ ও ডেডলাইন জানুন
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-blue-700">
                                    ২০২৫-২০২৬ সালের SAT তারিখ ও ডেডলাইন চেক করুন।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-blue-700">
                                    রেজিস্ট্রেশন ডেডলাইন, লেট ফি, ইত্যাদি যাচাই করুন।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-blue-700">
                                    সাধারণ রেজিস্ট্রেশন ডেডলাইন এবং প্রয়োজনে লেট রেজিস্ট্রেশন মজুদ রাখুন।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="mb-8">
                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500 mb-4">
                        <h3 className="text-lg font-bold text-green-800 mb-4">
                            ৩. টেস্ট সেন্টার খুঁজুন
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-green-700">
                                    SAT সাইটের "Find Test Centers" টুল ব্যবহার করুন।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-green-700">
                                    বাংলাদেশের এমন একটি টেস্ট সেন্টার নির্বাচন করুন যা সুবিধাজনক এবং চাহিদা অনুযায়ী সিট আছে কিনা চেক করুন।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="mb-8">
                    <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500 mb-4">
                        <h3 className="text-lg font-bold text-orange-800 mb-4">
                            ৪. প্রয়োজনীয় নথি / ছবি প্রস্তুত করুন
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-orange-700">
                                    বৈধ পাসপোর্ট বা অন্য যে কোনো অনুমোদিত ছবি পরিচয়পত্র। (বাংলাদেশে সাধারণত পাসপোর্ট প্রয়োজন)
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-orange-700">
                                    সাম্প্রতিক পাসপোর্ট সাইজের ছবি (ডিজিটাল ফটো) আপনার SAT প্রোফাইল বা রেজিস্ট্রেশনের জন্য প্রয়োজন হতে পারে।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-orange-700">
                                    যদি প্রয়োজন হয়, স্কুল বা CEEB কোড (স্কোর পাঠানোর জন্য ইত্যাদি)।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="mb-8">
                    <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500 mb-4">
                        <h3 className="text-lg font-bold text-teal-800 mb-4">
                            ৫. পেমেন্ট
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-teal-700">
                                    আন্তর্জাতিক SAT ফি প্রযোজ্য। আন্তর্জাতিক পেমেন্টের জন্য ক্রেডিট/ডেবিট কার্ড ব্যবহার করতে হবে।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-teal-700">
                                    মনে রাখবেন, কখনও কখনও লেট রেজিস্ট্রেশন বা পরিবর্তন/বাতিল ফি প্রযোজ্য হতে পারে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 6 */}
                <div className="mb-8">
                    <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500 mb-4">
                        <h3 className="text-lg font-bold text-indigo-800 mb-4">
                            ৬. অনলাইনে রেজিস্ট্রেশন করুন
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-indigo-700">
                                    College Board অ্যাকাউন্ট থেকে SAT → Registration এ যান।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-indigo-700">
                                    টেস্ট তারিখ, টেস্ট সেন্টার নির্বাচন করুন।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-indigo-700">
                                    বিস্তারিত তথ্য দিন (পাসপোর্টের নাম অনুযায়ী নাম, ঠিকানা, ছবি ইত্যাদি), প্রয়োজন হলে ছবি আপলোড করুন এবং ফি প্রদান করুন।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 7 */}
                <div className="mb-8">
                    <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500 mb-4">
                        <h3 className="text-lg font-bold text-pink-800 mb-4">
                            ৭. কনফার্মেশন সংরক্ষণ ও প্রিন্ট করুন
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-pink-700">
                                    রেজিস্ট্রেশনের পর একটি কনফার্মেশন পেজ/ইমেইল পাবেন। এটি সংরক্ষণ করুন এবং সম্ভব হলে প্রিন্ট করুন।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-pink-700">
                                    কনফার্মেশনে টেস্টের লোকেশন, সময়, আনতে যা অনুমোদিত আছে ইত্যাদি উল্লেখ থাকে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 8 */}
                <div className="mb-8">
                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500 mb-4">
                        <h3 className="text-lg font-bold text-red-800 mb-4">
                            ৮. পরীক্ষার দিনে
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-red-700">
                                    বৈধ পাসপোর্ট / ID সঙ্গে আনুন।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-red-700">
                                    প্রিন্ট করা কনফার্মেশন স্লিপ বা ডিজিটাল কপি সঙ্গে রাখুন।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-red-700">
                                    অনুমোদিত সব জিনিস (যেমন: পেন্সিল, অনুমোদিত ক্যালকুলেটর) নিয়ে যান।
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <p className="text-red-700">
                                    সময়মতো পৌঁছান এবং দরজা খোলার সময় চেক করুন।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Tips */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">💡</span>
                        <h3 className="text-lg font-semibold text-orange-800">
                            গুরুত্বপূর্ণ টিপস
                        </h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-orange-700">
                                রেজিস্ট্রেশনের সময় সব তথ্য দুবার চেক করুন কারণ পরে পরিবর্তন করতে অতিরিক্ত ফি লাগে।
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-orange-700">
                                বাংলাদেশে SAT টেস্ট সেন্টার সীমিত, তাই যত তাড়াতাড়ি সম্ভব রেজিস্ট্রেশন করুন।
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-orange-700">
                                পরীক্ষার দিনে পাসপোর্ট ও কনফার্মেশন টিকিট ছাড়া পরীক্ষা দিতে পারবেন না।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
