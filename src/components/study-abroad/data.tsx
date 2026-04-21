import {CustomDataTable} from "../CustomDataTable";


const introData = [
    {type: "যুক্তরাষ্ট্রে বাংলাদেশি শিক্ষার্থীরা", details: "২.৫ লক্ষ+"},
    {type: "ভর্তি গ্রহণের হার", details: "৬৮%"},
    {type: "ভিসা অনুমোদনের হার", details: "৬৫%"},
    {type: "মোট শিক্ষাপ্রতিষ্ঠান", details: "৩৯০০+"},
    {type: "সবচেয়ে জনপ্রিয় ইনটেক", details: "ফল ইনটেক"},
    {type: "ন্যূনতম IELTS স্কোর", details: "৬.৫"},
    {type: "ন্যূনতম TOEFL স্কোর", details: "৮০"},
    {type: "গড় বেতনের পরিসীমা", details: "$৬০০০০ - $৬৫০০০"},
    {type: "গড় টিউশন ফি-এর পরিসীমা", details: "$৮০০০ - $৫৫০০০"}
]

const introColum = [
    {key: "type", header: "মানদণ্ড"},
    {key: "details", header: "বিস্তারিত"},
]

const famousPlacesData = [
    {city: "বোস্টন", ranking: "#১৬"},
    {city: "নিউ ইয়র্ক", ranking: "#১৮"},
    {city: "সান ফ্রান্সিসকো", ranking: "#২৯"},
    {city: "লস অ্যাঞ্জেলেস", ranking: "#৩৭"},
    {city: "শিকাগো", ranking: "#৪৪"},
    {city: "ফিলাডেলফিয়া", ranking: "#৬৫"},
    {city: "সান ডিয়েগো", ranking: "#৬৯"},
    {city: "ওয়াশিংটন ডিসি", ranking: "#৭০"},
    {city: "আটলান্টা", ranking: "#৭২"},
    {city: "পিটসবার্গ", ranking: "#৮০"}
]

const famousPlacesColumns = [
    {key: "city", header: "শহরসমূহ"},
    {key: "ranking", header: "২০২৫ সালের QS সেরা শিক্ষার্থী শহর"},
]
// Education System Data
const educationSystemData = [
    {program: "স্নাতক ডিগ্রি", duration: "৪ বছর"},
    {program: "স্নাতকোত্তর ডিগ্রি", duration: "১.৫ - ২ বছর"},
    {program: "পিএইচডি প্রোগ্রাম", duration: "৪ – ৭ বছর"},
    {program: "অ্যাসোসিয়েট ডিগ্রি", duration: "২ বছর"},
    {program: "প্রশিক্ষণমূলক কোর্স", duration: "১ বছর"}
]

const educationSystemColumns = [
    {key: "program", header: "প্রোগ্রামের ধরণ"},
    {key: "duration", header: "সময়কাল"},
]

// Top Universities Data
const topUniversitiesData = [
    {university: "ম্যাসাচুসেটস ইনস্টিটিউট অব টেকনোলজি (এমআইটি)", qs: "#১", the: "#২"},
    {university: "হার্ভার্ড বিশ্ববিদ্যালয়", qs: "#৪", the: "#৩"},
    {university: "স্ট্যানফোর্ড বিশ্ববিদ্যালয়", qs: "#৬", the: "#৬"},
    {university: "ক্যালিফোর্নিয়া ইনস্টিটিউট অব টেকনোলজি (ক্যালটেক)", qs: "#১০", the: "#৭"},
    {university: "ইউনিভার্সিটি অব পেনসিলভানিয়া", qs: "#১১", the: "#১৪"},
    {university: "ইউনিভার্সিটি অব ক্যালিফোর্নিয়া, বার্কলে", qs: "#১২", the: "#৮"},
    {university: "কর্নেল বিশ্ববিদ্যালয়", qs: "#১৬", the: "#২০"},
    {university: "ইউনিভার্সিটি অব শিকাগো", qs: "#২১", the: "#১৪"},
    {university: "প্রিন্সটন বিশ্ববিদ্যালয়", qs: "#২২", the: "#৪"},
    {university: "ইয়েল বিশ্ববিদ্যালয়", qs: "#২ৃ", the: "#১০"}
]

const topUniversitiesColumns = [
    {key: "university", header: "বাংলাদেশি শিক্ষার্থীদের জন্য যুক্তরাষ্ট্রের সেরা বিশ্ববিদ্যালয়সমূহ"},
    {key: "qs", header: "QS বিশ্ব বিশ্ববিদ্যালয় র‍্যাংকিং ২০২৫"},
    {key: "the", header: "THE বিশ্ব বিশ্ববিদ্যালয় র‍্যাংকিং ২০২৫"}
]

// Admission Sessions Data
const admissionSessionsData = [
    {
        intake: "ফল ইনটেক",
        features: "১. সবচেয়ে বিস্তৃত প্রোগ্রাম সমূহের অফার প্রদান করে ২. যদি আপনি শুরু থেকেই মনোযোগ দিয়ে পড়তে প্রস্তুত হন, তবে এটি আপনার জন্য উপযুক্ত",
        duration: "সেপ্টেম্বর - ডিসেম্বর"
    },
    {
        intake: "স্প্রিং ইনটেক",
        features: "১. যারা ফল ইনটেক মিস করেছেন তাদের জন্য। ২. কম প্রতিযোগিতার কারণে ভর্তি হওয়ার সুযোগ বেশি।",
        duration: "জানুয়ারি - এপ্রিল"
    },
    {
        intake: "সামার ইনটেক",
        features: "১. একাডেমিক বছরের শেষ ইনটেক সেশন ২. ছোট ব্যাচ সাইজ থাকার কারণে বেশি মনোযোগ ও ব্যক্তিগত যত্ন নিশ্চিত হয়।",
        duration: "মে - আগস্ট"
    }
]

