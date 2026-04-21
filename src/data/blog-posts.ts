export interface BlogPost {
    id: string
    title: string
    image: string
    date: string
    category: string
}

export const blogPosts: BlogPost[] = [
    // 1. জনপ্রিয় ব্লগসমূহ
    {
        id: "1",
        title: "বিদেশে পড়াশোনা করার জন্য কি কি প্রয়োজন?",
        image: "/images/blog/Image_1_3.webp",
        date: "১২ জুন, ২০২০",
        category: "জনপ্রিয় ব্লগসমূহ",
    },
    {
        id: "2",
        title: "চিনা বিশ্ববিদ্যালয় নিয়ে সাধারণ কিছু জ্ঞানের কথা",
        image: "/images/blog/Image_2.webp",
        date: "৫ জুন, ২০২০",
        category: "জনপ্রিয় ব্লগসমূহ",
    },
    {
        id: "3",
        title: "IELTS পরীক্ষার রেডিং অংশ ভালো ভাবে পড়ার উপায়",
        image: "/images/blog/Image_3.webp",
        date: "২ জুন, ২০২০",
        category: "জনপ্রিয় ব্লগসমূহ",
    },
    {
        id: "4",
        title: "বিদেশে লেখাপড়া করতে গেলে বিশ্ববিদ্যালয় নির্বাচন",
        image: "/images/blog/Image_4.webp",
        date: "২০ মে, ২০২০",
        category: "জনপ্রিয় ব্লগসমূহ",
    },
    {
        id: "1",
        title: "বিশ্বের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়বেন আপনি?",
        image: "/images/blog/Image_5.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "কলেজসমূহ",
    },
    {
        id: "2",
        title: "যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়সমূহ ও তাদের বিশেষত্ব",
        image: "/images/blog/Image_6.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "কলেজসমূহ",
    },
    {
        id: "3",
        title: "প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো",
        image: "/images/blog/Image_7.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "কলেজসমূহ",
    },
    {
        id: "4",
        title: "স্টাডি অ্যাব্রোড: কোন দেশে কোন বিশ্ববিদ্যালয় বেছে নেবেন?",
        image: "/images/blog/Image_8.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "কলেজসমূহ",
    },

    // কোর্সসমূহ
    {
        id: "5",
        title: "সেরা কোর্সগুলো যা আপনার ক্যারিয়ার গড়তে সাহায্য করবে",
        image: "/images/blog/Image_9.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "কোর্সসমূহ",
    },
    {
        id: "6",
        title: "কোর্স নির্বাচন: কিভাবে সঠিক সিদ্ধান্ত নিবেন?",
        image: "/images/blog/Image_10.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "কোর্সসমূহ",
    },
    {
        id: "7",
        title: "স্টেম কোর্সসমূহের গুরুত্ব ও ভবিষ্যত সম্ভাবনা",
        image: "/images/blog/Image_11.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "কোর্সসমূহ",
    },
    {
        id: "8",
        title: "২০২৫ সালে জনপ্রিয় কোর্সসমূহ যা আপনি অবশ্যই জানতে চান",
        image: "/images/blog/Image_12.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "কোর্সসমূহ",
    },

    // পরীক্ষাসমূহ
    {
        id: "9",
        title: "IELTS/TOEFL পরীক্ষার জন্য কীভাবে প্রস্তুতি নেবেন?",
        image: "/images/blog/Image_13.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "পরীক্ষাসমূহ",
    },
    {
        id: "10",
        title: "শেষ মুহূর্তের প্রস্তুতি: পরীক্ষার আগের রাতের করণীয়",
        image: "/images/blog/Image_14.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "পরীক্ষাসমূহ",
    },
    {
        id: "11",
        title: "পড়াশোনায় মনোযোগ ধরে রাখার ৫টি বিজ্ঞানভিত্তিক উপায়",
        image: "/images/blog/Image_15.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "পরীক্ষাসমূহ",
    },
    {
        id: "12",
        title: "পরীক্ষার আগে পড়াশোনার পরিকল্পনা করবেন যেভাবে",
        image: "/images/blog/Image_16.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "পরীক্ষাসমূহ",
    },

    // খরচ হিসাবকরণ
    {
        id: "13",
        title: "বিদেশে পড়াশোনার খরচ কত? নিজেই হিসাব করুন!",
        image: "/images/blog/Image_17.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "খরচ হিসাবকরণ",
    },
    {
        id: "14",
        title: "টিউশন ফি থেকে থাকা-খাওয়া: পুরো হিসাব একসাথে",
        image: "/images/blog/Image_18.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "খরচ হিসাবকরণ",
    },
    {
        id: "15",
        title: "কোন দেশে পড়তে গেলে কত খরচ পড়বে? জানুন সহজভাবে",
        image: "/images/blog/Image_19.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "খরচ হিসাবকরণ",
    },
    {
        id: "16",
        title: "IELTS থেকে ভিসা ফি - সব খরচের একটি পূর্ণাঙ্গ তালিকা",
        image: "/images/blog/Image_20.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "খরচ হিসাবকরণ",
    },

    // সর্বশেষ আপডেট
    {
        id: "17",
        title: "ভিসা রিজেকশন এড়ানোর জন্য করণীয় জিনিসগুলো",
        image: "/images/blog/Image_21.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "সর্বশেষ আপডেট",
    },
    {
        id: "18",
        title: "কোন বিষয়ে কোন বিশ্ববিদ্যালয় সেরা? জেনে নিন তালিকাটি",
        image: "/images/blog/Image_22.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "সর্বশেষ আপডেট",
    },
    {
        id: "19",
        title: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতির সঠিক কৌশল",
        image: "/images/blog/Image_19.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "সর্বশেষ আপডেট",
    },
    {
        id: "20",
        title: "বৃত্তি ছাড়া বিদেশে পড়া যাবে? খরচ জেনে নিন আগে",
        image: "/images/blog/Image_20.webp",
        date: "১২ জুলাই, ২০২৫",
        category: "সর্বশেষ আপডেট",
    }
];

export const categories = ["জনপ্রিয় ব্লগসমূহ", "কলেজসমূহ", "কোর্সসমূহ", "পরীক্ষাসমূহ", "খরচ হিসাবকরণ", "সর্বশেষ আপডেট"]
