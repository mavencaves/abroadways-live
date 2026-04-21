import {CustomDataTable} from "@/components/CustomDataTable"
import {Button} from "@/components/ui/button.tsx";
import {ArrowDown} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";

const comparisonColumns = [
    {key: "category", header: "পার্থক্য", width: "20%"},
    {key: "masters", header: "মাস্টার্স/আন্ডারগ্রাজুয়েট SOP", width: "40%"},
    {key: "phd", header: "পিএইচডি SOP", width: "40%"},
];

const comparisonData = [
    {
        category: "মূল ফোকাস",
        masters: "আপনার একাডেমিক পটভূমি, অর্জিত দক্ষতা, এবং কোর্সের জন্য আপনার প্রেরণা।",
        phd: "আপনার গবেষণা অভিজ্ঞতা, নির্দিষ্ট গবেষণার আগ্রহ, এবং স্বাধীন গবেষক হিসেবে আপনার সম্ভাবনা।"
    },
    {
        category: "উত্তর প্রদত্ত প্রধান প্রশ্ন",
        masters: "আমি কেন এই কোর্সটি পড়তে চাই?",
        phd: "আমি কোন বিশেষ গবেষণা প্রশ্নগুলি অনুসন্ধান করতে চাই, এবং আমি কেন এগুলি করার জন্য যোগ্য?"
    },
    {
        category: "ভাষার ধরন",
        masters: "উদ্দীপনা-সম্পন্ন এবং শেখার প্রতি মনোনিবেশিত।",
        phd: "শিক্ষণমুখী, বিশ্লেষণাত্মক, এবং অবদানের প্রতি মনোনিবেশিত।"
    },
    {
        category: "বিষয়বস্তু",
        masters: "বিস্তৃত আগ্রহ এবং কিভাবে এই প্রোগ্রাম আপনাকে সেগুলো অন্বেষণ করতে সাহায্য করবে।",
        phd: "সংকীর্ণ, নির্দিষ্ট গবেষণার আগ্রহ যা সরাসরি ফ্যাকালটির কাজের সাথে সঙ্গতিপূর্ণ।"
    },
];

const mistakesColumns = [
    {key: "mistake", header: "ভুল", width: "30%"},
    {key: "why", header: "কেন সমস্যা", width: "35%"},
    {key: "solution", header: "সমাধান", width: "35%"},
];

const mistakesData = [
    {
        mistake: "অত্যন্ত সাধারণ বা ক্লিশে ব্যবহার করা",
        why: "আবেদনকে অনন্য করে তোলে না এবং আগ্রহ কমায়।",
        solution: "দেখান, কেবল বলবেন না। আপনার বিস্তারিত প্রকল্প বর্ণনা হলো প্রমাণ।"
    },
    {
        mistake: "শুধু অর্জন তালিকাভুক্ত করা",
        why: "বুদ্ধিবৃত্তিক অবদান এবং শেখার প্রক্রিয়া প্রদর্শন করে না।",
        solution: "আপনার বুদ্ধিবৃত্তিক অবদান এবং আপনি কী শিখেছেন তা ব্যাখ্যা করুন।"
    },
    {
        mistake: "SOP কাস্টমাইজ না করা",
        why: "একই SOP প্রতিটি বিশ্ববিদ্যালয়ে পাঠানো বড় সতর্ক সংকেত।",
        solution: "প্রতিটি SOP অবশ্যই নির্দিষ্ট বিভাগ এবং অধ্যাপক অনুযায়ী তৈরি করতে হবে।"
    },
    {
        mistake: "খারাপ ব্যাকরণ এবং ফরম্যাটিং",
        why: "একটি আনুষ্ঠানিক একাডেমিক ডকুমেন্টে ত্রুটি গ্রহণযোগ্য নয়।",
        solution: "একাধিকবার প্রুফরিড করুন। Grammarly-এর মতো টুল ব্যবহার করুন।"
    },
];

