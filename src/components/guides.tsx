import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, GraduationCap, UserRound } from "lucide-react";
import { Link } from "react-router";

export default function GuidesSection() {
    const guides = [
        {
            title: "Scholarship Planning Guide",
            description:
                "Understand how to shortlist affordable options, compare scholarships, and prepare a stronger funding plan for study abroad.",
            icon: GraduationCap,
            iconColor: "text-yellow-500",
            bgColor: "bg-yellow-50",
            to: "/resources",
        },
        {
            title: "Study Abroad Guide",
            description:
                "Get a clearer view of countries, courses, university matching, and application timelines based on your academic profile.",
            icon: UserRound,
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50",
            to: "/study-abroad",
        },
        {
            title: "Visa Documentation Guide",
            description:
                "Prepare for your visa journey with practical support on paperwork, interview readiness, and profile strength.",
            icon: FileText,
            iconColor: "text-green-500",
            bgColor: "bg-green-50",
            to: "/contact",
        },
    ];

    return (
        <section className="section-shell bg-[linear-gradient(180deg,#0b2453_0%,#123b86_100%)] px-4 text-white">
            <div className="section-container">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="section-kicker-on-dark">Resources</p>
                    <h2 className="section-title-on-dark">
                        Download useful guides for scholarships, higher education planning, and visa preparation.
                    </h2>
                    <p className="section-copy-on-dark">
                        These student-friendly guides are designed to make study abroad from Bangladesh more clear,
                        practical, and easier to plan.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {guides.map((guide) => (
                        <Card
                            key={guide.title}
                            className="border-0 bg-white text-slate-950 shadow-[0_18px_44px_rgba(8,26,60,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(8,26,60,0.22)]"
                        >
                            <CardContent className="p-8 text-center">
                                <div
                                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${guide.bgColor}`}
                                >
                                    <guide.icon className={`h-8 w-8 ${guide.iconColor}`} />
                                </div>

                                <h3 className="text-xl font-semibold">{guide.title}</h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">{guide.description}</p>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="xl"
                                    className="mt-8 w-full border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white"
                                >
                                    <Link to={guide.to}>
                                        Explore Guide
                                        <Download className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
