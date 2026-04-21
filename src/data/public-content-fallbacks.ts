export type PublicBlogRecord = {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  category: string;
  status: "published" | "draft" | "archived";
  createdAt: string;
  updatedAt: string;
};

export type PublicAboutRecord = {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
};

export const fallbackBlogs: PublicBlogRecord[] = [
  {
    _id: "fallback-blog-1",
    title: "Study abroad from Bangladesh: how to shortlist the right destination",
    content:
      "Shortlisting a destination is not only about reputation. Students should compare tuition, living costs, visa policy, scholarship availability, work opportunities, and long-term career relevance. A stronger decision usually comes from matching academic goals with practical realities instead of chasing popularity alone.\n\nFor many Bangladeshi students, the first step is to separate aspiration from application readiness. The UK, Canada, Europe, and Australia each offer different advantages, but the right pathway depends on budget, timeline, subject fit, and documentation strength.\n\nA consultation-led approach helps families compare destinations with more clarity and less confusion. When students understand course structure, admission standards, and post-study expectations early, the full application journey becomes much more manageable.",
    author: "Abroadways Editorial Team",
    image: "/images/blog/Image_1_3.webp",
    category: "Study Abroad",
    status: "published",
    createdAt: "2026-04-01T00:00:00.000Z",
    updatedAt: "2026-04-01T00:00:00.000Z",
  },
  {
    _id: "fallback-blog-2",
    title: "How scholarships and budgeting shape a stronger application strategy",
    content:
      "Scholarships improve more than affordability. They also shape which countries, universities, and timelines make strategic sense for a student. A budget-aware plan helps students avoid unrealistic choices and focus on offers they can convert into successful enrollments.\n\nStudents should look at tuition, visa funds, accommodation, health insurance, and hidden pre-departure costs together. This broader view creates better decisions and prevents late-stage surprises.\n\nA premium counselling process should help families understand both academic fit and financial fit. That combination often produces the most confident and sustainable study abroad plan.",
    author: "Abroadways Editorial Team",
    image: "/images/blog/Image_3_3.webp",
    category: "Scholarships",
    status: "published",
    createdAt: "2026-04-03T00:00:00.000Z",
    updatedAt: "2026-04-03T00:00:00.000Z",
  },
  {
    _id: "fallback-blog-3",
    title: "Visa guidance for students: what families should prepare early",
    content:
      "Visa preparation becomes much smoother when families start early. Financial documents, source-of-funds clarity, academic history, credibility, and timing all matter well before submission.\n\nStudents often focus heavily on university applications and leave visa preparation too late. A stronger process keeps admissions, CAS or offer documentation, financial evidence, and interview readiness aligned from the beginning.\n\nFamilies who prepare early usually reduce stress, avoid documentation gaps, and make more confident decisions throughout the process.",
    author: "Abroadways Editorial Team",
    image: "/images/blog/Image_2_3.webp",
    category: "Visa Guidance",
    status: "published",
    createdAt: "2026-04-05T00:00:00.000Z",
    updatedAt: "2026-04-05T00:00:00.000Z",
  },
  {
    _id: "fallback-blog-4",
    title: "LanguageCert, IELTS, PTE, or TOEFL: choosing the right English test",
    content:
      "The right exam depends on your target destination, university policy, timeline, and comfort with exam format. A student applying for UKVI-related pathways may need a different strategy from someone comparing Canada, Europe, or broader international options.\n\nLanguageCert, IELTS, PTE, and TOEFL each suit different student profiles. The strongest choice is the one that matches both institutional acceptance and your ability to perform well under that exam format.\n\nChoosing early gives students more time to prepare strategically and avoid late application delays.",
    author: "Abroadways Editorial Team",
    image: "/images/blog/Image_4_3.webp",
    category: "Exams",
    status: "published",
    createdAt: "2026-04-07T00:00:00.000Z",
    updatedAt: "2026-04-07T00:00:00.000Z",
  },
];

export const fallbackAbout: PublicAboutRecord = {
  _id: "fallback-about-1",
  title: "Premium study abroad guidance for ambitious students in Bangladesh.",
  content:
    "Abroadways helps students and parents navigate admissions, scholarships, visa guidance, and exam planning with clarity and confidence.\n\nWe work with students who want better direction for study abroad from Bangladesh, whether they are exploring the UK, Canada, Europe, or other growing destination options.\n\nAbroadways combines destination insight, application guidance, visa planning, and exam support under one premium brand so students can make stronger decisions at every stage of the journey.",
  image: "",
  createdAt: "2026-04-01T00:00:00.000Z",
  updatedAt: "2026-04-01T00:00:00.000Z",
};
