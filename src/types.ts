import { ComponentType } from "react";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tools?: string;
  content?: ComponentType;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  content?: ComponentType;
}

export interface NavItem {
  label: string;
  href: string;
  exact?: boolean;
}
