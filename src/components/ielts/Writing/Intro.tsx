import React from "react";

// -------------------- Intro Section --------------------
const Intro1: React.FC = () => {
  return (
    <div className=" p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <span>
            <span>ডিসকভার ইউনিফর্মস</span>
            <span className="mx-1">/</span>
            <span>পরীক্ষাসমূহ</span>
            <span className="mx-1">/</span>
            <span>IELTS</span>
            <span className="mx-1">/</span>
            <span>রাইটিং</span>
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          IELTS রাইটিং অনুশীলন পরীক্ষা: নমুনা, প্রবন্ধ, টিপস
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
            আপডেট করা হয়েছে: মার্চ ২০, ২০২২, ০২:২৫
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS রাইটিং টেস্ট আপনার সমস্যাসমাধানমূলক চিন্তা এবং লেখার দক্ষতার
          মূল্যায়ণ করে। ৬০ মিনিটে নির্ধারিত অনুশীলনে এই লেখনটি আপনার ভুল
          চারিকটি-এটি আপনাকে স্পষ্টভাবে লেখাতে, মূলধন ব্যবহার এবং সঠিক শব্দচয়ন
          ব্যবহার করতে সহায়তা করে।
        </p>
        <p className="text-gray-700 leading-relaxed">
          এই পৃষ্ঠায় আপনি সকল বিষয়বস্তুর ফর্ম্যাট, চতুর্থ লেভেল, এবং IELTS
          রাইটিং ফরম্যাট নিয়ে আপনার প্রস্তুতিকে সহজ করার জন্য এই অনুশীলনটি সহ
          এবং গ্রহণযোগ্য মত লেখার পরীক্ষার সহজ হয়।
        </p>
      </div>
    </div>
  );
};

