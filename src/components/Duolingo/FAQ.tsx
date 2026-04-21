import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "২০২৪-২০২৫ সালে IELTS ফি কি বৃদ্ধি পেয়েছে?",
      answer:
        "IELTS ফি প্রতি বছর পরিবর্তিত হয়। ২০২৩ সালের তুলনায় ২০২৪-২০২৫ সালে ফি সামান্য বৃদ্ধি পেয়েছে। সবচেয়ে সঠিক এবং আপডেটেড তথ্যের জন্য, অফিসিয়াল ব্রিটিশ কাউন্সিল অথবা IDP ওয়েবসাইট চেক করা উচিত।",
    },
    {
      question: "প্রত্যেকবার IELTS পরীক্ষার জন্য কি কি দিতে হয়?",
      answer:
        "IELTS পরীক্ষার জন্য আপনাকে পরীক্ষার ফি, রেজিস্ট্রেশন ফি এবং প্রয়োজনীয় ডকুমেন্টের খরচ বহন করতে হয়। এছাড়া, আপনার যাতায়াত এবং অন্যান্য আনুসঙ্গিক খরচও যুক্ত হতে পারে।",
    },
    {
      question: "IELTS পরীক্ষার ফি এত বেশি কেন?",
      answer:
        "IELTS পরীক্ষার ফি বেশি হওয়ার কারণ হলো এটি একটি আন্তর্জাতিকভাবে স্বীকৃত পরীক্ষা। এর সাথে যুক্ত থাকে পরীক্ষার মান নিয়ন্ত্রণ, প্রশ্নপত্রের নিরাপত্তা, এবং বিশ্বজুড়ে বিভিন্ন কেন্দ্রে সুষ্ঠুভাবে পরীক্ষা আয়োজনের খরচ।",
    },
    {
      question: "IELTS স্কলারশিপের জন্য কি কি যোগ্যতা বা শর্ত রয়েছে?",
      answer:
        "IELTS স্কলারশিপের জন্য সাধারণত ভালো একাডেমিক ফলাফল এবং উচ্চ IELTS ব্যান্ড স্কোর প্রয়োজন হয়। কিছু ক্ষেত্রে, আপনাকে একটি ব্যক্তিগত বিবৃতি বা অন্যান্য প্রাসঙ্গিক নথি জমা দিতে হতে পারে। প্রতিটি স্কলারশিপের নিজস্ব যোগ্যতা শর্তাবলী থাকে।",
    },
    {
      question: "আমি কি IELTS পরীক্ষার ফি ক্যাশে দিতে পারি?",
      answer:
        "হ্যাঁ, আপনি সরাসরি ব্রিটিশ কাউন্সিল বা IDP সেন্টারে গিয়ে পরীক্ষার ফি ক্যাশে প্রদান করতে পারেন। তবে, অনলাইন পেমেন্ট পদ্ধতিও খুবই প্রচলিত এবং সুবিধাজনক।",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans bg-white shadow-xl pt-10">
      <div className="text-xl md:text-2xl font-bold text-gray-800">
        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            বেশি জিজ্ঞাসিত প্রশ্ন
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 transform ${
                      openIndex === index ? "-rotate-180" : "rotate-0"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 text-gray-600 bg-gray-50 border-t border-gray-200">
                    {faq.answer}
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
