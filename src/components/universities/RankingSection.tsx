import type { ReactNode } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RankingItem {
    rank: string | number;
    description: string;
}

interface RankingCategory {
    id: string;
    name: string;
    iconUrl?: string;
    icon?: ReactNode;
    items: RankingItem[];
}

interface RankingSectionProps {
    categories: RankingCategory[];
    title?: string;
    onViewAllClick?: () => void;
    onAdmissionClick?: () => void;
}

export default function RankingSection({
    categories,
    title = "Rankings and recognition",
    onViewAllClick,
    onAdmissionClick,
}: RankingSectionProps) {
    return (
        <section className="mx-auto w-full rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-8 shadow-sm">
            <div className="mb-8 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
                <button
                    onClick={onViewAllClick}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                    type="button"
                >
                    View all
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>

            <div className="flex flex-col gap-10">
                {categories.map((category) => (
                    <div key={category.id}>
                        <div className="mb-6 flex items-center gap-4">
                            {category.iconUrl ? (
                                <img
                                    src={category.iconUrl}
                                    alt={category.name}
                                    className="h-10 w-10 rounded-lg object-contain"
                                />
                            ) : (
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                                    {category.icon || <Star className="h-6 w-6 text-blue-700" />}
                                </div>
                            )}
                            <h3 className="text-xl font-semibold text-slate-950">{category.name}</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {category.items.map((item, index) => (
                                <div
                                    key={`${item.rank}-${item.description}-${index}`}
                                    className="rounded-[1.25rem] bg-[linear-gradient(135deg,#0b2453_0%,#123b86_100%)] p-5 font-semibold text-white shadow-[0_16px_36px_rgba(11,36,83,0.18)]"
                                >
                                    <div className="mb-1 text-xl font-bold">{item.rank}</div>
                                    <div className="text-sm text-blue-50">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Button
                variant="outline"
                size="xl"
                className="mt-10 w-full rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={onAdmissionClick}
            >
                Check your admission fit
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </section>
    );
}
