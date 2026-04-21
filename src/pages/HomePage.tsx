import HeroSection from "@/components/hero.tsx";
import ServicesSection from "@/components/services.tsx";
import BusinessVerticalsSection from "@/components/business-verticals.tsx";
import WhyAbroadways from "@/components/why-abroadways.tsx";
import StatsSection from "@/components/stats.tsx";
import SessionBook from "@/components/classes-section.tsx";
import WhatsAppCTA from "@/components/whatsapp-cta.tsx";
import LeadFormSection from "@/components/lead-form.tsx";
import ExpertsSection from "@/components/experts.tsx";
import GuidesSection from "@/components/guides.tsx";
import SuccessStoriesSection from "@/components/success-stories.tsx";
import FAQSection from "@/components/faq.tsx";
import CTASection from "@/components/cta.tsx";

export default function HomePage() {
    return (
        <>
            <HeroSection/>
            <ServicesSection/>
            <BusinessVerticalsSection/>
            <WhyAbroadways/>
            <StatsSection/>
            <SessionBook/>
            <WhatsAppCTA />
            <LeadFormSection />
            <ExpertsSection/>
            <GuidesSection/>
            <SuccessStoriesSection/>
            <FAQSection/>
            <CTASection/>
        </>
    )
}
