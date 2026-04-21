import { Clock } from "lucide-react";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb.tsx";
import React from "react";

export type BreadcrumbSegment = {
    label: string;
    path: string;
};

type BlogHeaderSectionProps = {
    title: string;
    updatedDate?: string;
    customSegments: BreadcrumbSegment[];
    children?: React.ReactNode;
};

export default function BlogHeaderSection({
    title,
    updatedDate,
    customSegments,
    children,
}: BlogHeaderSectionProps) {
    return (
        <section className="bg-white px-4 pb-10 p-4 rounded-xl md:p-8">
            <DynamicBreadcrumb customSegments={customSegments} />

            <h1 className="mt-2 mb-3 font-heading text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                {title}
            </h1>

            {updatedDate && (
                <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    Updated: {updatedDate}
                </div>
            )}

            <div className="space-y-4 text-base leading-relaxed text-gray-800">{children}</div>
        </section>
    );
}
