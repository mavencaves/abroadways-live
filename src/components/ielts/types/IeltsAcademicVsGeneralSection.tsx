import {CustomDataTable} from "@/components/CustomDataTable";
import IeltsImageCarouselSection from "@/components/ielts/types/IeltsImageCarousel.tsx";

const comparisonColumns = [
    {key: "feature", header: "পার্থক্য", width: "30%"},
    {key: "academic", header: "IELTS Academic", width: "35%"},
    {key: "general", header: "IELTS General Training", width: "35%"},
];

const comparisonData = [
    {
        feature: "উদ্দেশ্য",
        academic: "প্রধানত বিশ্ববিদ্যালয়ে ভর্তি (ব্যাচেলর, মাস্টার্স, পিএইচডি)",
        general: "প্রধানত ইমিগ্রেশন ও কাজের জন্য",
    },
    {
        feature: "পরীক্ষার বিষয়বস্তু",
        academic: "একাডেমিক দৃষ্টিভঙ্গি, কঠিন প্রশ্নাবলী",
        general: "দৈনন্দিন সামাজিক পরিস্থিতির উপর ভিত্তি করে",
    },
    {
        feature: "রিডিং পরীক্ষা",
        academic: "একাডেমিক প্যাসেজ যেমন টেক্সটবুক, জার্নাল, সংবাদপত্র",
        general: "সাধারণ প্যাসেজ যেমন ইনস্ট্রাকশন, বিজ্ঞাপন, কোম্পানি গাইড",
    },
    {
        feature: "রাইটিং পরীক্ষা",
        academic: (
            <>
                Task 1: ভিজুয়াল ইনফরমেশন বর্ণনা করা<br/>
                Task 2: একাডেমিক প্রবন্ধ লেখা
            </>
        ),
        general: (
            <>
                Task 1: একটি চিঠি লিখুন<br/>
                Task 2: প্রবন্ধ লিখুন (সাধারণ বিষয়)
            </>
        ),
    },
    {
        feature: "জনপ্রিয়তা",
        academic: "ব্যাপকভাবে গ্রহণযোগ্য",
        general: "সীমিত স্বীকৃতি",
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

export default function IeltsAcademicVsGeneralSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ৪. একাডেমিক এবং জেনারেল IELTS-এর মধ্যে পার্থক্য কী?
            </h2>
            <IeltsImageCarouselSection data={ieltsImageCarouselData} />

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS-এ নতুন হলে, IELTS Academic এবং General পরীক্ষার মধ্যে পার্থক্য নিয়ে বিভ্রান্ত হওয়া স্বাভাবিক।
                যদিও এই দুই পরীক্ষার অনেক মিল আছে, কিছু গুরুত্বপূর্ণ দিক তাদের আলাদা করে তোলে।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                যেমনটি আমরা আগে বলেছিলাম, প্রধান পার্থক্য হলো পরীক্ষার বিষয়বস্তুর দৃষ্টিভঙ্গিতে। IELTS Academic বেশি
                একাডেমিক এবং একটু জটিল, যেখানে IELTS General সাধারণ দৈনন্দিন পরিস্থিতির ওপর বেশি মনোনিবেশ করে।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                Reading এবং Writing অংশেও পার্থক্য আছে। IELTS Academic Reading-এ একাডেমিক ধরণের প্যাসেজ থাকে, যা
                টেক্সটবুক, জার্নাল এবং সংবাদপত্র থেকে নেওয়া হয়। অন্যদিকে, IELTS General Reading-এ টেক্সট আসে
                ইনস্ট্রাকশন ম্যানুয়াল, বিজ্ঞাপন এবং কোম্পানি গাইডবুক থেকে।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                Writing অংশে প্রধান পার্থক্য হলো কাজের ধরণে। IELTS General-এ ভিজ্যুয়াল তথ্য ব্যাখ্যার জন্য কোন কাজ থাকে
                না। এই পরীক্ষা সহজ এবং কম জটিল লেখার কাজের উপর মনোযোগ দেয়, যেমন একটি চিঠি লেখা।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                নিচে এই দুই ধরনের IELTS পরীক্ষার বিস্তারিত তুলনা দেওয়া হলো।
            </p>

            <div className="overflow-x-auto my-6">
                <CustomDataTable columns={comparisonColumns} data={comparisonData}/>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
                IELTS Academic বনাম General: কোনটা সহজ?
            </h3>
            <p className="text-gray-800 text-base leading-relaxed mb-2">
                আপনি জানেন কি? <b>৮০% পরীক্ষার্থীরা IELTS Academic পরীক্ষা দিতে পছন্দ করেন</b>, আর বাকি ২০% General
                Training পরীক্ষা নির্বাচন করেন।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-2">
                IELTS Academic এবং General Training দুইটি আলাদা উদ্দেশ্যে তৈরি, তাই তাদের কঠিনতার মাত্রাও ভিন্ন।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-2">
                IELTS General Training পরীক্ষা একাডেমিক উদ্দেশ্যে নয়, বরং বাস্তব জীবনের পরিস্থিতিতে পরীক্ষা নেওয়ার
                জন্য সহজভাবে ডিজাইন করা হয়েছে।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                অন্যদিকে, IELTS Academic যেভাবে নামেও বোঝায়, এটি আন্তর্জাতিক শিক্ষা অর্জনের লক্ষ্যে শিক্ষার্থীদের জন্য
                তৈরি, তাই এটি কিছুটা জটিল ও একাডেমিক।
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
                IELTS Academic বনাম General: স্কোরিং সিস্টেম
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
                IELTS Academic এবং General Training উভয়েই একই ৯-ব্যান্ড স্কেল ব্যবহার করে দক্ষতা মূল্যায়ন করে, যেখানে
                ১ (নন-ইউজার) থেকে ৯ (এক্সপার্ট ইউজার) পর্যন্ত স্কোর দেওয়া হয়। প্রতিটি অংশের জন্য (Listening, Reading,
                Writing, এবং Speaking) পৃথক ব্যান্ড স্কোর দেওয়া হয় এবং মোট স্কোর হিসেবে চারটি স্কোরের গড় বের হয়।
            </p>
        </section>
    );
}
