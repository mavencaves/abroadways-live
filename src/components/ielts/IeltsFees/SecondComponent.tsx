import  { useState } from 'react';

// -------------------- IeltsPayment --------------------
const IeltsPayment = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          ৩. বাংলাদেশে ২০২৪-২০২৫ সালের IELTS পরীক্ষার ফি প্রদানের পদ্ধতি
        </h2>
        <p className="text-gray-600 mb-4">
          ফলাফলের পুনঃমূল্যায়ন বা EOR (Enquiry on Results) অনলাইন আবেদন করুন।
        </p>
        <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 text-sm mb-6">
          <p>IELTS-র ফলাফল পুনঃমূল্যায়নের জন্য Enquiry on Results (EOR)-এর জন্য ফি প্রদান করুন।</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto px-5">
        <table className="min-w-full border border-gray-800 divide-y divide-gray-800">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/2 px-4 py-3 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider border-r border-gray-800">
                পরীক্ষার ধরন
              </th>
              <th className="w-1/2 px-4 py-3 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider">
                EOR ফি
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-800">
            <tr>
              <td className="px-4 py-4 text-sm text-gray-800 border-r border-gray-800">কম্পিউটার-ভিত্তিক IELTS</td>
              <td className="px-4 py-4 text-sm text-gray-800">৳ 5,500 টাকা</td>
            </tr>
            <tr>
              <td className="px-4 py-4 text-sm text-gray-800 border-r border-gray-800">কলম-ভিত্তিক IELTS</td>
              <td className="px-4 py-4 text-sm text-gray-800">৳ 5,500 টাকা</td>
            </tr>
            <tr>
              <td className="px-4 py-4 text-sm text-gray-800 border-r border-gray-800">UKVI IELTS</td>
              <td className="px-4 py-4 text-sm text-gray-800">৳ 14,000 - ৳20,000 টাকা</td>
            </tr>
            <tr>
              <td className="px-4 py-4 text-sm text-gray-800 border-r border-gray-800">IELTS Life Skills</td>
              <td className="px-4 py-4 text-sm text-gray-800">৳ 4,500 টাকা</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Description Section */}
      <div className="p-4 md:p-6 text-gray-600">
        <p className="mb-4">
          যারা তাদের IELTS ফলাফল পুনরায় যাচাই করতে চান তাদের উদ্দেশ্য সফলতার জন্য, তবে পুনঃমূল্যায়নের জন্য আবেদন করতে পারেন। এই প্রক্রিয়া শুরু করার জন্য, IELTS পরীক্ষার ফি জমা দিতে হয়। এই টাকাটা হয় Inquiry on Results Form (EOR ফর্ম) জমা দিতে হয়। পরীক্ষার্থীরা তাদের IELTS পরীক্ষার একটি বা একাধিক অংশ পুনঃমূল্যায়নের জন্য আবেদন করতে পারেন।
        </p>

        <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 text-sm my-6">
          <h4 className="font-semibold text-gray-800 mb-2">নোট:</h4>
          <ul className="list-decimal list-inside space-y-1">
            <li>পরীক্ষার্থীর স্কোর যদি পুনঃমূল্যায়নের পরে উন্নত হয়, তাহলে সম্পূর্ণ ফি ফেরত দেওয়া হবে।</li>
            <li>ফি প্রদানের পদ্ধতি IDP ওয়েবসাইটে এবং ব্রিটিশ কাউন্সিল থেকে সম্পর্কিত এবং প্রমাণ করে।</li>
          </ul>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="space-y-4 p-4 md:p-6 border-t border-gray-200">
        <div className="border border-gray-200 rounded-lg">
          <button
            type="button"
            className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800"
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <span>অনলাইন পেমেন্ট পদ্ধতি</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isOpen1 ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {isOpen1 && <div className="px-4 py-3 text-gray-600 bg-gray-50">অনলাইন পেমেন্টের বিস্তারিত এখানে থাকবে।</div>}
        </div>

        <div className="border border-gray-200 rounded-lg">
          <button
            type="button"
            className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800"
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <span>অফলাইন পেমেন্ট পদ্ধতি</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isOpen2 ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {isOpen2 && <div className="px-4 py-3 text-gray-600 bg-gray-50">অফলাইন পেমেন্টের বিস্তারিত এখানে থাকবে।</div>}
        </div>
      </div>
    </div>
  );
};

