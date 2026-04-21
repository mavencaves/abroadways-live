const StudyInUSA = () => {
  return (
    <div className="bg-white text-gray-900">
      <main className="hero-section py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">যুক্তরাষ্ট্রে উচ্চশিক্ষা: আপনার পূর্ণ গাইড</h1>
          <p className="text-lg text-gray-700 mb-6">
            যুক্তরাষ্ট্রে উচ্চশিক্ষা গ্রহণের জন্য প্রয়োজনীয় সব তথ্য একসাথে জানুন
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => {
              const section = document.getElementById("universities");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন
          </button>
        </div>
      </main>

      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">কেন যুক্তরাষ্ট্রে পড়াশোনা করবেন?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>বিশ্বমানের বিশ্ববিদ্যালয় ও গবেষণা সুবিধা</li>
          <li>আন্তর্জাতিক শিক্ষার্থীদের জন্য সহায়ক পরিবেশ</li>
          <li>বিভিন্ন স্কলারশিপ ও ফাইন্যান্সিয়াল এইড</li>
          <li>কারিয়ার উন্নয়নের অসাধারণ সুযোগ</li>
        </ul>
      </section>

      <section id="universities" className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়সমূহ</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">বিশ্ববিদ্যালয়</th>
                <th className="border px-4 py-2 text-left">QS র‍্যাংকিং</th>
                <th className="border px-4 py-2 text-left">টাইমস র‍্যাংকিং</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["এমআইটি", "#১", "#৫"],
                ["হার্ভার্ড ইউনিভার্সিটি", "#৪", "#২"],
                ["স্ট্যানফোর্ড ইউনিভার্সিটি", "#৫", "#৩"],
                ["ইউনিভার্সিটি অফ ক্যালিফোর্নিয়া, বার্কলে", "#১০", "#৮"],
                ["ইউনিভার্সিটি অফ শিকাগো", "#১১", "#১৩"],
                ["ক্যালটেক", "#১৫", "#৬"],
                ["প্রিন্সটন ইউনিভার্সিটি", "#১৩", "#৭"],
                ["ইয়েল ইউনিভার্সিটি", "#১৮", "#৯"],
                ["কর্নেল ইউনিভার্সিটি", "#১৬", "#২০"],
              ].map(([name, qs, times], idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{name}</td>
                  <td className="border px-4 py-2">{qs}</td>
                  <td className="border px-4 py-2">{times}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">স্কলারশিপ ও ফিনান্সিয়াল এইড</h2>
        <p className="text-gray-700 mb-2">যুক্তরাষ্ট্রে উচ্চশিক্ষার খরচ তুলনামূলক বেশি, তবে প্রচুর স্কলারশিপ এবং ফিনান্সিয়াল এইড প্রোগ্রাম রয়েছে।</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Fulbright Scholarship</li>
          <li>Hubert H. Humphrey Fellowship Program</li>
          <li>AAUW International Fellowships</li>
          <li>Rotary Peace Fellowship</li>
          <li>University-specific Scholarships (যেমন: Harvard, MIT, Stanford)</li>
        </ul>
      </section>

      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">ভিসা সংক্রান্ত তথ্য</h2>
        <p className="text-gray-700 mb-4">যুক্তরাষ্ট্রে পড়াশোনার জন্য মূলত F-1 Student Visa প্রয়োজন হয়।</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>I-20 ফর্ম সংগ্রহ করুন আপনার বিশ্ববিদ্যালয় থেকে</li>
          <li>DS-160 ফর্ম পূরণ করুন</li>
          <li>SEVIS ফি প্রদান করুন</li>
          <li>ভিসা ইন্টারভিউ এর জন্য প্রস্তুতি নিন</li>
        </ul>
      </section>

    
    </div>
  );
};

export default StudyInUSA;