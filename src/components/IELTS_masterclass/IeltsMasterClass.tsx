import { useState } from "react";

export default function IeltsLanding() {
  // --- Pill groups state ---
  const [purpose, setPurpose] = useState<number | null>(null);
  const [who, setWho] = useState<number | null>(null);
  const [when, setWhen] = useState<number | null>(null);

  // --- FAQ state (single-open accordion) ---
  const faqs = [
    {
      q: "অনলাইনে IELTS এর জন্য কীভাবে প্রস্তুতি নিতে পারি?",
      a: "ঘরে বসেই লাইভ ক্লাস, রেকর্ডেড লেকচার, মক টেস্ট ও ব্যক্তিগত ফিডব্যাকের মাধ্যমে ধারাবাহিকভাবে প্রস্তুতি নিতে পারেন।",
    },
    {
      q: "আমি কি নিজে নিজেই IELTS এর জন্য প্রস্তুতি নিতে পারি?",
      a: "পারেন, তবে নির্ভুল দিকনির্দেশনা ও রুটিন মেনে পড়া জরুরি। গাইডেন্স পেলে সময় বাঁচে ও ফল দ্রুত আসে।",
    },
    {
      q: "IELTS এর জন্য কতবার পরীক্ষা দেওয়া যায়?",
      a: "যতবার খুশি পরীক্ষা দিতে পারেন; নির্দিষ্ট ব্যবধানে সিট পাওয়া সাপেক্ষে রেজিস্ট্রেশন করতে হয়।",
    },
    {
      q: "আমি কি প্রথমবারেই IELTS পাস করতে পারি?",
      a: "সঠিক প্রস্তুতি, মক টেস্ট এবং ফিডব্যাক থাকলে প্রথম চেষ্টাতেই টার্গেট স্কোর অর্জন সম্ভব।",
    },
    {
      q: "IELTS কি খুব কঠিন?",
      a: "পরিকল্পিত পড়াশোনা ও নিয়মিত প্র্যাকটিস করলে এটি চ্যালেঞ্জিং হলেও মোটেও অসম্ভব নয়।",
    },
    {
      q: "আমি কি ১ মাসে IELTS এর জন্য প্রস্তুতি নিতে পারি?",
      a: "বেসিক ভালো হলে ইনটেন্সিভ রুটিনে ৪–৬ সপ্তাহে প্রস্তুতি নেওয়া যায়; নাহলে ৮–১২ সপ্তাহ পরিকল্পনা করুন।",
    },
    {
      q: "IELTS 7.0 কি সহজ?",
      a: "ধারাবাহিক প্রস্তুতি, স্কিলভিত্তিক স্ট্র্যাটেজি ও রিভিউ রাখলে ৭.০ অর্জন করা সম্ভব।",
    },
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Utility for tick items (replaces pseudo-element)
  const Tick: React.FC = () => (
    <span aria-hidden className="mr-2 font-bold text-[#5b21b6]">
      ✔
    </span>
  );

  // Card hover animation classes (only place we keep animation)
  const cardHover =
    "hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-shadow duration-150 ease-out";

  return (
    <main className="text-gray-800 bg-[#f9f8ff]">
      {/* ===== HERO ===== */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 md:px-12 py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-5">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              ৪-সপ্তাহের আইইএলটিএস
              <br />
              কোর্স ব্যান্ড জাম্প গ্যারান্টিসহ
            </h1>
            <ul className="space-y-2 text-gray-700 text-lg mt-2">
              <li className="flex items-start">
                <Tick />
                <span>দৈনিক লাইভ ক্লাস</span>
              </li>
              <li className="flex items-start">
                <Tick />
                <span>সার্টিফায়েড IELTS ট্রেইনার</span>
              </li>
              <li className="flex items-start">
                <Tick />
                <span>১০০+ IELTS মক টেস্ট প্র্যাকটিস</span>
              </li>
            </ul>
            <button className="mt-4 w-fit bg-[#5b21b6] text-white text-base md:text-lg font-semibold px-6 py-3 rounded-lg shadow-md">
              ফ্রি কাউন্সেলিং অ্যাপয়েন্টমেন্ট
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/IELTS_masterclass/img_1.jpg"
              alt="Students studying together"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ===== STATS RIBBON ===== */}
      <section className="px-4 md:px-8 mt-12 md:mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#6d28d9] to-[#4f46e5] text-white rounded-2xl md:rounded-3xl shadow-xl px-6 md:px-10 py-7 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-center">
              <div>
                <div className="text-3xl md:text-4xl font-extrabold">৪.৫/৫</div>
                <div className="text-sm md:text-base opacity-90 mt-1">
                  ৫ হাজার+ রিভিউ
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold">
                  ৮ সপ্তাহ
                </div>
                <div className="text-sm md:text-base opacity-90 mt-1">
                  কোর্সের মেয়াদ
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold">
                  ফ্লেক্সিবল শিডিউল
                </div>
                <div className="text-sm md:text-base opacity-90 mt-1">
                  সপ্তাহে ১০ ঘণ্টা, নিজের গতিতে শিখুন
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold">
                  ১,২৫,০০০+
                </div>
                <div className="text-sm md:text-base opacity-90 mt-1">
                  ৭+ ব্যান্ড স্কোর
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mt-14 md:mt-20 text-2xl md:text-3xl font-bold text-[#4f46e5]">
            আপনার IELTS প্রস্তুতির জন্য মেজেনকেড কেন বেছে নেবেন?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            মেজেনকেড আপনার জন্য নিয়ে আসে নিয়ন্ত্রিত পাঠক্রম, ব্যক্তিগতকৃত
            ফিডব্যাক এবং হ্যান্ডস-অন প্র্যাকটিস, যা আপনাকে IELTS পরীক্ষায়
            সফলভাবে অংশগ্রহণ করতে সহায়তা করবে। পরীক্ষিত ফলাফল ও নিরবচ্ছিন্ন
            সহায়তার মাধ্যমে আমরা আপনার সম্ভাবনাকে আরও ৭ স্কোর+ এ উন্নীত করি।
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="px-6">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#eef2ff] flex items-center justify-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-[#5b21b6]"
                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              ৫০০০+ ৫-তারকা রিভিউ
            </h3>
            <p className="mt-2 text-gray-600">
              বাংলাদেশের সর্বাধিক হাই-রেটেড অনলাইন IELTS কোর্স।
            </p>
          </div>

          <div className="px-6">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#eef2ff] flex items-center justify-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-[#5b21b6]"
                  d="M18 2H6a2 2 0 0 0-2 2v16a1 1 0 0 0 1.53.85L12 18l6.47 2.85A1 1 0 0 0 20 20V4a2 2 0 0 0-2-2z"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              ব্যাড-জাম্পের নিশ্চয়তা
            </h3>
            <p className="mt-2 text-gray-600">
              অ্যানালিটিক্স-চালিত IELTS ট্র্যাকিং ও অনুশীলনে ৮০% শিক্ষার্থী
              লক্ষ্য স্কোরে পৌঁছায়।
            </p>
          </div>

          <div className="px-6">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#eef2ff] flex items-center justify-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-[#5b21b6]"
                  d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm1 11.41V6h-2v7a1 1 0 0 0 .29.71l4 4 1.42-1.42z"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              নমনীয় ব্যাচ সময়সূচি
            </h3>
            <p className="mt-2 text-gray-600">
              কর্মজীবী শিক্ষার্থীদের জন্য সপ্তাহের বিভিন্ন সময়ে ক্লাস সুবিধা।
            </p>
          </div>
        </div>
      </section>

      {/* ===== START YOUR JOURNEY (QUESTIONNAIRE) ===== */}
      <section className="px-4 md:px-8 mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="h-[260px] md:h-full">
                <img
                  src="/images/IELTS_masterclass/img_2.jpg"
                  alt="Study notes"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="bg-[#5b21b6] text-white px-6 py-4 md:rounded-tr-2xl text-center">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    আপনার IELTS যাত্রা শুরু করুন
                  </h3>
                </div>

                <div className="p-6 md:p-8 space-y-7">
                  {/* Group 1 */}
                  <div>
                    <p className="text-[#5b21b6] font-semibold mb-3">
                      কেন আপনি IELTS প্রস্তুতি নিতে চান?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        "ওয়ার্ক ভিসা/পিআর",
                        "বিদেশে পড়াশোনা",
                        "এখনো সিদ্ধান্ত নেইনি",
                      ].map((label, i) => (
                        <button
                          key={label}
                          onClick={() => setPurpose(i)}
                          className={[
                            "border rounded-lg py-3 px-4",
                            purpose === i
                              ? "border-[#5b21b6] bg-[#eef2ff]"
                              : "border-gray-300",
                          ].join(" ")}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Group 2 */}
                  <div>
                    <p className="text-[#5b21b6] font-semibold mb-3">
                      আপনি কী করেন?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {["শিক্ষার্থী", "কর্মরত", "স্বপ্রস্তুত"].map(
                        (label, i) => (
                          <button
                            key={label}
                            onClick={() => setWho(i)}
                            className={[
                              "border rounded-lg py-3 px-4",
                              who === i
                                ? "border-[#5b21b6] bg-[#eef2ff]"
                                : "border-gray-300",
                            ].join(" ")}
                          >
                            {label}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Group 3 */}
                  <div>
                    <p className="text-[#5b21b6] font-semibold mb-3">
                      কবে IELTS দিবেন?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        "৩ মাসের মধ্যে",
                        "৩–৬ মাসের মধ্যে",
                        "ইতিমধ্যেই বুক করা",
                      ].map((label, i) => (
                        <button
                          key={label}
                          onClick={() => setWhen(i)}
                          className={[
                            "border rounded-lg py-3 px-4",
                            when === i
                              ? "border-[#5b21b6] bg-[#eef2ff]"
                              : "border-gray-300",
                          ].join(" ")}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <button className="bg-[#4f46e5] text-white font-semibold px-8 py-3 rounded-lg shadow">
                      পরবর্তী
                    </button>
                  </div>
                </div>
              </div>
              {/* /Content */}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTRUCTORS ===== */}
      <section className="px-4 md:px-8 mt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f46e5]">
            বাংলাদেশের শীর্ষ IELTS প্রশিক্ষকদের সঙ্গে ফ্রি মাস্টারক্লাসে
            অংশগ্রহণ করুন
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            IELTS প্রস্তুতিতে সঠিক দিকনির্দেশনা প্রয়োজন? ২০+ বছরের IELTS
            বিশেষজ্ঞদের মাধ্যমে প্রশিক্ষণ নিন, যারা সহস্রাধিক শিক্ষার্থীকে IELTS
            পরীক্ষায় সফল হতে সহায়তা করেছেন এবং তাদের Band ৭+ স্কোর অর্জনে সহায়ক
            হয়েছেন।
          </p>

          {/* Card grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/IELTS_masterclass/img_3.jpg",
                name: "তারেক মাহমুদ",
              },
              {
                img: "/images/IELTS_masterclass/img_4.jpg",
                name: "সামিয়া হোসেন",
              },
              { img: "/images/IELTS_masterclass/img_5.jpg", name: "ফারিহা হক" },
            ].map((c) => (
              <article
                key={c.name}
                className={`relative rounded-[18px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] ${cardHover}`}
              >
                <img
                  src={c.img}
                  className="w-full h-80 object-cover"
                  alt="Instructor"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">{c.name}</h3>
                  <p className="text-sm/5 opacity-90">৭+ বছরের অভিজ্ঞতা</p>
                  <p className="text-sm/5 opacity-90">
                    ২২০০+ শিক্ষার্থীর সহায়তা
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Steps + CTA */}
          <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-5 py-3 bg-white">
              <span className="w-8 h-8 flex items-center justify-center bg-[#5b21b6] text-white font-bold rounded-full">
                1
              </span>
              <p className="text-gray-800 font-medium">
                ৩০ মিনিটের ফ্রি ক্লাসে অংশগ্রহণ করুন
              </p>
            </div>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-5 py-3 bg-white">
              <span className="w-8 h-8 flex items-center justify-center bg-[#5b21b6] text-white font-bold rounded-full">
                2
              </span>
              <p className="text-gray-800 font-medium">
                Band Predictor টেস্ট নিন
              </p>
            </div>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-5 py-3 bg-white">
              <span className="w-8 h-8 flex items-center justify-center bg-[#5b21b6] text-white font-bold rounded-full">
                3
              </span>
              <p className="text-gray-800 font-medium">
                ইন্সট্রাক্টরের ফিডব্যাক পান
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button className="bg-[#4f46e5] text-white font-semibold px-8 py-3 rounded-lg shadow">
              ফ্রি মাস্টারক্লাসে অংশগ্রহণ
            </button>
          </div>
        </div>
      </section>

      {/* ===== IELTS PREPARATION MATERIAL ===== */}
      <section className="px-4 md:px-8 mt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4f46e5]">
            IELTS প্রস্তুতির উপকরণ আবিষ্কার করুন
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            “IELTS Preparation Material” আপনাকে একটি বিশদ প্রস্তুতির সুবিধা
            প্রদান করে যা আপনার IELTS যাত্রায় সফল হতে সহায়তা করবে। প্র্যাকটিস
            টেস্ট থেকে শুরু করে বিস্তৃত রিসোর্সের চেকলিস্ট পর্যন্ত—এখানে আপনি
            পাবেন প্রতিটি ধাপের উপকরণ যা আপনার দক্ষতা বৃদ্ধি করতে সহায়ক।
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Card 1 */}
            <div
              className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-6 md:p-8 items-center gap-6 ${cardHover}`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  IELTS মক টেস্ট
                </h3>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li className="flex items-start">
                    <Tick />
                    <span>১০০+ মক টেস্ট</span>
                  </li>
                  <li className="flex items-start">
                    <Tick />
                    <span>তাত্ত্বিক Band প্রেডিকশন</span>
                  </li>
                  <li className="flex items-start">
                    <Tick />
                    <span>পূর্ণ শিক্ষকের ফিডব্যাক</span>
                  </li>
                </ul>
                <button className="mt-5 bg-[#4f46e5] text-white px-6 py-3 rounded-lg font-semibold shadow">
                  মক টেস্টে যান
                </button>
              </div>
              <div className="w-full md:w-48 h-40 md:h-44 rounded-xl overflow-hidden">
                <img
                  src="/images/IELTS_masterclass/img_6.jpg"
                  alt="IELTS Books"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-6 md:p-8 items-center gap-6 ${cardHover}`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  IELTS রিসোর্স
                </h3>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li className="flex items-start">
                    <Tick />
                    <span>সম্পূর্ণ স্টাডি ম্যাটেরিয়াল</span>
                  </li>
                  <li className="flex items-start">
                    <Tick />
                    <span>২০+ ঘন্টার ভিডিও লেকচার</span>
                  </li>
                  <li className="flex items-start">
                    <Tick />
                    <span>পূর্ণ শিক্ষকের ফিডব্যাক</span>
                  </li>
                </ul>
                <button className="mt-5 bg-[#4f46e5] text-white px-6 py-3 rounded-lg font-semibold shadow">
                  IELTS রিসোর্সে যান
                </button>
              </div>
              <div className="w-full md:w-48 h-40 md:h-44 rounded-xl overflow-hidden">
                <img
                  src="/images/IELTS_masterclass/img_7.jpg"
                  alt="IELTS Resources"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ (Accordion) ===== */}
      <section className="px-4 md:px-8 mt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#4f46e5]">
            মনে প্রশ্ন এসেছে? আপনি একা নন। নিচের প্রশ্নগুলো থেকে দেখে নিন আপনার
            <br className="hidden md:block" />
            উত্তর! অথবা আমাদের সাথে যোগাযোগ করুন!
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => {
              const opened = openFaq === i;
              return (
                <div key={i} className="rounded-xl bg-[#eef2ff]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(opened ? null : i)}
                    className="w-full flex items-center justify-between px-5 md:px-6 py-4 text-left"
                  >
                    <span className="font-medium text-gray-900">{f.q}</span>
                    <span className="w-8 h-8 rounded-full bg-[#5b21b6] text-white flex items-center justify-center text-lg leading-none">
                      {opened ? "–" : "+"}
                    </span>
                  </button>
                  {opened && (
                    <div className="px-5 md:px-6 pb-5 text-gray-700">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
