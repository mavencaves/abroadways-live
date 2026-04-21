// @ts-nocheck
import  { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; 

function FAQPart() {
  // State to manage which accordion item is open
  // We'll use an object where keys are item IDs and values are booleans (true if open)
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prevOpenItems => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id] // Toggle the boolean for the given ID
    }));
  };

  const faqData = [
    {
      id: 'faq1',
      question: 'আপনার এই এআই কিভাবে ভিসা গ্রহণযোগ্যতা এবং IELTS প্রস্তুতিতে সাহায্য করে?',
      answer: 'উত্তরসহ, ভিসা সাফল্যের পূর্বাভাস, পার্সোনালাইজড IELTS প্রস্তুতি পরিকল্পনা এবং আপনার আবেদন প্রক্রিয়ায় সেরা প্রয়োজনীয় কাগজপত্র সম্পর্কে বিস্তারিত তথ্য।',
    },
    {
      id: 'faq2',
      question: 'এই সার্ভিস কি সব দেশের জন্য উপলব্ধ?',
      answer: 'হ্যাঁ, আমাদের সার্ভিস বিশ্বজুড়ে বিভিন্ন দেশের জন্য উপলব্ধ, তবে নির্দিষ্ট দেশের ভিসা নীতিমালার ওপর ভিত্তি করে কিছু তারতম্য থাকতে পারে। বিস্তারিত তথ্যের জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।',
    },
    {
      id: 'faq3',
      question: 'এই প্ল্যাটফর্ম কি বিনামূল্যে ব্যবহার করা যায়?',
      answer: 'আমাদের প্ল্যাটফর্মে কিছু মৌলিক ফিচার বিনামূল্যে ব্যবহার করা যায়, তবে প্রিমিয়াম ফিচার এবং আরও বিশদ বিশ্লেষণের জন্য সাবস্ক্রিপশন প্রয়োজন হতে পারে।',
    },
    {
      id: 'faq4',
      question: 'আপনি কি SOP, LOI, অথবা মোটিভেশন লেটার অফার করতে সাহায্য করেন?',
      answer: 'হ্যাঁ, আমরা SOP (Statement of Purpose), LOI (Letter of Intent), এবং মোটিভেশন লেটার প্রস্তুতকরণে সাহায্য করে থাকি, যা আপনার ভিসা আবেদনে একটি গুরুত্বপূর্ণ ভূমিকা রাখে।',
    },
    {
      id: 'faq5',
      question: 'কিভাবে আমি আমার অ্যাপ্লিকেশনের অবস্থা ট্র্যাক করতে পারবো?',
      answer: 'আমাদের প্ল্যাটফর্মে একটি ডেডিকেটেড ড্যাশবোর্ড রয়েছে যেখানে আপনি আপনার আবেদনের বর্তমান অবস্থা রিয়েল-টাইমে ট্র্যাক করতে পারবেন।',
    },
    {
      id: 'faq6',
      question: 'এই এআই কি ভিসা প্রেডিকশনের জন্য সঠিক এবং বিশ্বাসযোগ্য?',
      answer: 'আমাদের এআই মডেলটি সর্বশেষ ভিসা ডেটা এবং ইমিগ্রেশন নীতিমালার ওপর ভিত্তি করে তৈরি, যা উচ্চ মাত্রার সঠিকতা নিশ্চিত করে। তবে, ভিসা অনুমোদন চূড়ান্তভাবে ভিসা অফিসারের সিদ্ধান্তের উপর নির্ভরশীল।',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          কোন প্রশ্ন আছে? উত্তর খুঁজে নিন
        </h2>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleItem(item.id)}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.question}
                </span>
                <span className="text-blue-600 text-xl">
                  {openItems[item.id] ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {openItems[item.id] && (
                <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQPart;