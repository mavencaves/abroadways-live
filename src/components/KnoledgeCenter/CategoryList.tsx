import React from "react";

const CategoryList: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8 font-sans">
      {/* পেজসমূহ */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">পেজসমূহ</h1>
        <ul className="space-y-2 text-lg">
          <li>
            <a href="/home" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-black mr-2">•</span>হোম
            </a>
          </li>
          <li>
            <a href="/knowledge-center" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>বিদেশে উচ্চশিক্ষার জন্য নলেজ সেন্টার
            </a>
          </li>
        </ul>
      </div>

      {/* ক্যাটাগরি */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">ক্যাটাগরি</h1>
        <ul className="space-y-2 text-lg">
          <li>
            <a href="/category/colleges" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>কলেজসমূহ
            </a>
          </li>
          <li>
            <a href="/category/courses" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>কোর্সসমূহ
            </a>
          </li>
          <li>
            <a href="/category/exams" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>পরীক্ষা
            </a>
          </li>
          <li>
            <a href="/category/cost-calculator" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>খরচ হিসাব ক্যালকুলেটর
            </a>
          </li>
          <li>
            <a href="/category/general" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>সাধারণ
            </a>
          </li>
          <li>
            <a href="/category/ielts-prep" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>IELTS প্রস্তুতি
            </a>
          </li>
          <li>
            <a href="/category/jobs-internships" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>চাকরি ও ইন্টার্নশিপ
            </a>
          </li>
          <li>
            <a href="/category/student-stories" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>শিক্ষার্থীদের বাস্তব গল্প
            </a>
          </li>
          <li>
            <a href="/category/sat" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>SAT
            </a>
          </li>
          <li>
            <a href="/category/scholarships" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>বৃত্তি
            </a>
          </li>
          <li>
            <a href="/category/study-in-australia" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>অস্ট্রেলিয়ায় পড়াশোনা
            </a>
          </li>
          <li>
            <a href="/category/study-in-canada" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>কানাডায় পড়াশোনা
            </a>
          </li>
          <li>
            <a href="/category/study-in-germany" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>জার্মানিতে পড়াশোনা
            </a>
          </li>
          <li>
            <a href="/category/study-in-ireland" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>আয়ারল্যান্ডে পড়াশোনা
            </a>
          </li>
          <li>
            <a href="/category/study-in-uk" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>যুক্তরাজ্যে পড়াশোনা
            </a>
          </li>
          <li>
            <a href="/category/recommendation-letter" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>প্রশংসাপত্র
            </a>
          </li>
          <li>
            <a href="/category/toefl" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>TOEFL
            </a>
          </li>
          <li>
            <a href="/category/universities" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>বিশ্ববিদ্যালয়সমূহ
            </a>
          </li>
          <li>
            <a href="/category/visa" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <span className="text-blue-600 mr-2">•</span>ভিসা
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
