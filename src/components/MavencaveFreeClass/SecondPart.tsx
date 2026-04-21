import React, { useState } from "react";

const SecondPart: React.FC = () => {
  const instructors = [
    {
      name: "তারেক মাহমুদ",
      experience: "১২ বছরের অভিজ্ঞতা",
      students: "২০০০+ শিক্ষার্থী সমাপ্ত",
      img: "https://i.ibb.co.com/whbFDCLG/dr-terrence-underwood-Io0e-EAf-SMj-Y-unsplash.jpg",
    },
    {
      name: "সামিরা হোসেন",
      experience: "৮ বছরের অভিজ্ঞতা",
      students: "১৮০০+ শিক্ষার্থী সমাপ্ত",
      img: "https://i.ibb.co.com/99mzWVK1/icons8-team-Fc-Lyt7l-W5wg-unsplash-1.jpg",
    },
    {
      name: "ফারিয়া হক",
      experience: "৭ বছরের অভিজ্ঞতা",
      students: "১২০০+ শিক্ষার্থী সমাপ্ত",
      img: "https://i.ibb.co.com/xtPhGsfS/christina-wocintechchat-com-c-mg-Suxqpz-A-unsplash.jpg",
    },
  ];

  const faqItems = [
    {
      question: "অনলাইনে IELTS এর জন্য কিভাবে প্রস্তুতি নিতে পারি?",
      answer:
        "অনলাইনে প্রস্তুতি নিতে Abroadways এর মতো প্ল্যাটফর্ম বেছে নিতে পারেন, যা আপনাকে লাইভ ক্লাস, মক টেস্ট এবং বিশেষজ্ঞ প্রশিক্ষকের মাধ্যমে সহায়তা করবে।",
    },
    {
      question: "আমি কি নিজে নিজেই IELTS এর জন্য প্রস্তুতি নিতে পারি?",
      answer:
        "হ্যাঁ, নিজে নিজেই প্রস্তুতি নেওয়া সম্ভব। তবে, সঠিক গাইডলাইন, পর্যাপ্ত অনুশীলন এবং নিয়মিত ফিডব্যাক না পেলে ভালো স্কোর করা কঠিন হতে পারে।",
    },
    {
      question: "IELTS এর জন্য কতবার পরীক্ষা দেওয়া যায়?",
      answer:
        "IELTS পরীক্ষা যতবার ইচ্ছা ততবার দেওয়া যায়, এর কোনো নির্দিষ্ট সীমা নেই। আপনি আপনার স্কোর উন্নত করতে যতবার খুশি ততবার পরীক্ষা দিতে পারেন।",
    },
    {
      question: "আমি কি প্রথমবারেই IELTS পাস করতে পারি?",
      answer:
        "প্রথমবারেই IELTS-এ ভালো স্কোর করা নির্ভর করে আপনার প্রস্তুতির ওপর। সঠিক পরিকল্পনা, নিয়মিত অনুশীলন এবং বিশেষজ্ঞের পরামর্শ নিয়ে প্রস্তুতি নিলে প্রথমবারেই ভালো স্কোর করা সম্ভব।",
    },
    {
      question: "IELTS কি খুব কঠিন?",
      answer:
        "IELTS পরীক্ষা কঠিন নয়, তবে এর জন্য সঠিক প্রস্তুতি এবং কৌশল প্রয়োজন। নিয়মিত অনুশীলন এবং নির্দিষ্ট কৌশল অনুসরণ করলে এটি সহজ মনে হবে।",
    },
    {
      question: "আমি কি ১ মাসে IELTS এর জন্য প্রস্তুতি নিতে পারি?",
      answer:
        "যদি আপনার বর্তমান ইংরেজি দক্ষতা ভালো থাকে, তাহলে ১ মাসে প্রস্তুতি নেওয়া সম্ভব। তবে, ভালো স্কোরের জন্য একটি দীর্ঘমেয়াদী পরিকল্পনা সাধারণত বেশি কার্যকর।",
    },
    {
      question: "IELTS 7.0 কি সহজ?",
      answer:
        "IELTS 7.0 স্কোরকে একটি ভালো স্কোর ধরা হয়। এটি সহজ বা কঠিন হওয়া নির্ভর করে আপনার বর্তমান ইংরেজি দক্ষতার উপর। সঠিক প্রস্তুতির মাধ্যমে এটি অর্জন করা সম্ভব।",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans antialiased">
      {/* Abroadways Coaches Section */}
      <div className="py-12 px-4 md:px-12 lg:px-24">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-700 mb-4">
          বাংলাদেশের শীর্ষ IELTS প্রশিক্ষকদের সাথে ফ্রি মাষ্টারক্লাসে অংশগ্রহণ করুন।
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm md:text-base">
          IELTS প্রস্তুতির সমস্যায় পড়েছেন? ২০+ বছরের অভিজ্ঞ IELTS বিশেষজ্ঞদের মাধ্যমে প্রশিক্ষণ নিন, যারা সহস্রাধিক শিক্ষার্থীকে IELTS পরীক্ষার জন্য প্রস্তুত করতে সাহায্য করেছেন। তাদের একজনের Band ৯+ স্কোর অর্জনের সমৃদ্ধ অভিজ্ঞতা রয়েছে।
        </p>

        {/* Instructor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((ins, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group w-[280px] md:w-[300px] lg:w-[320px] mx-auto"
            >
              <img
                src={ins.img}
                alt={ins.name}
                className="w-full h-64 md:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">{ins.name}</h3>
                <p className="text-sm">{ins.experience}</p>
                <p className="text-sm">{ins.students}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12 text-center">
          <div className="px-6 py-3 border rounded-full shadow-sm text-sm md:text-base">
            ১। ৩০ মিনিটের ফ্রি ক্লাসে অংশগ্রহণ করুন
          </div>
          <div className="px-6 py-3 border rounded-full shadow-sm text-sm md:text-base">
            ২। Band Predictor টেস্ট দিন
          </div>
          <div className="px-6 py-3 border rounded-full shadow-sm text-sm md:text-base">
            ৩। ইন্সট্রাক্টরের নির্দেশনা পান
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg">
            ফ্রি মাষ্টারক্লাসে অংশগ্রহণ
          </button>
        </div>
      </div>

      {/* Preparation Materials Section */}
      <div className="py-16 px-4 sm:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4446a8] mb-4">
            IELTS প্রস্তুতির উপকরণ অন্বেষণ করুন
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-12 max-w-4xl mx-auto">
            "IELTS Preparation Material" আপনাকে একটি নিশ্চিত ডিসকাউন্টের সুযোগ প্রদান দেয় যা আপনার IELTS ব্যান্ডকে আরো শক্তিশালী করে। এটি গ্রামাটিক্যাল টেস্ট থেকে শুরু করে বিশেষজ্ঞদের টিপস পর্যন্ত--সবকিছুই আপনি একত্রিত অবস্থায় পাবেন যা আপনার দক্ষতা উন্নত করে এবং আত্মবিশ্বাস বৃদ্ধি করতে সাহায্য করবে।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IELTS Mock Test */}
            <div className="bg-[#e8e7fa] p-6 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start text-left">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
                <h3 className="text-xl font-bold text-[#4446a8] mb-4">IELTS মক টেস্ট</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-center">
                    <span className="text-[#4446a8] mr-2">✔</span>
                    ১০০+ মক টেস্ট
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4446a8] mr-2">✔</span>
                    অনলাইন ব্যান্ড প্রেডিকশন
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4446a8] mr-2">✔</span>
                    পূর্ণাঙ্গ ফিডব্যাক
                  </li>
                </ul>
                <button className="bg-[#4446a8] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#393b90] transition-colors duration-300">
                  মক টেস্ট চান
                </button>
              </div>
              <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                <img
                  src="https://i.ibb.co.com/gLgsQNfT/trnava-university-BEEyeib-am8-unsplash.jpg"
                  alt="Stack of books"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* IELTS Resources */}
            <div className="bg-[#e8e7fa] p-6 rounded-3xl flex flex-col sm:flex-row-reverse items-center sm:items-start text-left">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0 pl-0 sm:pl-4">
                <h3 className="text-xl font-bold text-[#4446a8] mb-4">IELTS রিসোর্স</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-center">
                    <span className="text-[#4446a8] mr-2">✔</span>
                    সম্পূর্ণ স্টাডি ম্যাটেরিয়াল
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4446a8] mr-2">✔</span>
                    ২০+ ঘন্টার ভিডিও লেকচার
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4446a8] mr-2">✔</span>
                    পূর্ণাঙ্গ ফিডব্যাক
                  </li>
                </ul>
                <button className="bg-[#4446a8] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#393b90] transition-colors duration-300">
                  IELTS রিসোর্স চান
                </button>
              </div>
              <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
                <img
                  src="https://i.ibb.co.com/ZRvkNHy4/kimberly-farmer-l-Uaa-KCUANVI-unsplash.jpg"
                  alt="A library with books"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4446a8] mb-4">
            মনে প্রশ্ন এসেছে? আপনি একা নন! নিচের প্রশ্নগুলো থেকে বেছে নিন আপনার <br className="hidden md:block" />
            উত্তর! অথবা আমাদের সাথে যোগাযোগ করুন!
          </h2>

          <div className="space-y-4 text-left">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#e8e7fa] rounded-lg shadow-md transition-all duration-300"
              >
                <button
                  className="w-full p-4 flex justify-between items-center focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-gray-700 text-sm md:text-base font-semibold">
                    {item.question}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-[#4446a8] flex-shrink-0 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-600 border-t border-gray-300">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;