// -------------------- Feature Two --------------------
const FeatureTwo: React.FC = () => {
  return (
    <div className=" p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ১. IELTS রাইটিং বোঝা
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The IELTS writing test is a crucial part of the IELTS exam, designed to
          assess your ability to express ideas clearly and coherently in written
          English. It consists of two tasks with different formats and question
          types for the Academic and General Training versions.
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Here's a quick overview of IELTS writing tasks:
        </h3>

        {/* Task Table */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="py-3 px-4">Task</th>
                <th className="py-3 px-4">ফরম্যাট</th>
                <th className="py-3 px-4">সময়কাল</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                  Task 1 (১৫০ শব্দ)
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  নির্দিষ্ট তথ্য লেখা (একাডেমিক অথবা একটি চিঠি লেখা (জেনারেল
                  ট্রেনিং))
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">২০ মিনিট</td>
              </tr>
              <tr className="border-b border-gray-200 last:border-b-0">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                  Task 2 (২৫০ শব্দ)
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  প্রবন্ধ লেখা
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">৪০ মিনিট</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS রাইটিং ৫.০ এবং ৬.৫ ব্যান্ড স্কোর দুটি মূল মাপকাঠির ভিত্তিতে
          মূল্যায়ন করা হয়:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4 mb-4">
          <li>- টাস্ক অ্যাচিভমেন্ট</li>
          <li>- সংগতি ও আনুগত্য</li>
          <li>- শব্দভাণ্ডারের ব্যবহার</li>
          <li>- ব্যাকরণের পরিক্রমা ও যথার্থতা</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          ব্রিটিশ কাউন্সিল আপনার দুটি IELTS ব্যান্ড স্কোর ১০% অনুসরণ করে একটি
          পর্যালোচনা IELTS রাইটিং ব্যান্ড স্কোর, আপনাকে বিশ্ববিদ্যালয় ভর্তি,
          ইমিগ্রেশন বা চাকরির প্রয়োজনীয়তা পূরণের সম্ভাবনা কতটা ভালো হয়, এবং
          এই দুইটি তাস্ক ১ এবং টাস্ক ২ এর জন্য একটি ভালো স্কোর পেতে হলে IELTS-এর
          সকল নিয়ম ও কৌশল মেনে চলা জরুরি।
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">
          IELTS একাডেমিক রাইটিং টাস্ক ১
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          একাডেমিক রাইটিং টাস্ক ১-এ আপনাকে নির্দিষ্ট কোনো তথ্য বিশ্লেষণ ও বর্ণনা
          করতে বলা হয়। এটি গ্রাফ, চার্ট বা টেবিল আকারে হতে পারে। এই টাস্ক মূলত
          আপনার বিশ্লেষণমূলক দক্ষতা এবং গ্রাফভিত্তিক বিষয়বস্তু দিয়ে কোনো সিদ্ধান্ত
          সমাধান করার উপর গুরুত্ব দেয়।
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">
          IELTS জেনারেল রাইটিং টাস্ক ১
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          জেনারেল রাইটিং টাস্ক ১-এ আপনাকে একটি নির্দিষ্ট পরিস্থিতিতে ওপর ভিত্তি
          করে চিঠি লিখতে বলা হয়। চিঠিটি আনুষ্ঠানিক, আধা-আনুষ্ঠানিক অথবা সাধারণ
          আনুষ্ঠানিক টোন-এর হতে পারে। এটি তথ্য দেওয়া, কোনো সমস্যার ব্যাখ্যা করা
          বা অভিযোগ জানানো অন্তর্ভুক্ত করতে পারে।
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">
          IELTS রাইটিং টাস্ক ২
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          টাস্ক ২ একাডেমিক এবং জেনারেল ট্রেনিং উভয় ক্ষেত্রেই আপনি অন্তত ২৫০ শব্দে
          একটি নির্দিষ্ট বিষয়ে যুক্তি, মতামত বা আলোচনা উপস্থাপন করে প্রবন্ধ
          লিখবেন।
        </p>
      </div>
    </div>
  );
};

// -------------------- Feature Twos --------------------
const FeatureTwos: React.FC = () => {
  return (
    <div className=" p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ২. ফ্রি IELTS রাইটিং প্র্যাকটিস টেস্ট
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS রাইটিং অনুশীলন প্রস্তুতির মাধ্যমে নির্ভুল কাজ করা হয়। পরীক্ষার
          জন্য প্রস্তুতি নেওয়া কঠিন যদি আপনি IELTS রাইটিং এর উপর মনোযোগ দিয়ে
          অনুশীলন না করেন, কারণ এটি আপনার পরীক্ষার ফরম্যাট, সময়সীমা বুঝতে সাহায্য
          করে এবং আপনার লেখার দক্ষতা উন্নত করে।
        </p>
        <p className="text-gray-700 leading-relaxed">
          এখন চলুন, পরবর্তী সেকশনে উত্তর দেওয়া হলো কি ফ্রি IELTS রাইটিং টেস্ট এবং
          উদাহরণ দেওয়া আছে, যা আপনার পরীক্ষার দিনও অনুমতিযুক্ত করা হয়।
        </p>
      </div>
    </div>
  );
};

// -------------------- Feature Three --------------------
type SampleName = string;

const FeatureThree: React.FC = () => {
  const samples: SampleName[] = [
    "IELTS Writing - General Training Sample Test 1",
    "IELTS Writing - General Training Sample Test 2",
    "IELTS Writing - General Training Sample Test 3",
    "IELTS Writing - General Training Sample Test 4",
    "IELTS Writing - General Training Sample Test 5",
  ];

  const handleDownload = (sampleName: SampleName) => {
    // Placeholder for download logic
    console.log(`Downloading ${sampleName}...`);
  };

  return (
    <div className=" p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ৩. IELTS জেনারেল রাইটিং টাস্ক ১
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          IELTS General Writing Task 1-এর জন্য সহায়ক কিছু বিনামূল্যে ডাউনলোডযোগ্য
          PDF রিলিজ করা হয়েছে।
        </p>

        <div className="space-y-4">
          {samples.map((sample, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer rounded-lg p-4 flex items-center justify-between border border-blue-200"
              onClick={() => handleDownload(sample)}
            >
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-md mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="17" x2="12" y2="10"></line>
                    <polyline points="9 14 12 17 15 14"></polyline>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-sm md:text-base">
                  {sample}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-blue-600 transition-colors"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// -------------------- Main Page Component --------------------
const Intro: React.FC = () => {
  return (
    <div>
      <Intro1 />
      <FeatureTwo />
      <FeatureTwos />
      <FeatureThree />
    </div>
  );
};

export default Intro;
