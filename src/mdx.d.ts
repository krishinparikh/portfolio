declare module "*.mdx" {
  import { ComponentType } from "react";

  export const frontmatter: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    slug: string;
    type: "project" | "service";
    tools?: string;
    website?: string;
    github?: string;
    order: number;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
