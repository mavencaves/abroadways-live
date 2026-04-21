//@ts-nocheck

import { useState } from 'react';

import { ChevronUp } from 'lucide-react';

// Accordion Item কম্পোনেন্ট
const SectionAccordion = ({ title, bodyContent, isOpen, onToggle }) => {
 
  const accentColor = 'bg-purple-600 hover:bg-purple-700'; 
  const accentTextColor = 'text-white';
  const accordionBg = 'bg-white';
  const headerBg = 'bg-white';
  const contentBg = 'bg-purple-50'; // কন্টেন্টের ব্যাকগ্রাউন্ড হালকা বেগুনি

  return (
    <div className={`mb-4 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${accordionBg}`}>
      {/* Accordion Header */}
      <button
        className={`w-full flex justify-between items-center p-5 font-semibold text-lg cursor-pointer transition-colors duration-200 ${headerBg}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-gray-800 text-left pr-2">{title}</span>
        {/* Plus/Minus বাটন ছবির সাথে মিলিয়ে তৈরি করা হয়েছে */}
        <div className={`p-2 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'bg-purple-700' : accentColor}`}>
          {isOpen ? (
            <ChevronUp size={20} className={accentTextColor} />
          ) : (
            <span className={`block w-5 h-5 relative ${accentTextColor}`}>
              {/* Plus icon (horizontal and vertical line) */}
              <span className={`absolute top-1/2 left-1/2 w-4 h-0.5 transform -translate-x-1/2 -translate-y-1/2 ${accentTextColor} bg-current`}></span>
              <span className={`absolute top-1/2 left-1/2 w-0.5 h-4 transform -translate-x-1/2 -translate-y-1/2 ${accentTextColor} bg-current`}></span>
            </span>
          )}
        </div>
      </button>

      {/* Accordion Body (Content) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${contentBg} p-5 pt-0`}
      >
        <div className="pt-4 text-gray-700">
          {bodyContent}
        </div>
      </div>
    </div>
  );
};

