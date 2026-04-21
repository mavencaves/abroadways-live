import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const stories = [
    {
        image: "/images/success1.webp",
        quote:
            "Abroadways helped me understand the UK admission process clearly and organize the documents I needed for my student visa.",
    },
    {
        image: "/images/success2.webp",
        quote:
            "The counselling process felt structured and professional. I received realistic guidance on universities, budget, and scholarships.",
    },
    {
        image: "/images/success3.webp",
        quote:
            "From exam planning to final application steps, the support was practical, easy to follow, and reassuring for my family.",
    },
];

export default function SuccessStoriesSection() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="section-shell bg-slate-50 px-4">
            <div className="section-container">
                <div className="mb-16">
                    <div className="section-intro-center mb-12">
                        <p className="section-kicker">Trust And Results</p>
                        <h2 className="section-title">
                            Student success stories that reflect real guidance and real progress.
                        </h2>
                    </div>

                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                        {stories.map((story) => (
                            <Card key={story.quote} className="border-0 bg-white p-0 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                                <CardContent className="p-0">
                                    <div className="relative rounded-lg">
                                        <img
                                            src={story.image}
                                            alt="Abroadways student success story"
                                            className="h-64 w-full rounded-t-[1.25rem] object-cover p-2"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm leading-7 text-slate-600">"{story.quote}"</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-6xl rounded-[2rem] bg-white px-6 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
                    <h3 className="text-2xl font-semibold text-slate-950 md:text-3xl">
                        Abroadways is built to be a trusted guide for study abroad from Bangladesh.
                    </h3>
                    <div className="mt-6 text-slate-600">
                        <p className="mb-4 leading-8">
                            Studying abroad should feel exciting, not confusing. Students and parents need clear
                            information, realistic planning, and trustworthy support at every stage of the journey. That
                            is where Abroadways creates value.
                        </p>
                        {showMore && (
                            <p className="mb-4 leading-8">
                                From university shortlisting and scholarship planning to exam pathways, documentation,
                                and visa preparation, our team focuses on making each step more understandable and more
                                achievable. We combine practical advice with a premium service experience so students can
                                move forward with greater confidence.
                            </p>
                        )}
                    </div>
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Button
                            variant="ghost"
                            className="w-fit px-0 text-blue-700 hover:bg-transparent hover:text-blue-800"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Show Less" : "Read More"}
                            <ChevronDown
                                className={`ml-2 h-4 w-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
                            />
                        </Button>
                        <Button asChild className="rounded-full bg-blue-700 px-6 hover:bg-blue-800">
                            <Link to="/contact">Talk To Abroadways</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
