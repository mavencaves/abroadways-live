import { CustomDataTable } from "@/components/CustomDataTable";

const slotFeeColumns = [
    { key: "category", header: "Test Category", width: "58%" },
    { key: "fee", header: "IELTS Exam Fees 2025", width: "42%" }
];

const slotFeeData = [
    {
        category: "Computer-delivered IELTS (Academic & General Training)",
        fee: "BDT 18,000",
    },
    {
        category: "Pen and paper-based IELTS (Academic & General Training)",
        fee: "BDT 18,000",
    },
    {
        category: "IELTS for UK Visas and Immigration",
        fee: "BDT 18,250",
    },
    {
        category: "IELTS Life Skills (A1 and B1)",
        fee: "BDT 17,000",
    },
];

export default function IeltsSlotBookingFeeSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
               2. IELTS Slot Booking Fee
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                Your IELTS Slot booking fee varies according to your test mode and test type. The payment for the <b>IELTS exam</b> can be made either offline or online. You can make offline payments via a Demand Draft deposit slip. Online payment can be made with credit/debit cards, net banking, or UPI.
            </p>
            <div className="overflow-x-auto my-6">
                <CustomDataTable columns={slotFeeColumns} data={slotFeeData} />
            </div>
            <p className="text-gray-800 text-base leading-relaxed">
                <b>Note:</b> To check out city-wise IELTS slot booking fees, please review the IDP official site or your local exam center's updates.
            </p>
        </section>
    );
}
