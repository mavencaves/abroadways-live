export type PublicPageSection = {
  key?: string;
  title: string;
  body: string;
  bullets?: string[];
  imageUrl?: string;
  imageAlt?: string;
};

export type PublicPageContent = {
  routeKey?: string;
  slug: string;
  name: string;
  pageTitle: string;
  seoTitle?: string;
  seoDescription?: string;
  heroKicker?: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroImageUrl?: string;
  heroImageAlt?: string;
  bodyIntro?: string;
  sections: PublicPageSection[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryText?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryText?: string;
  ctaSecondaryUrl?: string;
};

export const PUBLIC_PAGE_DEFAULTS: Record<string, PublicPageContent> = {
  home: {
    routeKey: "home",
    slug: "home",
    name: "Homepage",
    pageTitle: "Homepage",
    seoTitle: "Abroadways | Study Abroad, Exams, Mock Tests, and Student Support",
    seoDescription:
      "Abroadways supports Bangladeshi students with study abroad guidance, exam preparation, mock tests, and digital student tools.",
    heroKicker: "Abroadways",
    heroTitle: "Study Abroad with Confidence",
    heroSubtitle:
      "Premium study abroad guidance, exam preparation, and digital student support built for ambitious Bangladeshi students.",
    heroImageUrl: "/images/Bristy/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg",
    heroImageAlt: "Abroadways students planning their study abroad journey",
    bodyIntro:
      "One premium platform for counselling, applications, exam preparation, mock tests, and digital student support.",
    sections: [
      {
        key: "service-study-abroad",
        title: "Study Abroad Guidance",
        body: "/study-abroad",
        imageUrl: "/images/Bristy/portrait-smiling-male-student-holding-books.jpg",
        imageAlt: "Study abroad guidance",
      },
      {
        key: "service-exams",
        title: "IELTS / PTE / LanguageCert",
        body: "/exams/overview",
        imageUrl: "/images/exams/hero.webp",
        imageAlt: "Exam preparation",
      },
      {
        key: "service-mock-tests",
        title: "Mock Tests",
        body: "/mock-tests",
        imageUrl: "/images/Bristy/fotos-Xdh_J4xW1QE-unsplash.jpg",
        imageAlt: "Mock tests platform",
      },
      {
        key: "service-abroadai",
        title: "AbroadAI",
        body: "/abroadai",
        imageUrl: "/images/Bristy/world.avif",
        imageAlt: "AbroadAI student counselor",
      },
      {
        key: "service-student-portal",
        title: "Student Portal",
        body: "/login",
        imageUrl:
          "/images/Bristy/getting-bit-after-class-help-shot-two-young-students-studying-together-classroom_590464-19534.avif",
        imageAlt: "Student portal support",
      },
      {
        key: "exam-ielts",
        title: "IELTS",
        body: "Confident exam preparation with a cleaner path from class to score.",
        bullets: ["/exams/ielts/overview"],
        imageUrl: "/images/writing.jpg",
        imageAlt: "IELTS preparation",
      },
      {
        key: "exam-pte",
        title: "PTE",
        body: "Digital-first prep built for students aiming for faster application movement.",
        bullets: ["/exams/pte/overview"],
        imageUrl: "/images/p1.jpg",
        imageAlt: "PTE preparation",
      },
      {
        key: "exam-toefl",
        title: "TOEFL",
        body: "Strong language preparation for global applicants and university-focused pathways.",
        bullets: ["/exams/toefl/overview"],
        imageUrl: "/images/TOEFL_pages/image-1.jpg",
        imageAlt: "TOEFL preparation",
      },
      {
        key: "exam-languagecert",
        title: "LanguageCert",
        body: "UKVI-approved language support with practical guidance and clearer student steps.",
        bullets: ["/exams/overview"],
        imageUrl: "/images/c-hero.jpg",
        imageAlt: "LanguageCert preparation",
      },
      {
        key: "exam-gre",
        title: "GRE",
        body: "Sharper graduate-prep support for students applying with bigger academic goals.",
        bullets: ["/exams/gre/overview"],
        imageUrl: "/images/gre_books/image-1.jpg",
        imageAlt: "GRE preparation",
      },
      {
        key: "exam-gmat",
        title: "GMAT",
        body: "A premium, business-school-focused preparation experience with cleaner direction.",
        bullets: ["/exams/gmat/overview"],
        imageUrl: "/images/Bristy/entrepreneurs-meeting-office.jpg",
        imageAlt: "GMAT preparation",
      },
      {
        key: "destination-uk",
        title: "Study in UK",
        body: "/study-abroad/uk",
        imageUrl: "/images/edinburgh.jpg",
        imageAlt: "Study in the United Kingdom",
      },
      {
        key: "destination-canada",
        title: "Study in Canada",
        body: "/study-abroad/canada",
        imageUrl: "/images/toronto.jpg",
        imageAlt: "Study in Canada",
      },
      {
        key: "destination-australia",
        title: "Study in Australia",
        body: "/study-abroad/australia",
        imageUrl: "/images/Bristy/australia-flag.png",
        imageAlt: "Study in Australia",
      },
      {
        key: "destination-europe",
        title: "Study in Europe",
        body: "/study-abroad/europe",
        imageUrl: "/images/manchester.jpg",
        imageAlt: "Study in Europe",
      },
      {
        key: "destination-malaysia",
        title: "Study in Malaysia",
        body: "/study-abroad/malaysia",
        imageUrl: "/images/Bristy/mapbox-zU6tCBzO0Ig-unsplash.jpg",
        imageAlt: "Study in Malaysia",
      },
      {
        key: "accreditation-ukvi",
        title: "UKVI Approved LanguageCert Test Center",
        body: "",
        imageUrl: "",
        imageAlt: "",
      },
      {
        key: "accreditation-icef",
        title: "ICEF Accredited",
        body: "",
        imageUrl: "",
        imageAlt: "",
      },
      {
        key: "accreditation-airc",
        title: "AIRC Certified",
        body: "",
        imageUrl: "",
        imageAlt: "",
      },
      {
        key: "cta-background",
        title: "Homepage CTA Background",
        body: "",
        imageUrl: "",
        imageAlt: "",
      },
    ],
    ctaTitle: "Start your study abroad journey today",
    ctaDescription: "",
    ctaPrimaryText: "Book Free Consultation",
    ctaPrimaryUrl: "/contact",
    ctaSecondaryText: "",
    ctaSecondaryUrl: "",
  },
  "ielts-masterclass": {
    routeKey: "ielts-masterclass",
    slug: "ielts-masterclass",
    name: "IELTS Masterclass",
    pageTitle: "IELTS Masterclass",
    seoTitle: "Free IELTS Masterclass | Abroadways",
    seoDescription: "Join Abroadways for a practical IELTS masterclass focused on exam strategy, preparation plans, and score improvement.",
    heroKicker: "IELTS Masterclass",
    heroTitle: "A clearer IELTS prep starting point for students who want structure, strategy, and confidence.",
    heroSubtitle:
      "This Abroadways page now replaces the old legacy masterclass experience with a cleaner overview of what students can expect from a practical IELTS-focused session.",
    heroImageUrl: "/images/IELTS_masterclass/img_1.jpg",
    heroImageAlt: "Students preparing for IELTS",
    bodyIntro:
      "The goal of this page is not to overwhelm students with old promotional content. It gives a cleaner explanation of how the masterclass supports exam readiness, study planning, and the next steps after the session.",
    sections: [
      {
        title: "What students usually get from the session",
        body: "The masterclass is designed to simplify IELTS preparation for students who need a realistic plan instead of scattered advice.",
        bullets: [
          "A practical breakdown of the exam structure",
          "Preparation mistakes students should avoid early",
          "Guidance on when to start, how to pace preparation, and when to book the test",
        ],
        imageUrl: "/images/IELTS_masterclass/img_2.jpg",
        imageAlt: "IELTS preparation materials",
      },
      {
        title: "Who this session fits best",
        body: "Students preparing for admissions, scholarship goals, or visa-related English requirements usually benefit most when they need a stronger plan before registering for the test.",
        bullets: [
          "Undergraduate and postgraduate applicants",
          "Students comparing IELTS timelines with intake deadlines",
          "Students who want clearer expectations before joining a full preparation track",
        ],
      },
      {
        title: "What happens next",
        body: "After the session, students can move into consultation, exam planning, practice support, or a wider study abroad roadmap depending on what they need most.",
        bullets: [
          "Book a consultation with Abroadways",
          "Move into exam preparation support",
          "Align IELTS readiness with destination and intake plans",
        ],
      },
    ],
    ctaTitle: "Ready to start with Abroadways?",
    ctaDescription: "Use the masterclass as a starting point, then move into a more complete IELTS and study abroad plan.",
    ctaPrimaryText: "Book a consultation",
    ctaPrimaryUrl: "/contact",
    ctaSecondaryText: "Explore IELTS pages",
    ctaSecondaryUrl: "/exams/ielts/overview",
  },
  facilities: {
    routeKey: "facilities",
    slug: "facilities",
    name: "Why Abroadways",
    pageTitle: "Why Abroadways",
    seoTitle: "Why Abroadways | Student Guidance Platform",
    seoDescription: "Understand how Abroadways combines counselling, planning, and student support in one structured platform.",
    heroKicker: "Why Abroadways",
    heroTitle: "A more structured way to move from study abroad research into real progress.",
    heroSubtitle:
      "This page now serves as the cleaner Abroadways explanation for students who reach an older facilities route but still need to understand what makes the platform useful.",
    heroImageUrl: "/images/random-image1.png",
    heroImageAlt: "Abroadways student guidance support",
    bodyIntro:
      "Abroadways is not only a brochure-style website. The platform is gradually connecting public guidance, enquiries, counselling, student workflows, documents, appointments, and payment tracking in one place.",
    sections: [
      {
        title: "Guidance before decisions",
        body: "Students can explore destinations, exams, funding questions, and key application pathways before locking themselves into the wrong route.",
        bullets: [
          "Country-first planning support",
          "Exam and timeline guidance",
          "Scholarship and affordability context",
        ],
      },
      {
        title: "Human support with operational follow-up",
        body: "The Abroadways workflow combines counsellor guidance with structured follow-up so students do not lose momentum after the first conversation.",
        bullets: [
          "Consultation support",
          "CRM follow-up and reminders",
          "Student portal progress visibility",
        ],
      },
      {
        title: "A platform that can grow with the journey",
        body: "From early planning through documents, appointments, payments, and AI support, Abroadways is being shaped into a more connected student experience.",
        bullets: [
          "Student dashboards",
          "Document tracking",
          "Appointment and payment visibility",
        ],
      },
    ],
    ctaTitle: "See the current Abroadways direction",
    ctaDescription: "If you are comparing providers, start by understanding how the counselling, planning, and support experience actually works.",
    ctaPrimaryText: "Talk to Abroadways",
    ctaPrimaryUrl: "/contact",
    ctaSecondaryText: "Explore study abroad",
    ctaSecondaryUrl: "/study-abroad",
  },
  careers: {
    routeKey: "careers",
    slug: "careers",
    name: "Careers",
    pageTitle: "Careers",
    seoTitle: "Careers at Abroadways",
    seoDescription: "Explore current career opportunities at Abroadways across counselling, content, and operations.",
    heroKicker: "Careers at Abroadways",
    heroTitle: "Join a team helping students make stronger international education decisions.",
    heroSubtitle:
      "Abroadways is building a student guidance platform that combines counselling, operational follow-up, digital tools, and practical decision support.",
    heroImageUrl: "/images/Bristy/vitaly-gariev-6UEyCVPkjys-unsplash.jpg",
    heroImageAlt: "Team collaboration at Abroadways",
    bodyIntro:
      "This page now replaces the old broken careers surface with a cleaner introduction to the kind of work and team environment Abroadways is building.",
    sections: [
      {
        title: "Purpose-led work",
        body: "The work is centred on helping students reduce confusion, compare real options, and take better next steps.",
        bullets: ["Student-first guidance", "Clearer planning", "Practical outcomes over hype"],
      },
      {
        title: "Growth across multiple functions",
        body: "Roles often touch counselling, content, digital systems, operations, and communication, which makes the work broader and more cross-functional.",
        bullets: ["Counselling support", "Content and SEO", "Operations and workflow coordination"],
      },
      {
        title: "Current hiring focus",
        body: "Abroadways is most likely to prioritise roles connected to student counselling, IELTS support, content, and operations as the platform grows.",
        bullets: ["Counselling associates", "IELTS trainers", "Content writers", "Operations coordinators"],
      },
    ],
    ctaTitle: "Interested in working with Abroadways?",
    ctaDescription: "Send your CV and a short introduction so our team can review the fit.",
    ctaPrimaryText: "Email careers",
    ctaPrimaryUrl: "mailto:careers@abroadways.com.bd",
    ctaSecondaryText: "Contact the team",
    ctaSecondaryUrl: "/contact",
  },
  "knowledge-center": {
    routeKey: "knowledge-center",
    slug: "knowledge-center",
    name: "Knowledge Center",
    pageTitle: "Knowledge Center",
    seoTitle: "Knowledge Center | Abroadways",
    seoDescription: "Explore practical study abroad guidance on destinations, scholarships, documents, and exam planning.",
    heroKicker: "Knowledge Center",
    heroTitle: "A practical content hub for students planning study abroad with more clarity.",
    heroSubtitle:
      "This page now replaces the old legacy Bangla content tree with a cleaner Abroadways knowledge hub built around real student questions.",
    heroImageUrl: "/images/article1.jpg",
    heroImageAlt: "Student reading study abroad guidance",
    bodyIntro:
      "Students usually need more than scattered articles. They need a starting point that helps them understand destinations, documents, scholarship thinking, exam readiness, and application timing together.",
    sections: [
      {
        title: "Country and destination fit",
        body: "Students can compare countries not just by reputation, but by cost, admissions profile, post-study outcomes, and visa realities.",
        bullets: ["Study Abroad region pages", "Country comparisons", "University and course pathways"],
      },
      {
        title: "Documents and application readiness",
        body: "The knowledge center should support stronger preparation around SOPs, recommendation letters, financial proof, and planning timelines.",
        bullets: ["SOP and LOR resources", "Eligibility guidance", "Planning checklists"],
      },
      {
        title: "Exams, scholarships, and planning decisions",
        body: "Students can use the surrounding Abroadways ecosystem to connect exams, budgets, and academic goals into one direction.",
        bullets: ["IELTS and exam support", "Financial planning tools", "Consultation-led next steps"],
      },
    ],
    ctaTitle: "Move from reading into planning",
    ctaDescription: "Once you understand the basics, the next step is connecting that knowledge to your own profile and timeline.",
    ctaPrimaryText: "Book a consultation",
    ctaPrimaryUrl: "/contact",
    ctaSecondaryText: "Read the blog",
    ctaSecondaryUrl: "/blog",
  },
  counseling: {
    routeKey: "counseling",
    slug: "counseling",
    name: "Counselling",
    pageTitle: "Counselling",
    seoTitle: "Study Abroad Counselling | Abroadways",
    seoDescription: "Speak with Abroadways for counselling on destinations, documents, visas, and study abroad planning.",
    heroKicker: "Counselling",
    heroTitle: "Talk to Abroadways for clearer study abroad direction and better next steps.",
    heroSubtitle:
      "This page replaces the old counsellor surface with a cleaner explanation of what students can expect from Abroadways consultation support.",
    heroImageUrl: "/images/coun-hero.jpg",
    heroImageAlt: "Student counselling at Abroadways",
    bodyIntro:
      "A strong counselling experience should help students reduce uncertainty. That means understanding the student profile, budget, destination direction, documentation status, and deadlines before advice is given.",
    sections: [
      {
        title: "What counselling usually covers",
        body: "The first conversation should help students understand country fit, course direction, documentation readiness, and immediate next steps.",
        bullets: ["Destination and course fit", "Application and document planning", "Visa and process-level clarity"],
      },
      {
        title: "Why students use consultation support",
        body: "Students often need a more organised view of what to do first, what to prepare next, and what trade-offs matter most.",
        bullets: ["Reduce confusion", "Prioritise timelines", "Avoid avoidable application mistakes"],
      },
      {
        title: "Where it can lead next",
        body: "After a consultation, students can move into exam planning, documentation support, country research, applications, and a more structured student workflow.",
        bullets: ["Exam planning", "Document preparation", "Portal-based follow-up"],
      },
    ],
    ctaTitle: "Start with a clearer conversation",
    ctaDescription: "Use the consultation flow to move from broad interest into a more structured plan.",
    ctaPrimaryText: "Request a callback",
    ctaPrimaryUrl: "/contact",
    ctaSecondaryText: "Explore destinations",
    ctaSecondaryUrl: "/study-abroad",
  },
  finance: {
    routeKey: "finance",
    slug: "finance",
    name: "Finance Support",
    pageTitle: "Finance Support",
    seoTitle: "Finance Guidance | Abroadways",
    seoDescription: "Explore tuition, budgeting, funding pathways, and financial planning support with Abroadways.",
    heroKicker: "Finance Support",
    heroTitle: "Finance guidance that helps students and families plan study abroad with more confidence.",
    heroSubtitle:
      "Abroadways supports students with clearer thinking around tuition, living costs, affordability, and practical funding conversations.",
    heroImageUrl: "/images/finance-hero.png",
    heroImageAlt: "Student finance planning",
    bodyIntro:
      "Finance is often one of the biggest decision blockers. This page gives a clearer Abroadways explanation of how students can move from uncertainty into more structured financial planning.",
    sections: [
      {
        title: "Funding clarity before commitment",
        body: "Students should understand tuition, living costs, and family affordability before finalising a destination or intake plan.",
        bullets: ["Tuition and living-cost awareness", "Budget-fit conversations", "Funding pathway clarity"],
      },
      {
        title: "Support for scholarship and affordability planning",
        body: "Finance guidance should sit alongside destination fit and academic strategy, not as a separate last-minute step.",
        bullets: ["Scholarship awareness", "Payment planning conversations", "Stronger affordability decisions"],
      },
      {
        title: "A more practical planning workflow",
        body: "The best financial decisions happen when counselling, country choice, timelines, and documentation planning all connect.",
        bullets: ["Country-fit with budget context", "Consultation-led next steps", "Less guesswork for families"],
      },
    ],
    ctaTitle: "Need a clearer funding conversation?",
    ctaDescription: "Start with Abroadways to map tuition, affordability, and destination fit into one planning discussion.",
    ctaPrimaryText: "Talk to Abroadways",
    ctaPrimaryUrl: "/contact",
    ctaSecondaryText: "Explore study abroad",
    ctaSecondaryUrl: "/study-abroad",
  },
};

export const MANAGED_PUBLIC_PAGE_SLUGS = Object.keys(PUBLIC_PAGE_DEFAULTS);
