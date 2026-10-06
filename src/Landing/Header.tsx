"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import firstImg from "../../public/Images/Landing/Header/first-img-header.png"
import secondImg from "../../public/Images/Landing/Header/second-img-header.png"
import fourthImg from "../../public/Images/Landing/Header/forth-img-header.png"
import Image from "next/image";


const trustMarks = [
  { img: firstImg, alt: "AWS Partner Select Tier Services" },
  { img: secondImg, alt: "ISO certification" },
  { img: firstImg, alt: "AWS Partner Select Tier Services" },
  { img: secondImg, alt: "ISO certification" },
  { img: fourthImg, alt: "Greater Birmingham Chambers of Commerce" },
];

export default function Header() {
  const [heroRef, heroInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const reducedMotion = useReducedMotion();
  const [heroSprings] = useTrail(
    5,
    (index) => ({
      from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
      to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 24 },
      delay: index * 100,
      immediate: reducedMotion || !heroInView,
      config: { mass: 1, tension: 240, friction: 24 },
    }),
    [heroInView, reducedMotion],
  );

  return (
    <>
      <section className="relative isolate flex min-h-[min(820px,calc(100svh-72px))] items-center justify-center overflow-hidden bg-[#171819] text-white">
        <video className="absolute inset-0 h-full w-full object-cover" src="/video/header/ai.mp4" autoPlay muted loop playsInline aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(12,14,18,.88)_0%,rgba(12,14,18,.72)_48%,rgba(12,14,18,.58)_100%)]" />
        <div className="hero-accent-glow pointer-events-none absolute inset-0" />
        <div ref={heroRef} className="site-container relative z-10 flex w-full flex-col items-center py-24 text-center sm:py-28 lg:py-32">
            <animated.div style={heroSprings[0]} className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-black/25 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-orange-300 backdrop-blur-sm"><span className="h-1.5 w-1.5 rounded-full bg-orange-400"/>YOUR PARTNER IN WHAT&apos;S NEXT</animated.div>
            <animated.h1 style={heroSprings[1]} className="hero-heading max-w-5xl uppercase">Modernise systems.<br/>Build AI. Create<br/><span className="font-serif text-orange-500 normal-case italic">What&apos;s next.</span></animated.h1>
            <animated.p style={heroSprings[2]} className="section-description mt-6 max-w-2xl text-slate-200">We help ambitious organisations turn complex technology into clear momentum, with bespoke software, practical AI and cloud built around your business.</animated.p>
            <animated.div style={heroSprings[3]} className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <a href="mailto:sales@ficode.com" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-orange-500 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-500">Let&apos;s talk about your next move <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></a>
              <a href="#services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-medium text-white/90 transition hover:border-orange-400 hover:text-orange-300">Explore what we do <ArrowDownRight size={16}/></a>
            </animated.div>
            <animated.div style={heroSprings[4]} className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-300"><div className="flex -space-x-2"><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#171819] bg-orange-200 text-[10px] font-bold text-orange-900">AI</span><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#171819] bg-amber-100 text-[10px] font-bold text-amber-800">UX</span><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#171819] bg-orange-100 text-[10px] font-bold text-orange-800">DX</span></div><span>People, ideas and engineering. Working as one.</span></animated.div>
        </div>
      </section>
      <section aria-label="Certifications and memberships" className="overflow-hidden border-b border-slate-200/80 bg-[#f5f5f4] py-7 sm:py-8">
        <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:mb-6">Trusted expertise. Recognised standards.</p>
        <div className="trust-marquee relative mx-auto max-w-[100rem] overflow-hidden" role="region" aria-label="Certification logos">
          <div className="trust-marquee-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-12 px-6 sm:gap-20 sm:px-10" aria-hidden={copy === 1}>
                {trustMarks.map(({ img, alt }, markIndex) => (
                  <div key={`${copy}-${markIndex}`} className="flex h-12 w-40 shrink-0 items-center justify-center sm:h-14 sm:w-52">
                    <Image src={img} alt={copy === 0 ? alt : ""} className="h-full w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
