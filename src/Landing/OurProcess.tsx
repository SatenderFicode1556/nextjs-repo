"use client";

import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import {
  ArrowDownRight,
  Check,
  Code2,
  Compass,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem, the people affected and the outcome that matters.",
    icon: Search,
    featured: true,
  },
  {
    number: "02",
    title: "Plan",
    description: "Turn what we learn into priorities, a clear scope and a practical roadmap.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Design",
    description: "Shape user journeys and define the architecture, data and security approach.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Build",
    description: "Develop in testable increments and connect the systems that matter.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description: "Validate the critical journeys and prepare your team for go-live.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Improve",
    description: "Support the live solution and keep enhancing it with real-world feedback.",
    icon: RefreshCw,
  },
];

export default function OurProcess() {
  const reducedMotion = useReducedMotion();
  const [gridRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const [cardSprings] = useTrail(
    steps.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
      to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 24 },
      delay: index * 85,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 240, friction: 24 },
    }),
    [isInView, reducedMotion],
  );

  return (
    <section id="our-process" className="site-section-spacing relative isolate overflow-hidden bg-[#171819]">
      <div className="pointer-events-none absolute -right-36 -top-40 h-[34rem] w-[34rem] rounded-full bg-orange-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[34rem] w-[34rem] rounded-full bg-amber-700/10 blur-[110px]" />
      <div className="site-container relative">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-white/[.04] px-3 py-1 text-[11px] font-semibold tracking-[.15em] text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> HOW WE WORK
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-4xl lg:text-5xl">
              From first question to <span className="bg-gradient-to-r from-orange-300 to-amber-100 bg-clip-text text-transparent">lasting impact.</span>
            </h2>
          </div>
          <div className="flex max-w-md items-start gap-4 lg:pb-1">
            <p className="text-sm leading-6 text-white/60">
              A clear, collaborative path keeps people aligned and turns complex technology challenges into software that works in the real world.
            </p>
            <span className="hidden shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-[10px] font-semibold text-white/70 sm:inline-flex">
              <span className="text-orange-300">06</span> CONNECTED STAGES
            </span>
          </div>
        </div>

        <ol ref={gridRef} aria-label="Our delivery process" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {steps.map(({ number, title, description, icon: Icon, featured }, index) => (
            <animated.li
              key={number}
              style={cardSprings[index]}
              className={`group relative flex min-h-[230px] flex-col overflow-hidden rounded-[1.5rem] border p-5 transition duration-300 hover:-translate-y-1 sm:p-6 ${
                featured
                  ? "border-orange-400/45 bg-[linear-gradient(145deg,#8e400b_0%,#b6540e_55%,#e47717_100%)] text-white shadow-[0_22px_55px_rgba(177,82,14,.2)]"
                  : "border-white/10 bg-white/[.035] text-white hover:border-orange-300/30 hover:bg-white/[.06]"
              }`}
            >
              {featured && <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl transition duration-500 group-hover:scale-125" />}
              <div className="relative flex items-start justify-between">
                <span className={`text-xs font-semibold tracking-[.18em] ${featured ? "text-white/75" : "text-white/35 group-hover:text-orange-300"}`}>STAGE {number}</span>
                <span className={`grid h-11 w-11 place-items-center rounded-2xl border transition duration-300 group-hover:rotate-[-5deg] ${featured ? "border-white/25 bg-white/10 text-white" : "border-white/10 bg-white/[.04] text-orange-300 group-hover:border-orange-300/30 group-hover:bg-orange-400/10"}`}>
                  <Icon size={19} strokeWidth={1.7} />
                </span>
              </div>
              <h3 className="relative mt-7 text-xl font-semibold tracking-[-.025em]">{title}</h3>
              <p className={`relative mt-2 max-w-sm text-sm leading-6 ${featured ? "text-white/75" : "text-white/55"}`}>{description}</p>
              <div className="relative mt-auto flex items-center justify-between pt-6">
                {featured ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/85"><Check size={13} /> START WITH THE RIGHT QUESTION</span>
                ) : (
                  <span className="h-px w-10 bg-white/15 transition-all duration-300 group-hover:w-16 group-hover:bg-orange-400/70" />
                )}
                {index < steps.length - 1 && <ArrowDownRight size={15} className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 ${featured ? "text-white/70" : "text-white/30 group-hover:text-orange-300"}`} />}
              </div>
            </animated.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
