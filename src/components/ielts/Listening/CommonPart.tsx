import React from "react";

const CommonPart: React.FC = () => {
  const universityData = [
    "ম্যাসাচুসেটস ইনস্টিটিউট অফ টেকনোলজি",
    "দা ইউনিভার্সিটি অফ ব্রিটিশ কলম্বিয়া",
    "হার্ভার্ড বিশ্ববিদ্যালয়",
    "ইউনিভার্সিটি অফ টরন্টো",
    "কলেস্টাগা কলেজ",
    "ইউনিভার্সিটি অফ ইস্ট লন্ডন",
    "স্ট্যানফোর্ড বিশ্ববিদ্যালয়",
    "ইউনিভার্সিটি অফ আলবার্টা",
    "কভেন্ট্রি বিশ্ববিদ্যালয়",
    "নিউ ইয়র্ক বিশ্ববিদ্যালয়"
  ];

  const practiceData = [
    "IELTS অনুশীলন পরীক্ষার সম্পর্কে আরও পড়ুন",
    "IELTS লেখার অনুশীলন পরীক্ষা",
    "IELTS পড়ার অনুশীলন পরীক্ষা",
    "IELTS শোনার অনুশীলন পরীক্ষা",
    "IELTS স্পিকিং কিউ কার্ড",
    "IELTS স্পিকিং পার্ট ১",
    "IELTS রাইটিং টাস্ক ১",
    "IELTS রাইটিং টাস্ক ২",
    "টাস্ক ১ পাই চার্ট",
    "টাস্ক ১ টেবিল চার্ট",
    "টাস্ক ১ ম্যাপ",
    "টাস্ক ১ বার গ্রাফ",
    "টাস্ক ১ লাইন গ্রাফ",
    "টাস্ক ১ ডায়োগ্রাম"
  ];

  const centers = [
    "ঢাকায় IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "চট্টগ্রাম IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "রাজশাহী IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "সিলেট IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "খুলনায় IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "কুমিল্লায় IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "ময়মনসিংহ IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "বরিশাল IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "রংপুর IELTS পরীক্ষার কেন্দ্র ও তারিখ",
    "নরসিংদীতে IELTS পরীক্ষার কেন্দ্র ও তারিখ"
  ];

  const cueCards = [
    "Describe An Energetic Person That You Know",
    "Describe A Job That Is Useful To Society",
    "Describe A Place You Have Been To Would Like To Recommended Others To Live There",
    "Describe A Countryside Area That You Have Been To",
    "Describe Something That Surprised You And Made You Happy",
    "Describe A Time When You Organized A Happy Event Successfully",
    "Describe A Skill That You Learned From Older People",
    "Describe Someone You Really Like To Spend Time With",
    "Describe A Place In Your Hometown/City That Is Different From Other Places And That You Enjoy Visiting With Your Parents",
    "Describe A Time You Visited A New Place",
    "Describe A Movie You Watched Recently",
    "Describe A Thing You Did To Learn Another Language",
    "Describe Your Favorite Food At A Traditional Festival Or A Special Event In Your Country",
    "Describe A Place Where You Have Taken Photos More Than Once",
    "Describe Something You Received For Free",
  ];

  const handleClick = (item: string) => {
    alert(`আপনি ক্লিক করেছেন: ${item}`);
  };

  return (
    <div className=" p-4 sm:p-8 font-sans antialiased space-y-10">

      {/* IELTS Accepting Universities */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          IELTS গ্রহণকারী বিশ্ববিদ্যালয়সমূহ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {universityData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 shadow-sm border border-gray-600 flex items-center justify-between hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => handleClick(item)}
            >
              <p className="text-sm font-medium text-gray-800 leading-relaxed">{item}</p>
              <span className="text-2xl text-gray-400">→</span>
            </div>
          ))}
          {universityData.length % 3 !== 0 && <div className="hidden md:block"></div>}
        </div>
      </div>

      {/* IELTS Exercise */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800  mb-6">
          IELTS অনুশীলন পরীক্ষার সম্পর্কে আরও পড়ুন
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {practiceData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 shadow-sm border border-gray-600 flex items-center justify-between hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => handleClick(item)}
            >
              <p className="text-sm font-medium text-gray-800 leading-relaxed">{item}</p>
              <span className="text-2xl text-gray-400">→</span>
            </div>
          ))}
          {practiceData.length % 3 !== 0 && <div className="hidden md:block"></div>}
        </div>
      </div>

      {/* Bangladesh Centers */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800  mb-6">
          বাংলাদেশে IELTS পরীক্ষার কেন্দ্র ও তারিখ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {centers.map((center, index) => (
            <div key={index} className="bg-white p-4 shadow-sm border border-gray-600 flex items-center justify-between hover:shadow-md transition-shadow duration-300">
              <p className="text-sm font-medium text-gray-800 leading-relaxed">{center}</p>
              <span className="text-2xl text-gray-400">→</span>
            </div>
          ))}
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1"></div>
        </div>
      </div>

      {/* Cue Cards */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          সেরা কিউ কার্ডগুলো উত্তরসহ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {cueCards.map((card, index) => (
            <button
              key={index}
              onClick={() => handleClick(card)}
              className="flex justify-between items-center w-full text-left bg-purple-50 hover:bg-purple-100 transition-colors duration-200 border border-gray-400 px-4 py-3 text-gray-700 font-medium"
            >
              <span className="pr-2">{card}</span>
              <span className="text-purple-500 font-bold text-lg">→</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CommonPart;
