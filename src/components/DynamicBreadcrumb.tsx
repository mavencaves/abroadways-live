import {BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router";
import React from "react";
import type {BreadcrumbSegment} from "@/components/ielts/blog-header.tsx";

const exactPathAliases: Record<string, string> = {
    "/higher-education": "/study-abroad",
    "/study-abroad/exams": "/exams/overview",
    "/study-abroad/exams/ielts": "/exams/ielts/overview",
    "/study-abroad/exams/ielts/booklist": "/resources/books/ielts",
    "/study-abroad/exams/ielts/syllabus-pattern": "/exams/ielts/syllabus",
    "/study-abroad/exams/gre": "/exams/gre/overview",
    "/study-abroad/exams/gre/books": "/resources/books/gre",
    "/study-abroad/exams/gre/syllabus-pattern": "/exams/gre/syllabus",
    "/study-abroad/exams/sat": "/exams/sat/preparation",
    "/study-abroad/exams/pte": "/exams/pte/overview",
    "/study-abroad/exams/pte/books": "/resources/books/pte",
    "/study-abroad/exams/toefl": "/exams/toefl/overview",
    "/study-abroad/exams/toefl/results": "/exams/toefl/result",
};

const preferredLabels: Record<string, string> = {
    "/study-abroad": "Study Abroad",
    "/study-abroad/asia": "Asia",
    "/study-abroad/europe": "Europe",
    "/study-abroad/north-america": "North America",
    "/study-abroad/south-america": "South America",
    "/study-abroad/australia-oceania": "Australia / Oceania",
    "/exams": "Exams",
    "/exams/overview": "Exams",
    "/exams/ielts": "IELTS",
    "/exams/ielts/overview": "IELTS",
    "/exams/ielts/types": "IELTS Types",
    "/exams/ielts/eligibility": "IELTS Eligibility",
    "/exams/ielts/registration": "IELTS Registration",
    "/exams/ielts/results": "IELTS Results",
    "/exams/ielts/syllabus": "IELTS Syllabus",
    "/exams/ielts/slot-booking": "IELTS Slot Booking",
    "/resources/books/ielts": "IELTS Books",
    "/exams/gre": "GRE",
    "/exams/gre/overview": "GRE",
    "/exams/gre/registration": "GRE Registration",
    "/exams/gre/syllabus": "GRE Syllabus",
    "/exams/gre/slot-booking": "GRE Slot Booking",
    "/exams/gre/preparation": "GRE Preparation",
    "/resources/books/gre": "GRE Books",
    "/exams/toefl": "TOEFL",
    "/exams/toefl/overview": "TOEFL",
    "/exams/toefl/registration": "TOEFL Registration",
    "/exams/toefl/syllabus": "TOEFL Syllabus",
    "/exams/toefl/preparation": "TOEFL Preparation",
    "/exams/toefl/result": "TOEFL Results",
    "/exams/pte": "PTE",
    "/exams/pte/overview": "PTE",
    "/resources/books/pte": "PTE Books",
    "/exams/sat": "SAT",
    "/exams/sat/preparation": "SAT Preparation",
    "/exams/sat/eligibility": "SAT Eligibility",
    "/exams/sat/registration": "SAT Registration",
    "/exams/sat/syllabus": "SAT Syllabus",
    "/resources": "Resources",
    "/resources/sop": "SOP Support",
    "/resources/eligibility": "Eligibility Checker",
    "/about": "About Us",
    "/contact": "Contact",
    "/abroadai": "AbroadAI",
    "/abroadways-ai": "AbroadAI",
    "/blog": "Blog",
    "/event": "Event",
};

const normalizeLegacyPath = (pathname: string) => {
    const normalizedPath = pathname.toLowerCase();
    if (exactPathAliases[normalizedPath]) {
        return exactPathAliases[normalizedPath];
    }

    if (normalizedPath.startsWith("/study-abroad/exams/ielts/")) {
        return normalizedPath.replace("/study-abroad/exams/ielts", "/exams/ielts");
    }

    if (normalizedPath.startsWith("/study-abroad/exams/gre/")) {
        const suffix = normalizedPath.replace("/study-abroad/exams/gre/", "");
        const supportedGreRoutes = new Set(["registration", "syllabus", "slot-booking", "preparation"]);
        return supportedGreRoutes.has(suffix) ? `/exams/gre/${suffix}` : "/exams/gre/overview";
    }

    if (normalizedPath.startsWith("/study-abroad/exams/toefl/")) {
        const suffix = normalizedPath.replace("/study-abroad/exams/toefl/", "");
        const supportedToeflRoutes: Record<string, string> = {
            registration: "/exams/toefl/registration",
            syllabus: "/exams/toefl/syllabus",
            preparation: "/exams/toefl/preparation",
            result: "/exams/toefl/result",
            results: "/exams/toefl/result",
        };

        return supportedToeflRoutes[suffix] ?? "/exams/toefl/overview";
    }

    if (normalizedPath.startsWith("/study-abroad/exams/sat/")) {
        const suffix = normalizedPath.replace("/study-abroad/exams/sat/", "");
        const supportedSatRoutes = new Set(["preparation", "eligibility", "registration", "syllabus"]);
        return supportedSatRoutes.has(suffix) ? `/exams/sat/${suffix}` : "/exams/sat/preparation";
    }

    if (normalizedPath.startsWith("/study-abroad/exams/pte/")) {
        return "/exams/pte/overview";
    }

    if (normalizedPath.startsWith("/study-abroad/exams/duolingo/")) {
        const suffix = normalizedPath.replace("/study-abroad/exams/duolingo/", "");
        const supportedDuolingoRoutes = new Set(["fees", "preparation", "sample", "syllabus"]);
        return supportedDuolingoRoutes.has(suffix) ? `/exams/duolingo/${suffix}` : "/exams/duolingo/preparation";
    }

    return pathname;
};

const toTitleCase = (value: string) =>
    value
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

const getPreferredLabel = (label: string, path: string) => {
    if (preferredLabels[path]) {
        return preferredLabels[path];
    }

    if (label.includes("à")) {
        const pathLabel = path.split("/").filter(Boolean).at(-1);
        return pathLabel ? toTitleCase(pathLabel) : label;
    }

    return label;
};

const getPathSegments = (pathname: string): BreadcrumbSegment[] => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.map((seg, idx) => ({
        label: getPreferredLabel(
            decodeURIComponent(toTitleCase(seg)),
            normalizeLegacyPath("/" + segments.slice(0, idx + 1).join("/")),
        ),
        path: normalizeLegacyPath("/" + segments.slice(0, idx + 1).join("/")),
    }));
};

type DynamicBreadcrumbProps = {
    customSegments?: BreadcrumbSegment[];
};

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({ customSegments }) => {
    const { pathname } = useLocation();
    const segments = (customSegments || getPathSegments(pathname)).map((segment) => {
        const normalizedPath = normalizeLegacyPath(segment.path);

        return {
            ...segment,
            label: getPreferredLabel(segment.label, normalizedPath),
            path: normalizedPath,
        };
    });

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center space-x-1 text-base font-medium text-gray-600">
                <li>
                    <Link to="/" className="hover:underline">Home</Link>
                </li>
                {segments.map((seg, idx) => (
                    <React.Fragment key={seg.path}>
                        <li>
                            <BreadcrumbSeparator className="mx-2 text-gray-400">/</BreadcrumbSeparator>
                        </li>
                        <li>
                            {idx === segments.length - 1 ? (
                                <span className="font-bold text-gray-900">{seg.label}</span>
                            ) : (
                                <Link to={seg.path} className="hover:underline">
                                    {seg.label}
                                </Link>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default DynamicBreadcrumb;
