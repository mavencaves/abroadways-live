import {Hero} from "@/components/study-abroad/Hero.tsx";
import Counsellor from "@/components/counsellor.tsx";
import CounselorHeroSection from "@/components/counselor/CounselorHeroSection.tsx";
import CTASection from "@/components/cta.tsx";
import CounselorAdvantagesSection from "@/components/counselor/CounselorAdvantagesSection.tsx";

const advisors = [
    {
        title: "তাসফিয়া নূর",
        subtitle: "৫০০-এর বেশি শিক্ষার্থীকে গাইড করেছেন। তিনি সবসময় চেষ্টা করেন যেন তার স্টুডেন্টরা তাদের জন্য সবচেয়ে উপযুক্ত কলেজ পায়।",
        image: "/images/advisor/advisor1.jpg",
    },
    {
        title: "তাহমিদ রেজা",
        subtitle: "৫০০-এর বেশি শিক্ষার্থীকে গাইড করেছেন। তিনি সবসময় চেষ্টা করেন যেন তার স্টুডেন্টরা তাদের জন্য সবচেয়ে উপযুক্ত কলেজ পায়।",
        image: "/images/advisor/advisor2.jpg",
    },
    {
        title: "হাফসা জান্নাত",
        subtitle: "৫০০-এর বেশি শিক্ষার্থীকে গাইড করেছেন। তিনি সবসময় চেষ্টা করেন যেন তার স্টুডেন্টরা তাদের জন্য সবচেয়ে উপযুক্ত কলেজ পায়।",
        image: "/images/advisor/advisor3.jpg",

    },
    {
        title: "নাফিউল হাসান",
        subtitle: "৫০০-এর বেশি শিক্ষার্থীকে গাইড করেছেন। তিনি সবসময় চেষ্টা করেন যেন তার স্টুডেন্টরা তাদের জন্য সবচেয়ে উপযুক্ত কলেজ পায়।",
        image: "/images/advisor/advisor4.jpg",

    },
]

export default function CounsellorPage(){
    return (
        <>
            <div className={"bg-[#FAF8FF]"}>
                <div className={"container mx-auto px-4"}>
                    <Hero heading={"বাংলাদেশের সেরা কাউন্সেলরদের সাথে যুক্ত হন"} image={{
                        src: "/images/coun-hero.jpg",
                        alt: "Finance Hero Image"
                    }}
                          description={"আমাদের সেরা শিক্ষার্থীদের কথা শুনুন এবং তাদের বিশ্বব্যাপী ক্যারিয়ারের সফলতার গল্প জানুন!"}
                          buttons={{
                              primary: {
                                  text: 'আপনার যাত্রা শুরু করুন',
                                  url : '/'
                              }
                          }}
                    />
                </div>
            </div>
            <div className={"container mx-auto px-4"}>
                <p className={"text-center text-xl sm:text-3xl lg:text-4xl font-semibold py-8"}>আমাদের পরামর্শদাতা</p>
                <Counsellor items={advisors}/>
            </div>
            <CounselorHeroSection/>
            <CounselorAdvantagesSection/>
            <CTASection/>
         </>
    )
}