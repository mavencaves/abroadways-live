export default function PTESupportSection() {
    return (
        <section className="mx-auto max-w-7xl py-8">
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-purple-600">
                    10. How Abroadways can support your PTE preparation
                </h2>

                <div className="mb-8">
                    <div className="rounded-lg border border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50 p-6">
                        <p className="mb-4 leading-relaxed text-gray-700">
                            Strengthen your PTE preparation with a more structured approach through Abroadways. Access
                            focused support, practical materials, and guidance designed to help students prepare with
                            better confidence.
                        </p>

                        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <h3 className="mb-2 font-semibold text-purple-700">Preparation resources</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Personalised study planning</li>
                                    <li>• Section-based practice support</li>
                                    <li>• Expert tips and strategy guidance</li>
                                    <li>• Progress tracking</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h3 className="mb-2 font-semibold text-purple-700">Extra advantages</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Smarter performance review</li>
                                    <li>• Weakness identification</li>
                                    <li>• Mock practice and feedback</li>
                                    <li>• Ongoing online guidance</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-center font-medium text-purple-700">
                            Start early, build confidence, and prepare for your PTE test day with clearer direction.
                        </p>

                        <div className="mt-4 text-center">
                            <button className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-purple-700">
                                Start with Abroadways
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
