import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SearchStats from "@/components/usa-masters/SearchStats.tsx";
import UniversityCard from "@/components/usa-masters/UniversityCard.tsx";
import ExploreCoursesSection from "@/components/usa-masters/ExploreCoursesSection.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import StudyOptionsAccordion from "@/components/usa-masters/StudyOptionsAccordion.tsx";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { useParams } from "react-router";
import { mastersUniversities } from "@/data/masters.ts";
import MastersFilterSidebar from "@/components/MastersFilterSidebar.tsx";
import { courseLabel, countryLabel } from "@/lib/higher-education";

interface MastersFilterState {
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
}

type CoursesParams = {
    country: string;
    course: string;
};

const getCourseFAQs = (country: string, course: string) => [
    {
        id: "faq1",
        question: `How do I choose the right ${courseLabel(course)} programs in ${countryLabel(country)}?`,
        answer: (
            <p className="text-sm leading-7 text-slate-600">
                Compare ranking, tuition, course modules, location, scholarship potential, and career outcomes. The
                right program is the one that fits your profile and long-term direction, not just the highest ranking.
            </p>
        ),
    },
    {
        id: "faq2",
        question: `What should I check before applying for ${courseLabel(course)}?`,
        answer: (
            <p className="text-sm leading-7 text-slate-600">
                Review academic eligibility, English language requirements, intake timing, tuition, and whether the
                university matches your budget and visa pathway.
            </p>
        ),
    },
    {
        id: "faq3",
        question: `Can scholarships reduce the cost of ${courseLabel(course)} abroad?`,
        answer: (
            <p className="text-sm leading-7 text-slate-600">
                Yes. Many universities offer merit-based or department-level support. Scholarship availability varies by
                destination, program, and academic profile.
            </p>
        ),
    },
];

