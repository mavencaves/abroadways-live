import React from "react";

const CommonSection: React.FC = () => {
  const stepsData = [
    { title: "IELTS স্পিকিং\nঅনুশীলন পরীক্ষা", linkText: "এখনই পড়ুন", linkUrl: "#" },
    { title: "IELTS অনুশীলন\nপরীক্ষা", linkText: "এখনই পড়ুন", linkUrl: "#" },
    { title: "IELTS লিসেনিং\nঅনুশীলন পরীক্ষা", linkText: "এখনই পড়ুন", linkUrl: "#" },
  ];

  const infoData = [
    "IELTS পরীক্ষা",
    "IELTS পরীক্ষার তারিখ",
    "IELTS পরীক্ষা ফি",
    "IELTS মডিউল",
    "IELTS শোনার অনুশীলন পরীক্ষা",
    "IELTS কথা বলার অনুশীলন পরীক্ষা",
    "IELTS পড়ার অনুশীলন পরীক্ষা",
    "IELTS লেখার অনুশীলন পরীক্ষা",
    "IELTS পরীক্ষার কেন্দ্র",
    "IELTS ফলাফল",
    "IELTS-এর ধরন",
    "IELTS প্যাটার্ন",
    "IELTS পরীক্ষার যোগ্যতা",
    "IELTS স্লট বুকিং",
    "IELTS ব্যান্ড স্কোর",
    "IELTS রেজিস্ট্রেশন",
    "IELTS বই",
    "IELTS প্রস্তুতি",
    "IELTS অনুশীলন পরীক্ষা"
  ];

  const countryData = [
    "যুক্তরাষ্ট্রে উচ্চশিক্ষা",
    "কানাডায় উচ্চশিক্ষা",
    "যুক্তরাজ্যে উচ্চশিক্ষা",
    "অস্ট্রেলিয়ায় উচ্চশিক্ষা",
    "আয়ারল্যান্ডে উচ্চশিক্ষা",
    "জার্মানিতে উচ্চশিক্ষা",
    "নিউজিল্যান্ডে উচ্চশিক্ষা",
    "ইতালিতে উচ্চশিক্ষা",
    "ফ্রান্সে উচ্চশিক্ষা"
  ];

  const handleCardClick = (item: string) => {
    alert(`আপনি ক্লিক করেছেন: ${item}`);
    // Navigation logic or other actions can be added here
  };

  return (
    <div className="p-4 sm:p-8 font-sans antialiased space-y-10">

      {/* Next Step Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">পরবর্তী ধাপ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stepsData.map((step, index) => (
            <div key={index} className="bg-[#f0f3f6] p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <p className="text-base font-semibold text-[#4446a8] whitespace-pre-line mb-4">
                {step.title}
              </p>
              <a 
                href={step.linkUrl} 
                className="text-[#4446a8] font-bold text-sm flex items-center hover:underline transition-colors duration-300"
              >
                {step.linkText} <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* IELTS Info Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {infoData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 shadow-sm border border-gray-400 flex items-center justify-between hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(item)}
            >
              <p className="text-sm font-medium text-gray-800 leading-relaxed">{item}</p>
              <span className="text-2xl text-gray-400">→</span>
            </div>
          ))}
          {infoData.length % 3 !== 0 && <div className="hidden md:block"></div>}
        </div>
      </div>

      {/* IELTS Accepting Countries Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800  mb-6">IELTS গ্রহণকারী দেশসমূহ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {countryData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 shadow-sm border border-gray-400 flex items-center justify-between hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <p className="text-sm font-medium text-gray-800 leading-relaxed">{item}</p>
              <span className="text-2xl text-gray-400">→</span>
            </div>
          ))}
          {countryData.length % 3 !== 0 && <div className="hidden md:block"></div>}
        </div>
      </div>

    </div>
  );
};

export default CommonSection;
