import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InnerPageHero from "../../components/InnerPageHero";
import { technologyPages } from "../../lib/technology-pages";
import technologyImage from "../../../public/video/common/img4.jpg";

export const metadata: Metadata = {
  title: "Technology Expertise | Ficode",
  description: "Explore Ficode's software, mobile, cloud, data and engineering technology capabilities.",
};

export default function TechnologiesPage() {
  return <><a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a><Navbar/><main id="main-content">
    <InnerPageHero eyebrow="Technology expertise" title="The right tools" accent="for what comes next." description="Choose technology around your product, people and plans. Explore the platforms and engineering capabilities our teams use to deliver dependable digital services." image={technologyImage} imageAlt="Connected infrastructure representing software and cloud platforms" />
    <section className="site-container py-16 sm:py-20 lg:py-24">
      <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="max-w-2xl"><p className="section-eyebrow">Explore our capabilities</p><h2 className="section-heading mt-4">Technology chosen for the job.</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">Find an individual platform or combine expertise across your product and cloud landscape.</p></div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{technologyPages.map((technology, index) => <a key={technology.slug} href={`/technologies/${technology.slug}`} className="group flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_18px_42px_rgba(10,60,100,.08)]">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-50 text-xs font-bold text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white">{String(index + 1).padStart(2, "0")}</span><span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-slate-900">{technology.title}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{technology.description}</span></span><ArrowUpRight size={16} className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-700" />
      </a>)}</div>
    </section>
  </main><Footer/></>;
}
