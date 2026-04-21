import { higherEducationRegions, studyAbroadRegionOrder, type RegionCountry } from "@/data/higher-education-regions";

export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isExamSection?: boolean;
  dropdownItems?: Array<NavigationItem>;
}

function buildCountryItem(country: RegionCountry): NavigationItem {
  const overviewHref = `/study-abroad/${country.slug}`;

  if (country.links?.length) {
    return {
      label: country.name,
      href: overviewHref,
      hasDropdown: true,
      dropdownItems: [
        { label: `${country.name} Overview`, href: overviewHref },
        ...country.links.map((link) => ({ label: link.label, href: link.href })),
      ],
    };
  }

  return {
    label: country.name,
    href: overviewHref,
  };
}

const studyAbroadDropdownItems: NavigationItem[] = [
  { label: "Study Abroad Overview", href: "/study-abroad" },
  ...studyAbroadRegionOrder.map((regionSlug) => {
    const region = higherEducationRegions[regionSlug];

    return {
      label: region.name,
      href: `/study-abroad/${region.slug}`,
      hasDropdown: true,
      dropdownItems: [
        { label: `${region.name} Overview`, href: `/study-abroad/${region.slug}` },
        ...region.countries.map(buildCountryItem),
      ],
    };
  }),
];

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Study Abroad",
    href: "/study-abroad",
    hasDropdown: true,
    dropdownItems: studyAbroadDropdownItems,
  },
  {
    label: "Exams",
    href: "/exams/overview",
    isExamSection: true,
    hasDropdown: true,
    dropdownItems: [
      {
        label: "IELTS",
        href: "/exams/ielts/overview",
        hasDropdown: true,
        dropdownItems: [
          { label: "Overview", href: "/exams/ielts/overview" },
          { label: "Types", href: "/exams/ielts/types" },
          { label: "Eligibility", href: "/exams/ielts/eligibility" },
          { label: "Registration", href: "/exams/ielts/registration" },
          { label: "Results", href: "/exams/ielts/results" },
          { label: "Syllabus", href: "/exams/ielts/syllabus" },
          { label: "Exam Dates", href: "/exams/ielts/dates" },
          { label: "Fees", href: "/exams/ielts/fees" },
          { label: "Test Centres", href: "/exams/ielts/centers" },
          { label: "Practice Hub", href: "/exams/ielts/practice/all-in-one" },
        ],
      },
      {
        label: "LanguageCert",
        href: "/exams/overview",
        hasDropdown: true,
        dropdownItems: [
          { label: "LanguageCert Guidance", href: "/exams/overview" },
          { label: "UKVI Approved Support", href: "/contact" },
          { label: "Book LanguageCert Support", href: "/contact" },
        ],
      },
      {
        label: "TOEFL",
        href: "/exams/toefl/overview",
        hasDropdown: true,
        dropdownItems: [
          { label: "Overview", href: "/exams/toefl/overview" },
          { label: "Registration", href: "/exams/toefl/registration" },
          { label: "Syllabus", href: "/exams/toefl/syllabus" },
          { label: "Preparation", href: "/exams/toefl/preparation" },
          { label: "Results", href: "/exams/toefl/result" },
        ],
      },
      {
        label: "PTE",
        href: "/exams/pte/overview",
        hasDropdown: true,
        dropdownItems: [{ label: "Overview", href: "/exams/pte/overview" }],
      },
      {
        label: "GRE",
        href: "/exams/gre/overview",
        hasDropdown: true,
        dropdownItems: [
          { label: "Overview", href: "/exams/gre/overview" },
          { label: "Registration", href: "/exams/gre/registration" },
          { label: "Syllabus", href: "/exams/gre/syllabus" },
          { label: "Slot Booking", href: "/exams/gre/slot-booking" },
          { label: "Preparation", href: "/exams/gre/preparation" },
        ],
      },
      {
        label: "GMAT",
        href: "/exams/gmat/overview",
        hasDropdown: true,
        dropdownItems: [
          { label: "Overview", href: "/exams/gmat/overview" },
          { label: "Preparation", href: "/exams/gmat/preparation" },
          { label: "Registration", href: "/exams/gmat/registration" },
          { label: "Sample Questions", href: "/exams/gmat/sample-question" },
          { label: "Syllabus", href: "/exams/gmat/syllabus" },
        ],
      },
      {
        label: "SAT",
        href: "/exams/sat/preparation",
        hasDropdown: true,
        dropdownItems: [
          { label: "Preparation", href: "/exams/sat/preparation" },
          { label: "Eligibility", href: "/exams/sat/eligibility" },
          { label: "Registration", href: "/exams/sat/registration" },
          { label: "Syllabus", href: "/exams/sat/syllabus" },
        ],
      },
      {
        label: "Duolingo",
        href: "/exams/duolingo/preparation",
        hasDropdown: true,
        dropdownItems: [
          { label: "Preparation", href: "/exams/duolingo/preparation" },
          { label: "Fees", href: "/exams/duolingo/fees" },
          { label: "Sample Questions", href: "/exams/duolingo/sample" },
          { label: "Syllabus", href: "/exams/duolingo/syllabus" },
        ],
      },
      { label: "Exam Overview", href: "/exams/overview" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Event", href: "/event" },
  {
    label: "Resources",
    href: "/resources",
    hasDropdown: true,
    dropdownItems: [
      { label: "Resources Overview", href: "/resources" },
      {
        label: "Books",
        href: "/resources",
        hasDropdown: true,
        dropdownItems: [
          { label: "IELTS Books", href: "/resources/books/ielts" },
          { label: "PTE Books", href: "/resources/books/pte" },
          { label: "GRE Books", href: "/resources/books/gre" },
        ],
      },
      { label: "SOP Support", href: "/resources/sop" },
      { label: "Eligibility Checker", href: "/resources/eligibility" },
      { label: "Visa Predictor", href: "/visa-predictor" },
      { label: "Cost Calculator", href: "/calculator/cost" },
      { label: "CGPA Calculator", href: "/calculator/cgpa" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
