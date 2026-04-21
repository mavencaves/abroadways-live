import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Carousel, type CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const MagazineDigest = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const articles = [
        {
            id: 1,
            category: "শিক্ষার্থীদের মতামত",
            title: "বিদেশে পড়াশোনা করতে তৈরি? প্রস্তুতির জন্যে তৈরি আমাদের গাইড",
            image: "/images/digest-img1.webp",
            categoryColor: "blue"
        },
        {
            id: 2,
            category: "শিক্ষার্থীদের মতামত",
            title: "বিদেশে স্কলারশিপ পাওয়ার ১০টি সিক্রেট স্ট্র্যাটেজি",
            image: "/images/digest-img2.jpg",
            categoryColor: "blue"
        },
        {
            id: 3,
            category: "শিক্ষার্থী",
            title: "IELTS নাকি TOEFL?: কোনটি আপনাকে এগিয়ে রাখবে?",
            image: "/images/digest-img1.webp",
            categoryColor: "purple"
        }
    ]

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="w-full bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
                        মেভেনকেভ ডাইজেস্ট
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        বিদেশে পড়াশোনার প্রতি ঝোক, আমাদের গবেষণা এবং রিভিউ!
                    </p>
                </div>

                <div className="mx-auto mb-12">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "center",
                            loop: true,
                            startIndex: 1,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-8">
                            {articles.map((article, index) => (
                                <CarouselItem key={article.id} className="pl-8 basis-1/1 md:basis-4/5 lg:basis-3/5 xl:basis-1/2">
                                    <div
                                        className={`transition-all duration-300 ${
                                            index === current
                                                ? 'scale-100 opacity-100'
                                                : 'scale-90 opacity-70'
                                        }`}
                                    >
                                        {index === current ? (
                                            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl py-0 transition-shadow duration-300">
                                                {/* Horizontal flex layout with minimum height */}
                                                <div className="flex min-h-[320px] md:min-h-[400px]"> {/* Added minimum height */}
                                                    {/* Left side - Image with fixed width */}
                                                    <div className="flex-shrink-0 w-1/2 relative overflow-hidden">
                                                        <img
                                                            src={article.image}
                                                            alt={article.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    {/* Right side - Content with proper padding */}
                                                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center"> {/* Increased padding */}
                                                        <div className="flex items-center  mb-6"> {/* Increased spacing */}
                                                            <div
                                                                className={`w-4 h-4 rounded-full ${
                                                                    article.categoryColor === 'blue' ? 'bg-blue-600' : 'bg-purple-600'
                                                                }`}
                                                            ></div>
                                                            <Badge
                                                                variant="secondary"
                                                                className={`text-xs lg:text-sm font-medium px-3 py-1 ${
                                                                    article.categoryColor === 'blue'
                                                                        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                                                        : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                                                                }`}
                                                            >
                                                                {article.category}
                                                            </Badge>
                                                        </div>
                                                        <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"> {/* Increased font size */}
                                                            {article.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </Card>
                                        ) : (
                                            /* Side cards - taller vertical layout */
                                            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl py-0 transition-shadow duration-300">
                                                <div className="h-[320px] md:h-[400px] relative overflow-hidden"> {/* Fixed height matching center card */}
                                                    <img
                                                        src={article.image}
                                                        alt={article.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </Card>
                                        )}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center gap-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === current
                                    ? 'w-8 h-2 bg-purple-600'
                                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MagazineDigest
