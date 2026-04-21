
export default function GRESyllabusPattern2025Section() {
    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ২. GRE সিলেবাস এবং প্যাটার্ন ২০২৫
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        GRE সিলেবাস তিনটি সেকশনে বিভক্ত: Analytical Writing, Verbal Reasoning এবং Quantitative Reasoning।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        এই তিনটি মডিউল এমনভাবে ডিজাইন করা হয়েছে যাতে ব্যবসা এবং আইন প্রোগ্রামের জন্য সবচেয়ে গুরুত্বপূর্ণ দক্ষতাগুলো মূল্যায়ন করা যায়।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        এখন GRE পরীক্ষা সংক্ষিপ্ত করা হয়েছে এবং এটি মাত্র ১ ঘণ্টা ৫৮ মিনিটে সম্পন্ন করা যাবে। নিচে এর একটি বিভাজন দেওয়া হলো:
                    </p>
                </div>

                {/* GRE Pattern Table */}
                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mb-8">
                    <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-800">
                            GRE সিলেবাস ও প্যাটার্ন ২০২৫
                        </h3>
                    </div>

                    <table className="w-full">
                        <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="px-4 py-3 text-left">বিভাগসমূহ</th>
                            <th className="px-4 py-3 text-left">সময়কাল</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-3">GRE Analytical Writing</td>
                            <td className="px-4 py-3">৩০ মিনিট</td>
                        </tr>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <td className="px-4 py-3">GRE Quantitative Reasoning</td>
                            <td className="px-4 py-3">
                                সেকশন ১: ১৮ মিনিট<br />
                                সেকশন ২: ২৩ মিনিট
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-3">GRE Verbal Reasoning</td>
                            <td className="px-4 py-3">
                                সেকশন ১: ২১ মিনিট<br />
                                সেকশন ২: ২৬ মিনিট
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
