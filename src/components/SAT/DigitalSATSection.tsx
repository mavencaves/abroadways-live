import NewCustomTable from "@/components/NewCustomTable.tsx";

export default function DigitalSATSection() {
    const digitalSATData = [
        {
            criteria: "বয়সের শর্ত",
            details: `• রেজিস্ট্রেশন করার জন্য শিক্ষার্থীর বয়স অবশ্যই ১৩ বছর বা তার বেশি হতে হবে।
• ১৩ বছরের নিচের শিক্ষার্থীদের জন্য অভিভাবক/প্রত্যক্ষ তত্ত্বাবধায়কের সম্মতি প্রয়োজন।`
        },
        {
            criteria: "১৩ বছরের নিচের শিক্ষার্থীদের জন্য অভিভাবক/প্রত্যক্ষ তত্ত্বাবধায়কের সম্মতি",
            details: `• নির্দিষ্ট কোনো শর্ত নেই।
• সাধারণত এটি গ্রেড ৯–১২-এর শিক্ষার্থীরাই দেয়।`
        },
        {
            criteria: "পরীক্ষা ফরম্যাট",
            details: "কম্পিউটার ভিত্তিক"
        },
        {
            criteria: "পরীক্ষার সময়কাল",
            details: "২ ঘন্টা (পরম্পরাগত SAT-এর চেয়ে কম)"
        },
        {
            criteria: "প্রযুক্তিগত প্রয়োজনীয়তা",
            details: "পরীক্ষার কেন্দ্রে প্রদত্ত কম্পিউটার/ল্যাপটপ ইন্টারফেসের সঙ্গে পরিচিত হওয়া"
        },
        {
            criteria: "পরিচয়পত্র ও নথি",
            details: "SAT অ্যাডমিশন টিকিট এবং বৈধ পরিচয়পত্র সঙ্গে আনুন"
        },
        {
            criteria: "পরীক্ষা দেওয়ার সময়",
            details: "২০২৫ থেকে প্রচলিত SAT-এর সঙ্গে একই পরীক্ষার তারিখে উপলব্ধ"
        }
    ];

    const columns = [
        { key: 'criteria', label: 'SAT পরীক্ষার যোগ্যতার মানদণ্ড', width: 'w-1/3' },
        { key: 'details', label: 'বিস্তারিত', width: 'w-2/3' }
    ];

    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৬. ডিজিটাল SAT পরীক্ষায় অংশগ্রহণকারীদের যোগ্যতার মানদণ্ড
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        ডিজিটাল SAT হলো প্রচলিত SAT পরীক্ষার আধুনিক সংস্করণ। ডিজিটাল SAT-এর যোগ্যতার মানদণ্ড মূলত প্রচলিত SAT-এর মতোই, তবে এই পরীক্ষার ফরম্যাটের জন্য প্রস্তুতি নেওয়ার সময় কিছু গুরুত্বপূর্ণ বিষয় জানা জরুরি।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে ডিজিটাল SAT-এর যোগ্যতার একটি সংক্ষিপ্ত বিবরণ দেওয়া হলো।
                    </p>
                </div>

                {/* Custom Table */}
                <NewCustomTable
                    data={digitalSATData}
                    columns={columns}
                    className="mb-8"
                />
            </div>
        </section>
    );
}
