//ts-nocheck

const ReadyToLeap = () => {
  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
   
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[30px] shadow-lg"
      
      >
     
        <div className="absolute  opacity-90 rounded-[30px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl text-white p-6 sm:p-10 rounded-[30px] bg-[#4169E1] bg-opacity-0">

        {/* Left Side Avatars */}
   
        <div className="relative w-full lg:w-1/4 h-60 lg:h-auto flex justify-around lg:block mb-8 lg:mb-0">
          {/* Avatar 1 (Top Left) */}
          <img
            src="/images/Ellipse 4.png"
            alt="Avatar 1"
            className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md 
                       lg:absolute lg:top-0 lg:left-0"
            style={{ top: '10%', left: '0%' }} 
          />
          {/* Avatar 2 (Middle Left) */}
          <img
            src="/images/Ellipse 5.png"
            alt="Avatar 2"
            className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md 
                       lg:absolute lg:top-1/2 lg:left-1/3 lg:-translate-y-1/2"
            style={{ top: '45%', left: '30%' }} 
          />
         
        </div>

        {/* Central Text and Button */}
        <div className="text-center lg:text-left lg:w-2/4 px-4 sm:px-8">
          <h2 className="text-2xl sm:text-2xl font-bold mb-4 leading-tight">
            বিদেশে উচ্চশিক্ষার জন্য প্রস্তুত?
          </h2>
          <p className="text-sm sm:text-sm mb-8">
          
            আপনার বিদেশে উচ্চশিক্ষার যাত্রার প্রথম পদক্ষেপটি নিন এক্সপার্ট এআই এর সহায়তায়। ভিসা প্রেডিকশন থেকে IELTS প্রস্তুতি, আমরা আপনাদের প্রতিটি ধাপে গাইড করবো। আপনার ভবিষ্যতের পরিকল্পনা শুরু করুন।
            কাউন্সেলর এর সাথে কথা বলুন
          </p>
          <button className="bg-white text-purple-700 font-semibold py-3 px-8 ml-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            কাউন্সিলর এর সাথে কথা বলুন
          </button>
        </div>

        {/* Right Side Avatars */}
        {/* Small screens: Avatars might stack or appear less scattered.
            Large screens: Avatars are absolutely positioned within a designated area. */}
        <div className="relative w-full lg:w-1/4 h-60 lg:h-auto flex justify-around lg:block mt-8 lg:mt-0">
          
          {/* Avatar 5 (Middle Right) */}
          <img
            src="/images/Ellipse 6.png"
            alt="Avatar 5"
            className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md 
                       lg:absolute lg:top-1/2 lg:right-1/3 lg:-translate-y-1/2"
            style={{ top: '40%', right: '30%' }} // Adjusted for scattered, non-overlapping look
          />
          {/* Avatar 6 (Bottom Right) */}
          <img
            src="/images/Ellipse 7.png"
            alt="Avatar 6"
            className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md 
                       lg:absolute lg:bottom-0 lg:right-0"
            style={{ bottom: '10%', right: '0%' }} // Adjusted for scattered, non-overlapping look
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToLeap;