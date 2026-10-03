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
    <section id="faq" aria-labelledby="faq-heading" className="site-section-spacing relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-36 top-10 h-96 w-96 rounded-full bg-orange-100/65 blur-3xl" />
      <div className="site-container relative">
        <div className="mb-9 flex flex-col gap-6 sm:mb-11 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full border border-orange-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-orange-700">GOOD TO KNOW</p>
            <h2 id="faq-heading" className="section-heading">
              Useful answers, <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">before you start.</span>
            </h2>
            <p className="section-description mt-3 max-w-2xl">
              A few helpful details about our services, how we work and where to begin.
            </p>
          </div>
          <a href="mailto:sales@ficode.com?subject=Technology%20question" className="group inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-full bg-[#171819] px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600">
            Talk it through with us <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
          </a>
        </div>

        <div ref={faqRef} className="space-y-3">
          {questions.map(({ question, answer }, index) => (
            <animated.div key={question} style={faqSprings[index]}>
              <details open={index === 0} className="group rounded-2xl border border-white bg-white/80 shadow-[0_6px_22px_rgba(15,23,42,.04)] transition duration-300 open:border-orange-200 open:bg-white open:shadow-[0_12px_32px_rgba(88,52,23,.08)]">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-4 marker:hidden [&::-webkit-details-marker]:hidden sm:px-6 sm:py-5">
                  <span className="hidden w-10 shrink-0 text-[10px] font-semibold tracking-[.16em] text-slate-300 sm:block">Q0{index + 1}</span>
                  <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-slate-900 sm:text-base">{question}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition duration-300 group-open:rotate-180 group-open:border-orange-300 group-open:bg-orange-50 group-open:text-orange-700"><ChevronDown size={15}/></span>
                </summary>
                <div className="border-t border-slate-100 px-4 pb-5 pt-4 text-sm leading-6 text-slate-600 sm:ml-16 sm:px-6 sm:pt-4">
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
