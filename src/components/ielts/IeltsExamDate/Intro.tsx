import React, { useState } from "react";

// ---------------- Reusable ExpandableCard ----------------
type ExpandableCardProps = {
  title: string;
  children: React.ReactNode;
};

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4 overflow-hidden">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">
          {title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-blue-500 transition-transform duration-300 ${
            isExpanded ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-700 text-sm">{children}</div>
      )}
    </div>
  );
};

// ---------------- Main Component ----------------
const Intro: React.FC = () => {
  // Download Handler
  const handleDownload = () => {
    const fileContent =
      "This is a sample IELTS brochure content.\nThis file is for demonstration purposes.";
    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "IELTS_Brochure.txt";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* ---------------- Intro Section ---------------- */}
      <div className="flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-4xl w-full">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2 text-gray-800">
              ২০২৩ সালের IELTS পরীক্ষা তারিখসমূহ:
            </h1>
            <p className="text-2xl font-medium text-gray-700">
              মার্চ থেকে ডিসেম্বর (Academic ও General Training)
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            আপডেট করা হয়েছে: ৩ মার্চ ২০২৩, ৩:৩৭
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            আপনি কি IELTS দেয়ার পরবর্তী ধাপ নেওয়ার জন্য প্রস্তুত? মার্চ মাসের জন্য
            নির্ধারিত পরীক্ষার তারিখগুলি নিচে দেওয়া হলো, যা আপনি মিস করতে চান না।
          </p>
          <div className="text-gray-700 space-y-4">
            <p className="text-lg">
              <span className="font-semibold">কম্পিউটার-ভিত্তিক:</span> ১ থেকে ৩০
              মার্চ প্রতিদিন উপলব্ধ
            </p>
            <p className="text-lg">
              <span className="font-semibold">কাগজ-ভিত্তিক:</span> ক্যালেন্ডারে চিহ্নিত
              করুন ৫, ১০, এবং ১২ তারিখ।
            </p>
          </div>

          <div className="font-sans mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              ১.২. ধাপ: ডাউনলোড IELTS ই-বুক
            </h2>
            <p className="text-gray-600 leading-relaxed">
              আমাদের নতুন ই-বুক IELTS এর জন্য সেরা প্রস্তুতি এবং পরীক্ষার তারিখ সম্পর্কে
              আপনাকে গাইড করবে।
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span className="text-lg font-medium">
                    ডাউনলোড IELTS Resources
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Feature Two ---------------- */}
      <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            ২. ২০২৩ সালে বাংলাদেশে Academic IELTS পরীক্ষার তারিখসমূহ
          </h2>
          <p className="text-gray-700 mb-4">
            IELTS Academic Test আপনার উচ্চশিক্ষা লাভ ও সফল কর্মজীবন শুরু করার জন্য
            আপনার বিভিন্ন বিভাগ বা ফ্যাকালটিগুলো মূল্যায়ন করার সহযোগিতা করে।
          </p>
          <p className="text-gray-700 mb-4">
            পরীক্ষার জন্য নিবন্ধন করার আগে কয়েকটি গুরুত্বপূর্ণ তথ্য জেনে রাখুন:
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
              <li>
                IELTS একাডেমিক পরীক্ষা শুধুমাত্র মাসের তিন দিনই হয় (প্রচলিত চতুর্থ দিন
                বাদ)। একটি নির্দিষ্ট পরীক্ষার দিনে তিনটি ভাগ করা হয়, যার সময় আপনি আপনার
                সুবিধামত বেছে নিতে পারেন।
              </li>
              <li>
                IELTS Academic পরীক্ষার সময়সীমা সাধারণত:
                <ul className="list-disc pl-6 text-xs mt-1">
                  <li>শ্রবণ: ১০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                  <li>পড়ন্ত: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                  <li>লিখন: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                  <li>কথা বলার: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            নিয়মিত IELTS একাডেমিক পরীক্ষার অনুশীলন পরীক্ষাগুলো করলে আপনি শুধুমাত্র আপনার
            স্পিকিং দক্ষতা বৃদ্ধি করতে পারবেন না, সাথে আপনি আপনার দুর্বলতা খুঁজে বের করে
            সেগুলোর ওপর প্রয়োজনীয় প্রশিক্ষণও করতে পারবেন।
          </p>

          <h3 className="text-lg font-bold text-gray-800 mb-4">
            বিভিন্ন ধরনের IELTS পরীক্ষার বাঞ্চিং ফি কার্ডের সঠিক তথ্যের জন্য নিচের তারিখ
            দেখুন।
          </h3>

          <ExpandableCard title="ঢাকায় IELTS পরীক্ষার তারিখসমূহ">
            <p>এখানে ঢাকার পরীক্ষার তারিখগুলো থাকবে।</p>
          </ExpandableCard>

          <ExpandableCard title="চট্টগ্রাম IELTS পরীক্ষার তারিখসমূহ">
            <p>এখানে চট্টগ্রামের পরীক্ষার তারিখগুলো থাকবে।</p>
          </ExpandableCard>

          <ExpandableCard title="সিলেট IELTS পরীক্ষার তারিখসমূহ">
            <p>এখানে সিলেটের পরীক্ষার তারিখগুলো থাকবে।</p>
          </ExpandableCard>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
            <span>ভর্তি এবং পরীক্ষার সম্পূর্ণ তারিখসমূহ দেখুন</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ---------------- Feature Three ---------------- */}
      <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            ৩. ২০২৩ সালে বাংলাদেশে General Training IELTS পরীক্ষার তারিখসমূহ
          </h2>
          <p className="text-gray-700 mb-4">
            আপনার যদি ইংরেজি ভাষাভাষী কোনো দেশে কাজের বা প্রশিক্ষণের কাজে যাওয়ার অভিপ্রায়
            থাকে, তাহলে IELTS General Training পরীক্ষাটি আপনার জন্য উপযুক্ত। এই পরীক্ষাটি
            আপনার সাধারণ জীবন ও কাজ সম্পর্কে আপনার জ্ঞান পরীক্ষা করে।
          </p>
          <p className="text-gray-700 mb-4">
            পরীক্ষার জন্য নিবন্ধন করার আগে কিছু গুরুত্বপূর্ণ তথ্য জেনে রাখুন:
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
              <li>
                IELTS জেনারেল ট্রেনিং পরীক্ষা শুধুমাত্র মাসের তিন দিনই হয় (প্রচলিত চতুর্থ দিন
                বাদ)। একটি নির্দিষ্ট পরীক্ষার দিনে তিনটি ভাগ করা হয়, যার সময় আপনি আপনার
                সুবিধামত বেছে নিতে পারেন।
              </li>
              <li>
                IELTS Academic পরীক্ষার সময়সীমা সাধারণত:
                <ul className="list-disc pl-6 text-xs mt-1">
                  <li>শ্রবণ: ১০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                  <li>পড়ন্ত: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                  <li>লিখন: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                  <li>কথা বলার: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                </ul>
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-4">
            জেনারেল ট্রেনিং পরীক্ষার জন্য IELTS পরীক্ষার তারিখ: শহরভিত্তিক তালিকা
          </h3>

          <ExpandableCard title="ঢাকায় IELTS পরীক্ষার তারিখসমূহ">
            <p>এখানে ঢাকার পরীক্ষার তারিখগুলো থাকবে।</p>
          </ExpandableCard>

          <ExpandableCard title="চট্টগ্রাম IELTS পরীক্ষার তারিখসমূহ">
            <p>এখানে চট্টগ্রামের পরীক্ষার তারিখগুলো থাকবে।</p>
          </ExpandableCard>

          <ExpandableCard title="সিলেট IELTS পরীক্ষার তারিখসমূহ">
            <p>এখানে সিলেটের পরীক্ষার তারিখগুলো থাকবে।</p>
          </ExpandableCard>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
            <span>ভর্তি এবং পরীক্ষার সম্পূর্ণ তারিখসমূহ দেখুন</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
