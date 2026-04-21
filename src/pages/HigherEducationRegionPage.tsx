import { Link, Navigate, useParams } from "react-router";
import { ArrowRight, BadgeCheck, Compass, Globe2, GraduationCap, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { higherEducationRegions } from "@/data/higher-education-regions";

interface HigherEducationRegionPageProps {
    regionSlug?: string;
}

const regionCompareCopy: Record<string, { title: string; text: string }[]> = {
    asia: [
        {
            title: "Affordability and access",
            text: "Students often compare tuition, living costs, and regional accessibility before choosing an Asian destination.",
        },
        {
            title: "Course-market fit",
            text: "Popular decision points include business, technology, health, and practical career pathways with faster entry routes.",
        },
        {
            title: "Support planning",
            text: "A structured country shortlist helps students move into documentation, applications, and visa preparation with more clarity.",
        },
    ],
    europe: [
        {
            title: "Scholarships and cost balance",
            text: "Europe is often compared for tuition value, scholarships, public university options, and total study cost.",
        },
        {
            title: "Country systems",
            text: "Students usually need help comparing Schengen, non-Schengen, Baltic, and Scandinavian destination differences.",
        },
        {
            title: "Long-term planning",
            text: "Abroadways helps students weigh language environment, entry criteria, course quality, and future mobility options.",
        },
    ],
    "north-america": [
        {
            title: "University reputation",
            text: "Students compare top-ranked universities, research quality, and career-oriented outcomes across Canada and the United States.",
        },
        {
            title: "Budget and return",
            text: "North America usually requires stronger financial planning, scholarship strategy, and realistic shortlisting.",
        },
        {
            title: "Application depth",
            text: "Country selection often depends on test readiness, profile strength, and the level of application complexity a student can manage.",
        },
    ],
    "south-america": [
        {
            title: "Emerging route planning",
            text: "This region is being kept route-safe so students can register interest without being sent into unfinished destination content.",
        },
        {
            title: "Future expansion",
            text: "Country pages are prepared to support scholarships, universities, and admissions guidance when deeper content is ready.",
        },
        {
            title: "Consultation first",
            text: "At this stage, consultation remains the safest next step for students exploring South America seriously.",
        },
    ],
    "australia-oceania": [
        {
            title: "Premium destination demand",
            text: "Students usually compare Australia and Oceania for lifestyle, post-study planning, and globally recognised qualifications.",
        },
        {
            title: "Practical course choices",
            text: "Popular interest areas include business, engineering, computing, health, and career-focused postgraduate routes.",
        },
        {
            title: "Safe planning structure",
            text: "The region is set up so live Australia routes stay accessible while future Oceania content can expand without breaking the subsystem.",
        },
    ],
};

export default function HigherEducationRegionPage({ regionSlug }: HigherEducationRegionPageProps) {
    const { region } = useParams<{ region: string }>();
    const resolvedRegionSlug = regionSlug ?? region;
    const regionData = resolvedRegionSlug ? higherEducationRegions[resolvedRegionSlug] : undefined;

    if (!regionData) {
        return <Navigate to="/study-abroad" replace />;
    }

    const compareCards = regionCompareCopy[regionData.slug] ?? regionCompareCopy.asia;
    const breadcrumbSegments = [
        { label: "Study Abroad", path: "/study-abroad" },
        { label: regionData.name, path: `/study-abroad/${regionData.slug}` },
    ];

    return (
        <div className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
                <DynamicBreadcrumb customSegments={breadcrumbSegments} />
            </div>

            <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(78,129,255,0.24),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-15" />
                <div className="relative mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/15 px-4 py-2 text-sm font-semibold text-orange-50">
                            <BadgeCheck className="h-4 w-4 text-orange-300" />
                            UKVI Approved LanguageCert Test Centre
                        </div>
                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                            Study Abroad / {regionData.name}
                        </p>
                        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
                            {regionData.heroTitle}
                        </h1>
                        <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
                            {regionData.heroDescription}
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-[1.35rem] border border-white/10 bg-white/8 p-4 backdrop-blur">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Countries covered</p>
                                <p className="mt-2 text-2xl font-semibold text-white">{regionData.countries.length}</p>
                            </div>
                            <div className="rounded-[1.35rem] border border-white/10 bg-white/8 p-4 backdrop-blur">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Guidance focus</p>
                                <p className="mt-2 text-sm leading-6 text-blue-50">Destination fit, budget clarity, and safe next-step planning.</p>
                            </div>
                            <div className="rounded-[1.35rem] border border-white/10 bg-white/8 p-4 backdrop-blur">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Student support</p>
                                <p className="mt-2 text-sm leading-6 text-blue-50">Country selection, applications, scholarships, and visa guidance.</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button asChild size="xl" className="rounded-full bg-white px-8 text-slate-950 hover:bg-blue-50">
                                <Link to="/contact">Book A Consultation</Link>
                            </Button>
                            <Button
                                asChild
                                size="xl"
                                variant="outline"
                                className="rounded-full border-white/25 bg-white/5 px-8 text-white hover:bg-white/10"
                            >
                                <Link to="/study-abroad">Back To Study Abroad</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Countries In This Region</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                                Compare countries first, then move into the pathway that fits your plan.
                            </h2>
                        </div>

                        <div className="rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
                            <p className="text-sm leading-7 text-slate-700">{regionData.supportNote}</p>
                            {regionData.overviewGroups?.length ? (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {regionData.overviewGroups.map((group) => (
                                        <span
                                            key={group}
                                            className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-blue-700"
                                        >
                                            {group}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {compareCards.map((card) => (
                            <div key={card.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                    {card.title.includes("cost") || card.title.includes("Budget") ? (
                                        <WalletCards className="h-5 w-5" />
                                    ) : card.title.includes("Application") || card.title.includes("support") ? (
                                        <GraduationCap className="h-5 w-5" />
                                    ) : (
                                        <Compass className="h-5 w-5" />
                                    )}
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-slate-950">{card.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {regionData.countries.map((country) => {
                            const isComingSoon = country.status === "coming-soon";

                            return (
                                <div
                                    key={country.name}
                                    className="rounded-[1.9rem] bg-white p-7 shadow-[0_16px_38px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(15,23,42,0.10)]"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                            <Globe2 className="h-5 w-5" />
                                        </div>
                                        <span
                                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                                                isComingSoon ? "bg-slate-100 text-slate-600" : "bg-orange-50 text-orange-700"
                                            }`}
                                        >
                                            {isComingSoon ? "Coming Soon" : "Open"}
                                        </span>
                                    </div>

                                    <div className="mt-5 h-1.5 w-12 rounded-full bg-blue-700" />
                                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{country.name}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">{country.description}</p>

                                    <div className="mt-6 space-y-3">
                                        <Link
                                            to={`/study-abroad/${country.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                                        >
                                            {country.ctaLabel ?? "Explore"}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>

                                        {country.links?.length ? (
                                            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                                                {country.links.length} guided next step{country.links.length > 1 ? "s" : ""} available
                                            </p>
                                        ) : (
                                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                                                Content is being prepared
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
