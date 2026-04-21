import { Button } from "@/components/ui/button.tsx";

const features = [
    {
        title: "Smarter planning for student budgets",
        description:
            "Get clearer visibility on funding paths, repayment expectations, and practical cost planning before you commit.",
    },
    {
        title: "Simple digital-first process",
        description:
            "Reduce friction with a smoother enquiry flow and structured support that helps students move faster with less confusion.",
    },
    {
        title: "Guidance beyond the application",
        description:
            "Abroadways supports the wider study abroad journey with counselling, destination planning, and next-step clarity.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Why It Matters</p>
                    <h2 className="mb-6 mt-3 text-3xl font-bold text-gray-900 lg:text-4xl">
                        The advantage of planning finance with Abroadways
                    </h2>
                    <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
                        Study abroad funding can feel complex. We make it easier to understand the numbers, compare
                        options, and stay focused on the bigger goal: moving forward with confidence.
                    </p>
                </div>

                <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-700 group-hover:bg-blue-100">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-xl font-bold leading-tight text-gray-900 lg:text-2xl">{feature.title}</h3>
                            <p className="leading-relaxed text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button size="xl">Speak To An Advisor</Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
