import { Card } from "@/components/ui/card"

interface SmallArticle {
    id: number
    title: string
    image: string
}

interface ExpertSuggestionsData {
    heroArticle: {
        title: string
        image: string
    }
    smallArticles: SmallArticle[]
}

const expertSuggestionsData: ExpertSuggestionsData = {
    heroArticle: {
        title: "আপনার একাডেমিক প্রোফাইল কেমন হলে স্কলারশিপ পাওয়া সহজ?",
        image: "/images/article-header2.jpg"
    },
    smallArticles: [
        {
            id: 1,
            title: "বিদেশ পাড়িদেবার আগে যে বাস্তবতা আপনাকে মানতেই হবে",
            image: "/images/article1.jpg",
        },
        {
            id: 2,
            title: "কোন কোর্সগুলো ভবিষ্যতে সবচেয়ে চাহিদাসম্পন্ন হবে?",
            image: "/images/article2.jpg"
        },
        {
            id: 3,
            title: "কম খরচে পড়াশোনা করার জন্য সেরা দেশগুলো",
            image: "/images/article3.jpg"
        },
        {
            id: 4,
            title: "কোন কাগজপত্র না থাকলে ভিসা বাতিল হতে পারে?",
            image: "/images/article4.jpg"
        }
    ]
}

export function ExpertSuggestionsSection() {
    const { heroArticle, smallArticles } = expertSuggestionsData

    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className=" mx-auto">
                    {/* Section Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
                            বিশেষজ্ঞের সাজেশন যেনে নিন
                        </h2>
                    </div>

                    {/* Main Layout: Large image left, 4 small cards right */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Side - Large Hero Card (60% width) */}
                        <div className="lg:w-3/5">
                            <Card className="relative py-0 overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[500px] lg:min-h-[600px]">
                                <img
                                    src={heroArticle.image}
                                    alt={heroArticle.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                {/* Title overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        {heroArticle.title}
                                    </h1>
                                </div>
                            </Card>
                        </div>

                        {/* Right Side - 4 Small Cards (40% width) */}
                        <div className="lg:w-2/5 space-y-4">
                            {smallArticles.map((article) => (
                                <Card
                                    key={article.id}
                                    className="overflow-hidden py-0 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                >
                                    <div className="flex">
                                        {/* Small image (30% of card width) */}
                                        <div className="w-24 md:w-32 lg:w-36 flex-shrink-0">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover aspect-square"
                                            />
                                        </div>

                                        {/* Text content (70% of card width) */}
                                        <div className="flex-1 p-4 md:p-6 flex items-center">
                                            <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight line-clamp-3">
                                                {article.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
