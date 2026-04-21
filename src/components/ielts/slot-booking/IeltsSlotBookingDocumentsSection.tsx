export default function IeltsSlotBookingDocumentsSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
               3. IELTS Slot Booking: Documents Required
            </h2>

            <p className="text-gray-800 text-base mb-5">
                Before applying for your IELTS slot, make sure you have all the necessary documents, and check that they
                are valid and updated. Your name and details must match exactly across all submitted documents.
            </p>

            <h3 className="font-semibold text-blue-900 mb-2">
                Documents required for IELTS registration:
            </h3>
            <ul className="list-disc pl-6 text-gray-800 text-base mb-6 space-y-1">
                <li>The front page of your passport</li>
                <li>The back page of your passport</li>
                <li>Identity Proof</li>
                <li>Nationality Information</li>
                <li>Occupational Information</li>
                <li>Educational Qualifications</li>
                <li>Disability Certificate <span className="text-sm text-gray-600">(if any)</span></li>
                <li>Sign and Dated Declaration Document</li>
            </ul>

            <div className="bg-blue-50 border-blue-200 border rounded-lg p-4 mb-6">
                <b>Important:</b> Your passport must be valid at the time of application, and you must bring the
                original with you to the test centre. Failure to show your original passport may result in
                disqualification from the exam.
            </div>

            <h3 className="font-semibold text-blue-900 mb-2">
                Documents required for rescheduling or cancelling your IELTS Slot:
            </h3>
            <ul className="list-disc pl-6 text-gray-800 text-base mb-6 space-y-1">
                <li>Medical Certificate</li>
                <li>Death/Cremation Certificate</li>
                <li>Letter from a Doctor</li>
                <li>Police FIR</li>
                <li>Passport Renewal Receipt or Immigration Department receipt</li>
            </ul>

            <h3 className="font-semibold text-blue-900 mb-2">
                Documents required on IELTS test day:
            </h3>
            <ul className="list-disc pl-6 text-gray-800 text-base mb-4 space-y-1">
                <li>Your Original Passport</li>
                <li>Identity Proof</li>
            </ul>

            <div className="bg-yellow-50 border-yellow-200 border-l-4 rounded p-4 text-gray-900 text-base">
                <b>Tip:</b> Ensure your Passport Number, Signature, Date of Birth, and Photograph all match across your
                passport and national ID to avoid any last-minute issues with identification.
            </div>
        </section>
    );
}
