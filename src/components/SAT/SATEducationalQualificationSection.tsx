export default function SATEducationalQualificationSection() {
    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৩. SAT ২০২৫-এ অংশগ্রহণের জন্য শিক্ষাগত যোগ্যতা
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        SAT পরীক্ষার জন্য কোনো শিক্ষাগত পূর্বশর্ত নেই, তবে কিছু সাধারণ নির্দেশিকা আপনাকে পরীক্ষার জন্য পুরোপুরি প্রস্তুত হতে সাহায্য করবে।
                    </p>
                </div>

                {/* Academic Background Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                        ১. একাডেমিক ব্যাকগ্রাউন্ড ও প্রস্তুতি
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        SAT পরীক্ষা মূলত নিম্নলিখিত ক্ষেত্রগুলোতে আপনার দক্ষতা যাচাই করে, যা সাধারণত হাই স্কুলের পাঠ্যক্রমে অন্তর্ভুক্ত থাকে:
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                                <p className="text-gray-700">
                                    <strong>Math:</strong> বীজগণিত (Algebra), জ্যামিতি (Geometry), তথ্য বিশ্লেষণ (Data Analysis), এবং প্রাথমিক ত্রিকোণমিতি (Basic Trigonometry)।
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                                <p className="text-gray-700">
                                    <strong>Reading:</strong> লিখিত অনুচ্ছেদগুলো বুঝতে ও বিশ্লেষণ করার দক্ষতা যাচাই।
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                                <p className="text-gray-700">
                                    <strong>Writing and Language:</strong> ব্যাকরণ, বিরামচিহ্ন, বাক্য গঠন এবং পাঠ্যকে স্পষ্টতা ও শৈলীর জন্য সম্পাদনার দক্ষতা যাচাই।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Completed Education Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                        ২. যারা শিক্ষা সম্পন্ন করেছে তাদের জন্য
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                        যদি আপনি ক্লাস XII সম্পন্ন করে থাকেন, তবুও বিশ্ববিদ্যালয়ে ভর্তি হওয়ার জন্য SAT পরীক্ষায় অংশ নিতে পারবেন। SAT দেওয়ার জন্য ডিপ্লোমা বা নির্দিষ্ট একাডেমিক সার্টিফিকেটের প্রয়োজন নেই।
                    </p>
                </div>

            </div>
        </section>
    );
}
