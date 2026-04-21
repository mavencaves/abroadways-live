import { useState } from "react";
import { ChevronDown } from "lucide-react";

const courses = [
    "Accounting",
    "Aerospace Engineering",
    "Artificial Intelligence and Machine Learning",
    "Architecture",
    "Banking and Finance",
    "Biological Sciences",
    "Biomedical Engineering",
    "Business Analytics",
    "Computer Science",
    "Data Science",
    "Environmental Science",
    "International Relations",
    "Law",
    "Public Health",
];

export default function StudyOptionsAccordion() {
    const [open, setOpen] = useState(true);

    return (
        <section className="container mx-auto rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <button
                className="mb-4 flex w-full items-center justify-between text-lg font-semibold text-slate-950 focus:outline-none"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
            >
                Explore more study options
                <ChevronDown className={`h-5 w-5 text-blue-700 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {courses.map((course) => (
                        <div key={course} className="rounded-xl bg-slate-50 px-4 py-3 font-medium text-slate-900 ring-1 ring-slate-200">
                            {course}
                        </div>
                    ))}
                    <div className="col-span-2 flex items-center md:col-span-1 lg:col-span-1">
                        <button className="flex items-center gap-1 font-semibold text-blue-700 hover:underline">
                            View more pathways
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
