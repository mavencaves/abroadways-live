
const Intro = () => {
  return (
    <div className="bg-[#f0f3f6]  p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Main Header with Breadcrumbs */}
          <header className="mb-6">
            <nav className="text-sm font-medium text-gray-500">
              <a href="#" className="hover:underline">বিদেশে উচ্চশিক্ষা</a> / 
              <a href="#" className="hover:underline">পরীক্ষাসমূহ</a> / 
              <a href="#" className="hover:underline">IELTS</a> / 
              <a href="#" className="hover:underline text-[#4446a8]">লিসেনিং</a>
            </nav>
          </header>

          {/* Title Section */}
          <h1 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-2">
            IELTS লিসেনিং অনুশীলন পরীক্ষা
          </h1>
          <p className="text-xs text-gray-500 mb-6">
            আপডেট করা হয়েছে: ২০ এপ্রিল, ২০২৩, ৪:০৪
          </p>

          {/* Content Paragraphs */}
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            আপনি কি IELTS Listening টেস্টের জন্য প্রস্তুতি নিচ্ছেন? তাহলে আপনি সঠিক জায়গায় এসেছেন! সফলতার জন্য তৈরি এই গুরুত্বপূর্ণ রিসোর্সগুলোর সাহায্যে প্রস্তুত হোন আপনার ব্যান্ড স্কোর বাড়াতে।
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            IELTS Listening টেস্টের ক্ষেত্রে নিয়মিত লিসেনিং স্যাম্পল টেস্ট অনুশীলন করা অত্যন্ত জরুরি। এগুলো শুধু আপনাকে টেস্ট ফরম্যাটের সাথে পরিচিত করে না, বরং বিভিন্ন উচ্চারণ ও বক্তৃতার ধরন বুঝাতে আপনার কানকে প্রশিক্ষিত করে। এটি খুবই গুরুত্বপূর্ণ, যাতে আপনি সময়ের চাপে কথোপকথন ও মনোলগ সহজে অনুসরণ ও বুঝতে পারেন। নিয়মিত অনুশীলনের মাধ্যমে আপনি আপনার শোনার দক্ষতা নিশ্চিত করবেন এবং আত্মবিশ্বাস অর্জন করবেন, যা ভালো করার জন্য অপরিহার্য।
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            প্র্যাকটিস প্রশ্নের সেরা সংগ্রহটি এক্সপ্লোর করুন, যেখানে প্রতিটি সেকশন দক্ষতার সাথে মোকাবিলা করার জন্য টিপস ও ট্রিকসও দেওয়া আছে। যত বেশি অনুশীলন করবেন, তত ভালো প্রস্তুত থাকবেন এবং পরীক্ষাটি কম ভীতিকর ও আরও সহজ হয়ে যাবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
