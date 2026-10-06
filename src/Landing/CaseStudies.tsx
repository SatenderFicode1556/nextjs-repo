"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  Building2,
  Cloud,
  Database,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    client: "Connected operations",
    category: "CLOUD & CONNECTED PLATFORMS",
    title: "One view across buildings, energy and operations.",
    summary: "A connected platform brings building data into one clear operational picture, helping teams coordinate work and make informed decisions.",
    icon: Building2,
    accent: "#ffd36d",
    capabilities: ["Unified operational data", "Cloud-native foundations", "Live portfolio insights"],
    signals: ["Connected systems", "Clearer decisions"],
  },
  {
    client: "Digital healthcare",
    category: "HEALTH & PATIENT EXPERIENCE",
    title: "A more connected experience for ongoing care.",
    summary: "A patient-focused digital service supports everyday self-care and gives care teams a better way to stay connected.",
    icon: HeartPulse,
    accent: "#a9eee7",
    capabilities: ["Patient-first journeys", "Connected care teams", "Secure health data"],
    signals: ["Designed around people", "Secure by design"],
  },
  {
    client: "Financial services",
    category: "FINANCE & INTEGRATION",
    title: "Reusable integrations for better financial journeys.",
    summary: "A flexible integration layer helps financial providers connect services and deliver smoother experiences across partner channels.",
    icon: Landmark,
    accent: "#d9c8ff",
    capabilities: ["Reusable integrations", "Partner-ready APIs", "Resilient transactions"],
    signals: ["Composable services", "Reliable journeys"],
  },
  {
    client: "AI & automation",
    category: "APPLIED AI & WORKFLOW DESIGN",
    title: "Useful automation, with people in control.",
    summary: "Purposeful AI and workflow automation reduce repetitive work while keeping decisions transparent and teams in control.",
    icon: Sparkles,
    accent: "#ffd9bb",
    capabilities: ["Human-guided AI", "Workflow automation", "Responsible rollout"],
    signals: ["Practical AI", "Human oversight"],
  },
  {
    client: "Digital products",
    category: "SOFTWARE & PRODUCT ENGINEERING",
    title: "A digital product built to grow with its users.",
    summary: "A thoughtful product experience brings complex services into a simple interface, ready to evolve with user needs.",
    icon: Blocks,
    accent: "#c7dafb",
    capabilities: ["Product strategy", "Accessible interfaces", "Scalable engineering"],
    signals: ["User-led design", "Built to evolve"],
  },
];

type Project = (typeof projects)[number];

function ProjectArtwork({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div className="relative mt-6 h-48 overflow-hidden rounded-[1.4rem] bg-[#111214] p-4 text-white sm:h-52 sm:p-5">
      <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ backgroundColor: project.accent }} />
      <div className="absolute -bottom-24 left-1/4 h-40 w-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: project.accent }} />
      <div className="relative flex h-full items-center justify-center gap-4 sm:gap-6">
        <div className="w-[47%] max-w-52 -rotate-6 rounded-[1.1rem] border border-white/10 bg-[#f7f6ef] p-3 text-slate-900 shadow-2xl sm:p-4">
          <div className="flex items-center justify-between text-[9px] font-semibold sm:text-[10px]"><span>Overview</span><span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-800">Live</span></div>
          <div className="mt-4 flex items-end gap-1.5">
            {[34, 48, 40, 68, 55, 82, 65, 92].map((height, index) => <span key={index} className="flex-1 rounded-t-sm" style={{ height, backgroundColor: `${project.accent}${index === 7 ? "" : "88"}` }} />)}
          </div>
          <div className="mt-3 flex justify-between text-[8px] text-slate-500"><span>Mon</span><span>Wed</span><span>Fri</span><span>Today</span></div>
        </div>
        <div className="w-[39%] max-w-44 rotate-3 rounded-[1.1rem] border border-white/15 bg-white p-3 text-slate-900 shadow-2xl sm:p-4">
          <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-xl" style={{ backgroundColor: project.accent }}><Icon size={16} /></span><span className="text-[9px] font-semibold sm:text-[10px]">Workspace</span></div>
          <div className="mt-4 space-y-2">
            {project.capabilities.slice(0, 3).map((capability, index) => <div key={capability} className="flex items-center gap-2 rounded-lg bg-slate-100 px-2 py-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accent }} /><span className="truncate text-[8px] text-slate-600 sm:text-[9px]">{capability}</span>{index === 0 && <ShieldCheck size={11} className="ml-auto shrink-0 text-emerald-600" />}</div>)}
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[8px] text-white/75 backdrop-blur sm:text-[9px]"><Cloud size={11} /> Secure, connected, ready to scale</div>
      </div>
    </div>
  );
}

