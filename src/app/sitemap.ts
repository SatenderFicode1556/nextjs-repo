import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { servicePages } from "../lib/service-pages";
import { technologyPages } from "../lib/technology-pages";
import { industryPages } from "../lib/industry-pages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");

  if (!host) return [];

  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const baseUrl = `${protocol}://${host}`;

  const routes = ["", "/about", "/services", "/technologies", "/industries", "/contact"];
  routes.push(...servicePages.map(({ slug }) => `/services/${slug}`));
  routes.push(...technologyPages.map(({ slug }) => `/technologies/${slug}`));
  routes.push(...industryPages.map(({ slug }) => `/industries/${slug}`));

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
