import React from "react";

// Banner Component
const Banner: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-8 font-sans antialiased">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#4446a8] leading-tight mb-4">
            আপনার স্বপ্নের মাস্টার্স ডিগ্রি<br />যুক্তরাষ্ট্রে অর্জন করুন
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 max-w-md mx-auto md:mx-0">
            যুক্তরাষ্ট্রে মাস্টার্স ডিগ্রির মাধ্যমে আপনার আকাঙ্ক্ষিত লক্ষ্যে পৌঁছাতে পারেন। বিশ্বমানের বিশ্ববিদ্যালয়, লাইব্রেরিসহ কোর্স এবং বৈশ্বিক সুযোগগুলো অন্বেষণ করুন যা আপনার ভবিষ্যতের সম্ভাবনা বাড়িয়ে দেবে।
          </p>
          <button className="bg-[#4446a8] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#393b90] transition-colors duration-300">
            আপনার ভর্তি যোগ্যতা যাচাই করুন
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="../../../public/images/Bristy/20943475.jpg" 
            alt="Study in USA illustration" 
            className="w-full h-auto max-w-md md:max-w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

// Stats Component
const Stats: React.FC = () => {
  const stats = [
    { value: "৯২%", label: "প্লেসমেন্ট রেট" },
    { value: "৳৯০কে", label: "গড় বেতন" },
    { value: "৩ বছর", label: "ফ্লেক্সিবল ভিসা" },
  ];

  return (
    <div className="bg-white p-4 sm:p-8 font-sans antialiased flex justify-center">
      <div className="bg-[#4446a8] text-white p-6 sm:p-8 rounded-3xl shadow-lg w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-light">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// MavecaveActivities Component
const MavecaveActivities: React.FC = () => {
 const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4446a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l-4 4m0 0l4 4m-4-4h12M12 10V6a2 2 0 012-2h2a2 2 0 012 2v2m-6-4l-3 3-3-3" />
        </svg>
      ),
      title: "আমাদের শীর্ষ বিশ্ববিদ্যালয় অংশীদারদের কাছে আবেদন করুন",
      description: "আমাদের শীর্ষ বিশ্ববিদ্যালয় অংশীদারদের কাছে আবেদন করুন এবং এক্সক্লুসিভ ভর্তি সহায়তা, স্কলারশিপ ও রিসার্চ সুবিধা নিন, যা আপনাকে বিশ্বজুড়ে শিক্ষার্থীর প্রতিদ্বন্দিতার মধ্যে সুযোগ নিশ্চিত করতে সহায়তা করবে।"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4446a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M14 10c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6zm-2 0a4 4 0 11-8 0 4 4 0 018 0zm-8-4a1 1 0 100 2 1 1 0 000-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 10h-2M18 14h-2M18 18h-2" />
        </svg>
      ),
      title: "বাংলাদেশে আপনার প্রথম সেমিস্টার থেকে শুরু করুন",
      description: "বাংলাদেশে আপনার প্রথম সেমিস্টার করুন - নতুন শিক্ষার্থীরা জন্য এই বিশ্ববিদ্যালয়গুলো হয়ে সহায়তা করে যাতে আপনারা করে, তাদের সময় বাঁচাতে পারেন, রিফান্ড এর গ্যারান্টিও থাকছে এবং নতুন প্রোগ্রামিংও শিখবেন।"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4446a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m8-11a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M21 17h-2a2 2 0 00-2-2h-2a2 2 0 00-2 2h-2" />
        </svg>
      ),
      title: "যুক্তরাষ্ট্রে অন-ক্যাম্পাস মাস্টার্স সম্পন্ন করুন",
      description: "যুক্তরাষ্ট্রে অন-ক্যাম্পাস মাস্টার্স সম্পন্ন করার এক্সক্লুসিভ ও ব্যক্তিগত ইনভাইটেশন নিয়ে ক্যাম্পাসে নিজেকে এক্সেস করার সুযোগ গ্রহণ করুন।"
    },
  ];

  const investors = [
    "https://i.ibb.co.com/S43fWN48/Harvard-University-coat-of-arms-svg.png",
    "https://i.ibb.co.com/KxMg1z2W/images-3.png",
    "https://i.ibb.co.com/SDbb737t/images-2.png",
    "https://i.ibb.co.com/8nnKtRB7/sequoia-capital-logo-png-seeklogo-432571.png",
  ];

  return (
    <div className="bg-white min-h-screen p-4 sm:p-8 font-sans antialiased text-center">
      <div className="max-w-4xl mx-auto">
        {/* Main Section Title and Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#4446a8] mb-4">
          Abroadways সুবিধা কীভাবে কাজ করে?
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-8 max-w-3xl mx-auto">
          Abroadways Advantage আপনাকে দেয় ব্যক্তিগত নির্দেশনা, বিশেষজ্ঞ পরামর্শ এবং বাছাইকৃত রিসোর্স, যা আপনাকে IELTS এবং PTE সহ সকল পরীক্ষায় উচ্চতর স্কোর সহায়তা করে এবং এতে গ্রামাটিক ত্রুটি, ফিডব্যাক এবং স্ট্রাটেজি লেখা, যা আপনার দক্ষতা ও আত্মবিশ্বাস দ্রুত বাড়াতে সাহায্য করবে।
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#f0f3f6] p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="bg-[#4446a8] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#393b90] transition-colors duration-300 mb-12">
          এখানেই শুরু করুন
        </button>

        {/* Investors Section */}
        <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-6">
          বিশ্বজুড়ে বিনিয়োগকারীদের বিশ্বাস অর্জন করেছে
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
          {investors.map((logo, index) => (
            <img key={index} src={logo} alt={`Investor Logo ${index + 1}`} className="h-12 md:h-16 lg:h-20 w-auto" />
          ))}
        </div>
      </div>
    </div>
  );
};

