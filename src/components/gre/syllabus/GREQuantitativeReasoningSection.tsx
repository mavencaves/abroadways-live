export default function GREQuantitativeReasoningSection() {
    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৪. GRE সিলেবাস ২০২৫: Quantitative Reasoning
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        গণিত ব্যবসা এবং আইন কোর্সের একটি গুরুত্বপূর্ণ অংশ।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        GRE সিলেবাসে Quantitative Reasoning অন্তর্ভুক্ত রয়েছে যাতে বোঝা যায়:
                    </p>

                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">আপনার প্রাথমিক গণিত দক্ষতা কতটা ভালো</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">আপনি মৌলিক গণিত ধারণাগুলো কত ভালোভাবে বোঝেন</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">আপনার পরিমাণগতভাবে যুক্তি বিশ্লেষণের ক্ষমতা</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">আপনি পরিমাণগত পদ্ধতি ব্যবহার করে সমস্যা সমাধান কতটা ভালো করতে পারেন</span>
                        </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে GRE সিলেবাসের Quantitative Reasoning সেকশনে অন্তর্ভুক্ত বিষয়গুলোর একটি বিভাজন দেওয়া হলো।
                    </p>
                </div>

                {/* Quantitative Reasoning Table */}
                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mb-8">
                    <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-800">
                            GRE সিলেবাস ও প্যাটার্ন ২০২৪: Quantitative Reasoning সেকশন
                        </h3>
                    </div>

                    <table className="w-full">
                        <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="px-4 py-3 text-left">গণিত বিষয়সমূহ</th>
                            <th className="px-4 py-3 text-left">বর্ণনা</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">Arithmetic</td>
                            <td className="px-4 py-3 text-sm">Properties of integers (divisibility, prime numbers), arithmetic operations, estimation, percent, ratio, decimal representation</td>
                        </tr>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">Algebra</td>
                            <td className="px-4 py-3 text-sm">Exponents, factoring, equations, inequalities, coordinate geometry (graphing functions, equations)</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">Geometry</td>
                            <td className="px-4 py-3 text-sm">Lines, circles, triangles (isosceles, equilateral), quadrilaterals, polygons, 3D figures, measurements (area, perimeter, volume)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-4 py-3 font-medium">Data Analysis</td>
                            <td className="px-4 py-3 text-sm">Descriptive statistics, interpreting data in tables and graphs, probability, random variables, counting methods</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="text-green-700">
                        গণিত অনেকেরই ভয় লাগে, কিন্তু এখানে চিন্তার কিছু নেই, কারণ এর বেশিরভাগ ধারণা উচ্চ বিদ্যালয়ে শেখানো হয়। আপনাকে কেবল আপনার জ্ঞানটি একটু রিফ্রেশ করতে হবে!
                    </p>
                </div>
            </div>
        </section>
    );
}
