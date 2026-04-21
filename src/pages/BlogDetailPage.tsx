import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, CalendarDays, User2 } from "lucide-react";
import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { blogsApi } from "@/lib/api";
import { fallbackBlogs, type PublicBlogRecord } from "@/data/public-content-fallbacks";

const formatDate = (value?: string) =>
  new Date(value || Date.now()).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const excerpt = (content: string) =>
  content
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180)
    .trim() + "...";

export default function BlogDetailPage() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<PublicBlogRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fallbackBlog = fallbackBlogs.find((item) => item._id === blogId) ?? fallbackBlogs[0];

    const loadBlog = async () => {
      if (!blogId) {
        if (isMounted) {
          setBlog(fallbackBlog);
          setIsLoading(false);
        }
        return;
      }

      if (blogId.startsWith("fallback-blog-")) {
        if (isMounted) {
          setBlog(fallbackBlog);
          setIsLoading(false);
        }
        return;
      }

      try {
        const response = await blogsApi.getById(blogId);
        if (!isMounted) {
          return;
        }

        setBlog(response.data);
      } catch {
        if (isMounted) {
          setBlog(fallbackBlog);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadBlog();

    return () => {
      isMounted = false;
    };
  }, [blogId]);

  const relatedBlogs = useMemo(() => {
    const currentId = blog?._id;
    return fallbackBlogs.filter((item) => item._id !== currentId).slice(0, 3);
  }, [blog?._id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center text-slate-500">
          Loading article...
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center">
          <h1 className="text-2xl font-semibold text-slate-950">Article not found</h1>
          <Button asChild className="mt-6 rounded-full bg-blue-700 hover:bg-blue-800">
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Button
            asChild
            variant="ghost"
            className="mb-8 -ml-4 text-blue-100 hover:bg-white/10 hover:text-white"
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
              {blog.category}
            </div>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">{blog.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">{excerpt(blog.content)}</p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-blue-100">
              <span className="inline-flex items-center gap-2">
                <User2 className="h-4 w-4" />
                {blog.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {formatDate(blog.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            {blog.image ? (
              <img src={blog.image} alt={blog.title} className="h-80 w-full object-cover" />
            ) : null}
            <div className="p-8">
              <div className="space-y-6 text-base leading-8 text-slate-700">
                {blog.content.split(/\n{2,}/).map((paragraph, index) => (
                  <p key={`${blog._id}-${index}`}>{paragraph.trim()}</p>
                ))}
              </div>

              <div className="mt-10 rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Next Step</p>
                <h2 className="mt-3 text-2xl font-semibold">Need help applying this guidance to your study abroad plan?</h2>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Speak with Abroadways for clearer decisions on destination fit, applications, scholarships, and visa preparation.
                </p>
                <Button asChild className="mt-6 rounded-full bg-white text-slate-950 hover:bg-blue-50">
                  <Link to="/contact">Book A Consultation</Link>
                </Button>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">More Articles</p>
              <div className="mt-6 space-y-5">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item._id}
                    to={`/blog/${item._id}`}
                    className="block rounded-[1.25rem] border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{item.category}</p>
                    <h3 className="mt-2 text-base font-semibold leading-7 text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{formatDate(item.createdAt)}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Why Abroadways</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>Study abroad guidance built for Bangladeshi students and parents</li>
                <li>Support for scholarships, applications, and visa direction</li>
                <li>UKVI Approved LanguageCert Test Centre trust advantage</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
