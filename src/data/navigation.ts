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
  { label: "Courses", href: "/courses" },
  { label: "Mock Tests", href: "/mock-tests" },
  { label: "AbroadAI", href: "/abroadai" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