const admissionSessionsColumns = [
    {key: "intake", header: "ইনটেক"},
    {key: "features", header: "বৈশিষ্ট্য"},
    {key: "duration", header: "সময়কাল"}
]

// Education Costs Data
const educationCostsData = [
    {degree: "স্নাতক ডিগ্রি", cost: "$২০,০০০-$৫০,০০০"},
    {degree: "স্নাতকোত্তর ডিগ্রি", cost: "$২৫,০০০-$৭০,০০০"},
    {degree: "এমবিএ", cost: "$৪৫,০০০-$৭৭,০০০"},
    {degree: "পিএইচডি প্রোগ্রাম", cost: "$৩০,০০০-$৮০,০০০"}
]

const educationCostsColumns = [
    {key: "degree", header: "ডিগ্রি"},
    {key: "cost", header: "যুক্তরাষ্ট্রে উচ্চশিক্ষার গড় বার্ষিক টিউশন ফি পরিসীমা"}
]

// Living Costs Data
const livingCostsData = [
    {criteria: "ভাড়া (বাসস্থান)", cost: "$১,৫০০ - $১,৮০০"},
    {criteria: "যাতায়াত খরচ (মাসিক পাস)", cost: "$৮০ - $১৩০"},
    {criteria: "খাবার", cost: "$২৫০ - $৪০০"},
    {criteria: "অন্যান্য খরচ", cost: "$২০৬"}
]

const livingCostsColumns = [
    {key: "criteria", header: "মানদণ্ড"},
    {key: "cost", header: "মাসিক খরচ"}
]

// English Requirements Data
const englishRequirementsData = [
    {test: "IELTS", score: "৬.৫ বা তার বেশি"},
    {test: "PTE", score: "৫৫ বা তার বেশি"},
    {test: "TOEFL", score: "৮০ বা তার বেশি"}
]

const englishRequirementsColumns = [
    {key: "test", header: "ইংরেজি দক্ষতার জন্য আবশ্যক শর্ত"},
    {key: "score", header: "স্কোর"}
]

// Scholarships Data
const scholarshipsData = [
    {scholarship: "ইনলাক্স বৃত্তি", amount: "৮৩ লক্ষ টাকা"},
    {scholarship: "রিচি-জেনিংস স্কলারশিপ কর্মসূচি", amount: "৪ লক্ষ, ৬ লক্ষ ও ৮ লক্ষ টাকা থেকে পরিবর্তনশীল"},
    {scholarship: "ইয়েল বিশ্ববিদ্যালয় স্কলারশিপ", amount: "৫৮ লক্ষ টাকা"},
    {scholarship: "ক্লার্ক গ্লোবাল স্কলারশিপ কর্মসূচি", amount: "১২ লক্ষ থেকে ২০ লক্ষ টাকা"},
    {scholarship: "বোস্টন বিশ্ববিদ্যালয় প্রেসিডেন্টিয়াল স্কলারশিপ", amount: "২৫ লক্ষ টাকা"}
]

const scholarshipsColumns = [
    {key: "scholarship", header: "স্কলারশিপ"},
    {key: "amount", header: "সুবিধাসমূহ (প্রায়)"}
]

// Work Opportunities Data
const workOpportunitiesData = [
    {field: "প্রযুক্তি", position: "ডেটা সায়েন্টিস্ট", salary: "২.১ থেকে ৪.৯ লক্ষ টাকা"},
    {field: "প্রযুক্তি", position: "সফটওয়্যার ডেভেলপার", salary: "২.৮ লক্ষ টাকা"},
    {field: "প্রযুক্তি", position: "সাইবারসিকিউরিটি অ্যানালিস্ট", salary: "২.৯ লক্ষ টাকা"},
    {field: "স্বাস্থ্যসেবা", position: "রেজিস্টার্ড নার্স", salary: "২.৩ লক্ষ টাকা"},
    {field: "স্বাস্থ্যসেবা", position: "সার্জন", salary: "৮.৪ থেকে ১৫ লক্ষ টাকা বা তার বেশি"},
    {field: "স্বাস্থ্যসেবা", position: "ফিজিশিয়ান", salary: "৬.৭ থেকে ১২ লক্ষ টাকা বা তার বেশি"},
    {field: "প্রকৌশল", position: "ইলেকট্রিক্যাল ইঞ্জিনিয়ার", salary: "৩.০ লক্ষ টাকা"},
    {field: "প্রকৌশল", position: "কম্পিউটার ইঞ্জিনিয়ার", salary: "৩.৩ লক্ষ টাকা"},
    {field: "প্রকৌশল", position: "নেটওয়ার্ক ইঞ্জিনিয়ার", salary: "৩.১ লক্ষ টাকা"},
    {field: "ব্যবসা", position: "সেলস ম্যানেজার", salary: "২.৭ লক্ষ টাকা"},
    {field: "ব্যবসা", position: "মার্কেটিং অ্যানালিস্ট", salary: "২.২ লক্ষ টাকা"},
    {field: "ব্যবসা", position: "অপারেশনস ম্যানেজার", salary: "৩.০ লক্ষ টাকা"}
]

const workOpportunitiesColumns = [
    {key: "field", header: "ক্ষেত্র"},
    {key: "position", header: "চাকরির পদবী"},
    {key: "salary", header: "আনুমানিক মাসিক বেতন পরিসীমা (টাকা)"}
]


