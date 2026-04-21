import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { mastersUniversities } from "@/data/masters.ts";
import { cityLabel, countryLabel, courseLabel } from "@/lib/higher-education";

interface MastersFilterSidebarProps {
    filters: {
        degree: string[];
        subject: string[];
        courses: string[];
        cities: string[];
        duration: string[];
        admissionSession: string[];
        scholarships: boolean;
        rating: number | null;
        qsRanking: string[];
        tuitionRange: string[];
    };
    onFiltersChange: (filters: MastersFilterSidebarProps["filters"]) => void;
}

export default function MastersFilterSidebar({ filters, onFiltersChange }: MastersFilterSidebarProps) {
    const { country, course } = useParams<{ country: string; course: string }>();
    const [openSections, setOpenSections] = useState({
        courses: true,
        cities: true,
        qsRanking: false,
        tuitionRange: false,
    });

    const relevantUniversities = useMemo(() => {
        if (country) {
            return mastersUniversities.filter((uni) => uni.country === country);
        }
        return mastersUniversities;
    }, [country]);

    const courseOptions = useMemo(() => {
        const availableCourses = new Set<string>();
        relevantUniversities.forEach((uni) => uni.courses.forEach((courseId) => availableCourses.add(courseId)));
        return Array.from(availableCourses)
            .map((courseId) => ({ id: courseId, label: courseLabel(courseId) }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }, [relevantUniversities]);

    const cityOptions = useMemo(() => {
        const availableCities = new Set<string>();
        relevantUniversities.forEach((uni) => availableCities.add(uni.city));
        return Array.from(availableCities)
            .map((city) => ({ id: city, label: cityLabel(city) }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }, [relevantUniversities]);

    const qsRankingOptions = [
        { id: "1-10", label: "Top 1-10" },
        { id: "11-50", label: "Top 11-50" },
        { id: "51-100", label: "Top 51-100" },
        { id: "101-200", label: "Top 101-200" },
        { id: "201-500", label: "Top 201-500" },
        { id: "500+", label: "500+" },
    ];

    const tuitionRangeOptions = [
        { id: "0-30", label: "0-30 lakh BDT" },
        { id: "31-50", label: "31-50 lakh BDT" },
        { id: "51-70", label: "51-70 lakh BDT" },
        { id: "71-100", label: "71-100 lakh BDT" },
        { id: "100+", label: "100+ lakh BDT" },
    ];

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const handleFilterToggle = (filterType: keyof MastersFilterSidebarProps["filters"], value: string) => {
        if (filterType === "scholarships" || filterType === "rating") return;
        const currentValues = filters[filterType] as string[];
        const updatedValues = currentValues.includes(value)
            ? currentValues.filter((item) => item !== value)
            : [...currentValues, value];

        onFiltersChange({
            ...filters,
            [filterType]: updatedValues,
        });
    };

    const clearAllFilters = () => {
        onFiltersChange({
            degree: [],
            subject: [],
            courses: course ? [course] : [],
            cities: [],
            duration: [],
            admissionSession: [],
            scholarships: false,
            rating: null,
            qsRanking: [],
            tuitionRange: [],
        });
    };

    const activeFilters = [
        ...filters.courses.filter((item) => item !== course).map((value) => ({ type: "courses", value, label: courseLabel(value) })),
        ...filters.cities.map((value) => ({ type: "cities", value, label: cityLabel(value) })),
        ...filters.qsRanking.map((value) => ({
            type: "qsRanking",
            value,
            label: qsRankingOptions.find((item) => item.id === value)?.label || value,
        })),
        ...filters.tuitionRange.map((value) => ({
            type: "tuitionRange",
            value,
            label: tuitionRangeOptions.find((item) => item.id === value)?.label || value,
        })),
    ];

    const hasActiveFilters = activeFilters.length > 0;

    const removeFilter = (filterType: string, value: string) => {
        const currentValues = filters[filterType as keyof typeof filters] as string[];
        onFiltersChange({
            ...filters,
            [filterType]: currentValues.filter((item) => item !== value),
        });
    };

    return (
        <div className="sticky top-4 w-full max-w-md px-4">
            <Card className="overflow-hidden rounded-[1.5rem] border-slate-200 shadow-sm">
                <CardHeader className="border-b border-slate-200 bg-[linear-gradient(135deg,#0b2453_0%,#123b86_100%)] text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-lg font-medium">
                            <Filter className="h-5 w-5" />
                            Refine Programs
                        </div>
                        {hasActiveFilters && (
                            <button onClick={clearAllFilters} className="text-sm font-medium text-blue-100 hover:text-white">
                                Clear all
                            </button>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="space-y-0 bg-white p-0">
                    {country && (
                        <div className="border-b border-slate-200 px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                            {countryLabel(country)}
                        </div>
                    )}

                    {hasActiveFilters && (
                        <div className="border-b border-slate-200 px-5 py-4">
                            <div className="flex flex-wrap gap-2">
                                {activeFilters.map((filter) => (
                                    <div
                                        key={`${filter.type}-${filter.value}`}
                                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800"
                                    >
                                        <span>{filter.label}</span>
                                        <button onClick={() => removeFilter(filter.type, filter.value)} className="text-blue-500 hover:text-blue-700">
                                            <X className="h-3 w-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="border-b border-slate-200 px-5 py-4">
                        <button onClick={() => toggleSection("courses")} className="flex w-full items-center justify-between text-left">
                            <span className="text-base font-semibold text-slate-950">Courses</span>
                            {openSections.courses ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                        </button>
                        {openSections.courses && (
                            <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
                                {courseOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.courses.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle("courses", option.id)}
                                            className="data-[state=checked]:border-blue-700 data-[state=checked]:bg-blue-700"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm text-slate-700">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="border-b border-slate-200 px-5 py-4">
                        <button onClick={() => toggleSection("cities")} className="flex w-full items-center justify-between text-left">
                            <span className="text-base font-semibold text-slate-950">Cities</span>
                            {openSections.cities ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                        </button>
                        {openSections.cities && (
                            <div className="mt-4 max-h-48 space-y-3 overflow-y-auto">
                                {cityOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.cities.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle("cities", option.id)}
                                            className="data-[state=checked]:border-blue-700 data-[state=checked]:bg-blue-700"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm text-slate-700">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="border-b border-slate-200 px-5 py-4">
                        <button onClick={() => toggleSection("qsRanking")} className="flex w-full items-center justify-between text-left">
                            <span className="text-base font-semibold text-slate-950">QS Ranking</span>
                            {openSections.qsRanking ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                        </button>
                        {openSections.qsRanking && (
                            <div className="mt-4 space-y-3">
                                {qsRankingOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.qsRanking.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle("qsRanking", option.id)}
                                            className="data-[state=checked]:border-blue-700 data-[state=checked]:bg-blue-700"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm text-slate-700">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="px-5 py-4">
                        <button onClick={() => toggleSection("tuitionRange")} className="flex w-full items-center justify-between text-left">
                            <span className="text-base font-semibold text-slate-950">Tuition Range</span>
                            {openSections.tuitionRange ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                        </button>
                        {openSections.tuitionRange && (
                            <div className="mt-4 space-y-3">
                                {tuitionRangeOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.tuitionRange.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle("tuitionRange", option.id)}
                                            className="data-[state=checked]:border-blue-700 data-[state=checked]:bg-blue-700"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm text-slate-700">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
