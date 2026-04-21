export default function LORFormatSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                মাস্টার্সের জন্য LOR-এর ফরম্যাট
            </h2>
            <p className="mb-4 text-gray-800 text-base leading-relaxed">
                একটি মাস্টার্সের LOR সাধারণত একটি ফরমাল কাঠামো অনুসরণ করে যা আবেদনকারীর শক্তি, সাফল্য এবং গ্র্যাজুয়েট স্টাডিজে সফল হওয়ার সম্ভাবনা তুলে ধরে।
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">ভূমিকা (১ প্যারাগ্রাফ):</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base mb-5">
                <li>সংক্ষেপে নিজেকে পরিচয় করান (নাম, পদবী, সংস্থা)।</li>
                <li>ছাত্র/ছাত্রীর সাথে আপনার সম্পর্ক উল্লেখ করুন (যেমন, অধ্যাপক, সুপারভাইজার) এবং কতদিন ধরে তাদের চেনেন।</li>
                <li>তারা কোন প্রোগ্রামে আবেদন করছে তা উল্লেখ করতে পারেন (ঐচ্ছিক)।</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">মূল অংশ (২-৩ প্যারাগ্রাফ):</h3>
            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">১. একাডেমিক শক্তি:</h4>
                <p className="text-gray-800 text-base leading-relaxed mb-3">
                    ছাত্র/ছাত্রীর একাডেমিক সাফল্য এবং প্রোগ্রামের জন্য প্রাসঙ্গিক গুণাবলী তুলে ধরুন। কোর্সওয়ার্ক, প্রোজেক্ট বা রিসার্চ অভিজ্ঞতা থেকে স্পেসিফিক উদাহরণ ব্যবহার করুন।
                </p>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500 mb-3">
                    <p className="text-gray-700 italic">
                        উদাহরণ: "আমি [ছাত্রের নাম]-কে আমার [কোর্স নাম] ক্লাসে পড়িয়েছি। তারা সর্বদা তাদের [পজিটিভ একাডেমিক গুণ] এবং [আরেকটি পজিটিভ গুণ] দিয়ে আমাকে মুগ্ধ করেছেন। উদাহরণস্বরূপ, [ছাত্রের নাম]-এর [স্পেসিফিক উদাহরণ] তাদের [প্রাসঙ্গিক দক্ষতা] প্রদর্শন করেছে।"
                    </p>
                </div>
            </div>

            <div className="mb-5">
                <h4 className="font-semibold text-gray-900 mb-2">২. গুণাবলী এবং দক্ষতা:</h4>
                <p className="text-gray-800 text-base leading-relaxed mb-3">
                    ছাত্র/ছাত্রীর ব্যক্তিগত গুণাবলী এবং পেশাগত দক্ষতা নিয়ে আলোচনা করুন যা প্রোগ্রাম এবং ভবিষ্যৎ ক্যারিয়ারে উপকারী হবে।
                </p>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500 mb-3">
                    <p className="text-gray-700 italic">
                        উদাহরণ: "[ছাত্রের নাম] একজন শক্তিশালী একাডেমিক পারফর্মার এবং অত্যন্ত অনুপ্রাণিত ও সংস্থানশীল ব্যক্তি। [কোম্পানির নাম]-এ তাদের ইন্টার্নশিপের সময়, তারা [স্পেসিফিক উদাহরণ] প্রদর্শন করেছেন, যা তাদের [প্রাসঙ্গিক দক্ষতা] তুলে ধরে।"
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">উপসংহার (১ প্যারাগ্রাফ):</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base mb-5">
                <li>মূল পয়েন্টগুলো সংক্ষেপে উপস্থাপন করুন এবং ছাত্র/ছাত্রীর ভর্তি জন্য দৃঢ় সুপারিশ প্রকাশ করুন।</li>
                <li>প্রয়োজনে আরও তথ্য দেওয়ার প্রস্তাব দিন (ঐচ্ছিক)।</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">অতিরিক্ত টিপস:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
                <li>প্রফেশনাল টোন বজায় রাখুন কিন্তু অতিরিক্ত ফরমাল ভাষা এড়ান।</li>
                <li>স্পষ্ট এবং সংক্ষিপ্ত বাক্য ব্যবহার করুন।</li>
                <li>ছাত্র/ছাত্রীর সাথে আপনার সম্পর্ক অনুযায়ী ভাষা পার্সোনালাইজ করুন।</li>
                <li>যেকোনো ভুলের জন্য প্রুফরিড করুন।</li>
                <li>প্রয়োজনে আপনার প্রতিষ্ঠানের অফিসিয়াল লেটারহেড ব্যবহার করুন।</li>
                <li>চিঠি স্বাক্ষর এবং তারিখ দিন।</li>
            </ul>
            <p className="mt-4 text-gray-800 text-base leading-relaxed">
                এই ফরম্যাট অনুসরণ করে এবং কথোপকথনমূলক টোন ব্যবহার করে, আপনি একটি প্রভাবশালী LOR লিখতে পারেন যা মাস্টার্স প্রোগ্রামে ছাত্র/ছাত্রীর সম্ভাবনাকে কার্যকরভাবে প্রচার করবে।
            </p>
        </section>
    );
}
