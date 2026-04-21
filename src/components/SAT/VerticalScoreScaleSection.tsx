import NewCustomTable from "@/components/NewCustomTable.tsx";

export default function VerticalScoreScaleSection() {
    // Table data for vertical score scale
    const verticalScaleData = [
        {
            examProgram: "PSAT 8/9",
            totalScoreScale: "২৪০–১৪৪০ (১০-পয়েন্ট ব্যবধান)",
            sectionScoreScale: "১২০–৭২০ (১০-পয়েন্ট ব্যবধান)"
        },
        {
            examProgram: "PSAT/NMSQT and PSAT 10",
            totalScoreScale: "৩২০–১৫২০ (১০-পয়েন্ট ব্যবধান)",
            sectionScoreScale: "১৬০–৭৬০ (১০-পয়েন্ট ব্যবধান)"
        },
        {
            examProgram: "SAT",
            totalScoreScale: "ৄ০০–১৬০০ (১০-পয়েন্ট ব্যবধান)",
            sectionScoreScale: "২০০–৮০০ (১০-পয়েন্ট ব্যবধান)"
        }
    ];

    const tableColumns = [
        { key: 'examProgram', label: 'পরীক্ষার প্রোগ্রাম', width: 'w-1/3' },
        { key: 'totalScoreScale', label: 'মোট স্কোরের স্কেল', width: 'w-1/3' },
        { key: 'sectionScoreScale', label: 'সেকশনভিত্তিক স্কোরের স্কেল', width: 'w-1/3' }
    ];

    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৩. Vertical স্কোর স্কেল
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        ডিজিটাল SAT Suite-এ Vertical Score Scale ব্যবহার করা হয়, যা শিক্ষার্থী এবং শিক্ষককে একইভাবে একাডেমিক উন্নতি পর্যবেক্ষণ করতে সক্ষম করে।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে বিভিন্ন মূল্যায়নের জন্য স্কোরিং রেঞ্জের সারসংক্ষেপ দেওয়া হলো।
                    </p>
                </div>

                {/* Vertical Score Scale Table */}
                <NewCustomTable
                    data={verticalScaleData}
                    columns={tableColumns}
                    className="mb-8"
                />

                {/* Information Box */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">📊</span>
                        <h4 className="font-semibold text-blue-800">Vertical Score Scale এর সুবিধা</h4>
                    </div>
                    <div className="space-y-2">
                        <p className="text-blue-700">
                            • একই স্কেলে সকল পরীক্ষার স্কোর তুলনা করা যায়
                        </p>
                        <p className="text-blue-700">
                            • শিক্ষার্থীর একাডেমিক উন্নতি ধারাবাহিকভাবে পর্যবেক্ষণ সম্ভব
                        </p>
                        <p className="text-blue-700">
                            • বিভিন্ন গ্রেডের মধ্যে তুলনামূলক মূল্যায়ন সহজতর
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
