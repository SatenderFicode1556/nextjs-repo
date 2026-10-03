import { ArrowRight } from "lucide-react";

export default function InnerPageHero({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent: string; description: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#09152d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(46,144,206,.25),transparent_38%),radial-gradient(ellipse_at_10%_100%,rgba(15,71,126,.35),transparent_45%)]" />
      <div className="site-container relative grid min-h-[440px] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr] lg:py-24">
        <div>
          <p className="section-eyebrow !text-cyan-300">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-6xl lg:text-7xl">{title}<br/><span className="text-[#56b6e8]">{accent}</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{description}</p>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3288cb] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#47a4e4]">Talk to our team <ArrowRight size={17}/></a>
        </div>
        <div className="relative hidden min-h-[290px] items-center justify-center lg:flex" aria-hidden="true">
          <div className="absolute h-72 w-72 rounded-full border border-cyan-300/20" />
          <div className="absolute h-52 w-52 rounded-full border border-cyan-300/20" />
          <div className="absolute h-32 w-32 rounded-full border border-cyan-300/25" />
          <div className="relative grid h-28 w-28 place-items-center rounded-[2rem] border border-cyan-200/30 bg-[linear-gradient(145deg,rgba(70,171,224,.38),rgba(16,43,80,.8))] text-4xl font-semibold tracking-tight text-white shadow-[0_20px_80px_rgba(39,147,205,.22)]">F<span className="text-cyan-300">.</span></div>
          <div className="absolute left-[12%] top-[16%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_8px_rgba(99,213,255,.35)]" />
          <div className="absolute bottom-[16%] right-[13%] h-2 w-2 rounded-full bg-sky-200 shadow-[0_0_20px_7px_rgba(99,213,255,.3)]" />
        </div>
      </div>
    </section>
  );
}
