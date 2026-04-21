import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router";
import { blogsApi } from "@/lib/api";
import { fallbackBlogs, type PublicBlogRecord } from "@/data/public-content-fallbacks";

const excerpt = (content: string) =>
    content.replace(/\s+/g, " ").trim().slice(0, 130).trim() + "...";

const formatDate = (value?: string) =>
    new Date(value || Date.now()).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

export default function BlogPage() {
    const [articles, setArticles] = useState<PublicBlogRecord[]>(fallbackBlogs);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadBlogs = async () => {
            try {
                const response = await blogsApi.getAll();
                const data = Array.isArray(response.data) ? response.data : [];
                const publishedBlogs = data.filter((item) => item.status === "published");

                if (!isMounted) {
                    return;
                }

                if (publishedBlogs.length > 0) {
                    setArticles(publishedBlogs);
                }
            } catch {
                if (isMounted) {
                    setArticles(fallbackBlogs);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadBlogs();

        return () => {
            isMounted = false;
        };
    }, []);

    const featuredArticles = useMemo(() => {
        return [...articles]
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 6);
    }, [articles]);

    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Abroadways Blog</p>
                        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                            Insights for students planning higher education abroad with more confidence.
                        </h1>
                        <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
                            Explore premium, student-focused articles on study abroad from Bangladesh, scholarships, visa
                            guidance, exam choices, and application strategy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Featured Reads</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Fresh content designed for real student decisions</h2>
                        </div>
                        <Button asChild variant="outline" className="hidden border-blue-200 text-blue-700 hover:bg-blue-50 md:inline-flex">
                            <Link to="/contact">
                                Talk To An Advisor
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {isLoading ? (
                        <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-10 text-center text-slate-500">
                            Loading articles...
                        </div>
                    ) : (
                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            {featuredArticles.map((article) => (
                                <article key={article._id} className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-slate-200">
                                    <img src={article.image || "/images/blog/Image_1_3.webp"} alt={article.title} className="h-60 w-full object-cover" />
                                    <div className="p-7">
                                        <div className="flex items-center gap-3 text-sm text-slate-500">
                                            <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">{article.category}</span>
                                            <span className="inline-flex items-center gap-1">
                                                <CalendarDays className="h-4 w-4" />
                                                {formatDate(article.createdAt)}
                                            </span>
                                        </div>
                                        <h3 className="mt-5 text-2xl font-semibold text-slate-950">{article.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt(article.content)}</p>
                                        <Button asChild className="mt-6 rounded-full bg-blue-700 hover:bg-blue-800">
                                            <Link to={`/blog/${article._id}`}>Read More</Link>
                                        </Button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
