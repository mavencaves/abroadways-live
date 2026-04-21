import {ArticleCard} from "./ArticleCard"

interface Article {
    id: number
    title: string
    date: string
    readTime: string
    image: string
}

interface ArticleSectionProps {
    articles: Article[]
}

export function ArticlesSection({articles}: ArticleSectionProps) {

    return (
        <section className="w-full  py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto">
                    {/* Responsive Grid - 1 col mobile, 2 cols tablet, 4 cols desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {articles.map((article) => (
                            <div key={article.id} className="flex">
                                <ArticleCard article={article}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
