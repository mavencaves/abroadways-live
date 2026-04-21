const statsData = [
    { value: "7+", label: "Major exam pathways covered" },
    { value: "UKVI", label: "Approved LanguageCert trust positioning" },
    { value: "24h", label: "Fast guidance response target" },
    { value: "1:1", label: "Student-focused consultation support" },
];

export default function StatsSection() {
    return (
        <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] bg-[linear-gradient(135deg,#0b2453_0%,#123b86_100%)] p-8 sm:grid-cols-2 xl:grid-cols-4">
                {statsData.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                        <div className="mt-2 text-sm leading-7 text-blue-100">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
