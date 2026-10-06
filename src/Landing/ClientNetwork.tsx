"use client";

import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import Image from "next/image";

const industries = [
  { label: "Built environment", image: "/video/common/img4.jpg", position: "center 48%" },
  { label: "Financial services", image: "/video/common/img1.jpg", position: "center 38%" },
  { label: "Health & care", image: "/video/common/img2.jpg", position: "center 35%" },
  { label: "Retail & commerce", image: "/video/common/img5.jpg", position: "center 60%" },
  { label: "Travel & leisure", image: "/video/common/img6.jpg", position: "center 53%" },
  { label: "Technology", image: "/video/common/img7.jpg", position: "center 43%" },
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
          {industries.map(({ label, image, position }, index) => (
            <animated.li key={label} style={industrySprings[index]} className="group relative isolate aspect-[1.22] min-h-[140px] overflow-hidden rounded-2xl bg-slate-900 shadow-[0_12px_32px_rgba(15,23,42,.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(15,23,42,.2)] sm:aspect-[1.15] lg:aspect-[1.22]">
              <Image src={image} alt="" fill sizes="(max-width: 639px) 46vw, (max-width: 1023px) 30vw, 16vw" className="object-cover transition duration-700 group-hover:scale-110" style={{ objectPosition: position }} />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-slate-950/10 transition-colors duration-300 group-hover:from-slate-950/95 group-hover:via-slate-950/25" />
              <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-[9px] font-semibold tracking-[.12em] text-white/85 backdrop-blur-sm">0{index + 1}</span>
              <span className="absolute inset-x-0 bottom-0 p-3.5 text-xs font-semibold leading-snug text-white drop-shadow sm:p-4 sm:text-sm">{label}</span>
            </animated.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
