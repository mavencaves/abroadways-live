import { Card, CardContent } from "@/components/ui/card";
import { FileCheck2, GraduationCap, Landmark, Languages, SearchCheck, WalletCards } from "lucide-react";

const services = [
    {
        title: "Study Abroad Counselling",
        description:
            "Clear, profile-based guidance for Bangladeshi students choosing the right country, course, and long-term pathway.",
        icon: GraduationCap,
    },
    {
        title: "University Shortlisting",
        description:
            "Build a realistic shortlist based on tuition, ranking, visa strength, scholarship options, and future employability.",
        icon: SearchCheck,
    },
    {
        title: "Application and SOP Support",
        description:
            "Prepare stronger applications with document review, SOP guidance, timeline planning, and submission support.",
        icon: FileCheck2,
    },
    {
        title: "Scholarship and Budget Planning",
        description:
            "Explore scholarships, tuition strategy, and cost planning for Canada, Europe, the UK, and other destinations.",
        icon: WalletCards,
    },
    {
        title: "Visa Guidance",
        description:
            "Receive structured support for documentation, interview readiness, financial planning, and final visa submission.",
        icon: Landmark,
    },
    {
        title: "Language and Admission Test Support",
        description:
            "Guidance for LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, and SAT aligned with your target destination.",
        icon: Languages,
    },
];

export default function ServicesSection() {
    return (
        <section className="section-shell bg-white">
            <div className="section-container">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div className="section-intro">
                        <p className="section-kicker">Services</p>
                        <h2 className="section-title">
                            Premium support structured around better decisions, not generic counselling.
                        </h2>
                    </div>

                    <div className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_100%)] p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)] md:p-7">
                        <p className="text-base leading-8 text-slate-600">
                            Abroadways combines destination strategy, admissions support, scholarships, visas, and exam
                            planning into one premium student journey designed for Bangladeshi students and parents.
                        </p>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isFeatured = index === 0;

                        return (
                            <Card
                                key={service.title}
                                className={`group overflow-hidden border-slate-200/80 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_52px_rgba(15,23,42,0.10)] ${
                                    isFeatured
                                        ? "bg-[linear-gradient(160deg,#0a214d_0%,#11387f_70%,#1a58c5_100%)] text-white shadow-[0_24px_54px_rgba(8,26,60,0.18)]"
                                        : "bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
                                }`}
                            >
                                <CardContent className="p-7">
                                    <div className="flex items-start justify-between gap-4">
                                        <div
                                            className={`flex h-14 w-14 items-center justify-center rounded-[1.25rem] ${
                                                isFeatured ? "bg-white/12 text-white" : "bg-blue-100 text-blue-700"
                                            }`}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div
                                            className={`h-1.5 w-14 rounded-full ${
                                                isFeatured ? "bg-orange-300/90" : "bg-blue-700"
                                            }`}
                                        />
                                    </div>

                                    <h3 className={`mt-6 text-xl font-semibold ${isFeatured ? "text-white" : "text-slate-950"}`}>
                                        {service.title}
                                    </h3>
                                    <p
                                        className={`mt-3 text-sm leading-7 ${
                                            isFeatured ? "text-blue-100" : "text-slate-600"
                                        }`}
                                    >
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
