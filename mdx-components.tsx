import type { MDXComponents } from "mdx/types";
import { FullImage } from "@/components/content-container";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-12 max-md:text-[2rem]" {...props} />,
    a: (props) => {
      const isExternal = props.href && !props.href.startsWith("/");
      return isExternal ? (
        <a target="_blank" rel="noopener noreferrer" {...props} />
      ) : (
        <a {...props} />
      );
    },
    FullImage,
    ...components,
  };
}
