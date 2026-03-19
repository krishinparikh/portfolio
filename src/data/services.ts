import { Service } from "@/types";
import { getServices } from "@/content";

export const services: Service[] = getServices().map((s) => ({
  slug: s.slug,
  title: s.title,
  description: s.description,
  image: s.image,
  link: `/services/${s.slug}`,
  content: s.Component,
}));
