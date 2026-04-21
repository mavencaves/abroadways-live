import { Hero } from "@/components/study-abroad/Hero.tsx";
import FeaturesSection from "@/components/finance/FeaturesSection.tsx";
import MavencaveFinanceSection from "@/components/finance/MavencaveFinanceSection.tsx";
import ExamTestimonials from "@/components/exams/testimonials.tsx";
import CTASection from "@/components/cta.tsx";

const stats = [
    {
        number: "3,000+",
        label: "Students guided",
        color: "text-white",
    },
    {
        number: "231+",
        label: "Universities explored",
        color: "text-white",
    },
    {
        number: "2,300+",
        label: "Courses supported",
        color: "text-white",
    },
    {
        number: "$175M",
        label: "Funding conversations navigated",
        color: "text-white",
    },
];

export default function FinancePage() {
    return (
        <>
            <div className="bg-[#FAF8FF]">
                <div className="container mx-auto px-4">
                    <Hero
                        heading="We help you plan the financial side of studying abroad with more clarity."
                        image={{
                            src: "/images/finance-hero.png",
                            alt: "Finance hero image",
                        }}
                        description="Abroadways supports students and families with practical finance guidance, funding awareness, and structured planning so international education feels more achievable and less overwhelming."
                        buttons={{
                            primary: {
                                text: "Explore Funding Guidance",
                                url: "/testimonials/counseling",
                            },
                        }}
                    />
                </div>
            </div>

            <div className="px-4">
                <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 px-8 py-8 shadow-xl">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className={`mb-4 text-4xl font-bold lg:text-5xl xl:text-6xl ${stat.color}`}>
                                        {stat.number}
                                    </div>
                                    <div className={`text-sm font-medium opacity-90 lg:text-base xl:text-lg ${stat.color}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <FeaturesSection />
            <MavencaveFinanceSection />
            <ExamTestimonials />
            <CTASection />
        </>
    );
}
