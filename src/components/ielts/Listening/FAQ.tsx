import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // Array of FAQ data with questions and answers
  const faqs: FAQItem[] = [
    {
      question: "IELTS লিসেনিং অনুশীলন পরীক্ষার ফরম্যাট কী?",
      answer: "IELTS লিসেনিং পরীক্ষার মোট ৪০টি প্রশ্ন থাকে এবং এটি ৪টি অংশে বিভক্ত। পরীক্ষাটি ৩০ মিনিটের জন্য হয় এবং প্রশ্নগুলোর উত্তর লেখার জন্য অতিরিক্ত ১০ মিনিট সময় দেওয়া হয়।"
    },
    {
      question: "আমি কীভাবে আমার লিসেনিং স্কিল উন্নত করতে পারি?",
      answer: "নিয়মিতভাবে ইংরেজি পডকাস্ট, অডিওবুক এবং ইংরেজি খবর শোনা অনুশীলন করুন। বিভিন্ন দেশের উচ্চারণ বোঝার জন্য বিবিসি বা সিএনএন-এর মতো চ্যানেলগুলো দেখতে পারেন।"
    },
    {
      question: "IELTS লিসেনিং-এর জন্য কি বিনামূল্যে অনলাইন রিসোর্স পাওয়া যায়?",
      answer: "হ্যাঁ, ক্যামব্রিজ ইউনিভার্সিটি প্রেসের ওয়েবসাইট, ইউটিউব চ্যানেল এবং বিভিন্ন অনলাইন প্ল্যাটফর্মে অনেক বিনামূল্যে রিসোর্স পাওয়া যায়। এছাড়াও, ব্রিটিশ কাউন্সিল এবং আইডিপি-এর ওয়েবসাইটও দেখতে পারেন।"
    },
    {
      question: "IELTS প্রস্তুতির জন্য সেরা কিছু বই কোনগুলো?",
      answer: "The Official Cambridge Guide to IELTS, Barron's IELTS Superpack, এবং Target Band 7: IELTS Listening Practice-এর মতো বইগুলো খুবই জনপ্রিয় এবং কার্যকর।"
    },
    {
      question: "IELTS লিসেনিং অনুশীলন পরীক্ষার জন্য ভালো স্কোর কত?",
      answer: "ভালো স্কোর নির্ভর করে আপনার লক্ষ্যযুক্ত ব্যান্ড স্কোরের ওপর। তবে, ৭ বা তার বেশি স্কোরকে সাধারণত ভালো স্কোর হিসেবে বিবেচনা করা হয়।"
    },
  ];

  // State to track which question is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the answer visibility
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f0f3f6] min-h-screen p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Main Title */}
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] text-center mb-6">
            শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্ন সমূহ-
          </h2>

          {/* FAQ list with expandable answers */}
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
                {/* Question section, which is clickable */}
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-sm font-medium text-gray-800 leading-relaxed pr-2">
                    {item.question}
                  </p>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5H7z"/>
                  </svg>
                </div>
                
                {/* Answer section, which is conditionally rendered */}
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
