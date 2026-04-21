//@ts-nocheck


const GmatSyllabus = () => {
    // বাংলা কন্টেন্টগুলো ছবির সাথে হুবহু মিলিয়ে লেখা হয়েছে।
    const content = {
        mainTitle: "GMAT পরীক্ষা সিলেবাস এবং প্যাটার্ন ২০২৫: বিভাগভিত্তিক GMAT ফরম্যাট",
        updateInfo: "আপডেট করা হয়েছে: আগস্ট ০৩, ২০২৫, ০৯:২৩",
        introPara1: "GMAT প্রবেশিকা পরীক্ষা পুরো বিশ্বের MBA আগ্রহীদের দ্বারা নেওয়া হয়, যাতে তারা তাদের ইচ্ছামত বিদেশে স্কুলে ভর্তি হতে পারে।",
        introPara2: "GMAT পরীক্ষার সময়কাল ২ ঘন্টা ১৫ মিনিট, এবং স্কোর ২০৫ থেকে সর্বোচ্চ ৮০০ পয়েন্ট পর্যন্ত থাকে। পুরো GMAT ফরম্যাটের তিনটি প্রধান অংশ রয়েছে।",
        introPara3: "GMAT পরীক্ষার কাঠামো এই চারটি ক্ষেত্রে ৬০টি বিষয়কে আচ্ছাদিত করে। এই পৃষ্ঠায় আপনাকে GMAT পরীক্ষা সিলেবাস ২০২৫ সম্পর্কে তথ্য দেওয়া হবে।",
        introPara4: "GMAT-এর Quant বিভাগে ডেটা সাফিসিয়েন্সি এবং সমস্যা সমাধান অন্তর্ভুক্ত, যেখানে Verbal বিভাগে Reading Comprehension, Sentence Correction, এবং Critical Reasoning অন্তর্ভুক্ত। Data Insights বিভাগে ডেটা বিশ্লেষণের দক্ষতার উপর গুরুত্ব দেওয়া হয়, যা ব্যবসায়িক সিদ্ধান্ত গ্রহণের জন্য গুরুত্বপূর্ণ।",
        introPara5: "আমরা GMAT সিলেবাস ২০২৫-এর প্রস্তুতির সময় যে বিষয়গুলিতে মনোযোগ দেওয়া উচিত সে সম্পর্কে বিস্তারিত আলোচনা করেছি।",

        section2Title: "২. GMAT পরীক্ষা সিলেবাস এবং প্যাটার্ন",
        section2Text: "এটি একটি ২ ঘন্টা ১৫ মিনিটের কম্পিউটার-অ্যাডাপ্টিভ টেস্ট, যা মোট ৬৪টি প্রশ্ন নিয়ে গঠিত, যার মধ্যে রয়েছে নৈর্ব্যক্তিক (objective) এবং ব্যক্তিনিষ্ঠ (subjective) প্রশ্ন।",
        section2TableTitle: "GMAT পরীক্ষার সিলেবাস এবং প্যাটার্ন",
        section2TableData: [
            { section: "Data Insights", questions: "২০", duration: "45 মিনিট" },
            { section: "Verbal", questions: "২৩", duration: "45 মিনিট" },
            { section: "Quantitative Skills", questions: "২১", duration: "45 মিনিট" },
        ],
        section2Footer: "আমরা ২০২৫ সালের GMAT Focus Edition সিলেবাসের প্রতিটি অংশ বিস্তারিতভাবে আলোচনা করেছি, তা থেকে Quantitative (গণিত) সিলেবাস, Math সিলেবাস, Verbal সিলেবাস, বা Data Insights সিলেবাস।",

        section5Title: "৫. GMAT ২০২৫-এর সর্বশেষ আপডেট",
        updates: [
            "সময়কাল: ফোকাস এডিশন ২ ঘন্টা ১৫ মিনিট, যেখানে ঐতিহ্যবাহী GMAT ৩ ঘন্টা ৭ মিনিট।",
            "Analytical Writing Assessment (AWA) এবং Integrated Reasoning (IR) সেকশনগুলো বাদ দেওয়া হয়েছে।",
            "ঐতিহ্যবাহী GMAT-এর তুলনায়, এখন আপনি যে সেকশন দিয়ে শুরু করবেন তা নির্বাচন করতে পারবেন, যা আপনার শক্তিশালী সেকশনে পারফরম্যান্স বাড়াতে সাহায্য করতে পারে।",
            "উত্তর পরিবর্তন করা সম্ভব শুধুমাত্র একই সেকশনের মধ্যে, পুরো পরীক্ষার জুড়ে নয়। (সর্বোচ্চ ৩টি প্রশ্নের উত্তর পরিবর্তন করা যায়)",
        ],

        section6Title: "৬. GMAT Quantitative Reasoning সিলেবাস এবং প্যাটার্ন",
        section6Text: "Problem Solving সেকশনে বহু-বিকল্প (Multiple-Choice) অপশন থাকবে। সেকশনের সময়কাল ৪৫ মিনিট।",
        quantSyllabus: {
            Arithmetic: [
                "Probability",
                "Ratio and Proportion",
                "Simple and Compounded Interest",
                "Speed, Time, Distance",
                "Percentage",
                "Average",
                "Fractions",
                "Decimals",
                "Number Properties",
                "Multiples and Factors",
            ],
            Algebra: [
                "Permutation and combination",
                "Algebraic Expressions and Equations",
                "Arithmetic and Geometric Progressions",
                "Statistics",
                "Exponents",
                "Functions",
            ],
        },

        section8Title: "৮. GMAT Verbal Reasoning সিলেবাস এবং প্যাটার্ন",
        verbalText1: "এই বিভাগে অন্তর্ভুক্ত রয়েছে Reading Comprehension এবং Critical Reasoning এবং এর সময়কাল ৪৫ মিনিট।",
        verbalText2: "এটি লিখিত বোধগম্যতা, পাঠ্য বোঝাপড়া এবং বিভিন্ন পয়েন্ট ও ধারণার মধ্যে যৌক্তিক সংযোগ বোঝার দক্ষতা পরীক্ষা করে।",
        verbalTopicsTitle: "এই Verbal Reasoning সেকশনে নিম্নলিখিত বিষয়গুলো অন্তর্ভুক্ত থাকবে:",
        verbalTopics: [
            "Critical Reasoning (সমালোচনামূলক যুক্তি)",
            "The Rhetorical Construction of Sentences (বাক্যগুলোর রিটোরিকাল কাঠামো)",
            "Reading Unseen Passages (জানা পাঠ্যাংশ পড়া)",
            "Subject-Verb Agreement (বিষয়-ক্রিয়া মিল)",
            "Misplaced Modifiers (ভুল স্থানে বসানো বিশেষ্য/বিশেষণ)",
            "Countable vs Uncountable Nouns (গণনাযোগ্য বনাম অগণনাযোগ্য)",
            "Parallelism (সমান্তরাল কাঠামো)",
        ],

        section9Title: "৭. GMAT Data Insights সিলেবাস এবং প্যাটার্ন",
        dataText1: "এই বিভাগটি ৪৫ মিনিট স্থায়ী হবে এবং এতে অন্তর্ভুক্ত: ক্রিটিক্যাল থিঙ্কিং, তথ্য সংমিশ্রণ, এবং সমস্যা সমাধান।",
        dataText2: "এটি ডেটা বিশ্লেষণ, ব্যাখ্যা এবং বিভিন্ন ফরম্যাটের ডেটা সেট (যেমন টেক্সট, চার্ট, গ্রাফ ইত্যাদি) থেকে উপসংহার টানার জন্য প্রয়োজনীয় ডেটা লিটারেসি দক্ষতা পরীক্ষা করে।",
        dataTopicsTitle: "এই Data Insights সেকশনে নিম্নলিখিত বিষয়গুলো অন্তর্ভুক্ত থাকবে:",
        dataTopics: [
            "Data Sufficiency (ডেটার পর্যাপ্ততা যাচাই)",
            "Graphics Interpretation (গ্রাফিক্স ব্যাখ্যা)",
            "Table Analysis (টেবিল বিশ্লেষণ)",
            "Two-part Analysis (দুই ভাগ বিশ্লেষণ)",
            "Multi-source Reasoning (বহু উৎস থেকে যুক্তি বিশ্লেষণ)",
        ],
    };

    // Card Component - একটি সাধারণ কার্ড ডিজাইন
    const Card = ({ children, className = '' }) => (
        <div className={`p-6 md:p-8 bg-white rounded-lg shadow-xl border border-gray-100 ${className}`}>
            {children}
        </div>
    );

    // Section 2: Exam Pattern Table
    const renderExamPatternTable = () => (
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-700">
                {content.section2TableTitle}
            </h3>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-indigo-600 text-white text-left text-sm md:text-base">
                            <th className="p-3 md:p-4 border-r border-indigo-700 w-1/3">বিভাগসমূহ</th>
                            <th className="p-3 md:p-4 border-r border-indigo-700 w-1/3">প্রশ্নের সংখ্যা</th>
                            <th className="p-3 md:p-4 w-1/3">সময়কাল</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content.section2TableData.map((item, index) => (
                            <tr key={item.section} className={`text-gray-700 text-sm md:text-base ${index % 2 === 0 ? 'bg-indigo-50' : 'bg-white'}`}>
                                <td className="p-3 md:p-4 border-r border-gray-200 font-medium">{item.section}</td>
                                <td className="p-3 md:p-4 border-r border-gray-200">{item.questions}</td>
                                <td className="p-3 md:p-4">{item.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    // Section 6: Quantitative Reasoning Syllabus
    const renderQuantSyllabus = () => (
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 mb-4 text-sm md:text-base">
                {content.section6Text}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Arithmetic Column */}
                <div className="w-full md:w-1/2">
                    <h4 className="bg-indigo-600 text-white p-3 font-semibold rounded-t-lg">
                        Arithmetic
                    </h4>
                    <ul className="list-none border border-gray-200 divide-y divide-gray-200 rounded-b-lg">
                        {content.quantSyllabus.Arithmetic.map((topic, index) => (
                            <li key={index} className="p-3 text-sm md:text-base text-gray-700 bg-white">
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Algebra Column */}
                <div className="w-full md:w-1/2">
                    <h4 className="bg-indigo-600 text-white p-3 font-semibold rounded-t-lg">
                        Algebra
                    </h4>
                    <ul className="list-none border border-gray-200 divide-y divide-gray-200 rounded-b-lg">
                        {content.quantSyllabus.Algebra.map((topic, index) => (
                            <li key={index} className="p-3 text-sm md:text-base text-gray-700 bg-white">
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    // List Renderer for Verbal and Data Insights
    const renderSyllabusList = (topics) => (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
            {topics.map((topic, index) => (
                <li key={index} className="pl-1">
                    {topic}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="font-sans min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">

                {/* Main Header Section (Top of the page) */}
                <header className="mb-8 p-6 md:p-8 bg-white rounded-lg shadow-xl border-t-4 border-indigo-600">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-700 mb-2">
                        {content.mainTitle}
                    </h1>
                    <p className="text-sm text-gray-500 mb-6">
                        <span role="img" aria-label="clock">🕒</span> {content.updateInfo}
                    </p>
                    <p className="text-base text-gray-600 mb-3">{content.introPara1}</p>
                    <p className="text-base text-gray-600 mb-3">{content.introPara2}</p>
                    <p className="text-base text-gray-600 mb-3">{content.introPara4}</p>
                    <p className="text-base text-gray-600 font-medium">{content.introPara5}</p>
                </header>

                {/* Section 2: GMAT Exam Pattern (Table) */}
                <Card className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-4">
                        {content.section2Title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                        {content.section2Text}
                    </p>
                    {renderExamPatternTable()}
                    <p className="mt-6 text-gray-600 text-sm md:text-base font-medium">
                        {content.section2Footer}
                    </p>
                </Card>

                {/* Section 5: Latest Updates */}
                <Card className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-4">
                        {content.section5Title}
                    </h2>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                        {content.updates.map((update, index) => (
                            <li key={index} className="pl-1 leading-relaxed">
                                {update}
                            </li>
                        ))}
                    </ul>
                </Card>
                
                {/* --- */}

                {/* Section 6: Quantitative Reasoning Syllabus */}
                <Card className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-4">
                        {content.section6Title}
                    </h2>
                    {renderQuantSyllabus()}
                </Card>

                {/* --- */}

                {/* Section 8: Verbal Reasoning Syllabus */}
                <Card className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-4">
                        {content.section8Title}
                    </h2>
                    <p className="text-gray-600 mb-3 text-sm md:text-base">
                        {content.verbalText1}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                        {content.verbalText2}
                    </p>
                    <h3 className="font-semibold text-gray-700 mb-3 text-base md:text-lg">
                        {content.verbalTopicsTitle}
                    </h3>
                    {renderSyllabusList(content.verbalTopics)}
                </Card>

                {/* --- */}

                {/* Section 9 (Image 3 had it as 7 but actual is 9): Data Insights Syllabus */}
                <Card className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-4">
                        {content.section9Title}
                    </h2>
                    <p className="text-gray-600 mb-3 text-sm md:text-base">
                        {content.dataText1}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                        {content.dataText2}
                    </p>
                    <h3 className="font-semibold text-gray-700 mb-3 text-base md:text-lg">
                        {content.dataTopicsTitle}
                    </h3>
                    {renderSyllabusList(content.dataTopics)}
                </Card>

            </div>
        </div>
    );
};

export default GmatSyllabus;