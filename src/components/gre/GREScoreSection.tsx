
export default function GREScoreSection() {
    return (
        <section className="max-w-7xl mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৫. GRE স্কোর কি?
                </h2>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <p className="text-purple-800 font-medium">
                        GRE General test স্কোর রেঞ্জ ১৩০ থেকে ১৭০ এর মধ্যে।
                    </p>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            পরীক্ষায় আপনার পারফরম্যান্সের ভিত্তিতে GRE স্কোর প্রদান করা হয়।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            GRE বিশ্ববিদ্যালয়গুলিতে পাঠানোর জন্য সেরা স্কোর নির্বাচনের জন্য একটি ScoreSelect বিকল্প প্রদান করে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            Quantitative এবং Verbal বিভাগে ১-পয়েন্ট বৃদ্ধি রয়েছে।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            এদিকে, Analytical বিভাগ ০-৬ রেঞ্জে স্কোর করা হয়, অর্ধ-পয়েন্ট বৃদ্ধি সহ।
                        </p>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        সংক্ষেপে:
                    </h3>

                    <p className="text-gray-700 font-medium mb-3">GRE স্কোর বিতরণ</p>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                            <thead>
                            <tr className="bg-purple-600 text-white">
                                <th className="border border-gray-300 p-3 text-left font-medium">
                                    GRE General বিভাগ
                                </th>
                                <th className="border border-gray-300 p-3 text-left font-medium">
                                    GRE স্কোর রেঞ্জ
                                </th>
                                <th className="border border-gray-300 p-3 text-left font-medium">
                                    GRE স্কোর গণনা
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 p-3">Verbal Reasoning</td>
                                <td className="border border-gray-300 p-3">১৩০–১৭০</td>
                                <td className="border border-gray-300 p-3">প্রতি সঠিক উত্তরের জন্য +১</td>
                            </tr>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="border border-gray-300 p-3">Quantitative Reasoning</td>
                                <td className="border border-gray-300 p-3">১৩০–১৭০</td>
                                <td className="border border-gray-300 p-3">প্রতি সঠিক উত্তরের জন্য +১</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 p-3">Analytical Writing</td>
                                <td className="border border-gray-300 p-3">০-৬</td>
                                <td className="border border-gray-300 p-3">প্রতি সঠিক উত্তরের জন্য +০.৫</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">নোট:</h4>
                    <p className="text-purple-700">
                        ৩০০ এর উপরে যেকোনো স্কোর একটি ভালো GRE General স্কোর হিসেবে বিবেচিত হয় এবং বিশ্বব্যাপী ভালো বিশ্ববিদ্যালয়ে ভর্তি হতে সাহায্য করতে পারে।
                    </p>
                </div>
            </div>
        </section>
    );
}
