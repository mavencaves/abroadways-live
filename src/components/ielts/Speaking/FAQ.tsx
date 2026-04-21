import {useState} from "react";

interface FAQCardProps {
  question: string;
  children: React.ReactNode;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className=" rounded-lg shadow-sm border  mb-4 overflow-hidden">
      <div
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
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
      {isExpanded && <div className="p-4 border-t border-gray-200 text-gray-700 text-sm">{children}</div>}
    </div>
  );
};

// ---------- FAQ Section ----------
const FAQ = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">বেশি জিজ্ঞাসিত প্রশ্ন</h2>

      <FAQCard question="IELTS স্পিকিং টেস্টটি নোট করতে থাকে?">
        <p>
          IELTS স্পিকিং টেস্টে পরীক্ষক আপনার উত্তরগুলো নোট করেন, যাতে আপনার পরীক্ষা মূল্যায়ন করা সহজ হয়। নোট করা হয় এমন মূল বিষয়গুলো হলো: আপনার উচ্চারণ, ভাষার ব্যবহার, শব্দের জ্ঞান, এবং বাক্যের গঠন।
        </p>
      </FAQCard>

      <FAQCard question="IELTS স্পিকিং টেস্টটি সংরক্ষণ করা হয়?">
        <p>
          হ্যাঁ, IELTS স্পিকিং টেস্টটি অডিও বা ভিডিও রেকর্ডিং করা হয়। এটি নিশ্চিত করে যে আপনার পরীক্ষার ফলাফল নিরপেক্ষ এবং সঠিক।
        </p>
      </FAQCard>

      <FAQCard question="IELTS স্পিকিং টেস্ট দেওয়ার আগে কিছু করার আছে কী কী?">
        <div>
          <p>পরীক্ষার আগে, আপনাকে নিম্নলিখিত জিনিসগুলো করতে হবে:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>পর্যাপ্ত ঘুম নিশ্চিত করা।</li>
            <li>ইংরেজি অনুশীলন করা।</li>
            <li>প্রশ্নের উত্তর দেওয়ার জন্য সময় নিতে হবে।</li>
            <li>মনোযোগ সহকারে কথা বলতে হবে।</li>
          </ul>
        </div>
      </FAQCard>

      <FAQCard question="আমি কি IELTS স্পিকিং টেস্টে বই থেকে বা অনলাইন রিসোর্স ব্যবহার করতে পারি?">
        <p>না, আপনি IELTS স্পিকিং টেস্টে কোনো বই বা অনলাইন রিসোর্স ব্যবহার করতে পারবেন না।</p>
      </FAQCard>

      <FAQCard question="IELTS স্পিকিং টেস্টে কি পরীক্ষক প্রশ্নটি আবার বলার জন্য অনুরোধ করা যাবে?">
        <p>আপনি পরীক্ষককে প্রশ্নটি আবার বলার জন্য অনুরোধ করতে পারবেন, তবে এটি আপনার ফলাফলকে প্রভাবিত করতে পারে।</p>
      </FAQCard>
    </div>
  );
};

export default FAQ;
