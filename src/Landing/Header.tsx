"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import { useCallback, useRef, useState } from "react";
import firstImg from "../../public/Images/Landing/Header/first-img-header.png"
import secondImg from "../../public/Images/Landing/Header/second-img-header.png"
import fourthImg from "../../public/Images/Landing/Header/forth-img-header.png"
import Image from "next/image";


const trustMarks = [
  { img: firstImg, alt: "AWS Partner Select Tier Services" },
  { img: secondImg, alt: "ISO certification" },
  { img: fourthImg, alt: "Greater Birmingham Chambers of Commerce" },
];

const heroVideos = [
  { src: "/video/header/video0.mp4", label: "Digital innovation" },
  { src: "/video/header/video1.mp4", label: "Technology in action" },
  { src: "/video/header/video2.mp4", label: "Connected ideas" },
  { src: "/video/header/video3.mp4", label: "Building what is next" },
];

export default function Header() {
  const [videoSlots, setVideoSlots] = useState<[number, number]>([0, 1]);
  const [activeSlot, setActiveSlot] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const switchingVideo = useRef(false);
  const [heroRef, heroInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const reducedMotion = useReducedMotion();
  const switchToNextVideo = useCallback(async () => {
    if (switchingVideo.current) return;
    const nextSlot = 1 - activeSlot;
    const nextVideo = videoRefs.current[nextSlot];
    if (!nextVideo) return;

    switchingVideo.current = true;
    try {
      nextVideo.currentTime = 0;
      await nextVideo.play();
      setActiveSlot(nextSlot);
      window.setTimeout(() => {
        setVideoSlots((current) => {
          const updated: [number, number] = [...current];
          updated[activeSlot] = (current[nextSlot] + 1) % heroVideos.length;
          return updated;
        });
        switchingVideo.current = false;
      }, 1450);
    } catch {
      switchingVideo.current = false;
    }
  }, [activeSlot]);
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
      <section className="relative isolate flex min-h-[min(820px,calc(100svh-72px))] flex-col overflow-hidden bg-[#171819] text-white">
        {videoSlots.map((videoIndex, slot) => {
          const isActive = slot === activeSlot;
          return (
            <video
              key={heroVideos[videoIndex].src}
              ref={(node) => { videoRefs.current[slot] = node; }}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-in-out motion-reduce:duration-0 motion-reduce:transform-none ${isActive ? "scale-100 opacity-100" : "pointer-events-none scale-[1.025] opacity-0"}`}
              src={heroVideos[videoIndex].src}
              autoPlay={isActive}
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              onTimeUpdate={(event) => {
                const video = event.currentTarget;
                if (isActive && Number.isFinite(video.duration) && video.duration - video.currentTime <= 1.6) void switchToNextVideo();
              }}
              onEnded={() => { if (isActive) void switchToNextVideo(); }}
            />
          );
        })}
        <div className="pointer-events-none absolute inset-0 bg-[#0b0d10]/25" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(12,14,18,.88)_0%,rgba(12,14,18,.72)_48%,rgba(12,14,18,.58)_100%)]" />
        <div className="hero-accent-glow pointer-events-none absolute inset-0" />
        <div ref={heroRef} className="site-container relative z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center py-8 text-center sm:py-12 lg:py-16">
            <animated.div style={heroSprings[0]} className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-black/25 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-orange-300 backdrop-blur-sm"><span className="h-1.5 w-1.5 rounded-full bg-orange-400"/>YOUR PARTNER IN WHAT&apos;S NEXT</animated.div>
            <animated.h1 style={heroSprings[1]} className="hero-heading max-w-6xl uppercase">Modernise systems.<br/>Build AI. Create<br/><span className="font-serif text-orange-500 normal-case italic">What&apos;s next.</span></animated.h1>
            <animated.p style={heroSprings[2]} className="section-description mt-6 max-w-2xl text-slate-200">We help ambitious organisations turn complex technology into clear momentum, with bespoke software, practical AI and cloud built around your business.</animated.p>
            <animated.div style={heroSprings[3]} className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <a href="mailto:sales@ficode.com" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-orange-500 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-500">Let&apos;s talk about your next move <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></a>
              <a href="#services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-medium text-white/90 transition hover:border-orange-400 hover:text-orange-300">Explore what we do <ArrowDownRight size={16}/></a>
            </animated.div>
            <animated.div style={heroSprings[4]} className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-300"><div className="flex -space-x-2"><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#171819] bg-orange-200 text-[10px] font-bold text-orange-900">AI</span><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#171819] bg-amber-100 text-[10px] font-bold text-amber-800">UX</span><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#171819] bg-orange-100 text-[10px] font-bold text-orange-800">DX</span></div><span>People, ideas and engineering. Working as one.</span></animated.div>
        </div>
        <div role="group" aria-label="Certifications and memberships" className="relative z-10 w-full shrink-0 py-3 sm:py-4">
        <div className="site-container">
        <div className="trust-marquee relative mx-auto w-full overflow-hidden" role="region" aria-label="Certifications and recognition logos">
          <div className="trust-marquee-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-6 px-5 sm:gap-10 sm:px-8" aria-hidden={copy === 1}>
                {trustMarks.map(({ img, alt }, markIndex) => (
                  <div key={`${copy}-${markIndex}`} className="flex h-12 w-40 shrink-0 items-center justify-center rounded-xl border border-white/50 bg-white/[0.94] px-3.5 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-white sm:h-14 sm:w-48">
                    <Image src={img} alt={copy === 0 ? alt : ""} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}
