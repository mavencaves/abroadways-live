import { ExamScheduleCard } from "@/components/exams/exam-schedule-card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const exams = [
    {
        image: "/images/exams/cover1.png",
        title: "LanguageCert UKVI",
        subtitle: "A strong option for students who need a UKVI-approved English testing pathway.",
        date: "Flexible booking",
        time: "Based on available slots",
        duration: "Fast, student-friendly test experience",
        location: "Official LanguageCert test pathway",
        fee: "Contact for the latest fee",
        seatType: "Support available before booking",
        venue: "Dhaka, Bangladesh",
        linkLabel: "Contact Abroadways",
        href: "/contact",
    },
    {
        image: "/images/exams/cover2.png",
        title: "IELTS Academic",
        subtitle: "A popular English proficiency test for university and visa-related applications.",
        date: "Multiple dates available",
        time: "Morning and selected sessions",
        duration: "Score timeline varies by test format",
        location: "Computer-based and other accepted formats",
        fee: "Check the latest official pricing",
        seatType: "Planning support available",
        venue: "Dhaka and selected centres",
        linkLabel: "View IELTS Overview",
        href: "/exams/ielts/overview",
    },
    {
        image: "/images/exams/cover3.png",
        title: "Duolingo English Test",
        subtitle: "A flexible online option for students comparing convenience, cost, and university acceptance.",
        date: "Available online",
        time: "Choose your suitable time",
        duration: "Fast completion and score turnaround",
        location: "Online from an approved setup",
        fee: "Generally lower-cost than many alternatives",
        seatType: "Good for flexible planning",
        venue: "Online",
        linkLabel: "View Duolingo Guide",
        href: "/exams/duolingo/preparation",
    },
];

export default function UpcomingExamSection() {
    return (
        <section className="container mx-auto max-w-7xl px-4 py-18 sm:px-0">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Exam Planning</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
                    Compare popular test options before you book.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                    These cards are designed to help students quickly compare format, flexibility, and planning support.
                </p>
            </div>
            <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                {exams.map((exam) => (
                    <ExamScheduleCard key={exam.title} {...exam} />
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <Button asChild size="xl" variant="outline" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50">
                    <Link to="/resources">
                        Explore More Resources
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
