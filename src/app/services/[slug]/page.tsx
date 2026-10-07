import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionDetailPage from "../../../components/SolutionDetailPage";
import { servicePages } from "../../../lib/service-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) return { title: "Service not found | Ficode" };
  return { title: `${page.title} Services | Ficode`, description: page.description };
}

export default async function ServiceDetailRoute({ params }: Props) {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <SolutionDetailPage data={page} />;
}
