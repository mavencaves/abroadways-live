export default function GRESlotBookingSection() {
    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৫. GRE স্লট বুকিং
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        একজন GRE পরীক্ষার প্রার্থী হিসেবে রেজিস্ট্রেশনের আগে কিছু গুরুত্বপূর্ণ বিষয় মনে রাখা জরুরি। পরীক্ষার স্লট বুক করতে হলে আপনার একটি ডেবিট বা ক্রেডিট কার্ড প্রয়োজন হবে রেজিস্ট্রেশন ফি BDT ২৫,০০০ পরিশোধ করার জন্য, সঙ্গে একটি বৈধ পাসপোর্ট।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে আরও কিছু গুরুত্বপূর্ণ বিষয় উল্লেখ করা হলো:
                    </p>
                </div>

                {/* Requirements Section */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                        <span className="text-xl">💳</span>
                        প্রয়োজনীয় উপকরণ
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <h4 className="font-medium text-blue-800 mb-2">💰 পেমেন্ট</h4>
                            <p className="text-blue-700 text-sm">ডেবিট বা ক্রেডিট কার্ড</p>
                            <p className="text-blue-700 text-sm font-semibold">রেজিস্ট্রেশন ফি: BDT ২৫,০০০</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <h4 className="font-medium text-blue-800 mb-2">📘 পরিচয়পত্র</h4>
                            <p className="text-blue-700 text-sm">বৈধ বাংলাদেশি পাসপোর্ট</p>
                            <p className="text-blue-700 text-sm">সঠিক তথ্য অত্যন্ত গুরুত্বপূর্ণ</p>
                        </div>
                    </div>
                </div>

                {/* Important Guidelines */}
                <div className="space-y-6 mb-8">
                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                            <span className="text-xl">⚠️</span>
                            সঠিক তথ্য প্রদান করুন
                        </h3>
                        <p className="text-red-700">
                            ETS অ্যাপ্লিকেশনে দেওয়া তথ্য অবশ্যই আপনার বৈধ বাংলাদেশি পাসপোর্টের তথ্যের সঙ্গে হুবহু মিলতে হবে। সামান্য কোনো অমিল থাকলেও পরীক্ষাকেন্দ্রে প্রবেশাধিকার বাতিল হতে পারে।
                        </p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                        <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                            <span className="text-xl">🏢</span>
                            ফরম্যাট যাচাই করুন
                        </h3>
                        <p className="text-orange-700">
                            আপনার অবস্থানে কোন ধরনের টেস্ট ফরম্যাট (Test Centre বা GRE at Home) উপলব্ধ রয়েছে তা যাচাই করুন এবং আপনি কোনটিতে স্বাচ্ছন্দ্যবোধ করেন তা বিবেচনা করুন। আপনার জন্য উপযুক্ত ফরম্যাট নির্বাচন করাটা অত্যন্ত জরুরি।
                        </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                        <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <span className="text-xl">📋</span>
                            নীতিমালা ভালোভাবে পড়ুন
                        </h3>
                        <p className="text-green-700">
                            GRE পরীক্ষার জন্য রেজিস্ট্রেশন করার আগে অবশ্যই পরীক্ষার নীতিমালা ভালোভাবে পড়ে বুঝে নিন। এর মধ্যে পরীক্ষার নিয়মাবলি, স্কোরিং পলিসি এবং ক্যানসেলেশন নীতিমালা অন্তর্ভুক্ত।
                        </p>
                    </div>
                </div>

                {/* Test Format Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                            <span className="text-xl">🏢</span>
                            Test Centre
                        </h3>
                        <div className="space-y-2">
                            <p className="text-blue-700 text-sm">• ঐতিহ্যবাহী পরীক্ষাকেন্দ্রে পরীক্ষা</p>
                            <p className="text-blue-700 text-sm">• নিয়ন্ত্রিত পরিবেশ</p>
                            <p className="text-blue-700 text-sm">• COVID-19 নিরাপত্তা প্রোটোকল</p>
                        </div>
                    </div>

                    <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                            <span className="text-xl">🏠</span>
                            GRE at Home
                        </h3>
                        <div className="space-y-2">
                            <p className="text-purple-700 text-sm">• ঘরে বসে পরীক্ষা দেওয়ার সুবিধা</p>
                            <p className="text-purple-700 text-sm">• সিস্টেম রিকোয়ারমেন্টস পূরণ প্রয়োজন</p>
                            <p className="text-purple-700 text-sm">• প্রক্টরিং সিস্টেম সহায়তা</p>
                        </div>
                    </div>
                </div>

                {/* Key Policies Checklist */}
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                        <span className="text-xl">📝</span>
                        গুরুত্বপূর্ণ নীতিমালা চেকলিস্ট
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <p className="text-yellow-700 text-sm font-medium">• পরীক্ষার নিয়মাবলি</p>
                            <p className="text-yellow-700 text-sm">পরীক্ষার দিনের নিয়ম</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-yellow-700 text-sm font-medium">• স্কোরিং পলিসি</p>
                            <p className="text-yellow-700 text-sm">স্কোর পাঠানোর নিয়ম</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-yellow-700 text-sm font-medium">• ক্যানসেলেশন নীতিমালা</p>
                            <p className="text-yellow-700 text-sm">পরীক্ষা বাতিলের শর্তাবলি</p>
                        </div>
                    </div>
                </div>

                {/* Final Note */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <span className="text-xl">🎯</span>
                        সফল রেজিস্ট্রেশনের জন্য
                    </h3>
                    <p className="text-green-700">
                        এই নির্দেশিকা মেনে এবং প্রয়োজনীয় তথ্য সম্পর্কে সচেতন থেকে প্রার্থীরা সঠিকভাবে GRE পরীক্ষার জন্য প্রস্তুতি নিতে এবং রেজিস্ট্রেশন করতে পারবেন, যা তাদের একাডেমিক সাফল্যের পথে সহায়ক হবে।
                    </p>
                </div>
            </div>
        </section>
    );
}
