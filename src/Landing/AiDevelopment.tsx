"use client";

import { animated, useInView, useReducedMotion, useSpring, useTrail } from "@react-spring/web";
import { ArrowRight, BrainCircuit, Database, Network, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Workflow,
    title: "Intelligent workflows",
    description: "Automate repetitive triage, routing and information tasks with the right human oversight.",
  },
  {
    icon: BrainCircuit,
    title: "Knowledge tools",
    description: "Help teams find, understand and use information spread across documents and systems.",
  },
  {
    icon: Database,
    title: "Data foundations",
    description: "Prepare the integrations, controls and data flows that reliable AI products depend on.",
  },
];

function AiNetworkArtwork() {
  return (
    <div className="relative mx-auto flex h-[270px] w-full max-w-[420px] items-center justify-center sm:h-[320px]" aria-hidden="true">
      <div className="absolute inset-[16%] rounded-full bg-orange-400/25 blur-[50px]" />
      <svg viewBox="0 0 420 320" className="absolute inset-0 h-full w-full" fill="none">
        <path className="ai-network-flow" d="m65 208 81-48 76 42 75-75 59 36M93 253l86-35 67 33 87-69M124 123l51 42 73-68 60 55M77 179l68 25 56-53 82 32 71-47" stroke="var(--brand-accent-300)" strokeOpacity=".72" strokeWidth="1.5" strokeDasharray="3 6" />
        <path className="ai-network-flow ai-network-flow-reverse" d="m111 217 63 28 61-36 49 27 61-35M149 98l27 67m73-68 7 69m64-15-27 68" stroke="var(--brand-accent-200)" strokeOpacity=".7" strokeWidth="1.4" strokeDasharray="3 7" />
        <circle cx="65" cy="208" r="4" fill="var(--brand-accent-100)"/><circle cx="356" cy="163" r="4" fill="var(--brand-accent-100)"/><circle cx="93" cy="253" r="3" fill="var(--brand-accent-400)"/><circle cx="333" cy="182" r="3" fill="var(--brand-accent-400)"/><circle cx="149" cy="98" r="3" fill="var(--brand-accent-400)"/><circle cx="249" cy="97" r="3" fill="var(--brand-accent-400)"/>
      </svg>

      <div className="absolute bottom-[15%] left-1/2 h-8 w-52 -translate-x-1/2 rounded-[50%] border border-orange-200/60 bg-orange-300/10 shadow-[0_0_35px_rgba(255,156,62,.3)]" />
      <div className="absolute bottom-[22%] left-1/2 h-6 w-40 -translate-x-1/2 rounded-[50%] border border-orange-100/70 bg-orange-300/20" />
      <div className="absolute bottom-[27%] left-1/2 h-16 w-28 -translate-x-1/2 bg-gradient-to-t from-orange-400/25 to-transparent [clip-path:polygon(50%_0,100%_100%,0_100%)]" />

        <div className="ai-core-float relative z-10 -mt-5 flex h-36 w-28 flex-col items-center rounded-[2.5rem_2.5rem_1.7rem_1.7rem] border border-orange-100/80 bg-gradient-to-br from-white via-orange-100 to-orange-700 p-2 shadow-[0_0_35px_rgba(244,122,0,.55),inset_0_0_20px_rgba(255,255,255,.7)] sm:h-40 sm:w-32">
        <div className="absolute -left-3 top-8 h-8 w-4 rounded-full border border-orange-100 bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,.8)]" />
        <div className="absolute -right-3 top-8 h-8 w-4 rounded-full border border-orange-100 bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,.8)]" />
        <div className="mt-5 flex h-16 w-20 items-center justify-center rounded-2xl border border-white/80 bg-gradient-to-br from-orange-50 to-orange-300 shadow-inner sm:h-[4.5rem] sm:w-24">
          <BrainCircuit size={37} strokeWidth={1.5} className="text-orange-800 drop-shadow-[0_0_8px_rgba(255,255,255,.8)]" />
        </div>
        <div className="mt-3 h-1.5 w-12 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,.9)]" />
        <div className="mt-2 flex gap-1.5"><span className="h-1 w-1 rounded-full bg-orange-100"/><span className="h-1 w-1 rounded-full bg-orange-100"/><span className="h-1 w-1 rounded-full bg-orange-100"/></div>
      </div>

      <div className="ai-float-node absolute right-[13%] top-[17%] rounded-xl border border-white/20 bg-white/10 p-2.5 text-orange-100 shadow-lg backdrop-blur-md"><Network size={18}/></div>
      <div className="ai-float-node ai-float-node-delay absolute left-[12%] top-[30%] rounded-xl border border-white/20 bg-white/10 p-2.5 text-orange-100 shadow-lg backdrop-blur-md"><Workflow size={17}/></div>
    </div>
  );
}

