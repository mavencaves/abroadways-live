import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
    className?: string;
    compact?: boolean;
}

export default function TrustBadge({ className, compact = false }: TrustBadgeProps) {
    return (
        <span
            className={cn(
                "trust-badge-premium min-w-0 max-w-full leading-none",
                compact ? "min-h-7 px-2.5 py-1.5 text-[10.5px] tracking-[0.16em]" : "",
                className,
            )}
        >
            <BadgeCheck className={cn("shrink-0 text-orange-300", compact ? "h-3.5 w-3.5" : "h-4 w-4")} />
            UKVI Approved LanguageCert Test Centre
        </span>
    );
}
