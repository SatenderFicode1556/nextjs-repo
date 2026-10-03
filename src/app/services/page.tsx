import type { Metadata } from "next";
import { ArrowUpRight, BrainCircuit, Cloud, Code2, Database, Smartphone, Workflow } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InnerPageHero from "../../components/InnerPageHero";

export const metadata: Metadata = { title: "Digital, AI & Cloud Services | Ficode", description: "Explore Ficode's bespoke software, AI, cloud, data and digital transformation services." };

const services = [
  { id: "software", icon: Code2, number: "01", title: "Bespoke software", text: "Purpose-built web platforms and business applications that make complex work feel simpler.", tags: ["Web platforms", "Product engineering", "Modernisation"] },
  { id: "ai", icon: BrainCircuit, number: "02", title: "AI & data", text: "Turn your data into useful insight and bring responsible AI into the moments where it can help.", tags: ["AI development", "Data platforms", "Automation"] },
  { id: "cloud", icon: Cloud, number: "03", title: "Cloud & AWS", text: "Build a secure, resilient cloud foundation that can scale with your teams and customers.", tags: ["AWS", "Cloud migration", "DevOps"] },
  { id: "mobile", icon: Smartphone, number: "04", title: "Mobile experiences", text: "Create thoughtful mobile products that keep customers and colleagues connected.", tags: ["iOS & Android", "UX design", "Integrations"] },
  { id: "integration", icon: Workflow, number: "05", title: "Integration & APIs", text: "Connect the systems you rely on and create a reliable flow of information across your business.", tags: ["API development", "System integration", "Automation"] },
  { id: "data", icon: Database, number: "06", title: "Technology consulting", text: "Get independent technical guidance, from architecture choices to a delivery roadmap.", tags: ["Discovery", "Architecture", "Digital strategy"] },
];

export default function ServicesPage() {
  return <><a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a><Navbar/><main id="main-content">
    <InnerPageHero eyebrow="What we do" title="Technology built" accent="around your goals." description="From a single expert team to end-to-end delivery, we bring the right skills together to make your most important ideas real." />
    <section className="site-container py-20 sm:py-24"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="max-w-2xl"><p className="section-eyebrow">Our capabilities</p><h2 className="section-heading mt-4 text-4xl">One partner. The right expertise.</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">Start with a focused challenge or bring us in to support a bigger transformation. We shape the team around the work.</p></div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{services.map(({id,icon:Icon,number,title,text,tags})=><article id={id} key={id} className="group scroll-mt-32 rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_65px_rgba(10,60,100,.09)]"><div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white"><Icon size={22}/></span><span className="text-xs font-bold tracking-[.18em] text-slate-300">{number}</span></div><h3 className="mt-7 text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">{text}</p><div className="mt-5 flex flex-wrap gap-2">{tags.map(tag=><span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-600">{tag}</span>)}</div><a href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sky-700">Discuss this service <ArrowUpRight size={15}/></a></article>)}</div>
    </section>
    <section className="bg-[#09152d] py-16 text-white sm:py-20"><div className="site-container flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><div><p className="section-eyebrow !text-cyan-300">Have a challenge in mind?</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s work out the right next step.</h2></div><a href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#3288cb] px-6 py-3.5 text-sm font-bold transition hover:bg-[#47a4e4]">Talk to Ficode <ArrowUpRight size={16}/></a></div></section>
  </main><Footer/></>;
}
