import {type ReactNode} from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {cn} from "@/lib/utils.ts";

export interface FAQItem {
    id: string;
    question: string;
    answer: ReactNode;
}

interface FAQAccordionProps {
    title: string;
    data: FAQItem[];
    className?: string;
}

export default function FAQAccordion({title, data, className}: FAQAccordionProps) {
    return (
        <div className={cn("w-full max-w-4xl mx-auto", className)}>
            <h2 className="text-3xl font-semibold mb-8 text-center">{title}</h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {data.map((faq) => (
                    <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="border border-gray-200 rounded-lg px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                            <span className="text-lg font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 pb-2">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
