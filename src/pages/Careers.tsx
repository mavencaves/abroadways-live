import React from 'react';
import image from '/images/Bristy/vitaly-gariev-6UEyCVPkjys-unsplash.jpg';
import image1 from '/images/Bristy/vitaly-gariev-92gc5wLdtnY-unsplash.jpg';
import image2 from '/images/Bristy/mapbox-zU6tCBzO0Ig-unsplash.jpg';
import image3 from '/images/Bristy/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';

interface Position {
  title: string;
  location: string;
  type: string;
  route: string;
}

const Careers: React.FC = () => {
  const positions: Position[] = [
    { title: 'SEO কনটেন্ট রাইটার', location: 'ঢাকা, বাংলাদেশ', type: 'ফুল টাইম', route: 'seo-writer' },
    { title: 'ভিডিও এডিটর', location: 'ঢাকা, বাংলাদেশ', type: 'ফুল টাইম', route: 'video-editor' },
    { title: 'এডুকেশন কোচ', location: 'ঢাকা, বাংলাদেশ', type: 'ফুল টাইম', route: 'education-coach' },
    { title: 'IELTS ট্রেইনার', location: 'ঢাকা, বাংলাদেশ', type: 'ফুল টাইম', route: 'ielts-trainer' },
    { title: 'ইউজার রিসার্চার', location: 'ঢাকা, বাংলাদেশ', type: 'ফুল টাইম', route: 'user-researcher' },
    { title: 'অপারেশনস ম্যানেজার', location: 'ঢাকা, বাংলাদেশ', type: 'ফুল টাইম', route: 'operations-manager' },
    { title: 'প্রোডাক্ট ডিজাইনার', location: 'ঢাকা, বাংলাদেশ', type: 'ফুল টাইম', route: 'product-designer' },
    { title: 'এক্টিভিটি অ্যাসিস্ট্যান্ট', location: 'ঢাকা, বাংলাদেশ', type: 'ফুল টাইম', route: 'activity-assistant' },
  ];

  const handleButtonClick = (route: string) => {
    console.log(`Navigating to route: /positions/${route}`);
  };

  return (
    <div className="font-sans antialiased">
      {/* Banner Section */}
      <div className="bg-[#e8e7fa] py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content Section */}
          <div className="md:w-1/2 p-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4446a8] mb-4 leading-tight">
              কিছু বড়োতার কর্মকাণ্ডের <br className="hidden md:block" /> অংশ হোন
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 max-w-lg mx-auto md:mx-0">
              আমাদের মূল বিশ্বাস হলো, কাজ শুধুমাত্র একটি চাকরি নয় - এটি একটি উদ্দেশ্য-চালিত যাত্রা হওয়া উচিত। আমাদের সঙ্গে যোগ দিন, আপনি কেবল একটি পদ পূরণ করছেন না, বরং আপনি অর্থপূর্ণ পরিবর্তন আনছেন আমাদের এবং একটি উন্নত ভবিষ্যতের পথে সহায়তা করছেন। আমরা এমন একটি কর্মপরিবেশ সংস্কৃতি তৈরি করি যেখানে প্রতিটি কণ্ঠস্বর গুরুত্বপূর্ণ এবং আপনার ধারণাগুলো বাস্তব প্রভাব তৈরি করতে পারে। নিজের ভেতর বেড়ে ওঠার জন্য আছে যেন - একটি দল, একটি লক্ষ্য, এবং একটি আনন্দদায়ক অংশ, যা সুখী হৃদয় বৃদ্ধি করাবে।
            </p>
          </div>

          {/* Right Image Grid Section */}
          <div className="md:w-1/2 flex-grow-0 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full aspect-square rounded-3xl overflow-hidden">
                <img src={image} alt="img1" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square rounded-3xl overflow-hidden">
                <img src={image1} alt="img2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square rounded-3xl overflow-hidden">
                <img src={image2} alt="img3" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-square rounded-3xl overflow-hidden">
                <img src={image3} alt="img4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Positions Section */}
      <div className="bg-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4446a8]">
              ওপেন পজিশনসমূহ
            </h2>
            <button
              className="bg-indigo-700 text-white text-sm font-semibold py-2 px-5 rounded-full hover:bg-[#393b90] transition-colors duration-300 w-full sm:w-auto"
              onClick={() => handleButtonClick('all')}
            >
              সব দেখুন
            </button>
          </div>

          {/* Positions List */}
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex-1 text-left">
                  <h3 className="text-lg md:text-xl font-bold text-[#4446a8]">{position.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{position.location} / {position.type}</p>
                </div>
                <button
                  className="bg-indigo-700 text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-[#393b90] transition-colors duration-300 flex items-center justify-center"
                  onClick={() => handleButtonClick(position.route)}
                >
                  জব ডিটেইলস দেখুন
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
