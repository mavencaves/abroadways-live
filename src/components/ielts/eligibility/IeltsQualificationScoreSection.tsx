import { CustomDataTable } from "@/components/CustomDataTable"
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";

const scoreColumns = [
    { key: "country", header: "দেশ", width: "22%" },
    { key: "minScoreRange", header: "ন্যূনতম IELTS স্কোর রেঞ্জ", width: "18%" },
    { key: "studentVisaScore", header: "স্টুডেন্ট ভিসার জন্য ন্যূনতম স্কোর", width: "30%" },
];

const scoreData = [
    { country: "যুক্তরাষ্ট্র", minScoreRange: "৬.০ – ৬.৫", studentVisaScore: "৬.৫ (বিশ্ববিদ্যালয়ের উপরও নির্ভর করে)" },
    { country: "যুক্তরাজ্য", minScoreRange: "৬.০ – ৬.৫", studentVisaScore: <>৪.০ (ডিগ্রির নিচের কোর্সের জন্য)<br />৫.৫ (ডিগ্রি স্তর ও ঊর্ধ্বের জন্য)</> },
    { country: "কানাডা", minScoreRange: "৫.৫ – ৬.৫", studentVisaScore: "৬.০" },
    { country: "আয়ারল্যান্ড", minScoreRange: "৬.০ – ৬.৫", studentVisaScore: "৬.৫" },
    { country: "অস্ট্রেলিয়া", minScoreRange: "৬.০ – ৬.৫", studentVisaScore: "৫.৫" },
    { country: "নিউজিল্যান্ড", minScoreRange: "৫.৫ – ৬.৫", studentVisaScore: "৫.৫" },
];

const faqs = [
    {
        id: "faq1",
        question: "IELTS পরীক্ষার জন্য সর্বনিম্ন কত স্কোর লাগবে?",
        answer: (
            <>
                আন্ডারগ্র্যাজুয়েট লেখাপড়ার জন্য সাধারণত ন্যূনতম ৬.০ ব্যান্ড এবং পোস্টগ্র্যাজুয়েটের জন্য ৬.৫ ব্যান্ড প্রয়োজন। তবে নির্ভর করবে দেশ, বিশ্ববিদ্যালয় ও আপনার কোর্সের উপর।
            </>
        ),
    },
    {
        id: "faq2",
        question: "স্টুডেন্ট ভিসার জন্য IELTS স্কোর কত লাগবে?",
        answer: (
            <>
                অধিকাংশ ক্ষেত্রে ৫.৫ থেকে ৬.৫ ব্যান্ড লাগে। যুক্তরাজ্যে ডিগ্রির নিচের কোর্সে ৪.০ ব্যান্ডও গ্রহণ করা হয়, তবে উচ্চস্তরে স্কোর বেশি চাওয়া হয়।
            </>
        ),
    },
    {
        id: "faq3",
        question: "আধুনিক বিশ্ববিদ্যালয়ে ভর্তি হতে কত স্কোর দরকার?",
        answer: (
            <>
                মাঝারি স্তরের বিশ্ববিদ্যালয়ে ৬.০–৬.৫ স্কোর গ্রহণযোগ্য; শীর্ষ বিশ্ববিদ্যালয়ে ৭ বা তার বেশি লাগতে পারে।
            </>
        ),
    },
    {
        id: "faq4",
        question: "কোনো বিষয় বা কোর্সে বেশি স্কোর দরকার হয়?",
        answer: (
            <>
                Psych, Literature, Medicine-এর মতো বিষয়, বা যেখানে বেশি পেশাগত ভাষা দক্ষতা দরকার সেখানে IELTS-এর জন্য উচ্চ স্কোর চাওয়া হয়।
            </>
        ),
    },
    {
        id: "faq5",
        question: "IELTS স্কোরের প্রয়োজনীয়তা জানার জন্য কোনটা ফাইনাল?",
        answer: (
            <>
                চূড়ান্ত তথ্য আবেদনের আগে বিশ্ববিদ্যালয় বা কলেজের অফিসিয়াল ওয়েবসাইট দেখে নিন।
            </>
        ),
    },
];