// মূল কম্পোনেন্ট
export default function GmatSampleQues() {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  // ছবির কন্টেন্ট অনুসারে ডেটা স্ট্রাকচার
  const sections = [
    {
      id: 1,
      heading: '১. GMAT স্যাম্পল পেপার: Quantitative Section',
      description: (
        <>
          <p className="mb-4">যদি পর্যাপ্ত প্রস্তুতি থাকে, তবে Quantitative সেকশন সহজেই ক্র্যাক করা যায়!</p>
          <p className="mb-4">এই সেকশনটি আপনার গণিতের দক্ষতা এবং পরিমাণগত যুক্তি প্রয়োগের ক্ষমতা যাচাই করতে তৈরি করা হয়েছে। এখানকার প্রশ্নগুলো মূলত **সমস্যা সমাধান (Problem Solving)** এবং **ডেটা সাফিসিয়েন্সি (Data Sufficiency)** সম্পর্কিত।</p>
        </>
      ),
      accordionItems: [
        { id: '1a', title: 'প্রশ্ন এবং উত্তর', content: 'এখানে Quantitative সেকশনের প্রশ্ন এবং উত্তর থাকবে।' },
      ],
    },
    {
      id: 2,
      heading: '২. GMAT স্যাম্পল পেপার: Verbal Reasoning',
      description: (
        <>
          <p className="mb-4">GMAT পরীক্ষার Verbal Reasoning সেকশন সম্ভবত সব সেকশনের মধ্যে সবচেয়ে সহজে মনে হলেও, ভালো স্কোর পাওয়ার জন্য সঠিক প্রস্তুতি অপরিহার্য।</p>
          <p className="mb-4">এই সেকশনটি আপনার **পাঠ্যবস্তু বোঝার ক্ষমতা**, **যুক্তি বিশ্লেষণ**, এবং **সঠিক ইংরেজি বাক্য গঠন করার দক্ষতা** যাচাই করে।</p>
          <p className="mb-4">এই অংশে ভালো স্কোর পাওয়া আপনার যোগাযোগ দক্ষতা এবং বিশ্লেষণাত্মক ক্ষমতা প্রমাণ করার জন্য একটি চমৎকার সুযোগ।</p>
        </>
      ),
      accordionItems: [
        { id: '2a', title: 'Verbal Reasoning প্রশ্ন ও উত্তর', content: 'এখানে Verbal Reasoning প্রশ্ন ও উত্তর থাকবে।' },
        { id: '2b', title: 'Critical Reasoning প্রশ্ন ও উত্তর', content: 'এখানে Critical Reasoning প্রশ্ন ও উত্তর থাকবে।' },
      ],
    },
    {
      id: 3,
      heading: '৩. GMAT স্যাম্পল পেপার: Data Insights',
      description: (
        <>
          <p className="mb-4">ডেটা ইনসাইটস (Data Insights) সেকশনটি আপনার ডেটা বিশ্লেষণ করার ক্ষমতা যাচাই করার জন্য তৈরি করা হয়েছে। এই অংশে আপনাকে ডেটা টেবিল, গ্রাফ, এবং চার্ট বিশ্লেষণ করতে হবে। বিজনেসের স্কুলগুলো ডেটা বিশ্লেষণকে একটি গুরুত্বপূর্ণ দক্ষতা হিসেবে বিবেচনা করে।</p>
          <p className="mb-4">এই সেকশনে ভালো স্কোর পাওয়া বোঝায় যে, আপনি **সিদ্ধান্ত গ্রহণ (decision-making)** এবং অন্যান্য গুরুত্বপূর্ণ **নেতৃত্বের দক্ষতাতে** সম্ভবত অসাধারণ।</p>
        </>
      ),
      accordionItems: [
        { id: '3a', title: 'প্রশ্ন ও উত্তর ১', content: 'এখানে Data Insights-এর প্রথম সেটের প্রশ্ন ও উত্তর থাকবে।' },
        { id: '3b', title: 'প্রশ্ন ও উত্তর ২', content: 'এখানে Data Insights-এর দ্বিতীয় সেটের প্রশ্ন ও উত্তর থাকবে।' },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 bg-purple-50">
      
      {/* Main Header Card (ছবির সাথে মিল রেখে) */}
      <div className="max-w-4xl mx-auto mb-8 p-6 md:p-10 rounded-3xl shadow-2xl bg-white">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-800 mb-4">
          GMAT স্যাম্পল পেপার ২০২৩: বিভাগভিত্তিক প্রশ্নসমূহ এবং উত্তরসমূহ
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          <span className="inline-block mr-2">
            {/* ঘড়ির আইকন (ঐচ্ছিক) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          আপডেট করা হয়েছে: আগস্ট ৩০, ২০২৩, ১৬:২৮
        </p>
        <p className="mb-4 text-gray-700">
          যদি আপনি বিদেশে বিজনেসে কোর্সগুলোতে পড়াশোনা করার পরিকল্পনা করেন, আপনার পৃথিবী সম্ভবত GMAT প্রস্তুতির চারপাশে ঘুরছে। হাজার হাজার বিজনেস স্কুল আগ্রহীদের স্বপ্নের বিশ্ববিদ্যালয় খুঁজে পেতে সাহায্য করার পর, আমরা জানি যে একটি ভালো GMAT স্কোর কত বড় পার্থক্য তৈরি করতে পারে।
        </p>
        <p className="mb-4 text-gray-700">
          এই **স্ট্যান্ডার্ডাইজড পরীক্ষা Analytical Writing, Quantitative, Verbal, এবং Integrated Reasoning** দক্ষতা মূল্যায়ন করে এবং অন্যান্য MBA এবং অন্যান্য বিজনেস-সংক্রান্ত কোর্সের আবেদন প্রক্রিয়ায় একটি গুরুত্বপূর্ণ উচ্চ মানের প্রয়োজন, সফলতার জন্য বিস্তারিত প্রস্তুতি অপরিহার্য।
        </p>
        <p className="mb-4 text-gray-700">
          GMAT স্যাম্পল পেপার, যার মধ্যে **প্র্যাকটিস প্রশ্ন** এবং **পূর্ণ দৈর্ঘ্যের প্র্যাকটিস পরীক্ষা** অন্তর্ভুক্ত, GMAT প্রস্তুতির জন্য একটি শক্তিশালী সরঞ্জাম।
        </p>
        <p className="mb-4 text-gray-700">
          এই পৃষ্ঠায়, আমরা সেরা GMAT স্যাম্পল পেপারগুলো আলোচনা করবো। [ফ্রি GMAT প্রশ্ন অ্যাক্সেস করার জন্য শেষ পর্যন্ত পড়ুন।]
        </p>
      </div>

      {/* Sections and Accordions */}
      <div className="max-w-4xl mx-auto">
        {sections.map((section) => (
          <div key={section.id} className="mb-10 p-6 md:p-8 rounded-3xl shadow-2xl bg-white">
            <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-4">{section.heading}</h2>
            <div className="text-gray-700 mb-6">{section.description}</div>
            
            {section.accordionItems.map((item) => (
              <SectionAccordion
                key={item.id}
                title={item.title}
                bodyContent={item.content}
                isOpen={openSection === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}