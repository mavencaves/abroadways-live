import NewCustomTable from "@/components/NewCustomTable.tsx";
import { useState } from "react";

export default function SATAgeLimitSection() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    // Table data exactly as shown in the image
    const ageRequirementData = [
        {
            ageGroup: "১২ বছর বা তার কম",
            registrationMethod: "ডাকযোগে",
            idRequirement: "অভিভাবকের সম্মতি"
        },
        {
            ageGroup: "১৩ বছর বা তার বেশি",
            registrationMethod: "ফ্রি অ্যাকাউন্ট তৈরি করে অনলাইন রেজিস্ট্রেশন",
            idRequirement: "অভিভাবকের সম্মতি"
        },
        {
            ageGroup: "২১ বছর বা তার বেশি",
            registrationMethod: "অনলাইন বা ডাকযোগে রেজিস্ট্রেশন",
            idRequirement: "সরকার স্বীকৃত ফটো আইডি প্রয়োজন"
        }
    ];

    const columns = [
        { key: 'ageGroup', label: 'বয়স গ্রুপ', width: 'w-1/3' },
        { key: 'registrationMethod', label: 'রেজিস্ট্রেশন পদ্ধতি', width: 'w-1/3' },
        { key: 'idRequirement', label: 'আইডি প্রয়োজনীয়তা', width: 'w-1/3' }
    ];

    const accordionItems = [
        { title: "কোনো বয়সসীমা নেই", content: "" },
        { title: "কম বয়সী শিক্ষার্থী", content: "" },
        { title: "বয়স্ক প্রার্থী", content: "" },
        { title: "পুনরায় পরীক্ষা দেওয়া", content: "" }
    ];

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ২. SAT পরীক্ষার বয়সসীমা ২০২৫
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        College Board SAT পরীক্ষার জন্য কোনো নির্দিষ্ট বয়সসীমা নির্ধারণ করেনি। অর্থাৎ, শিক্ষার্থীরা তাদের শিক্ষাগত প্রস্তুতির উপর ভিত্তি করে যেকোনো বয়সে পরীক্ষায় অংশগ্রহণ করতে পারে। তবে সাধারণত হাই স্কুলের শিক্ষার্থীরাই এটি দিয়ে থাকে।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে SAT পরীক্ষার বয়সসংক্রান্ত শর্তাবলী টেবিলে দেওয়া হলো:
                    </p>
                </div>

                {/* Main Age Requirements Table */}
                <NewCustomTable
                    data={ageRequirementData}
                    columns={columns}
                    className="mb-8"
                />

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
                                    <p className="text-gray-700">{item.content || "তথ্য শীঘ্রই যোগ করা হবে।"}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