export default function TopMastersCourses() {
    const { country, course } = useParams<CoursesParams>();
    const [searchQuery, setSearchQuery] = useState("");
    const [resultsPerPage, setResultsPerPage] = useState("50");
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedFilters, setSelectedFilters] = useState<MastersFilterState>({
        degree: [],
        subject: [],
        courses: [],
        cities: [],
        duration: [],
        admissionSession: [],
        scholarships: false,
        rating: null,
        qsRanking: [],
        tuitionRange: [],
    });

    useEffect(() => {
        if (course) {
            setSelectedFilters((prev) => ({
                ...prev,
                courses: [course],
            }));
        }
    }, [country, course]);

    const filteredUniversities = useMemo(() => {
        let filtered = mastersUniversities;

        if (country) {
            filtered = filtered.filter((university) => university.country === country);
        }

        if (selectedFilters.courses.length > 0) {
            filtered = filtered.filter((university) =>
                selectedFilters.courses.some((selectedCourse) => university.courses.includes(selectedCourse)),
            );
        }

        if (selectedFilters.cities.length > 0) {
            filtered = filtered.filter((university) => selectedFilters.cities.includes(university.city));
        }

        if (selectedFilters.qsRanking.length > 0) {
            filtered = filtered.filter((university) => {
                const rank = typeof university.qsRank === "number" ? university.qsRank : 999;
                return selectedFilters.qsRanking.some((range) => {
                    switch (range) {
                        case "1-10":
                            return rank >= 1 && rank <= 10;
                        case "11-50":
                            return rank >= 11 && rank <= 50;
                        case "51-100":
                            return rank >= 51 && rank <= 100;
                        case "101-200":
                            return rank >= 101 && rank <= 200;
                        case "201-500":
                            return rank >= 201 && rank <= 500;
                        case "500+":
                            return rank > 500 || typeof university.qsRank === "string";
                        default:
                            return false;
                    }
                });
            });
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (university) =>
                    university.name.toLowerCase().includes(query) ||
                    university.englishName.toLowerCase().includes(query),
            );
        }

        return filtered.sort((a, b) => {
            const rankA = typeof a.qsRank === "number" ? a.qsRank : 999999;
            const rankB = typeof b.qsRank === "number" ? b.qsRank : 999999;
            return rankA - rankB;
        });
    }, [country, selectedFilters, searchQuery]);

    const itemsPerPage = parseInt(resultsPerPage, 10);
    const totalPages = Math.max(1, Math.ceil(filteredUniversities.length / itemsPerPage));
    const paginatedUniversities = filteredUniversities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilters, searchQuery]);

    if (!country || !course) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <p className="text-slate-500">Course information could not be found.</p>
            </div>
        );
    }

    const breadcrumbSegments = [
        { label: "Study Abroad", path: "/study-abroad" },
        { label: countryLabel(country), path: `/study-abroad/${country}` },
        { label: courseLabel(course), path: `/study-abroad/${country}/courses/${course}` },
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
                            Study Abroad / {countryLabel(country)} / Courses
                        </p>
                        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                            Top {courseLabel(course)} programs in {countryLabel(country)}
                        </h1>
                        <p className="mt-4 max-w-3xl text-base leading-8 text-blue-100">
                            Compare programs, shortlist universities, and review admissions factors for students planning
                            higher education abroad through Abroadways.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <MastersFilterSidebar filters={selectedFilters} onFiltersChange={setSelectedFilters} />
                    </div>

                    <div className="lg:col-span-3">
                        <div className="mb-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex flex-col gap-3 xl:flex-row">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
                                    <Input
                                        type="text"
                                        placeholder={`Search universities for ${courseLabel(course)}`}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="h-12 rounded-xl border-slate-200 pl-10"
                                    />
                                </div>
                                <Select value={resultsPerPage} onValueChange={setResultsPerPage}>
                                    <SelectTrigger className="h-12 w-full rounded-xl border-slate-200 xl:w-56">
                                        <SelectValue placeholder={`${filteredUniversities.length} results`} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="10">10 results</SelectItem>
                                        <SelectItem value="25">25 results</SelectItem>
                                        <SelectItem value="50">50 results</SelectItem>
                                        <SelectItem value="100">100 results</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="mb-6 rounded-[1.5rem] border border-blue-100 bg-[linear-gradient(135deg,#eef5ff_0%,#f8fbff_100%)] p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-slate-950">
                                {selectedFilters.courses.length > 1
                                    ? `${selectedFilters.courses.length} course options selected`
                                    : `${courseLabel(course)} program focus`}
                            </h2>
                            <p className="mt-3 leading-8 text-slate-600">
                                {selectedFilters.courses.length > 1
                                    ? `You are comparing multiple course pathways. The universities below offer one or more of your selected options.`
                                    : `This page highlights university options related to ${courseLabel(course)} in ${countryLabel(country)} with a more structured, student-friendly comparison view.`}
                            </p>
                        </div>

                        <SearchStats totalResults={filteredUniversities.length} />

                        {paginatedUniversities.length > 0 ? (
                            <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                                {paginatedUniversities.map((university) => (
                                    <UniversityCard key={university.id} university={university} />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
                                No universities matched your current filters.
                            </div>
                        )}

                        <div className="my-10 flex items-center justify-center gap-6">
                            <Button
                                size="xl"
                                variant="outline"
                                className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                            </Button>
                            <p className="text-lg font-semibold text-slate-950">
                                {currentPage} / {totalPages}
                            </p>
                            <Button
                                size="xl"
                                variant="outline"
                                className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
                                disabled={currentPage >= totalPages}
                                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                            >
                                Next
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        <ExploreCoursesSection />
                    </div>
                </div>
            </div>

            <FAQAccordion
                title={`Questions about studying ${courseLabel(course)} in ${countryLabel(country)}`}
                data={getCourseFAQs(country, course)}
                className="rounded-xl md:p-8"
            />
            <div className="container mx-auto px-4 pb-12">
                <StudyOptionsAccordion />
            </div>
        </div>
    );
}
