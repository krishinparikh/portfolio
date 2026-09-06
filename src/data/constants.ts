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
  "seeking discomfort",
  "process over outcomes",
  "investing in relationships",
  "working hard, playing hard",
  "following curiosity",
  "seeking different viewpoints",
  "walking the talk",
  "focusing on the long-term",
];

export const CAROUSEL_TIMING = {
  interval: 3000,
  fade: 500,
} as const;

export const AURORA = {
  colorStops: ["#6d28d9", "#ec4899", "#06b6d4"] as [string, string, string],
  blend: 0.5,
  amplitude: 1.0,
  speed: 0.5,
  lightMode: true,
} as const;
