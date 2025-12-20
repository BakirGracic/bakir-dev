import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // index
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || ""}`,
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
