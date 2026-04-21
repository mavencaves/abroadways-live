import React, { useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight, FaGooglePlay, FaYoutube, FaFacebook, FaUsers } from "react-icons/fa";

// ----------------- Review Section -----------------
const testimonials = [
  {
    name: "সাদিয়া পারভীন",
    role: "শিক্ষার্থী",
    review:
      "এই ওয়েবসাইট থেকেই আমি SAT সম্পর্কে বিস্তারিত জানতে পারি এবং আমার কলেজ অ্যাডমিশনের সময় অনেক সাহায্য পেয়েছি। ধন্যবাদ পুরো টিমকে!",
    image: "https://i.ibb.co.com/N6J4k6ZC/attractive-male-university-student-doing-some-homework-school-library-smiling.jpg",
  },
  {
    name: "আরিফুল ইসলাম",
    role: "শিক্ষার্থী",
    review:
      "আমি GRE প্রস্তুতির জন্য এই প্ল্যাটফর্ম ব্যবহার করেছি। কোর্সগুলো একদম সহজভাবে সাজানো ছিল। অনেক হেল্পফুল!",
    image: "https://i.ibb.co.com/LDjZp6cz/young-smiling-student-woman-white-background.jpg",
  },
  {
    name: "মাহমুদা আক্তার",
    role: "শিক্ষার্থী",
    review:
      "অনলাইনে পড়াশোনার জন্য এরকম একটা গাইডলাইন খুব দরকার ছিল। এখান থেকে আমি TOEFL-এর জন্য ভালো প্রস্তুতি নিয়েছি।",
    image: "https://i.ibb.co.com/1YqyrM2f/happy-student-with-graduation-hat-diploma-grey.jpg",
  },
];

// ----------------- Success Stories -----------------
const stories = [
  { text: "“কোপেনহেগেন থেকে যুক্তরাষ্ট্রে উচ্চশিক্ষার জন্য কি প্রয়োজন পরিবর্তিত হবে”", image: "https://i.ibb.co.com/9H60vVP6/handsome-latin-man-helping-his-colleagues-out-by-explaining-some-his-work-library.jpg" },
  { text: "“হেলেনকেডও এআই ১৮৯% সঠিক ভিসা সফলতা রেট আন্দাজ করেছেন”", image: "https://i.ibb.co.com/8DPbxK5d/meeting-mobile-phone-lesson-wall-college.jpg" },
  { text: "“রিপোর্ট অনুযায়ী, বেইসিংভার শিক্ষার্থী এআই টুররের সহায়তায় ব্যাত ৬+ স্কোর করেছেন”", image: "https://i.ibb.co.com/N6pw6WhT/confident-youngsters-studying-posing.jpg" },
];

// ----------------- Communities -----------------
const stats = [
  { icon: <FaGooglePlay className="text-green-600 w-12 h-12" />, count: "১০ লাখ+", text: "ডাউনলোড করেছেন" },
  { icon: <FaYoutube className="text-red-600 w-12 h-12" />, count: "১ লাখ+", text: "ইউটিউব সাবস্ক্রাইবার" },
  { icon: <FaFacebook className="text-blue-600 w-12 h-12" />, count: "২ লাখ+", text: "ফেসবুক পরিবার" },
  { icon: <FaUsers className="text-purple-600 w-12 h-12" />, count: "১ লাখ+", text: "কমিউনিটি সদস্য" },
];

// ----------------- FAQs -----------------
const faqs = [
  { question: "আপনার AI কীভাবে ভিসা গ্রহণযোগ্যতা এবং IELTS প্রস্তুতিতে সাহায্য করে?", answer: "আমাদের AI সফল ভিসা প্রেডিকশন, পার্সোনালাইজড IELTS প্রস্তুতি এবং প্রয়োজনীয় কাজগুলোর মাধ্যমে আপনাকে সাহায্য করে।" },
  { question: "এই সার্ভিস কি সব দেশের জন্য উপলব্ধ?", answer: "হ্যাঁ, আমাদের সার্ভিস বিশ্বের বিভিন্ন দেশের জন্য উপলব্ধ। আপনি আপনার পছন্দের দেশ বেছে নিতে পারেন।" },
  { question: "এই প্ল্যাটফর্ম কি ফ্রি ব্যবহার করা যায়?", answer: "আমাদের কিছু সার্ভিস ফ্রি, তবে কিছু বিশেষ ফিচারের জন্য সাবস্ক্রিপশন প্রয়োজন।" },
  { question: "আপনি কি SOP, LOI, অথবা মোটিভেশন লেটার অফার করতে সাহায্য করেন?", answer: "হ্যাঁ, আমাদের প্ল্যাটফর্ম আপনাকে SOP, LOI, এবং অন্যান্য প্রয়োজনীয় ডকুমেন্ট তৈরিতে সাহায্য করবে।" },
  { question: "কীভাবে আমি আমার অ্যাপ্লিকেশনের অবস্থা ট্র্যাক করতে পারবো?", answer: "আপনি আমাদের ড্যাশবোর্ডের মাধ্যমে আপনার অ্যাপ্লিকেশনের রিয়েল-টাইম অবস্থা ট্র্যাক করতে পারবেন।" },
  { question: "এই AI কি ভিসা প্রেডিকশনের জন্য সঠিক এবং বিশ্বাসযোগ্য?", answer: "আমাদের AI উন্নত অ্যালগরিদম ব্যবহার করে এবং তথ্যগুলি নিয়মিত আপডেট করা হয়, যা এটিকে সঠিক এবং বিশ্বাসযোগ্য করে তোলে।" },
];

