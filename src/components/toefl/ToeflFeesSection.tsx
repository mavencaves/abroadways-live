export default function ToeflFeesSection() {
    return (
        <section className="max-w-7xl mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৩. TOEFL পরীক্ষার ফি: TOEFL এর খরচ কত?
                </h2>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <p className="text-purple-800 font-medium text-lg">
                        TOEFL এর নতুন আপডেটেড ফি হল ২৪,০০০ টাকা।
                    </p>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            রেজিস্ট্রেশন প্রক্রিয়ার সময় আপনি ফি পরিশোধ করতে পারেন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            ফি পরিশোধ এবং রেজিস্ট্রেশনের সময়সীমা পরীক্ষার তারিখের সাত দিন আগে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            যদি আপনি পরে রেজিস্ট্রেশন করার চেষ্টা করেন, তাহলে আপনাকে অতিরিক্ত ৫,২০০ টাকা ফি দিতে হবে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            যদি আপনি আপনার TOEFL পরীক্ষা পুনর্নির্ধারণ করতে চান, তাহলে আপনাকে অতিরিক্ত ৭,২০০ টাকা চার্জ দিতে হবে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনি যদি আপনার TOEFL স্কোরে অসন্তুষ্ট হন তাহলে পুনর্মূল্যায়নের জন্য অনুরোধ করতে পারেন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            পুনর্মূল্যায়ন শুধুমাত্র Speaking এবং Writing বিভাগের জন্য প্রযোজ্য, একটি বিভাগের জন্য ৯,২০০ টাকা খরচ হয়।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার স্কোরে অসন্তুষ্ট হলে সেগুলো বাতিল করার বিকল্পও রয়েছে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            যদি আপনি আপনার স্কোর বাতিল করেন, সেগুলো বিশ্ববিদ্যালয়গুলিতে পাঠানো হবে না।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            ETS বাতিলকরণের জন্য আপনার রেজিস্ট্রেশন ফির ৫০% থেকে ১০০% চার্জ করে।
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        TOEFL ফি সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
