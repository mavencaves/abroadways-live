//@ts-nocheck
import { ArrowRight } from 'lucide-react'; 


const GmatCommonSection = () => {
  
    const content = {
        nextStepsTitle: "পরবর্তী ধাপ",
        nextSteps: [
            { title: "GMAT পরীক্ষার তারিখ", linkText: "এখনই পড়ুন", url: "#gmat-date" },
            { title: "GMAT ফলাফল", linkText: "এখনই পড়ুন", url: "#gmat-result" },
            { title: "GMAT পরীক্ষা ফি", linkText: "এখনই পড়ুন", url: "#gmat-fee" },
        ],
        gmatInfoTitle: "GMAT সংক্রান্ত গুরুত্বপূর্ণ তথ্য",
        gmatInfo: [
            "GMAT পরীক্ষা", "GMAT ফলাফল", "GMAT স্যাম্পল পেপার",
            "GMAT রেজিস্ট্রেশন", "GMAT সিলেবাস", "GMAT প্রস্তুতি",
            "GMAT পরীক্ষার তারিখ", "GMAT বই", "GMAT পরীক্ষা ফি",
        ],
        ieltsInfoTitle: "IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য",
        ieltsInfo: [
            "IELTS পরীক্ষা", "IELTS পরীক্ষার তারিখ", "IELTS পরীক্ষা ফি",
            "IELTS রুটিন", "IELTS শোনার অনুশীলন পরীক্ষা", "IELTS কথা বলার অনুশীলন পরীক্ষা",
            "IELTS পড়ার অনুশীলন পরীক্ষা", "IELTS লেখার অনুশীলন পরীক্ষা", "IELTS পরীক্ষার কেন্দ্র",
            "IELTS ফলাফল", "IELTS-এর ধরন", "IELTS প্যাটার্ন",
            "IELTS পরীক্ষার যোগ্যতা", "IELTS স্লট বুকিং", "IELTS ব্যান্ড স্কোর",
            "IELTS রেজিস্ট্রেশন", "IELTS বই", "IELTS প্রস্তুতি",
            "IELTS অনুশীলন পরীক্ষা",
        ],
    };

    // ছোট কার্ড কম্পোনেন্ট (পরবর্তী ধাপ সেকশনের জন্য)
    const NextStepCard = ({ title, linkText, url }) => (
        <a href={url} className="block p-5 bg-white rounded-lg transition duration-300 ease-in-out hover:shadow-md hover:ring-2 hover:ring-indigo-200">
            <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
            <div className="flex items-center text-sm font-medium text-indigo-600">
                {linkText}
                <ArrowRight className="ml-1 w-4 h-4" />
            </div>
        </a>
    );

    // তথ্য গ্রিড কার্ড কম্পোনেন্ট (GMAT/IELTS সেকশনের জন্য)
    const InfoGridCard = ({ title, url = "#" }) => (
        <a href={url} className="flex justify-between items-center p-4 bg-white border border-gray-200  transition duration-150 ease-in-out">
            <span className="text-sm md:text-base text-gray-700">{title}</span>
            <ArrowRight className="w-4 h-4 text-indigo-600" />
        </a>
    );

    return (
        <div className="font-sans min-h-screen  p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. পরবর্তী ধাপ সেকশন */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-5">
                        {content.nextStepsTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {content.nextSteps.map((item, index) => (
                            <NextStepCard key={index} {...item} />
                        ))}
                    </div>
                </section>

                {/* --- */}

                {/* 2. GMAT সংক্রান্ত গুরুত্বপূর্ণ তথ্য সেকশন */}
                <section className="mb-10 p-6 md:p-8 bg-white rounded-xl shadow-lg border-t-4 ">
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-6">
                        {content.gmatInfoTitle}
                    </h2>
                    {/* GMAT এর জন্য 3 কলাম গ্রিড */}
                    <div className="grid grid-cols-3 divide-x divide-y border border-gray-200 rounded-lg overflow-hidden">
                        {/* গ্রিডকে ম্যানুয়ালি রো-ভিত্তিক সাজানো, যেমন ছবিতে আছে */}
                        {/* Row 1 */}
                        <InfoGridCard title={content.gmatInfo[0]} />
                        <InfoGridCard title={content.gmatInfo[1]} />
                        <InfoGridCard title={content.gmatInfo[2]} />
                        {/* Row 2 */}
                        <InfoGridCard title={content.gmatInfo[3]} />
                        <InfoGridCard title={content.gmatInfo[4]} />
                        <InfoGridCard title={content.gmatInfo[5]} />
                        {/* Row 3 */}
                        <InfoGridCard title={content.gmatInfo[6]} />
                        <InfoGridCard title={content.gmatInfo[7]} />
                        <InfoGridCard title={content.gmatInfo[8]} />
                    </div>
                </section>
                
                {/* --- */}

                {/* 3. IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য সেকশন */}
                <section className="p-6 md:p-8 bg-white rounded-xl shadow-lg border-t-4 ">
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-6">
                        {content.ieltsInfoTitle}
                    </h2>
                    {/* IELTS এর জন্য 3 কলাম গ্রিড */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y border border-gray-200 rounded-lg overflow-hidden">
                        {/* কন্টেন্টগুলো ছবির সাথে মিল রেখে গ্রিড আকারে সাজানো হয়েছে */}
                        {content.ieltsInfo.map((item, index) => (
                            <InfoGridCard key={index} title={item} />
                        ))}
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default GmatCommonSection;