import { CONTACT_EMAIL, CONTACT_PHONE_LABEL, CONTACT_PHONES } from "@/data/contact-info";

const termsSections = [
  {
    title: "Use Of The Website",
    body: "By using the Abroadways website, you agree to use it lawfully, respectfully, and only for genuine educational, counselling, and informational purposes.",
  },
  {
    title: "Nature Of Our Services",
    body: "Abroadways provides study abroad guidance, counselling, content, digital tools, and support related to admissions, scholarships, visas, and exams. Unless expressly stated, our services do not guarantee admission, scholarship approval, or visa success.",
  },
  {
    title: "Accuracy Of Information",
    body: "We aim to keep our website content accurate and up to date, but university requirements, tuition fees, visa rules, and exam policies may change. Users should verify critical details before making decisions.",
  },
  {
    title: "User Responsibility",
    body: "You are responsible for the accuracy of any information you provide through forms, consultations, AbroadAI, or other interactive features. Inaccurate or incomplete information may affect the quality of guidance received.",
  },
  {
    title: "Intellectual Property",
    body: "Unless otherwise stated, the design, text, graphics, branding, and materials on this website belong to Abroadways and may not be copied, redistributed, or reused without permission.",
  },
  {
    title: "Third-Party Services",
    body: "Our website may link to third-party platforms, institutions, or services. Abroadways is not responsible for the content, policies, or decisions of those third parties.",
  },
  {
    title: "Limitation Of Liability",
    body: "To the fullest extent permitted by law, Abroadways is not liable for indirect, incidental, or consequential losses arising from use of the website, reliance on public content, or outcomes controlled by universities, embassies, or test providers.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] py-18 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Legal</p>
          <h1 className="mt-3 text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-4 text-sm leading-7 text-blue-100">
            These terms govern the use of the Abroadways website, tools, and public-facing services.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="leading-8 text-slate-600">
            By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please do
            not use the site or its services.
          </p>

          <div className="mt-10 space-y-8">
            {termsSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-blue-800">{section.title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold text-blue-800">Policy Updates</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Abroadways may update these terms from time to time to reflect changes in services, compliance needs,
                or operational improvements. Continued use of the site after updates means you accept the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800">Contact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                For questions about these Terms & Conditions, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-blue-700 underline">
                  {CONTACT_EMAIL}
                </a>{" "}
                or call{" "}
                <a href={`tel:+88${CONTACT_PHONES[0]}`} className="font-medium text-blue-700 underline">
                  {CONTACT_PHONE_LABEL}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
