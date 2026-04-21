import { ArrowRight, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Course {
    name: string;
    count: string;
    active?: boolean;
}

interface TopCoursesSectionProps {
    courses: Course[];
    mscCourseName: string;
    mscDuration: string;
    onViewAllClick?: () => void;
    onSelectBestCourseClick?: () => void;
}

export default function TopCoursesSection({
    courses,
    mscCourseName,
    mscDuration,
    onViewAllClick,
    onSelectBestCourseClick,
}: TopCoursesSectionProps) {
    return (
        <section className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-8 shadow-sm">
            <div className="mb-7 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-950">Top course pathways</h2>
                <button
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                    onClick={onViewAllClick}
                    type="button"
                >
                    View all
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>

            <div className="mb-7 flex flex-wrap gap-4">
                {courses.map((course) => (
                    <Button
                        size="xl"
                        key={course.name}
                        className={`${course.active ? "bg-blue-700 text-white hover:bg-blue-800" : "border-slate-200 bg-white text-slate-900 hover:bg-blue-50"} rounded-full shadow-sm`}
                    >
                        {course.name}
                        <span className="ml-2 text-base font-bold">{course.count}</span>
                    </Button>
                ))}
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col justify-between rounded-[1.5rem] bg-white p-6 ring-1 ring-slate-200">
                    <div className="mb-6 flex items-center justify-between text-lg font-bold text-slate-950">
                        {mscCourseName}
                        <button className="text-blue-700" type="button">
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex w-fit items-center rounded-xl bg-[linear-gradient(135deg,#0b2453_0%,#123b86_100%)] px-6 py-3 text-lg font-semibold text-white">
                        <Clock3 className="mr-3 h-4 w-4" />
                        {mscDuration}
                    </div>
                </div>

                <button
                    className="flex w-full items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,#0b2453_0%,#123b86_100%)] p-6 text-lg font-semibold text-white transition hover:opacity-95"
                    onClick={onViewAllClick}
                    type="button"
                >
                    Browse all course pathways
                    <ArrowRight className="ml-2 h-4 w-4" />
                </button>
            </div>

            <Button
                variant="outline"
                size="xl"
                className="w-full rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={onSelectBestCourseClick}
            >
                Find the best-fit course
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </section>
    );
}
