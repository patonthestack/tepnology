import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

const routes = ["", "/services", "/capabilities", "/about", "/careers", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
