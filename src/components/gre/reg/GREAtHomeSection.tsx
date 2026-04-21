export default function GREAtHomeSection() {
    return (
        <section className="container mx-auto py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৩. GRE at Home
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        চলমান মহামারির সময় GRE পরীক্ষা দেওয়া বেশ চ্যালেঞ্জিং হতে পারে, বিশেষ করে লকডাউনের কারণে পরীক্ষাকেন্দ্রগুলোর ধারণক্ষমতা কমে যাওয়া এবং সাময়িকভাবে বন্ধ থাকার কারণে। তবে প্রার্থীদের জন্য প্রক্রিয়াটি সহজ ও নিরাপদ করতে GRE কর্তৃপক্ষ GRE General Test at Home বিকল্প চালু করেছে। এর মাধ্যমে প্রার্থীরা ঘরে বসেই নিরাপদে পরীক্ষা দিতে পারবেন, পরীক্ষাকেন্দ্রে যাওয়ার চিন্তা ছাড়াই।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        GRE at Home সংস্করণে প্রচলিত পরীক্ষার সব গুরুত্বপূর্ণ বৈশিষ্ট্য অন্তর্ভুক্ত রয়েছে, যা একটি নিরবচ্ছিন্ন পরীক্ষার অভিজ্ঞতা নিশ্চিত করে। প্রার্থীরা অফিসিয়াল GRE ওয়েবসাইটে গিয়ে একটি টেস্ট-টেকার প্রোফাইল তৈরি করে পরীক্ষার জন্য রেজিস্ট্রেশন করতে পারবেন। রেজিস্ট্রেশনের সময় তারা GRE at Home অপশনটি বেছে নিতে পারবেন এবং বাড়ি থেকে পরীক্ষা দেওয়ার জন্য প্রয়োজনীয় টিউটোরিয়াল ও সিস্টেম রিকোয়ারমেন্টস অনুসরণ করতে পারবেন।
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        GRE at Home বিকল্প বেছে নিলে প্রার্থীরা পরীক্ষাকেন্দ্রে না গিয়েই সহজে পরীক্ষা দিতে পারবেন। এই পরীক্ষার রেজিস্ট্রেশন ফি একই আছে—BDT ২২,০০০। GRE-এর এই উদ্যোগটি কঠিন সময়ে প্রার্থীদের জন্য পরীক্ষাটিকে আরও সহজলভ্য করেছে, যাতে তারা কোনো বিঘ্ন ছাড়াই তাদের একাডেমিক যাত্রা চালিয়ে যেতে পারেন।
                    </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">🏠 সুবিধাসমূহ</h4>
                        <div className="space-y-2">
                            <p className="text-blue-700 text-sm">• ঘরে বসে নিরাপদে পরীক্ষা দেওয়ার সুযোগ</p>
                            <p className="text-blue-700 text-sm">• পরীক্ষাকেন্দ্রে যাওয়ার প্রয়োজন নেই</p>
                            <p className="text-blue-700 text-sm">• প্রচলিত পরীক্ষার সব বৈশিষ্ট্য বহাল</p>
                        </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-green-800 mb-2">💰 ফি ও তথ্য</h4>
                        <div className="space-y-2">
                            <p className="text-green-700 text-sm">• রেজিস্ট্রেশন ফি: BDT ২২,০০০</p>
                            <p className="text-green-700 text-sm">• অনলাইন রেজিস্ট্রেশন প্রয়োজন</p>
                            <p className="text-green-700 text-sm">• সিস্টেম রিকোয়ারমেন্টস পূরণ করতে হবে</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
