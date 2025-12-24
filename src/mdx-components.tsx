import type { MDXComponents } from "mdx/types";
import A from "@/shadcn/components/MDX/A";
import Pre from "@/shadcn/components/MDX/Pre";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    ...components,
    a: A,
    pre: Pre,
  };
}
