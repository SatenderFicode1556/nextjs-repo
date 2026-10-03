import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import awsBadge from "../../../public/Images/Landing/Header/first-img-header.png";
import isoBadge from "../../../public/Images/Landing/Header/second-img-header.png";
import chamberBadge from "../../../public/Images/Landing/Header/forth-img-header.png";

export const metadata: Metadata = {
  title: "Contact Ficode | Let's build what's next",
  description: "Tell Ficode about your project. Our team can help with bespoke software, AI, data and cloud solutions.",
};

const contactDetails = [
  { icon: Mail, label: "Email our team", value: "sales@ficode.com", href: "mailto:sales@ficode.com" },
  { icon: Phone, label: "Give us a call", value: "+44 800 102 6528", href: "tel:+448001026528" },
  { icon: Clock3, label: "Response time", value: "Usually within one working day" },
  { icon: MapPin, label: "Based in", value: "United Kingdom · Working worldwide" },
];

const badges = [
  { src: awsBadge, alt: "AWS Partner Select Tier Services" },
  { src: isoBadge, alt: "ISO certification" },
  { src: chamberBadge, alt: "Greater Birmingham Chambers of Commerce" },
];

export default function ContactPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main id="main-content" className="overflow-hidden bg-[#f4f7fa]">
        <section className="relative isolate overflow-hidden bg-[#09152d] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(46,144,206,.26),transparent_34%),radial-gradient(ellipse_at_5%_100%,rgba(24,91,150,.34),transparent_43%)]" />
          <div className="site-container relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:py-20">
            <div className="max-w-2xl">
              <p className="section-eyebrow !text-cyan-300">Start a conversation</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-[4.25rem]">Tell us what you&apos;re <span className="text-[#56b6e8]">thinking about.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">A new product, a big technical question, or a project ready for a fresh start. Tell us what&apos;s on your mind and we&apos;ll help you find the next step.</p>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-xs font-medium text-white/70"><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3.5 py-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> A real person will reply</span><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3.5 py-2"><Clock3 size={14} className="text-cyan-300"/> Usually within one working day</span></div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="group relative h-[230px] overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#13294a] shadow-[0_30px_80px_rgba(0,0,0,.32)] sm:h-[290px] lg:h-[340px]">
                <video className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-[1.03]" src="/video/header/ai.mp4" autoPlay muted loop playsInline preload="none" aria-hidden="true" />
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,16,36,.28),rgba(5,16,36,.06)_48%,rgba(5,16,36,.55))]" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6"><span className="rounded-full border border-white/20 bg-[#071326]/55 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/90 backdrop-blur">Ideas into impact</span><span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/20 bg-white/10 text-cyan-200 backdrop-blur"><MessageCircle size={21}/></span></div>
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#071326]/65 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-200">A good place to begin</p><p className="mt-2 max-w-sm text-lg font-semibold leading-snug text-white sm:text-xl">Share the challenge. We&apos;ll bring the right people to the conversation.</p></div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:absolute sm:-bottom-6 sm:left-6 sm:right-6 sm:mt-0 sm:gap-3">
                {badges.map(({ src, alt }) => <div key={alt} className="flex h-[58px] items-center justify-center rounded-xl border border-slate-200 bg-white px-2 shadow-lg shadow-slate-950/10 sm:h-[66px] sm:rounded-2xl"><Image src={src} alt={alt} className="h-full max-h-12 w-full object-contain" /></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="site-container relative grid gap-6 pb-16 pt-10 sm:gap-8 sm:pb-20 sm:pt-16 lg:grid-cols-[.78fr_1.22fr] lg:gap-8 lg:pb-24">
          <aside className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#0c1c38] p-6 text-white shadow-xl shadow-slate-900/10 sm:p-8 lg:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Let&apos;s talk</p>
            <h2 className="mt-4 max-w-sm text-2xl font-semibold tracking-tight sm:text-3xl">A good first conversation starts here.</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">Share a little about what you need. We&apos;ll get back to you and find a time to talk through the details.</p>
            <div className="mt-7 space-y-1 border-t border-white/10 pt-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => {
                const content = <><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[.08] text-cyan-300 transition group-hover:bg-cyan-300/15"><Icon size={18}/></span><span className="min-w-0"><span className="block text-xs text-slate-400">{label}</span><span className="mt-1 block text-sm font-semibold text-white/90">{value}</span></span>{href && <ArrowUpRight size={15} className="ml-auto shrink-0 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"/>}</>;
                return href
                  ? <a key={label} href={href} className="group flex items-center gap-3 rounded-xl px-2 py-3 transition hover:bg-white/[.05]">{content}</a>
                  : <div key={label} className="flex items-center gap-3 rounded-xl px-2 py-3">{content}</div>;
              })}
            </div>
            <a href="mailto:sales@ficode.com" className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-200/30 hover:bg-white/[.08]"><span><span className="block text-sm font-semibold">Prefer to email?</span><span className="mt-1 block text-xs text-slate-400">Send us a note at sales@ficode.com</span></span><ArrowRight size={17} className="shrink-0 text-cyan-300"/></a>
          </aside>

          <div className="relative rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,45,75,.07)] sm:p-9 lg:p-10">
            <div className="absolute inset-x-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-700" />
            <div className="mb-7 flex items-start justify-between gap-4 sm:mb-8">
              <div><p className="section-eyebrow">Project enquiry</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">How can we help?</h2><p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">A few details will help us bring the right people into the conversation.</p></div>
              <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 sm:grid"><MessageCircle size={21}/></span>
            </div>
            <ContactForm />
            <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">By sending this form, you agree that Ficode may contact you about your enquiry.</p>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-14 sm:py-16">
          <div className="site-container"><div className="mb-8 max-w-xl"><p className="section-eyebrow">What happens next</p><h2 className="section-heading mt-3 text-3xl sm:text-4xl">A simple first step.</h2></div>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[{ n: "01", title: "Send us a note", text: "Tell us a bit about your goals and where you need help." }, { n: "02", title: "Meet the right people", text: "We connect you with the specialists best suited to your challenge." }, { n: "03", title: "Make a clear plan", text: "Together, we agree on practical next steps and what success looks like." }].map((step) => <article key={step.n} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6"><span className="text-xs font-bold tracking-[.18em] text-sky-700">{step.n}</span><h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
