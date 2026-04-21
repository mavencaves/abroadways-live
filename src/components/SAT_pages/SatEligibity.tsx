import React, { useRef } from "react";

/** SAT Eligibility 2025 — Single-file React + Tailwind (only card hover + card swapping animations) */
export default function SATEligibility2025() {
  const railRef = useRef<HTMLDivElement | null>(null);

  // Slide by one card + gap (card-swapping only)
  const stepScroll = (dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector<HTMLElement>("[data-card]");
    const cardW = firstCard
      ? firstCard.getBoundingClientRect().width
      : rail.clientWidth;
    const gap = 16; // gap-4
    rail.scrollBy({ left: dir * Math.round(cardW + gap), behavior: "smooth" });
  };

  const onCardClick = (e: React.MouseEvent, href?: string) => {
    const t = e.target as HTMLElement;
    if (t.closest(".chip") || t.closest(".rating")) return;
    if (href) window.location.href = href;
  };

  return (
    <main className="min-h-screen w-full bg-[#EDE6FF]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-7 lg:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.12fr_.64fr] items-start">
          {/* ================= LEFT ================= */}
          <div className="flex flex-col gap-6 min-w-0">
            {/* Lead */}
            <article className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.10)] p-4 sm:p-6">
              <header className="mb-2">
                <h1 className="text-[#5B50E6] font-extrabold tracking-tight leading-tight text-[26px] sm:text-[32px] lg:text-[44px] m-0">
                  SAT যোগ্যতা ২০২৫ বাংলাদেশে: বয়সসীমা, যোগ্যতা ও শর্তাবলী দেখুন
                </h1>
                <p className="text-sm text-[#6F6A84] mt-2 flex items-center gap-2">
                  <span aria-hidden>⏱️</span> আপডেট করা হয়েছে: ২৫ এপ্রিল, ২০২৫,
                  ৪:৫৬
                </p>
              </header>
              <section className="text-[#241F3A] text-[14px] sm:text-[16px] leading-8 space-y-3">
                <p>
                  SAT পরীক্ষা যুক্তরাষ্ট্রের ৪,০০০-এরও বেশি বিশ্ববিদ্যালয়ে
                  গৃহীত হয়, পাশাপাশি কানাডা, অস্ট্রেলিয়া, সিঙ্গাপুর এবং আরও
                  অনেক দেশের শিক্ষা প্রতিষ্ঠানে স্বীকৃত। ২০২৪ সালে বিশ্বব্যাপী
                  প্রায় ১৯ লক্ষ শিক্ষার্থী SAT-এর জন্য নিবন্ধন করেছিল, যার
                  মধ্যে উল্লেখযোগ্য সংখ্যক পরীক্ষার্থী ছিলেন বাংলাদেশ থেকে—আপনার
                  মতোই।
                </p>
                <p>
                  আপনি ১১শ বা ১২শ শ্রেণির যেকোনো একটিতে থাকুন না কেন, SAT
                  পরীক্ষার যোগ্যতার মানদণ্ড বোঝা জরুরি, যাতে নিশ্চিত হতে পারেন
                  যে নিবন্ধনের সব শর্ত আপনি পূরণ করেছেন। এই গাইডে আমরা SAT
                  পরীক্ষার যোগ্যতার মানদণ্ড নিয়ে আলোচনা করব, যার মধ্যে রয়েছে
                  সর্বোচ্চ বয়সসীমা, শিক্ষাগত পূর্বশর্ত এবং প্রয়োজনীয় নথিপত্র।
                </p>
              </section>
            </article>

            {/* Card-swapping rail */}
            <section className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4">
              <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[24px] lg:text-[28px] flex items-center gap-2">
                এই পৃষ্ঠায় <span aria-hidden>→</span>
              </h2>

              <div
                ref={railRef}
                className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc((100%-16px)/2)] gap-4 overflow-hidden snap-x snap-mandatory scroll-smooth"
              >
                {/* 1 */}
                <article
                  data-card
                  onClick={(e) => onCardClick(e, "#sec-1")}
                  className="group bg-white border border-[#E3DEF7] rounded-xl shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                >
                  <img
                    src="/images/SAT_pages/image-4.jpg"
                    alt=""
                    className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="px-4 pt-3">
                    <h3 className="text-[16px] leading-snug font-extrabold text-[#201B39] mb-1">
                      ১. SAT পরীক্ষার যোগ্যতার মানদণ্ড ২০২৫
                    </h3>
                    <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                      ২০২৫ সালে SAT পরীক্ষার জন্য নিবন্ধন করতে হলে আপনাকে
                      নির্দিষ্ট কিছু মানদণ্ড পূরণ করতে হবে।
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                    <a
                      className="chip inline-flex items-center font-extrabold text-[13px] bg-[#F0EDFF] text-[#5B50E6] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white cursor-pointer"
                      href="#sec-1"
                    >
                      আরও পড়ুন <span className="ml-1">▾</span>
                    </a>
                    <span className="rating text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">
                      ৩/৬
                    </span>
                  </div>
                </article>

                {/* 2 */}
                <article
                  data-card
                  onClick={(e) => onCardClick(e, "#sec-2")}
                  className="group bg-white border border-[#E3DEF7] rounded-xl shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                >
                  <img
                    src="/images/SAT_pages/image-5.jpg"
                    alt=""
                    className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="px-4 pt-3">
                    <h3 className="text-[16px] leading-snug font-extrabold text-[#201B39] mb-1">
                      ২. SAT পরীক্ষার বয়সসীমা ২০২৫
                    </h3>
                    <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                      College Board কোনো নির্দিষ্ট বয়সসীমা নির্ধারণ করেনি—তবে
                      কিছু বাস্তব নির্দেশনা আছে।
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                    <a
                      className="chip inline-flex items-center font-extrabold text-[13px] bg-[#F0EDFF] text-[#5B50E6] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white cursor-pointer"
                      href="#sec-2"
                    >
                      আরও পড়ুন <span className="ml-1">▾</span>
                    </a>
                    <span className="rating text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">
                      ২/৬
                    </span>
                  </div>
                </article>

                {/* 3 */}
                <article
                  data-card
                  onClick={(e) => onCardClick(e, "#sec-3")}
                  className="group bg-white border border-[#E3DEF7] rounded-xl shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                >
                  <img
                    src="/images/SAT_pages/image-6.jpg"
                    alt=""
                    className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="px-4 pt-3">
                    <h3 className="text-[16px] leading-snug font-extrabold text-[#201B39] mb-1">
                      ৩. SAT ২০২৫-এ অংশগ্রহণের জন্য শিক্ষাগত যোগ্যতা
                    </h3>
                    <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                      কোনো বাধ্যতামূলক শিক্ষাগত পূর্বশর্ত নেই—তবে প্রস্তুতির
                      কিছু স্ট্যান্ডার্ড আছে।
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                    <a
                      className="chip inline-flex items-center font-extrabold text-[13px] bg-[#F0EDFF] text-[#5B50E6] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white cursor-pointer"
                      href="#sec-3"
                    >
                      আরও পড়ুন <span className="ml-1">▾</span>
                    </a>
                    <span className="rating text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">
                      ৪/৬
                    </span>
                  </div>
                </article>
              </div>

              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => stepScroll(-1)}
                  className="w-12 h-12 grid place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)]"
                  aria-label="পূর্ববর্তী"
                >
                  ‹
                </button>
                <button
                  onClick={() => stepScroll(1)}
                  className="w-12 h-12 grid place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)]"
                  aria-label="পরবর্তী"
                >
                  ›
                </button>
              </div>
            </section>

            {/* 1 */}
            <section
              id="sec-1"
              className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <div className="p-5 sm:p-7">
                <h2 className="text-indigo-700 text-[22px] sm:text-[30px] lg:text-[38px] font-semibold leading-snug">
                  <span className="mr-1">১.</span> SAT পরীক্ষার যোগ্যতার মানদণ্ড
                  ২০২৫
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-gray-700">
                  ২০২৫ সালে SAT পরীক্ষার জন্য রেজিস্ট্রেশন করতে হলে কিছু
                  নির্দিষ্ট যোগ্যতার মানদণ্ড পূরণ করতে হবে। বিষয়গুলো জানা জরুরি
                  যাতে আপনি কোনো সমস্যায় না পড়ে পরীক্ষার জন্য প্রস্তুতি নিতে
                  পারেন।
                </p>
              </div>
              <div className="px-5 sm:px-7 pb-8">
                <div className="overflow-hidden rounded-xl border border-[#E3DEF7] bg-white">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-[#5B50E6] text-white">
                        <th className="w-60 text-left px-4 sm:px-6 py-3 text-sm font-semibold">
                          দিক
                        </th>
                        <th className="text-left px-4 sm:px-6 py-3 text-sm font-semibold">
                          বিস্তারিত
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#E3DEF7]">
                        <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-800">
                          বয়সের শর্ত
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          SAT দেওয়ার জন্য কোনো সরকারি বয়সসীমা নেই।
                        </td>
                      </tr>
                      <tr className="border-t border-[#E3DEF7]">
                        <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-800">
                          শিক্ষাগত যোগ্যতা
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          ন্যূনতম শিক্ষাগত যোগ্যতার বাধ্যবাধকতা নেই।
                        </td>
                      </tr>
                      <tr className="border-t border-[#E3DEF7]">
                        <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-800">
                          চেষ্টার সংখ্যা
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          একাধিকবার পরীক্ষা দেওয়া যায়; সীমা নির্ধারণ নেই।
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 2 — plus/minus */}
            <section
              id="sec-2"
              className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <div className="p-5 sm:p-7">
                <h2 className="text-indigo-700 text-[22px] sm:text-[30px] lg:text-[38px] font-semibold leading-snug">
                  <span className="mr-1">২.</span> SAT পরীক্ষার বয়সসীমা ২০২৫
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-gray-700">
                  College Board SAT পরীক্ষার জন্য কোনো নির্দিষ্ট বয়সসীমা
                  নির্ধারণ করেনি। শিক্ষার্থীরা তাদের প্রস্তুতির উপর ভিত্তি করে
                  যেকোনো বয়সে পরীক্ষায় অংশগ্রহণ করতে পারে—তবে সাধারণত হাই
                  স্কুল শিক্ষার্থীরাই এটা দেয়।
                </p>
              </div>

              <div className="px-5 sm:px-7 pb-6">
                <div className="overflow-hidden rounded-xl border border-[#E3DEF7] bg-white">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-[#5B50E6] text-white">
                        <th className="text-left px-4 sm:px-6 py-3 text-sm font-semibold">
                          বয়স গ্রুপ
                        </th>
                        <th className="text-left px-4 sm:px-6 py-3 text-sm font-semibold">
                          রেজিস্ট্রেশন পদ্ধতি
                        </th>
                        <th className="text-left px-4 sm:px-6 py-3 text-sm font-semibold">
                          আইডি প্রয়োজনীয়তা
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#E3DEF7]">
                        <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-800">
                          ১২ বছর বা কম
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          ডাকযোগে
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          অভিভাবকের সম্মতি
                        </td>
                      </tr>
                      <tr className="border-t border-[#E3DEF7]">
                        <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-800">
                          ১৩ বছর বা বেশি
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          অনলাইনে রেজিস্ট্রেশন (ফ্রি অ্যাকাউন্ট)
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          অভিভাবকের সম্মতি
                        </td>
                      </tr>
                      <tr className="border-t border-[#E3DEF7]">
                        <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-800">
                          ২১ বছর বা বেশি
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          অনলাইন/ডাকযোগে
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-800">
                          সরকারি ফটো আইডি
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-3 px-5 sm:px-7 pb-10">
                {[
                  {
                    h: "কোনো বয়সসীমা নেই",
                    b: "SAT-এর জন্য কোনো অফিসিয়াল বয়সসীমা নেই; প্রস্তুত থাকলেই পারবেন।",
                  },
                  {
                    h: "কম বয়সী শিক্ষার্থী",
                    b: "১৩ বছরের নিচে হলে অভিভাবকের সহায়তায় রেজিস্ট্রেশন করতে হতে পারে।",
                  },
                  {
                    h: "বয়স্ক প্রার্থী",
                    b: "২১+ হলে বৈধ ফটো আইডি বাধ্যতামূলক; রেজিস্ট্রেশন অনলাইন/ডাকে।",
                  },
                  {
                    h: "পুনরায় পরীক্ষা",
                    b: "SAT একাধিকবার দেওয়া যায়; সর্বোচ্চ স্কোর কলেজে পাঠাতে পারবেন।",
                  },
                ].map((it, i) => (
                  <details
                    key={i}
                    className="group bg-white border border-[#E3DEF7] rounded-xl"
                  >
                    <summary className="list-none cursor-pointer p-4 flex justify-between items-center font-semibold text-gray-900">
                      <span>{it.h}</span>
                      <span className="ml-4 leading-none">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">–</span>
                      </span>
                    </summary>
                    <div className="px-4 sm:px-6 pb-4 text-sm text-gray-700 leading-7">
                      {it.b}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 3 */}
            <section
              id="sec-3"
              className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <div className="p-6 sm:p-10">
                <h2 className="text-[30px] sm:text-[36px] font-extrabold leading-snug text-indigo-700">
                  <span className="mr-1">৩.</span> SAT ২০২৫-এ অংশগ্রহণের জন্য
                  শিক্ষাগত যোগ্যতা
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-gray-700">
                  SAT-এর জন্য কোনো বাধ্যতামূলক শিক্ষাগত পূর্বশর্ত নেই। তবে
                  সাধারণত হাই স্কুল কারিকুলামের গণিত, রিডিং, রাইটিং অ্যান্ড
                  ল্যাঙ্গুয়েজ বিষয়গুলোতে পারদর্শিতা থাকা দরকার।
                </p>

                <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  ১. একাডেমিক ব্যাকগ্রাউন্ড
                </h3>
                <ul className="mt-3 space-y-2 text-[15px] leading-7 text-gray-800 list-disc pl-5">
                  <li>
                    <span className="font-medium">Math:</span> Algebra,
                    Geometry, Data Analysis, Basic Trigonometry
                  </li>
                  <li>
                    <span className="font-medium">Reading:</span> দ্রুত বোঝা ও
                    বিশ্লেষণ
                  </li>
                  <li>
                    <span className="font-medium">Writing & Language:</span>{" "}
                    ব্যাকরণ, বিরামচিহ্ন, বাক্য রচনা
                  </li>
                </ul>

                <h3 className="mt-8 text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  ২. শিক্ষা সম্পন্নদের জন্য
                </h3>
                <p className="text-[15px] leading-7 text-gray-700 pb-6">
                  ক্লাস XI সম্পন্ন করলেও SAT দেওয়া যায়; নির্দিষ্ট
                  সার্টিফিকেটের প্রয়োজন নেই—কলেজ এডমিশনের জন্য স্কোর
                  ব্যবহারযোগ্য।
                </p>
              </div>
            </section>

            {/* 4 — Required documents (already corrected earlier) */}
            <section
              id="sec-4"
              className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <div className="p-6 sm:p-10">
                <h2 className="text-[30px] sm:text-[36px] font-extrabold leading-snug text-indigo-700">
                  <span className="mr-1">৪.</span> SAT পরীক্ষার জন্য প্রয়োজনীয়
                  নথিপত্র
                </h2>

                <p className="mt-4 text-[16px] leading-7 text-gray-700">
                  SAT পরীক্ষায় রেজিস্ট্রেশন করতে হলে কিছু নির্দিষ্ট কাগজপত্র
                  জমা দিতে হয়। এই কাগজপত্রগুলো আপনার পরিচয় যাচাই করতে এবং SAT
                  পরীক্ষার যোগ্যতার শর্ত পূরণ নিশ্চিত করতে ব্যবহৃত হয়।
                </p>
                <p className="mt-2 text-[16px] leading-7 text-gray-700">
                  নিচে SAT রেজিস্ট্রেশনের জন্য প্রয়োজনীয় কাগজপত্রের তালিকা
                  দেওয়া হলো—
                </p>

                <div className="mt-6 border border-black rounded-xl overflow-hidden">
                  <img
                    src="/images/SAT_pages/image-7.png"
                    alt="SAT Exam Documents Required"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "বৈধ পরিচয়পত্র",
                    "পাসপোর্ট সাইজের ছবি",
                    "SAT ভর্তি টিকিট",
                    "SSD যোগ্যতার চিঠি (প্রযোজ্য হলে)",
                    "অন্যান্য নথি (প্রযোজ্য হলে)",
                  ].map((label, i) => (
                    <details
                      key={i}
                      className="group rounded-xl bg-[#EFE9FF] border border-[#E3DEF7]"
                    >
                      <summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between font-semibold text-[#1F1B36]">
                        <span>{label}</span>
                        <span className="ml-4   text-indigo-700 w-7 h-7 grid place-items-center">
                          <span className="group-open:hidden">+</span>
                          <span className="hidden group-open:inline">–</span>
                        </span>
                      </summary>
                      <div className="px-5 pb-4 text-[15px] leading-7 text-gray-700">
                        এই নথিটি পরীক্ষার আগে/পরীক্ষার দিনে যাচাইয়ের জন্য
                        ব্যবহৃত হবে।
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* 5 — SAT পরীক্ষার ফি মওকুফের জন্য যোগ্যতার মানদণ্ড */}
            <section
              id="sec-5"
              className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <div className="p-6 sm:p-10">
                <h2 className="text-[30px] sm:text-[36px] font-extrabold leading-snug text-indigo-700">
                  <span className="mr-1">৫.</span> SAT পরীক্ষার ফি মওকুফের জন্য
                  যোগ্যতার মানদণ্ড
                </h2>

                <p className="mt-4 text-[16px] leading-7 text-gray-700">
                  SAT পরীক্ষা এমন শিক্ষার্থীদের জন্য ফি ওয়েভার সুবিধা প্রদান
                  করে, যারা আর্থিক কারণে রেজিস্ট্রেশনের খরচ বহন করতে সমস্যায়
                  পড়তে পারে।
                </p>
                <p className="mt-2 text-[16px] leading-7 text-gray-700">
                  বাংলাদেশে স্কলারশিপ প্রোগ্রামে যোগ্য হতে হলে আপনাকে নিচের
                  শর্তগুলো পূরণ করতে হবে:
                </p>

                {/* ১. আর্থিকিক যোগ্যতা */}
                <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                  ১. আর্থিকিক যোগ্যতা
                </h3>
                <ul className="mt-3 space-y-2 text-[15px] leading-7 text-gray-800 list-disc pl-5">
                  <li>
                    <span className="font-medium">
                      SAT রেজিস্ট্রেশনে ১০০% ছাড়:
                    </span>{" "}
                    যেসব শিক্ষার্থীর পরিবারের বার্ষিক আয় ৮ লাখ টাকার কম।
                  </li>
                  <li>
                    <span className="font-medium">
                      SAT রেজিস্ট্রেশনে ৫০% ছাড়:
                    </span>{" "}
                    যেসব শিক্ষার্থীর পরিবারের বার্ষিক আয় ৮ লাখ থেকে ১৫ লাখ টাকার
                    মধ্যে।
                  </li>
                </ul>

                {/* ২. মেধাভিত্তিক স্কলারশিপ যোগ্যতা */}
                <h3 className="mt-8 text-lg sm:text-xl font-semibold text-gray-900">
                  ২. মেধাভিত্তিক স্কলারশিপ যোগ্যতা
                </h3>
                <ul className="mt-3 space-y-2 text-[15px] leading-7 text-gray-800 list-disc pl-5">
                  <li>
                    স্কলারশিপের জন্য আবেদন করতে শিক্ষার্থীদের SAT পরীক্ষায় অন্তত
                    ১৩০০ স্কোর অর্জন করতে হবে।
                  </li>
                  <li>
                    স্কলারশিপ সাধারণত অংশগ্রহণকারী বাংলাদেশি বিশ্ববিদ্যালয়গুলোতে
                    পাওয়া যাবে।
                  </li>
                  <li>
                    যেসব শিক্ষার্থীর পরিবারের বার্ষিক আয় ৮ লাখ টাকার কম, তারা
                    পূর্ণ/উচ্চতর ফি স্কলারশিপের জন্য যোগ্য।
                  </li>
                </ul>

                {/* সমাপনী বার্তা */}
                <p className="mt-8 text-[16px] leading-7 text-gray-700">
                  SAT-এ ১৩০০ বা তার বেশি স্কোর করলে আপনি শুধু স্কলারশিপের যোগ্যই
                  হবেন না, বরং{" "}
                  <span className="font-semibold text-indigo-700">
                    SAT Bangladesh Top Performer
                  </span>{" "}
                  হিসেবে স্বীকৃতি পাবেন, যা বিশ্ববিদ্যালয়ে আবেদন করার সময় আপনার
                  প্রতিযোগিতায় বাড়তি সুবিধা দেবে।
                </p>
              </div>
            </section>

            {/* 6 */}
            <section
              id="sec-6"
              className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <div className="p-6 sm:p-10">
                <h2 className="text-[30px] sm:text-[36px] font-extrabold leading-snug text-indigo-700">
                  <span className="mr-1">৬.</span> ডিজিটাল SAT পরীক্ষায়
                  অংশগ্রহণকারীদের যোগ্যতা
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-gray-700">
                  ডিজিটাল SAT প্রথাগত SAT-এর আধুনিক সংস্করণ; প্রধানত একই যোগ্যতা
                  প্রযোজ্য, তবে ফরম্যাট ভিত্তিক প্রস্তুতি দরকার।
                </p>
              </div>

              <div className="px-6 sm:px-10 pb-8">
                <div className="overflow-hidden rounded-xl border border-[#E3DEF7] bg-white">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#5B50E6] text-white">
                        <th className="text-left px-5 sm:px-8 py-4 text-base font-semibold">
                          মানদণ্ড
                        </th>
                        <th className="text-left px-5 sm:px-8 py-4 text-base font-semibold">
                          বিস্তারিত
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E3DEF7]">
                      <tr>
                        <td className="align-top px-5 sm:px-8 py-5 text-[15px] font-medium text-gray-900">
                          বয়সের শর্ত
                        </td>
                        <td className="px-5 sm:px-8 py-5 text-[15px] text-gray-800">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>রেজিস্ট্রেশনের জন্য অন্তত ১৩ বছর</li>
                            <li>১৩-এর নিচে হলে অভিভাবকের সম্মতি</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-top px-5 sm:px-8 py-5 text-[15px] font-medium text-gray-900">
                          পরীক্ষার ফরম্যাট
                        </td>
                        <td className="px-5 sm:px-8 py-5 text-[15px] text-gray-800">
                          কম্পিউটার ভিত্তিক
                        </td>
                      </tr>
                      <tr>
                        <td className="align-top px-5 sm:px-8 py-5 text-[15px] font-medium text-gray-900">
                          সময়কাল
                        </td>
                        <td className="px-5 sm:px-8 py-5 text-[15px] text-gray-800">
                          প্রায় ২ ঘন্টা ১৪ মিনিট
                        </td>
                      </tr>
                      <tr>
                        <td className="align-top px-5 sm:px-8 py-5 text-[15px] font-medium text-gray-900">
                          পরিচয়পত্র
                        </td>
                        <td className="px-5 sm:px-8 py-5 text-[15px] text-gray-800">
                          অ্যাডমিশন টিকিট + বৈধ আইডি
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 7 — caret ^ accordions */}
            <section
              id="sec-7"
              className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <div className="p-6 sm:p-10">
                <h2 className="text-[30px] sm:text-[36px] font-extrabold leading-snug text-indigo-700">
                  <span className="mr-1">৭.</span> SAT পরীক্ষার স্কোর গ্রহণকারী
                  বিশ্ববিদ্যালয়সমূহ
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-gray-700">
                  যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়াসহ বহু দেশের
                  বিশ্ববিদ্যালয় SAT স্কোর গ্রহণ করে—প্রোগ্রামভেদে ন্যূনতম স্কোর
                  ভিন্ন হতে পারে।
                </p>
              </div>

              <div className="space-y-4 px-6 sm:px-10 pb-10">
                {[
                  "যুক্তরাষ্ট্রের বিশ্ববিদ্যালয়",
                  "যুক্তরাজ্যের বিশ্ববিদ্যালয়",
                  "কানাডার বিশ্ববিদ্যালয়",
                  "অস্ট্রেলিয়ার বিশ্ববিদ্যালয়",
                ].map((title, i) => (
                  <details
                    key={i}
                    className="bg-white border border-[#E3DEF7] rounded-xl"
                  >
                    <summary className="list-none cursor-pointer p-5 flex justify-between items-center font-semibold text-gray-900">
                      <span>{title}</span>
                      <span className="ml-4 text-indigo-700 font-bold leading-none">
                        ^
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-gray-700 text-[15px] leading-7">
                      <p>
                        বিশ্ববিদ্যালয়ভেদে স্কোর ও সাবস্কোরের প্রয়োজনীয়তা
                        আলাদা হতে পারে; অফিসিয়াল ওয়েবসাইট দেখে নিন।
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 8 — UPDATED FULL CONTENT */}
            <section
              id="sec-8"
              className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <div className="p-6 sm:p-10">
                <h2 className="text-[30px] sm:text-[36px] font-extrabold leading-snug text-indigo-700">
                  <span className="mr-1">৮.</span> বিশেষভাবে সক্ষম শিক্ষার্থীদের
                  জন্য SAT পরীক্ষার যোগ্যতার মানদণ্ড
                </h2>

                <p className="mt-4 text-[16px] leading-7 text-gray-700">
                  SAT পরীক্ষা এমন শিক্ষার্থীদের জন্যও অন্তর্ভুক্ত, যাদের
                  প্রমাণিত প্রতিবন্ধকতা রয়েছে। শিক্ষার্থীরা College Board-এর
                  Services for Students with Disabilities (SSD) এর মাধ্যমে আবেদন
                  করতে পারে। এখানে শিক্ষার্থীদের প্রয়োজনের অনুবর্তী বিভিন্ন
                  ধরনের বিশেষ সুবিধা প্রদান করা হয়।
                </p>
                <p className="mt-2 text-[16px] leading-7 text-gray-700">
                  Accommodations-এর জন্য আবেদন করার ধাপসমূহঃ
                </p>

                <div className="mt-6 border border-black rounded-xl overflow-hidden">
                  <img
                    src="/images/SAT_pages/image-8.png"
                    alt="SAT Exam Eligibility for Specialised-Abled Students"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <ol className="mt-8 list-decimal pl-5 text-[16px] leading-8 text-gray-800 space-y-4">
                  <li>
                    <span className="font-semibold">অনুমোদনের প্রক্রিয়া</span>
                    <br />
                    প্রতিবন্ধী শিক্ষার্থীদের প্রথমে College Board-এর SSD থেকে
                    অনুমোদন পেতে হবে। অনুমোদন নির্ভর করে প্রতিবন্ধকতার
                    প্রমাণপত্র ও প্রয়োজনীয় সুবিধার উপর।
                  </li>
                  <li>
                    <span className="font-semibold">স্কুলের সঙ্গে সমন্বয়</span>
                    <br />
                    যদি আপনি কোনো স্কুলে পড়েন, তাহলে আপনার স্কুলের SSD
                    কো-অর্ডিনেটরের সঙ্গে কাজ করুন এবং সুবিধাগুলো নিশ্চিত করুন।
                    যদি বর্তমানে স্কুলে না পড়েন, তাহলে SSD-কে যোগাযোগ করে
                    পরীক্ষার জন্য উপযুক্ত স্থানে সুবিধা ব্যবস্থা করা যায়।
                  </li>
                  <li>
                    <span className="font-semibold">নথি জমা</span>
                    <br />
                    প্রয়োজনগুলো নিশ্চিত করতে যে সব প্রয়োজনীয় নথি জমা হয়—এর
                    মধ্যে চিকিৎসা রিপোর্ট বা শিক্ষাগত মূল্যায়ন অন্তর্ভুক্ত
                    থাকে, যা প্রতিবন্ধকতা নিশ্চিত করে।
                  </li>
                  <li>
                    <span className="font-semibold">SSD যোগ্যতার চিঠি</span>
                    <br />
                    অনুমোদন পাওয়ার পর শিক্ষার্থী একটি SSD যোগ্যতার চিঠি পাবেন,
                    যা পরীক্ষার দিন অবশ্যই দেখাতে হবে।
                  </li>
                </ol>

                {/* Lavender (+) accordions */}
                <div className="mt-8 space-y-3">
                  {[
                    {
                      t: "সুবিধার ধরনসমূহ",
                      c: (
                        <ul className="list-disc pl-5 space-y-2 text-[15px] leading-7">
                          <li>অতিরিক্ত সময় (Extended Time)</li>
                          <li>অতিরিক্ত বিরতি</li>
                          <li>রিডার/স্ক্রাইব বা রিড-আলাউড সফটওয়্যার</li>
                          <li>বড়-ফন্ট/ব্রেইল উপকরণ</li>
                          <li>সহায়ক প্রযুক্তির অনুমোদন</li>
                        </ul>
                      ),
                    },
                    {
                      t: "সুবিধার জন্য কখন আবেদন করতে হবে",
                      c: (
                        <p className="text-[15px] leading-7">
                          পরীক্ষা তারিখের কমপক্ষে <strong>৭–৮ সপ্তাহ</strong>{" "}
                          আগে SSD আবেদনের কাগজপত্র জমা দেওয়া উত্তম, যাতে যাচাই
                          ও অনুমোদন সময়মতো সম্পন্ন হয়।
                        </p>
                      ),
                    },
                  ].map((a, i) => (
                    <details
                      key={i}
                      className="group rounded-xl bg-[#EFE9FF] border border-[#E3DEF7]"
                    >
                      <summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between font-semibold text-[#1F1B36]">
                        <span>{a.t}</span>
                        <span className="ml-4 text-indigo-700 w-7 h-7 grid place-items-center">
                          <span className="group-open:hidden">+</span>
                          <span className="hidden group-open:inline">–</span>
                        </span>
                      </summary>
                      <div className="px-5 pb-4 text-gray-700">{a.c}</div>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* Next steps */}
            <section
              aria-labelledby="next-steps-title"
              className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5"
            >
              <h3
                id="next-steps-title"
                className="m-0 mb-3 font-extrabold text-[#4C43D6] text-[18px] sm:text-[22px]"
              >
                পরবর্তী ধাপ
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "SAT পরীক্ষার তারিখ",
                  "SAT পরীক্ষা ফি",
                  "SAT পরীক্ষার কেন্দ্র",
                ].map((t, i) => (
                  <article
                    key={i}
                    className="bg-white border border-[#E3DEF7] rounded-xl shadow-[0_10px_28px_rgba(91,80,230,0.10)] p-5 flex flex-col gap-2 min-h-[160px]"
                  >
                    <h4 className="text-[#211B3A] text-[16px] font-extrabold m-0">
                      {t}
                    </h4>
                    <a
                      className="mt-auto inline-flex items-center gap-1 text-[#5B50E6] font-extrabold hover:text-[#4C43D6] cursor-pointer"
                      href="#!"
                    >
                      এখনই পড়ুন <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {/* Info banks */}
            <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5">
              <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[22px]">
                IELTS গুরুত্বপূর্ণ তথ্য
              </h3>
              <div className="bg-white border border-[#E3DEF7] rounded-xl grid overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[
                  "IELTS পরীক্ষা",
                  "IELTS পরীক্ষার তারিখ",
                  "IELTS পরীক্ষা ফি",
                  "IELTS মডিউল",
                  "IELTS শোনার অনুশীলন পরীক্ষা",
                  "IELTS কথা বলার অনুশীলন পরীক্ষা",
                  "IELTS লেখার অনুশীলন পরীক্ষা",
                  "IELTS পরীক্ষার কেন্দ্র",
                  "IELTS ফলাফল",
                  "IELTS-এর ধরন",
                  "IELTS প্যাটার্ন",
                  "IELTS ব্যান্ড স্কোর",
                  "IELTS পরীক্ষার যোগ্যতা",
                  "IELTS স্লট বুকিং",
                  "IELTS রেজিস্ট্রেশন",
                  "IELTS প্রস্তুতি",
                  "IELTS বই",
                  "IELTS অনলাইন পরীক্ষা",
                ].map((label, i) => (
                  <a
                    key={i}
                    href="#"
                    className="relative flex items-center justify-between gap-4 px-4 py-3 border-t border-l border-[#E3DEF7] text-[#201B39] font-bold hover:bg-[#F7F5FF]"
                  >
                    {label}{" "}
                    <span className="text-[#5B50E6] font-extrabold">→</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5">
              <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[22px]">
                SAT গুরুত্বপূর্ণ তথ্য
              </h3>
              <div className="bg-white border border-[#E3DEF7] rounded-xl grid overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "SAT পরীক্ষা",
                  "SAT তারিখসমূহ",
                  "SAT ফলাফল",
                  "SAT ফি",
                  "SAT সিলেবাস",
                  "SAT কথা বলার অনুশীলন পরীক্ষা",
                  "SAT লেখার অনুশীলন পরীক্ষা",
                  "SAT শোনার অনুশীলন পরীক্ষা",
                  "SAT বই",
                  "SAT রেজিস্ট্রেশন",
                  "SAT অনুশীলন",
                  "SAT প্রস্তুতি",
                  "SAT অনলাইন পরীক্ষা",
                ].map((label, i) => (
                  <a
                    key={i}
                    href="#"
                    className="relative flex items-center justify-between gap-4 px-4 py-3 border-t border-l border-[#E3DEF7] text-[#201B39] font-bold hover:bg-[#F7F5FF]"
                  >
                    {label}{" "}
                    <span className="text-[#5B50E6] font-extrabold">→</span>
                  </a>
                ))}
              </div>
            </section>

            {/* FAQ — caret ^ on the right */}
            <section className="max-w-4xl bg-[#ede9fe] rounded-xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                শিক্ষার্থীদের করা সবচেয়ে বেশি প্রশ্ন সমূহ–
              </h3>
              <div className="space-y-3">
                {[
                  {
                    q: "SAT-এর পূর্ণরূপ কী?",
                    a: "SAT-এর পূর্ণরূপ হলো Scholastic Assessment Test। College Board পরিচালিত এই পরীক্ষা রিডিং, রাইটিং ও ম্যাথে দক্ষতা মূল্যায়ন করে।",
                  },
                  {
                    q: "SAT পরীক্ষা কিসের জন্য?",
                    a: "যুক্তরাষ্ট্রসহ বহু দেশে বিশ্ববিদ্যালয় ভর্তি ও স্কলারশিপের যোগ্যতা যাচাইয়ের জন্য।",
                  },
                  {
                    q: "SAT পরীক্ষা বৃত্তি যোগ্যতার শর্ত কী?",
                    a: "নির্দিষ্ট স্কোর/সাবস্কোরের ভিত্তিতে প্রতিষ্ঠানভেদে আলাদা; অফিসিয়াল ওয়েবসাইট দেখুন।",
                  },
                  {
                    q: "SAT পরীক্ষার বিস্তারিত তথ্য কি দিতে পারেন?",
                    a: "ডিজিটাল ফরম্যাট; Reading & Writing + Math; মোট ~২ ঘন্টা ১৪ মিনিট; স্কোর ৪০০–১৬০০।",
                  },
                  {
                    q: "SAT শিক্ষার্থীদের কীভাবে উপকৃত করে?",
                    a: "বিশ্ববিদ্যালয়ভর্তি ও স্কলারশিপের সম্ভাবনা বাড়ায়; একাডেমিক প্রস্তুতির প্রমাণ দেয়।",
                  },
                ].map((f, i) => (
                  <details
                    key={i}
                    className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
                  >
                    <summary className="list-none cursor-pointer px-5 py-4 text-slate-900 font-medium flex justify-between items-center">
                      <span>{f.q}</span>
                      <span className="ml-4 text-indigo-700 font-bold leading-none">
                        ^
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-slate-700 leading-relaxed">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* ================= RIGHT ================= */}
          <aside aria-labelledby="more-title">
            <div className="flex items-center justify-between px-1 pb-2">
              <h2
                id="more-title"
                className="m-0 font-extrabold text-[20px] sm:text-[24px] lg:text-[28px] text-[#17132E]"
              >
                আরও পড়ুন
              </h2>
              <a
                className="inline-flex items-center gap-1 font-extrabold text-sm text-[#5B50E6] hover:underline"
                href="#"
              >
                সব দেখুন
              </a>
            </div>
            <div className="grid gap-3">
              {[
                {
                  img: "/images/SAT_pages/image-1.jpg",
                  t: "প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো",
                  m: "১২ জুলাই, ২০২৪ • ৫ মিনিট",
                },
                {
                  img: "/images/SAT_pages/image-2.jpg",
                  t: "বিশ্বের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়বেন এবং কেন?",
                  m: "১৯ জুলাই, ২০২৪ • ৫ মিনিট",
                },
                {
                  img: "/images/SAT_pages/image-3.jpg",
                  t: "যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়সমূহ ও তাদের বিশেষত্ব: কেন আপনার এখানেই পডা উচিত?",
                  m: "১৯ জুলাই, ২০২৪ • ৫ মিনিট",
                },
              ].map((s, i) => (
                <a key={i} className="block no-underline text-inherit" href="#">
                  <img
                    src={s.img}
                    alt=""
                    className="w-full h-46 object-cover rounded-xl"
                  />
                  <div className="pt-2 px-0.5">
                    <h3 className="m-0 my-1 font-extrabold text-[16px] leading-snug text-[#211B3A] line-clamp-2">
                      {s.t}
                    </h3>
                    <p className="m-0 text-[#776F92] text-[13px]">{s.m}</p>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
