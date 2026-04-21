import { useState } from 'react';

export default function PTEComparisonSection() {
    const [activeComparison, setActiveComparison] = useState(null);

    //@ts-ignore
    const toggleComparison = (comparison:any) => {
        setActiveComparison(activeComparison === comparison ? null : comparison);
    };

    return (
        <section className="max-w-7xl mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৯. PTE বনাম অন্যান্য ইংরেজি দক্ষতা পরীক্ষা
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        বিদেশে অধ্যয়ন এবং ইমিগ্রেশনের জন্য সঠিক ইংরেজি দক্ষতা পরীক্ষা বেছে নেওয়া অত্যন্ত গুরুত্বপূর্ণ। সেরা বিকল্প নির্ধারণে আপনাকে সাহায্য করার জন্য নিচে PTE বনাম IELTS এবং PTE বনাম TOEFL এর তুলনা দেওয়া হল।
                    </p>

                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className="w-full bg-purple-50 hover:bg-purple-100 p-4 text-left flex justify-between items-center transition-colors duration-200"
                                onClick={() => toggleComparison('ielts')}
                            >
                                <span className="text-purple-700 font-semibold text-lg">PTE VS IELTS</span>
                                <svg
                                    className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${activeComparison === 'ielts' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeComparison === 'ielts' && (
                                <div className="p-4 bg-white border-t border-gray-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-purple-600 mb-2">PTE এর সুবিধা:</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• কম্পিউটার-ভিত্তিক, দ্রুত ফলাফল (২ দিন)</li>
                                                <li>• AI স্কোরিং, নিরপেক্ষ মূল্যায়ন</li>
                                                <li>• বেশি পরীক্ষার তারিখ উপলব্ধ</li>
                                                <li>• স্পিকিং সেকশনে কম চাপ</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-purple-600 mb-2">IELTS এর সুবিধা:</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• ব্যাপক বৈশ্বিক গ্রহণযোগ্যতা</li>
                                                <li>• মানুষের সাথে স্পিকিং ইন্টারভিউ</li>
                                                <li>• কাগজ-ভিত্তিক বিকল্প উপলব্ধ</li>
                                                <li>• দীর্ঘদিনের প্রতিষ্ঠিত খ্যাতি</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className="w-full bg-purple-50 hover:bg-purple-100 p-4 text-left flex justify-between items-center transition-colors duration-200"
                                onClick={() => toggleComparison('toefl')}
                            >
                                <span className="text-purple-700 font-semibold text-lg">PTE VS TOEFL</span>
                                <svg
                                    className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${activeComparison === 'toefl' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeComparison === 'toefl' && (
                                <div className="p-4 bg-white border-t border-gray-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-purple-600 mb-2">PTE এর সুবিধা:</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• দ্রুততর ফলাফল (২ দিন বনাম ৪-৮ দিন)</li>
                                                <li>• সহজ রেজিস্ট্রেশন প্রক্রিয়া</li>
                                                <li>• একক পরীক্ষা সেশন (২ ঘন্টা)</li>
                                                <li>• AI-ভিত্তিক নিরপেক্ষ স্কোরিং</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-purple-600 mb-2">TOEFL এর সুবিধা:</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• যুক্তরাষ্ট্রে ব্যাপক গ্রহণযোগ্যতা</li>
                                                <li>• একাডেমিক ইংরেজিতে ফোকাস</li>
                                                <li>• ETS এর প্রতিষ্ঠিত ব্র্যান্ড</li>
                                                <li>• বিস্তৃত প্রস্তুতির সম্পদ</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
