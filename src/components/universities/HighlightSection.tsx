interface HighlightSectionProps {
    mainTitle: string;
    mainText: string;
    cards: { title: string; text: string }[];
}

export default function HighlightSection({
    mainTitle,
    mainText,
    cards,
}: HighlightSectionProps) {
    return (
        <section className="rounded-[1.75rem] bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] p-8">
            <h2 className="mb-2 text-3xl font-bold text-white">{mainTitle}</h2>
            <p className="mb-6 text-lg text-blue-100">{mainText}</p>

            <div className="grid grid-cols-2 gap-0 rounded-[1.5rem] border border-white/20 bg-white/95 shadow-md">
                {cards.map((card, index) => (
                    <div
                        key={`${card.title}-${card.text}-${index}`}
                        className={`flex min-h-28 flex-col items-start justify-center border-slate-200 p-6 ${
                            index % 2 === 0 ? "border-r" : ""
                        } ${index < 2 ? "border-b" : ""}`}
                    >
                        <span className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {card.title}
                        </span>
                        <span className="text-xl font-bold text-slate-950">{card.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
