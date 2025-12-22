/** biome-ignore-all lint/a11y/useValidAnchor: <> */

"use client";

import type { ComponentProps } from "react";

export function ObfuscatedEmail({ ...props }: ComponentProps<"a">) {
  const link = "mailto:me@bakir.dev";

  return (
    <a
      href="#"
      onFocus={(e) => {
        e.currentTarget.href = link;
      }}
      onMouseEnter={(e) => {
        e.currentTarget.href = link;
      }}
      onClick={(e) => {
        if (e.currentTarget.href.endsWith("#")) {
          e.preventDefault();
          window.location.href = link;
        }
      }}
      {...props}
    />
  );
}
