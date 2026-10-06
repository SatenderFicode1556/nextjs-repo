"use client";

import { animated, useInView, useReducedMotion, useSpring } from "@react-spring/web";
import { ArrowRight, Clapperboard } from "lucide-react";
import { useEffect, useRef } from "react";

const videos = [
  { src: "/video/header/speaker1.mp4", poster: "/video/common/img6.jpg" },
  { src: "/video/header/video0.mp4", poster: "/video/common/img4.jpg" },
  { src: "/video/header/video1.mp4", poster: "/video/common/img5.jpg" },
  { src: "/video/header/video2.mp4", poster: "/video/common/img2.jpg" },
  { src: "/video/header/video3.mp4", poster: "/video/common/img7.jpg" },
  { src: "/video/header/ring-ani.mp4", poster: "/video/common/img3.jpg" },
  { src: "/video/header/earth.mp4", poster: "/video/common/img1.jpg" },
];

function MovingVideo({ video, reducedMotion }: { video: (typeof videos)[number]; reducedMotion: boolean | null }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || reducedMotion) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void element.play().catch(() => undefined);
      } else {
        element.pause();
      }
    }, { threshold: 0.25 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <video
      ref={videoRef}
      className="block aspect-video h-auto w-full object-cover"
      src={video.src}
      poster={video.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}

function VideoTrack({ items, label, reverse = false, reducedMotion }: { items: typeof videos; label: string; reverse?: boolean; reducedMotion: boolean | null }) {
  return (
    <div className="video-reel overflow-hidden" role="region" aria-label={label}>
      <div className={`video-reel-track flex w-max ${reverse ? "video-reel-track-reverse" : ""}`}>
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4">
            {items.map((video) => (
              <div key={`${copy}-${video.src}`} className="w-[78vw] max-w-[340px] shrink-0 overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-[#171819] shadow-[0_12px_34px_rgba(15,23,42,.08)]">
                <MovingVideo video={video} reducedMotion={reducedMotion} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VideoTestomonial() {
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
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange-200/55 blur-[100px]" />
      <div ref={sectionRef} className="site-container relative">
        <animated.div style={sectionSpring}>
          <div className="mb-8 max-w-3xl sm:mb-10">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-orange-700">
              <Clapperboard size={13} /> Films & client stories
            </p>
            <h2 className="section-heading">
              Real voices. <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Ideas in motion.</span>
            </h2>
            <p className="section-description mt-3 max-w-2xl">
              Explore client stories and films about the technology, ideas and work we help bring to life.
            </p>
          </div>

          <div className="space-y-4">
            <VideoTrack items={videos.slice(0, 4)} label="Client and technology videos, first carousel row" reducedMotion={reducedMotion} />
            <VideoTrack items={videos.slice(4)} label="More technology videos, second carousel row" reverse reducedMotion={reducedMotion} />
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/75 px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:px-6">
            <p className="text-xs leading-5 text-slate-600">A continuous reel of our client and technology videos.</p>
            <a href="mailto:sales@ficode.com?subject=Share%20a%20client%20video" className="group inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-slate-900 transition hover:text-orange-700">
              Share a video <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
