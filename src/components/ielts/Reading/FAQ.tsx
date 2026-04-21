import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // Array of FAQ data with questions and answers
  const faqs: FAQItem[] = [
    {
      question: "আমি কীভাবে IELTS পড়ার জন্য অনুশীলন করতে পারি?",
      answer:
        "নিয়মিতভাবে বিভিন্ন ইংরেজি আর্টিকেল, বই, এবং সংবাদপত্র পড়ুন। ইংরেজি ওয়েবসাইট ও ম্যাগাজিন থেকে পড়া অনুশীলন করতে পারেন।",
    },
    {
      question: "IELTS পড়ায় কীভাবে ৮.৫ মার্কস পাবো?",
      answer:
        "৮.৫ মার্কস পাওয়ার জন্য, আপনাকে রিডিং সেকশনের ৪০টি প্রশ্নের মধ্যে অন্তত ৩৮-৩৯টি সঠিক উত্তর দিতে হবে। স্ক্যানিং, স্কিমিং এবং জটিল শব্দভান্ডার বোঝার দক্ষতা বাড়াতে হবে।",
    },
    {
      question: "IELTS রিডিংয়ে ৪০-এর মধ্যে ২৩ মানে কী?",
      answer:
        "IELTS রিডিংয়ে ৪০-এর মধ্যে ২৩ স্কোর সাধারণত ৬.০ বা ৬.৫ ব্যান্ড স্কোরের সমতুল্য। এটি একটি ভালো স্কোর, তবে উচ্চতর স্কোরের জন্য আরও অনুশীলনের প্রয়োজন।",
    },
    {
      question: "IELTS রিডিং কি কঠিন?",
      answer:
        "এটি নির্ভর করে আপনার বর্তমান ইংরেজি পড়ার দক্ষতার ওপর। তবে, নিয়মিত অনুশীলন এবং সঠিক কৌশল অনুসরণ করলে এটি কঠিন মনে হবে না।",
    },
    {
      question: "আমি কীভাবে আমার IELTS রিডিং উন্নত করতে পারি?",
      answer:
        "নিয়মিতভাবে রিডিং অনুশীলন পরীক্ষা দিন, প্রতিটি প্রশ্নের জন্য একটি কৌশল তৈরি করুন, এবং আপনার ভুলের কারণ বিশ্লেষণ করুন। এতে আপনার দুর্বলতাগুলো চিহ্নিত হবে এবং আপনি সেগুলো নিয়ে কাজ করতে পারবেন।",
    },
  ];

  // State to track which question is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the answer visibility
  const handleToggle = (index: number) => {
    // If the same question is clicked again, close it. Otherwise, open the new one.
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
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
              >
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
                    className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
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
