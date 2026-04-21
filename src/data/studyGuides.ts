// src/data/studyGuides.ts

export interface Highlights {
  tuition_fees: string;
  duration: string;
  salary: string;
  universities: string[];
}

export interface Overview {
  title: string;
  description: string;
}

export interface WhyUSA {
  title: string;
  points: string[];
}

export interface Blog {
  id: number;
  country: string;
  title: string;
  last_updated: string;
  reading_time: string;
  introduction: string;
  highlights: Highlights;
  overview: Overview;
  why_usa: WhyUSA;
}

const blogDetails: Blog[] = [
  {
    id: 1,
    country: "যুক্তরাষ্ট্র",
    title:
      "ইউএসএ-তে ২০২৫-২৬-এর জন্য এমএস ইন ডেটা সায়েন্স (MS in Data Science) এর সম্পূর্ণ নির্দেশিকা",
    last_updated: "অক্টোবর ১০, ২০২৫",
    reading_time: "৮ মিনিট",
    introduction:
      "একবিংশ শতাব্দীর সবচেয়ে মূল্যবান ডিগ্রি হলো সেটি, যা ডেটা বা তথ্যকে ডলারে পরিণত করে। আপনি যদি এমন একটি পেশা লক্ষ্য করে থাকেন যেখানে আপনার দক্ষতা অপরিহার্য, তবে ইউএসএ-তে এমএস ইন ডেটা সায়েন্স হলো আপনার চূড়ান্ত পথ। বাজার নিজেই এর প্রমাণ দিচ্ছে: ডেটা সায়েন্টিস্টদের চাহিদা ২০৩১ সাল পর্যন্ত বিস্ময়করভাবে ৩৬% বৃদ্ধি পাবে বলে অনুমান করা হচ্ছে, যা অন্যান্য সকল পেশার বৃদ্ধির হারকে ছাড়িয়ে যাবে।",
    highlights: {
      tuition_fees: "প্রতি বছর $৪০,০০০ থেকে $৯০,০০০",
      duration: "১–২ বছর",
      salary: "গড় প্রারম্ভিক বেতন প্রতি বছর $৯৫,০০০ থেকে $১৩০,০০০",
      universities: ["MIT", "Stanford", "Berkeley", "Columbia"]
    },
    overview: {
      title: "এমএস ইন ডেটা সায়েন্স কী এবং কেন ইউএসএ বেছে নেবেন?",
      description:
        "একটি ইউএস ডেটা সায়েন্স মাস্টার্স হলো ১-২ বছরের একটি স্নাতকোত্তর প্রোগ্রাম, যা শিক্ষার্থীদের মেশিন লার্নিং, এআই (AI), পরিসংখ্যানগত বিশ্লেষণ, বিগ ডেটা অ্যানালিটিক্স এবং ডেটা ভিজ্যুয়ালাইজেশনে প্রশিক্ষণ দেয়। ইউএসএ-তে এমএস ইন ডেটা সায়েন্স করার পর গ্র্যাজুয়েটরা ডেটা সায়েন্টিস্ট, ডেটা ইঞ্জিনিয়ার, মেশিন লার্নিং ইঞ্জিনিয়ার এবং বিজনেস ইন্টেলিজেন্স অ্যানালিস্টের মতো উচ্চ-চাহিদার ভূমিকার জন্য প্রস্তুত হন।"
    },
    why_usa: {
      title: "কেন ইউএসএ-তে এমএস ইন ডেটা সায়েন্স করবেন?",
      points: [
        "বিশ্বের শীর্ষ প্রযুক্তি কোম্পানিগুলোর (Google, Microsoft, Amazon) সদর দপ্তর যুক্তরাষ্ট্রে অবস্থিত।",
        "রিসার্চ ও ইন্ডাস্ট্রি প্রজেক্টের সুযোগ অসাধারণভাবে বেশি।",
        "STEM কোর্স হিসেবে এটি ৩ বছরের OPT (Optional Practical Training) সুবিধা দেয়।",
        "বিশ্বব্যাপী স্বীকৃত ডিগ্রি যা ক্যারিয়ার গ্রোথে বিশাল প্রভাব ফেলে।"
      ]
    }
  }
];

export default blogDetails;
