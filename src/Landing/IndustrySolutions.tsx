"use client";

import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Building2, Check, GraduationCap, HeartPulse,
  Landmark, Leaf, Plane, ShieldCheck, ShoppingBag, Sparkles, Truck, Workflow,
} from "lucide-react";

const industries = [
  { title: "Healthcare", tag: "CARE, CONNECTED", text: "Give care teams a clearer view and make every patient interaction feel more joined up.", icon: HeartPulse, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85", stat: "Better connected care", points: ["Patient portals & digital access", "Clinical workflow automation", "Secure health data platforms"] },
  { title: "Financial services", tag: "BUILT ON TRUST", text: "Create secure financial experiences that make complex decisions feel straightforward.", icon: Landmark, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85", stat: "Confidence at every step", points: ["Digital banking experiences", "Partner APIs & open finance", "Risk, identity & compliance"] },
  { title: "Retail & commerce", tag: "MAKE EVERY MOMENT COUNT", text: "Bring customer, product and fulfilment journeys together across every channel.", icon: ShoppingBag, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85", stat: "One seamless journey", points: ["Connected commerce platforms", "Personalised customer journeys", "Inventory & fulfilment insight"] },
  { title: "Manufacturing", tag: "MADE FOR MOMENTUM", text: "Connect operational data and modernise the systems that keep production moving.", icon: Workflow, image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85", stat: "Operations in sync", points: ["Smart factory data platforms", "Predictive maintenance tools", "Production workflow systems"] },
  { title: "Education", tag: "LEARNING WITHOUT LIMITS", text: "Build accessible learning experiences that help educators and learners thrive.", icon: GraduationCap, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85", stat: "More room to grow", points: ["Learning management platforms", "Student experience portals", "Assessment & content tools"] },
  { title: "Transport & logistics", tag: "EVERYTHING IN MOTION", text: "Make complex journeys easier to plan, track and improve with connected technology.", icon: Truck, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85", stat: "Clarity across the journey", points: ["Fleet & route optimisation", "Real-time shipment visibility", "Connected supply chains"] },
  { title: "Energy & utilities", tag: "POWERING WHAT'S NEXT", text: "Help teams respond faster with a clearer picture of assets, people and demand.", icon: Leaf, image: "https://images.unsplash.com/photo-1473341304170-971deb6b7c52?auto=format&fit=crop&w=1200&q=85", stat: "Smarter infrastructure", points: ["Asset monitoring platforms", "Customer self-service tools", "Energy data & forecasting"] },
  { title: "Travel & hospitality", tag: "MAKE IT MEMORABLE", text: "Design thoughtful digital experiences around every guest and every destination.", icon: Plane, image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85", stat: "A warmer welcome", points: ["Guest experience platforms", "Booking & travel services", "Personalised operations"] },
  { title: "Public sector", tag: "SERVICES FOR EVERYONE", text: "Make essential services more accessible, efficient and simple to use.", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85", stat: "Digital that serves people", points: ["Accessible citizen services", "Secure case management", "Connected public platforms"] },
];

export default function IndustrySolutions() {
  const [active, setActive] = useState(0);
  const industry = industries[active];
  const ActiveIcon = industry.icon;

  return (
    <section id="industries" className="site-section-spacing relative isolate overflow-hidden bg-[#f8f8f7]">
      <div className="pointer-events-none absolute -right-36 top-0 h-[28rem] w-[28rem] rounded-full bg-[color-mix(in_srgb,var(--brand-accent)_10%,transparent)] blur-3xl" />
      <div className="site-container relative">
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--brand-accent)_25%,white)] bg-white/80 px-3 py-1 text-[11px] font-bold tracking-[.16em] text-[var(--brand-accent)]"><Sparkles size={13}/> INDUSTRY EXPERTISE</p>
          <h2 className="section-heading">Technology that fits <span className="text-[var(--brand-accent)]">your world.</span></h2>
          <p className="section-description mx-auto mt-4 max-w-2xl">Choose your industry to explore the ideas, tools and expertise that can move your business forward.</p>
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]" role="tablist" aria-label="Industries">
          {industries.map(({ title, icon: Icon }, index) => <button key={title} id={`industry-tab-${index}`} role="tab" type="button" aria-selected={active === index} aria-controls="industry-panel" onClick={() => setActive(index)} onKeyDown={(event) => { if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) { event.preventDefault(); const next = event.key === "Home" ? 0 : event.key === "End" ? industries.length - 1 : (active + (event.key === "ArrowRight" ? 1 : industries.length - 1)) % industries.length; setActive(next); document.getElementById(`industry-tab-${next}`)?.focus(); } }} className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)] ${active === index ? "border-[var(--brand-accent)] bg-[var(--brand-accent)] text-[var(--brand-on-accent)] shadow-lg shadow-[color-mix(in_srgb,var(--brand-accent)_22%,transparent)]" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}><Icon size={16}/>{title}</button>)}
        </div>

        <div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${active}`} key={active} className="grid overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_25px_80px_rgba(15,23,42,.09)] animate-industry-in lg:min-h-[440px] lg:grid-cols-[1fr_1fr]">
          <div className="relative isolate flex min-h-[310px] flex-col justify-between overflow-hidden bg-slate-900 p-7 sm:p-10 lg:min-h-full">
            <div className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url("${industry.image}")` }} />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
            <div className="pointer-events-none absolute -right-16 top-20 -z-0 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--brand-secondary)_38%,transparent)] blur-3xl" />
            <div className="flex items-start justify-between"><span className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] font-bold tracking-[.17em] text-white/90 backdrop-blur-sm">{industry.tag}</span><span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-sm"><ActiveIcon size={22}/></span></div>
            <div className="relative z-10 mt-16"><p className="text-sm font-medium text-white/75">A better way forward</p><p className="mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{industry.stat}</p><div className="mt-5 flex items-center gap-2 text-xs font-medium text-white/75"><span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--brand-accent)] text-[var(--brand-on-accent)]"><Check size={13}/></span>Designed around real people</div></div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"><p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--brand-accent)]">Made for {industry.title.toLowerCase()}</p><h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-.04em] text-slate-900 sm:text-4xl">Your industry has its own challenges. Your technology should understand them.</h3><p className="mt-4 text-sm leading-7 text-slate-600">{industry.text} We bring the right product thinking and engineering experience to make progress feel clear and achievable.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">{industry.points.map((point) => <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-slate-700"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--brand-accent)_10%,white)] text-[var(--brand-accent)]"><Check size={12} strokeWidth={2.5}/></span>{point}</li>)}</ul>
            <div className="mt-8 flex flex-wrap items-center gap-4"><a href="/contact" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 text-sm font-semibold text-[var(--brand-on-accent)] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--brand-accent)_25%,transparent)]">Talk to our team <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></a><a href="/industries" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition hover:text-[var(--brand-accent-ink)]">Explore all sectors <ArrowUpRight size={15}/></a></div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">Nine sectors. One team ready to understand what makes yours different.</p>
      </div>
    </section>
  );
}
