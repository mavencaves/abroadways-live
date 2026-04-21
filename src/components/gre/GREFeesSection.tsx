
export default function GREFeesSection() {
    return (
        <section className="max-w-7xl mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৩. GRE পরীক্ষার ফি: GRE এর খরচ কত?
                </h2>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        বাংলাদেশে GRE পরীক্ষার ফি
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                            <thead>
                            <tr className="bg-purple-600 text-white">
                                <th className="border border-gray-300 p-3 text-left font-medium">
                                    GRE পরীক্ষা (ক্যাটেগরি)
                                </th>
                                <th className="border border-gray-300 p-3 text-left font-medium">
                                    বাংলাদেশে GRE পরীক্ষার ফি (BDT)
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 p-3">GRE General Test</td>
                                <td className="border border-gray-300 p-3">BDT 25,500</td>
                            </tr>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="border border-gray-300 p-3">Rescheduling fee</td>
                                <td className="border border-gray-300 p-3">BDT 6,500</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 p-3">Changing test centre</td>
                                <td className="border border-gray-300 p-3">BDT 6,500</td>
                            </tr>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="border border-gray-300 p-3">Changing your Subject Test</td>
                                <td className="border border-gray-300 p-3">BDT 6,500</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 p-3">Additional score report</td>
                                <td className="border border-gray-300 p-3">BDT 4,200</td>
                            </tr>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="border border-gray-300 p-3">Score review</td>
                                <td className="border border-gray-300 p-3">BDT 7,200</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 p-3">Score reinstatement</td>
                                <td className="border border-gray-300 p-3">BDT 6,500</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            রেজিস্ট্রেশন প্রক্রিয়ার শেষে আপনি GRE ফি পরিশোধ করতে পারেন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            পেমেন্ট সম্পূর্ণ করতে আপনি ক্রেডিট/ডেবিট কার্ড ব্যবহার করতে পারেন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            মনে রাখবেন যে আপনি যদি আপনার GRE বাতিল বা পুনর্নির্ধারণ করতে হয় তাহলে অতিরিক্ত চার্জ জড়িত।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            কখন আপনি আপনার পরীক্ষা বাতিল বা পুনর্নির্ধারণ করেন তার উপর নির্ভর করে চার্জ পরিবর্তিত হয়।
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        GRE ফি সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
