import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

interface ArticleData {
    id: number
    title: string
    date: string
    readTime: string
    image: string
}

interface ArticleCardProps {
    article: ArticleData
    isHero?: boolean
}

export function ArticleCard({ article, isHero = false }: ArticleCardProps) {
    const { title, date, readTime, image } = article

    if (isHero) {
        // Hero card that spans 2 columns
        return (
            <Card className="overflow-hidden border-none shadow-lg py-0 hover:shadow-xl transition-shadow duration-300 h-full col-span-2">
                <div className="flex h-full">
                    {/* Left side - Image */}
                    <div className="flex-shrink-0 w-1/2 relative overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                            {title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-auto">
                            <div className="flex items-center gap-1">
                                <Calendar size={16} />
                                <span>{date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={16} />
                                <span>{readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }

    // Regular card
    return (
        <Card className="overflow-hidden border-none py-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <div className="aspect-[4/3] relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <CardContent className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4 line-clamp-3">
                    {title}
                </h3>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{readTime}</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
