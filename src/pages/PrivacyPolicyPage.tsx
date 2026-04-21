const sections = [
  {
    title: "Information We Collect",
    points: [
      "Personal details such as your name, email address, phone number, and WhatsApp number when you contact us or submit a form.",
      "Academic and profile information you choose to share for counselling, university matching, scholarship support, or visa guidance.",
      "Technical information such as device type, browser, IP address, and usage analytics to improve performance and user experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    points: [
      "To respond to enquiries, schedule consultations, and provide study abroad, scholarship, visa, and exam-related support.",
      "To improve our website, forms, student experience, and future lead management systems.",
      "To send relevant updates about Abroadways services, events, offers, and student support resources where permitted.",
    ],
  },
  {
    title: "Sharing Of Information",
    points: [
      "We do not sell your personal information.",
      "Information may be shared with trusted service providers who help us operate the website or deliver services on our behalf.",
      "We may disclose information where required by law or to protect the rights, safety, and integrity of Abroadways and its users.",
    ],
  },
  {
    title: "Data Security",
    points: [
      "We use reasonable administrative and technical safeguards to protect personal information.",
      "No internet-based system can guarantee absolute security, so users should avoid submitting highly sensitive information unless required.",
    ],
  },
  {
    title: "Cookies And Analytics",
    points: [
      "We may use cookies and similar technologies to understand website traffic, improve content, and support conversion-focused user journeys.",
      "You can manage cookies in your browser settings, although some features may work less effectively if cookies are disabled.",
    ],
  },
  {
    title: "Your Rights",
    points: [
      "You may request access to, correction of, or deletion of your personal information, subject to applicable legal and operational requirements.",
      "You may also contact us if you no longer wish to receive promotional communications.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] py-18 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Legal</p>
          <h1 className="mt-3 text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-sm leading-7 text-blue-100">
            Abroadways is committed to protecting your privacy while delivering premium study abroad guidance for
            students and families in Bangladesh.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="leading-8 text-slate-600">
            This Privacy Policy explains how Abroadways collects, uses, stores, and protects information when you use
            our website, submit a lead form, contact our team, or interact with our services, including AbroadAI and
            counselling-related tools.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-blue-800">{section.title}</h2>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {section.points.map((point) => (
                    <li key={point} className="leading-8">
                      • {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold text-blue-800">Contact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                If you have any questions about this Privacy Policy or how your information is handled, contact
                Abroadways at{" "}
                <a href="mailto:info@abroadways.com.bd" className="font-medium text-blue-700 underline">
                  info@abroadways.com.bd
                </a>{" "}
                or call{" "}
                <a href="tel:+8801898801960" className="font-medium text-blue-700 underline">
                  +880 1898801960
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
