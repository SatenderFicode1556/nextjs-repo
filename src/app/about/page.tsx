import type { Metadata } from "next";
import { ArrowRight, Compass, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InnerPageHero from "../../components/InnerPageHero";

export const metadata: Metadata = { title: "About Ficode | Technology with purpose", description: "Meet Ficode: a technology partner for bespoke software, practical AI and cloud solutions." };

const values = [
  { icon: Compass, title: "Clarity before code", text: "We start by understanding the real challenge, then shape a roadmap your team can act on." },
  { icon: HeartHandshake, title: "People in partnership", text: "Our best work happens when your experts and our engineers work as one team." },
  { icon: Lightbulb, title: "Curiosity with purpose", text: "We explore new ideas and choose the ones that create useful, measurable progress." },
  { icon: ShieldCheck, title: "Built to be trusted", text: "Security, quality and maintainability are part of the work from the very beginning." },
];

export default function AboutPage() {
  return <><a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a><Navbar/><main id="main-content">
    <InnerPageHero eyebrow="A little about Ficode" title="Good technology" accent="starts with people." description="We help ambitious organisations make their next move with bespoke software, practical AI and cloud solutions shaped around the way they work." />
    <section id="story" className="site-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
      <div><p className="section-eyebrow">Who we are</p><h2 className="section-heading mt-4 max-w-md text-4xl">Your partner for the next chapter.</h2></div>
      <div className="space-y-5 text-base leading-8 text-slate-600"><p>Ficode is a technology partner for organisations ready to move forward. We bring product thinking, engineering and delivery together to turn complex ideas into dependable digital services.</p><p>From a first discovery workshop to a long-term product team, we stay close to your goals and make sure every decision has a reason behind it.</p><a href="/contact" className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-sky-700 hover:text-sky-900">Meet your team <ArrowRight size={16}/></a></div>
    </section>
    <section id="approach" className="bg-[#f4f7fa] py-20 sm:py-24"><div className="site-container"><div className="max-w-2xl"><p className="section-eyebrow">How we work</p><h2 className="section-heading mt-4 text-4xl">Thoughtful delivery, from first question to launch.</h2><p className="section-description mt-4">A close, clear and collaborative approach keeps the work focused on the outcome you need.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3"><article className="rounded-3xl border border-slate-200 bg-white p-7"><span className="text-xs font-bold tracking-widest text-sky-700">01 / DISCOVER</span><h3 className="mt-5 text-xl font-semibold">Find the real opportunity</h3><p className="mt-3 text-sm leading-6 text-slate-600">We listen, ask the useful questions and agree what success should look like.</p></article><article className="rounded-3xl border border-slate-200 bg-white p-7"><span className="text-xs font-bold tracking-widest text-sky-700">02 / DESIGN</span><h3 className="mt-5 text-xl font-semibold">Shape a clear plan</h3><p className="mt-3 text-sm leading-6 text-slate-600">Together, we map the experience, architecture and delivery steps before we build.</p></article><article className="rounded-3xl border border-slate-200 bg-white p-7"><span className="text-xs font-bold tracking-widest text-sky-700">03 / DELIVER</span><h3 className="mt-5 text-xl font-semibold">Make progress visible</h3><p className="mt-3 text-sm leading-6 text-slate-600">We work in focused increments, share what is changing and improve as we go.</p></article></div></div></section>
    <section id="values" className="site-container py-20 sm:py-24"><div className="text-center"><p className="section-eyebrow">What guides us</p><h2 className="section-heading mt-4 text-4xl">Good work, done the right way.</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{values.map(({icon: Icon,title,text})=><article key={title} className="rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700"><Icon size={22}/></span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></section>
  </main><Footer/></>;
}
