"use client";

import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import {
  Building2,
  Cpu,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingBag,
} from "lucide-react";

const industries = [
  { label: "Built environment", icon: Building2 },
  { label: "Financial services", icon: Landmark },
  { label: "Health & care", icon: HeartPulse },
  { label: "Retail & commerce", icon: ShoppingBag },
  { label: "Travel & leisure", icon: Plane },
  { label: "Technology", icon: Cpu },
];

export default function ClientNetwork() {
  const reducedMotion = useReducedMotion();
  const [industriesRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const [industrySprings] = useTrail(
    industries.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 },
      delay: index * 75,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 245, friction: 24 },
    }),
    [isInView, reducedMotion],
  );

  return (
    <section aria-labelledby="client-network-heading" className="site-section-spacing site-surface-muted relative isolate overflow-hidden border-y border-slate-200/80">
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-orange-100/65 blur-3xl" />
      <div className="site-container relative">
        <div className="mb-9 grid gap-8 md:grid-cols-[1fr_auto] md:items-end sm:mb-11">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full border border-orange-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-orange-700">OUR CLIENT COMMUNITY</p>
            <h2 id="client-network-heading" className="section-heading">
              Good technology travels <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">across industries.</span>
            </h2>
            <p className="section-description mt-3 max-w-2xl">
              We work alongside teams in different industries, bringing the right people and technology together to solve meaningful challenges.
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/90 bg-white/75 px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,.045)] md:min-w-[220px]">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600">
              <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M4.5 16h23M16 4c3.3 3.5 4.9 7.5 4.9 12S19.3 24.5 16 28M16 4c-3.3 3.5-4.9 7.5-4.9 12S12.7 24.5 16 28M7 8.5c2.5 1.8 5.5 2.7 9 2.7s6.5-.9 9-2.7M7 23.5c2.5-1.8 5.5-2.7 9-2.7s6.5.9 9 2.7" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
            </span>
            <span><span className="block bg-gradient-to-r from-orange-700 to-amber-500 bg-clip-text text-2xl font-semibold leading-none text-transparent">200+</span><span className="mt-1.5 block text-[10px] font-medium text-slate-500">clients around the world</span></span>
          </div>
        </div>

        <ul ref={industriesRef} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ label, icon: Icon }, index) => (
            <animated.li key={label} style={industrySprings[index]} className="group relative flex min-h-[132px] flex-col justify-between overflow-hidden rounded-2xl border border-white/90 bg-white/75 p-4 shadow-[0_7px_24px_rgba(15,23,42,.035)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-[0_16px_32px_rgba(88,52,23,.09)]">
              <div className="flex items-start justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-orange-100 bg-orange-50 text-orange-700 transition duration-300 group-hover:rotate-[-5deg] group-hover:bg-orange-100"><Icon size={17} strokeWidth={1.7}/></span>
                <span className="text-[9px] font-semibold tracking-[.16em] text-slate-300 transition-colors group-hover:text-orange-500">0{index + 1}</span>
              </div>
              <span className="mt-5 text-xs leading-4 font-semibold text-slate-700 transition-colors group-hover:text-slate-950">{label}</span>
              <span className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-amber-300 transition-transform duration-300 group-hover:scale-x-100" />
            </animated.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
