"use client";

import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Settings2,
  Zap,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Healthcare",
    description: "Patient platforms, clinical workflows and secure digital access.",
    icon: HeartPulse,
    featured: true,
  },
  {
    number: "02",
    title: "FinTech",
    description: "Embedded finance, partner APIs and secure customer journeys.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Real Estate",
    description: "Property portals, tenant journeys and connected operational data.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Education",
    description: "Learning platforms, assessment tools and content workflows.",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Utilities",
    description: "Field workflows, asset data and customer self-service.",
    icon: Zap,
  },
  {
    number: "06",
    title: "Smart Buildings & IoT",
    description: "Devices, cloud platforms and real-time operational insight.",
    icon: Landmark,
  },
];

export default function IndustrySolutions() {
  const [gridRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const reducedMotion = useReducedMotion();
  const [cardSprings] = useTrail(
    industries.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -42 : 42, y: 0 },
      to: reducedMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: isInView ? 1 : 0, x: isInView ? 0 : index % 2 === 0 ? -42 : 42, y: 0 },
      delay: index * 85,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 240, friction: 24 },
    }),
    [isInView, reducedMotion],
  );

  return (
    <section id="industries" className="site-section-spacing relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-40 top-12 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="section-eyebrow mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/75 px-3 py-1">INDUSTRY EXPERTISE</p>
          <h2 className="section-heading">
            Technology built for <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">the realities</span> of your sector.
          </h2>
          <p className="section-description mx-auto mt-4 max-w-2xl">
            We bring software development, cloud consulting and AI integration expertise to the workflows, risks and operational needs of each sector.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ number, title, description, icon: Icon, featured }, index) => (
            <animated.article
              key={number}
              style={cardSprings[index]}
              className={`group relative flex min-h-[250px] flex-col overflow-hidden rounded-[1.5rem] border p-5 transition duration-300 hover:-translate-y-1.5 sm:p-6 ${
                featured
                  ? "border-[#302d2a] bg-[linear-gradient(145deg,#171819_0%,#252220_58%,#97420c_100%)] text-white shadow-[0_22px_55px_rgba(65,42,24,.2)]"
                  : "border-white/90 bg-white/75 text-slate-900 shadow-[0_8px_28px_rgba(15,23,42,.045)] backdrop-blur-sm hover:border-orange-200 hover:bg-white hover:shadow-[0_18px_42px_rgba(88,52,23,.1)]"
              }`}
            >
              <div className={`pointer-events-none absolute inset-x-6 top-0 h-px ${featured ? "bg-gradient-to-r from-transparent via-orange-300 to-transparent" : "bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-0 transition-opacity group-hover:opacity-100"}`} />
              {featured && <div className="pointer-events-none absolute -bottom-20 -right-12 h-52 w-52 rounded-full bg-orange-500/25 blur-3xl transition duration-500 group-hover:scale-125" />}
              <div className="relative flex items-center justify-between">
                <span className={`text-xs font-semibold tracking-[.2em] ${featured ? "text-orange-200" : "text-slate-400 group-hover:text-orange-600"}`}>{number}<span className="ml-2 tracking-[.12em] opacity-65">/ SECTOR</span></span>
                <span className={`grid h-11 w-11 place-items-center rounded-2xl border transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 ${featured ? "border-white/15 bg-white/10 text-orange-200" : "border-orange-100 bg-orange-50 text-orange-700 group-hover:bg-orange-100"}`}><Icon size={20} strokeWidth={1.8}/></span>
              </div>
              {featured && <p className="relative mt-6 text-[9px] font-semibold tracking-[.16em] text-orange-200">BUILT AROUND PEOPLE</p>}
              <h3 className={`card-heading relative ${featured ? "mt-2" : "mt-7"}`}>{title}</h3>
              <p className={`card-description relative mt-2 max-w-sm ${featured ? "text-white/70" : "text-slate-600"}`}>{description}</p>
              <a href="#case-studies" className={`relative mt-auto inline-flex w-fit items-center gap-2 pt-6 text-xs font-semibold transition-all group-hover:gap-3 ${featured ? "text-white" : "text-slate-800 group-hover:text-orange-700"}`}>
                Learn more <ArrowRight size={14}/>
              </a>
            </animated.article>
          ))}
        </div>
      </div>
    </section>
  );
}
