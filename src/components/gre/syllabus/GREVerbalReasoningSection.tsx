import { useState } from "react";

export default function GREVerbalReasoningSection() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const accordionItems = [
        { title: "Reading Comprehension", content: "" },
        { title: "Text Completion", content: "" },
        { title: "Sentence Equivalence Questions", content: "" }
    ];

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৩. GRE সিলেবাস এবং প্যাটার্ন ২০২৫: Verbal Reasoning
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Verbal Reasoning সেকশনটি আপনার দক্ষতা মূল্যায়নের জন্য ডিজাইন করা হয়েছে:
                    </p>

                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">লিখিত উপাদান বুঝতে এবং বিশ্লেষণ করতে পারা</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">বাক্যের অংশগুলোর মধ্যে সম্পর্ক চিহ্নিত করা</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">শব্দ ও ধারণার মধ্যে সংযোগ শনাক্ত করা</span>
                        </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Verbal Reasoning সেকশনে নিম্নলিখিত প্রশ্নের ধরন অন্তর্ভুক্ত রয়েছে:
                    </p>

                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">Reading Comprehension</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">Text Completion</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">Sentence Equivalence</span>
                        </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        চলুন এগুলো বিস্তারিতভাবে বুঝে নিই।
                    </p>
                </div>

                {/* Accordion Section */}
                <div className="space-y-4">
                    {accordionItems.map((item, index) => (
                        <div key={index} className="bg-purple-50 rounded-lg overflow-hidden">
                            <button
                                className="w-full p-4 text-left flex justify-between items-center hover:bg-purple-100 transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-medium text-gray-800">{item.title}</span>
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                    <span className="text-lg font-bold">
                                        {openAccordion === index ? '−' : '+'}
                                    </span>
                                </div>
                            </button>
                            {openAccordion === index && (
                                <div className="p-4 bg-white border-t border-purple-200">
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
