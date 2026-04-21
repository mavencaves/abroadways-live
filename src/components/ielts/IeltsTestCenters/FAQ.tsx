import React, { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      q: "যদি আমি IELTS পরীক্ষার দিন অনুপস্থিত বা অসুস্থ হই, তাহলে কী হবে?",
      a: "আপনি যদি পরীক্ষার দিন অনুপস্থিত বা অসুস্থ হন, তাহলে আপনাকে যত দ্রুত সম্ভব পরীক্ষা কেন্দ্রে যোগাযোগ করতে হবে। যদি আপনি একটি বৈধ মেডিকেল সার্টিফিকেট জমা দিতে পারেন, তাহলে আপনি হয়তো অন্য একটি পরীক্ষার তারিখ পেতে পারেন বা আংশিক ফি ফেরত পেতে পারেন।",
    },
    {
      q: "আমি কোন IELTS পরীক্ষা সম্পন্ন করব?",
      a: "আপনার প্রয়োজন অনুযায়ী IELTS Academic বা General Training মডিউল বেছে নিতে পারেন। একাডেমিক মডিউল উচ্চশিক্ষা বা পেশাগত রেজিস্ট্রেশনের জন্য, আর জেনারেল ট্রেনিং মডিউল মাইগ্রেশন বা কাজের উদ্দেশ্যে ব্যবহৃত হয়।",
    },
    {
      q: "কীভাবে আমি আমার নিকটতম IELTS টেস্ট সেন্টার খুঁজে পাব?",
      a: 'IELTS IDP-এর অফিসিয়াল ওয়েবসাইট বা তাদের স্থানীয় অফিসগুলোতে গিয়ে আপনার নিকটতম টেস্ট সেন্টার খুঁজে নিতে পারেন। অনেক সময় IELTS প্রোভাইডারদের ওয়েবসাইটে একটি "Find a Test Centre" সেকশন থাকে।',
    },
    {
      q: "IELTS Speaking Test-এর জন্য আমাকে কী নিয়ে যেতে হবে?",
      a: "স্পিকিং টেস্টের জন্য আপনাকে শুধুমাত্র আপনার পরিচয়পত্র (যেমন, পাসপোর্ট) নিয়ে যেতে হবে, যা আপনি রেজিস্ট্রেশনের সময় ব্যবহার করেছেন।",
    },
    {
      q: "আমি বছরে কতবার IELTS পরীক্ষায় অংশ নিতে পারি?",
      a: "IELTS পরীক্ষা দেওয়ার জন্য কোনো নির্দিষ্ট সীমা নেই। আপনি যতবার ইচ্ছা ততবার পরীক্ষা দিতে পারেন।",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">বেশি জিজ্ঞাসিত প্রশ্ন</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-2 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center text-gray-800 font-medium">
              <span>{faq.q}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 transition-opacity duration-300 opacity-100">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
