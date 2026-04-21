import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";

const slotChangeFaq = [
    {
        id: "faq-reschedule",
        question: "How to Reschedule Your IELTS Exam Slot?",
        answer: (
            <>
                Log in to your IELTS IDP account. Locate your booked test and choose the “Reschedule” or “Transfer”
                option. Select your preferred new date and test centre, then confirm your changes online. A transfer fee
                may apply.
            </>
        ),
    },
    {
        id: "faq-cancel",
        question: "How to Cancel Your IELTS Exam Slot?",
        answer: (
            <>
                Log in to your IELTS IDP account, find your test booking, and click on the “Cancel” or “Request
                Cancellation” option. Fill out the required details and submit your request. Refunds (minus
                administrative fees) are processed if you cancel 9 or more days before the test.
            </>
        ),
    }
];

export default function IeltsSlotChangingAccordionSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                5. IELTS Slot Changing: Can We Postpone IELTS Exam?
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-6">
                It is possible to postpone the IELTS Exam even after completing your application process. Now, IDP
                allows you to transfer or cancel your IELTS Slot online.
            </p>
            <FAQAccordion title={""} data={slotChangeFaq}/>
        </section>
    );
}
