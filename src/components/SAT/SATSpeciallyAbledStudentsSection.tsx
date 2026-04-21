import { useState } from "react";

export default function SATSpeciallyAbledStudentsSection() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const accordionItems = [
        { title: "সুবিধার ধরনসমূহ", content: "" },
        { title: "সুবিধার জন্য কখন আবেদন করতে হবে", content: "" }
    ];

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৮. বিশেষভাবে সক্ষম শিক্ষার্থীদের জন্য SAT পরীক্ষার যোগ্যতার মানদণ্ড
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        SAT পরীক্ষা এমন শিক্ষার্থীদের জন্যও উন্মুক্ত, যাদের প্রমাণিত প্রতিবন্ধকতা রয়েছে। শিক্ষার্থীরা College Board-এর Services for Students with Disabilities (SSD) এর মাধ্যমে আবেদন করতে পারে। এখানে শিক্ষার্থীদের প্রয়োজন অনুযায়ী বিভিন্ন ধরণের বিশেষ সুবিধা প্রদান করা হয়।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Accommodations-এর জন্য আবেদন করার ধাপসমূহ:
                    </p>
                </div>

                {/* Process Flow Diagram */}
                <div className="mb-8">
                    <img src={"/images/sat-steps.png"} alt={"sat-specially-abled-students"}/>
                </div>

                {/* Detailed Steps */}
                <div className="mb-8">
                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                ১. অনুমোদনের প্রক্রিয়া
                            </h3>
                            <p className="text-gray-700">
                                প্রতিবন্ধী শিক্ষার্থীদের প্রথমে College Board-এর SSD থেকে অনুমোদন পেতে হবে। অনুমোদন নির্ভর করে প্রতিবন্ধকতার প্রমাণপত্র ও প্রয়োজনীয় সুবিধার উপর।
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                ২. স্কুলের সঙ্গে সমন্বয়
                            </h3>
                            <p className="text-gray-700">
                                যদি আপনি কোনো স্কুলে পড়েন, তাহলে আপনার স্কুলের SSD কো-অর্ডিনেটরের সঙ্গে কাজ করুন এবং সুবিধাগুলো নিশ্চিত করুন। যদি বর্তমানে স্কুলে না পড়েন, তাহলে SSD-কে যোগাযোগ করুন যাতে পরীক্ষার জন্য উপযুক্ত স্থানে সুবিধা ব্যবস্থা করা যায়।
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                ৩. নথি জমা
                            </h3>
                            <p className="text-gray-700">
                                পরিবারগুলো নিশ্চিত করবে যে সব প্রয়োজনীয় নথি জমা হয়েছে। এর মধ্যে চিকিৎসা রিপোর্ট বা শিক্ষাগত মূল্যায়ন অন্তর্ভুক্ত থাকে, যা প্রতিবন্ধকতা নিশ্চিত করে।
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                ৪. SSD যোগ্যতার চিঠি
                            </h3>
                            <p className="text-gray-700">
                                অনুমোদন পাওয়ার পর শিক্ষার্থীরা একটি SSD যোগ্যতার চিঠি পাবেন, যা পরীক্ষার দিনে অবশ্যই দেখাতে হবে।
                            </p>
                        </div>
                    </div>
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

                {/* Important Note */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">ℹ️</span>
                        <h4 className="font-semibold text-blue-800">গুরুত্বপূর্ণ তথ্য</h4>
                    </div>
                    <p className="text-blue-700">
                        বিশেষ সুবিধার জন্য আবেদন অবশ্যই পরীক্ষার তারিখের অনেক আগেই করতে হবে। সাধারণত ৭ সপ্তাহ আগে আবেদন সম্পন্ন করার পরামর্শ দেওয়া হয়।
                    </p>
                </div>
            </div>
        </section>
    );
}