export default function IeltsQualificationScoreSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ২. IELTS পরীক্ষার যোগ্যতা: বিভিন্ন দেশের জন্য উত্তীর্ণ স্কোর
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS পরীক্ষাটি বিশ্বব্যাপী ১৪০টিরও বেশি দেশে গ্রহণযোগ্য, যার মধ্যে রয়েছে যুক্তরাষ্ট্র (USA), যুক্তরাজ্য (UK), কানাডা, অস্ট্রেলিয়া ও নিউজিল্যান্ডসহ জনপ্রিয় স্টাডি ডেস্টিনেশন।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS পরীক্ষার ন্যূনতম যোগ্যতা নির্ভর করে আপনি এই পরীক্ষা কেন দিচ্ছেন তার উপর। বিশ্ববিদ্যালয়ে ভর্তি হওয়ার ক্ষেত্রে, সাধারণত আন্ডারগ্র্যাজুয়েট কোর্সের জন্য ন্যূনতম ৬.০ ব্যান্ড এবং পোস্ট-গ্র্যাজুয়েট কোর্সের জন্য ৬.৫ ব্যান্ড প্রয়োজন হয়।<br />
                ভিসা ও ইমিগ্রেশনের জন্য প্রয়োজন হতে পারে ন্যূনতম ৪.০ থেকে ৬.০ ব্যান্ড স্কোর।
            </p>
            <div className="overflow-x-auto my-6">
                <CustomDataTable columns={scoreColumns} data={scoreData} />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-900">
                শীর্ষ বিশ্ববিদ্যালয়গুলোর জন্য ন্যূনতম স্কোর ও IELTS পরীক্ষার যোগ্যতা
            </h3>
            <p className="text-gray-800 text-base leading-relaxed mb-3">
                বিশ্ববিদ্যালয়গুলোর জন্য ন্যূনতম IELTS স্কোর বিভিন্ন বিষয়ে নির্ভর করে, যার মধ্যে: <br />
                <span className="font-semibold">কোর্সের স্তর:</span> সাধারণত পোস্টগ্র্যাজুয়েট স্তরের কোর্সের জন্য বেশি স্কোর চাওয়া হয়।
                <br />
                <span className="font-semibold">বিশ্ববিদ্যালয়:</span> শীর্ষস্থানীয় বিশ্ববিদ্যালয়ে আবেদন করতে চাইলে উচ্চ IELTS স্কোর লাগবে; অনেক সময় ৭ বা তার বেশি। মাঝারি স্তরের বিশ্ববিদ্যালয়ে ৬.০ থেকে ৬.৫ স্কোর গ্রহণযোগ্য।
                <br />
                <span className="font-semibold">কোর্সের জটিলতা:</span> Psych, Literature, Medicine-এর মতো উন্নত বিষয়ে উচ্চ স্কোর প্রয়োজন হতে পারে।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                নোট: স্কোরের প্রয়োজনীয়তা নির্দিষ্ট বিশ্ববিদ্যালয় ও কোর্সের ওপর নির্ভর করে বদলাতে পারে। আবেদনের আগে সংশ্লিষ্ট বিশ্ববিদ্যালয়ের ওয়েবসাইট দেখে নিশ্চিত হোন।
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
                <li>যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়গুলোর জন্য IELTS যোগ্যতা স্কোর</li>
                <li>যুক্তরাজ্যের শীর্ষ বিশ্ববিদ্যালয়গুলোর জন্য IELTS যোগ্যতা স্কোর</li>
                <li>কানাডার শীর্ষ বিশ্ববিদ্যালয়গুলোর জন্য IELTS যোগ্যতা স্কোর</li>
                <li>অস্ট্রেলিয়ার শীর্ষ বিশ্ববিদ্যালয়গুলোর জন্য IELTS যোগ্যতা স্কোর</li>
                <li>নিউজিল্যান্ডের শীর্ষ বিশ্ববিদ্যালয়গুলোর জন্য IELTS যোগ্যতা স্কোর</li>
                <li>আয়ারল্যান্ডের শীর্ষ বিশ্ববিদ্যালয়গুলোর জন্য IELTS যোগ্যতা স্কোর</li>
            </ul>
            <FAQAccordion title={""} data={faqs}/>
        </section>
    );
}
