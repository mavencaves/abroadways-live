//@ts-nocheck
import { useState } from 'react';

/**
 * Reusable Accordion Item Component (for Skill-based section, purple background)
 * @param {string} title - The title of the accordion section (e.g., 'Reading').
 * @param {string} content - The content to be displayed when the accordion is open.
 */
const SkillAccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Styling matching Screenshot 2 (Skill Section)
  const purpleBg = 'bg-violet-600';

  return (
    <div className="mb-4 rounded-xl overflow-hidden shadow-lg border border-violet-200">
      {/* Accordion Header */}
      <button
        className={`w-full flex justify-between items-center py-4 px-6 text-left transition-colors duration-300 ease-in-out 
          ${isOpen ? purpleBg : 'bg-violet-100 hover:bg-violet-200'} text-violet-800 font-medium text-lg`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {/* Plus/Minus Icon matching the purple circle in the image */}
        <div className="w-7 h-7 flex items-center justify-center text-white bg-violet-600 rounded-full ml-4 flex-shrink-0">
            {isOpen ? (
                <span className="text-xl leading-none font-light">—</span>
            ) : (
                <span className="text-xl leading-none font-light">+</span>
            )}
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`bg-white transition-all duration-500 ease-in-out overflow-hidden 
          ${isOpen ? 'max-h-96 opacity-100 p-5' : 'max-h-0 opacity-0 p-0'}`}
      >
        <p className="text-gray-700 leading-relaxed text-base">
          {content}
        </p>
      </div>
    </div>
  );
};


