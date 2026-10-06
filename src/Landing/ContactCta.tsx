import { ArrowRight, Mail, MoveUpRight, Sparkles } from "lucide-react";

function ChallengeArtwork() {
  return (
    <div className="relative mx-auto aspect-[1.13/1] w-full max-w-[500px]" aria-hidden="true">
      <svg viewBox="0 0 500 430" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="cta-swoosh" x1="32" y1="72" x2="271" y2="307" gradientUnits="userSpaceOnUse"><stop stopColor="var(--brand-accent-300)"/><stop offset=".46" stopColor="var(--brand-accent)"/><stop offset="1" stopColor="var(--brand-accent-800)"/></linearGradient>
          <linearGradient id="cta-swoosh2" x1="260" y1="232" x2="490" y2="379" gradientUnits="userSpaceOnUse"><stop stopColor="var(--brand-secondary-300)"/><stop offset="1" stopColor="var(--brand-secondary)"/></linearGradient>
        </defs>
        <path d="M-12 147C62 123 77 61 177 39c61-14 100 15 102 61 2 52-61 95-108 132-51 40-119 83-153 70-30-11-16-46 19-80 19-19 3-32-20-19-38 23-53 10-29-22 12-16 20-26 0-34Z" fill="url(#cta-swoosh)"/>
        <path d="M330 245c46 3 69-39 105-16 26 17 19 51 39 72 16 17 41 24 33 44-8 23-42 18-66 35-33 23-51 66-87 58-30-7-34-44-59-64-27-21-71-19-78-49-8-32 33-44 63-61 20-11 31-21 50-19Z" fill="url(#cta-swoosh2)"/>
        <path d="M31 344c53 25 99 16 153 16m-166 11c42 23 77 30 119 29m291-27c27-5 47-16 68-34" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 7"/>
      </svg>

      <div className="absolute left-[10%] top-[21%] h-[62%] w-[79%] overflow-hidden rounded-2xl border border-blue-200/80 bg-white/70 shadow-[0_20px_55px_rgba(27,69,142,.14)] backdrop-blur-md">
        <div className="flex h-9 items-center gap-1.5 border-b border-blue-100/80 px-3"><span className="h-2 w-2 rounded-full bg-rose-300"/><span className="h-2 w-2 rounded-full bg-amber-300"/><span className="h-2 w-2 rounded-full bg-emerald-300"/><span className="ml-2 h-1.5 w-20 rounded-full bg-slate-200"/></div>
        <div className="grid h-[calc(100%-36px)] grid-cols-[1fr_.7fr] gap-3 p-4 sm:p-5">
          <div className="flex flex-col justify-between">
            <div><span className="text-[9px] font-semibold tracking-[.14em] text-blue-700">YOUR NEXT CHALLENGE</span><div className="mt-2 h-2 w-4/5 rounded-full bg-slate-300"/><div className="mt-1.5 h-2 w-3/5 rounded-full bg-slate-200"/><div className="mt-4 h-1.5 w-full rounded-full bg-slate-100"/><div className="mt-1.5 h-1.5 w-11/12 rounded-full bg-slate-100"/><div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-slate-100"/></div>
            <div className="flex items-end gap-1.5"><span className="h-7 w-3 rounded-t bg-blue-200"/><span className="h-10 w-3 rounded-t bg-blue-300"/><span className="h-8 w-3 rounded-t bg-cyan-300"/><span className="h-14 w-3 rounded-t bg-blue-500"/><span className="h-12 w-3 rounded-t bg-cyan-400"/><span className="h-[4.5rem] w-3 rounded-t bg-indigo-600"/></div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg shadow-blue-900/20"><Sparkles size={25}/></div>
            <div className="mt-3 h-1.5 w-14 rounded-full bg-blue-200"/><div className="mt-1.5 h-1.5 w-10 rounded-full bg-slate-200"/>
            <div className="mt-4 grid h-7 w-7 place-items-center rounded-full bg-white text-cyan-600 shadow-sm"><ArrowRight size={14}/></div>
          </div>
        </div>
      </div>
      <div className="absolute right-[6%] top-[12%] grid h-10 w-10 place-items-center rounded-xl border border-white/80 bg-white/85 text-blue-700 shadow-lg backdrop-blur"><MoveUpRight size={18}/></div>
      <div className="absolute bottom-[10%] left-[9%] rounded-full border border-white/80 bg-white/85 px-3 py-2 text-[10px] font-semibold text-slate-700 shadow-lg backdrop-blur">A clearer way forward</div>
    </div>
  );
}

export default function ContactCta() {
  return (
    <section id="contact" className="site-section-spacing site-surface-muted overflow-hidden border-t">
      <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <ChallengeArtwork />
        <div className="max-w-xl">
          <p className="section-eyebrow text-blue-700">LET&apos;S MAKE PROGRESS</p>
          <h2 className="section-heading mt-3">
            Choose the right route for your <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">technology challenge.</span>
          </h2>
          <p className="section-description mt-4">
            Tell us what is not working, what you want to modernise, or what you need to build. We will help define the next practical step, even if you are still shaping the brief.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:sales@ficode.com?subject=Technology%20challenge" className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-4 py-2.5 text-xs font-semibold text-[var(--brand-on-accent)] shadow-md shadow-orange-900/15 transition hover:-translate-y-0.5">
              <Mail size={14}/> Discuss your technology challenge <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
            </a>
            <a href="#case-studies" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700">
              Explore our work <MoveUpRight size={14}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
