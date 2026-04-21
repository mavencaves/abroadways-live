import NewCustomTable from "@/components/NewCustomTable.tsx";

export default function SATExamPattern2025Section() {
    const patternTableData = [
        {
            parameter: "SAT পরীক্ষা ফরম্যাট",
            readingWriting: "দুই-পর্যায়ে: একটি রিডিং পরীক্ষা করে এবং অন্যটি রাইটিং, যা আলাদাভাবে নির্ধারিত সময়ের মডিউলগুলির মাধ্যমে পরিচালিত হয়।",
            mathematics: "দুই-পর্যায়ে: দুটি আলাদাভাবে নির্ধারিত সময়ের মডিউলের মাধ্যমে পরিচালিত হয়।"
        },
        {
            parameter: "টেস্টের দৈর্ঘ্য (অপারেশনাল ও প্রিটেস্ট প্রশ্ন)",
            readingWriting: "১ম মডিউল: ২৫টি অপারেশনাল + ২টি প্রি-টেস্ট প্রশ্ন\n২য় মডিউল: ২৫টি অপারেশনাল + ২টি প্রি-টেস্ট প্রশ্ন",
            mathematics: "১ম মডিউল: ২০টি অপারেশনাল + ২টি প্রি-টেস্ট প্রশ্ন\n২য় মডিউল: ২০টি অপারেশনাল + ২টি প্রি-টেস্ট প্রশ্ন"
        },
        {
            parameter: "পরীক্ষার সময়কাল",
            readingWriting: "১ম মডিউল: ৩২ মিনিট\n২য় মডিউল: ৩২ মিনিট",
            mathematics: "১ম মডিউল: ৩৫ মিনিট\n২য় মডিউল: ৩৫ মিনিট"
        },
        {
            parameter: "মোট প্রশ্নের সংখ্যা",
            readingWriting: "৫৪",
            mathematics: "৪৪"
        },
        {
            parameter: "মোট সময় বরাদ্দ",
            readingWriting: "৬৪ মিনিট",
            mathematics: "৭০ মিনিট"
        },
        {
            parameter: "স্কোর রিপোর্ট",
            readingWriting: "Reading & Writing এবং Math সেকশন থেকে সম্মিলিত মোট স্কোর",
            mathematics: "Reading & Writing এবং Math সেকশন থেকে সম্মিলিত মোট স্কোর"
        },
        {
            parameter: "প্রশ্নের ধরন",
            readingWriting: "একাধিক-পছন্দ প্রশ্ন (MCQs) চারটি বিকল্পসহ।",
            mathematics: "৭৫% একাধিক-পছন্দ প্রশ্ন (MCQs)\n২৫% শিক্ষার্থী-প্রস্তুতকৃত উত্তর (SPR)।"
        },
        {
            parameter: "আচ্ছাদিত বিষয়সমূহ",
            readingWriting: "সাহিত্য\nইতিহাস/সমাজবিজ্ঞান\nমানববিদ্যা\nবিজ্ঞান",
            mathematics: "বীজগণিত\nসমস্যা সমাধান ও ডেটা বিশ্লেষণ\nউন্নত গণিত\nজ্যামিতি\nত্রিকোণমিতি"
        },
        {
            parameter: "তথ্যচিত্র",
            readingWriting: "টেবিল\nবার গ্রাফ\nলাইন গ্রাফ",
            mathematics: "টেবিল\nবার গ্রাফ\nলাইন গ্রাফ"
        }
    ];

    const tableColumns = [
        { key: 'parameter', label: 'প্যারামিটারস', width: 'w-1/3' },
        { key: 'readingWriting', label: 'রিডিং ও রাইটিং সেকশন', width: 'w-1/3' },
        { key: 'mathematics', label: 'ম্যাথমেটিক্স সেকশন', width: 'w-1/3' }
    ];

    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ২. SAT পরীক্ষা প্যাটার্ন ২০২৫
                </h2>
                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        ২০২৫ সালের SAT পরীক্ষা বিভিন্ন ডোমেইন কভার করে, যেমন: Critical Reading, Writing Skills, Mathematical Reasoning, এবং Subject-Specific Tests। প্রতিটি সেকশনের নির্দিষ্ট ওজন (weightage) রয়েছে, এবং প্রতিটি এলাকার বিষয়গুলো বোঝা পর্যাপ্ত প্রস্তুতির জন্য অত্যন্ত গুরুত্বপূর্ণ।
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে প্রতিটি সেকশনের প্যাটার্নের বিবরণ দেওয়া হলো, যাতে ফোকাস করার বিষয়গুলো স্পষ্ট হয়।
                    </p>
                </div>
                <NewCustomTable
                    data={patternTableData}
                    columns={tableColumns}
                    className="mb-8"
                />
                <div className="text-gray-700 leading-relaxed mt-6">
                    <p>প্রতিটি সেকশনের সিলেবাস নির্ধারিত সময়সীমার সঙ্গে সামঞ্জস্যপূর্ণ, তাই আপনাকে নিয়মিত টাইমড প্র্যাকটিস করতে হবে যাতে নির্ধারিত সময়ের মধ্যে প্রতিটি সেকশন সম্পন্ন করতে পারেন।</p>
                    <p className="mt-2">
                        Reading and Writing সেকশন সবচেয়ে সংক্ষিপ্ত, যেখানে Math সেকশন প্রশ্নগুলোর জটিলতার কারণে বেশি সময়ের প্রয়োজন।
                    </p>
                    <p className="mt-2">
                        দ্রষ্টব্য: SAT পরীক্ষার প্যাটার্ন ডিজিটাল এবং পেপার ফরম্যাট উভয়েই একই রকম।
                    </p>
                </div>
            </div>
        </section>
    );
}
