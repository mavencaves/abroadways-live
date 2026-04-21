import React, { useState } from "react";
import bannerImage from "../../../public/images/Bristy/fotos-Xdh_J4xW1QE-unsplash.jpg";
import journeyImage from "../../../public/images/Bristy/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg";

const FirstPart: React.FC = () => {
  const stats = [
    { value: "৪.৩/৫", label: "৯ হাজার+ রিভিউ" },
    { value: "৪ সপ্তাহ", label: "কোর্সের মেয়াদ" },
    { value: "ফ্লেক্সিবল শিডিউল", label: "সপ্তাহে ২০ ঘণ্টা, নিজের গতিতে শিখুন" },
    { value: "১,৫০০+", label: "৭+ ব্যান্ড স্কোর" },
  ];

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#4446a8] mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.696h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.724c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.696l1.07-3.292z" />
        </svg>
      ),
      title: "৫০০০+ ৫-তারকা রিভিউ",
      description: "বাংলাদেশের সর্বাধিক উচ্চ-রেটেড অনলাইন IELTS কোর্স",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#4446a8] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l2-2m2 2l2-2m2-2l2-2m-2-2l-2 2" />
        </svg>
      ),
      title: "ব্যান্ড-জাম্পের নিশ্চয়তা",
      description: "আমাদের অনলাইন IELTS মক টেস্ট অনুশীলনের মাধ্যমে ৮০% শিক্ষার্থী আগের থেকে ব্যান্ড ১+ উন্নত করেছে।",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#4446a8] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "নমনীয় ব্যাচ সময়সূচি",
      description: "কার্যরত পেশাজীবীদের জন্য সাপ্তাহিক ছুটির দিন ক্লাস",
    },
  ];

  const [formState, setFormState] = useState({
    whyPrepare: "",
    yourRole: "",
    whenIELTS: "",
  });

  const handleButtonClick = (category: keyof typeof formState, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [category]: value,
    }));
  };

  const isButtonActive = (category: keyof typeof formState, value: string) =>
    formState[category] === value;

  return (
    <div className="font-sans antialiased">
      {/* Banner Section */}
      <div className="p-4 sm:p-8 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 flex flex-col md:flex-row-reverse items-center">
          {/* Right Image */}
          <div className="md:w-1/2 p-4 md:p-8 flex justify-center">
            <img src={bannerImage} alt="Students studying" className="w-full h-auto rounded-xl object-cover" />
          </div>
          {/* Left Content */}
          <div className="md:w-1/2 p-6 md:p-12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4446a8] leading-tight mb-6">
              ৪-সপ্তাহের আইইএলটিএস <br /> কোর্স ব্যান্ড জাম্প <br /> গ্যারান্টিসহ
            </h2>
            <div className="space-y-4 text-gray-700 text-left max-w-sm mx-auto md:mx-0 mb-8">
              {["দৈনিক লাইভ ক্লাস", "সার্টিফায়েড IELTS ট্রেইনার", "১০০+ IELTS মক টেস্ট প্র্যাকটিস"].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4446a8] flex-shrink-0 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#4446a8] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#393b90] transition-colors duration-300">
              ফ্রি ইন্ট্রোডাকশন অফার
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white p-4 sm:p-8 flex justify-center">
        <div className="bg-[#4446a8] text-white p-6 sm:p-8 rounded-3xl shadow-lg w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{stat.value}</span>
                <span className="text-xs sm:text-sm font-light">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Mavencave Section */}
      <div className="bg-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4446a8] mb-4">
            আপনার IELTS প্রস্তুতির জন্য মেইভেনকেড কেন বেছে নেবেন?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-12 max-w-4xl mx-auto">
            মেইভেনকেড আপনাকে প্রদান করে বিশেষজ্ঞ পরামর্শ, ব্যক্তিগতভাবে পরিচালনার পরিবেশ এবং হালনাগাদ রিসোর্স, যা আপনাকে IELTS পরীক্ষায় সাফল্য অর্জন সহায়তা করবে।
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-4 rounded-lg">
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start IELTS Journey Section */}
      <div className="bg-white py-16 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-stretch max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl">
          {/* Left Image */}
          <div className="hidden md:block md:w-1/2">
            <img src={journeyImage} alt="Students taking notes" className="h-full w-full object-cover" />
          </div>
          {/* Right Form */}
          <div className="md:w-1/2 p-6 md:p-12 bg-white flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] text-center mb-6">আপনার IELTS যাত্রা শুরু করুন</h2>

            {/* Why Prepare */}
            <div className="mb-6">
              <p className="text-base font-semibold text-indigo-700 mb-3">কেন আপনি IELTS প্রস্তুতি নিতে চান?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["ওয়ার্ক ভিসা/পিআর", "বিদেশে পড়াশোনা", "এখনও সিদ্ধান্ত নেননি"].map((option) => (
                  <button
                    key={option}
                    className={`p-3 rounded-lg border border-gray-300 transition-colors duration-200 ${
                      isButtonActive("whyPrepare", option) ? "bg-white shadow-md border-transparent" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => handleButtonClick("whyPrepare", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Role */}
            <div className="mb-6">
              <p className="text-base font-semibold text-indigo-700 mb-3">আপনি কী করেন?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["শিক্ষার্থী", "কর্মরত", "সদ্য স্নাতক"].map((role) => (
                  <button
                    key={role}
                    className={`p-3 rounded-lg border border-gray-300 transition-colors duration-200 ${
                      isButtonActive("yourRole", role) ? "bg-white shadow-md border-transparent" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => handleButtonClick("yourRole", role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* When IELTS */}
            <div className="mb-6">
              <p className="text-base font-semibold text-indigo-700 mb-3">কবে IELTS দিচ্ছেন?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["৩ মাসের মধ্যে", "৩-৬ মাসের মধ্যে", "ইতিমধ্যেই বুক করা"].map((time) => (
                  <button
                    key={time}
                    className={`p-3 rounded-lg border border-gray-300 transition-colors duration-200 ${
                      isButtonActive("whenIELTS", time) ? "bg-white shadow-md border-transparent" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => handleButtonClick("whenIELTS", time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-[#393b90] transition-colors duration-300">
                পরবর্তী
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
