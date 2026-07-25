export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/About",
  },
  {
    label: "Application",
    href: "/Application",
  },
  {
    label: "Case Studies",
    href: "/CaseStudies",
  },
  {
    label: "Clients",
    href: "/Clients",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Dashboard",
    href: "https://dashboard.intelligreentech.com/accounts/login/?next=/",
    external: true,
  },
];
