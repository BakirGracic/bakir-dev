import type { MDXComponents } from "mdx/types";
import A from "@/features/MDX/A";
import Pre from "@/features/MDX/Pre";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    ...components,
    a: A,
    pre: Pre,
  };
}
