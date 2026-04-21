import { Link } from "react-router";

type NextStepCardProps = {
    title: string;
    href: string;
};

function NextStepCard({ title, href }: NextStepCardProps) {
    return (
        <Link
            to={href}
            className="flex min-w-[230px] w-full max-w-xs flex-col justify-between rounded-xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
        >
            <div className="mb-4 text-xl font-semibold text-black">{title}</div>
            <div className="mt-auto">
                <span className="inline-flex items-center gap-1 text-base font-semibold text-blue-600 hover:underline">
                    Read now
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="inline">
                        <path
                            d="M5 12h14M12 5l7 7-7 7"
                            stroke="#2563eb"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </Link>
    );
}

const ieltsNextSteps = [
    { title: "IELTS Exam Types", href: "/exams/ielts/types" },
    { title: "IELTS Eligibility", href: "/exams/ielts/eligibility" },
    { title: "IELTS Results and Band Scores", href: "/exams/ielts/results" },
];

interface NextStepsSectionProps {
    nextSteps?: { title: string; href: string }[];
}

export default function NextStepsSection({ nextSteps = ieltsNextSteps }: NextStepsSectionProps) {
    return (
        <section className="mx-auto my-8 rounded-xl bg-white p-4">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">Next Steps</h2>
            <div className="flex flex-col gap-5 md:flex-row">
                {nextSteps.map(({ title, href }) => (
                    <NextStepCard key={title} title={title} href={href} />
                ))}
            </div>
        </section>
    );
}
