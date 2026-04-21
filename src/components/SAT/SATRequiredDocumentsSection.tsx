import { useState } from "react";

export default function SATRequiredDocumentsSection() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const accordionItems = [
        { title: "বৈধ পরিচয়পত্র", content: "" },
        { title: "পাসপোর্ট সাইজের ছবি", content: "" },
        { title: "SAT ভর্তি টিকিট", content: "" },
        { title: "SSD যোগ্যতার চিঠি (প্রযোজ্য হলে)", content: "" },
        { title: "অন্যান্য নথি (প্রযোজ্য হলে)", content: "" }
    ];

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৪. SAT পরীক্ষার জন্য প্রয়োজনীয় নথিপত্র
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        SAT পরীক্ষায় রেজিস্ট্রেশন করতে হলে কিছু নির্দিষ্ট কাগজপত্র জমা দিতে হয়। এই কাগজপত্রগুলো আপনার পরিচয় যাচাই করতে এবং SAT পরীক্ষার যোগ্যতার শর্ত পূরণ নিশ্চিত করতে ব্যবহৃত হয়।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে SAT রেজিস্ট্রেশনের জন্য প্রয়োজনীয় কাগজপত্রের তালিকা দেওয়া হলোঃ
                    </p>
                </div>

                {/* SAT Documents Hexagon Diagram */}
                <div className="mb-8">
                    <img src={"/images/sat-exam.png"} alt={"sat-exam"}/>
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
            </div>
        </section>
    );
}
