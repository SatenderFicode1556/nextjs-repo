import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";


export default function Contact() {
  return (
    <div id="top">
      <a href="#main-content" className="sr-only z-[100] rounded-md bg-white px-4 py-3 font-semibold text-orange-800 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="bg-[#171819] text-white">
        <MotionReveal><section className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden">
          <div className="pointer-events-none absolute -right-20 top-0 h-[540px] w-[540px] rounded-full bg-orange-500/15 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(20,21,22,.98),rgba(23,24,25,.86)_60%,rgba(58,34,17,.78))]" />
          <div className="site-container relative z-10 py-24">
            <p className="section-eyebrow text-orange-400">FICODE TECHNOLOGIES</p>
            <h1 className="hero-heading mt-5 max-w-4xl uppercase">
              About <span className="font-serif text-orange-500 normal-case italic">Us.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
              Welcome to our About page.
            </p>
            <a href="mailto:sales@ficode.com" className="mt-9 inline-flex items-center gap-3 rounded-full border border-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
              Get in touch <ArrowRight size={16}/>
            </a>
          </div>
        </section></MotionReveal>
      </main>
      <MotionReveal><Footer /></MotionReveal>
    </div>
  );
}
