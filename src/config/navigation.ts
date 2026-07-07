export type NavItem = {
  label: string;
  href: string;
  variant?: "default" | "cta";
  children?: Array<{
    label: string;
    href: string;
  }>;
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Explore TACS",
    href: "/academics",
    children: [
      { label: "Academics", href: "/academics" },
      { label: "Co-curricular", href: "/co-curricular" },
      { label: "Boarding", href: "/campus" },
      { label: "Career Guidance", href: "/career-guidance" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Blog", href: "/blog" },
  { label: "Apply Now", href: "/contact", variant: "cta" },
];

export const mobileNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Explore TACS", href: "/academics" },
  { label: "Academics", href: "/academics" },
  { label: "Campus", href: "/campus" },
  { label: "Leadership", href: "/about#leadership" },
  { label: "Admissions", href: "/admissions" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Apply Now", href: "/contact", variant: "cta" },
];

export const footerNavigation = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Academics", href: "/academics" },
      { label: "Gallery", href: "/#gallery" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Our Campus", href: "/campus" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Awards", href: "/#awards" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
] as const;

/**
 * Planned routes — page.tsx files will be added when each page is built.
 * Route group: src/app/(site)/
 */
export const plannedRoutes = [
  { path: "/", name: "Home", status: "in-progress" },
  { path: "/about", name: "About Us", status: "planned" },
  { path: "/academics", name: "Academics", status: "planned" },
  { path: "/co-curricular", name: "Co-curricular", status: "planned" },
  { path: "/campus", name: "Campus & Boarding", status: "planned" },
  { path: "/career-guidance", name: "Career Guidance", status: "planned" },
  { path: "/admissions", name: "Admissions", status: "planned" },
  { path: "/blog", name: "Blog", status: "planned" },
  { path: "/contact", name: "Contact", status: "planned" },
] as const;
