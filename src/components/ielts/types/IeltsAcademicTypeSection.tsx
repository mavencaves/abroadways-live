import IeltsImageCarouselSection from "@/components/ielts/types/IeltsImageCarousel.tsx";
import { CustomDataTable } from "@/components/CustomDataTable"; // Adjust import path if needed

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

const tableColumns = [
    { key: "label", header: "বিবরণ", width: "55%" },
    { key: "value", header: "তথ্য", width: "45%" }
];

const tableData = [
    { label: "IELTS অ্যাকাডেমিক ফি", value: "BDT ১৬,২৫০" },
    { label: "মডিউল সংখ্যা", value: "৪" },
    { label: "IELTS অ্যাকাডেমিক প্যাটার্ন", value: "রিডিং, রাইটিং, লিসেনিং এবং স্পিকিং" },
    { label: "পরীক্ষার ধরন", value: "কাগজভিত্তিক ও কম্পিউটারভিত্তিক" },
    { label: "সময়কাল", value: "২ ঘণ্টা ৪৫ মিনিট" },
    { label: "ব্যান্ড স্কেল", value: "০-৯" },
    { label: "পরীক্ষার উপলব্ধতার ঘনত্ব", value: <>কাগজভিত্তিক: মাসে চারবার<br />কম্পিউটারভিত্তিক: প্রতি দিন</> },
];

export default function IeltsAcademicTypeSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ১. IELTS এর ধরন: IELTS অ্যাকাডেমিক
            </h2>
            <IeltsImageCarouselSection data={ieltsImageCarouselData} />
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS অ্যাকাডেমিক মূলত তাদের জন্য যারা উচ্চ শিক্ষার জন্য বিদেশে যাওয়ার পরিকল্পনা করছেন। অ্যাকাডেমিক
                পরীক্ষাটি ৪টি মডিউল নিয়ে গঠিত:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base mb-4">
                <li>রিডিং</li>
                <li>রাইটিং</li>
                <li>লিসেনিং</li>
                <li>স্পিকিং</li>
            </ul>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                প্রতিটি মডিউল ভাষাগত দক্ষতার বিভিন্ন দিক পরীক্ষা করে, যেমন আপনার শব্দভাণ্ডার, সাবলীলতা, জটিল আলোচনা
                বোঝার ক্ষমতা, মূল ভাব ধারণা করা, এবং স্পষ্টভাবে আপনার মতামত প্রকাশ করার সক্ষমতা।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS অ্যাকাডেমিক পরীক্ষাটি বিশ্ববিদ্যালয় ভর্তির জন্য গ্রহণযোগ্য হওয়ায়, এর প্রশ্নগুলো একাডেমিক,
                আনুষ্ঠানিক এবং অন্যান্য IELTS পরীক্ষার তুলনায় কিছুটা বেশি জটিল। আপনার ইংরেজি দক্ষতার পাশাপাশি, IELTS
                স্কোর বিশ্ববিদ্যালয়কে ধারণা দেয় আপনি কত ভালো একাডেমিক পরিবেশে সফল হতে পারবেন।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS অ্যাকাডেমিক তিন ধরনের পরীক্ষার মধ্যে সবচেয়ে জনপ্রিয় এবং বিশ্বব্যাপী সবচেয়ে বেশি গ্রহণযোগ্য।
                পরীক্ষার মূল্য বর্তমানে <b>BDT ১৬,২৫০</b>।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                আপনি IELTS অ্যাকাডেমিক পরীক্ষা কম্পিউটার-ভিত্তিক অথবা কাগজ-ভিত্তিক ফরম্যাটে দিতে পারেন। তবে, পরীক্ষা
                নেওয়ার পদ্ধতির ওপর নির্ভর করে তার তারিখ ভিন্ন হবে। কম্পিউটার-ভিত্তিক পরীক্ষা বেশি সংখ্যক উপলব্ধ। নিচে
                তার একটি ওভারভিউ দেওয়া হলো।
            </p>

            <div className="overflow-x-auto my-6">
                <CustomDataTable columns={tableColumns} data={tableData} />
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS এর ফলাফল পরীক্ষা দেওয়ার ধরন অনুযায়ী ৩ থেকে ১৩ দিনের মধ্যে প্রকাশ করা হয়। আপনার ফলাফল একটি TRF
                (টেস্ট রিপোর্ট ফর্ম) আকারে প্রদর্শিত হয়, যা আপনি ইলেকট্রনিকভাবে আপনার পছন্দের বিশ্ববিদ্যালয় বা
                প্রতিষ্ঠানে পাঠাতে পারেন।
            </p>
            <p className="text-gray-800 text-base leading-relaxed">
                যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডাসহ বিভিন্ন দেশে উচ্চ শিক্ষার জন্য ন্যূনতম IELTS স্কোর সাধারণত ৬ থেকে ৬.৫
                এর মধ্যে হয়, যা আপনার ডিগ্রির স্তরের উপর নির্ভর করে।
            </p>
        </section>
    );
}
