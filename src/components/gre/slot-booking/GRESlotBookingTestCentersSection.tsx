export default function GRESlotBookingTestCentersSection() {
    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ১. GRE স্লট বুকিং: পরীক্ষাকেন্দ্র
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচের তালিকায় আমরা বাংলাদেশে GRE পরীক্ষার জন্য জনপ্রিয় পরীক্ষাকেন্দ্রগুলো উল্লেখ করেছি।
                    </p>
                </div>

                {/* Test Centers Table */}
                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mb-8">
                    <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-800">
                            GRE পরীক্ষাকেন্দ্র: শহর অনুযায়ী তালিকা
                        </h3>
                    </div>

                    <table className="w-full">
                        <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="px-4 py-3 text-left">শহর</th>
                            <th className="px-4 py-3 text-left">পরীক্ষাকেন্দ্রের ঠিকানা</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-6 font-medium align-top">ঢাকা</td>
                            <td className="px-4 py-6">
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-gray-800 mb-1">American Alumni Association (AAA):</p>
                                        <p className="text-gray-700 text-sm">ডেল্টা ডালিয়া টাওয়ার (৩য় তলা), ৩৬ কেমাল আতাতুর্ক এভিনিউ, বনানী, ঢাকা – ১২১ৃ</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 mb-1">DNS Software Ltd.:</p>
                                        <p className="text-gray-700 text-sm">হাউস # ৬০, রোড # ৯, ২য় তলা, ব্লক-এফ, বনানী, ঢাকা-১২১৩</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-4 py-6 font-medium align-top">চট্টগ্রাম</td>
                            <td className="px-4 py-6">
                                <div>
                                    <p className="font-semibold text-gray-800 mb-1">Executive's Care, চট্টগ্রাম:</p>
                                    <p className="text-gray-700 text-sm">আইইবি বিল্ডিং, ২য় তলা, ৬০ এস এস খালেদ রোড, লালখান বাজার, চট্টগ্রাম</p>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
