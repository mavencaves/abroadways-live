

const Intro = () => {
  return (
    <div className="font-sans">
      {/* IeltsFeesInfoCard Section */}
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-8 border border-gray-200">
          <div className="text-sm text-gray-500 mb-6">
            <span className="mx-1">/</span>
            <span>পরীক্ষাসমূহ</span>
            <span className="mx-1">/</span>
            <span>IELTS</span>
            <span className="mx-1">/</span>
            <span>ফি</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            IELTS পরীক্ষার ফি ২০২৩
          </h1>

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>আপডেট করা হয়েছে: ১৪ এপ্রিল ২০২৩, ০৫:৩৭</span>
          </div>

          <div className="p-4 md:p-6 mb-6 rounded-lg border border-blue-200 bg-blue-50">
            <h3 className="font-semibold text-blue-800 mb-2">
              IELTS-র সর্বশেষ আপডেট
            </h3>
            <p className="text-blue-700">
              ২০২৩ সালে Academic এবং General Training উভয় পরীক্ষার ফি আপডেট করে
              BDT 19,500 করা হয়েছে।
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <p className="pb-8">
              IELTS একটি জনপ্রিয় পরীক্ষা, যা প্রতি বছর প্রায় ৪ মিলিয়ন শিক্ষার্থী
              গ্রহণ করে। এই সংখ্যাটি প্রতিনিয়ত আরও বাড়ার আশা করা হচ্ছে।
            </p>
            <p className="pb-8">
              আপনার IELTS পরীক্ষার জন্য পরীক্ষার তারিখ এবং কেন্দ্র গুরুত্বপূর্ণ
              ম্যাচের একটি অংশ হয়, IELTS পরীক্ষার জন্য কত টাকা দিতে হয়"-এরও সম্পর্কে
              সচেতন হওয়া আপনাকে বাজেট পরিকল্পনা করতে সাহায্য করবে এবং অতিরিক্ত ব্যয়
              এড়াতে সাহায্য করবে।
            </p>
            <p className="pb-8">
              মনে রাখা জরুরী যে, IELTS পরীক্ষার ফি আপনার অবস্থান এবং আপনি কোন ধরনের
              পরীক্ষা নিবেন (Academic নাকি General Training) তার উপর নির্ভর করে ভিন্ন
              হতে পারে। এছাড়াও, পরীক্ষার তারিখ পরিবর্তন বা বাতিল করার জন্য অতিরিক্ত
              খরচ থাকতে পারে।
            </p>
            <p>
              এই পৃষ্ঠায়, আমরা IELTS পরীক্ষার সঙ্গে সম্পর্কিত সমস্ত খরচ বিস্তারিতভাবে
              বিশ্লেষণ করব, যাতে আপনি আর্থিক পরিকল্পনা আরও ভালোভাবে করতে পারেন।
            </p>
          </div>
        </div>
      </div>

      {/* IeltsFeeTable Section */}
      <div className="font-sans max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              ১. বাংলাদেশে IELTS পরীক্ষার ফি ২০২৪-২০২৫
            </h2>
            <p className="text-gray-600">
              বাংলাদেশে IELTS পরীক্ষার দায়িত্বে আছেন IDP Education। যদিও IELTS
              পরীক্ষার ফি বিষয়গুলো প্রায় একই, বিভিন্ন দেশে ফি কিছুটা অর্থহীন থাকতে
              পারে। তাই, আপনার নির্ধারিত টেস্ট সেন্টার আপনাকে কত টাকা প্রদান করতে হয়
              তা আগে থেকে যাচাই করে নেওয়া ভালো।
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-1/3 px-2 md:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-800">
                    IELTS একাডেমিক ফি
                  </th>
                  <th className="w-1/3 px-2 md:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-800">
                    IELTS জেনারেল ট্রেইনিং ফি
                  </th>
                  <th className="w-1/3 px-2 md:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    IELTS লাইফ স্কিলস এণ্ড B1
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-400">
                <tr>
                  <td colSpan={3} className="px-2 md:px-6 py-4">
                    <div className="flex flex-col md:flex-row">
                      <table className="w-full border-separate border-spacing-0 border rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-2 md:px-6 py-3 text-left text-sm font-semibold text-gray-800 border-b border-r border-gray-400">
                              পরীক্ষার ধরন
                            </th>
                            <th className="px-2 md:px-6 py-3 text-left text-sm font-semibold text-gray-800 border-b border-sky-200">
                              মূল্য
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-800">
                          <tr>
                            <td className="px-2 md:px-6 py-4 whitespace-nowrap border border-gray-800">
                              কম্পিউটার ভিত্তিক IELTS পরীক্ষা
                            </td>
                            <td className="px-2 md:px-6 py-4 whitespace-nowrap border border-gray-800">
                              BDT ১৯,৫০০
                            </td>
                          </tr>
                          <tr>
                            <td className="px-2 md:px-6 py-4 whitespace-nowrap border border-gray-800">
                              কলম ভিত্তিক IELTS পরীক্ষা
                            </td>
                            <td className="px-2 md:px-6 py-4 whitespace-nowrap border border-gray-800">
                              BDT ১৯,৫০০
                            </td>
                          </tr>
                          <tr>
                            <td className="px-2 md:px-6 py-4 whitespace-nowrap border border-gray-800">
                              ইউকে ভিসা একাডেমিক IELTS
                            </td>
                            <td className="px-2 md:px-6 py-4 whitespace-nowrap border border-gray-800">
                              BDT ২৩,৫০০
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CityWiseFee Section */}
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg px-10 shadow-sm overflow-hidden border border-gray-200">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              ২. বাংলাদেশে শহর অনুযায়ী IELTS পরীক্ষার ফি ২০২৪-২০২৫ এর তালিকা
            </h2>
            <p className="text-gray-600 mb-6">
              বাংলাদেশের প্রধান প্রধান শহরগুলোতে পরীক্ষার্থীদের সুবিধার জন্য অনেকগুলি
              IDP IELTS সেন্টার বা Bsh British Council রয়েছে, যেগুলোতে সহজে IELTS
              পরীক্ষা ফি-এর সেবা।
            </p>
            <p className="text-gray-600 mb-6">
              নীচে, আমরা বাংলাদেশের কয়েকটি প্রধান শহরের মনোনীত IELTS সেন্টার এবং
              IELTS পরীক্ষার ফি নিয়ে একটি তালিকা তৈরি করেছি।
            </p>
          </div>

          <div className="overflow-x-auto px-5">
            <table className="min-w-full border border-gray-800 divide-y divide-gray-800">
              <thead className="bg-gray-100">
                <tr>
                  <th className="w-2/3 px-4 py-3 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider border-r border-gray-800">
                    IELTS একাডেমিক ফি
                  </th>
                  <th className="w-1/3 px-4 py-3 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider">
                    মূল্য
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 border-r border-gray-800">
                    ঢাকা শহরে IELTS পরীক্ষার ফি
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    BDT ১৯,৫০০
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 border-r border-gray-800">
                    চট্টগ্রাম শহরে IELTS পরীক্ষার ফি
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    BDT ১৯,৫০০
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 border-r border-gray-800">
                    সিলেট শহরে IELTS পরীক্ষার ফি
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    BDT ১৯,৫০০
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-gray-600">
              এই শহরগুলোতে IELTS পরীক্ষার সুবিধা সহজলভ্য হয়েছে, যার ফলে দেশের বিভিন্ন
              অঞ্চল থেকে আগত প্রার্থীরা সহজেই পরীক্ষা দিতে পারেন এবং ফি সম্পর্কেও
              সহায়তা পাওয়া যায়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
