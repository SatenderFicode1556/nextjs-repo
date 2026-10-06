"use client";

import { animated, useInView, useReducedMotion, useTrail } from "@react-spring/web";
import { ArrowRight, ChevronDown } from "lucide-react";

const questions = [
  {
    question: "What technology problems can Ficode solve for UK organisations?",
    answer: "Ficode helps organisations modernise legacy systems, apply AI and automation, improve cloud infrastructure, connect data and platforms, and build bespoke web or mobile software. Support can cover discovery, architecture, development, testing, deployment and ongoing improvement.",
  },
  {
    question: "Why choose a software development company in the UK?",
    answer: "Working with a UK based team can make collaboration, shared working hours and ongoing conversations easier. The right partner should also bring relevant technical experience, clear delivery practices and a good understanding of your goals.",
  },
  {
    question: "Can Ficode modernise existing software systems?",
    answer: "Yes. Modernisation can include improving an existing application, replacing ageing components, moving workloads to the cloud, connecting systems or planning a gradual migration. The right approach depends on the current system and business priorities.",
  },
  {
    question: "Does Ficode provide AI development and automation?",
    answer: "Ficode can help explore practical AI use cases, prepare the data and integrations they depend on, and build AI enabled workflows with appropriate governance and human oversight.",
  },
  {
    question: "Can Ficode support cloud migration and consulting?",
    answer: "Cloud work can include assessing existing workloads, planning a migration, designing cloud architecture and improving reliability, security and cost visibility after launch.",
  },
  {
    question: "How does a bespoke software project begin?",
    answer: "It starts with a conversation about the problem, the people affected and the outcome you need. From there, the team can clarify scope, constraints and a practical first step before committing to a delivery plan.",
  },
];

export default function Faq() {
  const reducedMotion = useReducedMotion();
  const [faqRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const [faqSprings] = useTrail(
    questions.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
      to: reducedMotion ? { opacity: 1, y: 0 } : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 16 },
      delay: index * 65,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 250, friction: 25 },
    }),
    [isInView, reducedMotion],
  );

  return (
    <section id="faq" aria-labelledby="faq-heading" className="site-section-spacing site-surface-muted relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-10 h-96 w-96 rounded-full bg-orange-100/65 blur-3xl" />
      <div className="site-container relative grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.17em] text-orange-700"><span className="size-1.5 rounded-full bg-orange-500" /> Helpful answers</p>
          <h2 id="faq-heading" className="section-heading text-3xl sm:text-4xl">
            A few things you might be wondering.
          </h2>
          <p className="section-description mt-4 max-w-md">
            Find out how we work, what we can help with and how to take the first step.
          </p>

          <div className="mt-7 overflow-hidden rounded-[1.4rem] bg-[#171819] p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,.14)] sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-orange-200">Still have a question?</p>
            <p className="mt-2 text-sm leading-6 text-white/65">Tell us what you are working through. We can help you find a practical next step.</p>
            <a href="mailto:sales@ficode.com?subject=Technology%20question" className="group mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 text-xs font-semibold text-slate-950 transition hover:bg-orange-100">
              Talk it through <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div ref={faqRef} className="space-y-3">
          <div className="mb-4 flex items-center justify-between px-1 text-[10px] font-semibold uppercase tracking-[.16em] text-slate-500">
            <span>Frequently asked questions</span>
            <span>06 answers</span>
          </div>
          {questions.map(({ question, answer }, index) => (
            <animated.div key={question} style={faqSprings[index]}>
              <details className="group rounded-[1.15rem] border border-slate-200/80 bg-white/85 shadow-[0_6px_22px_rgba(15,23,42,.035)] transition duration-300 open:border-orange-200 open:bg-white open:shadow-[0_14px_34px_rgba(88,52,23,.08)]">
                <summary className="flex cursor-pointer list-none items-center gap-3.5 px-4 py-4 marker:hidden [&::-webkit-details-marker]:hidden sm:gap-4 sm:px-5 sm:py-[1.15rem]">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-orange-50 text-[10px] font-bold tracking-wide text-orange-700 transition group-open:bg-orange-600 group-open:text-white">0{index + 1}</span>
                  <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-slate-900 sm:text-[15px]">{question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition duration-300 group-open:rotate-180 group-open:border-orange-300 group-open:bg-orange-50 group-open:text-orange-700"><ChevronDown size={15}/></span>
                </summary>
                <div className="border-t border-slate-100 px-4 pb-5 pt-4 text-sm leading-6 text-slate-600 sm:ml-[3.75rem] sm:px-5 sm:pt-4">
                  <p className="max-w-4xl">{answer}</p>
                </div>
              </details>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}
