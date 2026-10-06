import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowRight, Factory, GraduationCap, HeartPulse, Landmark, ShoppingBag, Truck } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import peopleImage from "../../../public/video/common/img7.jpg";
import commerceImage from "../../../public/video/common/img5.jpg";
import operationsImage from "../../../public/video/common/img4.jpg";
import industriesHeroImage from "../../../public/video/common/img6.jpg";

export const metadata: Metadata = { title: "Industries | Ficode", description: "Digital products and technology solutions for healthcare, financial services, retail and more." };

const groups = [
  {
    image: peopleImage,
    imageAlt: "A bright glass-and-iron conservatory filled with greenery",
    label: "01 / PEOPLE & CARE",
    title: "Technology should make life easier for the people who use it.",
    intro: "From essential health services to lifelong learning, we bring people and information closer together with secure, accessible digital experiences.",
    sectors: [
      { id: "healthcare", icon: HeartPulse, title: "Healthcare & life sciences", text: "Connect care teams, improve patient access and make clinical workflows feel more joined up." },
      { id: "education", icon: GraduationCap, title: "Education", text: "Give learners and educators accessible platforms that make room for better outcomes." },
    ],
  },
  {
    image: commerceImage,
    imageAlt: "People and a street food stand in a city at night",
    label: "02 / TRUST & COMMERCE",
    title: "Make every interaction feel clear, personal and dependable.",
    intro: "We help customer-facing organisations turn complex services into simple journeys, supported by platforms built to earn trust over time.",
    sectors: [
      { id: "finance", icon: Landmark, title: "Financial services", text: "Build secure digital services and smarter operations where trust matters at every step." },
      { id: "retail", icon: ShoppingBag, title: "Retail & commerce", text: "Bring customer, product and fulfilment experiences together across every channel." },
    ],
  },
  {
    image: operationsImage,
    imageAlt: "A cyclist travelling along a leafy neighborhood street",
    label: "03 / OPERATIONS IN MOTION",
    title: "Give complex operations a clearer way forward.",
    intro: "From the factory floor to the final mile, connect operational data and modernise the systems that keep work moving.",
    sectors: [
      { id: "manufacturing", icon: Factory, title: "Manufacturing", text: "Connect production data, modernise core systems and give teams a live view of operations." },
      { id: "logistics", icon: Truck, title: "Transport & logistics", text: "Make journeys easier to plan, track and improve with joined-up technology." },
    ],
  },
];

export default function IndustriesPage() {
  return <><a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a><Navbar/><main id="main-content">
    <section className="relative isolate min-h-[560px] overflow-hidden bg-[#111719] text-white sm:min-h-[640px]">
      <Image src={industriesHeroImage} alt="A traveler looking across a mountain lake" fill priority sizes="100vw" className="-z-20 object-cover object-[center_58%]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,16,20,.88)_0%,rgba(8,16,20,.58)_56%,rgba(8,16,20,.12)_100%),linear-gradient(0deg,rgba(8,16,20,.48),transparent_55%)]" />
      <div className="site-container relative flex min-h-[560px] flex-col justify-center py-20 sm:min-h-[640px] sm:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-orange-200"><span className="h-px w-8 bg-orange-300"/>Industries we support</p>
          <h1 className="mt-6 text-balance text-5xl font-medium leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-7xl">Your world is<br/>our <span className="font-serif italic text-orange-300">starting point.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">Every sector has its own pressures, regulations and opportunities. We listen first, then build technology around the realities of your business.</p>
          <a href="#sector-expertise" className="group mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-3 text-sm font-semibold text-white transition hover:border-orange-300 hover:text-orange-200">Explore our sector experience <ArrowDown size={16} className="transition-transform group-hover:translate-y-1"/></a>
        </div>
        <p className="absolute bottom-6 right-6 hidden text-[10px] font-semibold uppercase tracking-[.2em] text-white/65 sm:block">Context matters. We start by listening.</p>
      </div>
    </section>

    <section id="sector-expertise" className="site-container py-20 sm:py-28">
      <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><p className="section-eyebrow">Sector experience</p><h2 className="section-heading mt-4 max-w-xl text-4xl sm:text-5xl">Different worlds.<br/>Shared ambition.</h2></div>
        <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">We bring deep engineering skills together with the context that helps technology make a meaningful difference in the real world.</p>
      </div>

      <div className="divide-y divide-slate-200">
        {groups.map(({ image, imageAlt, label, title, intro, sectors }, index) => <section key={label} className="grid gap-8 py-10 first:pt-0 last:pb-0 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-16">
          <div className={`relative min-h-[340px] overflow-hidden rounded-[1.5rem] bg-slate-200 sm:min-h-[480px] ${index === 1 ? "lg:order-2" : ""}`}>
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 46vw, 100vw" className={`object-cover transition-transform duration-700 hover:scale-[1.025] ${index === 0 ? "object-[center_34%]" : index === 1 ? "object-[center_38%]" : "object-[center_65%]"}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 text-[10px] font-bold tracking-[.2em] text-white/85 sm:bottom-7 sm:left-7">FICODE / INDUSTRY PERSPECTIVES</span>
          </div>
          <div className={`lg:py-8 ${index === 1 ? "lg:order-1" : ""}`}>
            <p className="text-xs font-bold tracking-[.18em] text-[var(--brand-accent)]">{label}</p>
            <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-.04em] text-slate-900 sm:text-4xl">{title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{intro}</p>
            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {sectors.map(({ id, icon: Icon, title: sectorTitle, text }, sectorIndex) => <article id={id} key={id} className="scroll-mt-32 py-5 first:pt-5 last:pb-5">
                <div className="flex items-start gap-4"><span className="mt-0.5 text-[var(--brand-accent)]"><Icon size={20} strokeWidth={1.7}/></span><div className="flex-1"><h4 className="text-base font-semibold tracking-tight text-slate-900">{sectorTitle}</h4><p className="mt-1.5 max-w-lg text-sm leading-6 text-slate-600">{text}</p></div><span className="hidden text-xs font-medium text-slate-400 sm:block">0{index * 2 + sectorIndex + 1}</span></div>
              </article>)}
            </div>
            <a href="/contact" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-[var(--brand-accent)]">Talk to our team <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></a>
          </div>
        </section>)}
      </div>
    </section>

    <section className="overflow-hidden bg-[#171819] py-16 text-white sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-orange-300">One thing stays constant</p><h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl">Your goals set the direction.</h2></div><div><p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">We don&apos;t force your organisation into a standard package. We bring the right people, technology and delivery approach around the outcome you need, while keeping your customers and colleagues at the centre.</p><a href="/contact" className="mt-6 inline-flex items-center gap-2 border-b border-white/30 pb-2 text-sm font-semibold transition hover:border-orange-300 hover:text-orange-200">Let&apos;s talk about your next step <ArrowRight size={15}/></a></div></div></section>
  </main><Footer/></>;
}
