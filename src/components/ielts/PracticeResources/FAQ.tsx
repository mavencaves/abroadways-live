import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "IELTS পরীক্ষা কি অনলাইনে দেওয়া যায়?",
    answer: "হ্যাঁ, কিছু নির্দিষ্ট দেশে IELTS পরীক্ষা অনলাইনে দেওয়া যায়। তবে বাংলাদেশে এখনো এটি পুরোপুরি প্রচলিত নয়।",
  },
  {
    question: "IELTS পরীক্ষার জন্য কি নির্দিষ্ট কোনো বয়সসীমা আছে?",
    answer: "না, IELTS পরীক্ষার জন্য কোনো নির্দিষ্ট বয়সসীমা নেই। যেকোনো বয়সের ব্যক্তি এই পরীক্ষায় অংশগ্রহণ করতে পারেন।",
  },
  {
    question: "IELTS স্কোর কত দিন পর্যন্ত বৈধ থাকে?",
    answer: "IELTS স্কোর সাধারণত দুই বছর পর্যন্ত বৈধ থাকে।",
  },
  {
    question: "IELTS পরীক্ষার জন্য কি কোনো নির্দিষ্ট কোর্স করতে হয়?",
    answer: "না, নির্দিষ্ট কোনো কোর্স করতে হয় না। তবে ভালো প্রস্তুতির জন্য কোর্স করা যেতে পারে।",
  },
  {
    question: "IELTS পরীক্ষার ফি কত?",
    answer: "IELTS পরীক্ষার ফি বিভিন্ন দেশে ভিন্ন হয়। বাংলাদেশে এটি বর্তমানে প্রায় BDT ২০,০০০ টাকা।",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 p-6 md:p-8">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
        </h2>

        {/* Accordion list of FAQs */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base font-medium text-gray-800">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <FaChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 bg-white text-gray-700 text-sm md:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
