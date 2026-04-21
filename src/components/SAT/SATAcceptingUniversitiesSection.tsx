import { useState } from "react";

export default function SATAcceptingUniversitiesSection() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const accordionItems = [
        { title: "যুক্তরাষ্ট্রের বিশ্ববিদ্যালয়গুলো যারা SAT স্কোর গ্রহণ করে", content: "" },
        { title: "যুক্তরাজ্যের বিশ্ববিদ্যালয়গুলো যারা SAT স্কোর গ্রহণ করে", content: "" },
        { title: "কানাডার বিশ্ববিদ্যালয়গুলো যারা SAT স্কোর গ্রহণ করে", content: "" },
        { title: "অস্ট্রেলিয়ার বিশ্ববিদ্যালয়গুলো যারা SAT স্কোর গ্রহণ করে", content: "" }
    ];

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৭. SAT পরীক্ষার স্কোর গ্রহণকারী বিশ্ববিদ্যালয়সমূহ
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        বিশ্বের অনেক দেশে বিশ্ববিদ্যালয়গুলো SAT পরীক্ষা গ্রহণ করে। এটি সেই শিক্ষার্থীদের জন্য কলেজে ভর্তি প্রক্রিয়ায় গুরুত্বপূর্ণ ভূমিকা রাখে যারা যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা এবং অস্ট্রেলিয়া এর বিশ্ববিদ্যালয়ে ভর্তি হতে চান।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        আপনি কি আপনার স্বপ্নের বিশ্ববিদ্যালয়, যেমন হার্ভার্ড বিশ্ববিদ্যালয় বা স্ট্যানফোর্ড বিশ্ববিদ্যালয়, এ ভর্তি হওয়ার জন্য ১৫০০+ SAT স্কোর অর্জন করতে চান? তাহলে এখনই ফ্রি SAT মাস্টারক্লাস বুক করুন।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে এই দেশগুলোর বিশ্ববিদ্যালয়গুলোর একটি তালিকা দেওয়া হলো, যারা SAT স্কোর গ্রহণ করে।
                    </p>
                </div>

                {/* Accordion Section */}
                <div className="space-y-4">
                    {accordionItems.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className="w-full bg-purple-100 hover:bg-purple-200 p-4 text-left flex justify-between items-center transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-gray-800 font-medium text-lg">{item.title}</span>
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                    <span className="text-lg font-bold">
                                        {openAccordion === index ? '−' : '+'}
                                    </span>
                                </div>
                            </button>
                            {openAccordion === index && (
                                <div className="p-4 bg-white border-t border-gray-200">
                                    <p className="text-gray-700">{item.content || "বিস্তারিত তথ্য শীঘ্রই যোগ করা হবে।"}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-200 rounded-lg p-6 mt-8">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-purple-800 mb-3">
                            🎯 আপনার স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তি হন
                        </h3>
                        <p className="text-purple-700 mb-4">
                            হার্ভার্ড, স্ট্যানফোর্ড, MIT সহ বিশ্বের শীর্ষ বিশ্ববিদ্যালয়ে ভর্তির জন্য প্রয়োজনীয় উচ্চ SAT স্কোর অর্জন করুন।
                        </p>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                            ফ্রি SAT মাস্টারক্লাস বুক করুন
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
