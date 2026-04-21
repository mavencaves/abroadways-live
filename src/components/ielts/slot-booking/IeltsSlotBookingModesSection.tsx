import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function IeltsSlotBookingModesSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                1. IELTS Slot Booking: Modes
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                You can complete your IELTS exam booking <b>online</b>, <b>offline</b>, or <b>by courier</b>.
                The application procedure, time taken, and essential documents may vary depending on your booking mode,
                so choose one that works best for you.
            </p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                You can start IELTS exam slot booking as early as <b>three months before</b> the test date and, at the
                latest, <b>one week before</b> the exam date.
                Remember that this is subject to the availability of seats in your preferred exam centre.
                If you're eyeing a spot in any popular city, make sure to book your slot early to avoid missing out.
            </p>
            <div className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Online Mode of IELTS Slot Booking</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Book your IELTS exam conveniently from anywhere via the official IDP IELTS Bangladesh
                            website. This is the fastest method, letting you choose available dates and centres in real
                            time, upload documents, and pay fees online.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Offline Mode of IELTS Slot Booking</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            If you prefer in-person assistance, visit an official test centre or authorized partner in
                            Bangladesh to complete your booking. You can fill out the application form, submit your
                            required documents, and process payment at the centre.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Slot Booking by Courier</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Alternatively, you can download the application form, fill it out manually, and courier it
                            along with the required documents to the designated IELTS centre. Confirm seat availability
                            in advance and allow extra time for delivery and processing.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
