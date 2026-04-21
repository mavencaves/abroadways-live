const CircularProgressBar = ({percentage}: { percentage: number }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle
                    className="text-gray-200"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
                <circle
                    className="text-blue-600 transition-all duration-700 ease-out"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
            </svg>
            <div className="absolute text-5xl font-bold text-blue-600">
                {percentage}%
            </div>
        </div>
    );
};


function SopPart3() {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Section: Visa Prediction Form */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                        ভিসা ভবিষ্যদ্বাণী করুন
                    </h2>
                    <p className="text-gray-700 mb-8 text-center lg:text-left">
                        আমাদের AI বিশ্লেষণ ব্যবহার করে আপনার স্টাডি ভিসার সাফল্যের হার অনুমান করুন।
                    </p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* CGPA */}
                        <div>
                            <label htmlFor="cgpa" className="block text-gray-700 text-sm font-semibold mb-2">
                                সিজিপিএ
                            </label>
                            <input
                                type="text"
                                id="cgpa"
                                placeholder="প্রবেশ করুন"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* আপনার পরীক্ষা শেষ দিন */}
                        <div>
                            <label htmlFor="examEndDate" className="block text-gray-700 text-sm font-semibold mb-2">
                                আপনার পরীক্ষা শেষ দিন
                            </label>
                            <select
                                id="examEndDate"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
                            >
                                <option value="">একটি বেছে নাও</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        {/* GRE স্কোর */}
                        <div>
                            <label htmlFor="greScore" className="block text-gray-700 text-sm font-semibold mb-2">
                                GRE স্কোর
                            </label>
                            <input
                                type="text"
                                id="greScore"
                                placeholder="প্রবেশ করুন"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* SAT স্কোর */}
                        <div>
                            <label htmlFor="satScore" className="block text-gray-700 text-sm font-semibold mb-2">
                                SAT স্কোর
                            </label>
                            <input
                                type="text"
                                id="satScore"
                                placeholder="প্রবেশ করুন"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* GMAT স্কোর */}
                        <div>
                            <label htmlFor="gmatScore" className="block text-gray-700 text-sm font-semibold mb-2">
                                GMAT স্কোর
                            </label>
                            <input
                                type="text"
                                id="gmatScore"
                                placeholder="প্রবেশ করুন"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* স্টাডি গ্যাপ */}
                        <div>
                            <label htmlFor="studyGap" className="block text-gray-700 text-sm font-semibold mb-2">
                                স্টাডি গ্যাপ
                            </label>
                            <select
                                id="studyGap"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
                            >
                                <option value="">একটি বেছে নাও</option>
                                <option value="0">0 বছর</option>
                                <option value="1">1 বছর</option>
                                <option value="2">2 বছর</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        {/* টার্গেট দেশ */}
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="targetCountry" className="block text-gray-700 text-sm font-semibold mb-2">
                                টার্গেট দেশ
                            </label>
                            <select
                                id="targetCountry"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
                            >
                                <option value="">একটি বেছে নাও</option>
                                <option value="usa">USA</option>
                                <option value="canada">Canada</option>
                                <option value="uk">UK</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        {/* আপনার কি কোন প্রকাশনা আছে? */}
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="hasPublications" className="block text-gray-700 text-sm font-semibold mb-2">
                                আপনার কি কোন প্রকাশনা আছে?
                            </label>
                            <select
                                id="hasPublications"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
                            >
                                <option value="">একটি বেছে নাও</option>
                                <option value="yes">হ্যাঁ</option>
                                <option value="no">না</option>
                            </select>
                        </div>

                        {/* Button */}
                        <div className="col-span-1 md:col-span-2 mt-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out font-semibold"
                            >
                                আমার ভিসার পূর্বাভাস দিন
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section: Visa Outcome / Summary */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        ভিসা রায়: এক নজরে
                    </h2>

                    {/* Circular Progress Bar */}
                    <div className="mb-10">
                        {/* Replace 75 with your actual percentage */}
                        <CircularProgressBar percentage={75}/>
                    </div>


                    {/* Action Cards Container - MODIFIED HERE */}
                    {/* Added 'items-stretch' to the grid container to make children fill the height */}
                    <div className="grid grid-cols-2 gap-4 w-full items-stretch">
                        {/* SOP পর্যালোচনা */}
                        {/* Added 'h-full' and 'justify-between' to individual cards */}
                        <div
                            className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center h-full justify-between">
                            <img src="/images/icons/sop.png" alt="SOP Icon" className="mb-2 size-20"/>
                            <h3 className="text-md font-semibold text-gray-800 mb-1">SOP পর্যালোচনা</h3>
                            <a href="#" className="text-blue-600 hover:underline flex items-center text-sm">
                                শুরু করুন <span className="ml-1 text-base">&rarr;</span>
                            </a>
                        </div>

                        {/* বুদ্ধি খুঁজুন */}
                        <div
                            className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center h-full justify-between">
                            <img src="/images/icons/grad.png" alt="Graduation Cap Icon"
                                 className="mb-2 size-20 "/>
                            <h3 className="text-md font-semibold text-gray-800 mb-1">বুদ্ধি খুঁজুন</h3>
                            <a href="#" className="text-blue-600 hover:underline flex items-center text-sm">
                                শুরু করুন <span className="ml-1 text-base">&rarr;</span>
                            </a>
                        </div>

                        {/* ভিসা সহায়তা */}
                        <div
                            className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center h-full justify-between">
                            <img src="/images/icons/visa.png" alt="Visa Shield Icon"
                                 className="mb-2 size-20"/>
                            <h3 className="text-md font-semibold text-gray-800 mb-1">ভিসা সহায়তা</h3>
                            <a href="#" className="text-blue-600 hover:underline flex items-center text-sm">
                                শুরু করুন <span className="ml-1 text-base">&rarr;</span>
                            </a>
                        </div>

                        {/* তালিকাভুক্ত কলেজ */}
                        <div
                            className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center h-full justify-between">
                            <img src="/images/icons/books.png" alt="College Icon" className="mb-2 size-20"/>
                            <h3 className="text-md font-semibold text-gray-800 mb-1">তালিকাভুক্ত কলেজ</h3>
                            <a href="#" className="text-blue-600 hover:underline flex items-center text-sm">
                                শুরু করুন <span className="ml-1 text-base">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Button */}
                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out font-semibold mt-8"
                    >
                        আমার সম্পূর্ণ প্রতিবেদন দেখুন
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SopPart3;