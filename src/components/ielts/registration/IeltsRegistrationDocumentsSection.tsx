import {CustomDataTable} from "@/components/CustomDataTable";

const docColumns = [
    {key: "item", header: "কাগজপত্র", width: "30%"},
    {key: "purpose", header: "উদ্দেশ্য", width: "40%"},
    {key: "requiredFor", header: "প্রয়োজনীয়তা", width: "30%"},
];

const docData = [
    {
        item: "বৈধ পাসপোর্ট",
        purpose: "প্রাথমিক পরিচয় যাচাই এবং পরীক্ষা বুকিং",
        requiredFor: "সকল পরীক্ষার্থী",
    },
    {
        item: "পাসপোর্ট সাইজের ছবি (ঐচ্ছিক)",
        purpose: "কিছু কেন্দ্রের অফলাইন রেজিস্ট্রেশনের সময় প্রয়োজন হতে পারে",
        requiredFor: "অফলাইন আবেদনকারীদের জন্য",
    },
    {
        item: "স্বাক্ষরিত ঘোষণা ফর্ম",
        purpose: "IELTS নীতিমালা ও শর্তাবলী বোঝার নিশ্চয়তা",
        requiredFor: "অফলাইন আবেদনকারীদের জন্য",
    },
    {
        item: "পেমেন্ট প্রুফ/লেনদেন আইডি",
        purpose: "আপনার পরীক্ষার ফি প্রদানের নিশ্চয়তা",
        requiredFor: "সকল পরীক্ষার্থী",
    },
    {
        item: "কাস্টমাইজড ব্যাংক ডিপোজিট স্লিপ",
        purpose: "নির্দিষ্ট ব্যাংক শাখায় নগদ জমা দেওয়ার জন্য প্রয়োজন",
        requiredFor: "অফলাইন আবেদনকারীদের জন্য",
    },
];

export default function IeltsRegistrationDocumentsSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ৩. IELTS রেজিস্ট্রেশনের জন্য প্রয়োজনীয় কাগজপত্র
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                IELTS রেজিস্ট্রেশন শুরু করার আগে, সমস্ত প্রয়োজনীয় কাগজপত্র প্রস্তুত রাখা অত্যন্ত জরুরি। কাগজপত্র
                অনুপস্থিত বা ভুল থাকলে বিলম্ব বা পরীক্ষা বাতিলের ঝুঁকি থাকতে পারে। আপনি অনলাইন হোন বা অফলাইনে
                রেজিস্ট্রেশন করুন, আপনার যা লাগবে তা নিচে দেওয়া হলো:
            </p>

            <div className="overflow-x-auto my-6">
                <CustomDataTable columns={docColumns} data={docData}/>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-2 text-blue-900">
                IELTS পরীক্ষা বাতিল বা পুনঃনির্ধারণ ২০২৫-২০২৬
            </h3>
            <ol className="list-decimal pl-6 space-y-1 text-gray-800 text-base mb-4">
                <li>আপনি শুধুমাত্র তখনই আপনার IELTS পরীক্ষা পুনঃনির্ধারণ করতে পারবেন যখন পরীক্ষার তারিখের আগেই
                    কমপক্ষে <b>৯ দিন</b> বা তার বেশি সময় বাকি থাকে।
                </li>
                <li>পুনঃনির্ধারণের অনুরোধের সঙ্গে আপনাকে সমর্থনকারী নথিপত্র জমা দিতে হবে।</li>
                <li>অনুরোধটি শুধুমাত্র অনুমোদনের পর প্রক্রিয়াকৃত হবে।</li>
                <li>আপনি শুধুমাত্র তখনই আপনার পরীক্ষা বাতিল করতে পারবেন যখন পরীক্ষার তারিখ থেকে কমপক্ষে <b>৯
                    দিন</b> বাকি থাকে।
                </li>
                <li>বাতিল করার জন্যও সমর্থনকারী নথিপত্র জমা দিতে হবে এবং এটি অনুমোদনের পর প্রক্রিয়াকৃত হবে।</li>
                <li>অনুমোদনের পর, আপনার রিফান্ড (প্রশাসনিক চার্জ বাদে) <b>৭-১০ কার্যদিবসের মধ্যে</b> প্রক্রিয়াকৃত হবে।
                </li>
            </ol>
        </section>
    );
}
