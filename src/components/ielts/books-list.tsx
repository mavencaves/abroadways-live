import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ieltsBooks = [
    "Barron's IELTS Superpack",
    "The Official Cambridge Guide to IELTS",
    "Cambridge IELTS 14 Academic Student's Book with Answers",
    "Official IELTS Practice Materials",
    "IELTS Trainer",
    "Road to IELTS",
    "Check Your English Vocabulary for IELTS",
    "Simone Braverman's Target Band 7",
    "Focus on the IELTS Foundation Coursebook",
    "English Collocations in Use: Advanced",
];

export default function IeltsBooksListSection() {
    return (
        <section className="mx-auto mt-8 bg-white p-4 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ১. IELTS প্রস্তুতির বই ২০২৪-২০২৫
            </h2>
            <div className="space-y-3 text-gray-800 text-base leading-relaxed mb-4">
                <p>
                    IELTS পরীক্ষায় ভালো স্কোর করার জন্য ইংরেজি ভাষায় ভালো দক্ষতা থাকা অত্যন্ত গুরুত্বপূর্ণ। আপনি নিজে থেকে অধ্যয়নের মাধ্যমে বা কোচিং ক্লাসে যোগ দিয়ে আপনার ভাষা দক্ষতা উন্নত করতে পারেন। যদি আপনি নিজে থেকে পড়তে চান, তাহলে IELTS বইগুলো আপনার এই যাত্রার বিশ্বস্ত সঙ্গী হতে পারে। কারণ যেমন বলা হয়েছে, “বই আমাদের সেরা বন্ধু”।
                </p>
                <p>
                    এই বইগুলো কেবল পাতার গাদা নয়—এগুলো মূল্যবান প্র্যাকটিস টেস্ট, দক্ষতা বৃদ্ধির অনুশীলন, এবং বিস্তারিত টিপস নিয়ে ভরা, যা পরীক্ষার দিনে আপনাকে আত্মবিশ্বাসী হতে সাহায্য করবে।
                </p>
                <p>
                    বাজারে এতগুলো IELTS বই থাকায় ভালো একটি বই বাছাই করা আপনার প্রতিটি ধাপে পথপ্রদর্শক হতে পারে। চলুন দেখি কিছু সেরা বই যা আপনার IELTS প্রস্তুতিতে সহায়ক হবে!
                </p>
                <div>
                    <span className="font-semibold">এখানে IELTS প্রস্তুতির জন্য সেরা বইগুলোর একটি তালিকা রয়েছে:</span>
                </div>
            </div>
            <Accordion type="single" collapsible className="rounded-xl divide-y space-y-8 divide-gray-100 overflow-hidden max-w-2xl mx-auto">
                {ieltsBooks.map((book, idx) => (
                    <AccordionItem
                        key={book}
                        value={`item-${idx}`}
                        className="border-none  bg-gray-50 rounded-none"
                    >
                        <AccordionTrigger
                            className="flex justify-between items-center px-6 py-4 font-medium text-base hover:bg-gray-100 transition-all data-[state=open]:font-semibold data-[state=open]:text-blue-600"
                        >
                            {book}
                        </AccordionTrigger>
                        {/* You can put extra book details here if wanted */}
                        <AccordionContent className="px-6 py-3 text-gray-700">
                            {/* Example: No extra detail yet */}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
