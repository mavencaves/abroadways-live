import { Link } from "react-router";
import { IconBrandTelegram } from "@tabler/icons-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import TrustBadge from "@/components/trust-badge";
import {
  Database,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneCallIcon,
  Twitter,
  YoutubeIcon,
} from "lucide-react";

type FooterLink = {
  label: string;
  to: string;
  external?: boolean;
};

type FooterGroup = {
  title: string;
  items: FooterLink[];
  subSection?: {
    title: string;
    items: FooterLink[];
  };
};

const quickLinkGroups: Array<
  Array<{ value: string; trigger: string; content: string; to: string; external?: boolean }>
> = [
  [
    {
      value: "ielts-centers",
      trigger: "IELTS Test Centers",
      content: "Explore IELTS testing centre guidance and location support.",
      to: "/exams/ielts/centers",
    },
    {
      value: "calculators",
      trigger: "Calculators",
      content: "Use planning tools like cost and CGPA calculators.",
      to: "/calculator/cost",
    },
    {
      value: "lor-sop",
      trigger: "LOR & SOP",
      content: "Support for recommendation letters and statements of purpose.",
      to: "/resources/sop",
    },
    {
      value: "other-exams",
      trigger: "Other Exams",
      content: "Compare more international exams and preparation paths.",
      to: "/exams/overview",
    },
  ],
  [
    {
      value: "free-counseling",
      trigger: "Free Counseling",
      content: "Start with an initial consultation for your study abroad plan.",
      to: "/testimonials/counseling",
    },
    {
      value: "ielts-coaching",
      trigger: "IELTS Coaching",
      content: "Structured IELTS preparation and guidance for stronger scores.",
      to: "/offers/ielts-masterclass",
    },
    {
      value: "duolingo",
      trigger: "Duolingo English Test",
      content: "Preparation support for Duolingo English Test pathways.",
      to: "/exams/duolingo/preparation",
    },
    {
      value: "top-universities",
      trigger: "Top Universities",
      content: "Explore high-interest universities and destination choices.",
      to: "/study-abroad",
    },
  ],
  [
    {
      value: "study-abroad",
      trigger: "Study Abroad",
      content: "Discover study abroad routes and destination planning support.",
      to: "/study-abroad",
    },
    {
      value: "cue-cards",
      trigger: "Cue Card Categories",
      content: "IELTS speaking cue card guidance and practice content.",
      to: "/ielts-cue-cards",
    },
    {
      value: "ielts",
      trigger: "IELTS",
      content: "Complete IELTS overview, eligibility, registration, and support.",
      to: "/exams/ielts/overview",
    },
    {
      value: "ielts-practice",
      trigger: "IELTS Practice Tests",
      content: "Practice-focused IELTS resources in one place.",
      to: "/exams/ielts/practice/all-in-one",
    },
  ],
  [
    {
      value: "study-abroad-app",
      trigger: "Download Study Abroad App",
      content: "Get the mobile-friendly student guidance experience.",
      to: "/contact",
    },
    {
      value: "ielts-writing-task2",
      trigger: "IELTS Writing Task 2 Categories",
      content: "Review Writing Task 2 topic directions and preparation support.",
      to: "/exams/ielts/practice/writing",
    },
    {
      value: "ielts-writing-practice",
      trigger: "IELTS Writing Task 2 Practice",
      content: "Practice more confidently with IELTS writing-focused support.",
      to: "/exams/ielts/practice/writing",
    },
    {
      value: "ielts-app",
      trigger: "Download IELTS Prep App",
      content: "Access IELTS preparation support in a more mobile-friendly way.",
      to: "/contact",
    },
  ],
];

