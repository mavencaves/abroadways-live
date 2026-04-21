import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useMemo, useState } from "react";
import { universities } from "@/data/universities.ts";
import { useParams } from "react-router";
import { cityLabel } from "@/lib/higher-education";

interface FilterSidebarProps {
    filters: {
        degree: string[];
        location: string[];
        cities: string[];
        scholarships: boolean;
        rating: number | null;
    };
    onFiltersChange: (filters: FilterSidebarProps["filters"]) => void;
}

export default function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
    const { country } = useParams<{ country: string; city: string }>();
    const [citiesOpen, setCitiesOpen] = useState(true);

    const relevantUniversities = universities.filter((uni) => uni.country === country);

    const cityOptions = useMemo(() => {
        const values = new Set<string>();
        relevantUniversities.forEach((uni) => values.add(uni.city));
        return Array.from(values)
            .map((value) => ({ value, label: cityLabel(value) }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }, [relevantUniversities]);

    const clearAllFilters = () => {
        onFiltersChange({
            ...filters,
            cities: [],
        });
    };

    const handleCityToggle = (cityValue: string) => {
        const updatedCities = filters.cities.includes(cityValue)
            ? filters.cities.filter((item) => item !== cityValue)
            : [...filters.cities, cityValue];

        onFiltersChange({
            ...filters,
            cities: updatedCities,
        });
    };

    return (
        <div className="sticky top-4 w-full max-w-md px-4">
            <Card className="overflow-hidden rounded-[1.5rem] border-slate-200 shadow-sm">
                <CardHeader className="border-b border-slate-200 bg-[linear-gradient(135deg,#0b2453_0%,#123b86_100%)] text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-lg font-medium">
                            <Filter className="h-5 w-5" />
                            Refine Universities
                        </div>
                        {filters.cities.length > 0 && (
                            <button onClick={clearAllFilters} className="text-sm font-medium text-blue-100 hover:text-white">
                                Clear all
                            </button>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="space-y-0 bg-white p-0">
                    {filters.cities.length > 0 && (
                        <div className="border-b border-slate-200 px-5 py-4">
                            <div className="flex flex-wrap gap-2">
                                {filters.cities.map((cityValue) => (
                                    <div
                                        key={cityValue}
                                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800"
                                    >
                                        <span>{cityLabel(cityValue)}</span>
                                        <button onClick={() => handleCityToggle(cityValue)} className="text-blue-500 hover:text-blue-700">
                                            <X className="h-3 w-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="px-5 py-4">
                        <button
                            onClick={() => setCitiesOpen((prev) => !prev)}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-semibold text-slate-950">Cities</span>
                            {citiesOpen ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                        </button>
                        {citiesOpen && (
                            <div className="mt-4 space-y-3">
                                {cityOptions.map((cityOption) => (
                                    <div key={cityOption.value} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={cityOption.value}
                                            checked={filters.cities.includes(cityOption.value)}
                                            onCheckedChange={() => handleCityToggle(cityOption.value)}
                                            className="data-[state=checked]:border-blue-700 data-[state=checked]:bg-blue-700"
                                        />
                                        <label htmlFor={cityOption.value} className="cursor-pointer select-none text-sm text-slate-700">
                                            {cityOption.label}
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
