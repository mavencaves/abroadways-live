import React from "react";

interface Sample {
  name: string;
  url: string;
}

const SecondComponent: React.FC = () => {
  // Task 1 samples
  const generalTask1Samples: Sample[] = [
    { name: "IELTS Writing - General Training Sample Test 1", url: "/pdfs/sample1.pdf" },
    { name: "IELTS Writing - General Training Sample Test 2", url: "/pdfs/sample2.pdf" },
    { name: "IELTS Writing - General Training Sample Test 3", url: "/pdfs/sample3.pdf" },
    { name: "IELTS Writing - General Training Sample Test 4", url: "/pdfs/sample4.pdf" },
    { name: "IELTS Writing - General Training Sample Test 5", url: "/pdfs/sample5.pdf" },
  ];

  // Task 2 samples
  const generalTask2Samples: Sample[] = [
    { name: "Extreme Activity Pros and Cons", url: "/pdfs/extreme-activity.pdf" },
    { name: "Skill Education Debate", url: "/pdfs/skill-education.pdf" },
    { name: "Social Media Benefits and Drawbacks", url: "/pdfs/social-media.pdf" },
    { name: "Goodwill Importance", url: "/pdfs/goodwill.pdf" },
    { name: "Water Pollution Causes and Solutions", url: "/pdfs/water-pollution.pdf" },
    { name: "Science and Technology Impact", url: "/pdfs/science-tech.pdf" },
    { name: "Classroom vs Distance Education", url: "/pdfs/classroom-distance.pdf" },
    { name: "Work Life Balance Strategies", url: "/pdfs/work-life.pdf" },
  ];

  const handleDownload = (url: string, name: string): void => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="font-sans">
      {/* Feature Four - Task 1 */}
      <div className=" p-6 rounded-lg max-w-4xl mx-auto my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">৪. IELTS জেনারেল রাইটিং টাস্ক ১</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IELTS General Writing Task 1-এর জন্য সহায়ক কিছু বিনামূল্যে ডাউনলোডযোগ্য PDF রিলিজ করা হয়েছে।
          </p>
          <div className="space-y-4">
            {generalTask1Samples.map((sample, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer rounded-lg p-4 flex items-center justify-between border border-blue-200"
                onClick={() => handleDownload(sample.url, sample.name)}
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
                  <span className="text-gray-800 font-medium text-sm md:text-base">{sample.name}</span>
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

      {/* Feature Five - Task 2 */}
      <div className=" p-6 rounded-lg max-w-4xl mx-auto my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">৫. IELTS রাইটিং টাস্ক ২</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IELTS Writing Task 2-এর জন্য সহায়ক কিছু বিনামূল্যে ডাউনলোডযোগ্য PDF ফাইল এবং লেখা প্রবন্ধের তালিকা।
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {generalTask2Samples.map((sample, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer rounded-lg p-4 flex items-center justify-between border border-blue-200"
                onClick={() => handleDownload(sample.url, sample.name)}
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
                  <span className="text-gray-800 font-medium text-sm md:text-base">{sample.name}</span>
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
       <div className=" p-6 rounded-lg max-w-4xl mx-auto my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            ৬. IELTS রাইটিং টিপস এবং ট্রিকস
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            IELTS writing টেস্টে দুটি টাস্ক আছে এবং উভয়কেই সঠিকভাবে অনুশীলন
            করা জরুরি। IELTS Academic এবং General Training দুটি আলাদা উদ্দেশ্য-এর
            হলেও টিপসগুলো উভয় ধরনের পরীক্ষার জন্য প্রযোজ্য।
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
            Task 1 (Academic)-এর জন্য
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 mb-4">
            <li>বিবরণমূলক ভূমিকা অংশ, বডি, ও উপসংহারের আলোচনা দিয়ে শুরু করুন।</li>
            <li>গুরুত্বপূর্ণ তথ্যগুলো স্পষ্টভাবে চিহ্নিত করুন।</li>
            <li>
              শর্তগুলো বিশ্লেষণ: প্রতিটি বিষয় নিয়ে চিন্তা করুন, প্রধান বিষয়গুলো
              বর্ণনা করুন, এবং তাদের তুলনা করুন।
            </li>
            <li>
              নির্দিষ্ট শব্দসংখ্যা: Academic-এর জন্য ১৫০+ এবং General
              Training-এর জন্য ২৫০+ শব্দ লিখুন।
            </li>
            <li>সময় ভাগ করুন: ২০ মিনিট Task 1, ৪০ মিনিট Task 2-এর জন্য।</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
            Task 1 (General Training)-এর জন্য
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 mb-4">
            <li>নির্দিষ্ট কারণ যুক্ত করে লিখুন।</li>
            <li>IELTS writing-এর নিয়ম মেনে লিখুন।</li>
            <li>পরীক্ষার সময় এবং সময়সীমা মেনে চলুন।</li>
            <li>অধিক মূল্যবান তথ্য প্রদান করুন।</li>
            <li>অনুমান বা মতামত প্রকাশ করুন।</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
            Task 2 (Essay writing)-এর জন্য
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 mb-4">
            <li>
              মূল টপিক, প্রশ্নগুলো যত্ন সহকারে বিশ্লেষণ করুন এবং উত্তর দিন।
            </li>
            <li>
              ব্যক্তিগতভাবে মন্তব্য দেওয়ার আগে বিভিন্ন দৃষ্টিভঙ্গি উপস্থাপন
              করুন।
            </li>
            <li>নির্দিষ্টতা: ভালো ও মন্দ দিকগুলো আলোচনা করুন।</li>
            <li>ব্যাকরণ: সঠিক শব্দ এবং বাক্য বিন্যাস ব্যবহার করুন।</li>
            <li>নিয়ম: IELTS-এর সঠিক নিয়ম মেনে চলুন।</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
            সাধারণ ভুল যা এড়ানো উচিত
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            ভালো রাইটিং-এর জন্য Band Score পেতে হলে কিছু ভুল এড়ানো উচিত।
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 mb-4">
            <li>- মূল কথা থেকে সরে যাবেন না।</li>
            <li>- অপ্রাসঙ্গিক শব্দ ব্যবহার করবেন না।</li>
            <li>- বাক্যগুলো ছোট করে লিখুন।</li>
            <li>- প্রবন্ধটি ছোট করে লিখুন।</li>
            <li>- সময়ের মধ্যে সম্পন্ন করুন।</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            IELTS writing-এর সকল নিয়ম ও কৌশল মেনে চলুন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
