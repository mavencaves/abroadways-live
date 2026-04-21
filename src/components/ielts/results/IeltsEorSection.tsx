import {CustomDataTable} from "@/components/CustomDataTable"

const eorFeeColumns = [
    {key: "type", header: "IELTS ধরন", width: "60%"},
    {key: "fee", header: "ফি (BDT)", width: "40%"},
];

const eorFeeData = [
    {type: "IELTS Paper-based", fee: "১২,০০০"},
    {type: "IELTS Academic Pattern", fee: "১২,২০০"},
    {type: "IELTS UKVI", fee: "১২,৩৭৫"},
    {type: "IELTS Life-skills", fee: "১১,৫২৫"},
];

export default function IeltsEorSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl ">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ৩. IELTS EOR বা IELTS পুনর্মূল্যায়ন
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                যদি আপনি আপনার IELTS স্কোরে সন্তুষ্ট না হন, তাহলে আপনি <b>IELTS Enquiry on Result (EOR)</b> প্রক্রিয়ার
                মাধ্যমে পুনঃমূল্যায়নের জন্য আবেদন করতে পারেন। এই প্রক্রিয়ায়, অভিজ্ঞ পরীক্ষকগণের একটি দল আপনার
                উত্তরপত্র নতুন করে মূল্যায়ন করে, যেখানে তারা আপনার পুরোনো স্কোর দেখে না—ফলে পুরো প্রক্রিয়াটি থাকে
                সম্পূর্ণ নিরপেক্ষ। অন্যদিকে, যদি আপনি শুধুমাত্র একটি নির্দিষ্ট দক্ষতা উন্নত করতে চান, তাহলে <b>IELTS One
                Skill Retake</b> এখন একটি বিকল্প, যার মাধ্যমে আপনি পুরো টেস্ট না দিয়ে শুধুমাত্র একটি অংশে পুনরায়
                পরীক্ষা দিতে পারবেন।
            </p>

            <h3 className="font-semibold text-xl text-blue-900 mt-4 mb-4">বাংলাদেশে IELTS পুনর্মূল্যায়ন (EOR) ফি</h3>
            <div className="my-6">
                <CustomDataTable columns={eorFeeColumns} data={eorFeeData}/>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <b>Refund:</b> যদি রিমার্কিংয়ের (EOR) ফলে আপনার স্কোর বাড়ে, তাহলে EOR ফি সম্পূর্ণ রিফান্ড পাবেন।
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <b>সময়সীমা:</b> EOR অনুরোধ জমা দেওয়া যাবে <b>পরীক্ষার তারিখ থেকে ছয় সপ্তাহের মধ্যে</b>।
            </div>

            <h3 className="font-semibold text-xl text-blue-900 mt-8 mb-4">IELTS EOR কীভাবে অনুরোধ করবেন?</h3>
            <ol className="list-decimal pl-6 space-y-1 text-gray-800 text-base mb-4">
                <li>আপনার IELTS IDP একাউন্টে লগইন করুন এবং <b>EOR</b> ট্যাবটি খুঁজে নিন</li>
                <li>ট্যাবের মধ্যে “<b>Apply now</b>” ক্লিক করুন এবং ফর্ম পূরণ করুন</li>
                <li>যে সেকশনগুলো পুনর্মূল্যায়ন করাতে চান, সেগুলো নির্বাচন করুন</li>
                <li>২ কর্মদিবসের মধ্যে আপনি একটি ইনভয়েস পাবেন</li>
                <li>ইমেইলে দেওয়া লিঙ্কের মাধ্যমে পেমেন্ট সম্পন্ন করুন</li>
                <li>২-২১ কর্মদিবসের মধ্যে আপনার পুনর্মূল্যায়িত ফলাফল পাবেন</li>
            </ol>
        </section>
    );
}