// UniversityCard Component
interface Program {
  university: string;
  logo: string;
  programName: string;
  location: string;
  onlineDuration: string;
  onCampusDuration: string;
  onlineTuition: string;
  onCampusTuition: string;
}

const UniversityCard: React.FC = () => {
  const programs: Program[] = [
    {
      university: "COLORADO STATE UNIVERSITY",
      logo: "https://i.ibb.co.com/RGbs6wG6/CSU-Rams-Head-Symbol-357-768x768.jpg",
      programName: "কম্পিউটার ইনফরমেশন সিস্টেমে মাস্টার্স",
      location: "ফোর্ট কলিন্স, কলোরাডো",
      onlineDuration: "৬ মাস",
      onCampusDuration: "১ বছর",
      onlineTuition: "৬,৭১,১০০",
      onCampusTuition: "১৪,১৯,১০০",
    },
    {
      university: "UNIVERSITY OF DELAWARE",
      logo: "https://i.ibb.co.com/zhcHHgq6/images-1.png",
      programName: "ফাইন্যান্সে মাস্টার অব সায়েন্স",
      location: "নিউয়ার্ক, ডেলাওয়্যার, মার্কিন যুক্তরাষ্ট্র",
      onlineDuration: "৬ মাস",
      onCampusDuration: "১ বছর",
      onlineTuition: "৬,৬৩,৫০০",
      onCampusTuition: "১৭,০০,৩০০",
    },
    {
      university: "UNIVERSITY OF PITTSBURGH",
      logo: "https://i.ibb.co.com/8gG6F7sR/images-19.png",
      programName: "বিজনেস অ্যানালিটিক্সে মাস্টার্স",
      location: "পিটসবার্গ, পেনসিলভানিয়া, মার্কিন যুক্তরাষ্ট্র",
      onlineDuration: "৬ মাস",
      onCampusDuration: "১ বছর",
      onlineTuition: "৫,০০,০০০",
      onCampusTuition: "১৫,০০,০০০",
    },
    {
      university: "NORTHEASTERN UNIVERSITY",
      logo: "https://i.ibb.co.com/6zdKVq1/University-of-Delaware-1743.jpg",
      programName: "কম্পিউটার সায়েন্সে মাস্টার অব সায়েন্স",
      location: "বস্টন, ম্যাসাচুসেটস, মার্কিন যুক্তরাষ্ট্র",
      onlineDuration: "৬ মাস",
      onCampusDuration: "১ বছর",
      onlineTuition: "৫,৫০,০০০",
      onCampusTuition: "১৬,৫০,০০০",
    },
  ];

  return (
    <div className="p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-2">
          শীর্ষস্থানীয় মার্কিন বিশ্ববিদ্যালয়গুলোর STEM প্রোগ্রামসমূহ
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {programs.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <img
                src={p.logo}
                alt={`${p.university} logo`}
                className="h-16 w-16 mr-4 rounded-full"
              />
              <h3 className="text-lg font-semibold text-[#4446a8]">
                {p.university}
              </h3>
            </div>
            <hr className="my-4" />
            <h4 className="text-base font-bold text-gray-800 mb-2">
              {p.programName}
            </h4>
            <p className="text-sm text-gray-500 mb-4">{p.location}</p>
            <p className="text-xs text-gray-500 mb-2">
              অনলাইন সময়কাল: {p.onlineDuration}
            </p>
            <p className="text-xs text-gray-500 mb-2">
              অন-ক্যাম্পাস সময়কাল: {p.onCampusDuration}
            </p>
            <p className="text-xs text-gray-500 mb-2">
              অনলাইন টিউশন ফি: {p.onlineTuition}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              অন-ক্যাম্পাস টিউশন ফি: {p.onCampusTuition}
            </p>
            <button className="bg-[#4446a8] text-white py-2 px-4 rounded-full hover:bg-[#393b90] transition">
              আরও জানুন
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Page Component
const FirstPart: React.FC = () => {
  return (
    <div>
      <Banner />
      <Stats />
      <MavecaveActivities />
      <UniversityCard />
    </div>
  );
};

export default FirstPart;

