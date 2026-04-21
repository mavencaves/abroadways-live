import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Intake {
    date: string;
    status: string;
}

interface IntakeSectionProps {
    intakes: Intake[];
    title?: string;
    onViewAllClick?: () => void;
    onFindBestIntakeClick?: () => void;
}

export default function IntakeSection({
    intakes,
    title = "Intake and application timelines",
    onViewAllClick,
    onFindBestIntakeClick,
}: IntakeSectionProps) {
    return (
        <section className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-8 shadow-sm">
            <div className="mb-7 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
                <button
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                    type="button"
                    onClick={onViewAllClick}
                >
                    View all
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>

            <div className="mb-8 flex flex-col gap-6">
                {intakes.map((intake) => (
                    <div
                        key={intake.date}
                        className="flex items-center justify-between rounded-[1.25rem] bg-white p-5 text-lg font-semibold ring-1 ring-slate-200"
                    >
                        <span className="text-slate-950">{intake.date}</span>
                        <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm text-emerald-800">
                            {intake.status}
                        </span>
                    </div>
                ))}
            </div>

            <Button
                variant="outline"
                size="xl"
                onClick={onFindBestIntakeClick}
                className="w-full rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
            >
                Find the best intake for your plan
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </section>
    );
}