export const tableOfContents = [
    {
        value: "introduction",
        title: "পরিচিতি",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>পরিচিতি</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে উচ্চশিক্ষা এখন আর কেবল একটি আকাঙ্ক্ষা নয়, এটি একটি বাস্তবতা। বিশ্বের
                        শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলোর কেন্দ্রস্থল, গবেষণা ও উদ্ভাবনের ক্ষেত্রে এই দেশ অন্যতম প্রধান
                        স্থান হিসেবে
                        পরিচিত, যা আন্তর্জাতিক ক্যারিয়ারের জন্য অবশেষে একটি নতুন সম্ভাবনার দ্বার উন্মোচন করে।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        দীর্ঘকাল ধরে যুক্তরাষ্ট্র বাংলাদেশি শিক্ষার্থীদের জন্য স্বপ্নের বিশ্ববিদ্যালয় হিসেবে পরিচিত।
                        ২০২ৄ সালে, ৩,৩৭,৬৩০ জনেরও
                        বেশি শিক্ষার্থী তাদের লক্ষ্য অর্জনের জন্য এই দেশে পাড়ি জমিয়েছে—এটি কেবল একটি সংখ্যা নয়, বরং
                        সম্ভাবনা, অর্জন এবং হাজারো স্বপ্নের প্রতীক।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        আপনার যদি STEM, ব্যবসা, প্রকৌশল বা মানবিক বিষয়ে আগ্রহ থাকে, তাহলে যুক্তরাষ্ট্রে পড়াশোনা করার
                        সুযোগটি আপনাকে নতুন দিগন্তের সন্ধান দেবে।
                    </p>
                </div>
                <CustomDataTable columns={introColum} data={introData} className="max-w-2xl mx-auto my-10"/>
            </div>
        )
    },
    {
        value: "why-study-usa",
        title: "কেন যুক্তরাষ্ট্রে উচ্চশিক্ষার সুযোগ গ্রহণ করবেন?",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>কেন যুক্তরাষ্ট্রে উচ্চশিক্ষার সুযোগ গ্রহণ করবেন?</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে উচ্চশিক্ষা গ্রহণের সুবিধাগুলো অসংখ্য এবং বিশ্বমানের। এখানে রয়েছে বিশ্বের
                        সেরা বিশ্ববিদ্যালয়, অত্যাধুনিক গবেষণা সুবিধা এবং আন্তর্জাতিক ক্যারিয়ারের অভূতপূর্ব সুযোগ।
                        নিচের কারণগুলো যুক্তরাষ্ট্রকে উচ্চশিক্ষার জন্য সবচেয়ে আকর্ষণীয় গন্তব্য করে তুলেছে:
                    </p>
                </div>
                <div className={"my-8"}>
                    <ul className={"space-y-4 text-lg"}>
                        <li className={"flex items-start gap-3"}>
                            <span className={"text-primary font-bold text-xl"}>১.</span>
                            <span>বিশ্ববিখ্যাত QS র‍্যাঙ্কিংয়ে অন্তর্ভুক্ত বিশ্ববিদ্যালয়সমূহ</span>
                        </li>
                        <li className={"flex items-start gap-3"}>
                            <span className={"text-primary font-bold text-xl"}>২.</span>
                            <span>গবেষণায় বিশ্বমানের পরিকাঠামো ও দৃষ্টিনন্দন স্কলারশিপ সুবিধা</span>
                        </li>
                        <li className={"flex items-start gap-3"}>
                            <span className={"text-primary font-bold text-xl"}>৩.</span>
                            <span>বৈচিত্র্যময় সংস্কৃতি ও নিরাপদ পরিবেশ</span>
                        </li>
                        <li className={"flex items-start gap-3"}>
                            <span className={"text-primary font-bold text-xl"}>৪.</span>
                            <span>আন্তর্জাতিক ক্যারিয়ার গড়ার জন্য অসংখ্য সুযোগ</span>
                        </li>
                    </ul>
                </div>
                <div
                    className={"bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-primary my-8"}>
                    <p className={"text-lg sm:text-xl text-gray-700 leading-relaxed"}>
                        আপনি যদি আপনার স্বপ্নকে স্পর্শ করার সঠিক সময় খুঁজে থাকেন, তাহলে <span
                        className={"font-semibold text-primary"}>মেভেনকেভ</span>-এর সঙ্গে উচ্চশিক্ষার যাত্রা শুরু করুন—
                        আমাদের দক্ষ এক্সপার্ট টিমের দিকনির্দেশনা ও নিরবচ্ছিন্ন সহায়তার মাধ্যমে। আমরা আপনার সঙ্গে আছি
                        শুরু থেকে শেষ পর্যন্ত— আপনার প্রতিটি ধাপে, আপনার স্বপ্নকে বাস্তবে রূপ দিতে।
                    </p>
                </div>
            </div>
        )
    },
    {
        value: "famous-study-places",
        title: "যুক্তরাষ্ট্রে অধ্যয়নের জন্য বিখ্যাত স্থানগুলি",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে অধ্যয়নের জন্য বিখ্যাত স্থানগুলি</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে স্থানীয় এবং আন্তর্জাতিক উভয় শিক্ষার্থীদের জন্য একটি চমৎকার অভিজ্ঞতা প্রদানকারী
                        কিছু সেরা বিশ্ববিদ্যালয় রয়েছে। বস্টন, নিউ ইয়র্ক এবং সান ফ্রান্সিসকোর মতো প্রাণবন্ত ও
                        বৈচিত্র্যময় শহরগুলো এই তালিকায় অন্যতম।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        এসব শহরগুলিতে বিশ্বের মানসম্পন্ন শিক্ষা, সমৃদ্ধ সংস্কৃতি এবং আকর্ষণীয় কর্মসংস্থানের সুযোগের এক
                        অসাধারণ মিশ্রণ বিদ্যমান, ফলে এগুলো শিক্ষার্থীদের জন্য একটি উপযুক্ত পরিবেশ তৈরি করে।
                    </p>
                    <p className={"text-lg sm:text-xl font-medium"}>
                        নিচে উল্লেখ করা হলো এসব শীর্ষস্থানীয় শিক্ষার্থী শহরের একটি সম্পূর্ণ তালিকা—
                    </p>
                </div>
                <CustomDataTable columns={famousPlacesColumns} data={famousPlacesData}
                                 className="max-w-3xl mx-auto my-10"/>
            </div>
        )
    },
    {
        value: "education-system",
        title: "যুক্তরাষ্ট্রের শিক্ষাব্যবস্থা কেমন?",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রের শিক্ষাব্যবস্থা কেমন?</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রের শিক্ষাব্যবস্থা মূলত তিনটি স্তরে বিভক্ত: প্রাথমিক শিক্ষা (কে-৫), মধ্যবিত্ত শিক্ষা
                        (৬-৮শ শ্রেণি), এবং উচ্চ মাধ্যমিক শিক্ষা (৯-১২শ শ্রেণি)। উচ্চ মাধ্যমিক শিক্ষা শেষ করার পর,
                        শিক্ষার্থীরা সাধারণত বিভিন্ন ধরনের কলেজ এবং বিশ্ববিদ্যালয়ে ভর্তি হতে পারে।
                    </p>
                </div>
                <div className={"bg-blue-50 p-6 rounded-lg my-8"}>
                    <h4 className={"text-xl font-semibold mb-4 text-blue-800"}>আপনি কি জানেন?</h4>
                    <p className={"text-lg text-blue-700"}>
                        যুক্তরাষ্ট্রে ৪,০০০-এর বেশি উচ্চশিক্ষা প্রতিষ্ঠান রয়েছে, যার মধ্যে ১,৬২৬টি পাবলিক
                        বিশ্ববিদ্যালয় এবং ১,৬৮৭টি প্রাইভেট বিশ্ববিদ্যালয় অন্তর্ভুক্ত।
                    </p>
                </div>
                <CustomDataTable columns={educationSystemColumns} data={educationSystemData}
                                 className="max-w-2xl mx-auto my-10"/>
            </div>
        )
    },
    {
        value: "top-universities",
        title: "আমেরিকায় উচ্চশিক্ষার জন্য শীর্ষ বিশ্ববিদ্যালয়",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>আমেরিকায় উচ্চশিক্ষার জন্য শীর্ষ বিশ্ববিদ্যালয়</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে উচ্চশিক্ষার জন্য বিস্তৃত সুযোগ-সুবিধা রয়েছে, যেখানে প্রায় ৩,৯০০টি প্রতিষ্ঠান
                        বিভিন্ন ক্ষেত্রে স্নাতক এবং স্নাতকোত্তর প্রোগ্রাম সরবরাহ করে।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        QS র‍্যাংকিং অনুসারে, যুক্তরাষ্ট্রের ১৯০টিরও বেশি বিশ্ববিদ্যালয় অন্তর্ভুক্ত রয়েছে। এর মধ্যে
                        ২৭টিরও বেশি বিশ্ববিদ্যালয় QS ওয়ার্ল্ড ইউনিভার্সিটি র‍্যাংকিংসের শীর্ষ ১০০তে স্থান লাভ করেছে।
                    </p>
                    <p className={"text-lg sm:text-xl font-medium"}>
                        এখানে আমেরিকার অন্যতম সেরা বিশ্ববিদ্যালয়গুলোর একটি তালিকা প্রদান করা হলো:
                    </p>
                </div>
                <CustomDataTable columns={topUniversitiesColumns} data={topUniversitiesData}
                                 className="max-w-5xl mx-auto my-10"/>
            </div>
        )
    },
    {
        value: "popular-courses",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার জনপ্রিয় কোর্সসমূহ",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে উচ্চশিক্ষার জনপ্রিয় কোর্সসমূহ</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্র উচ্চশিক্ষার ক্ষেত্রে একটি বৈশ্বিক নেতা, যেখানে নানা ধরনের জনপ্রিয় কোর্স অফার করা
                        হয়। শিক্ষার্থীদের মধ্যে সবচেয়ে বেশি চাহিদাসম্পন্ন বিষয়গুলোর মধ্যে রয়েছে STEM (বিজ্ঞান,
                        প্রযুক্তি, প্রকৌশল ও গণিত), ব্যবসা ও ব্যবস্থাপনা, প্রকৌশল, গণিত, কম্পিউটার বিজ্ঞান এবং সামাজিক
                        বিজ্ঞান।
                    </p>
                </div>
                <div className={"my-8"}>
                    <h4 className={"text-xl font-semibold mb-6"}>যুক্তরাষ্ট্রে সবচেয়ে বেশি চাহিদাসম্পন্ন ১০টি
                        কোর্স</h4>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                        <ul className={"space-y-3 text-lg"}>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>১</span>
                                <span>কম্পিউটার সায়েন্স ও তথ্য প্রযুক্তি</span>
                            </li>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>২</span>
                                <span>স্বাস্থ্যসেবা</span>
                            </li>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>৩</span>
                                <span>ব্যবসা ও ব্যবস্থাপনা</span>
                            </li>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>৪</span>
                                <span>প্রকৌশল</span>
                            </li>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>৫</span>
                                <span>ডেটা সায়েন্স ও অ্যানালিটিক্স</span>
                            </li>
                        </ul>
                        <ul className={"space-y-3 text-lg"}>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>৬</span>
                                <span>ফাইন্যান্স ও অ্যাকাউন্টিং</span>
                            </li>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>৭</span>
                                <span>আইন</span>
                            </li>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>৮</span>
                                <span>মনোবিজ্ঞান</span>
                            </li>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>৯</span>
                                <span>পরিবেশ বিজ্ঞান</span>
                            </li>
                            <li className={"flex items-center gap-3"}>
                                <span
                                    className={"w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold"}>১০</span>
                                <span>স্থাপত্যশিল্প (আর্কিটেকচার)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        value: "admission-sessions",
        title: "যুক্তরাষ্ট্রে ভর্তি সেশনসমূহ",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে ভর্তি সেশন</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্র আন্তর্জাতিক শিক্ষার্থীদের জন্য একটি অত্যন্ত জনপ্রিয় গন্তব্য, যা বৈশ্বিক
                        শিক্ষাক্ষেত্রে কার্যকরভাবে নেতৃত্ব প্রদান করে। আমেরিকার বিশ্ববিদ্যালয়গুলি সাধারণত একটি
                        নির্দিষ্ট ভর্তি প্রক্রিয়ার মাধ্যমে শিক্ষার্থীদের ভর্তি করে।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে উচ্চশিক্ষার ক্ষেত্রে প্রধান ভর্তি সেশন হল ফল সেশন, যা সাধারণত আগস্টের শেষ বা
                        সেপ্টেম্বরের প্রথম সপ্তাহে শুরু হয়। এটি একাডেমিক বছরের সূচনা নির্দেশ করে এবং বেশিরভাগ
                        বিশ্ববিদ্যালয়ে এই সেশনে ভর্তি নেওয়ার হার প্রায় ৯৯%।
                    </p>
                </div>
                <CustomDataTable columns={admissionSessionsColumns} data={admissionSessionsData}
                                 className="max-w-4xl mx-auto my-10"/>
            </div>
        )
    },
    {
        value: "application-process",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার আবেদন পদ্ধতি",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে উচ্চশিক্ষার আবেদন পদ্ধতি</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে উচ্চশিক্ষার জন্য আবেদন প্রক্রিয়া প্রথমে কঠিন মনে হতে পারে, কিন্তু সঠিক প্রস্তুতি
                        ও গাইডলাইন অনুসরণ করলে এটি একদম সহজ ও পরিচালনাযোগ্য। আপনার সহায়তার জন্য আমরা একটি সহজবোধ্য গাইড
                        তৈরি করেছি।
                    </p>
                </div>
                <div className={"my-8"}>
                    <h4 className={"text-xl font-semibold mb-6"}>কিভাবে আবেদন করবেন?</h4>
                    <div className={"space-y-6"}>
                        <div className={"flex gap-4"}>
                            <div
                                className={"w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"}>১
                            </div>
                            <div>
                                <h5 className={"font-semibold mb-2"}>আত্ম-মূল্যায়ন ও গবেষণা</h5>
                                <p className={"text-gray-700"}>আপনার পছন্দের শিক্ষার ক্ষেত্র এবং ডিগ্রির স্তর নির্ধারণ
                                    করুন (স্নাতক, স্নাতকোত্তর বা পিএইচডি)।</p>
                            </div>
                        </div>
                        <div className={"flex gap-4"}>
                            <div
                                className={"w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"}>২
                            </div>
                            <div>
                                <h5 className={"font-semibold mb-2"}>একজন শিক্ষার পরামর্শদাতার সঙ্গে পরামর্শ করুন</h5>
                                <p className={"text-gray-700"}>আপনার একাডেমিক পটভূমি, ক্যারিয়ার লক্ষ্য এবং বিদেশে
                                    পড়াশোনার স্বপ্ন নিয়ে আলোচনা করতে একজন শিক্ষার পরামর্শদাতার সঙ্গে পরামর্শ করুন।</p>
                            </div>
                        </div>
                        <div className={"flex gap-4"}>
                            <div
                                className={"w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"}>৩
                            </div>
                            <div>
                                <h5 className={"font-semibold mb-2"}>ভাষাগত দক্ষতা</h5>
                                <p className={"text-gray-700"}>আপনার ইংরেজি ভাষাগত দক্ষতার স্তর নিরূপণ করুন, যাতে জানা
                                    যায় ভাষা পরীক্ষার প্রয়োজন আছে কি না।</p>
                            </div>
                        </div>
                        <div className={"flex gap-4"}>
                            <div
                                className={"w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"}>৪
                            </div>
                            <div>
                                <h5 className={"font-semibold mb-2"}>আবেদন সংক্রান্ত নথিপত্র প্রস্তুত করুন</h5>
                                <p className={"text-gray-700"}>পূর্ববর্তী শিক্ষাপ্রতিষ্ঠান থেকে অফিসিয়াল ট্রান্সক্রিপ্ট
                                    সংগ্রহ করুন।</p>
                            </div>
                        </div>
                        <div className={"flex gap-4"}>
                            <div
                                className={"w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"}>৫
                            </div>
                            <div>
                                <h5 className={"font-semibold mb-2"}>বিশ্ববিদ্যালয়গুলোতে আবেদন করুন</h5>
                                <p className={"text-gray-700"}>আপনার নির্বাচিত বিশ্ববিদ্যালয়গুলোর জন্য অনলাইনে আবেদন
                                    সম্পূর্ণ করুন, এবং প্রয়োজনীয় নথিপত্র জমা দিন।</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"bg-yellow-50 p-6 rounded-lg my-8"}>
                    <h4 className={"text-xl font-semibold mb-4 text-yellow-800"}>আবেদনের জন্য ফি কত লাগবে?</h4>
                    <p className={"text-yellow-700"}>
                        যুক্তরাষ্ট্রের বিশ্ববিদ্যালয়গুলোর আবেদন ফি বিশ্ববিদ্যালয় ও প্রোগ্রামের ভিন্নতার উপর নির্ভর
                        করে, তবে এটি সাধারণত ৫০ ডলার থেকে ১৫০ ডলার পর্যন্ত হতে পারে।
                    </p>
                </div>
            </div>
        )
    },
    {
        value: "admission-requirements",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার আবেদন ও ভর্তির শর্তাবলি",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে উচ্চশিক্ষার আবেদন ও ভর্তির শর্তাবলি</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        বাংলাদেশি শিক্ষার্থীদের জন্য যুক্তরাষ্ট্রে উচ্চশিক্ষার ভর্তি শর্তাবলি বিশ্ববিদ্যালয় ও
                        প্রোগ্রামের উপর নির্ভর করে ভিন্ন হতে পারে। চলুন, যুক্তরাষ্ট্রের একটি শীর্ষস্থানীয়
                        বিশ্ববিদ্যালয়ে ভর্তি হতে হলে কী কী প্রয়োজনীয়তা পূরণ করতে হয়, তা দেখে নিই।
                    </p>
                </div>
                <div className={"my-8"}>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
                        <div className={"bg-blue-50 p-6 rounded-lg"}>
                            <h4 className={"text-xl font-semibold mb-4 text-blue-800"}>স্নাতক প্রোগ্রাম</h4>
                            <ul className={"space-y-3 text-blue-700"}>
                                <li>• একাডেমিক রেকর্ডস: উচ্চ মাধ্যমিক সার্টিফিকেট (Class XII)</li>
                                <li>• স্ট্যান্ডার্ড টেস্ট: SAT স্কোর (১০০০–১২০০)</li>
                                <li>• আবেদন ফি</li>
                                <li>• বিশ্ববিদ্যালয়-নির্দিষ্ট শর্তাবলি</li>
                            </ul>
                        </div>
                        <div className={"bg-green-50 p-6 rounded-lg"}>
                            <h4 className={"text-xl font-semibold mb-4 text-green-800"}>স্নাতকোত্তর প্রোগ্রাম</h4>
                            <ul className={"space-y-3 text-green-700"}>
                                <li>• ৪ বছর মেয়াদি স্নাতক ডিগ্রি</li>
                                <li>• কমপক্ষে GPA ৩.০ (বা গড়ে ৭০%)</li>
                                <li>• কাজের অভিজ্ঞতা (কিছু প্রোগ্রামের জন্য)</li>
                                <li>• GMAT/GRE স্কোর (প্রয়োজনে)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <CustomDataTable columns={englishRequirementsColumns} data={englishRequirementsData}
                                 className="max-w-2xl mx-auto my-10"/>
            </div>
        )
    },
    {
        value: "education-costs",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার খরচ",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে উচ্চশিক্ষার খরচ</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে পড়াশোনা সাধারণত ব্যয়বহুল হতে পারে, বিশেষ করে টিউশন ফি-র কারণে, যা আন্তর্জাতিক
                        শিক্ষার্থীদের জন্য সবচেয়ে বড় আর্থিক চ্যালেঞ্জ। খরচ বিশ্ববিদ্যালয়ের অবস্থান, খ্যাতি এবং আপনি
                        কোন প্রোগ্রামে ভর্তি হচ্ছেন, তার ওপর নির্ভর করে ভিন্ন হতে পারে।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        তবে সুখবর হলো—অনেক সাশ্রয়ী বিশ্ববিদ্যালয়, বিশেষ করে পাবলিক ইনস্টিটিউশনগুলো, তুলনামূলকভাবে কম
                        খরচে পড়াশোনার সুযোগ দিচ্ছে। এছাড়াও, বিভিন্ন স্কলারশিপ এবং আর্থিক সহায়তা পাওয়ার সুযোগ থাকায়
                        যুক্তরাষ্ট্রে পড়াশোনা অনেক শিক্ষার্থীর জন্য আরও সহজ ও বাস্তবসম্মত হয়ে উঠছে।
                    </p>
                </div>
                <CustomDataTable columns={educationCostsColumns} data={educationCostsData}
                                 className="max-w-3xl mx-auto my-10"/>
                <div className={"bg-yellow-50 p-4 rounded-lg my-8"}>
                    <p className={"text-sm text-yellow-700 text-center"}>
                        মনে রাখবেন: মুদ্রা বিনিময় হারের তারতম্যের কারণে টিউশন ফি পরিবর্তিত হতে পারে।
                    </p>
                </div>
            </div>
        )
    },
    {
        value: "living-costs",
        title: "যুক্তরাষ্ট্রে জীবনযাত্রার খরচ",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে জীবনযাত্রার খরচ</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রের শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলোর কারণে বিপুল সংখ্যক বাংলাদেশি শিক্ষার্থী সেখানে
                        পড়াশোনার প্রতি আগ্রহী। যুক্তরাষ্ট্রের দূতাবাসের তথ্যানুসারে বর্তমানে ২,৬০,০০০-এর বেশি বাংলাদেশি
                        শিক্ষার্থী সেখানে অধ্যয়নরত।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        তবে, বসবাসসংক্রান্ত খরচ অনেক সময় শিক্ষার্থীদের জন্য একটি চ্যালেঞ্জ হয়ে দাঁড়ায়। তাই
                        শিক্ষার্থী হিসেবে আপনার আর্থিক ব্যবস্থাপনা দক্ষতা অত্যন্ত গুরুত্বপূর্ণ।
                    </p>
                    <p className={"text-lg sm:text-xl font-medium"}>
                        বাংলাদেশি শিক্ষার্থীদের জন্য যুক্তরাষ্ট্রে মাসিক আনুমানিক জীবনযাত্রার খরচ (ভাড়ার বাইরে) $১,১০০
                        থেকে $১,২০০ এর মধ্যে হতে পারে।
                    </p>
                </div>
                <CustomDataTable columns={livingCostsColumns} data={livingCostsData}
                                 className="max-w-2xl mx-auto my-10"/>
                <div className={"bg-yellow-50 p-4 rounded-lg my-8"}>
                    <p className={"text-sm text-yellow-700 text-center"}>
                        মনে রাখবেন: উল্লেখিত খরচগুলো আনুমানিক এবং মুদ্রা বিনিময় হারের তারতম্যের কারণে পরিবর্তিত হতে
                        পারে।
                    </p>
                </div>
            </div>
        )
    },
    {
        value: "student-visa",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার জন্য শিক্ষার্থী ভিসার শর্তাবলী",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে উচ্চশিক্ষার জন্য শিক্ষার্থী ভিসার
                    শর্তাবলী</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে শিক্ষার্থীদের জন্য বয়স এবং শিক্ষার স্তরের উপর ভিত্তি করে তিন ধরনের স্টুডেন্ট ভিসা
                        প্রদান করা হয়। F-1 ভিসা স্বীকৃত কলেজ, বিশ্ববিদ্যালয় বা ইংরেজি ভাষা প্রতিষ্ঠানে পড়াশোনার জন্য
                        প্রদান করা হয়।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        এই তিনটির মধ্যে, F-1 ভিসা সবচেয়ে জনপ্রিয়, যা শিক্ষার্থীদের যুক্তরাষ্ট্রের শীর্ষস্থানীয়
                        বিশ্ববিদ্যালয়ে পড়াশোনার সুযোগ দেয়।
                    </p>
                </div>
                <div className={"my-8"}>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
                        <div className={"bg-blue-50 p-6 rounded-lg"}>
                            <h4 className={"text-xl font-semibold mb-4 text-blue-800"}>যোগ্যতার শর্তাবলী</h4>
                            <ul className={"space-y-3 text-blue-700"}>
                                <li>• SEVP অনুমোদিত স্কুলে ভর্তি</li>
                                <li>• পূর্ণকালীন ভর্তি</li>
                                <li>• ইংরেজি ভাষার দক্ষতা</li>
                                <li>• আর্থিক সক্ষমতার প্রমাণ</li>
                            </ul>
                        </div>
                        <div className={"bg-green-50 p-6 rounded-lg"}>
                            <h4 className={"text-xl font-semibold mb-4 text-green-800"}>প্রয়োজনীয় ডকুমেন্টস</h4>
                            <ul className={"space-y-3 text-green-700"}>
                                <li>• বৈধ পাসপোর্ট</li>
                                <li>• ফর্ম I-20</li>
                                <li>• SEVIS ফি পেমেন্ট রসিদ</li>
                                <li>• DS-160 কনফার্মেশন পেজ</li>
                                <li>• আর্থিক সক্ষমতার প্রমাণ</li>
                                <li>• একাডেমিক ডকুমেন্টস</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        value: "scholarships",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার জন্য শীর্ষ স্কলারশিপের তালিকা",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে উচ্চশিক্ষার জন্য শীর্ষ স্কলারশিপের তালিকা</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        আপনি যদি যুক্তরাষ্ট্রের কোনো বিশ্ববিদ্যালয়ে উচ্চশিক্ষার জন্য যাচ্ছেন, তাহলে জানা জরুরি যে টিউশন
                        ফি বিভিন্ন কারণে পরিবর্তিত হতে পারে। যুক্তরাষ্ট্রে উচ্চশিক্ষার গড় টিউশন ফি বছরে $৮,০০০ থেকে
                        $৫৫,০০০ এর মধ্যে হয়।
                    </p>
                    <p className={"text-lg sm:text-xl"}>
                        এই ক্ষেত্রে স্কলারশিপগুলো আপনার জন্য সাহায্যের হাত বাড়িয়ে দেয়। অনেক বিশ্ববিদ্যালয়
                        শীর্ষস্থানীয় একাডেমিক বা অতিরিক্ত কার্যক্রমে সাফল্যের জন্য মেধাভিত্তিক স্কলারশিপ প্রদান করে।
                    </p>
                    <p className={"text-lg sm:text-xl font-medium"}>
                        নিচে বাংলাদেশি শিক্ষার্থীদের জন্য যুক্তরাষ্ট্রে উচ্চশিক্ষার আর্থিক চাপ কমানোর জন্য কিছু শীর্ষ
                        স্কলারশিপের তালিকা দেয়া হলো:
                    </p>
                </div>
                <CustomDataTable columns={scholarshipsColumns} data={scholarshipsData}
                                 className="max-w-3xl mx-auto my-10"/>
                <div className={"bg-yellow-50 p-4 rounded-lg my-8"}>
                    <p className={"text-sm text-yellow-700 text-center"}>
                        মনে রাখবেন: উল্লেখিত খরচগুলো আনুমানিক এবং মুদ্রা বিনিময় হারের পরিবর্তনের কারণে পরিবর্তিত হতে
                        পারে।
                    </p>
                </div>
            </div>
        )
    },
    {
        value: "work-opportunities",
        title: "যুক্তরাষ্ট্রে কাজের সুযোগ ও পরিবেশ",
        content: (
            <div className={""}>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে কাজের সুযোগ ও পরিবেশ</p>
                <div className={"flex flex-col gap-4 lg:max-w-3xl xl:w-full"}>
                    <p className={"text-lg sm:text-xl"}>
                        যুক্তরাষ্ট্রে উচ্চশিক্ষা গ্রহণ করলে বিশেষ করে শীর্ষস্থানীয় বিশ্ববিদ্যালয় থেকে গ্র্যাজুয়েট হলে
                        ক্যারিয়ারের চমৎকার সুযোগ অপেক্ষা করে। স্নাতক হওয়ার ছয় মাসের মধ্যে প্রায় ৯২% বা তার বেশি
                        শিক্ষার্থী চাকরিতে যুক্ত হয়।
                    </p>
                    <p className={"text-lg sm:text-xl font-medium"}>
                        যুক্তরাষ্ট্রে একজন গ্র্যাজুয়েটের গড় বা বার্ষিক আয় সাধারণত $৬০,০০০ থেকে $৬৫,০০০ এর মধ্যে হয়।
                    </p>
                </div>
                <div className={"my-8 lg:w-5/6 xl:w-full"}>
                    <h4 className={"text-xl font-semibold mb-6"}>দক্ষ পেশাজীবীদের চাহিদা বেশি এমন খাতসমূহ:</h4>
                    <div className={"grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6"}>
                        <div className={"bg-blue-50 p-6 rounded-lg "}>
                            <h5 className={"font-semibold mb-3 text-blue-800"}>প্রযুক্তি</h5>
                            <p className={"text-blue-700 text-sm"}>সফটওয়্যার ডেভেলপমেন্ট, সাইবারসিকিউরিটি, ডেটা
                                সায়েন্স ও কৃত্রিম বুদ্ধিমত্তার মতো ক্ষেত্রে বিশেষজ্ঞদের চাহিদা ব্যাপক।</p>
                        </div>
                        <div className={"bg-green-50 p-6 rounded-lg"}>
                            <h5 className={"font-semibold mb-3 text-green-800"}>স্বাস্থ্যসেবা</h5>
                            <p className={"text-green-700 text-sm"}>বার্ধক্যজনিত জনসংখ্যা বৃদ্ধির কারণে চিকিৎসক ও
                                নার্সদের মতো দক্ষ পেশাজীবীদের প্রয়োজন বাড়ছে।</p>
                        </div>
                        <div className={"bg-purple-50 p-6 rounded-lg "}>
                            <h5 className={"font-semibold mb-3 text-purple-800"}>ইঞ্জিনিয়ারিং</h5>
                            <p className={"text-purple-700 text-sm"}>সিভিল, ইলেকট্রিক্যাল, মেকানিক্যাল এবং অ্যারোস্পেস
                                ইঞ্জিনিয়ারদের বিভিন্ন শিল্পে উচ্চ চাহিদা রয়েছে।</p>
                        </div>
                        <div className={"bg-orange-50 p-6 rounded-lg"}>
                            <h5 className={"font-semibold mb-3 text-orange-800 "}>ব্যবসা</h5>
                            <p className={"text-orange-700 text-sm"}>ফিন্যান্স, হিসাবরক্ষণ, মার্কেটিং এবং আন্তর্জাতিক
                                বাণিজ্যের জন্য দক্ষ পেশাজীবীদের চাহিদা রাখে।</p>
                        </div>
                    </div>
                </div>
                <CustomDataTable columns={workOpportunitiesColumns} data={workOpportunitiesData}
                                 className="lg:w-4/5 lg:flex xl:mx-auto my-10"/>

                <div className={"bg-gray-50 p-6 rounded-lg my-8"}>
                    <h4 className={"text-xl font-semibold mb-4 "}>যুক্তরাষ্ট্রের শীর্ষ নিয়োগকর্তা</h4>
                    <div className={"lg:w-5/6 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-2 xl:grid-cols-4 gap-4"}>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>মাইক্রোসফট</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>অ্যামাজন</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>গুগল</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>অ্যাপল</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>মেটা</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>ইন্টেল</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>অ্যাডোবি</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>টেক্সাস ইন্সট্রুমেন্টস</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>উবার</div>
                        <div className={"text-center p-3 bg-white rounded-lg shadow-sm"}>জেপি মর্গান চেজ</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        value: "post-graduation-work",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার পর কাজ ও স্থায়ী নাগরিকত্ব",
        content: (
            <div>
                <p className={"text-3xl font-semibold mb-8"}>যুক্তরাষ্ট্রে উচ্চশিক্ষার পর কাজ ও স্থায়ী নাগরিকত্ব</p>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-lg sm:text-xl"}>
                        যদি আপনি আপনার পড়াশোনার পর যুক্তরাষ্ট্রে থাকার কথা ভাবেন, তাহলে আপনার জানা উচিত কয়েকটি
                        গুরুত্বপূর্ণ পথের কথা: পোস্ট স্টাডি ওয়ার্ক (PSW) ভিসা এবং পার্মানেন্ট রেসিডেন্সি (PR)।
                    </p>
                </div>
                <div className={"my-8"}>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
                        <div className={"bg-blue-50 p-6 rounded-lg"}>
                            <h4 className={"text-xl font-semibold mb-4 text-blue-800"}>পোস্ট স্টাডি ওয়ার্ক (PSW)
                                ভিসা</h4>
                            <div className={"space-y-4 text-blue-700"}>
                                <p>
                                    <strong>Optional Practical Training (OPT):</strong> যুক্তরাষ্ট্রে ডিগ্রি সম্পন্ন
                                    করার পর, আপনি OPT ভিসার জন্য আবেদন করতে পারেন। এটি একটি অস্থায়ী ওয়ার্ক পারমিট, যা
                                    F-1 ভিসাধারী আন্তর্জাতিক শিক্ষার্থীদের নিজ নিজ বিষয়ের সাথে সম্পর্কিত কোনো চাকরিতে
                                    যুক্তরাষ্ট্রে কাজ করার অনুমতি দেয়।
                                </p>
                                <p>
                                    <strong>Curricular Practical Training (CPT):</strong> এটি শিক্ষার্থীদের প্রোগ্রামে
                                    ভর্তি থাকা অবস্থায়ই ক্যাম্পাসের বাইরে ইন্টার্নশিপ বা কো-অপ পজিশনের মতো কাজ করতে
                                    দেয়।
                                </p>
                            </div>
                        </div>
                        <div className={"bg-green-50 p-6 rounded-lg"}>
                            <h4 className={"text-xl font-semibold mb-4 text-green-800"}>পার্মানেন্ট রেসিডেন্সি (PR)</h4>
                            <div className={"space-y-4 text-green-700"}>
                                <p>
                                    যুক্তরাষ্ট্রে স্থায়ীভাবে বসবাস করতে চাইলে আপনাকে গ্রিন কার্ড (Green Card) পেতে হবে।
                                    এটি পাওয়ার জন্য বিভিন্ন পথ রয়েছে:
                                </p>
                                <ul className={"space-y-2"}>
                                    <li>• চাকরিভিত্তিক গ্রিন কার্ড</li>
                                    <li>• পরিবারের মাধ্যমে স্পনসরশিপ</li>
                                    <li>• ডাইভার্সিটি ভিসা লটারি (DV লটারি)</li>
                                </ul>
                                <p className={"text-sm"}>
                                    প্রতিটি পথের নিজস্ব কিছু যোগ্যতা ও শর্ত আছে, তাই আগেই পরিকল্পনা করা এবং একজন
                                    ইমিগ্রেশন বিশেষজ্ঞের পরামর্শ নেওয়া প্রক্রিয়াকে অনেক সহজ করতে পারে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
]
