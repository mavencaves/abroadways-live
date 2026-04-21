import React, { useState } from 'react';

// ----------------------------
// Reusable List Item Component
// ----------------------------
const FAQ: React.FC<{ number: string; text: string }> = ({ number, text }) => (
  <div className="flex mb-4">
    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
      <span className="text-xs font-bold">{number}</span>
    </div>
    <p className="text-gray-700 text-sm md:text-base">{text}</p>
  </div>
);

// ----------------------------
// Feature Seven Component
// ----------------------------
export const FeatureSeven: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৭. IELTS পরীক্ষার তারিখ পুনঃনির্ধারণ ও বাতিল করার নিয়মাবলী</h2>
        
        <FAQ 
          number="১." 
          text="ব্রিটিশ কাউন্সিল অথবা আইডিপি (IDP)-এর অফিসিয়াল IELTS ওয়েবসাইট এবং আপনার টেস্ট পোর্টালের মাধ্যমেও ডেট পরিবর্তন ও বাতিল করার নীতি দেখুন।" 
        />
        <FAQ 
          number="২." 
          text="বাংলাদেশে, পরীক্ষার দিন সাধারণত পরিবর্তন করা হয় না অথবা বাতিল করা হয় না, তাই যথাসম্ভব এড়ান এগুলো।" 
        />
        <FAQ 
          number="৩." 
          text="যদি সম্ভব থাকে, তাহলে তারিখ পরিবর্তন ও বাতিলের জন্য দুই দিন সময় দিন, কারণ এটি তিন দিন লাগে।" 
        />
        <FAQ 
          number="৪." 
          text="আপনাদের সুবিধা থাকলে, IELTS-এর অনলাইন যোগাযোগ মাধ্যমেও বুকিং করা যায় এবং তাদের তথ্যও পাওয়া যায়।" 
        />
        <FAQ 
          number="৫." 
          text="যেখানে কোনো গুরুতর কারণ থাকে, সেখানে তারিখ পরিবর্তন ও বাতিল করার জন্য আপনার টেস্ট সেন্টারে যোগাযোগ করা এবং রিফান্ড পেতে পারেন।" 
        />
        <FAQ 
          number="৬." 
          text="নির্ধারিত দিন: তারিখ পরিবর্তন ও বাতিল করার পর নির্ধারিত ওয়েবসাইট ও যোগাযোগ মাধ্যম থেকে তথ্য পাবেন।" 
        />
        <FAQ 
          number="৭." 
          text="ভবিষ্যত সচেতন থাকার জন্য, পরিবর্তন ব্যবস্থা হচ্ছে, তাই ৫ দিন সময় লাগে পরিবর্তন করতে।" 
        />
        <FAQ 
          number="৮." 
          text="যেখানে পরিবর্তন হচ্ছে না, যদি আপনি মূল পরীক্ষার দিন উপস্থিত না থাকেন, তাহলে তারিখ পরিবর্তনের জন্য কোনো আবেদন করার প্রয়োজন নেই এবং ৫ দিন সময় লাগতে পারে।" 
        />
        <FAQ 
          number="৯." 
          text="আপনার পরীক্ষার তারিখ আপনার প্রশ্নগুলির প্রতি প্রভাবিত করার জন্য, তাই আপনার মূল্যবান পরিবর্তনগুলো দেখতে মনোযোগ করুন।" 
        />
        <FAQ 
          number="১০." 
          text="নতুন তারিখ পুনরায় বুক করা হলে, তারিখ পরিবর্তনের জন্য নতুন তারিখের নোটিশ, সময় ও অবস্থান পরিবর্তন পাবেন।" 
        />
      </div>
    </div>
  );
};

// ----------------------------
// Reusable FAQ Card Component
// ----------------------------
const FAQCard: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4 overflow-hidden">
      <div 
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">{question}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

// ----------------------------
// FAQ Component
// ----------------------------
export const FAQ1: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">বেশি জিজ্ঞাসিত প্রশ্ন</h2>
        
        <FAQCard question="IELTS জেনারেল ট্রেনিং পরীক্ষা কত ঘনভাবে অনুষ্ঠিত হয়?">
          <p>IELTS জেনারেল ট্রেনিং পরীক্ষা সাধারণত মাসে ৪ বার অনুষ্ঠিত হয়।</p>
        </FAQCard>

        <FAQCard question="IELTS জেনারেল ট্রেনিং কি কঠিন?">
          <p>কঠিনতা নির্ভর করে আপনার ইংরেজি দক্ষতার উপর। IELTS জেনারেল ট্রেনিং পরীক্ষা মূলত সাধারণ জীবনের বিষয়গুলোর উপর ভিত্তি করে করা হয়, তাই এটি একাডেমিকে থেকে একটু সহজ।</p>
        </FAQCard>

        <FAQCard question="IELTS UKVI পরীক্ষা কত ঘনভাবে নেওয়া হয়?">
          <p>IELTS UKVI পরীক্ষা প্রতি মাসে একবার বা দুইবার অনুষ্ঠিত হয়, যা স্থান এবং সেন্টারের উপর নির্ভর করে পরিবর্তিত হয়।</p>
        </FAQCard>
        
        <FAQCard question="কোন ভিসা আবেদনের জন্য IELTS UKVI লাগে?">
          <p>যুক্তরাজ্যে কাজের ভিসা, স্টুডেন্ট ভিসা এবং অভিবাসন ভিসার জন্য IELTS UKVI প্রয়োজন হয়।</p>
        </FAQCard>
        
        <FAQCard question="IELTS লাইফ স্কিলস পরীক্ষা কীভাবে বুক করবেন?">
          <p>IELTS লাইফ স্কিলস পরীক্ষা ব্রিটিশ কাউন্সিল বা আইডিপি-এর অফিসিয়াল ওয়েবসাইট থেকে বুক করা যায়।</p>
        </FAQCard>
      </div>
    </div>
  );
};
