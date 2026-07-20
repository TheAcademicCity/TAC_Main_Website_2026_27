export type NavItem = {
  label: string;
  href: string;
  variant?: "default" | "cta";
  children?: Array<{
    label: string;
    href: string;
  }>;
};

/** The primary site pages. */
export const sitePages = {
  home: { path: "/", label: "Home" },
  about: { path: "/about", label: "About Us" },
  academics: { path: "/academics", label: "Academics" },
  coCurricular: { path: "/co-curricular", label: "Co-curricular" },
  boarding: { path: "/boarding", label: "Boarding" },
  admissions: { path: "/admissions", label: "Admissions" },
  blog: { path: "/blog", label: "Blogs & Newsletters" },
  enquiry: { path: "/#enquiry", label: "Enquiry" },
} as const;

export const mainNavigation: NavItem[] = [
  { label: sitePages.home.label, href: sitePages.home.path },
  { label: sitePages.about.label, href: sitePages.about.path },
  {
    label: "Explore TACS",
    href: sitePages.academics.path,
    children: [
      { label: sitePages.academics.label, href: sitePages.academics.path },
      { label: sitePages.coCurricular.label, href: sitePages.coCurricular.path },
      { label: sitePages.boarding.label, href: sitePages.boarding.path },
    ],
  },
  { label: sitePages.admissions.label, href: sitePages.admissions.path },
  { label: sitePages.blog.label, href: sitePages.blog.path },
  { label: "Apply Now", href: sitePages.enquiry.path, variant: "cta" },
];

export const mobileNavigation: NavItem[] = [
  { label: sitePages.home.label, href: sitePages.home.path },
  { label: sitePages.about.label, href: sitePages.about.path },
  { label: sitePages.academics.label, href: sitePages.academics.path },
  { label: sitePages.coCurricular.label, href: sitePages.coCurricular.path },
  { label: sitePages.boarding.label, href: sitePages.boarding.path },
  { label: sitePages.admissions.label, href: sitePages.admissions.path },
  { label: sitePages.blog.label, href: sitePages.blog.path },
  { label: "Apply Now", href: sitePages.enquiry.path, variant: "cta" },
];

export const footerNavigation = [
  {
    title: "Explore",
    links: [
      { label: sitePages.home.label, href: sitePages.home.path },
      { label: sitePages.about.label, href: sitePages.about.path },
      { label: sitePages.academics.label, href: sitePages.academics.path },
      { label: "Gallery", href: "/#gallery" },
      { label: sitePages.blog.label, href: sitePages.blog.path },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "How to Apply", href: sitePages.admissions.path },
      { label: "Boarding Life", href: sitePages.boarding.path },
      { label: "Awards", href: "/#awards" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
] as const;
