import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EligibilityConditionSectionProps {
    title?: string;
    conditions: { label: string }[];
    onViewAllClick?: () => void;
    onAddClick?: () => void;
}

export default function EligibilityConditionSection({
    title = "Admission requirements",
    conditions,
    onViewAllClick,
    onAddClick,
}: EligibilityConditionSectionProps) {
    return (
        <section className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-8 shadow-sm">
            <div className="mb-7 flex items-center justify-between">
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

            {conditions.map((condition) => (
                <div
                    key={condition.label}
                    className="mb-6 flex items-center justify-between rounded-[1.25rem] bg-white p-7 text-xl font-semibold ring-1 ring-slate-200 last:mb-0"
                >
                    <span className="text-slate-950">{condition.label}</span>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full bg-blue-700 text-2xl text-white hover:bg-blue-800"
                        onClick={onAddClick}
                        aria-label="Explore requirement"
                    >
                        <Plus />
                    </Button>
                </div>
            ))}
        </section>
    );
}
