export default function GREAnalyticalWritingSection() {
    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৫. GRE সিলেবাস ২০২৫: Analytical Writing
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Analytical Writing সেকশনটি ডিজাইন করা হয়েছে যাতে বোঝা যায় আপনি জটিল ধারণাগুলো কতটা কার্যকরভাবে প্রকাশ করতে পারেন। এটি আপনার লেখার দক্ষতা মূল্যায়ন করে নিম্নলিখিত বিষয়গুলোতে:
                    </p>

                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">জটিল ধারণা স্পষ্টভাবে উপস্থাপন এবং সমর্থন করা</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">যুক্তি তৈরি করা</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">ফোকাস বজায় রেখে সুসংগঠিত আলোচনা চালানো</span>
                        </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        তবে, এই সেকশন আপনার বিষয়বস্তু জ্ঞানের পরীক্ষা নেয় না। অর্থাৎ, আপনাকে দেওয়া বিষয়গুলোর মাস্টার হতে হবে না; আপনি শুধু আপনার বোঝাপড়ার ভিত্তিতে লিখতে পারবেন।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        এই সেকশনে কেবল একটি টাস্ক থাকে, যার নাম Analyse an Issue।
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        আপনাকে আপনার উত্তর তৈরি করার জন্য প্রয়োজনীয় সমস্ত নির্দেশনা দেওয়া হবে। আপনাকে যা করতে হবে তা হলো টাস্কগুলোকে ছোট ছোট অংশে ভাগ করা, বিশ্লেষণ করা এবং আপনার যুক্তি তৈরি করা। নিশ্চিত করুন যে আপনার যুক্তিগুলোকে কারণ ও প্রমাণ দিয়ে সমর্থন করছেন।
                    </p>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">📝 মূল উদ্দেশ্য</h4>
                        <p className="text-blue-700 text-sm">জটিল ধারণা কার্যকরভাবে প্রকাশ করার ক্ষমতা মূল্যায়ন</p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-green-800 mb-2">🎯 টাস্ক</h4>
                        <p className="text-green-700 text-sm">Analyse an Issue - একটিমাত্র টাস্ক</p>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">💡 প্রয়োজন</h4>
                        <p className="text-orange-700 text-sm">বিষয়বস্তু জ্ঞান নয়, শুধু বোঝাপড়া ও যুক্তি</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
