"use client";

import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

export default function IntersectionObserver({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Observer.start();
  }, []);

  return <>{children}</>;
}
