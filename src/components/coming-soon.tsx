export default function ComingSoonSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-32">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl text-center">
                <h1 className="mb-8 text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl">
                    Coming Soon
                </h1>

                <p className="mx-auto mb-12 max-w-3xl text-xl text-blue-100 md:text-3xl">
                    We are preparing something valuable for students who want smarter study abroad guidance.
                </p>

                <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-blue-50 md:text-lg">
                    A new Abroadways experience is on the way. Stay connected to receive updates as soon as it launches.
                </p>

                <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full rounded-lg px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:flex-1"
                    />
                    <button className="w-full whitespace-nowrap rounded-lg bg-white px-8 py-4 font-semibold text-blue-700 transition-colors hover:bg-blue-50 sm:w-auto">
                        Notify Me
                    </button>
                </div>

                <div className="mt-16 flex justify-center gap-6">
                    <p className="text-sm text-blue-100">Stay connected with Abroadways</p>
                </div>
            </div>
        </section>
    );
}
