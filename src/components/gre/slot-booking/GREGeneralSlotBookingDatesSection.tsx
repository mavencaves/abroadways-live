export default function GREGeneralSlotBookingDatesSection() {
    return (
        <section className="container mx-auto  py-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    ৩. GRE General স্লট বুকিং তারিখ
                </h2>

                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        প্রধান শহরগুলোতে বিভিন্ন GRE পরীক্ষাকেন্দ্র উপলব্ধ আছে, যেখানে আপনি আপনার সুবিধা অনুযায়ী স্লট বুক করতে পারেন।
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        নিচে ২০২৫ সালের GRE General Test এর জন্য উপলব্ধ স্লটের তারিখগুলোর একটি তালিকা দেওয়া হলো:
                    </p>
                </div>

                {/* GRE General Booking Dates Table */}
                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mb-8">
                    <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-800">
                            GRE General স্লট বুকিং তারিখ
                        </h3>
                    </div>

                    <table className="w-full">
                        <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="px-4 py-3 text-left">মাস</th>
                            <th className="px-4 py-3 text-left">তারিখ</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">অক্টোবর</td>
                            <td className="px-4 py-3 text-sm">৩, ৫, ৬, ৭, ৮, ১৩, ১৪, ১৫, ১৬, ২০, ২১, ২২, ২৩, ২৭, ২৮, ২৯, ৩০</td>
                        </tr>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">নভেম্বর</td>
                            <td className="px-4 py-3 text-sm">৩, ৄ, ৫, ৬, ১০, ১১, ১২, ১৩, ১৭, ১৮, ১৯, ২০, ২২, ২৪, ২৫, ২৬, ২৮, ২৯</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 font-medium">ডিসেম্বর</td>
                            <td className="px-4 py-3 text-sm">১, ২, ৃ, ৄ, ৬, ৮, ৯, ১০, ১১, ১৫, ১৬, ১৭, ১৮, ২০, ২২, ২৩, ২৪, ২৬, ২৮, ২৯, ৩০, ৩১</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