/**
 * Reusable FAQ Item Component (for FAQ section, white background with separators)
 * @param {string} question - The FAQ question.
 * @param {string} answer - The FAQ answer.
 */
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {/* Question Text matching the dark purple text in Screenshot 3 */}
        <span className="text-base sm:text-lg font-normal text-gray-800 flex-grow pr-4">
          {question}
        </span>
        {/* Down Arrow Icon matching the arrow in the image */}
        <svg
          className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {/* Separator Line exactly as in the screenshot */}
      <div className="w-full h-px bg-gray-200"></div>


      {/* Answer Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden 
          ${isOpen ? 'max-h-48 opacity-100 py-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};


// --- NEW COMPONENT: Structure and Details Section (Based on 4 New Screenshots) ---

/**
 * Component to display the Duolingo English Test Structure, Timing, and Question Types.
 */
const DuolingoStructureSection = () => {
    
    // Data for DET Sections (from Screenshot 225735.png)
    const sectionData = [
        {
            section: 'Introduction and Onboarding',
            time: '৫ মিনিট',
            focus: [
                'লিখিত কনসেন্ট যা আপনার ক্যামেরা, স্পিকার এবং মাইক্রোফোন সঠিকভাবে কাজ করছে।',
                'আপনার সরবরাহ করা ডকুমেন্টস সঠিক হবে তা নিশ্চিত করে নিন।',
                'পরীক্ষা সংক্রান্ত নিয়মাবলী ও প্রয়োজনীয়তা পরীক্ষা করে নিন।'
            ]
        },
        {
            section: 'Computer Adaptive Test (Graded)',
            time: '৪০ মিনিট',
            focus: [
                'পরীক্ষা আপনার ইংরেজি দক্ষতা মূল্যায়ন করে ছোট ধরনের প্রশ্নের মাধ্যমে।',
                'পরীক্ষার প্রশ্নগুলো এলোমেলোভাবে লোড করা হয়।',
                'প্রশ্নগুলোর কঠিনতা আপনার পারফরম্যান্স অনুযায়ী পরিবর্তিত হবে।'
            ]
        },
        {
            section: 'Video and Writing sample (Ungraded)',
            time: '১০ মিনিট',
            focus: [
                'আপনার সময়: যত শব্দসমূহ পূর্ণ থেকে ২ টি প্রশ্নের উত্তর দিতে ১০ মিনিট।',
                'ভিডিও স্পিকিং স্যাম্পল: ৩০ সেকেন্ড।',
                'রাইটিং স্যাম্পল: ৫ - ৫ মিনিট।',
                'আপনি ভিডিও এবং রাইটিং সেকশনের উত্তরগুলো প্রতিষ্ঠানগুলোতে পাঠানোর আগে রিভিউ করতে পারবেন।'
            ]
        },
    ];

    // Data for Question Types (from Screenshot 225812.png)
    const questionTypeData = [
        { type: 'Read and Select', count: '১৮-১৮', skills: 'পঠন, সাক্ষরতা, বোঝাপড়া' },
        { type: 'Fill in the Blanks', count: '৬-৯', skills: 'পঠন, সাক্ষরতা, বোঝাপড়া' },
        { type: 'Read and Complete', count: '৫-৬', skills: 'শ্রবণ, সাক্ষরতা, বোঝাপড়া' },
        { type: 'Read Aloud', count: '৫-৬', skills: 'বক্তৃতা, সংলাপ, উৎপাদন' },
        { type: 'Listen and Type', count: '৬-৯', skills: 'শ্রবণ, বোঝাপড়া, সংলাপ' },
        { type: 'Interactive Reading', count: '১ সেট x ৬-টি প্রশ্ন', skills: 'পঠন, সাক্ষরতা, বোঝাপড়া' },
        { type: 'Interactive Listening', count: '২ সেট x ৩-টি প্রশ্ন', skills: 'শ্রবণ, বোঝাপড়া, সংলাপ' },
        { type: 'Write About the Photo', count: '১', skills: 'লিখন, সাক্ষরতা, উৎপাদন' },
        { type: 'Interactive Writing', count: '১ সেট x ৫টি প্রশ্ন', skills: 'লিখন, সাক্ষরতা, উৎপাদন' },
        { type: 'Listen, then Speak', count: '১', skills: 'বক্তৃতা, সংলাপ, উৎপাদন' },
        { type: 'Speak About the Photo', count: '১', skills: 'বক্তৃতা, সংলাপ, উৎপাদন' },
        { type: 'Read, then Speak', count: '১', skills: 'বক্তৃতা, সংলাপ, উৎপাদন' },
        { type: 'Writing Sample', count: '১', skills: 'লিখন, সাক্ষরতা, উৎপাদন' },
        { type: 'Speaking Sample', count: '১', skills: 'বক্তৃতা, সংলাপ, উৎপাদন' },
    ];


    return (
        <div className="mt-10 pt-6 border-t border-gray-100">
            {/* Header Section (from Screenshot 225657.png) */}
            <h2 className="text-2xl sm:text-3xl font-bold text-violet-800 mb-6">
                ২. ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET) এর কাঠামো
            </h2>

            <div className="text-base sm:text-lg text-gray-700 space-y-4 mb-8">
                <p>
                    যদি আপনি ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET)-এ ভালো স্কোর করতে চান, তবে পরীক্ষার ফরম্যাট জানা অত্যন্ত গুরুত্বপূর্ণ।
                </p>
                <p>
                    ডুয়োলিঙ্গো ইংলিশ টেস্ট-এর ফরম্যাট সহজ এবং তিনটি ভাগে বিভক্ত:
                    <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
                        <li>Introduction and Onboarding: পরীক্ষার পরিচিতি এবং প্রস্তুতি।</li>
                        <li>Computer-Adaptive Test: কম্পিউটার-ভিত্তিক অভিযোজিত পরীক্ষা, যা আপনার পারফরম্যান্স অনুযায়ী প্রশ্নের কঠিনতা পরিবর্তন করে।</li>
                        <li>Video and Writing Sample: ভিডিও এবং লেখার নমুনা, যা আপনার কথা ও লিখিত ইংরেজির দক্ষতা যাচাই করে।</li>
                    </ol>
                </p>
                <p>
                    এই পরীক্ষার ফরম্যাট বিশ্বব্যাপী স্বীকৃত, এবং ৫০০-এর বেশি দেশের হাজার হাজার প্রতিষ্ঠান এটি গ্রহণ করে, যেমন যুক্তরাজ্য, যুক্তরাষ্ট্র, কানাডা ইত্যাদি। এটি ইংরেজি ভাষা শেখার শিক্ষার্থীদের মধ্যে খুবই জনপ্রিয়।
                </p>
                <p>
                    ডুয়োলিঙ্গো ইংলিশ টেস্ট বিশেষভাবে তাদের জন্য ডিজাইন করা হয়েছে যারা বিদেশে পড়াশোনা করতে চায়। এটি আপনার ইংরেজি দক্ষতা যাচাই করার একটি গুরুত্বপূর্ণ ধাপ।
                </p>
                <p>
                    পরবর্তী ধাপে আমরা নমুনা প্রশ্ন এবং উত্তর দেখার আগে, প্রথমে পরীক্ষার ফরম্যাটের সাথে পরিচিত হয়ে নিই।
                </p>
            </div>


            {/* DET Section Structure Table (from Screenshot 225735.png) */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 mt-8">
                ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET) কাঠামো
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-violet-200">
                <table className="min-w-full divide-y divide-violet-200">
                    <thead className="bg-violet-100">
                        <tr>
                            <th className="py-3 px-3 sm:px-4 text-left text-sm font-semibold text-violet-800 uppercase tracking-wider">বিভাগসমূহ</th>
                            <th className="py-3 px-3 sm:px-4 text-left text-sm font-semibold text-violet-800 uppercase tracking-wider">সময়কাল</th>
                            <th className="py-3 px-3 sm:px-4 text-left text-sm font-semibold text-violet-800 uppercase tracking-wider">মূল ফোকাস/বিষয়বস্তু</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-violet-100">
                        {sectionData.map((item, index) => (
                            <tr key={index} className="hover:bg-violet-50 transition-colors duration-150">
                                <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.section}</td>
                                <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-sm text-gray-700">{item.time}</td>
                                <td className="py-3 px-3 sm:px-4 text-sm text-gray-700">
                                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                                        {item.focus.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Adaptive Details (from Screenshot 225756.png) */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 mt-8">
                ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET) প্যাটার্ন ও সিলেবাস ২০২৩
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
                ডুয়োলিঙ্গো ইংলিশ টেস্ট-এর অ্যাডাপটিভ সেকশন আপনার ইংরেজি দক্ষতা বিভিন্ন ধরনের প্রশ্নের মাধ্যমে মূল্যায়ন করে। অন্যান্য ভাষা পরীক্ষার মতো নয়, ডুয়োলিঙ্গো ইংলিশ টেস্ট একটি কম্পিউটার-ভিত্তিক, অ্যাডাপটিভ পরীক্ষা এর মানে হলো:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 mb-8">
                <li>প্রশ্নের ক্রম এবং কঠিনতা আপনার পারফরম্যান্স অনুযায়ী পরিবর্তিত হয়।</li>
            </ul>

            <p className="font-semibold text-gray-800 mb-2">
                কিভাবে কাজ করে:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                <li>সহজ: যদি আপনি কিছু প্রশ্নে সমস্যা করেন, তবে পরবর্তী প্রশ্নগুলো সহজ হবে।</li>
                <li>কঠিন: যদি আপনি ভালো করেন, তবে পরবর্তী প্রশ্নগুলো কঠিন হবে।</li>
            </ul>


            {/* Question Types Table (from Screenshot 225812.png) */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 mt-8">
                প্রশ্নের ধরনগুলো মনোযোগ সহকারে দেখুন:
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-violet-200 mb-8">
                <table className="min-w-full divide-y divide-violet-200">
                    <thead className="bg-violet-100">
                        <tr>
                            <th className="py-3 px-3 sm:px-4 text-left text-sm font-semibold text-violet-800 uppercase tracking-wider">প্রশ্ন ধরন</th>
                            <th className="py-3 px-3 sm:px-4 text-left text-sm font-semibold text-violet-800 uppercase tracking-wider">সময়সীমা</th>
                            <th className="py-3 px-3 sm:px-4 text-left text-sm font-semibold text-violet-800 uppercase tracking-wider">মাত্রা যাচাই</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-violet-100">
                        {questionTypeData.map((item, index) => (
                            <tr key={index} className="hover:bg-violet-50 transition-colors duration-150">
                                <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                                <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-sm text-gray-700">{item.count}</td>
                                <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-sm text-gray-700">{item.skills}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

// --- MAIN APP COMPONENT ---

const SampleQuestion = () => {
  // Data for the Skill-based Accordion (from Screenshot 2)
  const skillData = [
    {
      title: 'Reading',
      content: 'রিডিং সেকশনের জন্য নমুনা প্রশ্ন ও বিস্তারিত উত্তর এখানে পাওয়া যাবে। এটি আপনাকে ইংরেজি টেক্সট দ্রুত এবং সঠিকভাবে বুঝতে সাহায্য করবে।',
    },
    {
      title: 'Writing',
      content: 'রাইটিং সেকশনের জন্য পরীক্ষামূলক প্রশ্ন এবং উত্তর আলোচনা করা হয়েছে। এতে আপনার রচনাশৈলী এবং ব্যাকরণগত দক্ষতা উন্নত হবে।',
    },
    {
      title: 'Speaking',
      content: 'স্পিকিং সেকশনে ভালো স্কোর করার জন্য প্রয়োজনীয় প্র্যাকটিস সেশন এবং টিপস এখানে অন্তর্ভুক্ত। আপনার ফ্লুয়েন্সি ও উচ্চারণ উন্নত করুন।',
    },
    {
      title: 'Listening',
      content: 'লিসেনিং সেকশনের জন্য অডিও স্যাম্পল এবং তাদের সঠিক উত্তর এখানে দেওয়া হলো। বিভিন্ন এক্সেন্টে ইংরেজি বুঝতে অনুশীলন করুন।',
    },
  ];

  // Data for the FAQ Accordion (from Screenshot 3)
  const faqData = [
    {
      question: 'ডুয়োলিঙ্গো ইংলিশ টেস্ট-এ কোন ধরনের নমুনা প্রশ্ন অন্তর্ভুক্ত থাকে?',
      answer: 'সাধারণত, এখানে Listening, Speaking, Reading এবং Writing এর মতো বিভিন্ন দক্ষতা যাচাইয়ের জন্য একাধিক ধরনের প্রশ্ন অন্তর্ভুক্ত থাকে।',
    },
    {
      question: 'পরীক্ষার পরে Writing এবং Speaking নমুনা প্রশ্নের উত্তর রিভিউ করতে পারি কি?',
      answer: 'হ্যাঁ, পরীক্ষার পর কিছু প্ল্যাটফর্মে আপনার উত্তরগুলি দেখতে এবং রিভিউ করার সুযোগ থাকতে পারে। তবে এটি প্ল্যাটফর্মের নীতির উপর নির্ভরশীল।',
    },
    {
      question: 'ডুয়োলিঙ্গো ইংলিশ টেস্ট-এর উপকরণ কি বিনামূল্যে পাওয়া যায়?',
      answer: 'কিছু প্রাথমিক উপকরণ বিনামূল্যে পাওয়া গেলেও, সম্পূর্ণ এবং বিস্তারিত প্রস্তুতির জন্য প্রিমিয়াম কোর্স বা উপকরণ প্রয়োজন হতে পারে।',
    },
    {
      question: 'কতটি ডুয়োলিঙ্গো টেস্ট নমুনা প্রশ্ন রয়েছে?',
      answer: 'নমুনা প্রশ্নের সংখ্যা প্রতিনিয়ত পরিবর্তিত হতে পারে, তবে প্রস্তুতির জন্য পর্যাপ্ত সংখ্যক প্রশ্ন সবসময়ই থাকে।',
    },
    {
      question: 'ডুয়োলিঙ্গো টেস্ট নমুনা প্রশ্নের সঙ্গে অনুশীলন করলে কি আসল পরীক্ষায় পাস করার গ্যারান্টি পাওয়া যায়?',
      answer: 'অনুশীলন প্রস্তুতিকে শক্তিশালী করে, কিন্তু এটি পাস করার গ্যারান্টি দেয় না। নিয়মিত অনুশীলন এবং কৌশল অবলম্বন সফলতার সম্ভাবনা বাড়ায়।',
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-start font-sans">
      {/* Main Content Card (Responsive Width, matching light purple background) */}
      <div className="w-full max-w-4xl bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-violet-50">

        {/* --- 1. Header/Intro Section (from Screenshot 2025-10-07 225545.png) --- */}
        <div className="mb-10">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-2">
            বিদেশে উচ্চশিক্ষা / পরীক্ষাসমূহ / ডুয়োলিঙ্গো / নমুনা প্রশ্ন
          </p>

          {/* Main Title - matching the large purple font */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-violet-800 leading-tight mb-4">
            ডুয়োলিঙ্গো ইংলিশ টেস্ট নমুনা প্রশ্ন এবং উত্তর
          </h1>

          {/* Update Time */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>আপডেট করা হয়েছে: ৩০ জুন, ২০২৩, ০৯:০৯</span>
          </div>

          {/* Intro Paragraphs */}
          <div className="text-base sm:text-lg text-gray-700 space-y-4">
            <p>
              আপনি কি অনলাইন ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET) এর জন্য প্রস্তুতি নিচ্ছেন? তাহলে DET নমুনা প্রশ্ন ও উত্তর আপনার সেরা সহায়ক হতে পারে, যা আপনাকে বিদেশে পড়াশোনার যাত্রার জন্য আরও ভালো প্রস্তুতি নিতে সাহায্য করবে।
            </p>
            <p>
              পরীক্ষাটি যতই সুবিধাজনক ও সাশ্রয়ী হোক না কেন, পরীক্ষার সময় কিছুটা উদ্বেগ বা নার্ভাস অনুভব করা স্বাভাবিক। সম্ভবত আপনি এটিও অনুভব করেছেন। এই ক্ষেত্রে DET প্র্যাকটিস টেস্ট আপনাকে আত্মবিশ্বাস তৈরি করে এবং আসল পরীক্ষার জন্য ভালোভাবে প্রস্তুতি নিতে সাহায্য করে।
            </p>
            <p>
              চলুন শুরু করি, যাতে আপনি ডুয়োলিঙ্গো ইংলিশ টেস্ট-এর জন্য প্রস্তুত হতে পারেন।
            </p>
          </div>
        </div>

        {/* --- 2. Structure Section (NEWLY ADDED) --- */}
        <DuolingoStructureSection />
        
        {/* --- 3. Skill-based Accordion Section (formerly Section 2) --- */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          {/* Section 3 Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-violet-800 mb-6">
            ৩. দক্ষতাভিত্তিক প্রস্তুতি
          </h2>

          {/* Description Paragraphs (from Screenshot 225631.png) */}
          <div className="text-base sm:text-lg text-gray-700 space-y-4 mb-8">
            <p>
              সম্পূর্ণ উত্তর এখানে, আমরা ডুয়োলিঙ্গো ইংলিশ টেস্টে সবচেয়ে সাধারণভাবে জিজ্ঞাসিত কিছু প্রশ্নের বিস্তারিত উত্তর আলোচনা করব।
            </p>
            <p>
              এই স্যাম্পল উত্তরগুলো অনুশীলন করা আপনার ভাষা দক্ষতা উন্নত করতে সাহায্য করবে।
            </p>
            <p>
              চলুন প্রতিটি ভাষার দক্ষতার জন্য স্যাম্পল প্রশ্ন ও উত্তর দেখি।
            </p>
            <p>
              এই স্যাম্পল প্রশ্ন ও উত্তর অনুশীলন করা আপনাকে ডুয়োলিঙ্গো ইংলিশ টেস্টের প্রস্তুতিতে এগিয়ে রাখবে এবং এটি আপনার শক্তি ও দুর্বল দিকগুলো চিহ্নিত করতে সাহায্য করবে।
            </p>
          </div>

          {/* Skill Accordions */}
          <div className="bg-violet-50 p-4 rounded-xl">
            {skillData.map((item, index) => (
              <SkillAccordionItem key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
        
        {/* --- 4. FAQ Section (formerly Section 3) --- */}
        <div className="mt-12 pt-6 border-t border-gray-100 bg-violet-50 p-6 rounded-xl">
          {/* FAQ Section Title - matching the dark purple font and size */}
          <h2 className="text-xl sm:text-2xl font-bold text-violet-800 mb-6">
            শিক্ষার্থীদের করা সবচেয়ে বেশি প্রশ্নসমূহ-
          </h2>

          <div className="divide-y divide-gray-200">
            {faqData.map((item, index) => (
              // Using a wrapper div to handle the light purple padding seen in the screenshot
              <div key={index}>
                 <FAQItem question={item.question} answer={item.answer} />
              </div>
            ))}
            {/* The last item needs a separator as well in the screenshot's style */}
             <div className="w-full h-px bg-gray-200"></div> 
          </div>
        </div>

      </div>
    </div>
  );
};

export default SampleQuestion;
