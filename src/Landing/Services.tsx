"use client";

import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import { ArrowRight, Bot, CloudCog, Code2, DatabaseZap, Sparkles } from "lucide-react";

const services = [
  {
    number: "01",
    eyebrow: "PUT AI TO PRACTICAL WORK",
    title: "Build AI & Automation",
    description: "Apply AI and automation to repetitive work, knowledge retrieval and data led decisions, with governance and human oversight built in.",
    action: "Explore AI & Automation",
    icon: Bot,
    featured: true,
  },
  {
    number: "02",
    eyebrow: "IMPROVE WHAT YOU HAVE",
    title: "Modernise Systems on AWS",
    description: "Modernise your systems with secure, resilient cloud foundations designed around your teams and goals.",
    action: "Modernise your systems",
    icon: CloudCog,
  },
  {
    number: "03",
    eyebrow: "CREATE WHAT IS MISSING",
    title: "Software Development",
    description: "Build thoughtful digital products and bespoke software that solve real problems and grow with your business.",
    action: "Build your software product",
    icon: Code2,
  },
  {
    number: "04",
    eyebrow: "MAKE DATA WORK HARDER",
    title: "Data & Cloud Solutions",
    description: "Connect your platforms and data to make information easier to trust, access and act on.",
    action: "Explore data solutions",
    icon: DatabaseZap,
  },
];

export default function Services() {
  const [sectionRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const reducedMotion = useReducedMotion();
  const [cardSprings] = useTrail(
    services.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
      to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 26 },
      delay: index * 110,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 250, friction: 24 },
    }),
    [isInView, reducedMotion],
  );

  return (
    <section id="services" className="site-section-spacing relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="section-eyebrow mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-orange-700">
            <Sparkles size={14} /> WHAT WE DO
          </div>
          <h2 className="section-heading">
            What technology problems can <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Ficode solve?</span>
          </h2>
          <p className="section-description mx-auto mt-4 max-w-xl">
            We help UK organisations modernise outdated systems, automate manual work with AI, improve cloud foundations and build bespoke software around their needs.
          </p>
        </div>

        <div ref={sectionRef} className="services-card-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ number, eyebrow, title, description, action, icon: Icon, featured }, index) => (
            <animated.article
              key={number}
              style={cardSprings[index]}
              className={`group relative flex min-h-[290px] flex-col overflow-hidden rounded-[1.5rem] border p-5 transition duration-500 hover:-translate-y-1.5 sm:p-6 ${featured
                ? "border-[color-mix(in_srgb,var(--brand-accent)_45%,#171819)] bg-[linear-gradient(145deg,#171819_0%,#24211f_62%,var(--brand-accent-800)_100%)] text-white shadow-[0_20px_55px_rgba(83,48,21,.2)]"
                : "border-slate-200/90 bg-[linear-gradient(145deg,#fff_0%,#fff_72%,var(--brand-accent-50)_100%)] text-slate-900 shadow-[0_10px_35px_rgba(15,23,42,.045)] hover:border-[var(--brand-accent)] hover:bg-[linear-gradient(145deg,#171819_0%,#24211f_62%,var(--brand-accent-800)_100%)] hover:text-white hover:shadow-[0_20px_55px_rgba(83,48,21,.2)] focus-within:border-[var(--brand-accent)] focus-within:bg-[linear-gradient(145deg,#171819_0%,#24211f_62%,var(--brand-accent-800)_100%)] focus-within:text-white focus-within:shadow-[0_20px_55px_rgba(83,48,21,.2)]"
              }`}
            >
              <div className={`pointer-events-none absolute inset-x-6 top-0 h-px ${featured ? "bg-gradient-to-r from-transparent via-orange-300/80 to-transparent" : "bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"}`} />
              {featured && <>
                <div className="pointer-events-none absolute -right-16 -bottom-28 h-64 w-64 rounded-full bg-orange-500/25 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-orange-400/35" />
                <span className="absolute right-5 top-5 rounded-full border border-orange-200/20 bg-white/10 px-2.5 py-1 text-[9px] font-semibold tracking-[.14em] text-orange-100">AI SPOTLIGHT</span>
              </>}
              <div className="relative flex items-start justify-between">
                <span className={`service-icon grid h-11 w-11 place-items-center rounded-2xl transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 ${featured ? "border border-white/15 bg-white/10 text-orange-200" : "border border-orange-100 bg-orange-50 text-orange-700 group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-orange-200 group-focus-within:border-white/15 group-focus-within:bg-white/10 group-focus-within:text-orange-200"}`}>
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                {!featured && <span className="text-xs font-semibold tracking-[.18em] text-slate-300 transition-colors group-hover:text-orange-200 group-focus-within:text-orange-200">{number}</span>}
              </div>
              <p className={`relative mt-6 text-[9px] font-semibold tracking-[.13em] ${featured ? "text-orange-200" : "text-orange-700/75 transition-colors group-hover:text-orange-200 group-focus-within:text-orange-200"}`}>{eyebrow}</p>
              <h3 className="card-heading relative mt-2">{title}</h3>
              <p className={`card-description relative mt-2 ${featured ? "text-white/70" : "text-slate-600 transition-colors group-hover:text-white/70 group-focus-within:text-white/70"}`}>{description}</p>
              <a
                href="mailto:sales@ficode.com"
                className={`relative mt-auto inline-flex w-fit items-center gap-2 pt-6 text-xs font-semibold transition-all group-hover:gap-3 ${featured ? "text-white" : "text-slate-800 group-hover:text-white group-focus-within:gap-3 group-focus-within:text-white"}`}
              >
                {action} <ArrowRight size={14} />
              </a>
            </animated.article>
          ))}
        </div>
      </div>
    </section>
  );
}
