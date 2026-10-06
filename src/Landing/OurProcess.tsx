"use client";

import { useState } from "react";
import { ArrowRight, Check, Code2, Compass, PenTool, RefreshCw, Rocket, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Before choosing a solution, we listen. We get close to the challenge, the people affected and the outcome your team needs.",
    icon: Search,
    focus: ["Understand users and their needs", "Surface constraints and opportunities", "Agree what success should mean"],
  },
  {
    number: "02",
    title: "Plan",
    description: "We turn discovery into a shared, achievable plan, with priorities and decisions made visible from the start.",
    icon: Compass,
    focus: ["Set priorities and project boundaries", "Map milestones and dependencies", "Bring the right people together"],
  },
  {
    number: "03",
    title: "Design",
    description: "We shape an experience people can use and a technical approach your organisation can support and grow.",
    icon: PenTool,
    focus: ["Map user journeys and key screens", "Test ideas before building", "Plan architecture, data and security"],
  },
  {
    number: "04",
    title: "Build",
    description: "We deliver in focused increments, keeping your team close to the work and making progress easy to review.",
    icon: Code2,
    focus: ["Develop and review working software", "Test quality throughout delivery", "Share decisions and progress openly"],
  },
  {
    number: "05",
    title: "Launch",
    description: "We prepare the product, platform and people for release, then support a considered move into live use.",
    icon: Rocket,
    focus: ["Validate important user journeys", "Prepare teams and support materials", "Plan a safe, measured release"],
  },
  {
    number: "06",
    title: "Improve",
    description: "Launch is a starting point. We use feedback and real needs to guide what to support and improve next.",
    icon: RefreshCw,
    focus: ["Listen to users and teams", "Review service health and feedback", "Prioritise the next improvements"],
  },
];

export default function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;
  const nextIndex = (activeIndex + 1) % steps.length;

  return (
    <section id="our-process" aria-labelledby="our-process-title" className="relative isolate overflow-hidden bg-[#08090b] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(249,115,22,.12),transparent_38%)]" />
      <div className="site-container relative z-10">
        <div className="grid gap-6 border-b border-white/10 pb-8 sm:pb-10 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-orange-300">How we work</p>
            <h2 id="our-process-title" className="mt-3 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-.045em] sm:text-4xl lg:text-5xl">A clear path from first conversation to what&apos;s next.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/55 lg:justify-self-end sm:text-base sm:leading-7">A collaborative delivery process keeps the work focused, makes decisions visible and gives your team a clear view of what happens next.</p>
        </div>

        <div role="group" aria-label="Choose a process stage" className="mt-7 grid grid-cols-2 gap-2 sm:mt-9 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const selected = index === activeIndex;

            return (
              <button key={step.number} type="button" aria-pressed={selected} onClick={() => setActiveIndex(index)} className={`group flex min-h-[76px] items-center gap-3 rounded-xl border px-3 py-3 text-left transition duration-300 motion-reduce:transition-none sm:min-h-[88px] sm:flex-col sm:items-start sm:justify-between sm:px-4 ${selected ? "border-orange-300 bg-orange-300 text-[#17120c] shadow-[0_12px_34px_rgba(249,115,22,.14)]" : "border-white/10 bg-white/[.035] text-white/65 hover:border-white/25 hover:bg-white/[.07] hover:text-white"}`}>
                <span className="flex w-full items-center justify-between">
                  <span className={`grid h-8 w-8 place-items-center rounded-lg ${selected ? "bg-black/10" : "bg-white/[.06] text-orange-200"}`}><StepIcon size={16} /></span>
                  <span className={`text-[10px] font-bold tracking-[.14em] ${selected ? "text-black/45" : "text-white/30"}`}>{step.number}</span>
                </span>
                <span className="text-sm font-semibold">{step.title}</span>
              </button>
            );
          })}
        </div>

        <div key={activeStep.number} aria-live="polite" className="mt-4 grid overflow-hidden rounded-2xl bg-[#f4f1e8] text-slate-950 shadow-[0_24px_70px_rgba(0,0,0,.25)] animate-[theme-in_.35s_ease-out_both] motion-reduce:animate-none lg:mt-5 lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#171819] p-6 text-white sm:p-8 lg:p-10">
            <span aria-hidden="true" className="absolute -right-2 -top-12 select-none text-[12rem] font-semibold leading-none tracking-[-.1em] text-white/[.035] sm:text-[15rem]">{activeStep.number}</span>
            <div className="relative flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-300">Stage {activeStep.number} <span className="text-white/30">/ 06</span></span>
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-orange-200"><ActiveIcon size={19} /></span>
            </div>
            <div className="relative mt-12">
              <h3 className="text-3xl font-medium tracking-[-.04em] sm:text-4xl">{activeStep.title}<span className="text-orange-300">.</span></h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/60 sm:text-base sm:leading-7">{activeStep.description}</p>
            </div>
            <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[10px] font-medium text-white/40">A shared process. Shaped around your goals.</span>
              <div className="flex gap-2">
                <button type="button" onClick={() => setActiveIndex((activeIndex + steps.length - 1) % steps.length)} aria-label="Previous process stage" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300"><ArrowRight size={15} className="rotate-180" /></button>
                <button type="button" onClick={() => setActiveIndex(nextIndex)} aria-label="Next process stage" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300"><ArrowRight size={15} /></button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3"><span className="h-px w-7 bg-orange-500" /><p className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">What happens in this stage</p></div>
            <h4 className="mt-3 text-xl font-semibold tracking-[-.025em] sm:text-2xl">The work, made clear.</h4>
            <ul className="mt-6 divide-y divide-slate-950/10">
              {activeStep.focus.map((item, index) => <li key={item} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"><span className="mt-0.5 text-[10px] font-bold tracking-[.14em] text-orange-700">0{index + 1}</span><span className="flex-1 text-sm leading-6 text-slate-700">{item}</span><Check size={16} className="mt-1 shrink-0 text-slate-400" /></li>)}
            </ul>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-950/10 pt-5">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><span className="flex gap-1">{steps.map((step, index) => <span key={step.number} className={`h-1.5 w-5 rounded-full transition-colors ${index <= activeIndex ? "bg-orange-500" : "bg-slate-300"}`} />)}</span><span>{activeStep.number} of 06 stages</span></div>
              <a href="#contact" className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-900 transition hover:text-orange-700">Talk through your project <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
