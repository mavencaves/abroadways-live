import type { BlogPost } from "@/data/blog-posts"

interface BlogCardProps {
    post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <div className="cursor-pointer group">
            <div className="w-full h-48 mb-3 overflow-hidden rounded-lg">
                <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
                />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                {post.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm">{post.date}</p>
        </div>
    )
}
