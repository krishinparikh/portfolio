import { Project } from "@/types";
import { getProjects } from "@/content";

export const projects: Project[] = [
  ...getProjects().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    image: p.image,
    link: `/projects/${p.slug}`,
    tools: p.tools,
    content: p.Component,
  })),
  {
    slug: "",
    title: "Personal Website",
    description: "This website!",
    image: "/images/projects/personal-website/thumbnail.jpg",
    link: "/",
    tools: "Next.js • TypeScript • Tailwind • Vercel",
  },
];