const socialLinks = [
  { href: "https://facebook.com/abroadways", icon: FacebookIcon, label: "Facebook" },
  { href: "https://instagram.com/abroadwaysbd", icon: InstagramIcon, label: "Instagram" },
  { href: "https://linkedin.com/company/abroadways", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://youtube.com/@abroadways", icon: YoutubeIcon, label: "YouTube" },
  { href: "https://twitter.com/abroadways", icon: Twitter, label: "Twitter" },
  { href: "https://t.me/abroadways", icon: IconBrandTelegram, label: "Telegram" },
];

const appDownloads = [
  {
    title: "Download the Abroadways Study Abroad App",
    apps: [
      { href: "/contact", src: "/images/google-play.png", alt: "Get it on Google Play" },
      { href: "/contact", src: "/images/apple-store.png", alt: "Download on the App Store" },
    ],
  },
  {
    title: "Download the Abroadways IELTS Prep App",
    apps: [{ href: "/contact", src: "/images/google-play.png", alt: "Get it on Google Play" }],
  },
];

const contactInfo = [
  {
    icon: PhoneCallIcon,
    text: (
      <span>
        Call us: <span className="font-bold">+880 1898801960</span>
        <br />
        <span className="text-xs text-slate-300">(10:00 AM to 7:00 PM, Bangladesh time)</span>
      </span>
    ),
  },
  {
    icon: MailIcon,
    text: "Email us: info@abroadways.com.bd",
  },
];

const officeAddresses = [
  {
    title: "Head Office - Dhaka, Bangladesh",
    address: "Primary student consultation and higher education support desk in Dhaka.",
  },
  {
    title: "Student Support Desk - Dhaka",
    address: "Additional counselling and operational support for students and parents in Bangladesh.",
  },
  {
    title: "Singapore International Desk",
    address: "International coordination support for selected destination-related enquiries.",
  },
  {
    title: "UAE International Desk",
    address: "International assistance for students exploring broader global education options.",
  },
];

const footerColumns: FooterGroup[] = [
  {
    title: "Countries",
    items: [
      { label: "United States", to: "/study-abroad/usa" },
      { label: "United Kingdom", to: "/study-abroad/uk" },
      { label: "Canada", to: "/study-abroad/canada" },
      { label: "Australia", to: "/study-abroad/australia" },
      { label: "Ireland", to: "/study-abroad/ireland" },
      { label: "Germany", to: "/study-abroad/germany" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Abroadways In The News", to: "/blog" },
      { label: "Contact Us", to: "/contact" },
    ],
    subSection: {
      title: "Our Partners",
      items: [
      { label: "Yocket Study Abroad", to: "/contact" },
      { label: "GEEBEE", to: "/contact" },
      ],
    },
  },
  {
    title: "Our Offers",
    items: [
      { label: "Free IELTS Masterclass", to: "/offers/ielts-masterclass" },
      { label: "Talk To A Counselor", to: "/testimonials/counseling" },
      { label: "Upcoming Events", to: "/event" },
      { label: "Consultation Support", to: "/contact" },
      { label: "Twinning Programs", to: "/contact" },
      { label: "Cost Calculator", to: "/calculator/cost" },
      { label: "CGPA Calculator", to: "/calculator/cgpa" },
      { label: "Blog", to: "/blog" },
      { label: "Knowledge Center", to: "/knowledge-center" },
      { label: "Event", to: "/event" },
    ],
    subSection: {
      title: "Testimonials",
      items: [
        { label: "IELTS", to: "/exams/ielts/overview" },
        { label: "Counseling", to: "/testimonials/counseling" },
      ],
    },
  },
  {
    title: "Our Products",
    items: [
      { label: "Abroadways Finance", to: "/products/finance" },
      { label: "Abroadways Advantage", to: "/products/facilities" },
      { label: "IELTS Masterclass", to: "/offers/ielts-masterclass" },
      { label: "Study Abroad Blog", to: "/blog" },
      { label: "AbroadAI", to: "/abroadai" },
      { label: "All-In-One IELTS Preparation", to: "/exams/ielts/practice/all-in-one" },
    ],
    subSection: {
      title: "Exam Information",
      items: [
        { label: "IELTS", to: "/exams/ielts/overview" },
        { label: "TOEFL", to: "/exams/toefl/overview" },
        { label: "SAT", to: "/exams/sat/preparation" },
        { label: "PTE", to: "/exams/pte/overview" },
        { label: "GRE", to: "/exams/gre/overview" },
        { label: "GMAT", to: "/exams/gmat/overview" },
      ],
    },
  },
];

function FooterActionLink({ item }: { item: FooterLink }) {
  if (item.external) {
    return (
      <a href={item.to} className="hover:text-white transition-colors">
        {item.label}
      </a>
    );
  }

  return (
    <Link to={item.to} className="hover:text-white transition-colors">
      {item.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#06142f_0%,#0a1d45_45%,#08122b_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 xl:flex-row">
          <div className="w-full min-w-0 xl:w-[29%]">
            <div className="rounded-[2rem] border border-white/10 bg-white/7 p-7 shadow-[0_24px_70px_rgba(2,8,23,0.28)]">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-white/10 text-white">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-3xl font-bold leading-none">Abroadways</div>
                  <TrustBadge compact className="mt-2" />
                </div>
              </Link>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-2 text-blue-600 transition hover:scale-105"
                      aria-label={social.label}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  );
                })}
              </div>

              <div id="footer-apps" className="mt-7 space-y-5">
                {appDownloads.map((download) => (
                  <div key={download.title}>
                    <div className="mb-2 text-sm font-medium text-slate-100">{download.title}</div>
                    <div className="flex flex-wrap gap-3">
                      {download.apps.map((app) => (
                        <Link key={app.alt} to={app.href}>
                          <img src={app.src} width={120} height={36} alt={app.alt} />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <div className="text-base font-semibold">Contact Us</div>
                <div className="mt-3 space-y-3">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;

                    return (
                      <div key={index} className="flex items-start gap-3 text-sm text-slate-100">
                        <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange-300" />
                        <div>{contact.text}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-4 text-base font-semibold">Office Locations</div>
                <div className="space-y-4">
                  {officeAddresses.map((office) => (
                    <div key={office.title} className="text-sm">
                      <div className="font-medium text-white">{office.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-slate-300">{office.address}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="rounded-[2rem] border border-white/10 bg-white/7 p-6 shadow-[0_24px_70px_rgba(2,8,23,0.28)]">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {quickLinkGroups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <Accordion type="single" collapsible className="space-y-1">
                      {group.map((item) => (
                        <AccordionItem key={item.value} value={item.value} className="border-none">
                          <AccordionTrigger className="py-2 text-left text-sm font-medium text-white hover:no-underline">
                            <FooterActionLink item={{ label: item.trigger, to: item.to, external: item.external }} />
                          </AccordionTrigger>
                          <AccordionContent className="pb-2 text-xs leading-6 text-slate-300">
                            {item.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>

              <Separator className="my-8 bg-white/12" />

              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <div className="mb-4 text-base font-semibold">{column.title}</div>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {column.items.map((item) => (
                        <li key={item.label}>
                          <FooterActionLink item={item} />
                        </li>
                      ))}
                    </ul>

                    {column.subSection ? (
                      <>
                        <div className="mb-3 mt-6 text-base font-semibold">{column.subSection.title}</div>
                        <ul className="space-y-2 text-sm text-slate-200">
                          {column.subSection.items.map((item) => (
                            <li key={item.label}>
                              <FooterActionLink item={item} />
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>

              <Separator className="my-8 bg-white/12" />

              <div className="flex flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-5">
                  <Link to="/privacy-policy" className="transition hover:text-white">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="transition hover:text-white">
                    Terms
                  </Link>
                  <Link to="/refund-policy" className="transition hover:text-white">
                    Refund Policy
                  </Link>
                </div>
                <div>© 2026 Abroadways. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
