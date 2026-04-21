const MavencaveFinanceSection = () => {
    const features = [
        "No collateral required for selected finance pathways",
        "Competitive rates designed for student planning",
        "Support for tuition and living-expense funding conversations",
        "Fast online enquiry process with guided follow-up",
    ];

    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-full max-w-lg">
                            <img src="/images/random-image1.png" alt="Abroadways finance support illustration" className="h-auto w-full" />
                        </div>
                    </div>

                    <div className="lg:pl-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Finance Support</p>
                        <h2 className="mb-6 mt-3 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                            Finance guidance that supports your study abroad plan with more confidence.
                        </h2>

                        <p className="mb-8 text-lg leading-relaxed text-gray-600">
                            Abroadways helps students and families understand funding pathways, tuition planning, and
                            practical next steps so international education feels more structured and manageable.
                        </p>

                        <div className="mb-8 space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-700">
                                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-lg text-gray-800">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="rounded-lg bg-blue-700 px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-blue-800">
                            Explore Funding Options
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MavencaveFinanceSection;
