const refundSections = [
  {
    title: "Digital And Advisory Services",
    body: "Many Abroadways services involve digital delivery, consultation time, analysis, or access to resources. Once a service has been delivered, accessed, or substantially started, it is generally non-refundable unless otherwise stated in writing.",
  },
  {
    title: "Consultation Sessions",
    body: "If a paid consultation is cancelled with adequate advance notice, Abroadways may review the request for a partial or full refund depending on preparation already completed and administrative costs incurred.",
  },
  {
    title: "Technical Or Billing Errors",
    body: "If you were charged incorrectly, charged more than once, or unable to access a paid service due to a verified technical issue caused on our side, we will review the case and may issue a suitable refund or service credit.",
  },
  {
    title: "Non-Guarantee Notice",
    body: "Study abroad outcomes, admissions, scholarship awards, and visa decisions are controlled by universities, test providers, immigration authorities, and other third parties. Payment to Abroadways does not guarantee any specific outcome and is not refundable solely because an application or visa result is unsuccessful.",
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] py-18 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Legal</p>
          <h1 className="mt-3 text-4xl font-bold">Refund Policy</h1>
          <p className="mt-4 text-sm leading-7 text-blue-100">
            Clear expectations help students and families make informed decisions with confidence.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="leading-8 text-slate-600">
            This Refund Policy explains how Abroadways reviews refund requests for paid consultations, advisory
            services, and digital support products related to study abroad, visa guidance, and exam preparation.
          </p>

          <div className="mt-10 space-y-8">
            {refundSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-blue-800">{section.title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold text-blue-800">How To Request A Refund Review</h2>
              <p className="mt-4 leading-8 text-slate-600">
                To request a refund review, email{" "}
                <a href="mailto:info@abroadways.com.bd" className="font-medium text-blue-700 underline">
                  info@abroadways.com.bd
                </a>{" "}
                with your full name, contact details, payment date, transaction reference, purchased service, and the
                reason for your request. Our team will review the case and respond within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800">Important Note</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Abroadways provides guidance, support, and structured advisory services. Decisions made by universities,
                scholarship bodies, embassies, or visa authorities remain outside our control.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
