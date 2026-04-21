import React from 'react';

interface FeatureData {
  type: string;
  answer: string;
  pdf: string;
}

interface Tip {
  title: string;
  text: string;
}

const FeatureTwo: React.FC = () => {
  // FeatureFour Data
  const features: FeatureData[] = [
    { type: "Matching Headings", answer: "Identify the main idea of each paragraph and match it with the correct heading.", pdf: "IELTS Sample PDF for Matching Headings" },
    { type: "Matching Paragraph Information", answer: "Scan for specific details in paragraphs to match given statements.", pdf: "IELTS Sample PDF for Matching Paragraph Information" },
    { type: "Matching Features", answer: "Match people, places, or items with correct statements from the passage.", pdf: "IELTS Sample PDF for Matching Features" },
    { type: "Matching Sentence Endings", answer: "Choose the correct ending for a sentence from a list of options.", pdf: "IELTS Sample PDF for Matching Sentence Endings" },
    { type: "True/False/Not Given or Yes/No/Not Given", answer: "Verify if the statement agrees with, contradicts, or isn't mentioned in the passage.", pdf: "IELTS Sample PDF for True/False/Not Given or Yes/No/Not Given" },
    { type: "Multiple Choice", answer: "Select the correct answer(s) from the given options based on passage details.", pdf: "IELTS Sample PDF for Multiple Choice" },
    { type: "Choose a Title", answer: "Identify the most suitable title summarising the passage.", pdf: "IELTS Sample PDF for Choose a Title" },
    { type: "Short Answers", answer: "Answer in one or a few words based on passage information.", pdf: "IELTS Sample PDF for Short Answers" },
    { type: "Sentence Completion", answer: "Fill in the blanks with words from the passage while maintaining grammatical accuracy.", pdf: "IELTS Sample PDF for Sentence Completion" },
    { type: "Summary Completion", answer: "Complete a summary with words from the passage or a given word list.", pdf: "IELTS Sample PDF for Summary Completion" },
    { type: "Table Completion", answer: "Fill in missing information in a table using words from the passage.", pdf: "IELTS Sample PDF for Table Completion" },
    { type: "Flow Chart Completion", answer: "Identify key steps in a process and complete the Flowchart.", pdf: "IELTS Sample PDF for Flow Chart Completion" },
    { type: "Diagram Completion", answer: "Label parts of a diagram based on passage descriptions.", pdf: "IELTS Sample PDF for Diagram Completion" },
  ];

  // FeatureFive Data
  const tips: Tip[] = [
    { title: "টেস্ট ফরম্যাট বুঝুন:", text: "IELTS Academic এবং General Training-এর ফরম্যাট কিছুটা ভিন্ন। মডিউলের কাঠামো, প্রশ্নের ধরন এবং এর প্রভাব সম্পর্কে জানুন।" },
    { title: "ভোকাবুলারি বাড়ান:", text: "শব্দসম্ভার, প্রবাদ, এবং IELTS বই পড়ে আপনার শব্দভান্ডার বৃদ্ধি করুন। এটি প্যাসেজগুলো বুঝতে এবং আপনার নিজের ভাষায় অনুশীলন করতে সাহায্য করবে।" },
    { title: "রিডিং স্পিড বৃদ্ধি:", text: "যত বেশি পড়বেন, তত দ্রুত পড়তে পারবেন। নিয়মিত বই, প্রবন্ধ, এবং সংবাদপত্র পড়া স্পিড ও ফ্লুয়েন্সি দক্ষতা উন্নত করবে।" },
    { title: "স্কিমিং ও স্ক্যানিং শিখুন:", text: "প্রধান সাধারণ ধারণা এবং প্রশ্ন সম্পর্কিত কীওয়ার্ড খুঁজে বের করার জন্য সময় বাঁচান এবং উচ্চ স্কোর পেতে শিখুন।" },
    { title: "নির্দেশাবলী মনোযোগ দিয়ে পড়ুন:", text: "ওয়ার্ড লিমিট নিয়ে বিশেষ নজর দিন; 'maximum two words' নিয়ম থাকলে সীমা অতিক্রম করলে মার্ক কাটা হবে।" },
    { title: "একটি প্রশ্ন এড়িয়ে যান:", text: "যদি কোনো উত্তর না পান, অনুমান করে এগিয়ে যান। সময় থাকলে পরে ফিরে আসতে পারবেন।" },
    { title: "উত্তর খুঁজে বের করুন:", text: "সময়কে কার্যকরভাবে ব্যবহার করে উত্তরগুলো দ্রুত রিভিজিট দ্রুত খুঁজতে ও ঠিক করতে সাহায্য করবে।" },
    { title: "টাইম ম্যানেজমেন্ট প্র্যাকটিস করুন:", text: "অনুশীলনের সময় টাইমার ব্যবহার করুন, যেন বাস্তব টেস্টের পরিবেশে অভ্যস্ত হওয়া যায়।" },
    { title: "মক টেস্ট দিন:", text: "সাম্প্রতিক মক টেস্ট আপনার শক্তি ও দুর্বলতা চিহ্নিত করতে সাহায্য করবে এবং প্রস্তুতি আরও কার্যকর করবে।" },
  ];

  // FeatureSix Data
  const mistakes: string[] = [
    "টেস্ট ফরম্যাট না বোঝা: অনেক শিক্ষার্থী টেস্টের কাঠামো না জেনে প্রস্তুতি শুরু করে। পরীক্ষার বিভিন্ন অংশের ধরন ও সময় সীমা আগে থেকে জেনে নিন।",
    "প্রতিটি শব্দ পড়া: পুরো প্যাসেজ পুঙ্খানুপুঙ্খভাবে পড়ার চেষ্টা করে সময় নষ্ট করবেন না। বরং, মূল ধারণার জন্য স্কিমিং এবং নির্দিষ্ট তথ্যের জন্য স্ক্যানিং ব্যবহার করুন।",
    "কীওয়ার্ড উপেক্ষা করা: প্রশ্নের কীওয়ার্ডগুলো প্যাসেজে খুঁজে বের করে উত্তর খুঁজতে সাহায্য করে। এগুলো না দেখলে ভুল উত্তর বা সময় নষ্ট হতে পারে।",
    "নির্দেশনা ভুল বোঝা: যদি প্রশ্নে থাকে 'only one word' এবং আপনি দুটি শব্দ লেখেন, তবে উত্তর ভুল হয়ে যাবে। সুতরাং, সর্বদা নির্দেশনাগুলো ভালো করে পড়ুন।",
    "একমাত্র ভুল: মনে রাখবেন, যদি আপনি বানান বা গ্রামার ভুল করে থাকেন, তবে আপনার উত্তর মার্ক পাবে না। বানান ও গ্রামার ভুল করে মার্ক কেটে দিতে পারে। উত্তরের জন্য ভালোভাবে ভাবেন এবং লিখেন।",
    "টাইম ম্যানেজমেন্ট উপেক্ষা করা: টাইমার ব্যবহার না করলে আপনি পরীক্ষায় সময় নিয়ন্ত্রণের সমস্যায় পড়বেন। প্র্যাকটিসের সময় সময় নিয়ে কাজ করুন।",
    "রিডিং পার্ট ১ প্র্যাকটিস না করা: IELTS Reading-এ একাডেমিক ও সাধারণ উত্তরের ধরনের তালিকা থাকে। এগুলো এক ধরণের লেখা পড়া থেকে শিখতে পারেন।",
    "উত্তর খুঁজতে ভুল: IELTS-এ নির্দিষ্ট পদ্ধতি নেই। নিশ্চিত না হলে অনুমান করে উত্তর দিন।",
    "দুর্বলতা পুনরালোচনা না করা: অনেক পরীক্ষার্থী প্র্যাকটিস টেস্ট শেষ করে ভুলগুলো দেখে না। ভুলগুলো বোঝা আপনাকে একই ভুল না করতে সাহায্য করবে।",
  ];

  const mavenCaveTips: string[] = [
    "অভিজ্ঞ IELTS ট্রেনারদের এক্সপার্ট মেন্টরশিপ",
    "আপনার লেখার দক্ষতা বাড়ানোর জন্য ব্যক্তিগত ফিডব্যাক",
    "উচ্চমানের স্টাডি মেটেরিয়াল এবং মডেল উত্তরের অ্যাক্সেস",
    "সময়নির্ধারিত প্র্যাকটিস টেস্টের মাধ্যমে রিয়েল-টাইম একজাম সিমুলেশন",
    "সব IELTS Writing টাস্ক মাস্টার করার কার্যকর স্ট্র্যাটেজি"
  ];

  return (
    <div className="bg-[#f0f3f6] p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* FeatureFour */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-lg md:text-xl font-bold text-[#4446a8] mb-4">
              ৪. IELTS রিডিং টেস্টের প্রশ্নের ধরণ ব্যাখ্যা
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              রিডিংয়ে প্রশ্ন বিভিন্ন ধরণের স্কিল পরীক্ষা করে, যেমন স্কিমিং (Skimming), স্ক্যানিং (Scanning), এবং বিস্তারিত বোঝাপড়া
              (Detailed Comprehension)। নিচে প্রতিটি প্রশ্নের ধরণ, কীভাবে উত্তর দিতে হয় এবং উদাহরণস্বরূপ পিডিএফ দেওয়া হলো।
            </p>
            <div className="overflow-x-auto px-3 pb-4">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead className="bg-[#4446a8] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Question Type</th>
                    <th className="px-4 py-3 text-left">How to Answer?</th>
                    <th className="px-4 py-3 text-left">Sample Example PDF's</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{item.type}</td>
                      <td className="px-4 py-3 text-gray-600">{item.answer}</td>
                      <td className="px-4 py-3 text-[#4446a8] font-medium cursor-pointer hover:underline">{item.pdf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FeatureFive */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">
              ৫. ২০২৪ সালের জন্য সেরা IELTS রিডিং প্র্যাকটিস টেস্ট টিপস
            </h2>
            <p className="text-gray-600 font-bold leading-relaxed text-xl mb-4">
              IELTS রিডিং প্র্যাকটিস টেস্ট অনলাইনে নিয়মিত করার জন্য নিয়মিত প্র্যাকটিস প্রয়োজন। প্র্যাকটিস সবচেয়ে ভালো উপায় হলো বিভিন্ন ধরনের লেখা পড়া এবং প্রশ্নের উত্তরগুলো দেখা। কিন্তু কার্যকরী টিপস দেওয়া যায় যা আপনার পারফরম্যান্স উন্নত করতে সাহায্য করবে।
            </p>
            <ul className="list-none space-y-8">
              {tips.map((tip, index) => (
                <li key={index}>
                  <p className="text-gray-800 text-sm font-bold"><b>{tip.title}</b> {tip.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FeatureSix */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">
              ৬. IELTS রিডিং প্র্যাকটিস টেস্টে সাধারণ ভুল এবং এড়ানোর উপায়
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              IELTS Reading প্র্যাকটিসের সময় অনেক পরীক্ষার্থীর সাধারণ কিছু ভুল হয়ে যায়, যা স্কোর কমাতে পারে। এই ভুলগুলো এড়িয়ে আপনার পারফরম্যান্স উন্নত করুন:
            </p>
            <ul className="list-none space-y-4 mb-8">
              {mistakes.map((mistake, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl text-[#4446a8] mr-4">▪</span>
                  <p className="text-gray-600 text-sm">{mistake}</p>
                </li>
              ))}
            </ul>
            <h3 className="text-lg md:text-xl font-bold text-[#4446a8] mb-4">
              How Abroadways can help
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              Want to improve your IELTS Reading performance with more confidence? Abroadways supports you with practical guidance at each step:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm pl-4">
              {mavenCaveTips.map((tip, index) => (
                <li key={index} className="pl-1">{tip}</li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm mt-8 text-center font-bold">
              আজই শুরু করুন ৮+ ব্যান্ড স্কোর অর্জনের যাত্রা এবং আমাদের IELTS Writing Mock Tests দিয়ে প্র্যাকটিস করুন!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureTwo;


