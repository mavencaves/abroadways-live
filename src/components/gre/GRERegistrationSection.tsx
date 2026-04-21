
export default function GRERegistrationSection() {
    return (
        <section className="max-w-7xl mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৭. GRE রেজিস্ট্রেশন: কিভাবে GRE এর জন্য রেজিস্ট্রেশন করবেন?
                </h2>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-600 mb-3">
                        অনলাইনে রেজিস্ট্রেশন করুন
                    </h3>
                    <p className="text-gray-600">
                        আপনি ETS এর অফিসিয়াল ওয়েবসাইটে অনলাইনে GRE এর জন্য রেজিস্ট্রেশন করতে পারেন।
                    </p>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            রেজিস্ট্রেশন করতে, একটি ETS অ্যাকাউন্ট তৈরি করুন/লগইন করুন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার বিবরণ আপনার ID এর সাথে মিল রয়েছে তা নিশ্চিত করুন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            হোম পেজে "Find test centres" বোতামে ক্লিক করুন এবং General test নির্বাচন করুন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার ইমেইল ঠিকানা নিশ্চিত করুন এবং আপনার বিবরণ (টাইমজোন এবং দেশ/শহর) পূরণ করুন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার পছন্দের তারিখ এবং কেন্দ্র নির্বাচন করুন এবং পরীক্ষার জন্য রেজিস্ট্রেশন করুন।
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-gray-700">
                            আপনার পেমেন্ট সম্পূর্ণ করুন।
                        </p>
                    </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
                    <h4 className="font-semibold text-purple-800 mb-2">নোট:</h4>
                    <p className="text-purple-700">
                        একবার রেজিস্ট্রেশন করার পর, আপনি ETS থেকে একটি ইমেইল নিশ্চিতকরণ পাবেন।
                    </p>
                </div>

                <div className="text-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                        GRE রেজিস্ট্রেশন সম্পর্কে আরও জানুন!
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
