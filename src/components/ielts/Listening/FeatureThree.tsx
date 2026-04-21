import React, { useState, useRef, useEffect } from "react";

const FeatureThree: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Use useEffect to handle audio playback and time updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = "../../../../public/images/Bristy/11-t2-1.mp3";

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number): string => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-[#f0f3f6] p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Section 1: Listening Intro & Audio Player */}
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">
            ৩. IELTS লিসেনিং অনুশীলন পরীক্ষা: অংশ ১
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            IELTS লিসেনিং অনুশীলন পরীক্ষার রেকর্ডিং ১-৫ একটি দৈনন্দিন সামাজিক
            প্রেক্ষাপটে কথোপকথন দেখানো হয়েছে। এই অ্যাক্টিভিটিতে সাধারণ ও পরিচিত
            শব্দভান্ডার ব্যবহার করা হয়েছে, যা আপনি ইংরেজি শেখার প্রাথমিক পর্যায়ে
            শিখেছেন।
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            এই অডিওতে একজন ব্যক্তি হোটেল বুকিং সম্পর্কে তথ্য জিজ্ঞেস করছেন।
            অডিওটি মনোযোগ দিয়ে শুনুন এবং দেওয়া প্রশ্নগুলোর সঠিক উত্তর দিন।
          </p>
          <div className="bg-[#e6e8ff] p-4 rounded-lg flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="flex items-center justify-center p-2 rounded-full text-[#4446a8] hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {isPlaying ? (
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                ) : (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                )}
              </svg>
            </button>
            <div className="flex items-center space-x-2 w-full mx-4">
              <span className="text-xs text-gray-600">
                {formatTime(currentTime)}
              </span>
              <div className="w-full h-1 bg-gray-300 rounded-full relative">
                <div
                  className="h-1 bg-[#4446a8] rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">
                {formatTime(duration)}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#4446a8] ml-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 9v6h4l5 5V4l-5 5H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.81 5 3.54 5 6.71s-2.11 5.9-5 6.71v2.06c4.01-.91 7-4.44 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#4446a8]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <audio ref={audioRef} />
          </div>

          {/* Section 2: Questions and Table */}
          <h3 className="text-base font-bold text-gray-800 mt-6 mb-2">
            Questions 1-4
          </h3>
          <div className="bg-[#e6e8ff] p-4 rounded-lg mb-4">
            <h4 className="font-bold text-gray-800">Instructions:</h4>
            <p className="text-sm text-gray-600">
              Complete the table below. Write NO MORE THAN THREE WORDS AND/OR A
              NUMBER for each answer.
            </p>
          </div>
          <h4 className="text-base font-bold text-gray-800 mb-2">
            Transport Options
          </h4>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-[#4446a8] text-white">
                  <th className="p-2 sm:p-4 text-left text-xs sm:text-sm font-semibold rounded-tl-lg">
                    Mode of Transport
                  </th>
                  <th className="p-2 sm:p-4 text-left text-xs sm:text-sm font-semibold">
                    Cost
                  </th>
                  <th className="p-2 sm:p-4 text-left text-xs sm:text-sm font-semibold">
                    Arrangements
                  </th>
                  <th className="p-2 sm:p-4 text-left text-xs sm:text-sm font-semibold rounded-tr-lg">
                    Travel Time to Town
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    Taxi
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    Approximately £5 (1) ____
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    Pick up from the hotel
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    15 minutes
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    Bus
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    £2 per person
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    Walk down Oak Tree (2) ____
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    15 minutes
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    Walking
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    ___
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    Walk through (3) ____
                  </td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-800">
                    (4) ____
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base font-bold text-gray-800">
            Question Type: Complete the Table
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            In this question type, you are required to fill in missing
            information on a table based on the information you hear in the
            recording. These questions test your ability to listen for specific
            details and accurately transfer them to the table.
          </p>

          {/* Section 3: Answer Explanations */}
          <h3 className="text-base font-bold text-gray-800 mt-6 mb-2">
            How to best answer:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li className="text-sm">
              Understand what information you need to fill in (e.g., dates,
              names, figures).
            </li>
            <li className="text-sm">
              Quickly scan through the entire table to get an idea of its
              structure and the type of information missing.
            </li>
            <li className="text-sm">
              Pay attention to keywords and phrases in the table that may help
              you identify relevant information during the audio.
            </li>
            <li className="text-sm">
              As you listen, write your answers neatly and legibly, ensuring
              they fit within the provided space.
            </li>
            <li className="text-sm">Check spelling and grammar for accuracy.</li>
            <li className="text-sm">Finalize your answers.</li>
          </ul>

          <h3 className="text-base font-bold text-gray-800 mt-6 mb-2">
            Answers with Explanation for Questions 1-4
          </h3>
          {/* Answer 1 */}
          <div className="bg-[#e6e8ff] p-4 rounded-lg mb-4">
            <p className="font-bold text-[#4446a8]">1. 15/fifteen</p>
            <p className="text-sm font-medium text-gray-700 mt-2">
              Explanation:
            </p>
            <p className="text-xs text-gray-600 mt-1">
              The given recording plays a conversation between a customer and a
              hotel staff. According to the information given in the audio, the
              average taxi fare for a trip to the town has been increased from
              12 pounds to 15 pounds.
            </p>
          </div>
          {/* Answer 2 */}
          <div className="bg-[#e6e8ff] p-4 rounded-lg mb-4">
            <p className="font-bold text-[#4446a8]">2. Avenue</p>
            <p className="text-sm font-medium text-gray-700 mt-2">
              Explanation:
            </p>
            <p className="text-xs text-gray-600 mt-1">
              According to the audio, one of the transportation facilities that
              has been available in the town is the public bus. The bus fare is
              2 pounds. A five-minute walk down the road from Oak Tree Avenue is
              recommended.
            </p>
          </div>
          {/* Answer 3 */}
          <div className="bg-[#e6e8ff] p-4 rounded-lg mb-4">
            <p className="font-bold text-[#4446a8]">3. The Nice Park</p>
            <p className="text-sm font-medium text-gray-700 mt-2">
              Explanation:
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Walking across the town is also recommended in the recording,
              while opting to walk, covering the locations might take some time.
              However, it does not cost anything, like other travel methods. In
              addition, there is a nice park on the way, which is popular among
              visitors to York.
            </p>
          </div>
          {/* Answer 4 */}
          <div className="bg-[#e6e8ff] p-4 rounded-lg">
            <p className="font-bold text-[#4446a8]">4. 30/Thirty minutes</p>
            <p className="text-sm font-medium text-gray-700 mt-2">
              Explanation:
            </p>
            <p className="text-xs text-gray-600 mt-1">
              According to the recording, those interested in taking a walk can
              choose to walk across the town. A popular park is on the way,
              which takes around 30 minutes to cover.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureThree;
