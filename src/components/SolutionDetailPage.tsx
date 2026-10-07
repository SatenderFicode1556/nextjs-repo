import Image, { type StaticImageData } from "next/image";
import type { DetailPageData } from "../lib/service-pages";
import InnerPageHero from "./InnerPageHero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  ArrowRight,
  Check,
  Compass,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import image1 from "../../public/video/common/img1.jpg";
import image2 from "../../public/video/common/img2.jpg";
import image3 from "../../public/video/common/img3.jpg";
import image4 from "../../public/video/common/img4.jpg";
import image5 from "../../public/video/common/img5.jpg";
import image6 from "../../public/video/common/img6.jpg";
import image7 from "../../public/video/common/img7.jpg";

const editorialImages: StaticImageData[] = [image1, image2, image3, image4, image5, image6, image7];
const videos = [
  "/video/header/video0.mp4",
  "/video/header/video1.mp4",
  "/video/header/earth.mp4",
  "/video/header/ring-ani.mp4",
];

const deliverySteps = [
  { title: "Understand the need", icon: Compass },
  { title: "Shape the approach", icon: Layers3 },
  { title: "Build and validate", icon: ShieldCheck },
  { title: "Improve over time", icon: Sparkles },
];

const principles = [
  { title: "Security considered early", icon: LockKeyhole, text: "Bring access, privacy and risk into planning and delivery decisions from the start." },
  { title: "Designed around people", icon: UsersRound, text: "Keep the needs of customers, employees and the teams who support the service in view." },
  { title: "Connected by design", icon: Network, text: "Plan integrations and data flows as part of the experience, not as an afterthought." },
  { title: "Ready to keep improving", icon: Gauge, text: "Make room for measurement, feedback and practical improvements after launch." },
];

function imageFor(slug: string) {
  const index = [...slug].reduce((total, character) => total + character.charCodeAt(0), 0);
  return editorialImages[index % editorialImages.length];
}

function videoFor(slug: string) {
  const index = [...slug].reduce((total, character) => total + character.charCodeAt(0), 0);
  return videos[index % videos.length];
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-heading mt-4">{title}</h2>
      {copy && <p className="section-description mt-4">{copy}</p>}
    </div>
  );
}

function QuickFacts({ data }: { data: DetailPageData }) {
  const facts = [
    { label: "Core capabilities", value: `${data.offerings.length} focus areas`, detail: "Combined to fit the work" },
    { label: "Delivery approach", value: "4 clear stages", detail: "From discovery to improvement" },
    { label: "Designed for", value: "Your organisation", detail: data.audience },
  ];
  return (
    <section className="site-container -mt-7 relative z-10">
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)] sm:grid-cols-3">
        {facts.map((fact, index) => <article key={fact.label} className={`p-5 sm:p-6 ${index ? "border-t border-slate-200 sm:border-l sm:border-t-0" : ""}`}>
          <p className="text-[10px] font-bold uppercase tracking-[.16em] text-sky-700">{fact.label}</p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">{fact.value}</p>
          <p className="mt-1 line-clamp-1 text-xs leading-5 text-slate-500">{fact.detail}</p>
        </article>)}
      </div>
    </section>
  );
}

