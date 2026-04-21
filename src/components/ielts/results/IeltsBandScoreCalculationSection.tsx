export default function IeltsBandScoreCalculationSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ২. IELTS ব্যান্ড স্কোর কিভাবে হিসাব করবেন?
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                আপনাকে প্রতিটি IELTS সেকশনে ০ থেকে ৯ এর মধ্যে একটি স্কোর প্রদান করা হয়। এই চারটি সেকশনের স্কোরের গড়ই আপনার <b>Overall Band Score</b> হিসেবে গণ্য হয়।
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-5 border border-blue-200">
                <b>ব্যালান্সিং টিপস:</b>
                <div className="text-gray-800 text-base">
                    আপনার Overall Score হতে পারে পূর্ণ সংখ্যা (যেমন: 5.0, 6.0, 7.0) অথবা অর্ধ সংখ্যা (যেমন: 6.5, 7.5, 8.5)।<br />
                    যদি আপনার গড় স্কোরটি পূর্ণ বা অর্ধ সংখ্যা না হয়, তাহলে সেটি নিকটতম পূর্ণ বা অর্ধ সংখ্যায় রাউন্ড করে দেওয়া হয়।
                </div>
            </div>
            <div className="mb-4">
                <b>উদাহরণ:</b><br />
                <span className="block text-gray-800 text-base mt-1">
          Listening: <b>7.5</b><br />
          Reading: <b>6.5</b><br />
          Writing: <b>6.0</b><br />
          Speaking: <b>7.0</b>
        </span>
                <div className="mt-2">
                    <span className="text-gray-800 text-base">গণনা:</span><br />
                    <span className="text-gray-800 text-base">({`৭.৫ + ৬.৫ + ৬.০ + ৭.০`}) ÷ ৪ = ২৭ ÷ ৪ = ৬.৭৫</span>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 mt-3 border border-yellow-200">
                    <b>গুরুত্বপূর্ণ নোট:</b> ৬.৭৫ একটি নির্দিষ্ট (whole বা half) ব্যান্ড স্কোর নয়, তাই এটি রাউন্ড করে <b>৭.০</b> করা হবে, এবং এটিই হবে আপনার IELTS-এর সামগ্রিক ব্যান্ড স্কোর (Overall Band Score)।
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-900">
                আপনার IELTS ব্যান্ড স্কোর কী বোঝায়?
            </h3>
            <div className="space-y-3 text-gray-800 text-base mb-3">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <span className="font-semibold mr-2">০–৩:</span>
                    <span>আপনার ইংরেজি দক্ষতার অনেক উন্নতির প্রয়োজন আছে, এবং স্থানীয়দের সঙ্গে যোগাযোগে সমস্যা হবে।</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <span className="font-semibold mr-2">৪–৫:</span>
                    <span>আপনার ইংরেজি সম্পর্কে প্রাথমিক ধারণা আছে, কিন্তু চিন্তা প্রকাশ ও কার্যকর ফোনালাপ চালাতে অসুবিধা হতে পারে।</span>
                    <div className="mt-1 text-xs bg-blue-100 py-1 px-2 rounded border border-blue-200 inline-block">
                        ভর্তি প্রক্রিয়ার জন্য খুব কম বিশ্ববিদ্যালয়ই ০-৫ স্কোর গ্রহণ করে।
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <span className="font-semibold mr-2">৬–৭:</span>
                    <span>আপনার দক্ষতা যথেষ্ট ভালো; আপনি সহজে চিন্তা ও ধারণা প্রকাশ করতে পারবেন। বিদেশি বিশ্ববিদ্যালয়ে আবেদন করার জন্য এই স্কোর আদর্শ।</span>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <span className="font-semibold mr-2">৮-এর বেশি:</span>
                    <span>একটি চমৎকার ফলাফল, যা বোঝায় আপনি স্বাভাবিকভাবেই দক্ষ। বিশ্বের শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলোতে ভর্তি হবার সুযোগ বাড়ে (অন্যান্য শর্ত পূরণসাপেক্ষে)।</span>
                </div>
            </div>
        </section>
    );
}
