import React, { useState } from "react";

// ========== Resource Card ==========
interface ResourceCardProps {
  number: string;
}
const ResourceCard: React.FC<ResourceCardProps> = ({ number }) => (
  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span className="font-semibold text-gray-800">
        IELTS Speaking PDF {number}
      </span>
    </div>
    <a
      href="#"
      className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    </a>
  </div>
);

// ========== Sample Topic Card ==========
interface SampleTopicCardProps {
  title: string;
}
const SampleTopicCard: React.FC<SampleTopicCardProps> = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-blue-500 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-700">
          <p>এখানে নমুনা উত্তরটি যোগ করা যেতে পারে।</p>
        </div>
      )}
    </div>
  );
};

// ========== Instruction Card ==========
interface InstructionCardProps {
  title: string;
  instructions: string;
  content?: string[];
}
const InstructionCard: React.FC<InstructionCardProps> = ({
  title,
  instructions,
  content,
}) => (
  <div className="bg-blue-50 p-4 rounded-lg mb-4">
    {title && <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>}
    <p className="text-sm text-gray-700">{instructions}</p>
    {content && (
      <ul className="list-disc pl-6 text-sm text-gray-700 mt-2 space-y-1">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

// ========== Answer Section ==========
interface AnswerSectionProps {
  title: string;
  content: string[];
}
const AnswerSection: React.FC<AnswerSectionProps> = ({ title, content }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// ========== Main Page ==========
const Intro: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 font-sans space-y-8">
      {/* Intro */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 text-sm text-gray-500">
          <p>আইইএলটিএস পরীক্ষা, প্রস্তুতি, কেন্দ্র এবং ফল</p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          IELTS স্পিকিং অনুশীলন পরীক্ষা
        </h2>
        <div className="flex items-center text-gray-500 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="mr-4">১ মিনিট রিডিং</span>
        </div>
        <p className="text-gray-700 mb-6">
          IELTS পরীক্ষা যে কোনো ধরনের হোক, আপনাকে অবশ্যই একজন ভালো ইংরেজী
          ভাষাভাষীর মতো কথা বলা, বোঝা, এবং বাক্য গঠনে দক্ষ হতে হবে। IELTS
          স্পিকিং পরীক্ষায় আপনি কত নম্বর পাবেন, তা আপনার দক্ষতা এবং উচ্চারণের উপর
          নির্ভরশীল।
        </p>
        <p className="text-gray-700 mb-6">
          IELTS স্পিকিং পরীক্ষায় একজন পরীক্ষক আপনাকে কয়েকটি প্রশ্ন করবেন এবং আপনাকে
          সেই প্রশ্নগুলোর উত্তর দিতে হবে। সাধারণত স্পিকিং পরীক্ষাটি ১০-১৫ মিনিটের
          হয় এবং এর মধ্যে আপনাকে প্রশ্নগুলোর উত্তর দিতে হবে।
        </p>
        <p className="text-gray-700 mb-6">
          আপনার উচ্চারণের উপর ভিত্তি করে এবং আপনি কত বেশি ইংরেজি শব্দ জানেন, তা
          আপনার পরীক্ষা ও পরীক্ষার ফল ভালো করে দিতে সাহায্য করে।
        </p>
        <p className="text-gray-700">
          আইইএলটিএস পরীক্ষার প্রস্তুতি নেওয়ার সময়, আপনি অনুশীলন পরীক্ষাগুলো করতে
          পারেন এবং আপনার দুর্বলতাগুলো চিহ্নিত করতে পারেন।
        </p>
      </div>

      {/* Feature One */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            ১. IELTS স্পিকিং টেস্ট সম্পর্কে
          </h2>
          <p className="text-gray-700 mb-4">
            IELTS স্পিকিং টেস্টটি তিনটি ভাগে বিভক্ত...
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              <span className="font-bold">IELTS টেস্ট:</span> স্পিকিং মডিউলের
              প্রস্তুতি নেওয়ার সময়, আপনাকে নিয়মিত অনুশীলন করা উচিত।
            </li>
            <li>
              <span className="font-bold">IELTS টেস্ট:</span> IELTS স্পিকিং
              টেস্টটি তিনটি ভাগে বিভক্ত।
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResourceCard number="1" />
            <ResourceCard number="2" />
            <ResourceCard number="3" />
            <ResourceCard number="4" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            ২. IELTS স্পিকিং প্র্যাকটিস টেস্ট নমুনা উত্তরসহ
          </h2>
          <div className="space-y-2">
            <SampleTopicCard title="Sample Topic 1: Hometown" />
            <SampleTopicCard title="Sample Topic 2: Movies" />
          </div>
        </div>
      </div>

      {/* Feature Three */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ৩. IELTS স্পিকিং প্র্যাকটিস টেস্ট নমুনা উত্তরসহ: পার্ট ২
        </h2>
        <InstructionCard
          title="Examiner:"
          instructions="You will now move on to Part 2..."
        />
        <AnswerSection
          title="Introduction"
          content={[
            "A truly memorable event in my life was my sister's wedding...",
            "This was not just a wedding, it was a family reunion...",
          ]}
        />
        <AnswerSection
          title="Experience"
          content={[
            "The wedding preparations were extensive...",
            "The ceremony itself was beautiful...",
          ]}
        />
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Examiner:</h4>
          <p className="text-sm text-gray-700">
            Thank you. Now let's move on to Part 3.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
