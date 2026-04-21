import React, { useState, useRef, useEffect } from "react";

interface FeatureAudio {
  id: number;
  title: string;
  description: string[];
  audioSrc: string;
  questions: { 
    id: number;
    question: string;
    options?: string[];
    answer: string;
    explanation: string;
  }[];
  instructions?: string[];
  questionType?: string;
  tips?: string[];
}

const features: FeatureAudio[] = [
  {
    id: 4,
    title: "৪. IELTS লিসেনিং অনুশীলন পরীক্ষা: অংশ ২",
    description: [
      "IELTS লিসেনিং পরীক্ষার পার্ট-২ একটি ছোটো মাল্টিপল-চয়েস প্রশ্ন (বহু-বিকল্প প্রশ্ন) দেখানো হয়েছে।",
      "এখানে অডিওতে একজন ব্যক্তি একটি প্রতিষ্ঠানের 'Time Abroad' নামা একটি কোম্পানির স্বেচ্ছাসেবী প্রোগ্রামের সম্পর্কে ব্যাখ্যা করছেন।"
    ],
    audioSrc: "../../../../public/images/Bristy/11-t2-2.mp3",
    questions: [
      {
        id: 5,
        question: "The company expanded in",
        options: ["A. 2000", "B. 2007", "C. 2014"],
        answer: "B",
        explanation: "It was in the year 2007 that the company got expanded, by joining another company called PT Travel."
      },
      {
        id: 6,
        question: "The number of permanent staff is",
        options: ["A. 75", "B. 90", "C. 150"],
        answer: "C",
        explanation: "The number of full-time, permanent staff at Time Abroad is 150."
      },
      {
        id: 7,
        question: "Most volunteers join the program",
        options: ["A. in winter", "B. in July", "C. when it is best for them"],
        answer: "C",
        explanation: "Most people join when it is best for them."
      },
      {
        id: 8,
        question: "Time Abroad receives all its income from",
        options: ["A. Partner organisations", "B. Volunteers", "C. The government"],
        answer: "B",
        explanation: "It has been running purely based on the funds received from the volunteers."
      }
    ]
  },
  {
    id: 5,
    title: "৫. IELTS লিসেনিং অনুশীলন পরীক্ষা: অংশ ৩",
    description: [
      "IELTS লিসেনিং পরীক্ষার পার্ট ৩-এ একটি শিক্ষামূলক বা প্রশিক্ষণমূলক প্রেক্ষাপটে কথোপকথন দেখানো হয়।",
      "শুনতে রেকর্ডিং-এ আপনি একজন মহিলাকে বিশ্ববিদ্যালয় বিষয়ে মিডিয়া কোর্স সম্পর্কে আরও জানতে জিজ্ঞাসা করতে শুনবেন।"
    ],
    audioSrc: "../../../../public/images/Bristy/11-t2-3.mp3",
    questions: [
      {
        id: 9,
        question: "Which two things must Louise have to join the course?",
        options: ["A. A bachelor's degree", "B. Work experience", "C. Either a bachelor's degree or work experience", "D. Research experience", "E. A completed thesis", "F. Motivation"],
        answer: "C",
        explanation: "Admission criteria include having a bachelor's degree. If you do not have a bachelor's, the application can still be processed if you have enough work experience."
      },
      {
        id: 10,
        question: "Most important criterion",
        options: ["F. Motivation"],
        answer: "F",
        explanation: "The most important criterion for joining a Master's Program in Media Studies is ample motivation."
      }
    ]
  },
  {
    id: 6,
    title: "৬. IELTS লিসেনিং অনুশীলন পরীক্ষা: অংশ ৪",
    description: [
      "IELTS পরীক্ষার রেকর্ডিং ৫-এ একটি শিক্ষামূলক বিষয় নিয়ে একক বক্তৃতা শোনা যায়।",
      "শুনতে রেকর্ডিং-এ আপনি ভারতীয় রেলওয়ে ইতিহাস সম্পর্কে একটি লেকচার শুনবেন।"
    ],
    audioSrc: "../../../../public/images/Bristy/11-t2-4.mp3",
    questions: [
      {
        id: 11,
        question: "Indian Railways is owned and ________ by the government of India.",
        answer: "Operated",
        explanation: "The Indian Railway has been owned and operated by the government of India."
      },
      {
        id: 12,
        question: "There are more than ________ million people working for Indian Railways.",
        answer: "1.4",
        explanation: "1.4 million people are employed by the Indian Railway, working across the country."
      },
      {
        id: 13,
        question: "The ________ of the railways from 1857 occurred under Robert Maitland Brereton.",
        answer: "Expansion",
        explanation: "The Indian Railway began expanding across the country in 1857 under Robert Maitland Brereton."
      },
      {
        id: 14,
        question: "The joining of the East Indian Railway with the Great Indian Peninsula Railway led to a network of ________ kilometres.",
        answer: "6400",
        explanation: "The network was 6,400 kilometres long, connecting Bombay and Calcutta."
      },
      {
        id: 15,
        question: "The route from Bombay to Calcutta, opened in 1870, was an ________ for the book Around the World in 80 days.",
        answer: "Inspiration",
        explanation: "It inspired Jules Verne to write his book Around the World in 80 Days."
      }
    ]
  }
];

const FeatureFour: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentFeature] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const feature = features[currentFeature];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = feature.audioSrc;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
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
  }, [feature]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="bg-[#f0f3f6] min-h-screen p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#4446a8] mb-4">{feature.title}</h2>
          {feature.description.map((desc, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed text-sm mb-4">{desc}</p>
          ))}

          {/* Audio Player */}
          <div className="bg-[#e6e8ff] p-4 rounded-lg flex items-center justify-between">
            <button onClick={togglePlay} className="flex items-center justify-center p-2 rounded-full text-[#4446a8] hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                {isPlaying ? (
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                ) : (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                )}
              </svg>
            </button>
            <div className="flex items-center space-x-2 w-full mx-4">
              <span className="text-xs text-gray-600">{formatTime(currentTime)}</span>
              <div className="w-full h-1 bg-gray-300 rounded-full relative">
                <div className="h-1 bg-[#4446a8] rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="text-xs text-gray-600">{formatTime(duration)}</span>
            </div>
            <audio ref={audioRef} />
          </div>

          {/* Questions */}
          {feature.questions.map(q => (
            <div key={q.id} className="mt-6">
              <h4 className="font-bold text-gray-800">{q.id}. {q.question}</h4>
              {q.options && (
                <ul className="list-disc list-inside text-gray-600 space-y-1 my-2">
                  {q.options.map((opt, i) => <li key={i} className="text-sm">{opt}</li>)}
                </ul>
              )}
              <div className="bg-[#e6e8ff] p-4 rounded-lg mb-4">
                <p className="font-bold text-[#4446a8]">Answer: {q.answer}</p>
                <p className="text-sm font-medium text-gray-700 mt-2">Explanation:</p>
                <p className="text-xs text-gray-600 mt-1">{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureFour;
