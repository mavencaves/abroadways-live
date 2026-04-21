import {BlogCard} from "./blog-card"
import type {BlogPost} from "@/data/blog-posts"
import {ArrowLeft, ArrowRight, ChevronRight} from "lucide-react"
import {Button} from "@/components/ui/button.tsx";

interface BlogSectionProps {
    title: string
    posts: BlogPost[]
}

export function BlogSection({title, posts}: BlogSectionProps) {
    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
                <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    {title === "জনপ্রিয় ব্লগসমূহ" ? (
                            <div className={"flex gap-4"}>
                                <Button size={"xl"} className={"rounded-full size-14"}>
                                    <ArrowLeft/>
                                </Button>
                                <Button size={"xl"} className={"rounded-full size-14"}>
                                    <ArrowRight/>
                                </Button>
                            </div>

                        ) :
                        <span className={"flex justify-center items-center"}>
                            <Button size={"xl"} variant={"outline"} className={"border-blue-500"}>
                                আরও দেখুন
                                <ChevronRight className="w-4 h-4 ml-1"/>

                            </Button>
                        </span>
                    }
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post}/>
                ))}
            </div>
        </section>
    )
}
