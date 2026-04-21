import CTASection from "@/components/cta.tsx";
import { Button } from "@/components/ui/button";
import {
    BadgeCheck,
    Compass,
    GraduationCap,
    Landmark,
    MapPinned,
    ShieldCheck,
    WalletCards,
} from "lucide-react";
import { Link } from "react-router";
import { regionSummaries } from "@/data/higher-education-regions";

const services = [
    {
        icon: GraduationCap,
        title: "University shortlisting",
        text: "We match destinations, subjects, tuition ranges, and long-term goals with the right country and university pathways.",
    },
    {
        icon: WalletCards,
        title: "Scholarship and cost planning",
        text: "Students and parents get clearer visibility on tuition, living costs, funding options, and realistic budget fit.",
    },
    {
        icon: ShieldCheck,
        title: "Application and visa guidance",
        text: "From document readiness to interview preparation, Abroadways helps keep the process structured and route-safe.",
    },
    {
        icon: Landmark,
        title: "Student and parent support",
        text: "Every study abroad plan is built with clear communication, premium service standards, and practical next steps from Bangladesh.",
    },
];

const quickPaths = [
    { label: "Explore Regions", to: "/study-abroad/europe" },
    { label: "Top Universities", to: "/study-abroad/usa/cities/new-york" },
    { label: "Top Courses", to: "/study-abroad/usa/courses/mscs" },
];

export default function HigherEducationPage() {
    return (
        <div className="bg-slate-50">
            <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(78,129,255,0.24),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-15" />
                <div className="relative mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/15 px-4 py-2 text-sm font-semibold text-orange-50">
                            <BadgeCheck className="h-4 w-4 text-orange-300" />
                            UKVI Approved LanguageCert Test Centre
                        </div>
                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Study Abroad</p>
                        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            A cleaner, region-first study abroad planning experience for Bangladeshi students.
                        </h1>
                        <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
                            Abroadways helps students compare destinations, shortlist universities, explore top courses,
                            plan scholarships, and prepare for applications with a more structured study abroad pathway.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {quickPaths.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-blue-50 backdrop-blur hover:bg-white/12"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button asChild size="xl" className="rounded-full bg-white px-8 text-slate-950 hover:bg-blue-50">
                                <Link to="/contact">Book A Consultation</Link>
                            </Button>
                            <Button
                                asChild
                                size="xl"
                                variant="outline"
                                className="rounded-full border-white/25 bg-white/5 px-8 text-white hover:bg-white/10"
                            >
                                <Link to="/abroadai">Ask AbroadAI Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Explore By Region</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                                Start with the region that matches your goals, budget, and study style.
                            </h2>
                        </div>

                        <div className="rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
                            <div className="grid gap-4 sm:grid-cols-3">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Region-first IA</p>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">Students can start broad, compare regions, then move into countries safely.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Country entry pages</p>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">Each destination now supports a cleaner planning handoff into universities, courses, and consultation.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Conversion-ready structure</p>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">High-intent students can move into guidance, consultation, or next-step routes without dead ends.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {regionSummaries.map((region) => (
                            <Link
                                key={region.slug}
                                to={`/study-abroad/${region.slug}`}
                                className="group rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                    <MapPinned className="h-5 w-5" />
                                </div>
                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{region.kicker}</p>
                                <h3 className="mt-3 text-xl font-semibold text-slate-950">{region.name}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">{region.description}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {region.highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-600"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:text-blue-900">
                                    Explore region
                                    <Compass className="h-4 w-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">What Abroadways Helps With</p>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.title} className="rounded-[1.5rem] bg-slate-50 p-6 ring-1 ring-slate-200">
                                    <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-700">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold text-slate-950">{service.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">{service.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