export default function AiDevelopment() {
  const reducedMotion = useReducedMotion();
  const [contentRef, contentInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const [artRef, artInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const [capabilitySprings] = useTrail(
    capabilities.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
      to: reducedMotion ? { opacity: 1, x: 0 } : { opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -20 },
      delay: index * 100,
      immediate: reducedMotion || !contentInView,
      config: { mass: 1, tension: 240, friction: 25 },
    }),
    [contentInView, reducedMotion],
  );
  const artSpring = useSpring({
    from: reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: .97 },
    to: reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: artInView ? 1 : 0, y: artInView ? 0 : 24, scale: artInView ? 1 : .97 },
    immediate: reducedMotion || !artInView,
    config: { mass: 1, tension: 190, friction: 24 },
  });

  return (
    <section id="ai-development" className="site-section-spacing site-surface-muted">
      <div className="site-container">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(125deg,#171819_0%,#24211e_55%,var(--brand-accent-900)_100%)] px-6 py-9 text-white shadow-[0_28px_75px_rgba(46,28,13,.2)] sm:px-9 sm:py-11 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute right-0 top-0 z-0 h-96 w-96 rounded-full bg-orange-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 z-0 h-80 w-80 rounded-full bg-amber-600/15 blur-[90px]" />
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(115deg,transparent_25%,rgba(255,255,255,.025)_25.2%,transparent_25.5%,transparent_72%,rgba(255,255,255,.025)_72.2%,transparent_72.5%)]" />
          <div className="relative z-10 grid min-w-0 items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
            <div ref={contentRef} className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-200/20 bg-white/5 px-3 py-1 text-xs font-semibold text-orange-200"><span className="h-1.5 w-1.5 rounded-full bg-orange-400"/>Applied AI</p>
              <h2 className="section-heading mt-3 max-w-xl text-white">
                AI development for <span className="bg-gradient-to-r from-orange-300 to-amber-100 bg-clip-text text-transparent">practical business automation.</span>
              </h2>
              <ul className="mt-7 divide-y divide-white/10">
                {capabilities.map(({ icon: Icon, title, description }, index) => (
                  <animated.li key={title} style={capabilitySprings[index]} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-orange-200/15 bg-white/[.07] text-orange-200"><Icon size={17}/></span>
                    <span><span className="block text-sm font-semibold text-white">{title}</span><span className="mt-1 block max-w-md text-xs leading-5 text-white/65 sm:text-[13px]">{description}</span></span>
                  </animated.li>
                ))}
              </ul>
              <a href="mailto:sales@ficode.com?subject=AI%20development" className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-500 px-5 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(234,88,12,.25)] transition hover:-translate-y-0.5 hover:bg-orange-400">
                Explore AI development <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
              </a>
            </div>

            <div className="grid min-w-0 items-center gap-1 sm:grid-cols-[.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[.85fr_1.15fr]">
              <p className="max-w-xs text-sm leading-6 text-white/75 sm:justify-self-end lg:justify-self-start xl:justify-self-end">
                Move from AI ideas to useful production systems. We connect data, workflows and existing platforms to deliver governed automation around a clear operational outcome.
              </p>
              <animated.div ref={artRef} style={artSpring} className="min-w-0"><AiNetworkArtwork /></animated.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
