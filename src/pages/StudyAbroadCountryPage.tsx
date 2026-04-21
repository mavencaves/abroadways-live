import { Link, Navigate, useParams } from "react-router";
import {
    ArrowRight,
    BadgeCheck,
    BookOpenText,
    Coins,
    Globe2,
    GraduationCap,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { getStudyAbroadCountryBySlug } from "@/data/higher-education-regions";

const regionOverviewMap: Record<
    string,
    {
        planningFocus: string;
        budgetView: string;
        supportModel: string;
        reasons: { title: string; text: string }[];
    }
> = {
    asia: {
        planningFocus: "Best for students comparing practical tuition, regional access, and emerging international pathways.",
        budgetView: "Budget planning often starts with tuition efficiency, city living costs, and course-to-value fit.",
        supportModel: "Abroadways supports destination fit, application direction, and safer next steps from Bangladesh.",
        reasons: [
            {
                title: "Regional accessibility",
                text: "Asian destinations can offer strong entry routes for students who want international education with manageable travel and living considerations.",
            },
            {
                title: "Value-driven choices",
                text: "Many students explore Asia for better tuition control, practical city options, and a wide range of institution types.",
            },
            {
                title: "Growing study demand",
                text: "Popular interests include business, technology, medicine, and flexible progression routes into future global plans.",
            },
        ],
    },
    europe: {
        planningFocus: "Best for scholarship-led planning, value-conscious tuition, and a broad mix of country systems.",
        budgetView: "Europe often requires comparing tuition models, living costs, visa pathways, and scholarship accessibility side by side.",
        supportModel: "Abroadways helps students compare country systems before they commit to a shortlist or application plan.",
        reasons: [
            {
                title: "Wide destination choice",
                text: "Europe gives students access to different academic systems, English-taught programs, and public or private university options.",
            },
            {
                title: "Scholarship potential",
                text: "Many students consider Europe for scholarship-friendly routes, value-conscious study plans, and flexible degree access.",
            },
            {
                title: "Structured comparisons",
                text: "A strong Europe plan depends on comparing Schengen and non-Schengen routes, entry criteria, and total cost, not just tuition alone.",
            },
        ],
    },
    "north-america": {
        planningFocus: "Best for students targeting top-ranked universities, research depth, and high-recognition qualifications.",
        budgetView: "North America usually needs stronger financial planning, scholarship strategy, and selective shortlisting.",
        supportModel: "Students often need tighter guidance around admissions depth, profile positioning, and long-term outcomes.",
        reasons: [
            {
                title: "Global recognition",
                text: "Canada and the United States remain premium options for students prioritising academic reputation and long-term career visibility.",
            },
            {
                title: "Specialised program depth",
                text: "North America supports strong subject depth across research, technology, business, health, and interdisciplinary programs.",
            },
            {
                title: "Higher planning intensity",
                text: "Country fit usually depends on admission competitiveness, budget readiness, and how strong the student profile is for top institutions.",
            },
        ],
    },
    "south-america": {
        planningFocus: "Best used as an interest-building route while deeper country content is still being prepared safely.",
        budgetView: "Students should treat this as a consultation-led region until tuition, scholarship, and university details are expanded.",
        supportModel: "The current structure keeps the region polished and route-safe without forcing unfinished destination content.",
        reasons: [
            {
                title: "Prepared for growth",
                text: "Country pages already exist in a clean structure, so later content can be added without changing the information architecture again.",
            },
            {
                title: "No broken routes",
                text: "Students can still express interest, compare placeholders, and move into consultation instead of hitting incomplete pages.",
            },
            {
                title: "Consultation-first guidance",
                text: "For serious interest in South America, direct counselling is currently the safest way to assess feasibility and next steps.",
            },
        ],
    },
    "australia-oceania": {
        planningFocus: "Best for students seeking premium lifestyle destinations, recognised universities, and practical progression planning.",
        budgetView: "Students usually compare tuition, cost of living, and post-study planning while balancing quality and destination appeal.",
        supportModel: "Australia already connects to live project routes, while Oceania can expand later without breaking the subsystem.",
        reasons: [
            {
                title: "Popular destination demand",
                text: "Australia remains a strong option for students seeking trusted universities, practical course choices, and a premium destination experience.",
            },
            {
                title: "Balanced pathways",
                text: "Students often consider Australia and Oceania for business, engineering, computing, health, and applied postgraduate study.",
            },
            {
                title: "Future-ready structure",
                text: "This region now gives students a stable planning journey even when some country-specific pages are intentionally light.",
            },
        ],
    },
};

export default function StudyAbroadCountryPage() {
    const { countrySlug } = useParams<{ countrySlug: string }>();
    const country = countrySlug ? getStudyAbroadCountryBySlug(countrySlug) : undefined;

    if (!country) {
        return <Navigate to="/study-abroad" replace />;
    }

    const isPlaceholder = country.status === "coming-soon";
    const supportCards = country.links?.length
        ? country.links
        : [
              { label: "Book a Consultation", href: "/contact" },
              { label: "Scholarship Guidance", href: "/contact" },
              { label: "Visa Guidance", href: "/contact" },
          ];

    const overview = regionOverviewMap[country.regionSlug] ?? regionOverviewMap.asia;
    const breadcrumbSegments = [
        { label: "Study Abroad", path: "/study-abroad" },
        { label: country.regionName, path: `/study-abroad/${country.regionSlug}` },
        { label: country.name, path: `/study-abroad/${country.slug}` },
    ];

    const snapshotCards = [
        {
            title: "Tuition and living costs",
            text: `We help students compare total budget requirements for ${country.name}, not just headline tuition numbers.`,
            icon: Coins,
        },
        {
            title: "Scholarships and funding",
            text: `Scholarship planning depends on the country, course, institution type, and the student's academic profile.`,
            icon: Sparkles,
        },
        {
            title: "Application and visa guidance",
            text: `Abroadways keeps the journey clearer through documents, shortlist strategy, and visa-focused planning support.`,
            icon: ShieldCheck,
        },
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
                            Study Abroad / {country.regionName} / {country.name}
                        </p>
                        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
                            Study in {country.name} with more clarity, stronger planning, and safer next steps.
                        </h1>
                        <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">{country.description}</p>

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
                                <Link to={`/study-abroad/${country.regionSlug}`}>Back To {country.regionName}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                <Globe2 className="h-5 w-5" />
                            </div>
                            <h2 className="mt-5 text-xl font-semibold text-slate-950">Planning focus</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{overview.planningFocus}</p>
                        </div>
                        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                <Coins className="h-5 w-5" />
                            </div>
                            <h2 className="mt-5 text-xl font-semibold text-slate-950">Budget snapshot</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{overview.budgetView}</p>
                        </div>
                        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h2 className="mt-5 text-xl font-semibold text-slate-950">Support model</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{overview.supportModel}</p>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
                        <div className="rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Country Overview</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Why students consider {country.name}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {isPlaceholder
                                    ? `This ${country.name} page is intentionally light for now, but the route and structure are already prepared for future destination-level expansion.`
                                    : `This page acts as a cleaner planning entry point before students move into university shortlists, course comparisons, scholarships, and application support for ${country.name}.`}
                            </p>
                            <div className="mt-6 space-y-3">
                                <div className="flex items-start gap-3 rounded-[1.1rem] bg-slate-50 p-4">
                                    <GraduationCap className="mt-0.5 h-4.5 w-4.5 shrink-0 text-blue-700" />
                                    <div className="text-sm leading-6 text-slate-600">Destination selection should match budget, academic profile, and long-term goals.</div>
                                </div>
                                <div className="flex items-start gap-3 rounded-[1.1rem] bg-slate-50 p-4">
                                    <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-blue-700" />
                                    <div className="text-sm leading-6 text-slate-600">Abroadways keeps the process structured, realistic, and student-focused from Bangladesh.</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {overview.reasons.map((reason) => (
                                <div key={reason.title} className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                        <BookOpenText className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{reason.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">{reason.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 rounded-[1.8rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
                            {isPlaceholder ? "Placeholder Landing Page" : "Top Universities and Next Steps"}
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                            {isPlaceholder
                                ? `Use ${country.name} as a clean planning entry point for now.`
                                : `Move from ${country.name} planning into live pathways and safe next steps.`}
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            {isPlaceholder
                                ? "Deep country content can be added later without changing the route or information architecture again."
                                : "These pathways use live routes where available and safe consultation routes where deeper content is still being prepared."}
                        </p>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {supportCards.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="group rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-700">
                                        Next Step
                                    </span>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.label}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Move into the most relevant pathway for {country.name} without leaving the Abroadways study abroad flow.
                                </p>
                                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:text-blue-900">
                                    Open pathway
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {snapshotCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-10 rounded-[2rem] bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] p-8 text-white shadow-[0_24px_52px_rgba(11,36,83,0.18)]">
                        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Consultation Block</p>
                                <h2 className="mt-3 text-3xl font-semibold">Need help deciding whether {country.name} is the right fit?</h2>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                                    Abroadways can help you compare destination fit, shortlist safer options, and build a more confident study abroad plan.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                <Button asChild size="xl" className="rounded-full bg-white text-slate-950 hover:bg-blue-50">
                                    <Link to="/contact">Book A Consultation</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="xl"
                                    variant="outline"
                                    className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
                                >
                                    <Link to="/abroadai">Ask AbroadAI</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
