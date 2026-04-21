import { Card} from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import {ArticlesSection} from "@/components/digest/ArticlesSection.tsx";

interface Article {
    id: number
    title: string
    date: string
    readTime: string
    image: string
}

const studentOpinionsData: Article[] = [
    {
        id: 1,
        title: "টপ ইউরোপীয় দেশ যেখানে বাংলাদেশি শিক্ষার্থীরা সহজে ভর্তি হতে পারে",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article-header.jpg"
    },
    {
        id: 2,
        title: "৫টি ভুল যার জন্য SOP সকল দেশে বাতিল হয়",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article1.jpg"
    },
    {
        id: 3,
        title: "ভিসা রিজেকশন কেন হয় এবং কিভাবে তা এড়ানো যায়?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article2.jpg"
    },
    {
        id: 4,
        title: "SOP তে কিভাবে নিজের গল্প আকর্ষণীয়ভাবে বলা যায়? টিপস অ্যান্ড ট্রিক্স",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article3.jpg"
    },
    {
        id: 5,
        title: "ভবিষ্যতের জন্য কোন বিষয়ে পড়া লাভজনক?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article4.jpg"
    }
]

export function StudentOpinionsSection() {
    const [heroArticle, ...regularArticles] = studentOpinionsData

    return (
        <section className="w-full  py-16">
            <div className="container mx-auto px-4">
                <div className=" mx-auto space-y-12">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                            শিক্ষার্থীদের মতামত
                        </h2>
                    </div>

                    <Card className="overflow-hidden py-0 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 relative">
                                <div className="aspect-[16/10] md:aspect-[4/3] lg:aspect-[3/2] relative overflow-hidden">
                                    <img
                                        src={heroArticle.image}
                                        alt={heroArticle.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                    {heroArticle.title}
                                </h1>
                                <div className="flex items-center gap-6 text-sm md:text-base text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} />
                                        <span>{heroArticle.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} />
                                        <span>{heroArticle.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <ArticlesSection articles={regularArticles}/>
                </div>
            </div>
        </section>
    )
}
