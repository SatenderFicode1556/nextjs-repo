"use client";

import { useState } from "react";
import { animated, useInView, useReducedMotion, useSpring } from "@react-spring/web";
import { ArrowRight, Clapperboard, Pause, Play, Quote } from "lucide-react";

const speakerVideo = "/video/header/speaker1.mp4";
const reelMoments = [0, 6, 12, 18, 24];

export default function VideoTestomonial() {
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const [sectionRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const sectionSpring = useSpring({
    from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 22 },
    immediate: reducedMotion || !isInView,
    config: { mass: 1, tension: 220, friction: 25 },
  });

  return (
    <section id="client-video-stories" className="site-section-spacing site-surface-muted relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -right-36 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange-200/55 blur-[100px]" />
      <div ref={sectionRef} className="site-container relative">
        <animated.div style={sectionSpring}>
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-orange-700">
                <Clapperboard size={13} /> CLIENT STORIES
              </p>
              <h2 className="section-heading">
                Real voices. <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Real experiences.</span>
              </h2>
              <p className="section-description mt-3 max-w-2xl">
                Hear a client perspective on the people, decisions and ideas behind meaningful technology.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="hidden text-[10px] font-semibold uppercase tracking-[.13em] text-slate-500 sm:block">One client reel · Five moments</span>
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={isPaused ? "Resume video carousel" : "Pause video carousel"}
                aria-pressed={isPaused}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#171819] px-4 text-xs font-semibold text-white transition hover:bg-orange-600"
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
                {isPaused ? "Play reel" : "Pause reel"}
              </button>
            </div>
          </div>

          <div className="video-reel overflow-hidden" role="region" aria-label="Auto-scrolling client video reel">
            <div className="video-reel-track flex w-max" style={{ animationPlayState: isPaused || reducedMotion ? "paused" : "running" }}>
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-4 pr-4">
                  {reelMoments.map((startAt, index) => (
                    <article key={`${copy}-${startAt}`} className="group w-[82vw] max-w-[440px] shrink-0 sm:w-[55vw] lg:w-[31vw] xl:w-[28vw]">
                      <div className="relative overflow-hidden rounded-[1.5rem] border border-white bg-[#171819] shadow-[0_14px_38px_rgba(36,27,19,.12)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_45px_rgba(36,27,19,.18)]">
                        <video
                          className="aspect-[4/3] w-full bg-[#171819] object-contain"
                          src={speakerVideo}
                          autoPlay={!reducedMotion}
                          muted
                          playsInline
                          preload="none"
                          controls={false}
                          tabIndex={-1}
                          aria-label={copy === 0 ? `Client reel moment ${index + 1}` : undefined}
                          onLoadedMetadata={(event) => {
                            const video = event.currentTarget;
                            video.currentTime = startAt;
                          }}
                          onTimeUpdate={(event) => {
                            const video = event.currentTarget;
                            const segmentEnd = reelMoments[index + 1] ?? video.duration;
                            if (Number.isFinite(segmentEnd) && video.currentTime >= segmentEnd - 0.12) {
                              video.currentTime = startAt;
                            }
                          }}
                        />
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#171819]/75 px-2.5 py-1.5 text-[9px] font-semibold tracking-[.12em] text-white backdrop-blur-md">
                          <Quote size={11} className="text-orange-300" /> MOMENT 0{index + 1}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-3 px-1 pt-3">
                        <span className="text-xs font-semibold text-slate-800">Client perspective</span>
                        <span className="text-[10px] text-slate-500">Part of the featured reel</span>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white bg-white/70 px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:px-6">
            <p className="text-xs leading-5 text-slate-600">These five moments are from the same video. Add more speaker clips to feature different client voices.</p>
            <a href="mailto:sales@ficode.com?subject=Share%20a%20client%20video" className="group inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-slate-900 transition hover:text-orange-700">
              Share a client video <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
