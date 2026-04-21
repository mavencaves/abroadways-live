// src/components/IELTSComponents.jsx
import  { useState } from "react";

// IELTS Details Component
export const SecondComponent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      {/* Speaking Test Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">৪. IELTS প্র্যাকটিস টেস্ট: স্পিকিং</h2>
      <p className="text-gray-700 mb-4">
        IELTS স্পিকিং একটি স্ব-নিয়ন্ত্রিত কথোপকথন, যা Academic এবং General Training উভয় মডিউলের জন্য ১১ থেকে ১৪ মিনিটের
        মধ্যে হয় এবং এটি তিনটি ভাগে বিভক্ত।
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">পার্ট ১ (৪-৫ মিনিট):</span> টেস্ট চেক সহ পরিচিতি নিয়ে হয়। এখানে নির্দিষ্ট বিষয় যেমন আপনার পরিবার, পড়াশোনা, কাজ এবং
        ব্যক্তিগত আগ্রহ সম্পর্কে কিছু প্রশ্ন করা হয়।
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">পার্ট ২ (৩-৪ মিনিট):</span> আপনাকে একটি কার্ড দেওয়া হবে এবং একটি বিষয় নিয়ে ১ মিনিট প্রস্তুতি সময় পাবেন, তারপর
        এক থেকে দুই মিনিটের জন্য সে সম্পর্কে আপনার ব্যক্তিগত বিষয় নিয়ে বলতে হবে।
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">পার্ট ৩ (৪-৫ মিনিট):</span> এটি পার্ট ২ থেকে আপনার বক্তব্যকে আরও বিস্তারিত ব্যাখ্যা এবং ১-এর সাধারণ বিষয় সম্পর্কিত
        প্রশ্ন করা হয়, যা আপনার পরীক্ষা নিয়ে প্রকাশ এবং আপনার ধারণার আলোচনার সুযোগ দেয়।
      </p>
      <p className="text-gray-700 mb-4">
        কথা বলা দক্ষতা, শব্দভাণ্ডার, ব্যাকরণ এবং উচ্চারণ উন্নত করা হয়। এর পাশাপাশি আপনার প্রস্তুতিকে আরও কার্যকর
        করে তোলে এবং আপনার কাঙ্খিত IELTS স্কোর অর্জন করতে সাহায্য করে।
      </p>
      <p className="text-gray-700 mb-4">
        IELTS প্র্যাকটিস খুবই গুরুত্বপূর্ণ কারণ এটি আপনাকে IELTS পরীক্ষার ফরম্যাটের মধ্যে দ্রুত অনুশীলন করতে সাহায্য করে,
        যা পরীক্ষার দিন আপনার সময় ব্যবস্থাপনা এবং আত্মবিশ্বাস বৃদ্ধি করে।
      </p>
      <a
        href="#"
        className="w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors block mb-8"
      >
        IELTS স্পিকিং প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন →
      </a>
    </div>
  );
};


const IELTSPractice = () => {
  return (
    <div className="container  max-w-4xl p-4 md:p-8 font-sans  text-gray-800">
      {/* Listening Section */}
      <div className="mb-10 p-6 md:p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">IELTS প্র্যাকটিস টেস্ট: লিসেনিং</h2>
        <p className="mb-4 leading-relaxed">IELTS Listening টেস্ট ৩০ মিনিটের হয়, যা Academic এবং General Training উভয় মডিউলের জন্য একই। এই টেস্টে আপনাকে চারটি রেকর্ডিং শুনতে হয়, যেখানে নেটিভ ইংলিশ স্পিকাররা কথা বলেন, এবং মোট ৪০টি প্রশ্নের উত্তর দিতে হয়, প্রতি রেকর্ডিংয়ে ১০টি করে প্রশ্ন থাকে।</p>
        
        <p className="mb-2 leading-relaxed">প্রতি রেকর্ডিংয়ে আপনি শুধু একবারই শুনতে পারেন, যা আপনার মনোযোগ পরীক্ষা করে:</p>
        <ul className="list-disc list-inside mb-4 ml-4 leading-relaxed">
          <li>মূল ধারণা এবং গুরুত্বপূর্ণ তথ্য শোনা।</li>
          <li>মনোভাব, মনোযোগ এবং বক্তার উদ্দেশ্য বোঝা।</li>
          <li>ধারাবাহিকতা এবং ধারণাগুলো অনুসরণ করা।</li>
        </ul>
        
        <p className="mb-2 leading-relaxed">আপনি বিভিন্ন ধরণের রেকর্ডিং শুনতে পারেন:</p>
        <ul className="list-disc list-inside mb-6 ml-4 leading-relaxed">
          <li><strong className="font-semibold">রেকর্ডিং ১:</strong> সামাজিক প্রেক্ষাপটে দুইজন মানুষের মধ্যে কথোপকথন।</li>
          <li><strong className="font-semibold">রেকর্ডিং ২:</strong> সামাজিক পরিবেশে একটি মনোলগ (যেমন, স্থানীয় ঘটনার উপর বক্তৃতা)।</li>
          <li><strong className="font-semibold">রেকর্ডিং ৩:</strong> একাডেমিক বিষয়ে একটি মনোলগ (যেমন, বিশ্ববিদ্যালয়ের লেকচার)।</li>
          <li><strong className="font-semibold">রেকর্ডিং ৪:</strong> শিক্ষামূলক পরিবেশে সরবোচ্চ চারজনের মধ্যে কথোপকথন।</li>
        </ul>
        <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
          IELTS Listening প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন। <span className="ml-2 font-bold">➔</span>
        </a>
      </div>

      <hr className="my-10 border-gray-300" />

      {/* Speaking Section */}
      <div className="p-6 md:p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">IELTS প্র্যাকটিস টেস্ট: স্পিকিং</h2>
        <p className="mb-4 leading-relaxed">IELTS স্পিকিং টেস্টটি সাধারণ কথোপকথনমূলক হয়, যা Academic এবং General Training উভয় মডিউলের জন্য ১১ থেকে ১৪ মিনিট দীর্ঘ হয় এবং এটি ৩টি ভাগে বিভক্ত।</p>
        
        <ul className="list-disc list-inside mb-4 ml-4 leading-relaxed">
          <li><strong className="font-semibold">পার্ট ১ (৪-৫ মিনিট):</strong> টেস্ট শুরু হয় পরিচিত বিষয় দিয়ে এবং দৈনন্দিন জীবন যেমন আপনার পরিবার, পড়াশোনা, কাজ এবং ব্যক্তিগত আগ্রহ সম্পর্কে কিছু প্রশ্ন দিয়ে।</li>
          <li><strong className="font-semibold">পার্ট ২ (৩-৪ মিনিট):</strong> আপনাকে একটি টাস্ক কার্ড দেওয়া হবে। একটি নির্দিষ্ট বিষয় নিয়ে ১ মিনিট প্রস্তুতি নেওয়ার সময় পাবেন, তারপর সেই বিষয় নিয়ে ১-২ মিনিট কথা বলতে হবে। পরীক্ষক অতিরিক্ত কিছু প্রশ্নও করতে পারেন।</li>
          <li><strong className="font-semibold">পার্ট ৩ (৪-৫ মিনিট):</strong> এটি হলো দুই-পার্শ্বের আলোচনার মতো। এখানে পরীক্ষক পার্ট ২-এর বিষয়ের সঙ্গে সম্পর্কিত আরও প্রশ্ন করবেন, যা আপনাকে গভীর চিন্তা প্রকাশ এবং আপনার মতামত জানানোর সুযোগ দেবে।</li>
        </ul>
        
        <p className="mb-4 leading-relaxed">নমুনা প্রশ্ন ছাড়াও বইয়ের সাহায্যে অনুশীলন করাও গুরুত্বপূর্ণ কারণ এগুলো কাঠামোবদ্ধ অনুশীলন দেয় এবং আপনার কাঙ্ক্ষিত IELTS স্কোর অর্জনে সহায়ক পরিষ্কারভাবে আলোচনা করা এবং গুরুত্বপূর্ণ কারণগুলো তুলে ধরা অত্যন্ত গুরুত্বপূর্ণ অনুশীলন এবং আপনার কাঙ্ক্ষিত IELTS স্কোর পাওয়ার সহায়ক।</p>
        
        <p className="mb-6 leading-relaxed">IELTS বইগুলো গুরুত্বপূর্ণ কারণ এগুলো হলো আসল IELTS পরীক্ষার ফরম্যাটের অনুরূপ উপকরণ সরবরাহ করে, যা পরীক্ষার দিন কী আশা করতে হবে তা বুঝতে সাহায্য করে।</p>
        
        <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
          IELTS স্পিকিং প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন। <span className="ml-2 font-bold">➔</span>
        </a>
      </div>
    </div>
  );
};

