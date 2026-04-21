import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle2, MessageCircleMore } from "lucide-react";
import { Link } from "react-router";

const consultationPoints = [
    "Shortlist universities that match your profile and budget.",
    "Understand scholarships, tuition, and admission timelines clearly.",
    "Get practical guidance on SOPs, visas, and English test planning.",
];

export default function FindUniversityCard() {
    return (
        <div
            className="sticky top-24 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg"
            style={{ boxShadow: "0 20px 50px rgba(15, 23, 42, 0.10)" }}
        >
            <div className="bg-[linear-gradient(135deg,#0b2a67_0%,#1747a5_100%)] p-6 text-white">
                <p className="inline-flex rounded-full border border-orange-300/40 bg-orange-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-100">
                    Abroadways Guidance
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                    Find the right university with expert support
                </h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">
                    Speak with Abroadways for tailored advice on higher education abroad, from course selection to visa guidance.
                </p>
            </div>

            <div className="p-6">
                <div className="space-y-4">
                    {consultationPoints.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                            <p className="text-sm leading-6 text-slate-600">{point}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                    <div className="flex items-start gap-3">
                        <MessageCircleMore className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                        <div>
                            <p className="text-sm font-semibold text-slate-900">Need answers right now?</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Use AbroadAI for free study abroad questions on universities, scholarships, and application planning.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 space-y-3">
                    <Button asChild size="xl" className="w-full rounded-full bg-blue-700 hover:bg-blue-800">
                        <Link to="/contact">
                            <CalendarDays className="h-4 w-4" />
                            Book a Consultation
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="xl" className="w-full rounded-full border-blue-200 text-blue-800 hover:bg-blue-50">
                        <Link to="/abroadai">Try AbroadAI Free</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
