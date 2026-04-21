export interface CountryLink {
  label: string;
  href: string;
}

export interface RegionSummary {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  highlights: [string, string];
}

export interface RegionCountry {
  slug: string;
  name: string;
  description: string;
  ctaLabel?: string;
  status?: "active" | "coming-soon";
  links?: CountryLink[];
}

export interface RegionContent {
  slug: string;
  name: string;
  heroTitle: string;
  heroDescription: string;
  supportNote: string;
  overviewGroups?: string[];
  countries: RegionCountry[];
}

export interface StudyAbroadCountry extends RegionCountry {
  regionSlug: string;
  regionName: string;
}

const consultationLinks: CountryLink[] = [
  { label: "Book a Consultation", href: "/contact" },
  { label: "Scholarship Guidance", href: "/contact" },
  { label: "Visa Guidance", href: "/contact" },
];

export const studyAbroadRegionOrder = [
  "asia",
  "europe",
  "north-america",
  "south-america",
  "australia-oceania",
] as const;

export const higherEducationRegions: Record<string, RegionContent> = {
  asia: {
    slug: "asia",
    name: "Asia",
    heroTitle: "Study opportunities across Asia for students seeking practical, high-potential pathways.",
    heroDescription:
      "Explore student-focused options across Asia with guidance on destination fit, affordability, programme direction, and future study plans.",
    supportNote:
      "These country cards are designed as region-level guidance entry points. Detailed country content can be expanded safely in later phases.",
    overviewGroups: [
      "Affordable and value-conscious destinations",
      "Regional access and practical planning",
      "Business, technology, and health pathways",
    ],
    countries: [
      {
        slug: "malaysia",
        name: "Malaysia",
        description: "A strong choice for cost-conscious students seeking international education with practical living costs.",
        ctaLabel: "Plan Malaysia",
        links: consultationLinks,
      },
      {
        slug: "thailand",
        name: "Thailand",
        description: "An accessible regional destination for students exploring emerging higher education opportunities in Asia.",
        ctaLabel: "Ask About Thailand",
        links: consultationLinks,
      },
      {
        slug: "singapore",
        name: "Singapore",
        description: "Known for premium institutions, strong city infrastructure, and a highly international academic environment.",
        ctaLabel: "Explore Singapore",
        links: consultationLinks,
      },
      {
        slug: "china",
        name: "China",
        description: "A large-scale study destination with growing international visibility across science, technology, and medicine.",
        ctaLabel: "Explore China",
        links: consultationLinks,
      },
      {
        slug: "russia",
        name: "Russia",
        description: "An option some students consider for specialised academic routes and budget-sensitive planning.",
        ctaLabel: "Discuss Russia",
        links: consultationLinks,
      },
      {
        slug: "indonesia",
        name: "Indonesia",
        description: "A developing regional opportunity for students comparing newer education pathways in Asia.",
        ctaLabel: "Ask About Indonesia",
        links: consultationLinks,
      },
    ],
  },
  europe: {
    slug: "europe",
    name: "Europe",
    heroTitle: "Europe study pathways with stronger structure for scholarships, affordability, and country selection.",
    heroDescription:
      "Europe remains one of the most searched destinations for Bangladeshi students because it combines academic quality, diverse systems, and scholarship-friendly routes.",
    supportNote:
      "Where deep country content is not yet built, these cards point students into safe next-step consultation rather than unfinished inner pages.",
    overviewGroups: [
      "Non-Schengen UK and wider European routes",
      "Schengen study destinations",
      "Baltic countries",
      "Scandinavian countries",
      "Scholarship-friendly European options",
    ],
    countries: [
      {
        slug: "uk",
        name: "United Kingdom",
        description: "A trusted destination for respected qualifications, shorter degree durations, and strong student demand.",
        ctaLabel: "View UK Pathways",
        links: [
          { label: "Top Universities", href: "/study-abroad/uk/universities/oxford-university" },
          { label: "Popular Courses", href: "/study-abroad/uk/courses/llm" },
          { label: "Book a Consultation", href: "/contact" },
        ],
      },
      {
        slug: "france",
        name: "France",
        description: "A strong European option for business, design, hospitality, and increasingly international study pathways.",
        ctaLabel: "Explore France",
        links: consultationLinks,
      },
      {
        slug: "germany",
        name: "Germany",
        description: "Popular for value-conscious students exploring engineering, technology, and affordability-led options.",
        ctaLabel: "Plan Germany",
        links: consultationLinks,
      },
      {
        slug: "ireland",
        name: "Ireland",
        description: "A growing favourite for business, technology, and student-friendly European study planning.",
        ctaLabel: "Explore Ireland",
        links: consultationLinks,
      },
      {
        slug: "netherlands",
        name: "Netherlands",
        description: "Known for English-taught degrees, global classrooms, and modern university environments.",
        ctaLabel: "Explore Netherlands",
        links: consultationLinks,
      },
      {
        slug: "finland",
        name: "Finland",
        description: "A modern study destination with strong academic quality and student-centred education pathways.",
        ctaLabel: "Explore Finland",
        links: consultationLinks,
      },
      {
        slug: "denmark",
        name: "Denmark",
        description: "Attractive for students seeking structured learning, quality teaching, and a high-trust academic environment.",
        ctaLabel: "Ask About Denmark",
        links: consultationLinks,
      },
      {
        slug: "sweden",
        name: "Sweden",
        description: "A strong option for innovative education, research culture, and forward-looking study plans.",
        ctaLabel: "Ask About Sweden",
        links: consultationLinks,
      },
      {
        slug: "austria",
        name: "Austria",
        description: "A well-regarded Central European option for students exploring quality education and long-term value.",
        ctaLabel: "Explore Austria",
        links: consultationLinks,
      },
      {
        slug: "belgium",
        name: "Belgium",
        description: "An appealing route for students interested in multilingual European environments and international networks.",
        ctaLabel: "Explore Belgium",
        links: consultationLinks,
      },
      {
        slug: "hungary",
        name: "Hungary",
        description: "Often explored for scholarship-driven study plans and broad European degree access.",
        ctaLabel: "Explore Hungary",
        links: consultationLinks,
      },
      {
        slug: "romania",
        name: "Romania",
        description: "A practical option for students comparing cost, programme access, and developing European pathways.",
        ctaLabel: "Explore Romania",
        links: consultationLinks,
      },
      {
        slug: "lithuania",
        name: "Lithuania",
        description: "A growing destination among students looking at Baltic Europe with manageable study costs.",
        ctaLabel: "Explore Lithuania",
        links: consultationLinks,
      },
      {
        slug: "estonia",
        name: "Estonia",
        description: "A digitally forward Baltic destination for students seeking innovative academic environments.",
        ctaLabel: "Explore Estonia",
        links: consultationLinks,
      },
      {
        slug: "latvia",
        name: "Latvia",
        description: "A Baltic option for students comparing affordable tuition and practical European entry pathways.",
        ctaLabel: "Explore Latvia",
        links: consultationLinks,
      },
      {
        slug: "croatia",
        name: "Croatia",
        description: "A rising option for students exploring diverse European study environments beyond the most common markets.",
        ctaLabel: "Explore Croatia",
        links: consultationLinks,
      },
      {
        slug: "cyprus",
        name: "Cyprus",
        description: "A well-known option for students looking for English-medium study routes with a familiar international environment.",
        ctaLabel: "Explore Cyprus",
        links: consultationLinks,
      },
      {
        slug: "malta",
        name: "Malta",
        description: "A smaller but accessible route for students looking at English-speaking options in Europe.",
        ctaLabel: "Discuss Malta",
        links: consultationLinks,
      },
      {
        slug: "greece",
        name: "Greece",
        description: "An emerging route for students exploring Mediterranean Europe and alternative study environments.",
        ctaLabel: "Explore Greece",
        links: consultationLinks,
      },
    ],
  },
  "north-america": {
    slug: "north-america",
    name: "North America",
    heroTitle: "North America guidance for students targeting globally recognised study destinations.",
    heroDescription:
      "North America remains a premium destination group for students prioritising university reputation, research access, and long-term academic outcomes.",
    supportNote:
      "Canada and the United States already connect to supported project content, so these cards link into live destination material safely.",
    overviewGroups: [
      "Top-ranked universities",
      "Research and career outcomes",
      "Selective application planning",
    ],
    countries: [
      {
        slug: "canada",
        name: "Canada",
        description: "A high-demand destination for quality education, strong post-study planning, and family confidence.",
        ctaLabel: "View Canada Pathways",
        links: [
          { label: "Top Universities", href: "/study-abroad/canada/universities/university-of-toronto" },
          { label: "Popular Courses", href: "/study-abroad/canada/courses/mba" },
          { label: "Book a Consultation", href: "/contact" },
        ],
      },
      {
        slug: "usa",
        name: "United States",
        description: "Ideal for students aiming for top-ranked universities, academic depth, and ambitious global outcomes.",
        ctaLabel: "View USA Pathways",
        links: [
          { label: "Top Universities", href: "/study-abroad/usa/universities/harvard-university" },
          { label: "Popular Courses", href: "/study-abroad/usa/courses/mscs" },
          { label: "Book a Consultation", href: "/contact" },
        ],
      },
    ],
  },
  "south-america": {
    slug: "south-america",
    name: "South America",
    heroTitle: "South America study options prepared as a clean regional entry point for future expansion.",
    heroDescription:
      "This region page is ready for structured growth while keeping the experience polished and route-safe today.",
    supportNote:
      "South America content is intentionally light for now. These cards act as placeholders so we can expand destination-specific guidance safely later.",
    overviewGroups: [
      "Placeholder destination structure",
      "Consultation-first planning",
      "Future country expansion",
    ],
    countries: [
      {
        slug: "brazil",
        name: "Brazil",
        description: "Regional guidance for Brazil can be expanded in a future content phase.",
        ctaLabel: "Request Guidance",
        status: "coming-soon",
        links: consultationLinks,
      },
      {
        slug: "argentina",
        name: "Argentina",
        description: "A placeholder destination card prepared for later country-level content development.",
        ctaLabel: "Request Guidance",
        status: "coming-soon",
        links: consultationLinks,
      },
      {
        slug: "chile",
        name: "Chile",
        description: "This country card is visually ready and can be developed further in a later destination phase.",
        ctaLabel: "Request Guidance",
        status: "coming-soon",
        links: consultationLinks,
      },
    ],
  },
  "australia-oceania": {
    slug: "australia-oceania",
    name: "Australia / Oceania",
    heroTitle: "Australia and Oceania pathways for students looking for practical, premium international study routes.",
    heroDescription:
      "This region balances active destination support with visually complete placeholders so the experience stays polished without forcing unfinished content.",
    supportNote:
      "Australia connects to live project pages today. Oceania expansion can continue later without changing this regional structure again.",
    overviewGroups: [
      "Premium destination demand",
      "Career-focused course planning",
      "Australia live with Oceania growth",
    ],
    countries: [
      {
        slug: "australia",
        name: "Australia",
        description: "A popular route for students seeking recognised universities, lifestyle appeal, and post-study planning flexibility.",
        ctaLabel: "View Australia Pathways",
        links: [
          { label: "Top Universities", href: "/study-abroad/australia/universities/monash-university" },
          { label: "Popular Courses", href: "/study-abroad/australia/courses/msc-cs" },
          { label: "Book a Consultation", href: "/contact" },
        ],
      },
      {
        slug: "new-zealand",
        name: "New Zealand",
        description: "Prepared as a clean Oceania card for future destination-specific development.",
        ctaLabel: "Ask About New Zealand",
        status: "coming-soon",
        links: consultationLinks,
      },
    ],
  },
};

