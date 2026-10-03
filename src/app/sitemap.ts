import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");

  if (!host) return [];

  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const baseUrl = `${protocol}://${host}`;

  return ["", "/about", "/services", "/industries", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
