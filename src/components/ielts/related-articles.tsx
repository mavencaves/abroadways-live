import ArticleCard from "@/components/ielts/article-card.tsx";

interface Article  {
    image: string;
    title: string;
    date: string;
    readTime: string;
    href: string;
}

type RelatedArticlesSectionProps = {
    articles: Article[];
    onSeeAll?: () => void;
}

const RelatedArticlesSection= ({ articles, onSeeAll } : RelatedArticlesSectionProps) => (
    <section className={"max-w-sm mx-auto"}>
        <div className="flex items-center justify-between px-1 mb-3">
            <h2 className="font-bold text-2xl text-gray-900">আরও পড়ুন</h2>
            <button
                className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-1"
                onClick={onSeeAll}
            >
                সব দেখুন <span className="text-lg">›</span>
            </button>
        </div>
        <div>
            {articles.map((article, idx) => (
                <ArticleCard key={idx} {...article} />
            ))}
        </div>
    </section>
);

export default RelatedArticlesSection;
