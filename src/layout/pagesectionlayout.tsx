import {Outlet} from "react-router";
import RelatedArticlesSection from "@/components/ielts/related-articles.tsx";

const articles = [
    {
        image: "/images/blog/blog1.jpg",
        title: "বিশ্বের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়বেন আপনি?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "৫ মিনিট",
        href: "/articles/top-10-universities"
    },
    {
        image: "/images/blog/blog2.jpg",
        title: "যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়সমূহ ও তাদের বিশেষত্ব",
        date: "১২ জুলাই, ২০২৫",
        readTime: "৫ মিনিট",
        href: "/articles/best-us-universities"
    },
    {
        image: "/images/blog/blog3.jpg",
        title: "প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো",
        date: "১২ জুলাই, ২০২৫",
        readTime: "৫ মিনিট",
        href: "/articles/top-tech-universities"
    },
];

export default function pagesectionlayout() {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2  max-w-4xl">
                        <Outlet/>
                    </div>
                    <aside className={"sticky top-4 self-start"}>
                        <RelatedArticlesSection articles={articles}/>
                    </aside>
                </div>
            </div>
        </div>
    )
}