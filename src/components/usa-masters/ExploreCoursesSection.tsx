import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface CourseDestination {
    id: string;
    title: string;
    provider: string;
    universityCount: string;
    backgroundClass: string;
    href: string;
}

const ExploreCoursesSection: React.FC = () => {
    const destinations: CourseDestination[] = [
        {
            id: "1",
            title: "Master's in Australia",
            provider: "Popular higher education destination",
            universityCount: "Explore university options",
            backgroundClass: "bg-[linear-gradient(135deg,#0b2453_0%,#123b86_100%)]",
            href: "/study-abroad/australia",
        },
        {
            id: "2",
            title: "Master's in the United Kingdom",
            provider: "Strong one-year and specialist pathways",
            universityCount: "Explore top university pathways",
            backgroundClass: "bg-[linear-gradient(135deg,#0f2f6d_0%,#2563eb_100%)]",
            href: "/study-abroad/uk",
        },
        {
            id: "3",
            title: "Master's in Europe",
            provider: "Scholarship-friendly destination group",
            universityCount: "Explore affordable study routes",
            backgroundClass: "bg-[linear-gradient(135deg,#0b3a66_0%,#0ea5e9_100%)]",
            href: "/study-abroad/europe",
        },
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-semibold text-slate-950">Explore similar study pathways in other destinations</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                        Compare where your course interest could lead across key Abroadways study abroad destinations.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((destination) => (
                        <Card
                            key={destination.id}
                            className="group overflow-hidden border-0 py-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <CardContent className="p-0">
                                <div className={`${destination.backgroundClass} relative overflow-hidden p-8 text-white`}>
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute right-4 top-4 h-20 w-20 rounded-full border border-white"></div>
                                        <div className="absolute bottom-4 left-4 h-16 w-16 rounded-full border border-white"></div>
                                        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-white"></div>
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="mb-4 text-2xl font-bold">{destination.title}</h3>

                                        <div className="mb-6 space-y-2">
                                            <p className="text-sm text-white/90">{destination.provider}</p>
                                            <p className="text-lg font-semibold">{destination.universityCount}</p>
                                        </div>

                                        <Button
                                            asChild
                                            variant="secondary"
                                            className="w-full bg-white text-slate-950 transition-all duration-300 hover:bg-blue-50 sm:w-auto"
                                        >
                                            <Link to={destination.href}>
                                                Explore
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreCoursesSection;
