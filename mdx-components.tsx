import type { MDXComponents } from "mdx/types";
import { FullImage } from "@/components/content-container";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-8 mb-3" {...props} />,
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