export default IELTSPractice;

// FAQ Component
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "IELTS এর দুটি প্রধান মডিউল কী কী?",
      a: "IELTS-এর দুটি প্রধান মডিউল হলো Academic এবং General Training।",
    },
    {
      q: "IELTS পরীক্ষাটি মোট কতটি অংশ নিয়ে গঠিত?",
      a: "IELTS পরীক্ষাটি মোট চারটি অংশ নিয়ে গঠিত: Reading, Writing, Listening, এবং Speaking।",
    },
    {
      q: "আমি কি স্পিকিং টেস্টের তারিখ ও সময় নিজে বেছে নিতে পারি?",
      a: "IELTS স্পিকিং টেস্ট সাধারণত লিখিত পরীক্ষার ৭ দিন আগে বা পরে অনুষ্ঠিত হয়। অনেক সময় আপনি আপনার সুবিধা মতো তারিখ ও সময় বেছে নিতে পারেন, তবে এটি কেন্দ্রের উপর নির্ভর করে।",
    },
    {
      q: "রিডিং টেস্টের সময়সীমা কত?",
      a: "IELTS রিডিং টেস্টের সময়সীমা ৬০ মিনিট।",
    },
    {
      q: "উভয় মডিউলে রাইটিং টেস্টের জন্য কত সময় দেওয়া হয়?",
      a: "IELTS রাইটিং টেস্টের জন্য উভয় মডিউলে (Academic এবং General Training) ৬০ মিনিট সময় দেওয়া হয়।",
    },
  ];

  return (
    <div className="bg-white p-4 ">
      <div className="bg-white max-w-4xl p-6 rounded-lg shadow-md  mx-auto my-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">সাধারণ প্রশ্নাবলী (FAQ)</h2>
        {faqs.map((item, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <button
              className="w-full text-left font-medium text-gray-800 focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {item.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <p className="text-gray-700 mt-2">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
