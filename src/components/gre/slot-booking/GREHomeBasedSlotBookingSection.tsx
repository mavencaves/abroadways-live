export default function GREHomeBasedSlotBookingSection() {
    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৪. আসন্ন Home-Based GRE স্লট বুকিং তারিখ
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        GRE পরীক্ষায় অংশগ্রহণের জন্য ETS আরও একটি বিকল্প প্রদান করে।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        এখন আপনি চাইলে ঘরে বসেই GRE পরীক্ষা দিতে পারেন।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিম্নলিখিত তারিখগুলো থেকে আপনি আপনার GRE Home Exam এর জন্য পছন্দের তারিখ বেছে নিতে পারেন:
                    </p>
                </div>

                {/* Home-Based GRE Booking Dates Table */}
                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mb-8">
                    <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-800">
                            ঘরে বসে GRE স্লট বুকিং তারিখ
                        </h3>
                    </div>

                    <table className="w-full">
                        <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="px-4 py-3 text-left">মাস</th>
                            <th className="px-4 py-3 text-left">তারিখ</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">অক্টোবর</td>
                            <td className="px-4 py-3 text-sm">২, ৩, ৄ, ৫, ৬, ৭, ৮, ১০, ১১, ১২, ১৩, ১৪, ১৫, ১৬, ১৭, ১৮, ১৯, ২০, ২১, ২২, ২৩, ২ৄ, ২৫, ২৬, ২৭, ২৮, ২৯, ৩০, ৩১</td>
                        </tr>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">নভেম্বর</td>
                            <td className="px-4 py-3 text-sm">১, ২, ৩, ৄ, ৫, ৬, ৭, ৮, ৯, ১০, ১১, ১২, ১ৃ, ১ৄ, ১৫, ১৬, ১৭, ১৮, ১৯, ২০, ২১, ২২, ২ৃ, ২ৄ, ২৫, ২৬, ২৭, ২৮, ২৯, ৩০</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">ডিসেম্বর</td>
                            <td className="px-4 py-3 text-sm">১, ২, ৃ, ৄ, ৫, ৬, ৭, ৮, ৯, ১০, ১১, ১২, ১৩, ১ৄ, ১৫, ১৬, ১৭, ১৮, ১৯, ২০, ২১, ২২, ২৩, ২৪, ২৫, ২৬, ২৭, ২৮, ২৯, ৩০, ৩১</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        ঘরে বসেই GRE পরীক্ষা বুক করার প্রক্রিয়া সহজ এবং সুবিধাজনক। তবে একমাত্র জিনিস যা প্রয়োজন তা হলো এমন একটি সেটআপ যা আপনাকে ঝামেলা ছাড়াই পরীক্ষা দেওয়ার সুযোগ দেবে।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        এই সেটআপে অন্তর্ভুক্ত থাকা উচিত:
                    </p>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">কোনো ব্যাঘাত ছাড়া একটি শান্ত রুম</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">যথাযথ নেটওয়ার্ক সংযোগসহ ল্যাপটপ</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">কাজ করছে এমন স্পিকার ও মাইক্রোফোন</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700">সঠিকভাবে কাজ করা ক্যামেরা, যদি না থাকে তবে একটি ওয়েবক্যাম সেটআপ করা</p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        সবকিছু ঠিকভাবে সেট করা থাকা অত্যন্ত গুরুত্বপূর্ণ, যাতে আপনি সহজেই পরীক্ষা দিতে পারেন।
                    </p>
                </div>

                {/* Cost Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-purple-600 mb-6">
                        GRE স্লট বুকিং খরচ
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        ETS GRE পরীক্ষা পরিচালনার জন্য একটি মূল ফি ধার্য করে। GRE General Test-এর জন্য প্রায় BDT ২৫,০০০, এবং GRE Subject Test-এর জন্য ফি প্রায় BDT ১৭,০০০।
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        দয়া করে মনে রাখুন, ফি সময়ে সময়ে পরিবর্তিত হতে পারে। আমরা সর্বদা এটি আপডেট রাখব যাতে আপনাকে সর্বশেষ তথ্য দেওয়া যায়।
                    </p>
                </div>

                {/* Cost Info Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">💰 GRE General Test</h4>
                        <p className="text-blue-700 text-sm">BDT ২৫,০০০</p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-green-800 mb-2">📚 GRE Subject Test</h4>
                        <p className="text-green-700 text-sm">BDT ১৭,০০০</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
