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

const examDropdownItems: NavigationItem[] = [
  {
    label: "IELTS",
    href: "/exams/ielts/overview",
    dropdownItems: [
      { label: "Overview", href: "/exams/ielts/overview" },
      { label: "Types", href: "/exams/ielts/types" },
      { label: "Eligibility", href: "/exams/ielts/eligibility" },
      { label: "Registration", href: "/exams/ielts/registration" },
      { label: "Results", href: "/exams/ielts/results" },
      { label: "Syllabus", href: "/exams/ielts/syllabus" },
      { label: "Slot Booking", href: "/exams/ielts/slot-booking" },
    ],
  },
  {
    label: "PTE",
    href: "/exams/pte/overview",
    dropdownItems: [
      { label: "Overview", href: "/exams/pte/overview" },
      { label: "Books", href: "/resources/books/pte" },
    ],
  },
  {
    label: "TOEFL",
    href: "/exams/toefl/overview",
    dropdownItems: [
      { label: "Overview", href: "/exams/toefl/overview" },
      { label: "Registration", href: "/exams/toefl/registration" },
      { label: "Syllabus", href: "/exams/toefl/syllabus" },
      { label: "Preparation", href: "/exams/toefl/preparation" },
      { label: "Result", href: "/exams/toefl/result" },
    ],
  },
  {
    label: "LanguageCert",
    href: "/exams/overview",
    dropdownItems: [{ label: "Overview", href: "/exams/overview" }],
  },
  {
    label: "GRE",
    href: "/exams/gre/overview",
    dropdownItems: [
      { label: "Overview", href: "/exams/gre/overview" },
      { label: "Registration", href: "/exams/gre/registration" },
      { label: "Syllabus", href: "/exams/gre/syllabus" },
      { label: "Slot Booking", href: "/exams/gre/slot-booking" },
      { label: "Preparation", href: "/exams/gre/preparation" },
      { label: "Books", href: "/resources/books/gre" },
    ],
  },
  {
    label: "GMAT",
    href: "/exams/gmat/overview",
    dropdownItems: [
      { label: "Overview", href: "/exams/gmat/overview" },
      { label: "Preparation", href: "/exams/gmat/preparation" },
      { label: "Registration", href: "/exams/gmat/registration" },
      { label: "Sample Questions", href: "/exams/gmat/sample-question" },
      { label: "Syllabus", href: "/exams/gmat/syllabus" },
    ],
  },
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
    hasDropdown: true,
    isExamSection: true,
    dropdownItems: examDropdownItems,
  },
  { label: "Courses", href: "/courses" },
  { label: "Mock Tests", href: "/mock-tests" },
  { label: "AbroadAI", href: "/abroadai" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
