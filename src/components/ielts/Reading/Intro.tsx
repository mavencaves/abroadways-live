import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface PDFItem {
  title: string;
  url: string;
}

const Intro: React.FC = () => {
  // FAQ data for FeatureTwo
  const faqs: FAQItem[] = [
    {
      question: "ফরম্যাট, সময়কাল, এবং স্কোরিং (২০২৪ এর আপডেট)",
      answer: "IELTS রিডিং সেকশনে তিনটি প্যাসেজ থাকে এবং ৪০টি প্রশ্নের উত্তর দিতে হয়। সময় থাকে ৬০ মিনিট। প্রতিটি সঠিক উত্তরের জন্য ১ পয়েন্ট করে স্কোর করা হয় এবং এই স্কোর ব্যান্ড স্কোরে রূপান্তরিত হয়।"
    },
    {
      question: "আপনার সামগ্রিক স্কোরের জন্য IELTS রিডিং টেস্ট কেন গুরুত্বপূর্ণ?",
      answer: "IELTS রিডিং টেস্ট আপনার সামগ্রিক ব্যান্ড স্কোরে একটি গুরুত্বপূর্ণ ভূমিকা পালন করে কারণ এটি আপনার ইংরেজি ভাষা বোঝার দক্ষতা, বিশ্লেষণ ক্ষমতা এবং শব্দভান্ডার পরীক্ষা করে।"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // PDF data for FeatureThree
  const pdfs: PDFItem[] = [
    { title: "IELTS Reading Practice Test PDF 1", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 2", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 3", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 4", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 5", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 6", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 7", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 8", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 9", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
    { title: "IELTS Reading Practice Test PDF 10", url: "../../../../public/images/Bristy/Pdf/cambridge-ielts-8.pdf" },
  ];

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#f0f3f6] min-h-screen p-4 sm:p-8 font-sans antialiased space-y-8">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <header className="mb-6">
            <nav className="text-sm font-medium text-gray-500">
              <a href="#" className="hover:underline">বিদেশে উচ্চশিক্ষা</a> / 
              <a href="#" className="hover:underline">পরীক্ষাসমূহ</a> / 
              <a href="#" className="hover:underline">IELTS</a> / 
              <a href="#" className="hover:underline text-[#4446a8]">রিডিং</a>
            </nav>
          </header>

          <h1 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-2">
            IELTS রিডিং প্র্যাকটিস টেস্ট ২০২৪: ফ্রি ৪০০+ স্যাম্পল এবং ১০+ পিডিএফ উত্তর ও টিপসসহ
          </h1>
          <p className="text-xs text-gray-500 mb-6">
            আপডেট করা হয়েছে: মে ১৯, ২০২৪, ০১:৩৮
          </p>

          <p className="text-gray-600 leading-relaxed text-xl mb-4">
            IELTS রিডিং প্র্যাকটিস টেস্ট আপনার পারফরম্যান্স উন্নত করার সবচেয়ে ভালো উপায় হল নিয়মিত চর্চা, এবং এই কারণেই আমরা প্রস্তুত করেছি একটি সংগ্রহ: উত্তরসহ IELTS রিডিং প্র্যাকটিস টেস্ট!
          </p>
          <p className="text-gray-600 leading-relaxed text-xl">
            এই গাইডে আপনি পাবেন ৪০০+ ফ্রি IELTS রিডিং প্র্যাকটিস টেস্ট স্যাম্পল এবং এক্সপার্ট টিপস, যা আপনাকে দক্ষতা বাড়াতে এবং ২০২৪ সালে উচ্চ স্কোর অর্জনে সাহায্য করবে। শুরু করতে প্রস্তুত? চলুন শুরু করি!
          </p>
        </div>
      </div>

      {/* FeatureTwo Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">
            ২. IELTS রিডিং সেকশনে কী থাকে?
          </h2>
          <p className="text-gray-600 leading-relaxed text-xl mb-6">
            IELTS রিডিং প্র্যাকটিসটি প্রার্থীকে লিখিত ইংরেজি বোঝার এবং ব্যাখ্যা করার ক্ষমতা মূল্যায়নের জন্য ডিজাইন করা হয়েছে। এতে তিনটি প্যাসেজ থাকে, প্রতিটি প্যাসেজের সমস্যা ক্রমে বাড়ানো হয়, এবং এগুলোর পরে বিভিন্ন ধরনের প্রশ্ন থাকে যা বোঝাপড়া (comprehension), বিশ্লেষণ (analysis), এবং শব্দভান্ডার (vocabulary) দক্ষতা পরীক্ষা করে।
          </p>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden transition-all duration-300 bg-[#e6e8ff]">
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-sm font-medium text-[#4446a8] leading-relaxed pr-2">
                    {item.question}
                  </p>
                  <span className={`text-2xl text-[#4446a8] transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    +
                  </span>
                </div>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-200 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FeatureThree Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">
            ৩. ফ্রি ডাউনলোডযোগ্য IELTS রিডিং প্র্যাকটিস টেস্ট PDF
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            এই প্র্যাকটিস টেস্টগুলো আপনার রিডিং স্পিড, কম্প্রিহেনশন, এবং নির্ভুলতা উন্নত করতে সাহায্য করবে। এখনই ডাউনলোড করুন এবং কার্যকরভাবে প্র্যাকটিস শুরু করুন!
          </p>

          <div className="space-y-4">
            {pdfs.map((pdf, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4446a8] mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 9V4l5 5h-5z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-800 leading-relaxed">{pdf.title}</span>
                </div>
                <button 
                  onClick={() => handleDownload(pdf.url, pdf.title)}
                  className="p-2 rounded-full text-white bg-[#4446a8] hover:bg-[#393b90] transition-colors duration-300"
                  title="Download"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
