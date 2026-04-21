

const GmatPrep = () => {
  return (
    <div className="min-h-screen bg-white md:bg-gray-100 p-4 md:p-8">
      {/* Outer Card-like Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl md:rounded-xl p-6 md:p-10 lg:p-12">
        
        {/* Breadcrumb / Category Section */}
        <p className="text-sm text-gray-500 mb-2">
          বিদেশে উচ্চশিক্ষা / পরীক্ষাসমূহ / GMAT / প্রস্তুতি
        </p>

        {/* Main Title and Meta */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-700 mb-4">
          GMAT পরীক্ষা প্রস্তুতি ২০২৫: বিভাগভিত্তিক টিপস
        </h1>
        <p className="flex items-center text-sm text-gray-500 mb-8">
          <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          আপডেট করা হয়েছে: আগস্ট ৩০, ২০২৫, ১০:৫৫
        </p>
        
        {/* Main Content Introduction (Kept outside the cards) */}
        <p className="text-gray-700 mb-4 text-base lg:text-lg leading-relaxed">
          শীর্ষ স্তরের বিজনেস স্কুলগুলোতে ভর্তির জন্য শীর্ষ মানের প্রস্তুতি প্রয়োজন! আর ঠিক এ ক্ষেত্রে **Abroadways** আপনাকে সাহায্য করতে পারে।
        </p>
        <p className="text-gray-700 mb-4 text-base lg:text-lg leading-relaxed">
          GMAT কি কঠিন? এটি নির্ভর করে। পরীক্ষা অবশ্যই **চ্যালেঞ্জিং**, তবে এটি অপ্রত্যাশিত নয়। আপনার প্রস্তুতির উপর নির্ভর করবে। যদি আপনি পরীক্ষার জন্য কমপক্ষে **৩-৪ মাস** সময় দেন, তবে আপনি ভালো স্কোর পেতে পারেন।
        </p>
        <p className="text-lg font-semibold text-gray-800 mb-6 mt-6">
          তাহলে, GMAT-এর জন্য কীভাবে প্রস্তুতি নেবেন?
        </p>
        <p className="text-gray-700 mb-10 text-base lg:text-lg leading-relaxed">
          এই পৃষ্ঠায়, আমরা সেরা **GMAT প্রস্তুতি টিপস** আলোচনা করব, যা আপনাকে আপনার কাঙ্ক্ষিত স্কোরের কাছাকাছি পৌঁছাতে সাহায্য করবে।
        </p>

        {/* --- Content Sections as Cards --- */}

        {/* Section 1: Verbal Reasoning Card (Single Card) */}
        <section className="mb-10 p-6 border border-gray-200 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-5 border-b-2 border-indigo-100 pb-2">
            ১. GMAT পরীক্ষা প্রস্তুতির টিপস: Verbal Reasoning
          </h2>
          <p className="text-gray-700 mb-4">
            এই সেকশনটির লক্ষ্য হলো যে আপনি কতটা স্পষ্টভাবে বিভিন্ন পরিস্থিতিতে যোগাযোগ করতে পারেন, আর্গুমেন্ট বিশ্লেষণ করতে পারেন এবং ইংরেজী ঠিক করতে পারেন।
          </p>
          <p className="text-gray-700 mb-6">
            ভারবাল রিজনিং টিপস উন্নতির জন্য সবচেয়ে ভালো উপায় হলো বিভিন্ন ধরনের **টেক্সট** পড়ার জন্য সময় দেওয়া। যত বেশি পড়বেন, আপনার কমিউনিকেশন তত ভালো হবে। আরও কিছু টিপস নিচে দেওয়া হলো:
          </p>

          <div className="ml-0 md:ml-4 space-y-6">
            
            {/* Sub-section: কমিউনিকেশন উন্নত করুন */}
            <div className='p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm'>
              <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-3 mb-3">
                বিভিন্ন কমিউনিকেশন উন্নত করুন:
              </h3>
              
              <p className="text-gray-700 mb-3">
                বিভিন্ন কমিউনিকেশন ব্যবহারের জন্য নিচের কৌশলগুলো ব্যবহার করুন:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-3">
                <li>
                  <span className="font-medium">বিবেচিত করুন:</span> পুরো টেক্সট পড়ার আগে সংক্ষেপে দেখুন মূল বিষয়টি কী।
                </li>
                <li>
                  <span className="font-medium">লাইন বাই লাইন পড়ুন:</span> কনটেক্সট বোঝার জন্য যদি মনোযোগ ধরে রাখতে সমস্যা হয়, জোরেও পড়ু‌ন।
                </li>
                <li>
                  <span className="font-medium">আলোচনা ব্যবহার করুন:</span> গুরুত্বপূর্ণ শব্দ, ভাবার্থ, এবং তথ্য **হাইলাইট** করুন।
                </li>
                <li>
                  <span className="font-medium">সারাংশ শিখুন:</span> নিজের ভাষায় টেক্সটটি সংক্ষেপে লিখুন।
                </li>
                <li>
                  <span className="font-medium">ভিজুয়ালাইজ করুন:</span> লেখাটি যদি মনকে নাড়া দেয় তবে চেষ্টা করুন।
                </li>
              </ul>
            </div>

            {/* Sub-section: ক্রিটিক্যাল রিজনিং-এর স্কিল উন্নত করুন */}
            <div className='p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm'>
              <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-3 pt-0 mb-3">
                ক্রিটিক্যাল রিজনিং-এর স্কিল উন্নত করুন:
              </h3>
              
              <p className="text-gray-700 mb-3">
                ক্রিটিক্যাল রিজনিং ও ডিসিশন-মেকিং স্কিলগুলোতে যাতে নিচের টিপস ব্যবহার করেন:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-3">
                <li>
                  <span className="font-medium">আর্গুমেন্ট স্ট্রাকচার বুঝুন:</span> প্রিমাইস (প্রমাণ) এবং কনক্লুশন (দাবি) চিহ্নিত করুন।
                </li>
                <li>
                  <span className="font-medium">প্রমাণ সংগ্রহ করুন:</span> প্রমাণে সিদ্ধান্ত পৌঁছানোর আগে যথাযথ প্রমাণ সংগ্রহ করুন।
                </li>
                <li>
                  <span className="font-medium">প্রমাণ মূল্যায়ন করুন:</span> প্রমাণ প্রাসঙ্গিক, পর্যাপ্ত এবং নির্ভরযোগ্য কিনা যাচাই করুন।
                </li>
                <li>
                  <span className="font-medium">প্রমাণে অ্যাজাম্পশন ব্যবহার করুন:</span> মাটিপেল কাজ গুলোর উপলক্ষগুলো বাম নিয়া।
                </li>
                <li>
                  <span className="font-medium">সময় ব্যবস্থাপনা:</span> সহজে শুরু করে আপনি এসব কঠিন প্রশ্ন পার উত্তর দিন।
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Quantitative Reasoning Card (Single Card) */}
        <section className="mb-10 p-6 border border-gray-200 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-5 border-b-2 border-indigo-100 pb-2">
            ২. GMAT পরীক্ষা প্রস্তুতির টিপস: Quantitative Reasoning
          </h2>
          <p className="text-gray-700 mb-6">
            যদিও অনেক শিক্ষার্থী এই সেকশনটি চ্যালেঞ্জিং মনে করে, এটি মূলত সেই বিষয়গুলোকে কভার করে যা আপনি হাই স্কুলে শিখেছেন। ফোকাসড প্রিপারেশনের মাধ্যমে আপনি এই সেকশনে উৎকৃষ্ট ফলাফল করতে পারেন। এখানে কিছু টিপস দেওয়া হলো:
          </p>

          <div className="ml-0 md:ml-4 space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
            <ul className="list-disc ml-6 text-gray-700 space-y-3">
              <li>
                <span className="font-medium">মৌলিক গণিত ধারণা রিভিজিট করুন:</span> এই সেকশনের জন্য বেসিক জ্ঞান অত্যন্ত গুরুত্বপূর্ণ। যেমন: বীজগণিত (Algebra), জ্যামিতি (Geometry), সম্ভাব্যতা (Probability), এবং মৌলিক পরিসংখ্যান (Statistics)-এর গুরুত্বপূর্ণ বিষয়গুলো রিভিজিট করুন।
              </li>
              <li>
                <span className="font-medium">শুধু পড়বেন না, সমাধান করুন:</span> গণিত ভারবাল রিজনিং-এর মতো শুধু পড়া পর্যন্ত সীমাবদ্ধ নয়। Quantitative Reasoning শেখার একমাত্র উপায় হলো যত বেশি সম্ভব **সমস্যা সমাধান** করা।
              </li>
              <li>
                <span className="font-medium">সমস্যা সমাধানের কৌশল প্র্যাকটিস করুন:</span> প্রতিটি সমস্যা কার্যকরী একটি কৌশল ব্যবহার করে সমাধান করা যায়। জটিল সমস্যাগুলো ছোট ছোট অংশে ভাগ করলে বোঝা ও সমাধান সহজ হবে।
              </li>
              <li>
                <span className="font-medium">ছোট্টা সাব-সেকশনে ফোকাস করুন:</span> **Data Sufficiency** হলো Quantitative Reasoning-এর একটি ধারণা। ডেটা-সাফিসিয়েন্সির ফর্ম্যাট বোঝার চেষ্টা করুন। এটি বেশিরভাগ প্রশ্ন নির্ধারণ করতে হয় যে প্রদত্ত তথ্য প্রশ্নের উত্তর দেওয়ার জন্য পর্যাপ্ত কিনা।
              </li>
              <li>
                <span className="font-medium">প্র্যাকটিস টেস্ট নিন:</span> অফিশিয়াল GMAT প্র্যাকটিস প্রশ্ন দিয়ে প্র্যাকটিস করে পরীক্ষায় আসা প্রশ্নের ধরনের ধারণা পান। সঠিক এবং ভুল উত্তরের ব্যাখ্যার বিশ্লেষণ করে ধারণা ও যুক্তি বোঝার চেষ্টা করুন।
              </li>
              <li>
                <span className="font-medium">গণনার গতি উন্নত করুন:</span> Quantitative প্রশ্ন সমাধান করতে কিছুটা **সময় লাগা স্বাভাবিক**, কিন্তু GMAT-এ সময় সীমাবদ্ধতা থাকে। দ্রুত সমাধানের জন্য মানসিক গণনার কৌশল প্র্যাকটিস করুন।
              </li>
              <li>
                <span className="font-medium">সময় ব্যবস্থাপনা:</span> প্রিপারেশনের সময় **টাইমড প্র্যাকটিস** সেশন রাখুন। কঠিন সমস্যায় বেশি সময় ব্যয় করবেন না, তবে কোনো এক প্রশ্নে আটকে থাকবেন না। মনে রাখবেন, খালি রেখে দেওয়ার চেয়ে **শিক্ষিত অনুমান (educated guess)** করা সবসময় ভালো।
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Data Insights Card (Single Card) */}
        <section className="mb-10 p-6 border border-gray-200 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-5 border-b-2 border-indigo-100 pb-2">
            ৩. GMAT পরীক্ষা প্রস্তুতির টিপস: Data Insights
          </h2>
          <p className="text-gray-700 mb-6">
            আপনার সাফল্যের জন্য কিছু বোঝার টিপস নিচে দেওয়া হলো:
          </p>

          <div className="ml-0 md:ml-4 space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
            <ul className="list-disc ml-6 text-gray-700 space-y-3">
              <li>
                <span className="font-medium">ডেটা টাইপ বোঝা:</span> বার গ্রাফ, লাইন চার্ট, টেবিল এবং স্কেটার প্লটের সাথে পরিচিত হোন। এই বিভিন্ন **ডেটা টাইপ** পড়া ও বোঝার প্র্যাকটিস করুন।
              </li>
              <li>
                <span className="font-medium">গুরুত্বপূর্ণ ফোকাস করুন:</span> শিরোনাম, লেবেল এবং ইউনিটসের দিকে লক্ষ্য দিন। এই সেকশন সমাধান করতে আপনাকে তথ্যের প্রতি খুব সতর্ক হতে হবে। প্রাসঙ্গিক তথ্য, প্যাটার্ন এবং অস্বাভাবিক **ডেটা পয়েন্ট** খুঁজে বের করুন।
              </li>
              <li>
                <span className="font-medium">সম্পর্ক খুঁজে বের করুন:</span> গুরুত্বপূর্ণ ডেটা পয়েন্ট শনাক্ত করার পর, দেখুন কিভাবে ভেরিয়েবলগুলো সম্পর্কিত। একটি সম্পর্কিত ভেরিয়েবল পরিবর্তন অন্যটিতে প্রভাব ফেলছে কিনা তা বোঝার চেষ্টা করুন। ডেটার মধ্যে **কোরিলেশন** ও **কারণ-ফল (causation)** বোঝার চেষ্টা করুন।
              </li>
              <li>
                <span className="font-medium">হিসাব ও অনুমান অনুশীলন করুন:</span> ডেটা বিশ্লেষণের জন্য **মৌলিক হিসাব** যেমন গড় এবং অনুপাত ব্যবহার করুন। এখানে আপনার গাণিতিক দক্ষতা প্রয়োগ করুন এবং জটিল হিসাবেের হাতে হারিয়ে যাবেন না।
              </li>
              <li>
                <span className="font-medium">ধাপে ধাপে এগোনার পদ্ধতি ব্যবহার করুন:</span> প্রথম বুঝুন → প্রাসঙ্গিক ডেটা বের করুন → বিশ্লেষণ করুন।
              </li>
              <li>
                <span className="font-medium">প্রক্রিয়া দ্বারা বর্জন (Process of Elimination) ব্যবহার করুন:</span> যদি সঠিক উত্তর নিয়ে অনিশ্চিত থাকেন, ভুল উত্তরগুলো বাদ দিয়ে সম্ভাব্য উত্তরগুলো চিহ্নিত করুন।
              </li>
            </ul>
          </div>
          
          <p className="text-gray-700 mt-8 text-base lg:text-lg leading-relaxed">
            এই টিপসগুলোর পাশাপাশি, **সময় ব্যবস্থাপনা** এবং **পর্যাপ্ত প্র্যাকটিস** নিশ্চিত করা গুরুত্বপূর্ণ। GMAT প্র্যাকটিস টেস্ট বা GMAT বই ব্যবহার করে এটি করা সবচেয়ে কার্যকর উপায়।
          </p>
        </section>
        
      </div>
    </div>
  );
};

export default GmatPrep;
