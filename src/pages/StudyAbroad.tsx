import {Hero} from "@/components/study-abroad/Hero.tsx";
import TabList from "@/components/study-abroad/Tabs.tsx";
import ContentTable from "@/components/study-abroad/ContentTable.tsx";
import {tableOfContents} from "@/components/study-abroad/data.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";

const studyAbroadTabs = [
    {
        value: "opportunities",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার সুযোগ"
    },
    {
        value: "costs",
        title: "যুক্তরাষ্ট্রে পড়াশোনার খরচ"
    },
    {
        value: "living-costs",
        title: "যুক্তরাষ্ট্রে থাকার আনুমানিক খরচ"
    },
    {
        value: "scholarships",
        title: "যুক্তরাষ্ট্রে স্কলারশিপসমূহ"
    },
    {
        value: "work-opportunities",
        title: "যুক্তরাষ্ট্রে কাজের সুযোগ"
    }
    ,
    {
        value: "visa",
        title: "যুক্তরাষ্ট্রে পড়াশোনার পর কর্মসংস্থানের ভিসা"
    },

]
const faqData = [
    {
        id: "item-1",
        question: "যুক্তরাষ্ট্রে উচ্চশিক্ষার খরচ কম এমন রাজ্য কোনটি?",
        answer: (
            <div className="space-y-4">
                <p>যুক্তরাষ্ট্রে কম খরচে উচ্চশিক্ষার জন্য কয়েকটি রাজ্য বিশেষভাবে উল্লেখযোগ্য:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>ওয়াইওমিং:</strong> সবচেয়ে সাশ্রয়ী টিউশন ফি</li>
                    <li><strong>ইউটাহ:</strong> কম জীবনযাত্রার খরচ এবং মানসম্পন্ন শিক্ষা</li>
                    <li><strong>নর্থ ডাকোটা:</strong> পাবলিক বিশ্ববিদ্যালয়ে কম টিউশন</li>
                    <li><strong>টেক্সাস:</strong> বড় পাবলিক বিশ্ববিদ্যালয় সিস্টেম</li>
                    <li><strong>ফ্লোরিডা:</strong> তুলনামূলক কম খরচ এবং ভালো আবহাওয়া</li>
                </ul>
                <p className="text-sm text-muted-foreground">বার্ষিক টিউশন ফি সাধারণত $১০,০০০-$২৫,০০০ এর মধ্যে থাকে।</p>
            </div>
        )
    },
    {
        id: "item-2",
        question: "উচ্চশিক্ষার জন্য আমেরিকায় খরচ কত হবে?",
        answer: (
            <div className="space-y-4">
                <p>যুক্তরাষ্ট্রে উচ্চশিক্ষার খরচ প্রোগ্রাম ও বিশ্ববিদ্যালয়ের ধরন অনুযায়ী ভিন্ন হয়:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">বার্ষিক টিউশন ফি:</h4>
                    <ul className="space-y-2">
                        <li>• স্নাতক ডিগ্রি: $২০,০০০-$৫০,০০০</li>
                        <li>• স্নাতকোত্তর ডিগ্রি: $২৫,০০০-$৭০,০০০</li>
                        <li>• এমবিএ: $৪৫,০০০-$৭৭,০০০</li>
                        <li>• পিএইচডি: $৩০,০০০-$৮০,০০০</li>
                    </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">মাসিক জীবনযাত্রার খরচ:</h4>
                    <ul className="space-y-2">
                        <li>• ভাড়া: $১,৫০০-$১,৮০০</li>
                        <li>• খাবার: $২৫০-$৪০০</li>
                        <li>• যাতায়াত: $৮০-$১৩০</li>
                        <li>• অন্যান্য: $২০৬</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: "item-3",
        question: "যুক্তরাষ্ট্রে বাস করা এবং উচ্চশিক্ষা গ্রহণ করা কতটা নিরাপদ?",
        answer: (
            <div className="space-y-4">
                <p>যুক্তরাষ্ট্র আন্তর্জাতিক শিক্ষার্থীদের জন্য তুলনামূলকভাবে নিরাপদ একটি গন্তব্য:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">ইতিবাচক দিক:</h4>
                        <ul className="text-green-700 space-y-1 text-sm">
                            <li>• শক্তিশালী আইন ব্যবস্থা</li>
                            <li>• ক্যাম্পাস নিরাপত্তা ব্যবস্থা</li>
                            <li>• আন্তর্জাতিক শিক্ষার্থী সহায়তা</li>
                            <li>• জরুরি সেবা সহজলভ্য</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">সাবধানতা:</h4>
                        <ul className="text-yellow-700 space-y-1 text-sm">
                            <li>• এলাকা অনুযায়ী ভিন্নতা</li>
                            <li>• রাতের বেলা সতর্কতা</li>
                            <li>• স্থানীয় আইন জানা</li>
                            <li>• ইমার্জেন্সি নম্বর মনে রাখা</li>
                        </ul>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">বেশিরভাগ বিশ্ববিদ্যালয় ক্যাম্পাসে ২৪/৭ নিরাপত্তা সেবা এবং
                    শিক্ষার্থী সহায়তা প্রদান করে।</p>
            </div>
        )
    },
    {
        id: "item-4",
        question: "কেন বাংলাদেশি শিক্ষার্থীরা যুক্তরাষ্ট্রে উচ্চশিক্ষা গ্রহণ করতে চান?",
        answer: (
            <div className="space-y-4">
                <p>বাংলাদেশি শিক্ষার্থীদের মধ্যে যুক্তরাষ্ট্রে পড়াশোনার আগ্রহের পেছনে বেশ কয়েকটি গুরুত্বপূর্ণ কারণ
                    রয়েছে:</p>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <span
                            className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">১</span>
                        <div>
                            <h4 className="font-semibold">বিশ্বমানের শিক্ষা</h4>
                            <p className="text-sm text-muted-foreground">QS র‍্যাংকিংয়ে শীর্ষ বিশ্ববিদ্যালয় এবং উন্নত
                                গবেষণা সুবিধা</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span
                            className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">২</span>
                        <div>
                            <h4 className="font-semibold">ক্যারিয়ারের সুযোগ</h4>
                            <p className="text-sm text-muted-foreground">আন্তর্জাতিক কর্মক্ষেত্রে প্রবেশ এবং উচ্চ বেতনের
                                চাকরি</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span
                            className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">৩</span>
                        <div>
                            <h4 className="font-semibold">সাংস্কৃতিক বৈচিত্র্য</h4>
                            <p className="text-sm text-muted-foreground">বিশ্বব্যাপী নেটওয়ার্ক গড়ার এবং আন্তর্জাতিক
                                অভিজ্ঞতা অর্জনের সুযোগ</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span
                            className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">৪</span>
                        <div>
                            <h4 className="font-semibold">স্কলারশিপ সুবিধা</h4>
                            <p className="text-sm text-muted-foreground">মেধাভিত্তিক এবং প্রয়োজনভিত্তিক আর্থিক সহায়তার
                                ব্যাপক সুযোগ</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "item-5",
        question: "যুক্তরাষ্ট্রে উচ্চশিক্ষার জন্য শিক্ষার্থী ভিসার প্রয়োজনীয়তা কী কী?",
        answer: (
            <div className="space-y-4">
                <p>F-1 স্টুডেন্ট ভিসার জন্য নিম্নলিখিত ডকুমেন্টস প্রয়োজন:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-3">মূল ডকুমেন্টস:</h4>
                        <ul className="text-blue-700 space-y-2 text-sm">
                            <li>• বৈধ পাসপোর্ট (৬ মাসের বেশি মেয়াদসহ)</li>
                            <li>• ফর্ম I-20 (বিশ্ববিদ্যালয় থেকে)</li>
                            <li>• DS-160 কনফার্মেশন পেজ</li>
                            <li>• SEVIS ফি পেমেন্ট রসিদ</li>
                            <li>• ভিসা আবেদন ফি রসিদ</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">একাডেমিক ডকুমেন্টস:</h4>
                        <ul className="text-green-700 space-y-2 text-sm">
                            <li>• অফিসিয়াল ট্রান্সক্রিপ্ট</li>
                            <li>• ডিগ্রি সার্টিফিকেট</li>
                            <li>• ইংরেজি দক্ষতার স্কোর (TOEFL/IELTS)</li>
                            <li>• স্ট্যান্ডার্ডাইজড টেস্ট স্কোর (SAT/GRE)</li>
                            <li>• ভর্তি প্রমাণপত্র</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-3">আর্থিক ডকুমেন্টস:</h4>
                    <ul className="text-yellow-700 space-y-2 text-sm">
                        <li>• ব্যাংক স্টেটমেন্ট (পর্যাপ্ত অর্থের প্রমাণ)</li>
                        <li>• স্কলারশিপ অ্যাওয়ার্ড লেটার (যদি থাকে)</li>
                        <li>• স্পনসরশিপ লেটার (প্রয়োজনে)</li>
                        <li>• আয়ের প্রমাণপত্র</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>গুরুত্বপূর্ণ:</strong> ভিসা ইন্টারভিউয়ের সময় দেশে ফিরে আসার ইচ্ছার
                        প্রমাণ এবং পড়াশোনা শেষে কী করবেন তার স্পষ্ট পরিকল্পনা থাকতে হবে।</p>
                </div>
            </div>
        )
    }
]


export default function StudyAbroad() {

    return (
        <div className={"mx-auto max-w-7xl px-4 sm:px-6 mb-32"}>
            <Hero
                heading={"যুক্তরাষ্ট্রে উচ্চশিক্ষার সুযোগ"}
                image={{
                    src: "/images/cover1.jpg",
                    alt: "Study Abroad Hero Image"
                }}
                buttons={{
                    primary: {
                        text: "আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন",
                        url: "/search",
                    },
                }}
            />
            <div className={"mb-32"}>
                <TabList
                    tabs={studyAbroadTabs}
                    defaultValue="opportunities"
                    showEmptyState={false}
                >
                    <ContentTable
                        tabs={tableOfContents}
                        defaultValue={"introduction"}
                    />
                </TabList>
            </div>
            <FAQAccordion title={"বেশি জিজ্ঞাসিত প্রশ্ন"} data={faqData}/>
        </div>
    )
}

