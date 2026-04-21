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

const popularNewsData: Article[] = [
    {
        id: 1,
        title: "অ্যাডমিশন এক্সপার্টরা কিভাবে আপনার ভিসা হবার সম্ভাবনা বাড়ায় জানেন কি?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/visa-img.jpg"
    },
    {
        id: 2,
        title: "ব্যাংক স্টেটমেন্ট ছাড়া ভিসা পাওয়া কি আদেও সম্ভব?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/popular-img1.jpg"
    },
    {
        id: 3,
        title: "SOP vs LOR: পার্থক্য ও কোনটা গুরুত্বপূর্ণ?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/popular-img2.jpg"

    },
    {
        id: 4,
        title: "ক্লাস, পার্টটাইম জব, এবং লাইফ ব্যালান্স কিভাবে করবেন?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/popular-img3.jpg"
    },
    {
        id: 5,
        title: "ব্যর্থতা থেকে শেখা: যারা প্রথমবার ভিসা রিজেক্ট হয়েছে",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/popular-img4.jpg"
    }
]

export function PopularNewsSection() {
    const [heroArticle, ...regularArticles] = popularNewsData

    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto space-y-12">
                    {/* Section Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                            জনপ্রিয় খবর
                        </h2>
                    </div>

                    {/* Hero Article - Image Left, Text Right */}
                    <Card className="overflow-hidden py-0 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
                        <div className="flex flex-col md:flex-row">
                            {/* Left side - Image (50% width) */}
                            <div className="md:w-1/2 relative">
                                <div className="aspect-[16/10] md:aspect-[4/3] lg:aspect-[3/2] relative overflow-hidden">
                                    <img
                                        src={heroArticle.image}
                                        alt={heroArticle.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            {/* Right side - Content (50% width) */}
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
