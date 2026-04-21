import NewCustomTable from "@/components/NewCustomTable.tsx";

export default function SATRegistrationFeesSection() {
    // Main SAT fees data
    const mainFeesData = [
        {
            feeType: "SAT পরীক্ষার মূল ফি",
            amount: "USD ৬৮",
            details: "২০২৫ সালের USA শিক্ষার্থীদের জন্য স্ট্যান্ডার্ড SAT রেজিস্ট্রেশন ফি।"
        },
        {
            feeType: "আন্তর্জাতিক শিক্ষার্থীদের জন্য অতিরিক্ত ফি",
            amount: "USD ৪৩",
            details: "SAT এনরোলমেন্টের সময় আন্তর্জাতিক শিক্ষার্থীদের জন্য অতিরিক্ত ফি।"
        },
        {
            feeType: "প্রযোজ্য কর",
            amount: "USD ১৯.৯৮",
            details: "নির্দিষ্ট অবস্থানগুলিতে প্রযোজ্য।"
        },
        {
            feeType: "মোট SAT ফি",
            amount: "USD ১৩০.৯৮",
            details: "SAT অনলাইন রেজিস্ট্রেশন সম্পন্ন করার সময় মোট ফি।"
        }
    ];

    // Additional fees data
    const additionalFeesData = [
        {
            service: "টেস্ট সেন্টার পরিবর্তন",
            fee: "$২৯",
            details: "শুধুমাত্র টেস্ট সেন্টর পরিবর্তন (তারিখ নয়) করতে চাইলে, এটি SAT রেজিস্ট্রেশনের শেষ তারিখের আগে করতে হবে।"
        },
        {
            service: "রেজিস্ট্রেশন বাতিল",
            fee: "$২৯",
            details: "এটি করতে হবে পরিবর্তনের শেষ তারিখ এর মধ্যে।"
        },
        {
            service: "দেরিতে বাতিলকরণ ফি",
            fee: "$৩৯",
            details: "পরিবর্তনের শেষ তারিখের পরে কিন্তু পরীক্ষার দিনের আগে রেজিস্ট্রেশন বাতিল করুন।"
        },
        {
            service: "দেরিতে রেজিস্ট্রেশন",
            fee: "$৩৪",
            details: "সাধারণ SAT রেজিস্ট্রেশন ডেডলাইনের পরে কিন্তু দেরিতে রেজিস্ট্রেশনের শেষ তারিখের আগে রেজিস্ট্রেশন করুন।"
        }
    ];

    const mainFeesColumns = [
        { key: 'feeType', label: 'ফি প্রকার', width: 'w-1/3' },
        { key: 'amount', label: 'পরিমাণ', width: 'w-1/6' },
        { key: 'details', label: 'বিস্তারিত', width: 'w-1/2' }
    ];

    const additionalFeesColumns = [
        { key: 'service', label: 'পরিষেবা', width: 'w-1/3' },
        { key: 'fee', label: 'ফি (USD)', width: 'w-1/6' },
        { key: 'details', label: 'বিস্তারিত', width: 'w-1/2' }
    ];

    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৩. SAT নিবন্ধন ফি ২০২৫
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        যখন আপনি SAT পরীক্ষার জন্য রেজিস্ট্রেশন করবেন, তখন SAT রেজিস্ট্রেশনের খরচ এবং সম্ভাব্য অতিরিক্ত ফি সম্পর্কে জানা গুরুত্বপূর্ণ।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে SAT-এর সঙ্গে সম্পর্কিত ফি-র বিশদ বিবরণ দেওয়া হলো, যার মধ্যে অনলাইন রেজিস্ট্রেশন এবং ডিজিটাল SAT রেজিস্ট্রেশনের জন্য পরিষেবাগুলো অন্তর্ভুক্ত।
                    </p>
                </div>

                {/* Main SAT Fees Table */}
                <NewCustomTable
                    data={mainFeesData}
                    columns={mainFeesColumns}
                    className="mb-8"
                />

                {/* Total Fee Highlight */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">💰</span>
                        <h4 className="font-semibold text-green-800">মোট খরচ</h4>
                    </div>
                    <p className="text-green-700">
                        বাংলাদেশি শিক্ষার্থীদের জন্য মোট SAT রেজিস্ট্রেশন ফি: <strong>USD ১৩০.৯৮</strong> (প্রায় ১৫,৭০০ টাকা)
                    </p>
                </div>

                {/* Additional SAT Fees Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-purple-600 mb-6">
                        অতিরিক্ত SAT ফি
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        যদি আপনার SAT রেজিস্ট্রেশনের সময় পরিবর্তন করতে হয় বা অতিরিক্ত পরিষেবা চাইতে হয়, তবে নিচের ফি-গুলোর বিষয়ে সচেতন থাকা জরুরি।
                    </p>
                </div>

                {/* Additional Fees Table */}
                <NewCustomTable
                    data={additionalFeesData}
                    columns={additionalFeesColumns}
                    className="mb-8"
                />

                {/* Important Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">💳 পেমেন্ট পদ্ধতি</h4>
                        <div className="space-y-2">
                            <p className="text-blue-700 text-sm">
                                • ক্রেডিট বা ডেবিট কার্ড (Visa, Mastercard)
                            </p>
                            <p className="text-blue-700 text-sm">
                                • PayPal (নির্দিষ্ট দেশের জন্য)
                            </p>
                            <p className="text-blue-700 text-sm">
                                • ACH (শুধুমাত্র US ব্যাংক অ্যাকাউন্ট)
                            </p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">📅 ফি মওকুফ</h4>
                        <div className="space-y-2">
                            <p className="text-yellow-700 text-sm">
                                • আর্থিক সাহায্যের জন্য যোগ্য শিক্ষার্থীরা ফি মওকুফ পেতে পারেন
                            </p>
                            <p className="text-yellow-700 text-sm">
                                • স্কুল কাউন্সেলরের সাহায্য নিন
                            </p>
                        </div>
                    </div>
                </div>

                {/* Warning Box */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">⚠️</span>
                        <h4 className="font-semibold text-red-800">গুরুত্বপূর্ণ সতর্কতা</h4>
                    </div>
                    <div className="space-y-2">
                        <p className="text-red-700">
                            • সব ফি USD-তে প্রদান করতে হবে এবং রিফান্ডযোগ্য নয়।
                        </p>
                        <p className="text-red-700">
                            • দেরিতে রেজিস্ট্রেশন বা পরিবর্তনের ক্ষেত্রে অতিরিক্ত ফি প্রযোজ্য।
                        </p>
                        <p className="text-red-700">
                            • বাংলাদেশি ব্যাংক কার্ডে অতিরিক্ত ইন্টারন্যাশনাল ট্রানজেকশন ফি যোগ হতে পারে।
                        </p>
                    </div>
                </div>

                {/* Cost Breakdown for Bangladesh */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6 mt-6">
                    <h3 className="text-lg font-semibold text-purple-800 mb-4">
                        🇧🇩 বাংলাদেশি শিক্ষার্থীদের জন্য মোট খরচের হিসাব
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-purple-700 mb-2">মূল খরচ:</h4>
                            <div className="space-y-1 text-sm">
                                <p className="text-purple-600">SAT রেজিস্ট্রেশন: USD ১৩০.৯৮</p>
                                <p className="text-purple-600">বাংলাদেশি টাকায়: ≈ ১৫,৭০০ টাকা</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium text-purple-700 mb-2">অতিরিক্ত সম্ভাব্য খরচ:</h4>
                            <div className="space-y-1 text-sm">
                                <p className="text-purple-600">ব্যাংক ট্রানজেকশন ফি: ২-৫%</p>
                                <p className="text-purple-600">দেরিতে রেজিস্ট্রেশন: $৩৪</p>
                                <p className="text-purple-600">পরিবর্তন ফি: $২৯-৩৯</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