export default function PhDSOPGuideSection() {
    return (
        <section className="mx-auto mt-10 max-w-6xl p-4 md:p-8 rounded-xl">

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                বাংলাদেশের অসংখ্য আগ্রহী গবেষকের জন্য একটি মর্যাদাপূর্ণ পিএইচডি প্রোগ্রামে সুযোগ পাওয়া হলো বহু বছরের
                একাডেমিক নিষ্ঠার পরিণতি। আপনার একাডেমিক ট্রান্সক্রিপ্ট ও ভর্তি পরীক্ষার নম্বর নিঃসন্দেহে গুরুত্বপূর্ণ,
                তবে যে নথিটি আপনার আবেদনপত্রে সত্যিকারের প্রাণ সঞ্চার করে তা হলো স্টেটমেন্ট অব পারপাস (SOP)। বিশেষ করে
                ২০২৫ সালের পিএইচডি ভর্তি প্রক্রিয়ায়, যখন ঢাকা বিশ্ববিদ্যালয় (DU), বুয়েট (BUET) ও বিভিন্ন কেন্দ্রীয়
                বিশ্ববিদ্যালয়ে আসন পাওয়ার প্রতিযোগিতা আগের যেকোনো সময়ের চেয়ে কঠিন, তখন নিখুঁতভাবে রচিত একটি SOP শুধু
                একটি আনুষ্ঠানিকতা নয়; এটি আপনার সবচেয়ে শক্তিশালী কৌশলগত হাতিয়ার।
            </p>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                এই গাইডে আমরা ধাপে ধাপে আলোচনা করব কীভাবে একটি আকর্ষণীয় ও গবেষণা-কেন্দ্রিক SOP লিখবেন, যা বাংলাদেশের
                এবং বিদেশের ভর্তি কমিটির কাছে আপনার আবেদনকে বিশেষভাবে তুলে ধরবে।
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#5201FF'}}>
                পিএইচডি-এর জন্য SOP কী? বাংলাদেশি শিক্ষার্থীদের জন্য গুরুত্ব ব্যাখ্যা
            </h2>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                পিএইচডি-র জন্য একটি স্টেটমেন্ট অব পারপাস (SOP) হলো একটি আনুষ্ঠানিক ও বিশদ প্রবন্ধ, যেখানে আপনার একাডেমিক
                যাত্রা, গবেষণা অভিজ্ঞতা, নির্দিষ্ট গবেষণা আগ্রহ এবং ভবিষ্যৎ ক্যারিয়ার লক্ষ্যসমূহ তুলে ধরা হয়। এটি
                আপনার জন্য একটি সুযোগ, যেখানে আপনি সরাসরি ভর্তি কমিটিকে বোঝাতে পারেন যে আপনি কেবল একজন শিক্ষার্থী নন,
                বরং একজন সম্ভাবনাময় ভবিষ্যৎ গবেষক।
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{color: '#5201FF'}}>
                কিভাবে একটি পিএইচডি'র জন্য SOP আপনার গবেষণার প্রস্তুতিকে শুধুমাত্র গ্রেডের বাইরে তুলে ধরে
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                বাংলাদেশের প্রেক্ষাপটে, যেখানে হাজারো আবেদনকারীর একাডেমিক ফলাফল প্রায় একই রকম হতে পারে, সেখানে SOP হলো
                মূল পার্থক্য সৃষ্টিকারী উপাদান। এটি শুধুমাত্র আপনার মার্কশিটের বাইরে গিয়ে গুরুত্বপূর্ণ প্রশ্নগুলোর
                উত্তর দেয়:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base mb-6">
                <li>আপনার কি প্রকৃত বৌদ্ধিক কৌতূহল আছে?</li>
                <li>আপনি কি আপনার ক্ষেত্রে জটিল সমস্যাগুলো নিয়ে সমালোচনামূলকভাবে চিন্তা করতে পারেন?</li>
                <li>আপনার কি একটি ৩-৫ বছরের গবেষণা যাত্রার জন্য প্রয়োজনীয় ভিত্তিগত দক্ষতা এবং দৃঢ়তা আছে?</li>
                <li>আপনি কি তাদের বিভাগের গবেষণা সংস্কৃতি এবং সম্পদের সাথে ভালোভাবে মানিয়ে নিতে পারবেন?</li>
            </ul>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                আপনার SOP হলো সেই বর্ণনা যা আপনার CV-এর বিচ্ছিন্ন দিকগুলোকে একসাথে যুক্ত করে, প্রেক্ষাপট, আবেগ এবং আপনার
                ভবিষ্যৎ গবেষণা জীবনের জন্য একটি স্পষ্ট ভিশন উপস্থাপন করে।
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#5201FF'}}>
                পিএইচডি বনাম মাস্টার্সের জন্য SOP: ফোকাস, টোন ও স্ট্রাকচারের মূল পার্থক্য
            </h2>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                একটি প্রধানতম পার্থক্য হলো গবেষণা
            </p>

            <div className="overflow-x-auto my-6">
                <CustomDataTable columns={comparisonColumns} data={comparisonData}/>
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                একটি পিএইচডি SOP-এর জন্য শুধুমাত্র আপনার আগ্রহ উল্লেখ করা যথেষ্ট নয়। আপনাকে এটি প্রদর্শন করতে হবে আপনার
                গবেষণার ধারণাগুলো স্পষ্টভাবে উপস্থাপনের মাধ্যমে।
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#5201FF'}}>
                ২০২৫ সালের পিএইচডি SOP ফরম্যাট: ধাপে ধাপে কাঠামো অনুসরণের নির্দেশিকা
            </h2>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                একটি সুসংগঠিত SOP পড়তে সহজ হয় এবং এটি আপনার গল্প অনুযায়ী অ্যাডমিশন কমিটিকে যৌক্তিকভাবে পথ দেখায়।
                সর্বাধিক প্রভাবের জন্য এই প্রমাণিত ফরম্যাটটি অনুসরণ করুন।
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                ধাপ ১: গবেষণামূলক হুক দিয়ে আপনার PhD SOP শুরু করার উপায়
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                আপনার উদ্বোধনী প্যারাগ্রাফটি শক্তিশালী হতে হবে। সাধারণ ক্লিশে এড়ান, যেমন: "ছোটবেলাই আমি বিজ্ঞানের প্রতি
                আকৃষ্ট ছিলাম।" বরং একটি "গবেষণামূলক হুক" দিয়ে শুরু করুন—যা হতে পারে একটি নির্দিষ্ট সমস্যা, একটি জোরালো
                প্রশ্ন, অথবা কোনো গুরুত্বপূর্ণ গবেষণার ফলাফল যা আপনার আগ্রহ উদ্দীপিত করেছে। এটি সঙ্গে সঙ্গে একটি
                প্রাতিষ্ঠানিক এবং বৈজ্ঞানিক টোন স্থাপন করে।
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2" style={{color: '#5201FF'}}>উদাহরণ (বায়োটেকনোলজি):</h4>
                <p className="text-gray-700 italic">
                    "The intricate dance between microbial gut flora and human neurological disorders presents one of
                    modern medicine's most compelling frontiers. My master's thesis on the metabolic byproducts of
                    Lactobacillus species in neurodegenerative models revealed a tantalising, yet underexplored,
                    signalling pathway. It is this specific pathway that I am determined to investigate at the doctoral
                    level."
                </p>
            </div>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                ধাপ ২: আপনার শিক্ষাগত পটভূমি PhD SOP-তে বর্ণনা করুন
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                সংক্ষিপ্তভাবে আপনার স্নাতক ও মাস্টার্স শিক্ষা বর্ণনা করুন। শুধু ডিগ্রিগুলোর তালিকা দেবেন না। বিশেষ
                কোর্স, প্রোজেক্ট বা গবেষণাপত্রগুলোকে তুলে ধরুন, যা আপনার বর্তমান গবেষণার ভিত্তি তৈরি করেছে। যদি
                প্রাসঙ্গিক কাজের অভিজ্ঞতা থাকে, তাহলে তা সরাসরি আপনার শিক্ষাগত লক্ষ্যের সাথে সংযুক্ত করুন।
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                ধাপ ৩: আপনার গভীর গবেষণা অভিজ্ঞতা ও দক্ষতা প্রদর্শন
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                এটি আপনার SOP-এর প্রাণকেন্দ্র। আপনার সবচেয়ে গুরুত্বপূর্ণ গবেষণা প্রকল্পগুলি বিস্তারিতভাবে উল্লেখ করুন
                (যেমন আপনার মাস্টার্স থিসিস):
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base mb-4">
                <li>গবেষণার প্রশ্নটি কী ছিল?</li>
                <li>আপনার নির্দিষ্ট ভূমিকা ও অবদান কী ছিল?</li>
                <li>কোন পদ্ধতি এবং প্রযুক্তি ব্যবহার করেছেন? (যেমন PCR, MATLAB, পরিসংখ্যান বিশ্লেষণ, আর্কাইভাল গবেষণা)
                </li>
                <li>মূল ফলাফলগুলো কী ছিল?</li>
            </ul>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                সবচেয়ে গুরুত্বপূর্ণ, আপনি এই প্রক্রিয়া থেকে কী শিখলেন, এমনকি ফলাফল প্রত্যাশা অনুযায়ী না হলেও? এটি
                আপনার পরিপক্বতা ও স্থিতিশীলতা প্রদর্শন করে।
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                ধাপ ৪: মূল বিষয় – আপনার গবেষণা আগ্রহকে বিশ্ববিদ্যালয়ের গবেষণার সাথে সংযুক্ত করা
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                এই অংশটি প্রমাণ করে যে আপনি একটি সাধারণ বা জেনেরিক আবেদন পাঠাচ্ছেন না। আপনার প্রস্তাবিত গবেষণা ক্ষেত্র
                স্পষ্টভাবে উল্লেখ করুন। এরপর ব্যাখ্যা করুন কেন আপনি নির্দিষ্ট এই ডিপার্টমেন্টে আবেদন করছেন। ১–৩ জন
                প্রফেসরের নাম উল্লেখ করুন যাদের কাজ সত্যিই আপনাকে আকর্ষণ করে।
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2" style={{color: '#5201FF'}}>উদাহরণ (BUET, CSE):</h4>
                <p className="text-gray-700 italic">
                    "My research interest lies in developing robust and fair federated learning models for healthcare
                    diagnostics. I am particularly drawn to the work of Professor [Professor's Name] at BUET on
                    privacy-preserving machine learning. His recent publication on differential privacy in distributed
                    systems directly aligns with the challenges I aim to address in my doctoral research."
                </p>
            </div>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                ধাপ ৫: আপনার PhD SOP-তে সঠিক বিশ্ববিদ্যালয় উল্লেখ করা
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                শুধু অধ্যাপক বা ফ্যাকাল্টির নাম উল্লেখের চেয়ে এগিয়ে যান। নির্দিষ্ট ল্যাব, গবেষণা কেন্দ্র, বিশেষ
                যন্ত্রপাতি বা আন্তঃবিষয়ক সুযোগসমূহ উল্লেখ করুন যা বিশ্ববিদ্যালয়টিকে আপনার গবেষণার জন্য আদর্শ স্থান করে
                তোলে। উদাহরণস্বরূপ, ন্যানোসায়েন্সে উন্নত ল্যাব থাকা কোনো প্রতিষ্ঠান বা সামাজিক বিজ্ঞানগুলিতে শক্তিশালী
                কোনো বিশ্ববিদ্যালয় উল্লেখ করলে বোঝায় যে আপনি গভীরভাবে গবেষণা করেছেন।
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                ধাপ ৬: আপনার PhD SOP-তে স্পষ্ট ক্যারিয়ার লক্ষ্য লেখা
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                আপনি আপনার PhD-এর পর কী করতে চান তা স্পষ্ট করুন। আপনার লক্ষ্য যদি হয় বাংলাদেশের শীর্ষ বিশ্ববিদ্যালয়ে
                ফ্যাকাল্টি পজিশন, কোনো সরকারি সংস্থা যেমন BIDS বা BCSIR-এ গবেষণার ভূমিকা, অথবা কোনো শিল্প-প্রতিষ্ঠানের
                R&D ল্যাবে চাকরি, তবে নির্দিষ্টভাবে উল্লেখ করুন। ব্যাখ্যা করুন কীভাবে এই নির্দিষ্ট PhD প্রোগ্রামটি সেই
                লক্ষ্য অর্জনের জন্য অপরিহার্য পরবর্তী ধাপ।
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                ধাপ ৭: শক্তিশালী এবং কেন্দ্রীভূত সমাপ্তি দিয়ে আপনার PhD SOP শেষ করা
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                আপনার উপসংহার হওয়া উচিত সংক্ষিপ্ত এবং আত্মবিশ্বাসী—আপনার মূল শক্তিগুলোর সারসংক্ষেপ। আপনার গবেষণার ফোকাস
                পুনরায় উল্লেখ করুন এবং তাদের ডিপার্টমেন্টে অবদান রাখার প্রতি আপনার উৎসাহ প্রকাশ করুন। এটি একটি
                আগাম-দৃষ্টি এবং পেশাদারী নোটে শেষ করুন।
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#5201FF'}}>
                পিএইচডি SOP-এর নমুনা বিশ্লেষণসহ
            </h2>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                এখানে একটি সংক্ষিপ্ত নমুনা দেওয়া হলো একটি কাল্পনিক আবেদনকারীর জন্য, যার পরে রয়েছে বিশ্লেষণ।
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                বায়োটেকনোলজিতে পিএইচডি-এর পূর্ণ SOP নমুনা
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="space-y-4 text-gray-700">
                    <p>
                        My fascination with biotechnology is rooted not in its broad potential but in its specific
                        application to Bangladesh's agricultural challenges. Witnessing the devastation of crop yields
                        due to drought in my village spurred my academic focus towards developing climate-resilient
                        crops. My Master's thesis at the University of Dhaka involved identifying and characterizing
                        novel stress-tolerance genes in pearl millet. Using qPCR and Western blotting, I successfully
                        isolated a gene, which I tentatively named Ps-Tol1, that showed significant upregulation under
                        simulated drought conditions. This project, while successful, opened up more questions than it
                        answered regarding the gene's regulatory network.
                    </p>

                    <p>
                        It is this network that forms the core of my proposed doctoral research. I aim to elucidate the
                        signal transduction pathway of Ps-Tol1 using CRISPR-Cas9 for gene knockout studies and yeast
                        two-hybrid screening to identify interacting proteins. My long-term goal is to translate this
                        fundamental research into a viable genetic marker for breeding drought-resistant millet
                        varieties, a crop vital to Bangladesh's food security.
                    </p>

                    <p>
                        Bangladesh Agricultural Research Institute (BARI) is the only logical next step for this work. I
                        am particularly impressed by the research of Dr. [Professor's Name] on transcriptional
                        regulation in crop plants. Her expertise in functional genomics and the institute's
                        state-of-the-art sequencing and phenotyping facilities would be invaluable for my project. I am
                        confident that my hands-on experience in molecular biology techniques, combined with my
                        unwavering focus on agricultural biotechnology, makes me a strong candidate for your PhD
                        program. I am eager to contribute to the pioneering research at NIPGR and, in the long run, to
                        the resilience of Bangladeshi agriculture.
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-4" style={{color: '#5201FF'}}>
                কেন এই পিএইচডি SOP নমুনাটি কার্যকর: বিস্তারিত বিশ্লেষণ
            </h3>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                <strong>প্যারাগ্রাফ ১ (হুক):</strong> এটি ব্যক্তিগত হলেও একাডেমিক প্রেরণা দিয়ে শুরু হয় এবং
                তাত্ক্ষণিকভাবে গবেষণাকে প্রাসঙ্গিক ভারতীয় প্রেক্ষাপটে স্থাপন করে। এটি স্পষ্টভাবে মাস্টার্স প্রকল্প
                উল্লেখ করে, নির্দিষ্ট প্রযুক্তি (qPCR) উল্লেখ করে এবং একটি স্পষ্ট গবেষণার ফাঁক চিহ্নিত করে (Ps-Tol1-এর
                নেটওয়ার্ক)।
            </p>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                <strong>প্যারাগ্রাফ ২ (গবেষণা প্রস্তাবনা):</strong> এটি শুধু আগ্রহ প্রকাশ করে না; এটি একটি স্পষ্ট,
                কার্যকরী গবেষণা পরিকল্পনা প্রস্তাব করে যা আধুনিক পদ্ধতি (CRISPR-Cas9) ব্যবহার করে। এই পরিকল্পনাকে একটি
                বাস্তব, প্রভাবশালী দীর্ঘমেয়াদি লক্ষ্য (দূর্যোগ-প্রতিরোধী মিলেট) এর সঙ্গে সংযুক্ত করা হয়েছে।
            </p>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
                <strong>প্যারাগ্রাফ ৩ ('কেন আপনি'):</strong> এটি একটি নির্দিষ্ট প্রতিষ্ঠান (BARI) এবং একজন নির্দিষ্ট
                অধ্যাপককে উল্লেখ করে, যা গভীর গবেষণার প্রমাণ দেয়। এটি বুদ্ধিমত্তার সঙ্গে অধ্যাপকের দক্ষতা এবং
                প্রতিষ্ঠানের সুবিধাগুলো প্রস্তাবিত প্রকল্পের সঙ্গে সংযুক্ত করে। এটি আবেদনকারীর যোগ্যতার আত্মবিশ্বাসী
                সংক্ষিপ্তসার দিয়ে শেষ হয়।
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#5201FF'}}>
                পিএইচডি SOP-তে সাধারণ ভুলগুলি এড়ানোর উপায়
            </h2>

            <div className="overflow-x-auto my-6">
                <CustomDataTable columns={mistakesColumns} data={mistakesData}/>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#5201FF'}}>
                শক্তিশালী পিএইচডি SOP লেখার জন্য বিশেষজ্ঞ টিপস
            </h2>

            <div className="space-y-6 mb-6">
                <div>
                    <h4 className="font-semibold mb-3" style={{color: '#5201FF'}}>
                        কীভাবে অধ্যাপকগণের কাজ গবেষণা করে SOP-তে উল্লেখ করবেন:
                    </h4>
                    <p className="text-gray-800 text-base leading-relaxed">
                        তাদের সাম্প্রতিক গবেষণাপত্রগুলো পড়ুন। আপনার SOP-তে তাদের কাজের কোনো নির্দিষ্ট ধারণা বা ফলাফলের
                        উল্লেখ করুন যা আপনার আইডিয়ার সঙ্গে সম্পর্কিত। এটি আপনার প্রকৃত বুদ্ধিবৃত্তিক অংশগ্রহণ প্রদর্শন
                        করে।
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3" style={{color: '#5201FF'}}>
                        সঠিক ভঙ্গি: আত্মবিশ্বাস এবং বিনয় মেলানো:
                    </h4>
                    <p className="text-gray-800 text-base leading-relaxed">
                        আপনার দক্ষতা ও আইডিয়ায় আত্মবিশ্বাসী হোন, কিন্তু অহংকার এড়ান। স্বীকার করুন যে আপনি শেখার জন্য
                        সেখানে আছেন এবং তাদের নির্দেশনা আপনার উন্নয়নের জন্য গুরুত্বপূর্ণ।
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3" style={{color: '#5201FF'}}>
                        আপনার প্রোফাইলের ফাঁক-ফাঁক তুলে ধরা:
                    </h4>
                    <p className="text-gray-800 text-base leading-relaxed">
                        যদি আপনার GPA কম হয় বা একটি গ্যাপ বছর থাকে, তা সংক্ষেপে এবং ইতিবাচকভাবে উল্লেখ করুন।
                        উদাহরণস্বরূপ: "আমার স্নাতক প্রথম বছরগুলো চ্যালেঞ্জিং ছিল, তবে একাডেমিক ফোকাস বাড়ার সঙ্গে সঙ্গে,
                        আমি শেষ বছরে [উচ্চ স্কোর] অর্জন করেছি এবং মাস্টার্সে ডিস্টিঙ্কশন পেয়েছি, যা আমার প্রকৃত
                        একাডেমিক সক্ষমতা প্রতিফলিত করে।"
                    </p>
                </div>
                <div className={"flex justify-center items-center"}>
                    <Button size={"xl"}>
                        <ArrowDown/> SOP নমুনা দেখুন
                    </Button>
                </div>
            </div>
            <Separator/>
        </section>
    );
}
