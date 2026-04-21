import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How does Abroadways help with study abroad counselling and visa guidance?",
        answer: "We support students with destination selection, university shortlisting, scholarship planning, SOP guidance, documentation, interview preparation, and visa file readiness.",
    },
    {
        question: "Which destinations does Abroadways support?",
        answer: "Abroadways supports popular destinations including the United Kingdom, Canada, Australia, the United States, and a wide range of European study destinations such as Germany, Ireland, the Netherlands, Finland, Denmark, Sweden, Italy, and Malta.",
    },
    {
        question: "Can Abroadways help with scholarships and affordability planning?",
        answer: "Yes. We help students evaluate scholarships, tuition ranges, living costs, and budget-friendly options so they can choose realistic and sustainable study plans.",
    },
    {
        question: "Does Abroadways support LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, and SAT?",
        answer: "Yes. Abroadways guides students on the right English test or admission exam based on destination, course level, and application goals. UKVI Approved LanguageCert Test Centre support remains a key trust point.",
    },
    {
        question: "Can I book a consultation before deciding on a country?",
        answer: "Absolutely. Many students start with uncertainty. A consultation helps you compare countries, understand admission requirements, and choose a realistic next step before committing.",
    },
    {
        question: "Is the website ready for future lead integration?",
        answer: "Yes. The homepage forms are now structured to support future backend or CRM integration without changing the user-facing layout.",
    },
];

export default function FAQSection() {
    return (
        <section className="section-shell bg-slate-50 px-4">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <p className="section-kicker">FAQ</p>
                    <h2 className="section-title">
                        Answers for students and parents planning the next step.
                    </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="rounded-[1.25rem] border border-slate-200 bg-white px-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                        >
                            <AccordionTrigger className="py-6 text-left text-lg font-medium text-slate-950 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 pt-2 leading-7 text-slate-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