function SidePreview({ project, side }: { project: Project; side: "left" | "right" }) {
  const Icon = project.icon;

  return (
    <article aria-hidden="true" className={`pointer-events-none absolute top-16 hidden h-[430px] w-[390px] overflow-hidden rounded-[2rem] p-8 text-slate-950 shadow-2xl transition-all duration-700 motion-reduce:transition-none xl:block ${side === "left" ? "left-[calc(50%-600px)] -rotate-[17deg]" : "left-[calc(50%+210px)] rotate-[17deg]"}`} style={{ backgroundColor: project.accent }}>
      <p className="text-[10px] font-bold tracking-[.18em] opacity-65">{project.category}</p>
      <div className="mt-10 flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-black/10"><Icon size={22} /></span><h3 className="text-xl font-semibold">{project.client}</h3></div>
      <p className="mt-8 text-lg font-medium leading-snug">{project.title}</p>
      <div className="mt-7 space-y-3">{project.signals.map((signal) => <div key={signal} className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-slate-950/70" />{signal}</div>)}</div>
      <div className="absolute -bottom-10 -right-6 h-48 w-64 rounded-t-[2rem] border-[10px] border-slate-950/10 bg-white/35" />
    </article>
  );
}

function ShowcaseCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article key={project.client} className="relative z-20 mx-auto w-full max-w-[550px] rounded-[1.8rem] bg-[#fffde9] p-5 text-slate-950 shadow-[0_32px_100px_rgba(0,0,0,.45)] sm:p-7 lg:p-8">
      <p className="text-[9px] font-bold tracking-[.16em] text-slate-500 sm:text-[10px]">{project.category}</p>
      <div className="mt-3 flex items-center gap-3 sm:gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-sm sm:h-14 sm:w-14" style={{ color: "#171717" }}><Icon size={23} /></span>
        <div><p className="text-xs font-medium text-slate-500">Featured solution</p><h3 className="text-lg font-semibold tracking-tight sm:text-xl">{project.client}</h3></div>
      </div>
      <h4 className="mt-5 text-xl font-semibold leading-tight tracking-[-.03em] sm:text-2xl">{project.title}</h4>
      <p className="mt-3 max-w-lg text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{project.summary}</p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
        {project.signals.map((signal, index) => <div key={signal} className="rounded-xl border border-slate-900/5 bg-white/70 p-3 sm:p-4"><p className="text-[9px] font-semibold uppercase tracking-[.12em] text-slate-400">0{index + 1} / FOCUS</p><p className="mt-1.5 text-xs font-semibold sm:text-sm">{signal}</p></div>)}
      </div>
      <ProjectArtwork project={project} />
    </article>
  );
}

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const leftProject = projects[(activeIndex - 1 + projects.length) % projects.length];
  const rightProject = projects[(activeIndex + 1) % projects.length];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="relative isolate overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,.09),transparent_55%)]" />
      <div className="site-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.22em] text-white/45">Selected work · Ficode Digital</p>
          <h2 id="case-studies-title" className="text-balance text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">Innovation, engineered around your business.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">Explore the kinds of connected products and platforms we help teams bring to life.</p>
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl items-center justify-center gap-2 sm:mt-10 sm:gap-3">
          <button type="button" onClick={() => move(-1)} aria-label="Previous project" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><ArrowLeft size={17} /></button>
          <div role="group" aria-label="Choose a featured project" className="flex max-w-[calc(100vw-8rem)] flex-1 items-center gap-2 overflow-x-auto py-1 [scrollbar-width:none] sm:max-w-none sm:justify-center sm:gap-2.5">
            {projects.map((project, index) => <button key={project.client} id={`project-tab-${index}`} type="button" aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)} className={`shrink-0 px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:text-sm ${activeIndex === index ? "rounded-full bg-white text-black" : "rounded-md bg-white/[.08] text-white/75 hover:bg-white/[.14] hover:text-white"}`}>{project.client}</button>)}
          </div>
          <button type="button" onClick={() => move(1)} aria-label="Next project" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><ArrowRight size={17} /></button>
        </div>

        <div id="featured-project-panel" aria-live="polite" className="relative mx-auto mt-7 flex min-h-[590px] max-w-[1440px] items-center justify-center overflow-hidden sm:mt-9 sm:min-h-[620px]">
          <SidePreview project={leftProject} side="left" />
          <SidePreview project={rightProject} side="right" />
          <div key={activeProject.client} className="relative z-20 w-full animate-[theme-in_.55s_ease-out_both] motion-reduce:animate-none sm:px-3"><ShowcaseCard project={activeProject} /></div>
        </div>

        <div className="mt-2 flex justify-center sm:mt-4">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold text-white/85 transition hover:border-white hover:bg-white hover:text-black">Discuss a project <Database size={14} className="transition-transform group-hover:translate-x-0.5" /></a>
        </div>
      </div>
    </section>
  );
}
