import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionDetailPage from "../../../components/SolutionDetailPage";
import { industryPages } from "../../../lib/industry-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industryPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = industryPages.find((item) => item.slug === slug);
  if (!page) return { title: "Industry not found | Ficode" };
  return { title: `${page.title} Digital Solutions | Ficode`, description: page.description };
}

export default async function IndustryDetailRoute({ params }: Props) {
  const { slug } = await params;
  const page = industryPages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <SolutionDetailPage data={page} />;
}
