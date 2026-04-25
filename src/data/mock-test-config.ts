export const MOCK_TEST_EXAMS = [
  {
    slug: "ielts",
    title: "IELTS",
    eyebrow: "English proficiency",
    description:
      "Original practice sets for listening, reading, writing, and speaking with timed sessions and coaching-friendly reports.",
    audience: "Study abroad applicants preparing for band-focused English tests.",
    highlight: "Most requested for UK, Australia, and Canada applications.",
    accent: "from-sky-500 via-blue-600 to-indigo-700",
  },
  {
    slug: "pte",
    title: "PTE",
    eyebrow: "Computer-based practice",
    description:
      "Fast, integrated practice for speaking, writing, reading, and listening with section-level accuracy tracking.",
    audience: "Students who want a computer-first English testing workflow.",
    highlight: "Useful for quick retake cycles and repeat practice.",
    accent: "from-cyan-500 via-blue-600 to-slate-900",
  },
  {
    slug: "toefl",
    title: "TOEFL",
    eyebrow: "Academic English",
    description:
      "Academic reading, listening, writing, and speaking practice with original prompts and review-ready answers.",
    audience: "Students applying to universities that prefer TOEFL scores.",
    highlight: "Balanced for academic English and response-based sections.",
    accent: "from-blue-500 via-indigo-600 to-slate-900",
  },
  {
    slug: "languagecert",
    title: "LanguageCert",
    eyebrow: "Flexible English testing",
    description:
      "Skill-based practice sets for LanguageCert preparation with writing and speaking sections ready for manual review.",
    audience: "Students and professionals targeting LanguageCert pathways.",
    highlight: "Ideal for flexible English-certification practice.",
    accent: "from-sky-400 via-blue-500 to-slate-800",
  },
  {
    slug: "gre",
    title: "GRE",
    eyebrow: "Graduate admissions",
    description:
      "Timed verbal, quant, and analytical writing practice with weaknesses surfaced after every scored attempt.",
    audience: "Master's and PhD applicants preparing for graduate-level testing.",
    highlight: "Strong for section-by-section readiness tracking.",
    accent: "from-indigo-500 via-blue-700 to-slate-950",
  },
  {
    slug: "gmat",
    title: "GMAT",
    eyebrow: "Business school prep",
    description:
      "Quantitative, verbal, and data insights practice designed for paced business-school entrance preparation.",
    audience: "MBA and business-program applicants.",
    highlight: "Built for decision-making speed and performance review.",
    accent: "from-blue-500 via-sky-600 to-slate-950",
  },
] as const;

export const MOCK_TEST_EXAM_MAP = Object.fromEntries(
  MOCK_TEST_EXAMS.map((exam) => [exam.slug, exam])
) as Record<string, (typeof MOCK_TEST_EXAMS)[number]>;

export const OBJECTIVE_QUESTION_TYPES = ["mcq", "tf", "numeric", "fill"] as const;
export const SUBJECTIVE_QUESTION_TYPES = ["writing", "speaking", "essay"] as const;

export function formatMockSectionTitle(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
