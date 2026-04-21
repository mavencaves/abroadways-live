import React, { useState, type ReactNode,  } from 'react';

// Props interface for FAQCard
interface FAQCardProps {
  question: string;
  children: ReactNode;
}

// Reusable card component for FAQ style sections
const FAQCard: React.FC<FAQCardProps> = ({ question, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4 overflow-hidden">
      <div
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isExpanded && (
        <div className="p-4 border-t border-gray-200 text-gray-700 text-sm">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">বেশি জিজ্ঞাসিত প্রশ্ন</h2>

        <FAQCard question="IELTS-এর কত ধরনের পরীক্ষা আছে?">
          <p>IELTS-এর তিনটি প্রধান ধরনের পরীক্ষা আছে: IELTS Academic, IELTS General Training, এবং IELTS Life Skills.</p>
        </FAQCard>

        <FAQCard question="IELTS পরীক্ষা দেওয়ার জন্য কি কোনো বয়সসীমা আছে?">
          <p>
            IELTS পরীক্ষা দেওয়ার জন্য কোনো নির্দিষ্ট বয়সসীমা নেই, তবে ১৬ বছর বা তার কম বয়সী শিক্ষার্থীদের জন্য
            পরামর্শ দেওয়া হয় যে একজন পরীক্ষকের সঙ্গে কথা বলে নিতে, এবং একজন শিক্ষকের সহায়তায় পরীক্ষা দেওয়া উচিত।
          </p>
        </FAQCard>

        <FAQCard question="IELTS পরীক্ষার কোন ধরনটি সবচেয়ে সহজ?">
          <p>
            IELTS General Training পরীক্ষা IELTS Academic-এর চেয়ে কিছুটা সহজ। কারণ এটি সাধারণ জীবনের বিষয়গুলোর
            উপর ভিত্তি করে করা হয়, কিন্তু কঠিনতা নির্ভর করে আপনার ইংরেজি দক্ষতার উপর।
          </p>
        </FAQCard>

        <FAQCard question="IELTS স্কোর কতদিন পর্যন্ত বৈধ থাকে?">
          <p>IELTS স্কোর সাধারণত দুই বছর পর্যন্ত বৈধ থাকে।</p>
        </FAQCard>

        <FAQCard question="পরবর্তী IELTS পরীক্ষা কখন হবে?">
          <p>
            ব্রিটিশ কাউন্সিল অথবা আইডিপি (IDP)-এর অফিসিয়াল ওয়েবসাইট থেকে IELTS পরীক্ষার পরবর্তী তারিখ ও তথ্য জানতে পারবেন।
          </p>
        </FAQCard>
      </div>
    </div>
  );
};

export default FAQ;
