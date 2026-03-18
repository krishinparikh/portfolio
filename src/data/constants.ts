import { NavItem } from "@/types";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/krishin-parikh/",
  github: "https://github.com/krishinparikh",
  youtube: "https://www.youtube.com/@k2bfree",
} as const;

export const CONTACT = {
  email: "krishinparikh@gmail.com",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", exact: true },
  { label: "Portfolio", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Story", href: "/story" },
];

export const HOME_PHRASES = [
  "seek discomfort",
  "process over outcomes",
  "invest in relationships",
  "work hard, play hard",
  "follow curiosity",
  "seek different viewpoints",
  "walk the talk",
  "focus on the long-term",
];

export const CAROUSEL_TIMING = {
  interval: 3000,
  fade: 500,
} as const;
