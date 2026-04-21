import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SearchStats from "@/components/usa-masters/SearchStats.tsx";
import UniversityCard from "@/components/usa-masters/UniversityCard.tsx";
import FilterSidebar from "@/components/usa-masters/FilterSidebar.tsx";
import ExploreCoursesSection from "@/components/usa-masters/ExploreCoursesSection.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import StudyOptionsAccordion from "@/components/usa-masters/StudyOptionsAccordion.tsx";
import { ArticleCard } from "@/components/digest/ArticleCard.tsx";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { universities } from "@/data/universities.ts";
import { useParams } from "react-router";
import { cityLabel, countryLabel, locationLabel } from "@/lib/higher-education";

interface FilterState {
    degree: string[];
    location: string[];
    cities: string[];
    scholarships: boolean;
    rating: number | null;
}

type UniversityParams = {
    country: string;
    city: string;
};

const faqs = [
    {
        id: "faq1",
        question: "How do I shortlist the right universities in this destination?",
        answer: (
            <p className="text-sm leading-7 text-slate-600">
                Start with your academic background, budget, target course, and long-term goals. Then compare ranking,
                tuition, location, scholarship possibilities, and English language requirements before creating a final shortlist.
            </p>
        ),
    },
    {
        id: "faq2",
        question: "Should I choose universities by ranking only?",
        answer: (
            <p className="text-sm leading-7 text-slate-600">
                Ranking matters, but it should not be the only factor. Course quality, location, affordability, student
                support, visa alignment, and future employability are often just as important.
            </p>
        ),
    },
    {
        id: "faq3",
        question: "How important is IELTS or other English test performance for admission?",
        answer: (
            <p className="text-sm leading-7 text-slate-600">
                English test requirements remain important for most international pathways. The exact score depends on
                the country, university, and course you want to apply for.
            </p>
        ),
    },
];

const educationArticlesData = [
    {
        id: 1,
        title: "How to compare universities before applying abroad",
        date: "April 19, 2026",
        readTime: "5 min read",
        image: "/images/article1.jpg",
        category: "University Planning",
        excerpt: "A practical framework for comparing tuition, ranking, location, scholarships, and long-term fit.",
    },
    {
        id: 2,
        title: "Questions students should ask before finalising a university shortlist",
        date: "April 19, 2026",
        readTime: "4 min read",
        image: "/images/article2.jpg",
        category: "Shortlisting",
        excerpt: "Use these questions to build a smarter and more realistic international study plan.",
    },
    {
        id: 3,
        title: "What students from Bangladesh should check before applying internationally",
        date: "April 19, 2026",
        readTime: "5 min read",
        image: "/images/article4.jpg",
        category: "Admissions Strategy",
        excerpt: "A clean overview of admission fit, finances, English test readiness, and visa preparation.",
    },
];

export default function TopUniversities() {
    const { country, city } = useParams<UniversityParams>();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState<FilterState>({
        degree: [],
        location: [],
        cities: [],
        scholarships: false,
        rating: null,
    });

    useEffect(() => {
        if (city) {
            setSelectedFilters((prev) => ({
                ...prev,
                cities: [city],
            }));
        }
    }, [city]);

    const filteredUniversities = useMemo(() => {
        let filtered = universities;

        if (country) {
            filtered = filtered.filter((university) => university.country === country);
        }

        if (selectedFilters.cities.length > 0) {
            filtered = filtered.filter((university) => selectedFilters.cities.includes(university.city));
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (university) =>
                    university.name.toLowerCase().includes(query) ||
                    university.englishName.toLowerCase().includes(query),
            );
        }

        return filtered;
    }, [country, selectedFilters.cities, searchQuery]);

    if (!country || !city) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <p className="text-slate-500">Destination information could not be found.</p>
            </div>
        );
    }

    const pageTitle = `Top universities in ${locationLabel(city, country)} for international students`;
    const breadcrumbSegments = [
        { label: "Study Abroad", path: "/study-abroad" },
        { label: countryLabel(country), path: `/study-abroad/${country}` },
        { label: locationLabel(city, country), path: `/study-abroad/${country}/cities/${city}` },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 pt-6">
                <DynamicBreadcrumb customSegments={breadcrumbSegments} />
            </div>

            <section className="bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-14 text-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                            Study Abroad / {countryLabel(country)}
                        </p>
                        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{pageTitle}</h1>
                        <p className="mt-4 max-w-3xl text-base leading-8 text-blue-100">
                            Explore university options, compare admissions signals, and narrow down a shortlist that fits
                            your academic goals, budget, and study abroad plan.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <FilterSidebar filters={selectedFilters} onFiltersChange={setSelectedFilters} />
                    </div>

                    <div className="lg:col-span-3">
                        <div className="mb-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex flex-col gap-3 xl:flex-row">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
                                    <Input
                                        type="text"
                                        placeholder={`Search universities in ${cityLabel(city)}`}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="h-12 rounded-xl border-slate-200 pl-10"
                                    />
                                </div>
                                <Select>
                                    <SelectTrigger className="h-12 w-full rounded-xl border-slate-200 xl:w-52">
                                        <SelectValue placeholder="Sort: Recommended" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="recommended">Recommended</SelectItem>
                                        <SelectItem value="ranking">Best ranking first</SelectItem>
                                        <SelectItem value="fees">Lower tuition first</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <SearchStats totalResults={filteredUniversities.length} />

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                            {filteredUniversities.map((university) => (
                                <UniversityCard key={university.id} university={university} />
                            ))}
                        </div>

                        <div className="my-10 flex items-center justify-center gap-6">
                            <Button size="xl" variant="outline" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                            </Button>
                            <p className="text-lg font-semibold text-slate-950">1</p>
                            <Button size="xl" variant="outline" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50">
                                Next
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        <ExploreCoursesSection />

                        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8">
                            {educationArticlesData.map((article) => (
                                <div key={article.id} className="flex">
                                    <ArticleCard article={article} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <FAQAccordion
                title="Common questions students ask about university selection"
                data={faqs}
                className="rounded-xl md:p-8"
            />
            <div className="container mx-auto px-4 pb-12">
                <StudyOptionsAccordion />
            </div>
        </div>
    );
}