// -------------------- IeltsCancellationFees --------------------
const IeltsCancellationFees = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">৪. আইএলটিএস বাতিল ফি ২০২৩</h2>
        <p className="text-gray-600 mb-4">
          আপনি আপনার আইএলটিএস পরীক্ষা নির্ধারিত তারিখের আগেই বাতিল করতে পারেন। লগইন করে বাতিলের জন্য আবেদন করতে পারেন।
        </p>
        <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 text-sm mb-6">
          <p className="font-semibold text-gray-800 mb-2">এই কয়েকটি আইএলটিএস পরীক্ষা বাতিলকরণ সহজ করে তোলে:</p>
          <p>ফি আইএলটিএস পরীক্ষা বাতিল করার সময় জানা জরুরি নীতিমালাগুলো হলো:</p>
        </div>
      </div>

      {/* Policies */}
      <div className="p-6 bg-white space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">IELTS পরীক্ষা বাতিলের নীতিমালা</h1>
        <div className="space-y-4">
          {[ 
            {title: "অনলাইন থেকে আপনার পরীক্ষা বাতিল করুন", text: "আপনি IELTS অ্যাকাউন্টে লগইন করে আপনার পরীক্ষা বাতিল করতে পারবেন।"},
            {title: "৫ সপ্তাহ আগে বাতিল করা", text: "পূর্ণ মূল্য ফেরত পাবেন, তবে ২৫% প্রশাসনিক খরচ কাটা হবে।"},
            {title: "৫ সপ্তাহের কম সময়ে বাতিল", text: "৫ সপ্তাহের কম সময়ে বাতিল করলে সম্পূর্ণ ফি ফেরত পাবেন না।"},
            {title: "অ্যাবসেনট/মিস করার কারণে", text: "পরীক্ষার দিনে উপস্থিত না থাকলে ফি ফেরত দেওয়া হবে না।"},
            {title: "মেডিকেল জরুরি অবস্থা", text: "চিকিৎসার কারণে বৈধ সার্টিফিকেট দিলে সম্পূর্ণ টাকা ফেরত দেওয়া হবে।"}
          ].map((item, idx) => (
            <div key={idx} className="border border-gray-400 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-1">{item.title}</h2>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fees by exam type */}
      <div className="p-4 md:p-6 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">বিভিন্ন ধরনের IELTS পরীক্ষার বাতিলকরণ ফি:</h3>
        <div className="space-y-4">
          {["IELTS কাগজ-ভিত্তিক পরীক্ষা","IELTS কম্পিউটার-ভিত্তিক পরীক্ষা","IELTS লাইফ স্কিলস","IELTS for UKVI","IELTS One Skill Retake"].map((title, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-800">{title}</span>
              <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">+</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// -------------------- IeltsResources --------------------
const IeltsResources = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য</h2>
        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {[ 
                ["IELTS পরীক্ষা","IELTS পরীক্ষার তারিখ","IELTS পরীক্ষার ফি"],
                ["IELTS প্রস্তুতি","IELTS লেখার অনুশীলন পরীক্ষা","IELTS কথা বলার অনুশীলন পরীক্ষা"],
                ["IELTS পড়ার অনুশীলন পরীক্ষা","IELTS শ্রবণের অনুশীলন পরীক্ষা","IELTS পরীক্ষার কেন্দ্র"],
                ["IELTS ফলাফল","IELTS-এর স্কোর","IELTS প্যাটার্ন"],
                ["IELTS পরীক্ষার ব্যাপারে","IELTS বুকিং","IELTS ব্যান্ড স্কোর"],
                ["IELTS রেজিস্ট্রেশন","IELTS ফি","IELTS প্রস্তুতি"]
              ].map((row, idx) => (
                <tr key={idx} className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-400">
                  {row.map((col, i) => (
                    <td key={i} className="w-full sm:w-1/3 p-4">
                      <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600">
                        <span>{col}</span>
                        <span>&rarr;</span>
                      </a>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// -------------------- Main Page --------------------
const SecondComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans space-y-10">
      <IeltsPayment />
      <IeltsCancellationFees />
      <IeltsResources />
    </div>
  );
};

export default SecondComponent;
