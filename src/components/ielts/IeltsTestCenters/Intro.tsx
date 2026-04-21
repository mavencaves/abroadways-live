// src/components/IeltsCentersPage.tsx
import React from "react";

const Intro: React.FC = () => {
  const [selectedCity, setSelectedCity] = React.useState("");

  const dhakaCenters = [
    {
      address: "House # 5, Road # 2, Gulshan 1, Dhaka - 1212, Bangladesh",
      contacts: ["+৮৮০৯৬৬৬৭৭৮৬৬৬", "+৮৮০৯৬৬৬৭৭৮৬৬৭"],
    },
    {
      address:
        "Level-2, Team Computer Centre, 68/D Pragati Sarani, 100 Feet Road, Dhaka 1212, Bangladesh",
      contacts: ["+৮৮০১৯৫৪০১৩৭৭৬", "+৮৮০১৭৮২৩০৬১৫২"],
    },
    {
      address: "বাড়ি নং-৪৮, ফ্ল্যাট নং-২বি/১, রোড নং-১৬, উত্তরা, ঢাকা।",
      contacts: ["+৮৮০১৮১৬৫০১২৬৬"],
    },
  ];

  const renderContactNumbers = (contacts: string[]) => (
    <div className="flex flex-col">
      {contacts.map((contact, index) => (
        <span key={index}>{contact}</span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 font-sans">
      {/* Breadcrumb & Intro */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
        <div className="text-sm text-gray-500 mb-2">
          <span className="font-bold">সফলতা টুটোরিয়াল</span> / পরীক্ষা-সমূহ / IELTS / সেন্টার
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          বাংলাদেশে IELTS টেস্ট সেন্টার
        </h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>আপডেট করা হয়েছে ২১ এপ্রিল, ২০২৩</span>
        </div>
        <p className="text-gray-700 mb-4">
          IELTS টেস্ট সেন্টারগুলোতে প্রথাগত (Paper-based) এবং কম্পিউটারভিত্তিক (Computer-based)
          উভয় ধরনের IELTS পরীক্ষা অনুষ্ঠিত হয়। IELTS IDP বাংলাদেশে এই ৬টি শহরে IELTS টেস্ট সেন্টার রয়েছে।
        </p>
        <p className="text-gray-700">
          আপনি আইডিপি বাংলাদেশ ওয়েবসাইট ব্যবহার করে অনলাইনে IELTS পরীক্ষা বুক করতে পারেন। অনলাইন
          আবেদন করার ফাইল আপনাকে নিকটস্থ IDP শাখায় যেতে হয়।
        </p>
      </div>

      {/* Date & Center Selection */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ১. ২০২৩ সালে বাংলাদেশে IELTS পরীক্ষা তারিখ এবং কেন্দ্রসমূহ
        </h2>
        <p className="text-gray-700 mb-4">
          IELTS পরীক্ষার জন্য কম্পিউটারভিত্তিক এবং কম্পিউটারভিত্তিক উভয় টেস্ট সেন্টার রয়েছে। IELTS
          IDP Bangladesh এই ৬টি শহরে পরীক্ষার সেন্টার আছে।
        </p>
        <p className="text-gray-700 mb-4">
          সফলতাতে অবস্থিত IELTS সেন্টারগুলোর একটি তালিকা দেখে এবং আপনার নিকটতম সেন্টারটি খুঁজে বের করুন।
        </p>

        {/* Dropdown */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">IELTS টেস্ট সেন্টার খোঁজা</h3>
          <label
            htmlFor="city-select"
            className="block text-blue-700 font-medium mb-2"
          >
            আপনার শহর নির্বাচন করুন
          </label>
          <div className="relative">
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">আপনার শহর নির্বাচন করুন</option>
              <option value="dhaka">ঢাকা</option>
              <option value="chittagong">চট্টগ্রাম</option>
              <option value="rajshahi">রাজশাহী</option>
              <option value="sylhet">সিলেট</option>
              <option value="khulna">খুলনা</option>
              <option value="comilla">কুমিল্লা</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <p className="text-gray-700">
          নিচের আপনার নিকটতম টেস্ট সেন্টার এবং পরীক্ষার তারিখ দেখতে আরও জানুন।
        </p>
      </div>

      {/* Center Details */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ২. প্রধান শহরগুলিতে IELTS টেস্ট সেন্টারসমূহ
        </h2>
        <p className="text-gray-700 mb-4">
          IELTS পরীক্ষার সব টেস্ট সেন্টার দেশের প্রধান শহরগুলোতে অবস্থিত। যদি আপনার কোনো জিজ্ঞাসা থাকে,
          তাহলে আপনি আপনার নিকটতম সেন্টার দেখাযোগাযোগ করতে পারেন।
        </p>
        <p className="text-gray-700 mb-4">
          IELTS পরীক্ষার সেন্টারগুলো রবিবার থেকে বৃহস্পতিবার সকাল ১০:০০ থেকে বিকাল ৪:০০ পর্যন্ত খোলা থাকে।
          আপনার কোনো জিজ্ঞাসা থাকলে, আপনি ইমেইলও পাঠাতে পারেন:{" "}
          <a
            href="mailto:info@idp.com"
            className="text-blue-600 hover:underline"
          >
            info@idp.com
          </a>
        </p>
        <p className="text-gray-700 mb-4">
          বাংলাদেশে প্রধান প্রধান IELTS পরীক্ষার সেন্টারগুলোর বিস্তারিত ঠিকানা ও যোগাযোগের বিস্তারিত নিচে
          দেওয়া হলো, আপনার সুবিধার জন্য।
        </p>

        {/* Dhaka Centers */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            IDP IELTS ঢাকা সেন্টার
          </h3>
          <div className="border border-gray-300 rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    ঠিকানা
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    যোগাযোগের নম্বর
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dhakaCenters.map((center, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {center.address}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {renderContactNumbers(center.contacts)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
