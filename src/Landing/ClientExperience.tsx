"use client";

import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import {
  ArrowRight,
  Compass,
  Handshake,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

const principles = [
  {
    title: "Flexibility",
    description: "Shape the team, pace and approach around your priorities as they evolve.",
    cue: "Adaptable by design",
    icon: RefreshCw,
  },
  {
    title: "Focused delivery",
    description: "Keep attention on the outcomes that matter, with clear goals and steady progress.",
    cue: "Progress you can follow",
    icon: Target,
  },
  {
    title: "Clear communication",
    description: "Make decisions, risks and next steps visible throughout the work.",
    cue: "No surprises",
    icon: MessageCircle,
  },
  {
    title: "Shared ownership",
    description: "Work as one team, with knowledge and context shared along the way.",
    cue: "One team, working together",
    icon: Handshake,
  },
  {
    title: "Practical expertise",
    description: "Bring the right experience to solve real problems and make sound trade-offs.",
    cue: "Experience with purpose",
    icon: Wrench,
  },
  {
    title: "Built to improve",
    description: "Learn from how the solution works in practice and evolve it with your needs.",
    cue: "Ready for what changes",
    icon: Compass,
  },
];

export default function ClientExperience() {
  const reducedMotion = useReducedMotion();
  const [gridRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const [principleSprings] = useTrail(
    principles.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 },
      delay: index * 75,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 240, friction: 24 },
    }),
    [isInView, reducedMotion],
  );

  return (
    <section id="client-experience" className="site-section-spacing site-surface-muted relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -right-36 top-10 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="site-container relative">
        <div className="mb-8 grid gap-6 border-b border-slate-200/80 pb-7 sm:mb-10 sm:pb-9 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-orange-700">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> HOW THE PARTNERSHIP WORKS
            </p>
            <h2 className="section-heading text-3xl sm:text-4xl">
              Better work starts with <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">working better together.</span>
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="section-description">
              Good software comes from good collaboration. We work closely with your team to keep delivery adaptable, purposeful and transparent at every stage.
            </p>
            <a href="#contact" className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-orange-700">Start a conversation <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>

        <div ref={gridRef} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {principles.map(({ title, description, cue, icon: Icon }, index) => (
            <animated.article key={title} style={principleSprings[index]} className={`group relative flex min-h-[220px] flex-col overflow-hidden rounded-[1.4rem] border p-5 transition duration-300 hover:-translate-y-1 sm:min-h-[230px] sm:p-6 ${index === 0 ? "border-[#302d2a] bg-[linear-gradient(145deg,#171819_0%,#292420_70%,var(--brand-accent-800)_100%)] text-white shadow-[0_18px_44px_rgba(54,37,22,.14)]" : "border-white/90 bg-white/85 text-slate-900 shadow-[0_7px_24px_rgba(15,23,42,.035)] hover:border-orange-200 hover:bg-white hover:shadow-[0_16px_36px_rgba(88,52,23,.09)]"}`}>
              {index === 0 && <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl transition duration-500 group-hover:scale-125" />}
              <div className="relative flex items-start justify-between">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl border transition duration-300 group-hover:rotate-[-5deg] ${index === 0 ? "border-white/15 bg-white/10 text-orange-200" : "border-orange-100 bg-orange-50 text-orange-700 group-hover:bg-orange-100"}`}><Icon size={19} strokeWidth={1.8}/></span>
                <span className={`text-[10px] font-semibold tracking-[.16em] ${index === 0 ? "text-orange-200" : "text-slate-300 group-hover:text-orange-500"}`}>0{index + 1}</span>
              </div>
              <h3 className={`card-heading relative mt-5 ${index === 0 ? "text-white" : "text-slate-900"}`}>{title}</h3>
              <p className={`card-description relative mt-2 max-w-sm ${index === 0 ? "text-white/70" : "text-slate-600"}`}>{description}</p>
              <div className={`relative mt-auto flex items-center gap-2.5 pt-5 text-[10px] font-semibold tracking-[.04em] ${index === 0 ? "text-orange-100/80" : "text-slate-500"}`}><span className={`h-px w-7 transition-all duration-300 group-hover:w-10 ${index === 0 ? "bg-orange-200/70" : "bg-orange-500/60"}`} />{cue}</div>
            </animated.article>
          ))}
        </div>
        <div className="mx-auto mt-7 flex w-fit max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2.5 text-center text-xs text-slate-600 shadow-sm"><ShieldCheck size={14} className="shrink-0 text-orange-600"/>A partnership built on trust, clarity and shared progress.</div>
      </div>
    </section>
  );
}
