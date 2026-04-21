import React from "react";

const Intro: React.FC = () => {
  const tableData = [
    { label: "পরীক্ষার ধরন", value: "IELTS Academic" },
    { label: "পরীক্ষার সময়কাল", value: "২ ঘণ্টা ৪০ মিনিট" },
    { label: "পরীক্ষার ধরন", value: "একাডেমিক ও জেনারেল ট্রেনিং" },
    { label: "সময়কাল", value: "২ ঘন্টা ৩০ মিনিট" },
    { label: "ব্যান্ড স্কোর", value: "১-৯" },
    { label: "পরীক্ষা ফি", value: "অনলাইন বুকিং ফি: BDT ২০,৫০০" },
    {
      label: "পরীক্ষার উদ্দেশ্য",
      value: "অফিশিয়াল একাডেমিক এবং নন-অফিশিয়াল একাডেমিক ফি",
    },
  ];

  return (
    <div className="font-sans">
      {/* -------- Intro Section -------- */}
      <div className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto my-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
            <span>
              <span>ডিসকভার ইউনিফর্মস</span>
              <span className="mx-1">/</span>
              <span>পরীক্ষাসমূহ</span>
              <span className="mx-1">/</span>
              <span>IELTS</span>
              <span className="mx-1">/</span>
              <span>ধরনেরসমূহ</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            IELTS পরীক্ষার ধরনসমূহ
          </h1>
          <div className="flex items-center text-xs text-gray-500 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
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
            <span className="text-gray-500">
              আপডেট করা হয়েছে: ২৫ সেপ্টেম্বর, ২০২২, ১১:৫৬
            </span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
          বিদেশ ভ্রমণের পরিকল্পনা করার ইংরেজি পরীক্ষা নেওয়া অত্যন্ত গুরুত্বপূর্ণ।
          IELTS-এ ভালো স্কোর করার মাধ্যমে আপনি আপনার ইংরেজি ভাষার দক্ষতা উন্নত করতে
          পারেন, শিক্ষা ও বুকিং পাবার এই সম্ভাবনা একটি ইংলিশভাষী দেশের পড়াশোনার জন্য
          দিতে খুবই জরুরি।
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-4">
          IELTS পরীক্ষার তিনটি প্রধান ধরন আছে:
        </h3>

        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>IELTS একাডেমিক</li>
          <li>IELTS জেনারেল ট্রেনিং</li>
          <li>IELTS লাইফ স্কিলস</li>
        </ul>
      </div>

      {/* -------- Feature One Section -------- */}
      <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            ১. IELTS এর ধরন: IELTS একাডেমিক
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-2">IELTS Academic</h3>
              <p className="text-sm">KEY TAKEAWAYS IN 3 SLIDES</p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full mt-4 transition-colors text-sm">
                <span className="flex items-center justify-center">Read More</span>
              </button>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
              <span className="text-sm opacity-75 mb-2">০1</span>
              <p className="font-semibold">
                The IELTS Academic test is for higher education abroad.
              </p>
            </div>
            <div className="bg-blue-400 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
              <span className="text-sm opacity-75 mb-2">০2</span>
              <p className="font-semibold">
                There are 4 modules:
                <ul className="list-disc list-inside mt-2">
                  <li>Reading</li>
                  <li>Writing</li>
                  <li>Listening</li>
                  <li>Speaking</li>
                </ul>
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            IELTS একাডেমিক মূলত তৈরি করা হয়েছে উচ্চ শিক্ষার জন্য বিদেশে যাওয়ার পরিকল্পনা করছেন
            এমন একাডেমিক পরীক্ষার্থী এটি প্রতিষ্ঠান দিয়ে পরীক্ষা করা হয়।
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            পরীক্ষার চারটি অংশ রয়েছে:
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li>রিডিং</li>
              <li>রাইটিং</li>
              <li>লিসেনিং</li>
              <li>স্পিকিং</li>
            </ul>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            প্রতিটি মডিউল একজন পরীক্ষকের দক্ষতা নির্ভর করে পরীক্ষা করা, যেমন আপনার উচ্চারণ,
            সংবেদনশীলতা, ভয়েস আচরণ এবং বাক্যের ধরন, যা ব্যবহৃত হয় এবং সেটির উপর আপনার
            মতামত গ্রহণ করে ফলগুলো।
          </p>
          <p className="text-gray-700 leading-relaxed">
            IELTS একাডেমিক পরীক্ষার্থী বিশ্ববিদ্যালয়ের ভর্তি জন্য প্রয়োজন হয়, যা আমাদের একাডেমিক
            অনুমতি এবং অন্যান্য IELTS পরীক্ষার তুলনায় কিছুটা বেশি কঠিন। আপনার উচ্চতর শিক্ষার
            বাস্তবতায়, IELTS Academic দিয়ে বিশ্ববিদ্যালয় থেকে পূর্ণাঙ্গ সুবিধা ও কোর্স নির্বাচন
            করতে সক্ষম হবেন।
          </p>
        </div>
      </div>

      {/* -------- Feature Two Section -------- */}
      <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            IELTS একাডেমিক পরীক্ষার তথ্য
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            IELTS একাডেমিক ফি এবং পরীক্ষার সময়কাল সম্পর্কে বিস্তারিত তথ্য এখানে দেখুন।
            IELTS-এর প্রতিটি ফি আলাদা হয়ে থাকে যা আপনাকে পরীক্ষার সময়সীমা এবং তার ধরন
            সম্পর্কে তথ্য প্রদান করে।
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                  <th className="py-3 px-4">বিষয়</th>
                  <th className="py-3 px-4">তথ্য</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                      {row.label}
                    </td>
                    <td className="py-3 px-4 text-gray-700 text-sm">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* -------- Feature Three Section -------- */}
      <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            ৬. আই.এল.টি.এস-এর ধরন: IELTS Life Skills ও UKVI
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-2">IELTS Life Skills</h3>
              <p className="text-sm">KEY TAKEAWAYS IN 3 SLIDES</p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full mt-4 transition-colors text-sm">
                <span className="flex items-center justify-center">Read More</span>
              </button>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
              <span className="text-sm opacity-75 mb-2">০1</span>
              <p className="font-semibold">
                IELTS Life Skills is used to acquire a visa to live with a spouse or
                relative in the UK.
              </p>
            </div>
            <div className="bg-blue-400 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
              <span className="text-sm opacity-75 mb-2">০2</span>
              <p className="font-semibold">
                It is used to settle permanently or get citizenship in the UK.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4 mt-4">
            IELTS Life Skills এবং UKVI পরীক্ষা যেসব মানুষ যুক্তরাজ্যে থেকে বা যুক্তরাজ্যে বসবাস
            করতে চায় তাদের জন্য।
          </p>

          <h3 className="text-lg font-bold text-gray-800 mb-2">
            IELTS UKVI-এর দুই ধরনের পরীক্ষা আছে:
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                  <th className="py-3 px-4">IELTS-এর ধরন</th>
                  <th className="py-3 px-4">উদ্দেশ্য</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                    IELTS for UKVI (Academic)
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    উচ্চ শিক্ষা, স্নাতক ও স্নাতকোত্তর এবং পড়াশোনার জন্য উচ্চশিক্ষা প্রতিষ্ঠানে
                    প্রবেশের জন্য
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                    IELTS for UKVI (General Training)
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    উচ্চ শিক্ষা এবং প্রশিক্ষণ গ্রহণের জন্য অথবা যারা পেশাগত প্রশিক্ষণ বা চাকরির
                    জন্য আবেদন করতে চান।
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            IELTS একাডেমিক-এর মতোই, IELTS UKVI Academic-এর বিষয়, পদ্ধতি, প্রশ্নাবলী এবং স্কোরিং
            একই। শুধুমাত্র এর ফরম্যাট IELTS UKVI একাডেমিক অনুযায়ী SELT-অনুমোদিত পরীক্ষাকেন্দ্রের
            নিয়ম মেনে চলে।
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            IELTS Life Skills পরীক্ষা শুধুমাত্র শোনার এবং কথা বলার দক্ষতা যাচাই করে। এটি একটি ৩২
            মিনিটের পরীক্ষা।
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            IELTS Life Skills পরীক্ষা দুটি মডিউলের মাধ্যমে করা হয়, তা হলো IELTS Life Skills A1 এবং
            B1।
          </p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            এখনো প্রতিটি পরীক্ষার স্তর সম্পর্কে একটু বর্ণনা দেওয়া হলো
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                  <th className="py-3 px-4">শ্রেণী বিভাগ</th>
                  <th className="py-3 px-4">প্রয়োজনীয় দক্ষতা</th>
                  <th className="py-3 px-4">কিছু উদাহরণ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                    IELTS Life Skills A1
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                      <li>- নিজের বিভিন্ন কর্মপরিচয় বর্ণনা করা</li>
                      <li>- মনোভাব ও পছন্দ প্রকাশ করা</li>
                      <li>- কিছু জিজ্ঞাসা করা</li>
                      <li>
                        - নিজের পরিচিতি সম্পর্কে কথা বলা, ক্ষমতা বা অক্ষমতা সহ।
                      </li>
                    </ul>
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    কিছুজনের সঙ্গে কথোপকথন চালিয়ে নেওয়া
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                    IELTS Life Skills A2
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                      <li>- তুলনা করা</li>
                      <li>- প্রয়োজনীয়তা প্রকাশ করা</li>
                      <li>- পরিকল্পনা করা</li>
                      <li>- পরামর্শ দেওয়া</li>
                    </ul>
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    পরিবারের বর্ণনা, রুচি, রুচি বা আগ্রহের
                  </td>
                </tr>
                <tr className="border-b border-gray-200 last:border-b-0">
                  <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                    IELTS Life Skills B1
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                      <li>- ভবিষ্যতের পরিকল্পনা আলোচনা করা</li>
                      <li>- অতীত ও বর্তমানের ঘটনা সম্পর্কে কথা বলা</li>
                      <li>- বিস্তারিত, কারণ ও যুক্তি দেওয়া</li>
                      <li>- Ask ChatGPT</li>
                    </ul>
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    সৃজনশীল বা নির্দিষ্ট স্থায়ী ভ্রমণের অনুমতি
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
