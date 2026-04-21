// import {useState} from 'react';
// import {ArrowLeft, ArrowRight, Search,} from 'lucide-react';
// import {Button} from '@/components/ui/button';
// import {Input} from '@/components/ui/input';
//
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
// import SearchStats from "@/components/usa-masters/SearchStats.tsx";
// import UniversityCard from "@/components/usa-masters/UniversityCard.tsx";
// import FilterSidebar from "@/components/usa-masters/FilterSidebar.tsx";
// import ExploreCoursesSection from "@/components/usa-masters/ExploreCoursesSection.tsx";
// import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
// import StudyOptionsAccordion from "@/components/usa-masters/StudyOptionsAccordion.tsx";
// import {ArticleCard} from "@/components/digest/ArticleCard.tsx";
// import type {University} from "@/data/universities.ts";
//
// const universities: University[] = [
//     {
//         id: "1",
//         name: "ম্যাসাচুসেটস ইনস্টিটিউট অব টেকনোলজি",
//         englishName: "Massachusetts Institute of Technology",
//         location: "কেমব্রিজ – ম্যাসাচুসেটস",
//         logo: "https://www.mit.edu/favicon.ico",
//         qsRank: 1,
//         tuitionFee: "-/-",
//         ieltsScore: 7.0
//     },
//     {
//         id: "2",
//         name: "ইউনিভার্সিটি অব নেভাডা, লাস ভেগাস",
//         englishName: "University of Nevada, Las Vegas",
//         location: "লাস ভেগাস – নেভাডা",
//         logo: "https://www.unlv.edu/sites/default/files/favicon.ico",
//         qsRank: 2,
//         tuitionFee: "২২.৪৬ লাখ টাকা/বছর",
//         ieltsScore: 6.5
//     },
//     {
//         id: "3",
//         name: "ইউসিএলএ অ্যান্ডারসন স্কুল অব ম্যানেজমেন্ট",
//         englishName: "UCLA Anderson School of Management",
//         location: "লস অ্যাঞ্জেলেস",
//         logo: "https://www.ucla.edu/favicon.ico",
//         qsRank: 2,
//         tuitionFee: "৫৪.৮৯ লাখ টাকা/বছর",
//         ieltsScore: 7.0
//     },
//     {
//         id: "4",
//         name: "হার্ভার্ড বিশ্ববিদ্যালয়",
//         englishName: "Harvard University",
//         location: "কেমব্রিজ – ম্যাসাচুসেটস",
//         logo: "https://www.harvard.edu/favicon.ico",
//         qsRank: 4,
//         tuitionFee: "-/-",
//         ieltsScore: 7.5
//     },
//     {
//         id: "5",
//         name: "স্ট্যানফোর্ড বিশ্ববিদ্যালয়",
//         englishName: "Stanford University",
//         location: "স্ট্যানফোর্ড",
//         logo: "https://www.stanford.edu/favicon.ico",
//         qsRank: 6,
//         tuitionFee: "৩০ লাখ টাকা/বছর",
//         ieltsScore: 7.0
//     },
//     {
//         id: "6",
//         name: "ক্যালিফোর্নিয়া ইনস্টিটিউট অব টেকনোলজি",
//         englishName: "California Institute of Technology",
//         location: "পাসাডেনা",
//         logo: "https://www.caltech.edu/favicon.ico",
//         qsRank: 6,
//         tuitionFee: "৪৪ লাখ টাকা/বছর",
//         ieltsScore: 6.5
//     },
//     {
//         id: "7",
//         name: "দ্য ইউনিভার্সিটি অব শিকাগো",
//         englishName: "University of Chicago",
//         location: "শিকাগো",
//         logo: "https://www.uchicago.edu/favicon.ico",
//         qsRank: 10,
//         tuitionFee: "-/-",
//         ieltsScore: 7.0
//     },
//     {
//         id: "8",
//         name: "ইউনিভার্সিটি অব পেনসিলভানিয়া",
//         englishName: "University of Pennsylvania",
//         location: "ফিলাডেলফিয়া",
//         logo: "https://www.upenn.edu/favicon.ico",
//         qsRank: 13,
//         tuitionFee: "-/-",
//         ieltsScore: 6.5
//     },
//     {
//         id: "9",
//         name: "ইস্ট স্ট্রাউডসবার্গ ইউনিভার্সিটি অব পেনসিলভানিয়া",
//         englishName: "East Stroudsburg University of Pennsylvania",
//         location: "ইস্ট স্ট্রাউডসবার্গ",
//         logo: "https://www.esu.edu/favicon.ico",
//         qsRank: 13,
//         tuitionFee: "-/-",
//         ieltsScore: 7.0
//     },
//     {
//         id: "10",
//         name: "প্রিন্সটন বিশ্ববিদ্যালয়",
//         englishName: "Princeton University",
//         location: "প্রিন্সটন",
//         logo: "https://www.princeton.edu/favicon.ico",
//         qsRank: 16,
//         tuitionFee: "-/-",
//         ieltsScore: 8.0
//     },
//     {
//         id: "11",
//         name: "ক্যালিফোর্নিয়া ইউনিভার্সিটি অব পেনসিলভানিয়া",
//         englishName: "California University of Pennsylvania",
//         location: "ক্যালিফোর্নিয়া",
//         logo: "https://www.calu.edu/favicon.ico",
//         qsRank: 16,
//         tuitionFee: "-/-",
//         ieltsScore: 6.0
//     },
//     {
//         id: "12",
//         name: "ইয়েল বিশ্ববিদ্যালয়",
//         englishName: "Yale University",
//         location: "নিউ হ্যাভেন",
//         logo: "https://www.yale.edu/favicon.ico",
//         qsRank: 18,
//         tuitionFee: "-/-",
//         ieltsScore: 7.0
//     },
//     {
//         id: "13",
//         name: "কর্নেল বিশ্ববিদ্যালয়",
//         englishName: "Cornell University",
//         location: "ইথাকা",
//         logo: "https://www.cornell.edu/favicon.ico",
//         qsRank: 20,
//         tuitionFee: "৫৮ লাখ টাকা/বছর",
//         ieltsScore: 6.5
//     },
//     {
//         id: "14",
//         name: "কলম্বিয়া বিশ্ববিদ্যালয়",
//         englishName: "Columbia University",
//         location: "নিউ ইয়র্ক সিটি",
//         logo: "https://www.columbia.edu/favicon.ico",
//         qsRank: 22,
//         tuitionFee: "-/-",
//         ieltsScore: 6.0
//     },
//     {
//         id: "15",
//         name: "ক্যালিফোর্নিয়া কলেজ অব দ্য আর্টস",
//         englishName: "California College of the Arts",
//         location: "কেমব্রিজ – ম্যাসাচুসেটস",
//         logo: "https://www.cca.edu/favicon.ico",
//         qsRank: 22,
//         tuitionFee: "-/-",
//         ieltsScore: 7.5
//     },
//     {
//         id: "16",
//         name: "ইউনিভার্সিটি অব মিশিগান",
//         englishName: "University of Michigan",
//         location: "অ্যান আরবার",
//         logo: "https://www.umich.edu/favicon.ico",
//         qsRank: 25,
//         tuitionFee: "-/-",
//         ieltsScore: 6.5
//     },
//     {
//         id: "17",
//         name: "ইউনিভার্সিটি অব ক্যালিফোর্নিয়া – বার্কলে ক্যাম্পাস",
//         englishName: "University of California, Berkeley",
//         location: "বার্কলে",
//         logo: "https://www.berkeley.edu/favicon.ico",
//         qsRank: 27,
//         tuitionFee: "-/-",
//         ieltsScore: 7.0
//     },
//     {
//         id: "18",
//         name: "বার্কলে কলেজ",
//         englishName: "Berkeley College",
//         location: "নিউ ইয়র্ক সিটি",
//         logo: "https://berkeleycollege.edu/favicon.ico",
//         qsRank: 27,
//         tuitionFee: "১২ লাখ টাকা/বছর",
//         ieltsScore: 6.5
//     },
//     {
//         id: "19",
//         name: "জনস হপকিন্স বিশ্ববিদ্যালয়",
//         englishName: "Johns Hopkins University",
//         location: "বাল্টিমোর",
//         logo: "https://www.jhu.edu/favicon.ico",
//         qsRank: 32,
//         tuitionFee: "৫৬ লাখ টাকা/বছর",
//         ieltsScore: 7.0
//     },
//     {
//         id: "20",
//         name: "নর্থওয়েস্টার্ন বিশ্ববিদ্যালয়",
//         englishName: "Northwestern University",
//         location: "এভানস্টন",
//         logo: "https://www.northwestern.edu/favicon.ico",
//         qsRank: 32,
//         tuitionFee: "-/-",
//         ieltsScore: 7.0
//     }
// ];
//
// const faqs = [
//     {
//         id: "faq1",
//         question: "আমি কীভাবে যুক্তরাষ্ট্রে মাস্টার্স করার জন্য সেরা কোর্স খুঁজে পাবো?",
//         answer: (
//             <>
//                 যুক্তরাষ্ট্রে মাস্টার্স কোর্স খুঁজতে প্রথমে আপনার আগ্রহের বিষয় নির্ধারণ করুন। তারপর QS র‍্যাঙ্কিং, US News র‍্যাঙ্কিং দেখুন। বিশ্ববিদ্যালয়ের ওয়েবসাইটে কারিকুলাম, গবেষণার সুযোগ, এবং ফ্যাকাল্টি প্রোফাইল পরীক্ষা করুন। আপনার একাডেমিক ব্যাকগ্রাউন্ড এবং ক্যারিয়ার লক্ষ্যের সাথে মিলিয়ে কোর্স নির্বাচন করুন।
//             </>
//         ),
//     },
//     {
//         id: "faq2",
//         question: "যুক্তরাষ্ট্রে মাস্টার্স করার জন্য সেরা বিশ্ববিদ্যালয়গুলো কী কী?",
//         answer: (
//             <>
//                 মাস্টার্সের জন্য সেরা বিশ্ববিদ্যালয়গুলো হলো: MIT (ইঞ্জিনিয়ারিং ও টেকনোলজি), হার্ভার্ড (বিজনেস ও মেডিসিন), স্ট্যানফোর্ড (কম্পিউটার সায়েন্স), ইয়েল (আইন), প্রিন্সটন (ফিন্যান্স), কলম্বিয়া (জার্নালিজম), এবং UC Berkeley (ইঞ্জিনিয়ারিং)। বিষয়ভেদে র‍্যাঙ্কিং ভিন্ন হয়, তাই আপনার নির্দিষ্ট ক্ষেত্রের জন্য বিশেষায়িত র‍্যাঙ্কিং দেখুন।
//             </>
//         ),
//     },
//     {
//         id: "faq3",
//         question: "যুক্তরাষ্ট্রে দুই বছরের মাস্টার্স প্রোগ্রামের মোট খরচ কত?",
//         answer: (
//             <>
//                 যুক্তরাষ্ট্রে দুই বছরের মাস্টার্স প্রোগ্রামের মোট খরচ ৫০-১২০ লক্ষ টাকা। এতে অন্তর্ভুক্ত: টিউশন ফি (৩০-৮০ লক্ষ টাকা), থাকা-খাওয়া (১৫-২৫ লক্ষ টাকা), বই ও অন্যান্য (৫-১৫ লক্ষ টাকা)। প্রাইভেট বিশ্ববিদ্যালয়ে খরচ বেশি, পাবলিক বিশ্ববিদ্যালয়ে তুলনামূলক কম। স্কলারশিপ ও এসিস্ট্যান্টশিপের মাধ্যমে খরচ কমানো সম্ভব।
//             </>
//         ),
//     },
//     {
//         id: "faq4",
//         question: "যুক্তরাষ্ট্রে ডেটা সায়েন্সে মাস্টার্স করার খরচ কত?",
//         answer: (
//             <>
//                 ডেটা সায়েন্সে মাস্টার্স করার খরচ বছরে ৪০-৭০ লক্ষ টাকা। MIT, Stanford-এ ৬০-৭০ লক্ষ টাকা, যেখানে স্টেট ইউনিভার্সিটিতে ৩৫-৫০ লক্ষ টাকা। জীবনযাত্রার খরচ শহরভেদে আলাদা - নিউইয়র্ক, সান ফ্রান্সিসকোতে বেশি, টেক্সাস, ফ্লোরিডায় কম। গড়ে মোট খরচ দুই বছরে ৮০-১০০ লক্ষ টাকা।
//             </>
//         ),
//     },
//     {
//         id: "faq5",
//         question: "যুক্তরাষ্ট্রে কি এক বছরের মাস্টার্স প্রোগ্রাম রয়েছে?",
//         answer: (
//             <>
//                 হ্যাঁ, যুক্তরাষ্ট্রে এক বছরের মাস্টার্স প্রোগ্রাম আছে, তবে সীমিত। সাধারণত MBA, ডেটা সায়েন্স, ফিন্যান্স, এবং কিছু ইঞ্জিনিয়ারিং প্রোগ্রামে পাওয়া যায়। Northwestern Kellogg, Duke Fuqua-তে One-Year MBA আছে। তবে বেশিরভাগ মাস্টার্স প্রোগ্রাম ১.৫-২ বছরের। এক বছরের প্রোগ্রাম থাকলেও ভর্তির যোগ্যতা ও খরচ বেশি হয়।
//             </>
//         ),
//     }
// ];
// const educationArticlesData = [
//     {
//         id: 5,
//         title: "IELTS/TOEFL পরীক্ষার জন্য কীভাবে প্রস্তুতি নেবেন?",
//         date: "১২ জুলাই, ২০২৫",
//         readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
//         image: "/images/article1.jpg",
//         category: "ভাষার দক্ষতা",
//         excerpt: "IELTS ও TOEFL পরীক্ষায় ভাল স্কোরের জন্য কার্যকর প্রস্তুতি কৌশল"
//     },
//     {
//         id: 6,
//         title: "শেষ মুহূর্তের প্রস্তুতি: পরীক্ষার আগের রাতের করণীয়",
//         date: "১২ জুলাই, ২০২৫",
//         readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
//         image: "/images/article2.jpg",
//         category: "পরীক্ষা প্রস্তুতি",
//         excerpt: "পরীক্ষার আগের রাতে কী করবেন এবং কী করবেন না - বিশেষজ্ঞ পরামর্শ"
//     },
//     {
//         id: 7,
//         title: "পড়াশোনায় মনোযোগ ধরে রাখার ৫টি বিজ্ঞানভিত্তিক উপায়",
//         date: "১২ জুলাই, ২০২৫",
//         readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
//         image: "/images/article4.jpg",
//         category: "অধ্যয়ন কৌশল",
//         excerpt: "বিজ্ঞানভিত্তিক পদ্ধতিতে পড়াশোনায় মনোযোগ বৃদ্ধির কার্যকর উপায়"
//     }
// ];
//
//
// const UniversitySearchPage = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedFilters, setSelectedFilters] = useState({
//         degree: [],
//         location: [],
//         scholarships: false,
//         rating: null
//     });
//
//
//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header */}
//             <div className="bg-white shadow-sm border-b">
//                 <div className="max-w-7xl mx-auto px-4 py-4">
//                     <div className="flex items-center justify-between">
//                         <div>
//                             <h1 className="text-2xl font-semibold text-purple-600">
//                                 যুক্তরাষ্ট্র মাস্টার্স: কলেজ, বিশ্ববিদ্যালয়, র‌্যাঙ্কিং এবং কি (২০২৫)
//                             </h1>
//                             <p className="text-sm text-gray-600 mt-1">
//                                 মিশনের পিছনপথে লিংক বিশ্ববিদ্যালয়ের যুক্তরাষ্ট্র অবস্থিত, এবং এসব প্রতিষ্ঠান...
//                             </p>
//                         </div>
//                         <Button variant="outline" className="text-purple-600 border-purple-600">
//                             আরো পড়ুন
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="container mx-auto px-4 py-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//                     {/* Sidebar Filters */}
//                     <div className="lg:col-span-1">
//                         <FilterSidebar
//                             filters={selectedFilters}
//                             onFiltersChange={setSelectedFilters}
//                         />
//                     </div>
//
//                     {/* Main Content */}
//                     <div className="lg:col-span-3">
//                         {/* Search Bar */}
//                         <div className="mb-6">
//                             <div className="flex gap-2">
//                                 <div className="relative flex-1">
//                                     <Search
//                                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"/>
//                                     <Input
//                                         type="text"
//                                         placeholder="বাছাই করুন: বিশ্ববিদ্যালয়, ডিগ্রি কোর্স নিয়ে"
//                                         value={searchQuery}
//                                         onChange={(e) => setSearchQuery(e.target.value)}
//                                         className="pl-10"
//                                     />
//                                 </div>
//                                 <Select>
//                                     <SelectTrigger className="w-48">
//                                         <SelectValue placeholder="সব নূতন ফেলুন"/>
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectItem value="newest">সব নূতন ফেলুন</SelectItem>
//                                         <SelectItem value="oldest">পুরাতন</SelectItem>
//                                         <SelectItem value="popular">জনপ্রিয়</SelectItem>
//                                     </SelectContent>
//                                 </Select>
//                                 <Select>
//                                     <SelectTrigger className="w-48">
//                                         <SelectValue placeholder="৭৮টি ফলাফল"/>
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectItem value="10">১০টি ফলাফল</SelectItem>
//                                         <SelectItem value="25">২৫টি ফলাফল</SelectItem>
//                                         <SelectItem value="50">৫০টি ফলাফল</SelectItem>
//                                     </SelectContent>
//                                 </Select>
//                             </div>
//                         </div>
//
//                         {/* Search Stats */}
//                         <SearchStats totalResults={universities.length}/>
//
//                         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//                             {universities.map((university) => (
//                                 <UniversityCard
//                                     key={university.id}
//                                     university={university}
//                                 />
//                             ))}
//                         </div>
//                         <div className={"flex items-center justify-center gap-10 my-10"}>
//                             <Button size={"xl"} variant={"outline"}>
//                                 <ArrowLeft/> পূর্ববর্তী
//                             </Button>
//                             <p className={"text-lg font-semibold"}>১</p>
//                             <Button size={"xl"} variant={"outline"}>
//                                 <ArrowRight/>
//                                 পরবর্তী
//                             </Button>
//                         </div>
//                         <ExploreCoursesSection/>
//                         <div className="grid  grid-cols-1 md:grid-cols-3  gap-4 sm:gap-6 lg:gap-8">
//                             {educationArticlesData.map((article) => (
//                                 <div key={article.id} className="flex">
//                                     <ArticleCard article={article}/>
//                                 </div>
//                             ))}
//                         </div>
//
//
//                     </div>
//                 </div>
//
//             </div>
//
//             <FAQAccordion title={"শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্ন সমূহ-"} data={faqs} className={"md:p-8 rounded-xl"}/>
//             <StudyOptionsAccordion/>
//         </div>
//     );
// };
//
// export default UniversitySearchPage;
