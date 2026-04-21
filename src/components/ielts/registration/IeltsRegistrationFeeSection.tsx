import { CustomDataTable } from "@/components/CustomDataTable";

const feeColumns = [
    { key: "type", header: "পরীক্ষার ধরণ", width: "32%" },
    { key: "purpose", header: "উদ্দেশ্য", width: "36%" },
    { key: "fee", header: "IELTS রেজিস্ট্রেশন ফি (BDT)", width: "22%" },
];

const feeData = [
    {
        type: "IELTS on Paper (Academic/GT)",
        purpose: "অধ্যয়ন, অভিবাসন, অথবা কর্ম",
        fee: "১৮,০০০",
    },
    {
        type: "IELTS on Computer (Academic/GT)",
        purpose: "অধ্যয়ন, অভিবাসন, অথবা কর্ম",
        fee: "১৮,০০০",
    },
    {
        type: "IELTS for UKVI (Paper/Computer)",
        purpose: "যুক্তরাজ্যের ভিসা আবেদনের জন্য প্রয়োজনীয়",
        fee: "১৮,২৫০",
    },
    {
        type: "IELTS Life Skills (A1 or B1)",
        purpose: "যুক্তরাজ্যের পরিবার বা স্থায়ী বসবাস ভিসার প্রয়োজনীয়তা",
        fee: "১৭,০০০",
    },
    {
        type: "IELTS One Skill Retake (OSR)",
        purpose: "একটি নির্দিষ্ট দক্ষতা পুনরায় পরীক্ষা দিন (শুনা/পড়া/লেখা/কথা)",
        fee: "১২,০০০",
    },
];

export default function IeltsRegistrationFeeSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ২. ২০২৫-২০২৬ সালের IELTS রেজিস্ট্রেশন ফি: বিস্তারিত বিশ্লেষণ
            </h2>
            <p className="mb-4 text-gray-800 text-base leading-relaxed">
                ২০২৫–২০২৬ সালে IELTS পরীক্ষা দেওয়ার পরিকল্পনা করছেন? সঠিকভাবে বিদেশে পড়াশোনার বাজেট তৈরি করার জন্য পুরো ফি কাঠামো বোঝা অত্যন্ত গুরুত্বপূর্ণ। প্রথম দেখায় পরীক্ষার ফি সাধারণ মনে হলেও, পরীক্ষা ফরম্যাট, মডিউল টাইপ এবং ভিসা সংক্রান্ত প্রয়োজনীয়তা মতো বিভিন্ন কারণ মোট ফি-র পরিমাণকে প্রভাবিত করতে পারে।
            </p>
            <p className="mb-4 text-gray-800 text-base leading-relaxed">
                আপনাকে আর্থিক অপ্রত্যাশিততার হাত থেকে রক্ষা করার জন্য এখানে একটি পরিষ্কার, আপডেটেড ওভারভিউ দেওয়া হলো।
            </p>
            <h3 className="font-semibold text-xl text-blue-900 mt-2 mb-4">পরীক্ষার স্থান ও ফরম্যাট অনুযায়ী ফি পার্থক্য</h3>
            <p className="mb-1 text-gray-800 text-base leading-relaxed">
                ২০২৫ সালে, বাংলাদেশের সকল শহরে বেসিক IELTS পরীক্ষার ফি সমন্বিত হয়েছে, যা পরীক্ষার্থীদের জন্য অঞ্চলভেদে ভিন্নতার চিন্তা ছাড়াই পরিকল্পনা করা সহজ করে তোলে। তবে, পরীক্ষার ধরণ এবং তার উদ্দেশ্যের উপর ভিত্তি করে চূড়ান্ত ফি ভিন্ন হতে পারে।
            </p>

            <div className="my-6">
                <CustomDataTable columns={feeColumns} data={feeData} />
            </div>

            <p className="mb-4 text-sm text-gray-700 italic">
                নোট: আপনি ঢাকা বা চট্টগ্রামে পরীক্ষা দিন, ফি একই থাকবে। এই জাতীয় একরূপতা বাংলাদেশের শিক্ষার্থীদের জন্য আর্থিক পরিকল্পনা সহজ করে তোলে।
            </p>

            <h3 className="font-semibold text-xl text-blue-900 mt-7 mb-4">পরিশোধের পদ্ধতি: আপনার IELTS পরীক্ষার ফি কিভাবে প্রদান করবেন</h3>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IDP বাংলাদেশ আপনাদের পরীক্ষা ফি পরিশোধকে সহজ ও ঝামেলামুক্ত করার জন্য একাধিক নিরাপদ পদ্ধতি প্রদান করে। আপনি ডিজিটাল প্ল্যাটফর্ম পছন্দ করুন বা অফলাইন ব্যাংকিং, নিচে দেখুন কিভাবে ফি প্রদান করতে পারেন:
            </p>

            <b className="block mb-1 mt-5 text-blue-800">অনলাইন পরিশোধ পদ্ধতি</b>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base mb-5">
                <li>ক্রেডিট কার্ড (ভিসা / মাস্টারকার্ড / আমেরিকান এক্সপ্রেস)</li>
                <li>ডেবিট কার্ড (সকল প্রধান ব্যাংক)</li>
                <li>বিকাশ, রকেট</li>
            </ul>

            <b className="block mb-1 text-blue-800">অফলাইন পরিশোধ পদ্ধতি</b>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base mb-4">
                <li>
                    ডিমান্ড ড্রাফট: {" "}
                    <span className="font-semibold">
            "IDP EDUCATION BANGLADESH PRIVATE LIMITED"
          </span>{" "}
                    নামে ড্রাফট তৈরি করতে হবে, যা ঢাকা শহরের অনুমোদিত ব্যাংকে পরিশোধযোগ্য
                </li>
                <li>
                    ব্যাংক ডিপোজিট: নির্দিষ্ট শাখায় কাস্টমাইজড ডিপোজিট স্লিপ ব্যবহার করে নগদ জমা দিতে হবে
                </li>
            </ul>
        </section>
    );
}
