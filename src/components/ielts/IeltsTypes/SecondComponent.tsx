import React from "react";

const SecondComponent: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ৪. একাডেমিক এবং জেনারেল IELTS-এর মধ্যে পার্থক্য কী?
        </h2>

        {/* Carousel-like cards section, hardcoded content for now */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="bg-indigo-600 text-white rounded-lg p-6 flex flex-col justify-between w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">
              IELTS Academic & IELTS General Training
            </h3>
            <p className="text-sm">KEY TAKEAWAYS IN 3 SLIDES</p>
          </div>
          <div className="bg-indigo-500 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
            <span className="text-sm opacity-75 mb-2">০1</span>
            <p className="font-semibold">Academic: More academic, complex.</p>
          </div>
          <div className="bg-indigo-400 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
            <span className="text-sm opacity-75 mb-2">০2</span>
            <p className="font-semibold">General: Basic, everyday scenarios.</p>
          </div>
        </div>

        {/* Main Content */}
        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS-এর দুই ধরন হলো, IELTS Academic এবং General পরীক্ষার প্রধান
          পার্থক্য হলো বিশ্বের নানা অঞ্চলের ব্যবহারিক ও একাডেমিক ক্ষেত্রে এই দুই
          পরীক্ষার মধ্যে কী পার্থক্য আছে, কিন্তু গুরুত্বপূর্ণ দিক তাদের আলাদা করে
          তোলে।
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-2">
          এই দুই ধরনের IELTS পরীক্ষার বিস্তারিত তুলনা নিচে দেওয়া হলো:
        </h3>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="py-3 px-4">পার্থক্য</th>
                <th className="py-3 px-4">IELTS Academic</th>
                <th className="py-3 px-4">IELTS General Training</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                  উদ্দেশ্য
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  স্নাতক বিশ্ববিদ্যালয় পর্যায়ের পড়াশোনার জন্য (স্নাতক,
                  পোস্টগ্রাজুয়েট, পিএইচডি)।
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  প্রশিক্ষণ, শিক্ষানবিশ ও পেশাগত দক্ষতা অর্জন।
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                  পরীক্ষার বিষয়বস্তু
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  একাডেমিক প্রযুক্তি, কঠিন বাক্যবিন্যাস।
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  নিয়মিত ব্যবহারিক পরিস্থিতিতে উপযুক্ত বিষয় এবং প্রশ্ন।
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                  রিডিং পরীক্ষা
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  একাডেমিক পাঠ্য, যেমন: উচ্চমানের বই, জার্নাল, ওয়েবসাইট, ম্যাগাজিন।
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  ব্যবহারিক পাঠ্য, যেমন: বিজ্ঞাপন, নিবন্ধ, কোম্পানি গেজেট।
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                  রাইটিং পরীক্ষা
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Task 1: ভিজ্যুয়াল ইনফরমেশন বর্ণনা করা</li>
                    <li>Task 2: একাডেমিক প্রবন্ধ লেখা</li>
                  </ul>
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Task 1: একটি চিঠি লেখা</li>
                    <li>Task 2: প্রবন্ধ লেখা (সাধারণ বিষয়)</li>
                  </ul>
                </td>
              </tr>
              <tr className="last:border-b-0">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                  জটিলতা
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  জটিলতার প্রয়োজনতা
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  সীমিত প্রকৃতি
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2">
          IELTS Academic বনাম General: কোনটি সহজ?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          আপনি যদি উচ্চ পড়াশোনার জন্য IELTS Academic পরীক্ষা দিতে পছন্দ করেন, আর
          যদি ব্যক্তিগত ও জেনারেল ট্রেনিং চান, তাহলে আপনি General Training নির্বাচন
          করুন।
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS Academic এবং General Training দুইটি আলাদা উদ্দেশ্য তৈরি, যা তাদের
          কঠিনতার উপর ভিত্তি করে।
        </p>
        <p className="text-gray-700 leading-relaxed">
          IELTS Academic সাধারণ জীবনে ব্যবহার করা হয় না। উচ্চ শিক্ষার পরিস্থিতি নিয়ে
          পরীক্ষা নেওয়ার জন্য এটি বিশেষভাবে ডিজাইন করা হয়েছে।
        </p>
      </div>
    </div>
  );
};

export default SecondComponent;
