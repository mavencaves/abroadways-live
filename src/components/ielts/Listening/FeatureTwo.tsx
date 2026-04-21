import React from 'react';

interface Topic {
  name: string;
  path: string;
}

const FeatureTwo: React.FC = () => {
  // Array of topics for the demo section with correct web paths
  const topics: Topic[] = [
    { name: "Cambridge IELTS 8", path: "../../../public/cambridge-ielts-8.pdf" },
    { name: "IELTS Practice Test 1", path: "../../../public/IELTS+Practice+Test+(1).pdf" },
    { name: "IELTS Listening Sample Tasks", path: "../../../public/ielts-listening-sample-tasks-2023.pdf" },
    { name: "IELTS Listening Sample Tasks", path: "../../../public/ielts-listening-sample-tasks-2023.pdf" },
    { name: "IELTS Listening Sample Tasks", path: "../../../public/ielts-listening-sample-tasks-2023.pdf" },
    { name: "IELTS Listening Sample Tasks", path: "../../../public/ielts-listening-sample-tasks-2023.pdf" },
    { name: "IELTS Listening Sample Tasks", path: "../../../public/ielts-listening-sample-tasks-2023.pdf" },
  ];

  const handleDownload = (filePath: string) => {
    window.open(filePath, '_blank');
  };

  return (
    <div className="bg-[#f0f3f6] p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Main title section */}
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">
            ২. IELTS স্পিকিং প্র্যাকটিস কীভাবে করবেন?
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            আপনার স্পিকিং দক্ষতা উন্নত করার জন্য নিয়মিত অনুশীলন করা খুবই গুরুত্বপূর্ণ। আপনি এই পরীক্ষার জন্য অনলাইন থেকে সাহায্য নিতে পারেন।
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li className="text-sm">
              IELTS পরীক্ষার জন্য আপনাকে প্রতিদিন অনুশীলন করতে হবে।
            </li>
            <li className="text-sm">
              নিয়মিত ইংরেজি সংবাদপত্র পড়া এবং ইংরেজি সিনেমা দেখা আপনার ভাষার দক্ষতা বাড়াতে সাহায্য করে।
            </li>
            <li className="text-sm">
              প্রতিদিন নতুন নতুন শব্দ শিখুন এবং সেগুলো ব্যবহার করুন।
            </li>
            <li className="text-sm">
              IELTS এর অফিসিয়াল ওয়েবসাইটগুলো থেকে নমুনা প্রশ্ন দেখুন।
            </li>
          </ul>

          {/* Practice section with a call-to-action */}
          <h3 className="text-base font-bold text-gray-800 mb-2">
            অনুশীলনের জন্য কিছু নমুনা দেখুন
          </h3>
          <div className="bg-[#e6e8ff] p-4 rounded-lg flex flex-col items-center">
            <h4 className="text-base font-bold text-[#4446a8]">
              Practice with Official IELTS Practice Papers
            </h4>
            <p className="text-sm text-gray-600">
              আপনি এখানে IELTS-এর অফিসিয়াল প্র্যাকটিস পেপারগুলো দেখতে পারেন।
            </p>
            <div className="bg-white p-4 rounded-lg w-full mt-4">
              <p className="text-sm text-gray-700">
                You can practice with official IELTS practice papers here, which are available in PDF format.
              </p>
            </div>
          </div>
          
          {/* Downloadable topics section */}
          <h3 className="text-base font-bold text-gray-800 mt-6 mb-4">
            নমুনা টেস্টগুলো ডাউনলোড করুন
          </h3>
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#666cff] p-2 rounded-full text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.5 2C3.567 2 2 3.567 2 5.5v9c0 1.933 1.567 3.5 3.5 3.5h9c1.933 0 3.5-1.567 3.5-3.5v-9C18 3.567 16.433 2 14.5 2h-9zM10 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{topic.name}</span>
                </div>
                <button 
                  className="bg-white text-gray-600 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                  onClick={() => handleDownload(topic.path)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 14.5a.5.5 0 01-.354-.146l-4-4a.5.5 0 01.708-.708L9.5 12.793V3.5a.5.5 0 011 0v9.293l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.354.146z" />
                    <path d="M5 16.5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM15 16.5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5z" />
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

export default FeatureTwo;
