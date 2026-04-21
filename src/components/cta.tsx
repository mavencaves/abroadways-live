import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { Link } from "react-router";

export default function CTASection() {
    const counselorImages = [
        { src: "/images/expert2.jpg", alt: "Counselor 1" },
        { src: "/images/expert1.jpg", alt: "Counselor 2" },
        { src: "/images/expert3.jpg", alt: "Counselor 3" },
        { src: "/images/expert4.jpeg", alt: "Counselor 4" },
    ];

    return (
        <section className="section-shell-compact w-full bg-white px-4 md:py-16">
            <div className="mx-auto max-w-6xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#06152f_0%,#0c2a5f_50%,#12439e_100%)] px-6 py-12 md:px-8 md:py-16">
                    <div className="hidden md:block">
                        <div className="absolute left-8 top-8 h-14 w-14 lg:left-20 lg:h-20 lg:w-20">
                            <img src={counselorImages[0].src} alt={counselorImages[0].alt} className="h-full w-full rounded-full border-4 border-white/20 object-cover" />
                        </div>
                        <div className="absolute right-8 top-8 h-14 w-14 lg:right-20 lg:h-20 lg:w-20">
                            <img src={counselorImages[1].src} alt={counselorImages[1].alt} className="h-full w-full rounded-full border-4 border-white/20 object-cover" />
                        </div>
                        <div className="absolute bottom-8 left-8 h-14 w-14 lg:left-20 lg:h-20 lg:w-20">
                            <img src={counselorImages[2].src} alt={counselorImages[2].alt} className="h-full w-full rounded-full border-4 border-white/20 object-cover" />
                        </div>
                        <div className="absolute bottom-8 right-8 h-14 w-14 lg:right-20 lg:h-20 lg:w-20">
                            <img src={counselorImages[3].src} alt={counselorImages[3].alt} className="h-full w-full rounded-full border-4 border-white/20 object-cover" />
                        </div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-3xl text-center">
                        <p className="section-kicker-on-dark">Final CTA</p>
                        <h2 className="mb-4 mt-3 font-serif text-2xl leading-tight text-white md:mb-6 md:text-3xl lg:text-4xl">
                            Ready to move forward with Abroadways and get clear answers faster?
                        </h2>

                        <p className="mx-auto max-w-2xl px-2 text-sm leading-relaxed text-white/90 md:mb-8 md:text-base">
                            Book a consultation with our team or use AbroadAI free for instant support on study abroad from Bangladesh, scholarships, visa guidance, and exam planning.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button
                                size="xl"
                                className="w-full rounded-full bg-white px-6 py-3 text-base font-semibold text-blue-800 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl sm:w-auto md:px-8 md:py-4 md:text-lg"
                            >
                                <Link to="/testimonials/counseling">Book Your Consultation</Link>
                            </Button>
                            <Button
                                asChild
                                size="xl"
                                variant="outline"
                                className="w-full rounded-full border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 sm:w-auto md:px-8 md:py-4 md:text-lg"
                            >
                                <Link to="/abroadai">
                                    Get Instant Answers
                                    <Bot className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 opacity-10">
                        <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-white blur-3xl md:left-20 md:top-20 md:h-32 md:w-32" />
                        <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-white blur-3xl md:bottom-20 md:right-20 md:h-40 md:w-40" />
                    </div>
                </div>
            </div>
        </section>
    );
}
