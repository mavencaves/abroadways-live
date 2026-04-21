export default function CountryInfoGrid() {
    return (
        <section className="mx-auto max-w-5xl my-8 py-10 px-2 rounded-2xl" style={{ background: "#6a55ea" }}>
            <h2 className="text-white text-3xl font-bold mb-8 text-center">
                সমস্ত দেশ সম্পর্কে জানুন
            </h2>
            <div className="flex flex-wrap justify-center items-start gap-8">
                {[
                    { flag: "🇨🇦", label: "কানাডায় উচ্চশিক্ষা" },
                    { flag: "🇺🇸", label: "যুক্তরাষ্ট্রে উচ্চশিক্ষা" },
                    { flag: "🇬🇧", label: "যুক্তরাজ্যে উচ্চশিক্ষা" },
                    { flag: "🇦🇺", label: "অস্ট্রেলিয়ায় উচ্চশিক্ষা" },
                    { flag: "🇩🇪", label: "জার্মানিতে উচ্চশিক্ষা" },
                ].map((c, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center min-w-[120px]">
                        <div className="bg-white rounded-full w-[90px] h-[90px] flex items-center justify-center text-5xl mb-4 drop-shadow-sm">
                            {c.flag}
                        </div>
                        <span className="text-white text-lg font-semibold text-center leading-tight">
                            {c.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
