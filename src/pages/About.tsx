import { useEffect, useMemo, useState } from "react";
import CTASection from "@/components/cta.tsx";
import { BadgeCheck, Globe2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { aboutApi } from "@/lib/api";
import { fallbackAbout, type PublicAboutRecord } from "@/data/public-content-fallbacks";

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted guidance",
    description:
      "Students and parents rely on Abroadways for structured admissions, visa, and test-preparation support with a professional, transparent process.",
  },
  {
    icon: GraduationCap,
    title: "Student-first strategy",
    description:
      "We build application plans around academic profile, budget, career goals, and country fit instead of pushing generic recommendations.",
  },
  {
    icon: Globe2,
    title: "Global pathways",
    description:
      "Our counselling covers the UK, Canada, Europe, Australia, and other leading destinations for Bangladeshi students.",
  },
  {
    icon: Sparkles,
    title: "Modern support",
    description:
      "From expert consultations to AbroadAI and exam guidance, we combine technology with human insight to make decisions clearer and faster.",
  },
];

const trustPoints = [
  "UKVI Approved LanguageCert Test Centre",
  "Support for LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, and SAT pathways",
  "Consultation-first approach for students and families in Bangladesh",
];

export default function AboutPage() {
  const [aboutEntry, setAboutEntry] = useState<PublicAboutRecord>(fallbackAbout);

  useEffect(() => {
    let isMounted = true;

    const loadAbout = async () => {
      try {
        const response = await aboutApi.getAll();
        const data = Array.isArray(response.data) ? response.data : [];

        if (!isMounted) {
          return;
        }

        if (data.length > 0) {
          const latest = [...data].sort(
            (a, b) => new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime()
          )[0];
          setAboutEntry(latest);
        }
      } catch {
        if (isMounted) {
          setAboutEntry(fallbackAbout);
        }
      }
    };

    loadAbout();

    return () => {
      isMounted = false;
    };
  }, []);

  const aboutParagraphs = useMemo(() => {
    return (aboutEntry.content || fallbackAbout.content)
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }, [aboutEntry.content]);

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-15" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">About Abroadways</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {aboutEntry.title || fallbackAbout.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
              {aboutParagraphs[0] || fallbackAbout.content}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-cyan-300" />
              UKVI Approved LanguageCert Test Centre
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Who We Are</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">A modern consultancy built around student outcomes.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {aboutParagraphs[1] || fallbackAbout.content}
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {aboutParagraphs[2] ||
                "Abroadways combines destination insight, application guidance, visa planning, and exam support under one premium brand so students can make stronger decisions at every stage of the journey."}
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Why Families Trust Us</p>
            <ul className="mt-6 space-y-4">
              {trustPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 text-cyan-300" />
                  <span className="text-sm leading-7 text-slate-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Our Approach</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Designed for clarity, trust, and better conversion into action.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-slate-200">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">What We Support</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Admissions, scholarships, visas, and test-readiness in one place.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              Country and university selection for study abroad in the UK, Canada, Europe, Australia, and beyond.
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              Scholarship guidance, application materials, SOP support, and offer-planning strategy.
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, and SAT-related direction for the next step in your profile.
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
