import NewCustomTable from "@/components/NewCustomTable.tsx";

export default function SATEligibilityCriteriaSection() {
    // Table data for SAT eligibility criteria
    const eligibilityData = [
        {
            criteria: "বয়সের শর্ত",
            details: "SAT দেওয়ার জন্য কোনো সরকারি বয়সসীমা নেই।"
        },
        {
            criteria: "শিক্ষাগত যোগ্যতা",
            details: "College Board কোনো ন্যূনতম শিক্ষাগত যোগ্যতার শর্ত নির্ধারণ করেনি।"
        },
        {
            criteria: "SAT পরীক্ষার প্রচেষ্টা সংখ্যা",
            details: "পরীক্ষায় অংশগ্রহণের জন্য কোনো নির্দিষ্ট সরকারি সীমা নেই।"
        }
    ];

    const columns = [
        { key: 'criteria', label: 'দিক', width: 'w-1/3' },
        { key: 'details', label: 'বিস্তারিত', width: 'w-2/3' }
    ];

    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ১. SAT পরীক্ষার যোগ্যতার মানদণ্ড ২০২৫
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        ২০২৫ সালে SAT পরীক্ষার জন্য রেজিস্ট্রেশন করতে হলে কিছু নির্দিষ্ট যোগ্যতার মানদণ্ড পূরণ করতে হবে। যদিও মূল শর্তগুলো বেশ সহজ, তবুও বিস্তারিতভাবে জানা জরুরি যাতে আপনি কোনো সমস্যায় না পড়ে পরীক্ষার জন্য প্রস্তুতি নিতে পারেন।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        এখানে ২০২৫ সালের SAT পরীক্ষার যোগ্যতার মানদণ্ডের একটি সংক্ষিপ্তসার দেওয়া হলো।
                    </p>
                </div>

                {/* Custom Table */}
                <NewCustomTable
                    data={eligibilityData}
                    columns={columns}
                    className="mb-8"
                />

                {/* Additional Information */}
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 mt-8">
                    <h3 className="text-lg font-semibold text-purple-800 mb-4">
                        গুরুত্বপূর্ণ নোট
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-purple-700">
                                যদিও কোনো আনুষ্ঠানিক বয়সসীমা নেই, তবে সাধারণত ১৬-১৮ বছর বয়সী শিক্ষার্থীরা এই পরীক্ষা দেন।
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-purple-700">
                                শিক্ষাগত যোগ্যতার কোনো বাধ্যবাধকতা না থাকলেও, উচ্চমাধ্যমিক পর্যায়ের গণিত ও ইংরেজি জ্ঞান থাকা প্রয়োজন।
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-purple-700">
                                পরীক্ষার সংখ্যার সীমা না থাকলেও, প্রতিবার পরীক্ষার জন্য পূর্ণ ফি দিতে হবে।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
