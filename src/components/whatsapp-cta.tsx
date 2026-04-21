export default function WhatsAppCTA() {
  const phone = "8801898801960";

  return (
    <section className="section-shell-compact bg-white">
      <div className="section-container">
        <div className="flex flex-col gap-5 rounded-[1.75rem] border border-emerald-200/80 bg-[linear-gradient(135deg,#eefaf4_0%,#ffffff_100%)] p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">WhatsApp Support</p>
            <h2 className="mt-2 font-serif text-2xl leading-tight text-slate-950 md:text-3xl">
              Need quick guidance before you book?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
              Chat with Abroadways on WhatsApp for fast support on admissions, scholarships, Europe study options, Canada study planning, visa questions, and LanguageCert booking.
            </p>
          </div>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
