import type { Metadata } from "next";
import { ArrowRight, HeartPulse, Landmark, ShoppingBag, Factory, GraduationCap, Truck } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InnerPageHero from "../../components/InnerPageHero";

export const metadata: Metadata = { title: "Industries | Ficode", description: "Digital products and technology solutions for healthcare, financial services, retail and more." };

const sectors = [
  { id: "healthcare", icon: HeartPulse, title: "Healthcare & life sciences", text: "Improve access, connect services and give care teams better tools to support the people who depend on them." },
  { id: "finance", icon: Landmark, title: "Financial services", text: "Build secure digital experiences and smarter operations in a world where trust matters at every step." },
  { id: "retail", icon: ShoppingBag, title: "Retail & commerce", text: "Bring customer, product and fulfilment experiences together across every channel." },
  { id: "manufacturing", icon: Factory, title: "Manufacturing", text: "Connect operational data and modernise the systems that keep production moving." },
  { id: "education", icon: GraduationCap, title: "Education", text: "Create accessible digital services that help learners and educators do their best work." },
  { id: "logistics", icon: Truck, title: "Transport & logistics", text: "Make complex journeys easier to plan, track and improve with joined-up technology." },
];

export default function IndustriesPage() {
  return <><a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a><Navbar/><main id="main-content">
    <InnerPageHero eyebrow="Industries we support" title="Your world is" accent="our starting point." description="Every sector has its own pressure points, regulations and opportunities. We listen first, then build technology that fits the realities of your business." />
    <section className="site-container py-20 sm:py-24"><div className="mx-auto max-w-3xl text-center"><p className="section-eyebrow">Sector experience</p><h2 className="section-heading mt-4 text-4xl">Digital solutions that understand your business.</h2><p className="section-description mt-4">We pair deep engineering skills with the context that helps technology make a difference in the real world.</p></div>
      <div className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{sectors.map(({id,icon:Icon,title,text})=><article id={id} key={id} className="group scroll-mt-32 rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50/40 hover:shadow-xl hover:shadow-sky-900/5"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d2142] text-cyan-300"><Icon size={24}/></div><h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">{text}</p><a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700">Explore what&apos;s possible <ArrowRight size={15} className="transition group-hover:translate-x-1"/></a></article>)}</div>
    </section>
    <section className="bg-[#f4f7fa] py-16 sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="section-eyebrow">One thing stays constant</p><h2 className="section-heading mt-4 text-4xl">Your goals set the direction.</h2></div><p className="text-base leading-8 text-slate-600">We don&apos;t force your organisation into a standard package. We bring the right people, technology and delivery approach around the outcome you need, while keeping your customers and colleagues at the centre.</p></div></section>
  </main><Footer/></>;
}
