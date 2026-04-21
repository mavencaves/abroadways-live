export default function IeltsSlotBookingWhenWhereSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl ">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
               4. IELTS Slot Booking: When and Where Can You Take the Test?
            </h2>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                It’s advisable to book your IELTS slot early — ideally <b>3-4 months before your intended exam date</b> — to ensure you have plenty of time for comprehensive preparation. Early booking also guarantees the widest choice of dates and test centres, allowing you to secure your preferred slot and location.
            </p>

            <div className="bg-blue-50 border-blue-200 border rounded-lg p-4 mb-5">
                <b>Bangladesh Test Centre Availability:</b><br />
                There are <b>38 computer-based IELTS test centres</b> across Bangladesh, offering more than <b>25,000 computer-based IELTS slots</b> per month. This means you have significant flexibility in choosing your exam date and centre.
            </div>

            <div className="mt-8">
                <details className="mb-3 rounded-lg border border-gray-200" open>
                    <summary className="cursor-pointer px-4 py-2 font-semibold text-lg bg-gray-100 rounded-t-lg">
                        IELTS Slot Booking: Dates
                    </summary>
                    <div className="px-4 py-3 text-gray-800">
                        You can book for available test dates year-round, with frequent sessions especially at major centres. Booking early helps you get your desired date and time.
                    </div>
                </details>
                <details className="mb-2 rounded-lg border border-gray-200">
                    <summary className="cursor-pointer px-4 py-2 font-semibold text-lg bg-gray-100 rounded-t-lg">
                        IELTS Slot Booking: Test Centres
                    </summary>
                    <div className="px-4 py-3 text-gray-800">
                        Bangladesh offers a wide network of test centres. Choose the one nearest to you for convenience. For a full list of centres and real-time availability, visit the official IELTS or IDP Bangladesh online booking portal.
                    </div>
                </details>
            </div>
        </section>
    );
}
