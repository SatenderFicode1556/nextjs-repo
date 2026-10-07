import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionDetailPage from "../../../components/SolutionDetailPage";
import { technologyPages } from "../../../lib/technology-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return technologyPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = technologyPages.find((item) => item.slug === slug);
  if (!page) return { title: "Technology not found | Ficode" };
  return { title: `${page.title} Development | Ficode`, description: page.description };
}

export default async function TechnologyDetailRoute({ params }: Props) {
  const { slug } = await params;
  const page = technologyPages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <SolutionDetailPage data={page} />;
}