export const regionSummaries: RegionSummary[] = [
  {
    slug: "asia",
    name: "Asia",
    kicker: "Accessible Growth",
    description:
      "Fast-rising study destinations with practical tuition ranges, strong city-based opportunities, and attractive regional mobility.",
    highlights: ["6 countries", "High demand"],
  },
  {
    slug: "europe",
    name: "Europe",
    kicker: "Scholarship Friendly",
    description:
      "A strong option for students comparing affordability, scholarships, English-taught programmes, and diverse visa pathways.",
    highlights: ["19 countries", "Broad pathways"],
  },
  {
    slug: "north-america",
    name: "North America",
    kicker: "High Recognition",
    description:
      "Premium higher education pathways for students targeting globally respected universities, research, and long-term outcomes.",
    highlights: ["Canada + USA", "Top-ranked options"],
  },
  {
    slug: "south-america",
    name: "South America",
    kicker: "Emerging Options",
    description:
      "A developing opportunity set for students exploring newer global routes, regional partnerships, and future-ready alternatives.",
    highlights: ["Placeholder structure", "Safe routes"],
  },
  {
    slug: "australia-oceania",
    name: "Australia / Oceania",
    kicker: "Career Focused",
    description:
      "Practical international study routes with strong student lifestyle appeal, recognised universities, and clear next-step planning.",
    highlights: ["Australia + NZ", "Oceania growth"],
  },
];

export const allStudyAbroadCountries: StudyAbroadCountry[] = studyAbroadRegionOrder.flatMap((regionSlug) =>
  higherEducationRegions[regionSlug].countries.map((country) => ({
    ...country,
    regionSlug,
    regionName: higherEducationRegions[regionSlug].name,
  })),
);

export function getStudyAbroadCountryBySlug(slug: string) {
  return allStudyAbroadCountries.find((country) => country.slug === slug);
}
