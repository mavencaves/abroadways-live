import IeltsImageCarouselSection from "@/components/ielts/types/IeltsImageCarousel.tsx";

const ieltsImageCarouselData = [
    {
        image: "/images/ielts-type/cr4.png",
        index: "১/3",
    },
    {
        image: "/images/ielts-type/cr5.png",
        index: "২/3",
    },
    {
        image: "/images/ielts-type/cr6.png",
        index: "৩/3",
    },
];
export default function IeltsGeneralTrainingTypeSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ২. IELTS-এর ধরন: IELTS জেনারেল ট্রেইনিং
            </h2>
            <IeltsImageCarouselSection data={ieltsImageCarouselData}/>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS জেনারেল ট্রেইনিং হলো তাদের জন্য, যারা অভিবাসন এবং কাজের উদ্দেশ্যে বিদেশে যেতে চান। আপনি শুধুমাত্র
                ডিগ্রি স্তরের নিচের কোনো কোর্সের জন্য IELTS জেনারেল ট্রেইনিং পরীক্ষা দিতে পারবেন।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                যদি আপনি ব্যাচেলর বা মাস্টার্সের জন্য আবেদন করেন, তাহলে IELTS অ্যাকাডেমিক পরীক্ষা দিতে হবে
                (বিশ্ববিদ্যালয় যদি অন্যথা না বলে)।
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS জেনারেল ট্রেইনিং পরীক্ষা ২ ঘণ্টা ৪৫ মিনিট স্থায়ী এবং এর চারটি মডিউল রয়েছে:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base mb-4">
                <li>রিডিং</li>
                <li>রাইটিং</li>
                <li>লিসেনিং</li>
                <li>স্পিকিং</li>
            </ul>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                লিসেনিং এবং স্পিকিং অংশ দুই ধরনের IELTS-এ একই, কিন্তু রিডিং এবং রাইটিং অংশ ভিন্ন। IELTS জেনারেল এবং
                অ্যাকাডেমিক এর মূল পার্থক্য হলো প্রশ্নগুলোর প্রেক্ষাপট। IELTS জেনারেল পরীক্ষার প্রশ্নগুলো দৈনন্দিন
                জীবনের পরিস্থিতি থেকে নেয়া হয়। পরীক্ষার উদ্দেশ্য হলো বোঝা যে, আপনি কি ইংরেজি ভাষাভাষী দেশে দৈনন্দিন জীবন
                পরিচালনা করতে পারবেন কি না।
            </p>
            <div className="overflow-x-auto my-6">
                <table className="w-full border border-gray-300 rounded-lg">
                    <tbody>
                    <tr className="bg-blue-100">
                        <td className="font-semibold px-4 py-2 border-b border-gray-200">IELTS জেনারেল ফি</td>
                        <td className="px-4 py-2 border-b border-gray-200">BDT ১৬,২৫০</td>
                    </tr>
                    <tr>
                        <td className="font-semibold px-4 py-2 border-b border-gray-200">মডিউল সংখ্যা</td>
                        <td className="px-4 py-2 border-b border-gray-200">৪</td>
                    </tr>
                    <tr className="bg-blue-50">
                        <td className="font-semibold px-4 py-2 border-b border-gray-200">IELTS জেনারেল প্যাটার্ন</td>
                        <td className="px-4 py-2 border-b border-gray-200">রিডিং, রাইটিং, লিসেনিং এবং স্পিকিং</td>
                    </tr>
                    <tr>
                        <td className="font-semibold px-4 py-2 border-b border-gray-200">পরীক্ষার ধরন</td>
                        <td className="px-4 py-2 border-b border-gray-200">কাগজভিত্তিক ও কম্পিউটারভিত্তিক</td>
                    </tr>
                    <tr className="bg-blue-50">
                        <td className="font-semibold px-4 py-2 border-b border-gray-200">সময়কাল</td>
                        <td className="px-4 py-2 border-b border-gray-200">২ ঘণ্টা ৪৫ মিনিট</td>
                    </tr>
                    <tr>
                        <td className="font-semibold px-4 py-2 border-b border-gray-200">ব্যান্ড স্কেল</td>
                        <td className="px-4 py-2 border-b border-gray-200">০-৯</td>
                    </tr>
                    <tr className="bg-blue-50">
                        <td className="font-semibold px-4 py-2 border-b border-gray-200">পরীক্ষার উপলব্ধতার ঘনত্ব</td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            কাগজভিত্তিক: মাসে চারবার<br/>
                            কম্পিউটারভিত্তিক: প্রতি দিন
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS জেনারেল পরীক্ষাটি কম্পিউটার বা কাগজের মাধ্যমে দেওয়া যেতে পারে (তারিখগুলো ভিন্ন হতে পারে)।
                পরীক্ষার ফলাফল পরীক্ষার ধরন অনুসারে ৩ থেকে ১৩ দিনের মধ্যে প্রকাশ করা হয়। আপনি অনলাইনে ফলাফল দেখতে
                পারবেন।
            </p>
        </section>
    );
}
