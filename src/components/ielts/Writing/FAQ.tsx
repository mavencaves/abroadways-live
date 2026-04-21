import React, { useState, type ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
      >
        <span>{title}</span>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
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
      </button>

      {isOpen && (
        <div className="overflow-hidden transition-all duration-300">
          <div className="pb-4 text-gray-600">{children}</div>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className=" p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          বেশি জিজ্ঞাসিত প্রশ্ন
        </h2>

        <AccordionItem title="IELTS স্পিকিং টেস্টে মোট কতটি অংশ থাকে?">
          <p>
            IELTS স্পিকিং টেস্টে মোট তিনটি অংশ থাকে। প্রথম অংশে পরীক্ষার্থীকে
            নিজেদের সম্পর্কে কিছু সাধারণ প্রশ্ন করা হয়, যেমন - পরিবার, শখ,
            পড়াশোনা ইত্যাদি। দ্বিতীয় অংশে একটি কিউ কার্ড দেওয়া হয়, যেখানে একটি
            নির্দিষ্ট বিষয়ের উপর ২ মিনিটের জন্য কথা বলতে হয়। তৃতীয় অংশে কিউ
            কার্ডের বিষয়ের উপর ভিত্তি করে আরও কিছু প্রশ্ন করা হয়, যা
            তুলনামূলকভাবে দীর্ঘ এবং গভীর হয়।
          </p>
        </AccordionItem>

        <AccordionItem title="IELTS স্পিকিং টেস্টের সময়সীমা কত?">
          <p>
            IELTS স্পিকিং টেস্টের সময়সীমা সাধারণত ১১ থেকে ১৪ মিনিট। এই সময়ের মধ্যে
            তিনটি অংশের পরীক্ষা সম্পন্ন হয়।
          </p>
        </AccordionItem>

        <AccordionItem title="IELTS স্পিকিং টেস্ট দেওয়ার আগে কিছু পরামর্শ কী কী?">
          <p>
            পরীক্ষার আগে কিছু গুরুত্বপূর্ণ পরামর্শ হলো: ১) স্পষ্ট এবং স্বাভাবিক
            স্বরে কথা বলুন। ২) প্রতিটি প্রশ্নের উত্তর বিস্তারিতভাবে দিন। ৩) গ্রামার
            এবং শব্দচয়ন সঠিক রাখুন। ৪) ইংরেজি ভাষায় স্বচ্ছন্দ হওয়ার জন্য নিয়মিত
            অনুশীলন করুন।
          </p>
        </AccordionItem>

        <AccordionItem title="আমি কি IELTS স্পিকিং টেস্ট রেকর্ড করতে পারি বা অনলাইন টিউটোরিয়াল ব্যবহার করতে পারি?">
          <p>
            হ্যাঁ, আপনি আপনার অনুশীলন সেশনের জন্য স্পিকিং টেস্ট রেকর্ড করতে পারেন।
            অনলাইনে অনেক টিউটোরিয়াল এবং অনুশীলন সামগ্রী পাওয়া যায় যা আপনার
            প্রস্তুতিতে সাহায্য করতে পারে।
          </p>
        </AccordionItem>

        <AccordionItem title="IELTS স্পিকিং টেস্টের সময় কি পরীক্ষককে প্রশ্নটি আবার বলার জন্য অনুরোধ করা যাবে?">
          <p>
            সাধারণত, পরীক্ষক প্রশ্নটি একবারই বলেন। তবে, যদি আপনি প্রশ্নটি বুঝতে না
            পারেন, তাহলে বিনয়ের সাথে 'Could you please repeat the question?' বলে
            আবার বলার জন্য অনুরোধ করতে পারেন।
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default FAQ;