function OverviewSection({ data }: { data: DetailPageData }) {
  const image = imageFor(data.slug);
  return (
    <section className="site-container py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-9 lg:grid-cols-[1fr_.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={`A closer look at ${data.title}`} title="Start with the problem worth solving." copy={data.description} />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">The best next step depends on how your people work today, which systems already support them and where friction gets in the way. We use that context to shape {data.focus} into a practical plan for {data.audience}.</p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700"><MessageCircle size={17}/></span>
            <p className="text-sm leading-6 text-slate-600"><strong className="font-semibold text-slate-900">The outcome:</strong> a solution that fits your existing environment and gives your team a clear way to keep improving it.</p>
          </div>
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-[1.75rem] bg-slate-900 sm:min-h-[380px]">
          <Image src={image} alt={`${data.title} digital service environment`} fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-slate-950/55 p-5 text-white backdrop-blur-sm sm:inset-x-7 sm:bottom-7">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-cyan-200">Built around your context</p>
            <p className="mt-2 text-lg font-semibold">{data.focus}.</p>
            <p className="mt-1 text-xs leading-5 text-white/75">Grounded in the needs of {data.audience}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSpotlight({ data }: { data: DetailPageData }) {
  return (
    <section className="site-container pb-16 sm:pb-20 lg:pb-24">
      <div className="group relative isolate min-h-[300px] overflow-hidden rounded-[1.75rem] bg-[#09152d] text-white sm:min-h-[360px]">
        <video className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-[1.02]" src={videoFor(data.slug)} poster={data.image.src} autoPlay muted loop playsInline preload="none" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(5,16,36,.96),rgba(5,16,36,.7)_55%,rgba(5,16,36,.28))]" />
        <div className="flex min-h-[300px] max-w-3xl flex-col justify-center p-7 sm:min-h-[360px] sm:p-12 lg:p-16">
          <p className="section-eyebrow !text-cyan-300">A clearer way forward</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Make technology work for <span className="text-cyan-300">the people using it.</span></h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">Bring {data.focus} together with the right people, platforms and information. The result is work that solves a real need and can keep pace as your organisation changes.</p>
        </div>
        <span className="absolute bottom-6 right-6 hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-white/80 backdrop-blur sm:inline-flex">Ficode / {data.eyebrow}</span>
      </div>
    </section>
  );
}

function CapabilityGrid({ data }: { data: DetailPageData }) {
  return (
    <section className="site-surface-muted py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="What we offer" title="The capabilities to move forward." copy={`A focused mix of expertise, shaped around ${data.focus}.`} /><p className="max-w-sm text-sm leading-6 text-slate-600">Choose the work that fits your priorities today, with a foundation that can grow when you are ready.</p></div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.offerings.map((offering, index) => <article key={offering} className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_65px_rgba(10,60,100,.09)] sm:p-7">
            <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white"><Check size={20}/></span><span className="text-xs font-bold tracking-[.18em] text-slate-300">0{index + 1}</span></div>
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">{offering}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Plan and deliver {offering.toLowerCase()} around {data.focus} and the needs of {data.audience}.</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function UseCases({ data }: { data: DetailPageData }) {
  const cases = data.offerings.slice(0, 4).map((offering, index) => ({
    offering,
    number: `0${index + 1}`,
    context: [
      `When teams need a clearer way to manage ${data.focus}.`,
      `When existing platforms need to work better together for ${data.audience}.`,
      `When customers or colleagues need a more direct digital journey.`,
      `When the organisation wants to build on a dependable foundation and improve over time.`,
    ][index],
  }));
  return (
    <section className="site-container py-16 sm:py-20 lg:py-24">
      <SectionHeading eyebrow="Where it helps" title="Useful in the moments that matter." copy={`Explore common starting points for ${data.title.toLowerCase()} work. We shape each one to the context, constraints and goals of your team.`} />
      <div className="mt-9 grid gap-4 md:grid-cols-2">
        {cases.map(({ offering, number, context }) => <article key={offering} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <span className="pt-1 text-xs font-bold tracking-[.16em] text-orange-600">{number}</span><div><h3 className="font-semibold text-slate-900">{offering}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{context}</p></div>
        </article>)}
      </div>
    </section>
  );
}

function DeliverySection({ data }: { data: DetailPageData }) {
  const processCopy = [
    `Learn how ${data.focus} affects ${data.audience} and agree what success looks like.`,
    `Select the right scope, architecture and milestones for ${data.title.toLowerCase()}.`,
    "Deliver in manageable steps, test with real needs in mind and keep progress clear.",
    "Use feedback and service insight to improve the solution as your organisation grows.",
  ];
  return (
    <section className="site-surface-muted py-16 sm:py-20 lg:py-24"><div className="site-container">
      <SectionHeading eyebrow="How we work" title="A clear path from first conversation to lasting value." copy="Keep the work close to your team, with decisions and progress visible at each stage." />
      <ol className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{deliverySteps.map(({ title, icon: Icon }, index) => <li key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-50 text-orange-700"><Icon size={20}/></span><span className="text-xs font-bold tracking-[.18em] text-slate-300">0{index + 1}</span></div>
        <h3 className="mt-5 text-base font-semibold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{processCopy[index]}</p>
      </li>)}</ol>
    </div></section>
  );
}

function ConnectionSection({ data }: { data: DetailPageData }) {
  const parts = [
    { title: "People and journeys", icon: UsersRound, text: `Understand the needs of ${data.audience} and the tasks they need to complete.` },
    { title: "Systems and data", icon: Database, text: `Connect the platforms and information behind ${data.focus}.` },
    { title: "A service that evolves", icon: Layers3, text: `Make the foundations maintainable so the experience can improve with your organisation.` },
  ];
  return (
    <section className="site-container py-16 sm:py-20 lg:py-24">
      <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-14">
        <SectionHeading eyebrow="Connected by design" title="Make each part work better together." copy={`A successful ${data.title.toLowerCase()} solution connects the user experience to the systems and information that support it.`} />
        <div className="grid gap-3">{parts.map(({ title, icon: Icon, text }, index) => <article key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700"><Icon size={18}/></span><div><div className="flex items-center gap-2"><span className="text-[10px] font-bold tracking-widest text-orange-600">0{index + 1}</span><h3 className="text-sm font-semibold text-slate-900">{title}</h3></div><p className="mt-1.5 text-sm leading-6 text-slate-600">{text}</p></div>
        </article>)}</div>
      </div>
    </section>
  );
}

function ImageFeature({ data }: { data: DetailPageData }) {
  const image = imageFor(data.slug + "ficode-feature");
  return (
    <section className="site-container pb-16 sm:pb-20 lg:pb-24">
      <div className="grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white lg:grid-cols-2">
        <div className="relative min-h-[270px] bg-slate-900 sm:min-h-[360px]"><Image src={image} alt={`Digital technology supporting ${data.title.toLowerCase()}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"><p className="section-eyebrow">Designed for daily work</p><h2 className="section-heading mt-4">Technology that fits the way your team works.</h2><p className="mt-4 text-sm leading-7 text-slate-600">Every organisation starts from a different place. We account for the tools you already use, the people responsible for the service and the practical demands of {data.focus}.</p><ul className="mt-6 space-y-3">{["Clear ownership and next steps", "A considered fit with existing tools", "Room to adapt as needs change"].map((item) => <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700"><Check size={16} className="text-emerald-600"/>{item}</li>)}</ul></div>
      </div>
    </section>
  );
}

function BenefitsSection({ data }: { data: DetailPageData }) {
  const benefits = [
    { title: "Clearer priorities", text: `Focus investment on ${data.focus} and the outcomes that matter to ${data.audience}.` },
    { title: "Designed to fit", text: `Shape the solution around your people, current systems and the realities of ${data.focus}.` },
    { title: "Confidence throughout", text: "Keep quality, security and operational needs visible from early decisions through release." },
    { title: "Ready to evolve", text: `Start with a practical scope and leave room to improve as needs around ${data.title.toLowerCase()} change.` },
  ];
  return (
    <section className="site-surface-muted py-16 sm:py-20 lg:py-24"><div className="site-container">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-14">
        <SectionHeading eyebrow="The value" title="A better fit for the work ahead." copy="Make progress now while building a stronger foundation for what comes next." />
        <div className="grid gap-3 sm:grid-cols-2">{benefits.map(({ title, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="text-sm font-semibold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div>
      </div>
    </div></section>
  );
}

function PrinciplesSection() {
  return (
    <section className="site-container py-16 sm:py-20 lg:py-24">
      <SectionHeading eyebrow="Built to last" title="Good foundations make better services." copy="Keep the qualities that matter to your users and delivery teams visible throughout the work." />
      <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{principles.map(({ title, icon: Icon, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-200 hover:shadow-lg hover:shadow-slate-900/5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-700"><Icon size={18}/></span><h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div>
    </section>
  );
}

function FAQSection({ data }: { data: DetailPageData }) {
  const faqs = [
    { question: `What does ${data.title} include?`, answer: `${data.description} Typical work can include ${data.offerings.slice(0, 3).join(", ").toLowerCase()}, followed by testing and ongoing improvement.` },
    { question: `Who is ${data.title} for?`, answer: `It can support ${data.audience}. We shape the scope around your users, current technology and the result you need.` },
    { question: "Can this work with our existing systems?", answer: `Yes. We begin by understanding your current environment and plan ${data.focus} to fit the platforms, data and processes you already rely on.` },
    { question: "How do we get started?", answer: `Start with a conversation about your goals and constraints. We can then agree a focused discovery step, priorities and a practical delivery plan for ${data.title.toLowerCase()}.` },
    { question: "Can we start with a smaller project?", answer: "Yes. A focused first phase can help validate priorities, understand dependencies and give your team a useful foundation for deciding what to do next." },
  ];
  return (
    <section className="site-surface-muted py-16 sm:py-20 lg:py-24"><div className="site-container grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
      <SectionHeading eyebrow="Frequently asked questions" title="Good to know before you begin." copy={`A few useful answers about getting started with ${data.title.toLowerCase()}.`} />
      <div className="space-y-3">{faqs.map(({ question, answer }) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 open:border-orange-200 sm:px-6"><summary className="cursor-pointer text-sm font-semibold leading-6 text-slate-900 marker:text-orange-600">{question}</summary><p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-600">{answer}</p></details>)}</div>
    </div></section>
  );
}

function ContactCTA({ data }: { data: DetailPageData }) {
  return (
    <section className="bg-[#09152d] py-16 text-white sm:py-20"><div className="site-container flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><div><p className="section-eyebrow !text-cyan-300">Your next step</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s talk about {data.title.toLowerCase()}.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">Tell us what you want to achieve. We&apos;ll help you find a practical way to get there.</p></div><a href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 py-3.5 text-sm font-bold text-[var(--brand-on-accent)] transition hover:bg-[var(--brand-accent-600)]">Talk to Ficode <ArrowRight size={16}/></a></div></section>
  );
}

export default function SolutionDetailPage({ data }: { data: DetailPageData }) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <InnerPageHero eyebrow={data.eyebrow} title={data.headline} accent={data.highlight} description={data.description} image={data.image} imageAlt={data.imageAlt} />
        <QuickFacts data={data} />
        <OverviewSection data={data} />
        <VideoSpotlight data={data} />
        <CapabilityGrid data={data} />
        <UseCases data={data} />
        <DeliverySection data={data} />
        <ConnectionSection data={data} />
        <ImageFeature data={data} />
        <BenefitsSection data={data} />
        <PrinciplesSection />
        <FAQSection data={data} />
        <ContactCTA data={data} />
      </main>
      <Footer />
    </>
  );
}
