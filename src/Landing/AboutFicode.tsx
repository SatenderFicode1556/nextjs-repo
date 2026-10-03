"use client";

import { animated, useInView, useReducedMotion, useSpring, useTrail } from "@react-spring/web";
import { ArrowRight, TrendingUp } from "lucide-react";

const metrics = [
  { value: "1,000+", label: "Projects delivered" },
  { value: "200+", label: "Customers worldwide" },
  { value: "140+", label: "Tech transformers" },
  { value: "UK", label: "Based" },
];

const bars = [5, 8, 12, 16, 20, 25, 30, 38, 45, 52, 60, 68, 77, 87, 97, 108, 120, 133, 148, 164, 181, 201];

export default function AboutFicode() {
  const reducedMotion = useReducedMotion();
  const [visualRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const introSpring = useSpring({
    from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 },
    immediate: reducedMotion || !isInView,
    config: { mass: 1, tension: 220, friction: 25 },
  });
  const [metricSprings] = useTrail(
    metrics.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
      to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 18 },
      delay: index * 90,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 250, friction: 24 },
    }),
    [isInView, reducedMotion],
  );
  const [barSprings] = useTrail(
    bars.length,
    (index) => ({
      from: { height: reducedMotion ? bars[index] : 4 },
      to: { height: reducedMotion || isInView ? bars[index] : 4 },
      delay: index * 28,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 190, friction: 28 },
    }),
    [isInView, reducedMotion],
  );

  return (
    <section id="about-ficode" className="site-section-spacing relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_50%_-30%,rgba(244,122,0,.2),transparent_68%),radial-gradient(ellipse_at_75%_0%,rgba(255,166,77,.18),transparent_43%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-24 w-96 -translate-x-1/2 grid-cols-4 border-x border-white/60 md:grid">
        <span className="border-r border-white/45"/><span className="border-r border-white/45"/><span className="border-r border-white/45"/><span />
      </div>

      <div ref={visualRef} className="site-container relative">
        <animated.div style={introSpring} className="grid gap-7 md:grid-cols-[1.2fr_.8fr] md:items-end md:gap-12">
          <div>
            <p className="inline-flex rounded-full border border-orange-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-orange-700">About Ficode</p>
            <h2 className="section-heading mt-3 max-w-2xl">
              UK software expertise, <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">proven in delivery.</span>
            </h2>
            <a href="mailto:sales@ficode.com" className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171819] px-5 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-orange-600">
              About Ficode <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
            </a>
          </div>
          <p className="section-description max-w-sm text-slate-600 md:justify-self-end md:pb-1">
            Empowering businesses with reliable technology, deep expertise, and solutions built for real-world impact.
          </p>
        </animated.div>

        <div className="relative mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {metrics.map(({ value, label }, index) => (
            <animated.div key={label} style={metricSprings[index]} className="group rounded-2xl border border-white/90 bg-white/75 p-4 shadow-[0_8px_24px_rgba(15,23,42,.035)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_14px_32px_rgba(88,52,23,.08)] sm:p-5">
              <p className="bg-gradient-to-r from-orange-700 to-amber-500 bg-clip-text text-3xl leading-none font-semibold tracking-tight text-transparent sm:text-[2rem]">{value}</p>
              <p className="mt-2 text-xs text-slate-600">{label}</p>
            </animated.div>
          ))}
        </div>

        <div className="mt-5 rounded-[1.75rem] border border-white/90 bg-white/65 p-4 shadow-[0_12px_34px_rgba(15,23,42,.04)] sm:mt-6 sm:p-6">
          <div className="mb-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-900">A track record built over time</p>
              <p className="mt-1 text-[10px] text-slate-500">People, partnerships and delivery moving forward</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[9px] font-semibold text-emerald-700"><TrendingUp size={12}/> Growing together</span>
          </div>
          <div aria-hidden="true" className="relative flex h-[210px] items-end justify-between gap-1 overflow-hidden rounded-xl bg-[linear-gradient(to_bottom,rgba(148,163,184,.12)_1px,transparent_1px)] bg-[length:100%_25%] px-1 pt-2 sm:h-[220px] sm:gap-3 sm:px-3">
            {bars.map((_, index) => (
              <animated.span
                key={index}
                className="w-1 shrink-0 rounded-t-full bg-gradient-to-t from-orange-500/10 via-orange-500/55 to-orange-600 shadow-[0_0_16px_rgba(234,88,12,.14)] sm:w-[5px]"
                style={{ height: barSprings[index].height }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between px-1 text-[9px] font-medium uppercase tracking-[.12em] text-slate-400 sm:px-3"><span>Ideas</span><span>Delivery</span><span>Long-term impact</span></div>
        </div>
      </div>
    </section>
  );
}
