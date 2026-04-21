import BlogHeaderSection, { type BreadcrumbSegment } from "@/components/ielts/blog-header.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion, { type FAQItem } from "@/components/study-abroad/FAQAccordion.tsx";

type GuideCard = {
    title: string;
    description: string;
};

type GuideSection = {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
};

type GuideNotice = {
    title: string;
    body: string;
    tone?: "blue" | "green" | "orange";
};

type GuidePageLayoutProps = {
    title: string;
    updatedDate: string;
    customSegments: BreadcrumbSegment[];
    intro: string[];
    notice?: GuideNotice;
    cards?: GuideCard[];
    sections?: GuideSection[];
    nextSteps?: { title: string; href: string }[];
    infoTitle?: string;
    infoData?: { label: string; href: string }[][];
    faqs?: FAQItem[];
    faqTitle?: string;
};

const noticeStyles: Record<NonNullable<GuideNotice["tone"]>, string> = {
    blue: "border-blue-200 bg-blue-50 text-blue-900",
    green: "border-green-200 bg-green-50 text-green-900",
    orange: "border-orange-200 bg-orange-50 text-orange-900",
};

export default function GuidePageLayout({
    title,
    updatedDate,
    customSegments,
    intro,
    notice,
    cards,
    sections,
    nextSteps,
    infoTitle,
    infoData,
    faqs,
    faqTitle = "Frequently Asked Questions",
}: GuidePageLayoutProps) {
    const tone = notice?.tone ?? "blue";

    return (
        <>
            <BlogHeaderSection title={title} updatedDate={updatedDate} customSegments={customSegments}>
                {intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}

                {notice ? (
                    <div className={`mt-5 rounded-2xl border px-5 py-4 ${noticeStyles[tone]}`}>
                        <div className="text-sm font-semibold uppercase tracking-[0.16em]">{notice.title}</div>
                        <p className="mt-2 text-sm leading-7">{notice.body}</p>
                    </div>
                ) : null}
            </BlogHeaderSection>

            {cards?.length ? (
                <section className="mx-auto my-8 grid w-full max-w-7xl gap-5 px-4 md:grid-cols-2 xl:grid-cols-3">
                    {cards.map((card) => (
                        <article
                            key={card.title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <h2 className="text-xl font-semibold text-slate-950">{card.title}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                        </article>
                    ))}
                </section>
            ) : null}

            {sections?.length ? (
                <section className="mx-auto my-8 flex w-full max-w-7xl flex-col gap-6 px-4">
                    {sections.map((section) => (
                        <article
                            key={section.title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
                            {section.paragraphs?.map((paragraph) => (
                                <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-700">
                                    {paragraph}
                                </p>
                            ))}
                            {section.bullets?.length ? (
                                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </article>
                    ))}
                </section>
            ) : null}

            {nextSteps?.length ? <NextStepsSection nextSteps={nextSteps} /> : null}
            {infoTitle && infoData?.length ? <InfoTableSection title={infoTitle} data={infoData} /> : null}
            {faqs?.length ? <FAQAccordion title={faqTitle} data={faqs} className="bg-white w-full max-w-7xl p-4 rounded-xl" /> : null}
        </>
    );
}
