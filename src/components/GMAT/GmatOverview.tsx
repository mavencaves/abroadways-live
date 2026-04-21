//@ts-nocheck


// কাস্টম কালার কনস্ট্যান্ট
const PRIMARY_COLOR = '#5a00ff';
const LIGHT_BG_COLOR = '#f9f0ff';
const PURPLE_HEADER_BG = 'rgb(90, 0, 255)'; // বাটন এবং টেবিল হেডার কালার



 
       

// মূল কম্পোনেন্ট যা সমস্ত সেকশন রেন্ডার করবে
const GmatOverview = () => {
    
    // ছবির কন্টেন্টগুলোর সাথে মিল রেখে ডেটা তৈরি করা হয়েছে
    const pageData = [
        {
            // ছবি: Screenshot 2025-10-08 153716.png
            // এটি মূল হেডার হিসেবে ব্যবহার করা হয়েছে, তাই আলাদা কার্ড হবে না।
            type: 'header',
            heading: "২০২৫ সালে বাংলাদেশের শিক্ষার্থীদের জন্য GMAT পরীক্ষা: একটি সম্পূর্ণ নির্দেশিকা",
            subtext: "বিদেশে উচ্চশিক্ষা / পরীক্ষাসমূহ / GMAT",
            content: `
                <p class="text-gray-500 text-sm mb-4">আপডেট করা হয়েছে: ২২ মে, ২০২৪, ৩:২৪</p>
                <h3 class="text-xl font-bold mb-3" style="color: ${PRIMARY_COLOR};">সর্বশেষ আপডেট:</h3>
                <p class="mb-4">GMAC একটি সংক্ষিপ্ত GMAT পরীক্ষা ঘোষণা করেছে, যেটির নাম <b>GMAT Focus Edition</b>। পুরাতন ফরম্যাট (৩ ঘন্টার পরীক্ষা) এখন বন্ধ করা হয়েছে। মূল বিষয়গুলো হলো:</p>
                <ul class="list-disc ml-6 space-y-2">
                    <li>নতুন GMAT পরীক্ষা মাত্র <b>২ ঘন্টা ১৫ মিনিট সময়সীমা</b> নিয়ে অনুষ্ঠিত হবে।</li>
                    <li>Analytical Writing অংশটি সরিয়ে দেওয়া হয়েছে। এর পরিবর্তে একটি নতুন অংশ **"Data Insights"** চালু করা হয়েছে।</li>
                    <li>যেহেতু এখন কেবল একটি সংস্করণ আছে, **GMAT Focus Edition**-এর নাম ১ জুলাই, ২০২৪ থেকে আবার **GMAT Exam**-এ পরিবর্তন হবে।</li>
                </ul>
            `,
        },
        {
            // ছবি: Screenshot 2025-10-08 153741.png
            type: 'card',
            heading: "১. GMAT পরীক্ষা কী?",
            content: `
                <ul class="list-disc ml-6 space-y-2 mb-4">
                    <li>GMAT বা Graduate Management Admission Test হলো একটি **কম্পিউটার-অ্যাডাপ্টিভ পরীক্ষা**।</li>
                    <li>GMAT পরীক্ষা পরিচালনা ও নিয়ন্ত্রণ করে **Graduate Management Admission Council (GMAC)**।</li>
                    <li>পরীক্ষার সময়কাল হলো **২ ঘণ্টা ১৫ মিনিট** (একটি ঐচ্ছিক ১০ মিনিটের বিরতি সহ)।</li>
                </ul>
                <h3 class="text-xl font-bold mb-2">GMAT পরীক্ষা তিনটি দক্ষতা মূল্যায়ন করে:</h3>
                <ul class="list-disc ml-6 space-y-2 mb-4">
                    <li>Quantitative Reasoning (পরিমাণগত যুক্তি)</li>
                    <li>Verbal Reasoning (সাব্দিক যুক্তি)</li>
                    <li>Data Insights (ডেটা বিশ্লেষণ)</li>
                </ul>
                <p>এটি দুইভাবে দেওয়া যায়: **অনলাইন** (বাড়ি থেকে) এবং **অফলাইন** (পরীক্ষা কেন্দ্রে)।</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2" style="color: ${PRIMARY_COLOR};">GMAT পরীক্ষা কেন দেওয়া উচিত?</h3>
                <ul class="list-disc ml-6 space-y-2">
                    <li>GMAT হলো ব্যবস্থাপনা সম্পর্কিত কোর্স যেমন **MBA**-এর জন্য সবচেয়ে জনপ্রিয় প্রবেশিকা পরীক্ষাগুলোর একটি।</li>
                    <li>একটি ভালো GMAT স্কোর আপনাকে বিশ্বজুড় সর্বাধিক সম্মানিত ব্যবসায়িক স্কুলগুলোতে ভর্তি হতে সহায়তা করতে পারে।</li>
                    <li>GMAT পরীক্ষা আপনাকে স্পষ্ট ধারণা দেয় যে আপনি বিশ্ববিদ্যালয়-স্তরের শিক্ষার জন্য কতটা প্রস্তুত।</li>
                </ul>
            `,
        },
        {
            // ছবি: Screenshot 2025-10-08 153759.png (প্রথম অংশ)
            type: 'card',
            heading: "২. GMAT পরীক্ষার তারিখসমূহ: GMAT পরীক্ষা কবে অনুষ্ঠিত হয়?",
            content: `
                <ul class="list-disc ml-6 space-y-2">
                    <li>GMAT-এর অনলাইন বা হোম ভার্সন প্রতিদিন ২৪ ঘন্টা উপলব্ধ।</li>
                    <li>অফলাইন বা টেস্ট সেন্টার ভার্সন মাসের বেশিরভাগ দিন খোলা থাকে, তবে তারিখ আপনার নির্বাচিত অবস্থানের উপর নির্ভর করে পরিবর্তিত হয়।</li>
                    <li>আপনার পছন্দের সময় এবং তারিখ পেতে কমপক্ষে **দুই থেকে তিন মাস আগে** বুকিং করা উচিত।</li>
                </ul>
            `,
            buttonText: "GMAT তারিখ সম্পর্কে আরও জানুন!",
            onButtonClick: () => alert('GMAT তারিখের লিঙ্কে ক্লিক করা হয়েছে!'),
        },
        {
            // ছবি: Screenshot 2025-10-08 153759.png (দ্বিতীয় অংশ)
            type: 'card',
            heading: "৩. GMAT পরীক্ষা কেন্দ্র: GMAT খরচ কত?",
            content: `
                <ul class="list-disc ml-6 space-y-2">
                    <li>বাংলাদেশে একটি GMAT টেস্ট সেন্টার রয়েছে।</li>
                    <li>যাত্রার ঝামেলা এড়াতে আপনার নিকটতম সেন্টারটি নির্বাচন করতে পারেন।</li>
                </ul>
                <h3 class="text-xl font-bold mt-4 mb-2">GMAT সেন্টারগুলো:</h3>
                <ul class="list-disc ml-6 space-y-2">
                    <li>ঢাকা</li>
                </ul>
            `,
        },
        {
            // ছবি: Screenshot 2025-10-08 153818.png
            type: 'card',
            heading: "৪. GMAT পরীক্ষা ফি: GMAT পরীক্ষার খরচ কত?",
            content: `
                <ul class="list-disc ml-6 space-y-2">
                    <li>বর্তমানে GMAT-এর খরচ হলো:</li>
                    <ul class="list-circle ml-6 space-y-2 mt-2">
                      <li>At-home (অনলাইন) পরীক্ষা: <b>USD 300 বা প্রায় BDT 42,000</b> (পরিবর্তনশীল হতে পারে)</li>
                      <li>Test Centre (সেন্টারে) পরীক্ষা: <b>USD 275 বা প্রায় BDT 35,000</b> (পরিবর্তনশীল হতে পারে)</li>
                    </ul>
                </ul>
                
                <h3 class="text-xl font-bold mt-4 mb-2">Rescheduling (তারিখ পরিবর্তন):</h3>
                <ul class="list-disc ml-6 space-y-2">
                  <li>প্রয়োজনে পরীক্ষা পুনঃনির্ধারণ করতে পারবেন তবে এর জন্য নির্দিষ্ট ফি প্রযোজ্য। ফি-এর পরিমাণ আপনার অনুরোধের সময়ের উপর নির্ভর করে।</li>
                </ul>
      
                <h3 class="text-xl font-bold mt-4 mb-2">Cancellation (বাতিল করা):</h3>
                <ul class="list-disc ml-6 space-y-2">
                  <li>পরিকল্পিত দিনে পরীক্ষা দিতে না পারলে পরীক্ষা বাতিল করা যাবে। ফি ফেরত পাবেন, তবে ফেরতের পরিমাণ বাতিলের সময়ের উপর নির্ভর করবে।</li>
                </ul>
      
                <p class="text-base mt-4 font-semibold">সর্বনিম্ন ফি চার্জ এবং সর্বাধিক ফেরতের জন্য পরীক্ষা কমপক্ষে <b>১০ দিন আগে</b> বাতিল/পুনঃনির্ধারণ করা উচিত।</p>
            `,
            buttonText: "GMAT ফি সম্পর্কে আরও জানুন!",
            onButtonClick: () => alert('GMAT ফি সম্পর্কে জানার লিঙ্কে ক্লিক করা হয়েছে!'),
        },
        {
            // ছবি: Screenshot 2025-10-08 153935.png
            type: 'card',
            heading: "৫. GMAT যোগ্যতা: GMAT-এর জন্য প্রয়োজনীয় ডকুমেন্টসমূহ",
            content: `
                <ul class="list-disc ml-6 space-y-2">
                    <li>যদি আপনি GMAT পরীক্ষায় অংশ নিতে চান, আপনার বয়স কমপক্ষে ১৮ বছর হতে হবে।</li>
                    <li>বয়সের জন্য কোনো উপরের সীমা নেই।</li>
                    <li>GMAC কোনো অন্যান্য যোগ্যতার শর্ত নির্ধারণ করেনি।</li>
                    <li>GMAT স্কোর সাধারণত বিজনেস স্কুলে আবেদন করার জন্য প্রয়োজন হয়।</li>
                    <li>সাধারণভাবে, GMAT পরীক্ষার্থী হন স্নাতক পর্যায়ের শিক্ষার্থীরা যারা দুই বছরের কাজের অভিজ্ঞতাও রাখে।</li>
                    <li>আপনি যদি বিশ্ববিদ্যালয়ে আবেদন করতে GMAT ব্যবহার করতে চান, তবে আমরা সুপারিশ করি বিশ্ববিদ্যালয়গুলোর স্কোরের প্রয়োজনীয়তা যাচাই করতে।</li>
                </ul>
            `,
        },
        {
            // ছবি: Screenshot 2025-10-08 153953.png
            type: 'card',
            heading: "৬. GMAT সিলেবাস: পরীক্ষায় কী রয়েছে?",
            content: `
                <ul class="list-disc ml-6 space-y-2 mb-6">
                    <li>নতুন GMAT পরীক্ষায় ৩টি মডিউল রয়েছে: Quantitative Reasoning, Verbal Reasoning, এবং Data Insights।</li>
                    <li>Quantitative Reasoning: অ্যালজেবরা ও অ্যারিথমেটিক ধারণার ভিত্তিতে জ্ঞান মূল্যায়ন করে।</li>
                    <li>Verbal Reasoning: লেখা উপকরণ পড়া এবং বোঝার ক্ষমতা মূল্যায়ন করে।</li>
                    <li>Data Insights: বাস্তব ব্যবসায়িক পরিস্থিতিতে ডেটা বিশ্লেষণ এবং প্রয়োগ করার ক্ষমতা যাচাই করে।</li>
                    <li>এই মডিউলগুলো আপনাকে স্নাতকোত্তর বিজনেস স্কুলের জন্য প্রস্তুত করে তোলে।</li>
                </ul>

                <h3 class="text-xl font-bold mb-4" style="color: ${PRIMARY_COLOR};">GMAT পরীক্ষার প্যাটার্ন</h3>
                <p class="mb-4">নতুন সংস্করণের GMAT মোট ২ ঘণ্টা ১৫ মিনিট দীর্ঘ। নিচে প্রতিটি সেকশনের পূর্ণ বিবরণ দেওয়া হলো:</p>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full border border-gray-300">
                        <thead>
                            <tr class="text-white text-sm font-semibold" style="background-color: ${PURPLE_HEADER_BG};">
                                <th class="py-3 px-4 text-left">GMAT ফোকাস এডিশন সেকশনসমূহ</th>
                                <th class="py-3 px-4 text-left">সময়কাল</th>
                                <th class="py-3 px-4 text-left">প্রশ্ন সংখ্যা</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="py-3 px-4 border-b border-gray-300">Verbal Reasoning</td><td class="py-3 px-4 border-b border-gray-300">৪৫ মিনিট</td><td class="py-3 px-4 border-b border-gray-300">২৩</td></tr>
                            <tr class="bg-gray-50"><td class="py-3 px-4 border-b border-gray-300">Quantitative</td><td class="py-3 px-4 border-b border-gray-300">৪৫ মিনিট</td><td class="py-3 px-4 border-b border-gray-300">২১</td></tr>
                            <tr><td class="py-3 px-4 border-b border-gray-300">Data Insights</td><td class="py-3 px-4 border-b border-gray-300">৪৫ মিনিট</td><td class="py-3 px-4 border-b border-gray-300">২০</td></tr>
                        </tbody>
                    </table>
                </div>
            `,
            buttonText: "GMAT সিলেবাস সম্পর্কে আরও জানুন!",
            onButtonClick: () => alert('GMAT সিলেবাসের লিঙ্কে ক্লিক করা হয়েছে!'),
        },
        {
            // ছবি: Screenshot 2025-10-08 153904.png
            type: 'card',
            heading: "৭. GMAT স্কোর কী?",
            content: `
                <ul class="list-disc ml-6 space-y-2 mb-6">
                    <li>GMAT-এর স্কোর একটি মডিউলের পারফরম্যান্সের ভিত্তিতে স্কোর দেওয়া হয়।</li>
                    <li>GMAT Focus Edition-এর মোট স্কোর: **২০০-৮০০**।</li>
                    <li>মোট স্কোরের সব মান ৫ দিয়ে শেষ হয় (উদাহরণস্বরূপ: ২২০, ৩৫০, ৪২৫ ইত্যাদি)।</li>
                    <li>প্রতিটি বিভাগের স্কোর ৬০-৯০ এর মধ্যে থাকে।</li>
                    <li>স্কোর ১০-এর ইন্টারভেলে দেওয়া হয়।</li>
                    <li>নতুন GMAT সংস্করণে উত্তর না দেওয়া প্রশ্নের জন্য পেনাল্টি আছে।</li>
                    <li>পরীক্ষার সব সেকশন সম্পূর্ণ করা অত্যন্ত গুরুত্বপূর্ণ (কোনো সেকশন অসম্পূর্ণ না রেখে পরীক্ষা দেওয়া উচিত)।</li>
                </ul>

                <h3 class="text-xl font-bold mb-4" style="color: ${PRIMARY_COLOR};">নিচে নতুন GMAT স্কোরের বিস্তারিত বিবরণ দেওয়া হয়েছে।</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full border border-gray-300">
                        <thead>
                            <tr class="text-white text-sm font-semibold" style="background-color: ${PURPLE_HEADER_BG};">
                                <th class="py-3 px-4 text-left">GMAT ফোকাস এডিশন সেকশনসমূহ</th>
                                <th class="py-3 px-4 text-left">স্কোর রেঞ্জ</th>
                                <th class="py-3 px-4 text-left">স্কোর ইন্টারভাল</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="py-3 px-4 border-b border-gray-300">Verbal Reasoning</td><td class="py-3 px-4 border-b border-gray-300">৬ – ৯০</td><td class="py-3 px-4 border-b border-gray-300">১</td></tr>
                            <tr class="bg-gray-50"><td class="py-3 px-4 border-b border-gray-300">Quantitative</td><td class="py-3 px-4 border-b border-gray-300">৬ – ৯০</td><td class="py-3 px-4 border-b border-gray-300">১</td></tr>
                            <tr><td class="py-3 px-4 border-b border-gray-300">Data Insights</td><td class="py-3 px-4 border-b border-gray-300">৬ – ৯০</td><td class="py-3 px-4 border-b border-gray-300">১</td></tr>
                            <tr class="font-bold text-black bg-gray-200"><td class="py-3 px-4 border-b border-gray-300">মোট</td><td class="py-3 px-4 border-b border-gray-300">২০০ – ৪৫০</td><td class="py-3 px-4 border-b border-gray-300">১০</td></tr>
                        </tbody>
                    </table>
                </div>
            `,
        },
        {
            // ছবি: Screenshot 2025-10-08 153845.png
            type: 'card',
            heading: "৮. GMAT পরীক্ষার ফলাফল: কীভাবে আপনার GMAT ফলাফল পরীক্ষা করবেন?",
            content: `
                <h3 class="text-xl font-bold mb-2">GMAT-এর ফলাফল সম্পর্কিত তথ্য বাংলায়:</h3>
                <ul class="list-disc ml-6 space-y-2 mb-6">
                    <li>পরীক্ষা সম্পন্ন হওয়ার সঙ্গে সঙ্গেই সকল প্রক্রিয়ার অফিসিয়াল ফলাফল প্রকাশিত হয়।</li>
                    <li>নতুন GMAT Focus Edition-এর স্কোর প্রকাশিত হয় ৩-৫ কার্যদিবসের মধ্যে।</li>
                    <li>স্কোর প্রকাশিত হলে আপনার ইমেইলে (নোটিফিকেশন পাবেন) পাঠানো হবে।</li>
                </ul>
                <h3 class="text-xl font-bold mb-2">GMAT Score Report-এ অন্তর্ভুক্ত থাকে:</h3>
                <ul class="list-disc ml-6 space-y-2 mb-6">
                    <li>প্রতিটি বিভাগের স্কোর (Fixed scale-এ)</li>
                    <li>পারসেন্টাইল র‍্যাঙ্কিং</li>
                    <li>ব্যক্তিগত তথ্য যেমন GMAT ID, পরীক্ষার তারিখ, রেজিস্ট্রেশন নম্বর ইত্যাদি।</li>
                </ul>
                <p class="font-semibold mb-4">GMAT ফলাফল পরীক্ষার তারিখ থেকে ৫ বছর পর্যন্ত বৈধ।</p>
                <h3 class="text-xl font-bold mb-2">আপনি আপনার GMAT ফলাফল ৫টি বিশ্ববিদ্যালয়ে বিনামূল্যে পাঠাতে পারবেন।</h3>
                <ul class="list-disc ml-6 space-y-2">
                    <li>অনলাইনে পরীক্ষা দিলে: রিপোর্ট উপলব্ধ হওয়ার পর MBA.com থেকে ইমেইল (নোটিফিকেশন পাবেন) লিঙ্কের মাধ্যমে প্রাপকদের নির্বাচন করতে পারবেন।</li>
                    <li>টেস্ট সেন্টারে পরীক্ষা দিলে: পরীক্ষার আগে প্রাপকদের নির্বাচন করতে পারবেন।</li>
                </ul>
            `,
            buttonText: "GMAT ফলাফল সম্পর্কে আরও জানুন! →",
            onButtonClick: () => alert('GMAT ফলাফলের লিঙ্কে ক্লিক করা হয়েছে!'),
        },
        {
            // ছবি: Screenshot 2025-10-08 153917.png
            type: 'card',
            heading: "৯. GMAT পরীক্ষার রেজিস্ট্রেশন: GMAT-এ কীভাবে নিবন্ধন করবেন?",
            content: `
                <ul class="list-disc ml-6 space-y-2 mb-4">
                    <li>আপনি অফিসিয়াল GMAT ওয়েবসাইটে গিয়ে রেজিস্ট্রেশন করতে পারেন।</li>
                    <li>GMAT পরীক্ষার রেজিস্ট্রেশন একটি সহজ প্রক্রিয়া, যা তিনটি পদ্ধতিতে সম্পন্ন করা যায়:
                        <ul class="list-circle ml-6 space-y-2 mt-2">
                            <li>অনলাইনে</li>
                            <li>ফোনের মাধ্যমে</li>
                            <li>মেইলের মাধ্যমে</li>
                        </ul>
                    </li>
                </ul>
                <h3 class="text-xl font-bold mb-2">অনলাইনে রেজিস্ট্রেশন করতে, নিচের ধাপগুলো অনুসরণ করুন:</h3>
                <ul class="list-disc ml-6 space-y-2">
                    <li>GMAT-এর অফিসিয়াল ওয়েবসাইটে যান।</li>
                    <li>আপনার বিবরণ পূরণ করে একটি অ্যাকাউন্ট তৈরি করুন।</li>
                    <li>আপনার তথ্য যাচাই করুন এবং সাবমিট করুন।</li>
                    <li>নিকটতম টেস্ট সেন্টার নির্বাচন করুন এবং একটি তারিখ নির্ধারণ করুন।</li>
                    <li>যদি আপনি অ্যাট-হোম ভার্সন নির্বাচন করেন, তবে একটি সময়সূচিও বেছে নিতে হবে।</li>
                    <li>রেজিস্ট্রেশন ফি প্রদান এবং রেজিস্ট্রেশন সম্পূর্ণ করুন।</li>
                </ul>
            `,
            buttonText: "GMAT রেজিস্ট্রেশন সম্পর্কে আরও জানুন! →",
            onButtonClick: () => alert('GMAT রেজিস্ট্রেশনের লিঙ্কে ক্লিক করা হয়েছে!'),
        },
        {
            // ছবি: Screenshot 2025-10-08 154021.png
            type: 'card',
            heading: "১০. GMAT বই: GMAT-এর জন্য সেরা রিসোর্সসমূহ কী কী?",
            content: `
                <ul class="list-disc ml-6 space-y-2 mb-4">
                    <li>আপনি GMAT পরীক্ষার প্রস্তুতির জন্য বিভিন্ন ধরনের উপকরণ নির্বাচন করতে পারেন।</li>
                    <li>GMAT বইগুলি প্রস্তুতির অন্যতম কার্যকর উপায়।</li>
                    <li>বইগুলিতে সাধারণত প্রতিটি সেকশনের জন্য একটি গাইড এবং উত্তরসহ স্যাম্পল পেপার থাকে।</li>
                    <li>যদি আপনি স্ব-অধ্যায়নের মাধ্যমে GMAT-এর প্রস্তুতি নিচ্ছেন, তাহলে বইগুলি বিশেষভাবে সহায়ক হতে পারে।</li>
                    <li>আপনি একই বিষয়ে বিনামূল্যে ভিডিও দেখতে পারেন বা অনলাইন অন্যান্য উপকরণ ব্যবহার করতে পারেন।</li>
                </ul>
                
                <div class="mt-6 p-4 rounded-lg border border-gray-300 bg-white">
                    <h4 class="font-bold mb-3 text-lg" style="color: ${PRIMARY_COLOR};">Top 5 GMAT Books for Preparation</h4>
                    <ol class="list-decimal ml-6 space-y-1">
                        <li>GMAT Official Guide</li>
                        <li>Manhattan Prep Complete GMAT Strategy Guide Set</li>
                        <li>Kaplan GMAT Prep Plus 2023</li>
                        <li>Veritas Prep Complete GMAT Course Set</li>
                        <li>GMAT Official Advanced Questions</li>
                    </ol>
                </div>
            `,
            buttonText: "GMAT বই সম্পর্কে আরও জানুন! →",
            onButtonClick: () => alert('GMAT বইয়ের লিঙ্কে ক্লিক করা হয়েছে!'),
        },
        {
            // ছবি: Screenshot 2025-10-08 154040.png
            type: 'card',
            heading: "১১. GMAT প্র্যাকটিস টেস্ট: আপনার প্রস্তুতি বাড়ান!",
            content: `
                <ul class="list-disc ml-6 space-y-2">
                    <li>GMAT অনুশীলন পরীক্ষা GMAT পরীক্ষার প্রস্তুতি নেওয়া এবং আপনার অগ্রগতি পর্যবেক্ষণ করার জন্য অত্যন্ত গুরুত্বপূর্ণ।</li>
                    <li>অনুশীলন পরীক্ষা পরীক্ষার ফরম্যাটের সাথে পরিচিত হওয়ার একটি চমৎকার সুযোগ প্রদান করে।</li>
                    <li>যথেষ্ট অনুশীলনের মাধ্যমে, আপনি পরীক্ষায় কোন ধরনের প্রশ্ন আসতে পারে তা পূর্বানুমান করতে পারবেন।</li>
                    <li>GMAT স্যাম্পল পেপার অনলাইনে সহজেই পাওয়া যায়।</li>
                    <li>আমরা বিশেষভাবে সুপারিশ করি যে Graduate Management Admission Council (GMAC) দ্বারা সরবরাহকৃত স্যাম্পল পেপারগুলি MBA.com থেকে ব্যবহার করুন, কারণ এগুলি নির্ভরযোগ্য।</li>
                </ul>
            `,
        },
       
    ];

    // রেন্ডারিং লজিক
    return (
        <div className="min-h-screen p-4 sm:p-8 bg-white">
            {/* মূল হেডার সেকশন */}
            <div className="max-w-4xl mx-auto rounded-xl shadow-md p-6 md:p-8 mb-8" style={{ backgroundColor: LIGHT_BG_COLOR }}>
                <p className="text-gray-500 text-sm mb-2">{pageData[0].subtext}</p>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: PRIMARY_COLOR }}>
                    {pageData[0].heading}
                </h1>
                <div 
                    className="text-gray-700 text-base md:text-lg space-y-4"
                    dangerouslySetInnerHTML={{ __html: pageData[0].content }}
                />
            </div>
            
        
           
        </div>
    );
};

export default GmatOverview;