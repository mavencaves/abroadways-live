import {SecondaryNavigation} from "@/components/digest/SecondaryNavigation.tsx";
import MagazineDigest from "@/components/digest/MagazineDigest.tsx";
import {ArticlesSection} from "@/components/digest/ArticlesSection.tsx";
import {StudentOpinionsSection} from "@/components/digest/StudentOpinionsSection.tsx";
import {ExpertSuggestionsSection} from "@/components/digest/ExpertSuggestionsSection.tsx";
import {PopularNewsSection} from "@/components/digest/PopularNewsSection.tsx";

const firstArticles = [
    {
        id: 1,
        title: "৭টি গোপন টিপস যা ভিসা ইন্টারভিউতেই আপনার ভিসা নিশ্চিত করবে!",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article1.jpg"
    },
    {
        id: 2,
        title: "কানাডায় পড়াশোনার জন্য কোন কোন ডকুমেন্ট দরকার?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article2.jpg"
    },
    {
        id: 3,
        title: "অস্ট্রেলিয়ায় পড়াশোনার খরচ ও উপার্জনের সুযোগ কেমন?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article3.jpg"
    },
    {
        id: 4,
        title: "জার্মানিতে পড়াশোনা ফ্রি? সুযোগ ও চ্যালেঞ্জ সমূহ কি কি?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article4.jpg"
    }
]
const educationArticlesData = [
    {
        id: 1,
        title: "IELTS নেই? IELTS ছাড়া কোথায় কোথায় উচ্চশিক্ষা করা যায়?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article1.jpg",
        category: "ভাষার দক্ষতা",
        excerpt: "IELTS ছাড়াই বিদেশে উচ্চশিক্ষার সুযোগ রয়েছে বিভিন্ন দেশে"
    },
    {
        id: 2,
        title: "ইউরোপ বনাম কানাডা – কোনটি আপনার জন্য উপযুক্ত?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article2.jpg",
        category: "দেশ নির্বাচন",
        excerpt: "ইউরোপ ও কানাডার উচ্চশিক্ষার তুলনামূলক বিশ্লেষণ"
    },
    {
        id: 3,
        title: "LOR-এর জন্য শিক্ষককে কিভাবে অনুরোধ করবেন?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article3.jpg",
        category: "ডকুমেন্ট প্রস্তুতি",
        excerpt: "LOR সংগ্রহের কার্যকর কৌশল ও পদ্ধতি"
    },
    {
        id: 4,
        title: "স্কলারশিপ আবেদনের সময় যে ভুলগুলো এড়িয়ে চলবেন",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article4.jpg",
        category: "স্কলারশিপ",
        excerpt: "স্কলারশিপ পেতে যে সাধারণ ভুলগুলো এড়াতে হবে"
    }
]


export default function DigestPage() {
    return (
        <>
            <SecondaryNavigation/>
            <MagazineDigest/>
            <ArticlesSection articles={firstArticles}/>
            <StudentOpinionsSection/>
            <ExpertSuggestionsSection/>
            <PopularNewsSection/>
            <ArticlesSection articles={educationArticlesData}/>
        </>

    )
}
