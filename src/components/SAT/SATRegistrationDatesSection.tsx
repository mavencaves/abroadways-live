import NewCustomTable from "@/components/NewCustomTable.tsx";

export default function SATRegistrationDatesSection() {
    // Table data for main registration dates
    const registrationDates = [
        {
            examDate: "নভেম্বর ৮, ২০২৫",
            registrationDeadline: "২৪ অক্টোবর, ২০২৫"
        },
        {
            examDate: "ডিসেম্বর ৬, ২০২৫",
            registrationDeadline: "২১ নভেম্বর, ২০২৫"
        }
    ];

    // Table data for changes and late registration
    const changeDeadlines = [
        {
            examDate: "নভেম্বর ৮, ২০২৫",
            changeDeadline: "অক্টোবর ২৮, ২০২৫"
        },
        {
            examDate: "ডিসেম্বর ৬, ২০২৫",
            changeDeadline: "নভেম্বর ২৫, ২০২৫"
        }
    ];

    const registrationColumns = [
        { key: 'examDate', label: 'SAT পরীক্ষা তারিখ', width: 'w-1/2' },
        { key: 'registrationDeadline', label: 'রেজিস্ট্রেশন ডেডলাইন', width: 'w-1/2' }
    ];

    const changeColumns = [
        { key: 'examDate', label: 'SAT পরীক্ষা তারিখ', width: 'w-1/2' },
        { key: 'changeDeadline', label: 'পরিবর্তন, সাধারণ বাতিলকরণ এবং দেরিতে রেজিস্ট্রেশনের সময়সীমা', width: 'w-1/2' }
    ];

    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ১. SAT নিবন্ধনের তারিখ ২০২৫ এবং সময়সীমা
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        SAT পরীক্ষা প্রতি বছর একাধিকবার অনুষ্ঠিত হয়, তাই সঠিক পরীক্ষা তারিখ নির্বাচন করা অত্যন্ত গুরুত্বপূর্ণ, যাতে বিশ্ববিদ্যালয়ের আবেদন সময়সীমা পূরণ করা যায়।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে ২০২৫ সালের প্রধান SAT রেজিস্ট্রেশন তারিখগুলো দেওয়া হলো।
                    </p>
                </div>

                {/* Main Registration Dates Table */}
                <NewCustomTable
                    data={registrationDates}
                    columns={registrationColumns}
                    className="mb-6"
                />

                {/* Important Note */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-8">
                    <p className="text-yellow-800">
                        <strong>গুরুত্বপূর্ণ:</strong> সকল রেজিস্ট্রেশন ডেডলাইন ইউ.এস. ইস্টার্ন টাইম অনুযায়ী রাত ১১:৫৯ মিনিটে শেষ হয়।
                    </p>
                </div>

                {/* Changes and Late Registration Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-purple-600 mb-6">
                        SAT রেজিস্ট্রেশনের পরিবর্তন, সাধারণ বাতিলকরণ এবং দেরিতে রেজিস্ট্রেশনের সময়সীমা
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        যদি আপনি আপনার রেজিস্ট্রেশনে পরিবর্তন করতে চান, পরীক্ষা বাতিল করতে চান, বা দেরিতে রেজিস্ট্রেশন করতে চান, তবে এই পরিবর্তনের জন্য নির্দিষ্ট সময়সীমা জানা গুরুত্বপূর্ণ। পরীক্ষার দিন আগেই আপনি রেজিস্ট্রেশন সামঞ্জস্য করতে পারবেন, তবে মনে রাখবেন পরিবর্তন বা বাতিলকরণের জন্য অতিরিক্ত ফি প্রযোজ্য হতে পারে।
                    </p>
                </div>

                {/* Changes and Late Registration Table */}
                <NewCustomTable
                    data={changeDeadlines}
                    columns={changeColumns}
                    className="mb-8"
                />

                {/* Registration Types Explanation */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">
                        আপনার জানা প্রয়োজন এমন রেজিস্ট্রেশন ডেডলাইনসমূহ
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">সাধারণ রেজিস্ট্রেশন ডেডলাইন:</h4>
                                <p className="text-gray-700">
                                    এটি সেই শেষ দিন যখন আপনি লেট ফি ছাড়াই SAT-এর জন্য রেজিস্ট্রেশন করতে পারবেন।
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">দেরিতে রেজিস্ট্রেশন:</h4>
                                <p className="text-gray-700">
                                    যদি সাধারণ রেজিস্ট্রেশন ডেডলাইন মিস হয়ে যায়, তবুও আপনি SAT-এর জন্য রেজিস্ট্রেশন করতে পারবেন, তবে লেট ফি প্রযোজ্য হবে। দেরিতে রেজিস্ট্রেশন সাধারণত সাধারণ ডেডলাইন শেষ হওয়ার প্রায় এক সপ্তাহ পর বন্ধ হয়ে যায়।
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">পরীক্ষার তারিখ বা কেন্দ্র পরিবর্তন:</h4>
                                <p className="text-gray-700">
                                    যদি আপনার পরীক্ষা তারিখ বা কেন্দ্র পরিবর্তন করতে হয়, তবে এটি পরিবর্তনের ডেডলাইন শেষ হওয়ার আগে করতে হবে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alert Box */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">⚠️</span>
                        <h4 className="font-semibold text-red-800">মনে রাখবেন</h4>
                    </div>
                    <p className="text-red-700">
                        সব ধরনের পরিবর্তনের জন্য অতিরিক্ত ফি প্রযোজ্য। তাই প্রথমেই সঠিক তথ্য দিয়ে রেজিস্ট্রেশন করা উত্তম।
                    </p>
                </div>
            </div>
        </section>
    );
}
