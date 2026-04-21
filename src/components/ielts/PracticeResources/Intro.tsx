import  { useState, useEffect } from "react";

// -------- Intro Component --------
const Intro = () => {
  return (
    <div className=" p-4 sm:p-8 font-sans ">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden ">
        <div className="p-6 sm:p-8">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-5 4v-4m5 4h5a1 1 0 00.894-1.447L15 10m0 4v4m-5-4l4.553-2.276A1 1 0 0015 10V5.618a1 1 0 00-1.447-.894L10 6m-5 4v4"
                />
              </svg>
            </span>
            <span>IELTS পঠন অনুশীলন পরীক্ষা</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight mb-4">
            ২০২৩: ৮০০+ প্রশ্ন এবং ৩০+ PDF উত্তর টিপস সহ
          </h1>

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="font-medium mr-4">CONTENT WRITER</span>
            <span className="mr-4">•</span>
            <span>1 Year ago</span>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            আইইএলটিএস রিডিং প্র্যাকটিস টেস্টে রয়েছে শত শত মডেল টেস্ট যা আপনাকে
            ভালো স্কোর অর্জনে সাহায্য করবে। এখানে আপনি মোট 800+ প্রশ্ন, 30+
            পিডিএফ উত্তর, এবং আরও অনেক কিছু পাবেন।
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            এই বইটি শুধুমাত্র IELTS শিক্ষার্থীদের জন্য তৈরি করা হয়েছে এবং এতে
            রয়েছে গুরুত্বপূর্ণ টিপস ও ট্রিকস যা পরীক্ষায় কাজে আসবে।
          </p>
        </div>
      </div>
    </div>
  );
};

// -------- FeatureOne Component --------



interface SearchResult {
  source_title: string;
  url: string;
  snippet: string;
}

const FeatureOne = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);

        const searchQueries = [
          "IELTS reading practice test 2023 800+ questions",
          "IELTS Reading practice PDF with answers",
        ];

        const fetchGoogleData = async (query: string) => {
          const payload = {
            contents: [
              {
                parts: [{ text: `Search for: ${query}` }],
              },
            ],
          };
          const apiKey = "";
          const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          await response.json();

          // return এর ভেতরে আমাদের SearchResult[] ফিরিয়ে দিচ্ছে
          return {
            query,
            results: [
              {
                source_title: "Free Online IELTS Reading Practice Tests",
                url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/reading",
                snippet: "Prepare with our free materials.",
              },
              {
                source_title: "IELTS Reading Practice Test 2025",
                url: "https://www.bestmytest.com/ielts/reading",
                snippet: "Academic & General Reading - BestMyTest TOEFL",
              },
              {
                source_title: "IELTS Academic and General free practice tests",
                url: "https://ielts.idp.com/prepare/article-free-practice-tests",
                snippet:
                  "Access the IELTS Prepare hub to view articles, videos and register for a practice event near you or online.",
              },
              {
                source_title: "170+ IELTS Reading Practice Test PDF",
                url: "https://www.kanan.co/ielts/academic/reading/practice-test/",
                snippet:
                  "Download this Free IELTS Reading Practice Test PDF that has 170+ samples with answers of academic module.",
              },
            ] as SearchResult[],
          };
        };

        const fetchedResults = await Promise.all(
          searchQueries.map(fetchGoogleData)
        );

        const combinedResults: SearchResult[] = fetchedResults.flatMap(
          (res) => res.results
        );

        setResults(combinedResults);
      } catch (e) {
        console.error("Failed to fetch search results:", e);
        setError(
          "দুঃখিত, কন্টেন্ট লোড করা সম্ভব হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="p-4 sm:p-8 flex justify-center items-start font-sans">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden mt-8">
        <div className="p-6 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight mb-4 text-center">
            IELTS রিডিং প্র্যাকটিস সোর্স
          </h1>

          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
              <p className="ml-4 text-gray-600 font-medium">
                কন্টেন্ট লোড হচ্ছে...
              </p>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 font-medium p-4">
              {error}
            </div>
          ) : (
            <ul className="space-y-4">
              {results.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-blue-600 hover:underline">
                      {item.source_title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">{item.snippet}</p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;


// -------- FeatureTwo Component --------
const FeatureTwo = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className=" p-4 sm:p-8 flex justify-center items-center font-sans ">
      <div className="max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden my-auto">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            ২. IELTS রিডিং প্যাসেজ কী?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            IELTS রিডিং প্যাসেজ হলো এমন একটি পরীক্ষা যা আপনার ইংরেজি পড়ার ক্ষমতা
            মূল্যায়ন করার জন্য ডিজাইন করা হয়েছে। এটি শুধুমাত্র একাডেমিক
            দক্ষতার উপর ফোকাস করে না, বরং আপনার দৈনিক জীবনযাত্রার
            প্রাসঙ্গিকতাও পরীক্ষা করে।
          </p>

          <div className="space-y-4">
            <div
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedOption === "option1"
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
              }`}
              onClick={() => handleOptionChange("option1")}
            >
              <span className="text-sm sm:text-base font-medium text-gray-800">
                সহজ, কিন্তু একাডেমিক এবং জটিল ধরনের ভাষা ব্যবহার করে।
              </span>
              <div
                className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
                  selectedOption === "option1"
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-400"
                }`}
              ></div>
            </div>

            <div
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedOption === "option2"
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
              }`}
              onClick={() => handleOptionChange("option2")}
            >
              <span className="text-sm sm:text-base font-medium text-gray-800">
                অনেক কঠিন, কিন্তু প্রাত্যহিক জীবনের উপযোগী লেখা ব্যবহার করে।
              </span>
              <div
                className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
                  selectedOption === "option2"
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-400"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------- Main Export --------
export { Intro, FeatureOne, FeatureTwo };
