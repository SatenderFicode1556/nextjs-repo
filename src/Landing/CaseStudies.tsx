"use client";

import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import {
  ArrowRight,
  Building2,
  Cloud,
  CreditCard,
  HeartPulse,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const caseStudies = [
  {
    category: "CONNECTED BUILDINGS",
    title: "One cloud platform for connected building operations",
    summary: "An AWS powered platform unifies energy, access and maintenance data to improve building operations.",
    visual: "cloud",
  },
  {
    category: "DIGITAL HEALTH",
    title: "Digital self-care for long-term conditions",
    summary: "A patient focused digital experience helps people manage conditions and stay connected with care teams.",
    visual: "health",
  },
  {
    category: "FINANCIAL SERVICES",
    title: "Embedded finance without repeated integration work",
    summary: "A reusable integration layer helps financial providers bring useful services into partner journeys.",
    visual: "finance",
  },
];

function CaseVisual({ kind }: { kind: string }) {
  if (kind === "cloud") {
    return (
      <div className="relative h-[170px] overflow-hidden rounded-b-xl bg-gradient-to-br from-orange-400 via-[var(--brand-accent-700)] to-[#211a15] p-4">
        <div className="absolute -right-8 -top-14 h-40 w-40 rounded-full bg-amber-200/45 blur-2xl" />
        <div className="absolute bottom-[-35px] left-8 h-28 w-28 rounded-full bg-amber-200/35 blur-2xl" />
        <div className="relative mx-auto flex h-full max-w-[280px] items-center justify-center">
          <div className="absolute left-1 top-5 rounded-lg border border-white/30 bg-[#29221c]/85 p-2 text-white shadow-xl backdrop-blur"><Building2 size={23}/></div>
          <div className="absolute right-2 top-2 rounded-lg border border-white/30 bg-white/90 p-2 text-orange-700 shadow-xl"><Cloud size={23}/></div>
          <div className="absolute bottom-1 left-4 rounded-lg border border-white/30 bg-white/95 p-2 text-orange-700 shadow-xl"><ShieldCheck size={19}/></div>
          <div className="relative z-10 w-[68%] rounded-xl border border-white/40 bg-[#211b16]/85 p-3 text-white shadow-2xl backdrop-blur">
            <div className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold"><LayoutDashboard size={11}/> Building operations</div>
            <div className="grid grid-cols-3 gap-1.5">
              {["Energy", "Access", "Assets"].map((label, i) => <div key={label} className="rounded bg-white/10 p-1"><div className="h-5 rounded-sm bg-gradient-to-t from-cyan-400/70 to-cyan-100/20" style={{height:`${14 + i * 4}px`}}/><span className="mt-1 block text-[7px] text-white/75">{label}</span></div>)}
            </div>
          </div>
          <span className="absolute left-[28%] top-[27%] h-px w-6 rotate-12 bg-white/70"/><span className="absolute right-[23%] top-[30%] h-px w-6 -rotate-12 bg-white/70"/>
        </div>
      </div>
    );
  }

  if (kind === "health") {
    return (
      <div className="relative h-[170px] overflow-hidden rounded-b-xl bg-gradient-to-br from-orange-200 via-amber-200 to-[#fff1df] p-4">
        <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full bg-white/70 blur-2xl" />
        <div className="absolute bottom-[-42px] left-1/4 h-32 w-32 rounded-full bg-amber-300/60 blur-2xl" />
        <div className="relative mx-auto flex h-full max-w-[280px] items-center justify-center gap-3">
          <div className="relative w-[48%] rounded-xl border border-white/70 bg-white/90 p-3 shadow-xl">
            <div className="flex items-center justify-between text-slate-600"><span className="text-[8px] font-semibold">Your wellbeing</span><HeartPulse size={13} className="text-rose-500"/></div>
            <div className="mt-3 flex items-end gap-1"><span className="text-lg font-bold text-slate-800">72</span><span className="mb-1 text-[8px] text-slate-500">today</span></div>
            <svg viewBox="0 0 120 28" className="mt-1 w-full" fill="none"><path d="M1 19h18l7-12 9 17 10-12 7 7h17l8-13 8 13 9-6h25" stroke="var(--brand-accent-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex flex-col gap-2"><div className="rounded-lg border border-white/70 bg-white/90 p-2 text-indigo-700 shadow-lg"><HeartPulse size={17}/></div><div className="rounded-lg border border-white/70 bg-white/90 p-2 text-emerald-600 shadow-lg"><ShieldCheck size={17}/></div></div>
          <div className="absolute bottom-1 left-[22%] rounded-full border border-white/60 bg-white/75 px-2.5 py-1 text-[8px] font-semibold text-indigo-800 shadow">Care plan on track</div>
        </div>
      </div>
    );
  }

  return (
      <div className="relative h-[170px] overflow-hidden rounded-b-xl bg-gradient-to-br from-orange-300 via-[var(--brand-accent-700)] to-[#2a1d19] p-4">
      <div className="absolute -right-5 -top-12 h-40 w-40 rounded-full bg-pink-300/50 blur-2xl" />
      <div className="relative mx-auto flex h-full max-w-[280px] items-end justify-center gap-1.5">
        {[38, 58, 43, 76, 54, 92, 68, 110, 83].map((height, i) => <div key={i} className="relative flex w-[10%] flex-col items-center rounded-t-md border border-orange-100/30 bg-gradient-to-b from-[#3a2618]/80 to-[#211a15]/95 shadow-lg" style={{height}}><span className="mt-2 h-1 w-1 rounded-full bg-orange-200/80"/><span className="mt-2 h-px w-3/4 bg-orange-200/40"/><span className="mt-2 h-4 w-3/4 rounded-sm border border-orange-100/30"/></div>)}
        <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-lg border border-white/30 bg-[#342317]/85 px-2 py-1.5 text-white shadow-xl backdrop-blur"><Workflow size={13}/><span className="text-[8px] font-medium">Partner network</span></div>
        <div className="absolute right-1 top-2 rounded-lg border border-white/50 bg-white/90 p-2 text-fuchsia-700 shadow-xl"><CreditCard size={17}/></div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const reducedMotion = useReducedMotion();
  const [gridRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const [cardSprings] = useTrail(
    caseStudies.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
      to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 22 },
      delay: index * 110,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 230, friction: 24 },
    }),
    [isInView, reducedMotion],
  );

  return (
    <section id="case-studies" className="site-section-spacing relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-100/65 blur-3xl" />
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 inline-flex rounded-full border border-orange-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-orange-700">SELECTED WORK</p>
          <h2 className="section-heading">
            Software solutions for <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">complex, connected sectors.</span>
          </h2>
          <p className="section-description mx-auto mt-4 max-w-2xl">
            We apply software development, cloud consulting and AI integration expertise to the workflows, risks and operational constraints of each sector.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-5 md:grid-cols-3">
          {caseStudies.map(({ category, title, summary, visual }, index) => (
            <animated.article key={title} style={cardSprings[index]} className={`group flex min-w-0 flex-col overflow-hidden rounded-[1.6rem] border bg-white text-slate-900 transition duration-300 hover:-translate-y-1.5 ${index === 0 ? "border-orange-200 shadow-[0_20px_48px_rgba(115,61,20,.1)] hover:shadow-[0_26px_58px_rgba(115,61,20,.16)]" : "border-white/90 shadow-[0_12px_34px_rgba(15,23,42,.055)] hover:border-orange-200 hover:shadow-[0_22px_50px_rgba(15,23,42,.11)]"}`}>
              <div className="flex flex-1 flex-col px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[9px] font-semibold tracking-[.14em] text-orange-700">{category}</p>
                  {index === 0 ? <span className="rounded-full bg-orange-50 px-2 py-1 text-[8px] font-semibold tracking-[.12em] text-orange-700">FEATURED</span> : <span className="text-[10px] font-semibold tracking-[.14em] text-slate-300">0{index + 1}</span>}
                </div>
                <h3 className="card-heading mt-3 min-h-[3.4rem] text-slate-900">{title}</h3>
                <p className="card-description mt-2 flex-1 text-slate-600">{summary}</p>
                <a href="#contact" className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-xs font-semibold text-slate-800 transition group-hover:gap-3 group-hover:text-orange-700">
                  Discuss a similar project <ArrowRight size={14}/>
                </a>
              </div>
              <div className="mx-2 mb-2 overflow-hidden rounded-xl"><div className="transition-transform duration-700 group-hover:scale-[1.035]"><CaseVisual kind={visual}/></div></div>
            </animated.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-3 text-xs font-semibold text-[var(--brand-on-accent)] shadow-md shadow-orange-900/15 transition hover:-translate-y-0.5">
            Explore all case studies <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/>
          </a>
        </div>
      </div>
    </section>
  );
}
