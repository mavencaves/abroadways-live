import { CustomDataTable } from "@/components/CustomDataTable";
import IeltsImageCarouselSection from "@/components/ielts/types/IeltsImageCarousel.tsx"; // Adjust path



const ukviColumns = [
    { key: "type", header: "IELTS-এর ধরন", width: "35%" },
    { key: "purpose", header: "উদ্দেশ্য", width: "65%" },
];

const ukviData = [
    {
        type: "IELTS for UKVI (Academic)",
        purpose: "যারা যুক্তরাজ্যে স্নাতক বা স্নাতকোত্তর স্তরে পড়াশোনা করতে চান তাদের জন্য।",
    },
    {
        type: "IELTS for UKVI (General Training)",
        purpose: "যারা যুক্তরাজ্যে অভিবাসনের জন্য যেতে চান বা ডিগ্রি স্তরের নিচের কোনো কোর্সে পড়াশোনা করতে চান তাদের জন্য।",
    },
];

const lifeSkillsMainColumns = [
    { key: "feature", header: "বিষয়", width: "44%" },
    { key: "info", header: "তথ্য", width: "56%" },
];

const lifeSkillsMainData = [
    {
        feature: "IELTS Life Skills পরীক্ষার সময়কাল",
        info: "১৬-২২ মিনিট",
    },
    {
        feature: "IELTS Life Skills পরীক্ষার স্তরসমূহ",
        info: "IELTS Life Skills A1, IELTS Life Skills A2, IELTS Life Skills B1",
    },
    {
        feature: "IELTS Life Skills (A1 এবং B1) পরীক্ষার ফি",
        info: "BDT ১৫,৩৫০",
    },
];

const testLevelColumns = [
    { key: "level", header: "টেস্ট লেভেল", width: "22%" },
    { key: "tasks", header: "অন্তর্ভুক্ত কাজসমূহ", width: "46%" },
    { key: "visa", header: "ভিসার উদ্দেশ্য", width: "32%" },
];

const testLevelData = [
    {
        level: "IELTS Life Skills A1",
        tasks: (
            <>
                কোনো নির্দিষ্ট বিষয় বর্ণনা/মন্তব্য করা<br />
                মতামত ও পছন্দ প্রকাশ করা<br />
                বিকল্প নির্বাচন করা<br />
                দেয়া বিবৃতি সমর্থন করা, সম্মত বা অসম্মত হওয়া
            </>
        ),
        visa: "স্থায়ীভাবে বসবাসরত ব্যক্তির পরিবার",
    },
    {
        level: "IELTS Life Skills A2",
        tasks: (
            <>
                তুলনা করা<br />
                অগ্রাধিকার দেওয়া<br />
                পরিকল্পনা করা<br />
                বোঝানো
            </>
        ),
        visa: "পরিবারের সদস্য বৃদ্ধি, স্বামী বা অংশীদার",
    },
    {
        level: "IELTS Life Skills B1",
        tasks: (
            <>
                ভবিষ্যতের সম্ভাবনা অনুসন্ধান করা<br />
                অতীত বা ভবিষ্যতের ঘটনা সম্পর্কে কথা বলা<br />
                বৈপরীত্য, কারণ বা যুক্তি দেখানো
            </>
        ),
        visa: "নাগরিকত্ব বা অনির্দিষ্ট স্থায়ী থাকার অনুমতি",
    },
];

const ieltsImageCarouselData = [
    {
        image: "/images/ielts-type/cr1.png",
        index: "১/3",
    },
    {
        image: "/images/ielts-type/cr2.png",
        index: "২/3",
    },
    {
        image: "/images/ielts-type/cr2.png",
        index: "৩/3",
    },
];

export default function IeltsLifeSkillsUkviTypeSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl ">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ৩. আইইএলটিএস-এর ধরন: IELTS Life Skills ও UKVI
            </h2>
            <IeltsImageCarouselSection data={ieltsImageCarouselData}/>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS Life Skills এবং UKVI পরীক্ষা তাদের জন্য যারা যুক্তরাজ্যে যেতে বা স্থায়ীভাবে বসবাস করতে চান।
            </p>

            {/* UKVI Table */}
            <div className="mb-4">
                <CustomDataTable columns={ukviColumns} data={ukviData} />
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS অ্যাকাডেমিক পরীক্ষার মতোই IELTS UKVI Academic-এর বিভাগ, প্যাটার্ন, ফরম্যাট এবং স্কোরিং একই।
                একমাত্র পার্থক্য হলো IELTS UKVI Academic অবশ্যই SELT-অনুমোদিত পরীক্ষাকেন্দ্রে দিতে হবে।
            </p>

            <div className="mb-4">
                <span className="font-semibold">IELTS Life Skills পরীক্ষা আপনার জন্য যদি:</span>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>আপনি এমন স্বামী বা আত্মীয়ের সঙ্গে যুক্তরাজ্যে থাকার পরিকল্পনা করেন যিনি ইতিমধ্যেই সেখানে আছেন</li>
                    <li>আপনি স্থায়ীভাবে যুক্তরাজ্যে বসবাস করতে চান অথবা ব্রিটিশ নাগরিকত্ব নিতে চান</li>
                </ul>
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS Life Skills পরীক্ষা IELTS অ্যাকাডেমিক থেকে একটু ভিন্ন। এটি দৈনন্দিন পরিস্থিতির উপর ভিত্তি করে, যেমন কাজ, আবহাওয়া বা পরিবহন। এর মূল উদ্দেশ্য হলো আপনার বেসিক ইংরেজি যোগাযোগ দক্ষতা মূল্যায়ন করা, যা খুব বেশি জটিল বা একাডেমিক নয়।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS Life Skills এবং IELTS UKVI হলো Secure English Language Tests (SELT) এর অন্তর্ভুক্ত, যা ব্রিটিশ সরকারের অনুমোদিত।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS Life Skills পরীক্ষা ১৬-২২ মিনিটের হয় এবং একজন পরীক্ষক ও আরেকজন পরীক্ষার্থী নিয়ে অনুষ্ঠিত হয়।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS Life Skills পরীক্ষায় ব্যান্ড স্কোর দেয়া হয় না, অন্য দুই IELTS পরীক্ষার মতো নয়। এর পরিবর্তে, পরীক্ষার্থীকে ‘Pass’ অথবা ‘Fail’ ফলাফল দেয়া হয়।
                <br />
                ‘Pass’ মানে আপনি ইংরেজিভাষী পরিবেশে যোগাযোগ করতে সক্ষম, আর ‘Fail’ মানে আপনি এখনও প্রস্তুত নন।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                পরীক্ষাটি তিনটি Common European Framework of Reference for Languages (CEFR) স্তরে বিভক্ত: <b>A1</b>, <b>A2</b>, এবং <b>B1</b>।
            </p>

            {/* Main Life Skills Table */}
            <div className="my-6">
                <CustomDataTable columns={lifeSkillsMainColumns} data={lifeSkillsMainData} />
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-2">
                প্রতিটি পরীক্ষায় আপনাকে দৈনন্দিন ঘটনার চারপাশে ছোট ছোট আলোচনা অংশ নিতে হবে। প্রতিটি IELTS Life Skills স্তর বিভিন্ন ভিসা উদ্দেশ্যের জন্য তৈরি; আপনাকে সেই পরীক্ষা দিতে হবে যা আপনার ভিসার প্রয়োজনের সাথে সবচেয়ে ভালো মিল খায়।
            </p>

            {/* Test Level Table */}
            <div className="my-6">
                <CustomDataTable columns={testLevelColumns} data={testLevelData} />
            </div>
        </section>
    );
}
