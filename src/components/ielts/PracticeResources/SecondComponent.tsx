

// -------- FeatureThree --------
const FeatureThree = () => {
  const pdfs = [
    { name: "IELTS Practice Test (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "IELTS Listening Test (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "IELTS Reading Test (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "IELTS Writing Test (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "IELTS Speaking Test (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "IELTS Grammar Test (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "IELTS Vocabulary Test (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "IELTS Test Sample (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "IELTS Mock Test (PDF)", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          ৩. কি কি আইএলটিএস প্র্যাকটিস পিডিএফ পাওয়া যায়?
        </h2>
        <p className="text-gray-600 mb-4">
          এই পিডিএফগুলো মূলত পরীক্ষার কাঠামো এবং ফরম্যাট বোঝার জন্য খুবই গুরুত্বপূর্ণ। তাই এগুলো নিয়মিত অনুশীলন করলে আপনার প্রস্তুতি আরও ভালোভাবে নিতে পারবেন।
        </p>
        <p className="text-gray-600 mb-6">
          নীচে, আমরা কিছু গুরুত্বপূর্ণ IELTS অনুশীলন পিডিএফের একটি তালিকা তৈরি করেছি।
        </p>

        <div className="space-y-4">
          {pdfs.map((pdf, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-xl text-blue-600 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                  <path d="M12 11H8v2h4v2H8v2h4l4-4-4-4z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                  {pdf.name}
                </span>
              </div>
              <a
                href={pdf.url}
                download
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-lg text-blue-600 cursor-pointer hover:text-blue-800 transition-colors h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// -------- FeatureFour --------
const FeatureFour = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            ৪. IELTS Writing Task-1 রিপোর্ট
          </h2>
          <p className="text-gray-600 mb-4">
            IELTS Academic Writing Task 1-এ, আপনাকে একটি গ্রাফ, চার্ট, ম্যাপ বা ডায়াগ্রামের তথ্য বর্ণনা করতে বলা হয়। এর জন্য, আপনার প্রশ্ন অনুযায়ী একটি সঠিক উত্তর দেওয়ার দক্ষতা থাকতে হবে।
          </p>
        </div>
        
        <div className="overflow-x-auto border-t border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  লেখার ধরন
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  মূল কাজ
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  গুরুত্বপূর্ণ টিপস
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="p-4 whitespace-nowrap text-sm text-gray-800">লাইন গ্রাফ রাইটিং</td>
                <td className="p-4 text-sm text-gray-600">ডেটা পরিবর্তন, প্রবণতা এবং সময়ের সাথে তথ্যের সম্পর্ক বিশ্লেষণ করা।</td>
                <td className="p-4 text-sm text-gray-600">IELTS Writing Task 1-এর জন্য ৫ থেকে ৬টি বাক্য লিখুন।</td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm text-gray-800">বার চার্ট রাইটিং</td>
                <td className="p-4 text-sm text-gray-600">বিভিন্ন ডেটা সেটগুলির মধ্যে তুলনা, বৈসাদৃশ্য এবং সম্পর্ক বর্ণনা করা।</td>
                <td className="p-4 text-sm text-gray-600">IELTS Writing Task 1-এর জন্য ৫ থেকে ৬টি বাক্য লিখুন।</td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm text-gray-800">পাই চার্ট রাইটিং</td>
                <td className="p-4 text-sm text-gray-600">কোনো পুরো জিনিসের অংশগুলির মধ্যে সম্পর্ক এবং তুলনা করা।</td>
                <td className="p-4 text-sm text-gray-600">IELTS Writing Task 1-এর জন্য ৫ থেকে ৬টি বাক্য লিখুন।</td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm text-gray-800">টেবিল রাইটিং</td>
                <td className="p-4 text-sm text-gray-600">নির্দিষ্ট ডেটার মধ্যে তুলনা এবং বৈসাদৃশ্য দেখানো।</td>
                <td className="p-4 text-sm text-gray-600">IELTS Writing Task 1-এর জন্য ৫ থেকে ৬টি বাক্য লিখুন।</td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm text-gray-800">ম্যাপ রাইটিং</td>
                <td className="p-4 text-sm text-gray-600">নির্দিষ্ট স্থানের পরিবর্তন বা ভিন্নতা বর্ণনা করা।</td>
                <td className="p-4 text-sm text-gray-600">IELTS Writing Task 1-এর জন্য ৫ থেকে ৬টি বাক্য লিখুন।</td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm text-gray-800">প্রসেস ডায়াগ্রাম রাইটিং</td>
                <td className="p-4 text-sm text-gray-600">কোনো প্রক্রিয়া বা ধাপগুলি বর্ণনা করা।</td>
                <td className="p-4 text-sm text-gray-600">IELTS Writing Task 1-এর জন্য ৫ থেকে ৬টি বাক্য লিখুন।</td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm text-gray-800">কম্বাইন্ড চার্ট রাইটিং</td>
                <td className="p-4 text-sm text-gray-600">দুটি ভিন্ন ধরনের ডেটার মধ্যে সম্পর্ক ও তুলনা করা।</td>
                <td className="p-4 text-sm text-gray-600">IELTS Writing Task 1-এর জন্য ৫ থেকে ৬টি বাক্য লিখুন।</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// -------- FeatureFive --------
const FeatureFive = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          ৫. IELTS Writing Task 2 টিপস: লেখার নিয়মাবলী
        </h2>

        <p className="text-gray-600 mb-6">
          IELTS Academic Writing Task 2-এ, আপনাকে একটি নির্দিষ্ট বিষয়ে প্রবন্ধ বা একটি দীর্ঘ লেখার অংশ লিখতে বলা হয়। এটি মূলত আপনার লেখার দক্ষতা এবং যুক্তি দিয়ে একটি বিষয়কে সাজানোর ক্ষমতা পরীক্ষা করে।
        </p>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ১. প্রশ্নের বিষয় ও প্রশ্নের মূল পয়েন্ট বুঝুন
            </h3>
            <p>প্রশ্নটি ভালোভাবে পড়ে এর মূল বিষয় কী এবং কী ধরনের মতামত চাওয়া হয়েছে তা পরিষ্কারভাবে বুঝুন।</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ২. একটি সুস্পষ্ট রূপরেখা তৈরি করুন
            </h3>
            <p>লেখা শুরু করার আগে একটি রূপরেখা তৈরি করে নিন। এটি আপনাকে লেখার কাঠামো ঠিক রাখতে সাহায্য করবে।</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ৩. শক্তিশালী ভূমিকা লিখুন
            </h3>
            <p>ভূমিকাটি এমনভাবে লিখুন যেন এটি প্রশ্নের মূল বিষয় তুলে ধরে এবং আপনার মতামত স্পষ্টভাবে প্রকাশ করে।</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ৪. প্যারাগ্রাফে বিস্তারিত আলোচনা করুন
            </h3>
            <p>আপনার মূল যুক্তিগুলো প্রতিটি প্যারাগ্রাফে বিস্তারিতভাবে আলোচনা করুন। প্রতিটি প্যারাগ্রাফে একটি করে প্রধান ধারণা রাখুন।</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ৫. উপযুক্ত উদাহরণ ব্যবহার করুন
            </h3>
            <p>আপনার যুক্তিগুলোকে সমর্থন করার জন্য বাস্তব জীবনের উদাহরণ বা তথ্য ব্যবহার করুন।</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ৬. শব্দ এবং ব্যাকরণ (Grammar) সঠিকভাবে ব্যবহার করুন
            </h3>
            <p>আপনার লেখাটি নির্ভুল রাখতে শব্দ এবং ব্যাকরণের সঠিক ব্যবহার নিশ্চিত করুন।</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ৭. উপসংহার লিখুন
            </h3>
            <p>সবশেষে, একটি সুস্পষ্ট এবং সংক্ষিপ্ত উপসংহার লিখুন যেখানে আপনার মূল পয়েন্টগুলো পুনরায় তুলে ধরা হবে।</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ৮. সময় ব্যবস্থাপনা
            </h3>
            <p>২০ মিনিটে Writing Task 1 এবং ৪০ মিনিটে Writing Task 2 শেষ করার চেষ্টা করুন।</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------- FeatureSix --------
const FeatureSix = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          ৬. IELTS পরীক্ষার প্রস্তুতি: গুরুত্বপূর্ণ টিপস ও পরামর্শ
        </h2>

        <p className="text-gray-600 mb-6">
          IELTS পরীক্ষায় ভালো স্কোর করার জন্য সঠিক পরিকল্পনা এবং কিছু কৌশল জানা জরুরি। নিচে কিছু গুরুত্বপূর্ণ টিপস ও পরামর্শ দেওয়া হলো:
        </p>

        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <strong className="text-gray-800">সময় ব্যবস্থাপনা:</strong> পরীক্ষার চারটি অংশের জন্য নির্দিষ্ট সময় বরাদ্দ করুন এবং সেই অনুযায়ী অনুশীলন করুন।
          </li>
          <li>
            <strong className="text-gray-800">নিয়মিত অনুশীলন:</strong> প্রতিদিন IELTS এর অন্তত একটি অংশে মনোযোগ দিন এবং নমুনা পরীক্ষাগুলো সমাধান করুন।
          </li>
          <li>
            <strong className="text-gray-800">শুনুন এবং পড়ুন:</strong> ইংরেজি সংবাদপত্র, ম্যাগাজিন, ব্লগ ও আর্টিকেল পড়ুন এবং ইংরেজি পডকাস্ট, রেডিও বা ইউটিউব চ্যানেল শুনুন।
          </li>
          <li>
            <strong className="text-gray-800">শব্দভান্ডার বৃদ্ধি:</strong> প্রতিদিন নতুন নতুন শব্দ শিখুন এবং সেগুলো লেখার ও বলার সময় ব্যবহার করার চেষ্টা করুন।
          </li>
          <li>
            <strong className="text-gray-800">ব্যাকরণ (Grammar):</strong> লেখার ও বলার সময় ব্যাকরণের সঠিক ব্যবহার নিশ্চিত করুন।
          </li>
          <li>
            <strong className="text-gray-800">Writing ও Speaking অনুশীলন:</strong> নিয়মিত Writing ও Speaking এর জন্য অনুশীলন করুন।
          </li>
          <li>
            <strong className="text-gray-800">সঠিক ঘুম ও খাবার:</strong> পরীক্ষার আগে পর্যাপ্ত ঘুম নিশ্চিত করুন এবং পুষ্টিকর খাবার গ্রহণ করুন।
          </li>
        </ul>
      </div>
    </div>
  );
};

// এক্সপোর্ট একসাথে
export { FeatureThree, FeatureFour, FeatureFive, FeatureSix };