// ----------------- Main Landing Page -----------------
const SecondPart: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Testimonials navigation
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  // Success stories navigation
  const prevStory = () => setStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
  const nextStory = () => setStoryIndex((prev) => (prev + 1) % stories.length);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* ========== Review Section ========== */}
      <section className="py-10 w-full bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-4">আমাদের শিক্ষার্থীরা কী বলে</h2>
        <div className="relative max-w-4xl w-full mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover" />
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start text-yellow-500 mb-2">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                <p className="text-gray-700 mb-4 italic">“{testimonials[currentIndex].review}”</p>
                <h3 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <div key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-indigo-600" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full shadow hover:bg-indigo-700"><FaArrowLeft /></button>
          <button onClick={nextSlide} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full shadow hover:bg-indigo-700"><FaArrowRight /></button>
        </div>
      </section>

      {/* ========== Success Stories ========== */}
      <section className="bg-[#f0f3f6] p-8 text-center max-w-4xl mx-auto my-8 w-full">
        <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-8">স্বপ্ন পূরণের গল্পগুলো</h2>
        <div className="relative flex items-center justify-center">
          <button onClick={prevStory} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#4446a8] text-white">‹</button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-12">
            {stories.map((story, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-4 ${index === storyIndex ? "block scale-100" : "hidden md:block scale-90 opacity-80"}`}>
                <img src={story.image} alt="Success" className="w-full h-32 rounded-lg mb-4 object-cover" />
                <p className="text-sm text-gray-600 font-medium">{story.text}</p>
              </div>
            ))}
          </div>
          <button onClick={nextStory} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#4446a8] text-white">›</button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {stories.map((_, index) => (
            <span key={index} onClick={() => setStoryIndex(index)} className={`w-2 h-2 rounded-full cursor-pointer ${index === storyIndex ? "bg-[#4446a8]" : "bg-gray-300"}`} />
          ))}
        </div>
      </section>

      {/* ========== Communities ========== */}
      <section className="bg-white p-8 text-center max-w-4xl mx-auto my-8 w-full">
        <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-8">সবচেয়ে বড় কমিউনিটিতে যুক্ত হন</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#f0f3f6] p-4 rounded-lg shadow-sm flex flex-col items-center">
              {stat.icon}
              <p className="text-2xl font-bold text-[#4446a8]">{stat.count}</p>
              <p className="text-sm text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-white p-8 max-w-4xl mx-auto my-8 w-full">
        <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] text-center mb-6">প্রশ্নোত্তর</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#e6e8ff] rounded-lg shadow-sm">
              <div onClick={() => setOpenIndex(openIndex === index ? null : index)} className="p-4 flex justify-between items-center cursor-pointer">
                <span className="text-sm font-medium text-[#4446a8]">{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <div className="bg-white p-4 text-sm text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA ========== */}
  <div className="bg-indigo-700 text-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-lg font-sans relative overflow-hidden text-center mx-auto max-w-4xl my-8">
  {/* কোণার চারপাশে বৃত্তাকার ছবি */}
  <img
    src="https://i.ibb.co.com/Z6dP8W3q/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased.jpg"
    alt="User 1"
    className="absolute top-4 left-10 rounded-full w-12 h-12 md:w-16 md:h-16 border-2 border-white object-cover"
  />
  <img
    src="https://i.ibb.co.com/jZf1jL81/attractive-mixed-race-male-with-positive-smile-shows-white-teeth-keeps-hands-stomach-being-high-spir.jpg"
    alt="User 2"
    className="absolute top-4 right-10 rounded-full w-12 h-12 md:w-16 md:h-16 border-2 border-white object-cover"
  />
  <img
    src="https://i.ibb.co.com/JRs57Mh4/cheerful-curly-business-girl-wearing-glasses.jpg"
    alt="User 3"
    className="absolute bottom-4 left-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-2 border-white object-cover"
  />
  <img
    src="https://i.ibb.co.com/fYjxx2g1/waist-up-shot-pretty-girl-smiles-pleasantly.jpg"
    alt="User 4"
    className="absolute bottom-4 right-7 rounded-full w-12 h-12 md:w-16 md:h-16 border-2 border-white object-cover"
  />

  <h2 className="text-xl md:text-3xl font-bold mb-4">বিদেশে উচ্চশিক্ষার জন্য প্রস্তুত?</h2>
  <p className="text-sm md:text-base font-light mb-8 max-w-2xl mx-auto">
    আপনার বিদেশে উচ্চশিক্ষার যাত্রায় প্রথম পদক্ষেপ নিন। একজন এক্সপার্ট এর সাহায্য এবং সহায়তা নিন ভিসা প্রেডিকশন থেকে শুরু করে IELTS প্রস্তুতি পর্যন্ত। আমরা আপনাদের প্রতিটি ধাপে গাইড করব। আপনার ভবিষ্যতের পরিকল্পনা শুরু করুন!
  </p>
  <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
    কাউন্সিলর এর সাথে কথা বলুন
  </button>
</div>
    </div>
  );
};

export default SecondPart;
