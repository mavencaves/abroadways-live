import React, { useState } from "react";

// Reusable Expandable Card Component
const SecondComponent: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4 overflow-hidden">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-blue-500 transition-transform duration-300 ${
            isExpanded ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      {isExpanded && <div className="mt-4 text-gray-700 text-sm">{children}</div>}
    </div>
  );
};

// Feature Four: Academic IELTS
export const FeatureFour: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৪. ২০২৩ সালের Academic IELTS UKVI পরীক্ষা তারিখসমূহ</h2>
        <p className="text-gray-700 mb-4">
          IELTS UKVI Academic পরীক্ষা প্রয়োজন হয় তাদের যারা যুক্তরাজ্যের ভিসা এবং অভিবাসন বিভাগের জন্য তাদের শিক্ষা, কাজ বা ভিসার উদ্দেশ্যে বিশ্ববিদ্যালয়ে উপস্থিত হওয়ার জন্য প্রস্তুত হচ্ছে।
        </p>
        <p className="text-gray-700 mb-4">
          IELTS Academic for UKVI এবং IELTS Academic পরীক্ষা একই মানের, বিষয়বস্তু এবং স্কোরিং মেথডোলজি একই। শুধু মাত্র, IELTS for UKVI পরীক্ষা অনুমোদিত বোর্ড এবং সেন্টারগুলোতে নেওয়া হয় যা UK এবং তাদের সংশ্লিষ্ট ভিসা বিভাগের প্রয়োজনীয় মানদণ্ড মেনে চলে।
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-4">IELTS UKVI Academic পরীক্ষার তারিখসমূহ: শহর অনুযায়ী তালিকা</h3>

        <p className="text-gray-700 mb-4 text-sm">
          IELTS UKVI Academic পরীক্ষা যেকোনো দেশের যেকোনো শহরে নিয়মিতভাবে হয়। নিচে শহর নির্বাচন করে নির্দিষ্ট পরীক্ষার তারিখ, সময় এবং স্থান সম্পর্কে বিস্তারিত তথ্য পেতে পারেন।
        </p>

        {/* Expandable Cards */}
        <SecondComponent title="ঢাকায় IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে ঢাকার পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>

        <SecondComponent title="চট্টগ্রাম IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে চট্টগ্রামের পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>

        <SecondComponent title="সিলেট IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে সিলেটের পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>

        {/* Bottom Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
          <span>ভর্তি এবং পরীক্ষার সম্পূর্ণ তারিখসমূহ দেখুন</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Feature Five: General Training IELTS
export const FeatureFive: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৫. ২০২৩ সালের General Training IELTS UKVI পরীক্ষা তারিখসমূহ</h2>
        <p className="text-gray-700 mb-4">
          IELTS UKVI জেনারেল ট্রেনিং পরীক্ষার প্রধান উদ্দেশ্য হল আপনাকে যুক্তরাজ্যের ভিসা এবং অভিবাসন বিভাগের জন্য তাদের শিক্ষা, কাজ বা ভিসার উদ্দেশ্যে বিশ্ববিদ্যালয়ে উপস্থিত হওয়ার জন্য প্রস্তুত করা।
        </p>
        <p className="text-gray-700 mb-4">
          IELTS UKVI General Training এবং IELTS General Training একই হয়, শুধু IELTS for UKVI শুধুমাত্র UK এবং তাদের সংশ্লিষ্ট ভিসা বিভাগের প্রয়োজন অনুযায়ী ব্রিটিশ কাউন্সিল দ্বারা অনুমোদিত টেস্ট সেন্টারগুলোতে নেওয়া হয়।
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-4">IELTS UKVI General Training পরীক্ষার তারিখ: শহরভিত্তিক তালিকা</h3>

        <p className="text-gray-700 mb-4 text-sm">
          IELTS UKVI General Training পরীক্ষা যেকোনো দেশের যেকোনো শহরে নিয়মিতভাবে হয়। নিচে শহর নির্বাচন করে নির্দিষ্ট পরীক্ষার তারিখ, সময় এবং স্থান সম্পর্কে বিস্তারিত তথ্য পেতে পারেন।
        </p>

        {/* Expandable Cards */}
        <SecondComponent title="ঢাকায় IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে ঢাকার পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>

        <SecondComponent title="চট্টগ্রাম IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে চট্টগ্রামের পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>

        <SecondComponent title="সিলেট IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে সিলেটের পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>
      </div>
    </div>
  );
};

// Feature Six: Life Skills IELTS
export const FeatureSix: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৬. ২০২৩ সালের Life Skills IELTS পরীক্ষা: শহরভিত্তিক তালিকা</h2>
        <p className="text-gray-700 mb-4">
          বাংলাদেশে IELTS Life Skills টেস্ট ব্রিটিশ কাউন্সিল এবং আইডিপি উভয়ই গ্রহণ করে। ব্রিটিশ কাউন্সিল এবং আইডিপি উভয়ই তাদের অনলাইন পোর্টাল এবং সরাসরি যোগাযোগের মাধ্যমে এই পরীক্ষাটি পরিচালনা করে। এই পরীক্ষাটি যুক্তরাজ্যের ভিসা এবং অভিবাসন বিভাগ (UKVI) দ্বারা পরিচালিত হয়।
        </p>
        <p className="text-gray-700 mb-4">
          যদি আপনি যুক্তরাজ্যে আপনার প্রয়োজন অনুযায়ী কোন IELTS টেস্ট উপযুক্ত না হয়, তাহলে IELTS Life Skills টেস্টের বিস্তারিত জানার জন্য ব্রিটিশ কাউন্সিল এবং আইডিপি উভয় ওয়েবসাইট ভিজিট করতে পারেন।
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-4">Life Skills IELTS পরীক্ষার তারিখসমূহ: শহর অনুযায়ী তালিকা</h3>

        {/* Expandable Cards */}
        <SecondComponent title="ঢাকায় IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে ঢাকার পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>

        <SecondComponent title="চট্টগ্রাম IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে চট্টগ্রামের পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>

        <SecondComponent title="সিলেট IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে সিলেটের পরীক্ষার তারিখগুলো থাকবে।</p>
        </SecondComponent>
      </div>
    </div>
  );
};
