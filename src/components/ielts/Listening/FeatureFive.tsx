import React from "react";

const FeatureFive: React.FC = () => {
  return (
    <div className="bg-[#f0f3f6] p-4 sm:p-8 font-sans antialiased space-y-10">
      
      {/* Feature 7 */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">
            ৭. শীর্ষ ৩টি IELTS লিসেনিং অনুশীলন টেস্ট বই
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            IELTS প্র্যাকটিসের জন্য বই খুবই গুরুত্বপূর্ণ কারণ এতে বাস্তবসম্মত বিষয়বস্তু যেমন, আসল পরীক্ষার প্রশ্ন, সময়কাল, এবং বিতর্কিত বাক্য এবং প্যারাল্যাঙ্গুয়েজ স্টাইল থেকে প্রশ্নসহ বিস্তারিত তথ্য নিশ্চিত করে বাস্তবিকভাবে আসল পরীক্ষার মতো পরিবেশ তৈরি করে। আর যা শুধুমাত্র একজন দক্ষ শিক্ষকের সাথে সম্ভব। যারা স্বশিক্ষার্থী, তাদের জন্য এমন বই খুবই গুরুত্বপূর্ণ।
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            নিচে দেওয়া হলো শীর্ষ ৩টি IELTS লিসেনিং অনুশীলন টেস্ট বই, যা IELTS লিসেনিং পরীক্ষার জন্য কার্যকরভাবে প্রস্তুতি নিতে সাহায্য করবে:
          </p>

          {/* Book 1 */}
          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
            1. The Official Cambridge Guide to IELTS
          </h3>
          <div className="bg-[#e6e8ff] p-4 rounded-lg mb-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li className="text-sm">
                কেন এটি সেরা: এটি IELTS পরীক্ষার নির্মাতাদের দ্বারা তৈরি, যা উন্নতমানের প্রামাণিক অনুশীলন নিশ্চিত করে। এটি একাধিক প্রামাণিক Listening অনুশীলন টেস্ট প্রদান করে যা আপনার পরীক্ষার ফরম্যাটের সাথে মিলে যায়, ফলে আপনি পরীক্ষার পরিবেশ এবং সময়সীমা বিশেষভাবে আয়ত্ত করতে পারেন।
              </li>
              <li className="text-sm">
                বোনাস: এটিতে CD-সহ একটি অনলাইন রিসোর্স এবং অনুশীলন কুইজ রয়েছে।
              </li>
            </ul>
          </div>

          {/* Book 2 */}
          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
            2. Target Band 7: IELTS Listening Practice
          </h3>
          <div className="bg-[#e6e8ff] p-4 rounded-lg mb-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li className="text-sm">
                কেন এটি সেরা: বিশেষত টার্গেট ব্যান্ড ৭ এর স্কোর লক্ষ্য রাখা হয়, এই বইটি বিস্তারিত Listening কৌশল এবং প্রাকটিস টেস্ট উভয়ই প্রদান করে। প্রতিটি প্রশ্নের সাথে ব্যাখ্যা প্রদান করে সমাধান দ্রুত বুঝতে সাহায্য করে।
              </li>
              <li className="text-sm">
                বোনাস: প্রতিটি অধ্যায় আপনাকে পার্ট ১ এবং পার্ট ২ এর জন্য আরও কার্যকর টিপস এবং কৌশল সরবরাহ করে।
              </li>
            </ul>
          </div>

          {/* Book 3 */}
          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
            3. Barron's IELTS Superpack
          </h3>
          <div className="bg-[#e6e8ff] p-4 rounded-lg mb-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li className="text-sm">
                কেন এটি সেরা: Barron’s Superpack-এ ৫ এরও বেশি পূর্ণ-দৈর্ঘ্যের IELTS Listening টেস্ট এবং বিস্তারিত ব্যাখ্যা সহ ভিডিও টিউটোরিয়াল এবং উদাহরণ রয়েছে। এটি IELTS পরীক্ষার জন্য প্রয়োজনীয় বিভিন্ন ধরনের উপাদানের জন্য প্রস্তুতি নিতে উপযুক্ত।
              </li>
              <li className="text-sm">
                বোনাস: অনলাইন প্ল্যাটফর্মে অতিরিক্ত অনুশীলন এবং সময়সীমা ট্র্যাকিং বিকল্পের সাথে।
              </li>
            </ul>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm mt-6">
            এই বইগুলো শুধু উন্নতমানের Listening প্র্যাকটিসই দেয় না, বরং লিসেনিং টেস্টে আপনার দুর্বলতাগুলি শনাক্ত করতে এবং সেগুলোতে প্রত্যাশিত আরও কার্যকর করে আপনাকে আত্মবিশ্বাসের সাথে পরীক্ষার জন্য প্রস্তুত হতে সাহায্য করে।
          </p>
        </div>
      </div>

      {/* Feature 8 */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] text-center mb-6">
            ৮. IELTS লিসেনিং প্র্যাকটিস টেস্টের জন্য সেরা শব্দভান্ডারের তালিকা
          </h2>

          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-[#4446a8]">
              <thead className="bg-[#4446a8]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Vocabulary
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Education and Learning</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Lecture, Assignment, Semester, Scholarship, Curriculum</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Environment and Nature</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Climate change, Pollution, Conservation, Habitat, Sustainability</td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Health and Medicine</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Diagnosis, Treatment, Medication, Nutrition, Fitness</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Science and Technology</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Innovation, Research, Data analysis, Engineering, Artificial intelligence</td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Social Issues</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Inequality, Unemployment, Discrimination, Community, Poverty</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Transport</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Commuter, Public transport, Traffic congestion, Fare, Route</td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Travel and Tourism</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Itinerary, Accommodation, Tourist attraction, Reservation, Visa</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Work and Careers</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Promotion, Interview, Job vacancy, Salary, Entrepreneur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Feature 9 */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">
            ৯. IELTS Listening টিপস ও ট্রিকস
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            IELTS Listening শুধুমাত্র প্র্যাকটিসের মাধ্যমেই নিখুঁত করা যায় না। নমুনা অডিও এবং বা বিভিন্ন প্রশ্নের ধরন থেকে প্রস্তুতি নেওয়া ছাড়া পরীক্ষার জন্য প্রস্তুতি কঠিন।
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            আপনার IELTS Listening প্রস্তুতিকে সম্পূর্ণ করুন!
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            আমাদের IELTS Listening টিপস ব্যবহার করে আপনি একটি প্ল্যাটফর্ম লেখার অভ্যাস তৈরি করতে পারবেন, যা আপনাকে IELTS পাশ করতে সাহায্য করবে এবং আপনার ভাষা অর্জন ক্ষমতা উন্নত করবে।
          </p>

          <h3 className="text-lg md:text-xl font-bold text-[#4446a8] mt-6 mb-4">IELTS লিসেনিং প্রস্তুতির টিপস</h3>
          <ul className="list-none space-y-4">
            {[
              "পরীক্ষার ফরম্যাটের সাথে পরিচিত হোন: IELTS Listening পরীক্ষার চারটি সেকশন, ৪০টি প্রশ্ন এবং ৫টি প্রশ্নের ধরন বুঝে প্রতিটি অংশে আত্মবিশ্বাসের সঙ্গে মোকাবিলা করুন।",
              "বিভিন্ন উচ্চারণসহ অডিও শোনার অভ্যাস করুন: ব্রিটিশ, আমেরিকান, অস্ট্রেলিয়ান এবং অন্যান্য উচ্চারণের সঙ্গে পরিচিতি পেলে বিভিন্ন ধরণের উচ্চারণ ও স্বর সনাক্ত করতে সুবিধা হবে, যা পরীক্ষার অডিওতেও ব্যবহৃত হয়।",
              "সংলাপের মাধ্যমে ফ্লুয়েন্স তৈরি করুন: ইংরেজি কথোপকথনে অংশগ্রহণ করুন যাতে বোঝাপড়া, সাবলীলতা এবং উচ্চারণ উন্নত হয়। বিভিন্ন প্রশ্নের শব্দগুলো কেমন শোনা যায়, তা লক্ষ্য করুন।",
              "নির্দেশাবলী মনোযোগ দিয়ে পড়ুন: শব্দ সংখ্যা এবং উত্তর ফরম্যাট সম্পর্কিত নির্দেশাবলী মনোযোগ দিয়ে পড়ুন, যাতে সাধারণ ভুলের কারণে মার্ক কাটতে না হয়।",
              "সময় কার্যকরভাবে ব্যবহার করুন: প্রশ্ন পড়া, শোনা এবং উত্তর দেওয়ার জন্য দেওয়া সময় ব্যবহার করুন। কঠিন প্রশ্ন এলে সেগুলো স্কিপ করুন এবং পরে সময় থাকলে ফিরে যান।",
              "ভুল শব্দ ও সমার্থক শব্দের প্রতি মনোযোগ দিন: অডিওতে ভুল শব্দ বা সমার্থক শব্দ শুনুন, কারণ এগুলো প্রায়শই সঠিক উত্তর শনাক্ত করতে সাহায্য করে।",
              "ট্রান্সফার সময় বুদ্ধিমানের মতো ব্যবহার করুন (পেপার টেস্ট): পেপার-ভিত্তিক পরীক্ষায় অতিরিক্ত ১০ মিনিট ব্যবহার করে উত্তরগুলো পর্যালোচনা করুন এবং ভুলগুলোসহ উত্তরপত্র স্থানান্তরের জন্য ব্যবহার করুন।",
              "প্রশ্নগুলো প্রাধান্য দিন: যদি অডিও সমস্যা বা রেকর্ডিং সমস্যা হয়, তবে সঙ্গে পরীক্ষককে জানান যাতে গুরুত্বপূর্ণ তথ্য মিস না হয়।"
            ].map((tip, i) => (
              <li key={i} className="flex items-start">
                <span className="text-2xl text-[#4446a8] mr-4">▪</span>
                <p className="text-gray-600 text-sm">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureFive;
