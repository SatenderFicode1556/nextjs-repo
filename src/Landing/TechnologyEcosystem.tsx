import {
  ArrowRight,
  Bot,
  Cloud,
  Database,
  Layers3,
  PanelsTopLeft,
  UsersRound,
} from "lucide-react";

const platforms = [
  { label: "Software", icon: PanelsTopLeft },
  { label: "Data", icon: Database },
  { label: "AI", icon: Bot },
  { label: "Cloud", icon: Cloud },
];

function EcosystemGraphic() {
  return (
    <div role="img" aria-label="Diagram showing customers, teams and partners connected through software, data, AI and cloud" className="ecosystem-reveal relative mx-auto w-full max-w-[600px] rounded-[2rem] border border-white/80 bg-[linear-gradient(145deg,#fff_0%,#fffaf3_55%,#f7eee4_100%)] p-5 shadow-[0_28px_80px_rgba(37,28,19,.12)] ring-1 ring-black/[.03] sm:p-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-orange-200/55 blur-3xl" />
        <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-amber-200/55 blur-3xl" />
      </div>
      <div className="relative">
        <div className="mb-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.18em] text-slate-400">
          <span>Connected by design</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>In sync</span>
        </div>
        <div className="mx-auto flex max-w-[390px] justify-center gap-2 sm:gap-3">
          {["Customers", "Teams", "Partners"].map((name, index) => {
            const Icon = index === 1 ? Layers3 : UsersRound;
            return <div key={name} className="ecosystem-node inline-flex items-center gap-1.5 rounded-full border border-white/90 bg-white/90 px-2.5 py-2 text-[10px] font-medium text-slate-600 shadow-[0_4px_14px_rgba(15,23,42,.06)] sm:px-3 sm:text-xs" style={{ animationDelay: `${index * 140}ms` }}><Icon size={13} className="text-orange-600"/>{name}</div>;
          })}
        </div>

        <svg viewBox="0 0 500 90" className="mx-auto h-14 w-full max-w-[440px] sm:h-16" fill="none" aria-hidden="true">
          <path className="ecosystem-flow" d="M85 5c0 50 165 22 165 80M250 5v80M415 5c0 50-165 22-165 80" stroke="#d8b38c" strokeWidth="1.5" strokeDasharray="4 6"/>
          <circle cx="85" cy="5" r="3" fill="#e86a0a"/><circle cx="250" cy="5" r="3" fill="#e86a0a"/><circle cx="415" cy="5" r="3" fill="#e86a0a"/>
        </svg>

        <div className="ecosystem-core mx-auto flex max-w-[370px] items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(110deg,#171819_0%,#292522_58%,#c45c0b_100%)] px-5 py-4 text-left text-white shadow-[0_16px_34px_rgba(91,52,18,.25)] ring-1 ring-white/20">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-orange-300"><Layers3 size={20}/></span>
          <span><span className="block text-sm font-semibold">One connected platform</span><span className="mt-0.5 block text-[10px] text-white/65">Designed around your business</span></span>
          <span className="ml-auto hidden h-2 w-2 shrink-0 rounded-full bg-orange-300 shadow-[0_0_12px_rgba(253,186,116,.9)] sm:block"/>
        </div>

        <svg viewBox="0 0 500 76" className="mx-auto h-12 w-full max-w-[440px] sm:h-14" fill="none" aria-hidden="true">
          <path className="ecosystem-flow ecosystem-flow-reverse" d="M250 0v24M62 24h376M62 24v38m125-38v38m126-38v38m125-38v38" stroke="#d8b38c" strokeWidth="1.5" strokeDasharray="4 6"/>
          <circle cx="62" cy="24" r="3" fill="#e86a0a"/><circle cx="187" cy="24" r="3" fill="#e86a0a"/><circle cx="313" cy="24" r="3" fill="#e86a0a"/><circle cx="438" cy="24" r="3" fill="#e86a0a"/>
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {platforms.map(({ label, icon: Icon }, index) => (
            <div key={label} className="ecosystem-node group flex flex-col items-center gap-2 rounded-xl border border-white/90 bg-white/90 px-2 py-3 text-center shadow-[0_5px_18px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_24px_rgba(194,92,11,.12)]" style={{ animationDelay: `${index * 120}ms` }}>
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-50 text-orange-700 transition-colors group-hover:bg-orange-100"><Icon size={17}/></span>
              <span className="text-[10px] font-semibold text-slate-700 sm:text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechnologyEcosystem() {
  return (
    <section id="technology-ecosystem" className="site-section-spacing site-surface-muted overflow-hidden">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="section-eyebrow">A CONNECTED APPROACH</p>
          <h2 className="section-heading mt-3">
            Technology works better when <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">everything works together.</span>
          </h2>
          <p className="section-description mt-4">
            A new product, an AI workflow or a move to the cloud should strengthen the whole business. We connect the systems, data and people behind each solution so progress carries through.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {["Start with the outcomes your teams need", "Connect new capabilities to existing systems", "Build a foundation you can keep evolving"].map((item, index) => <li key={item} className="flex items-start gap-3"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-700">0{index + 1}</span><span className="pt-0.5">{item}</span></li>)}
          </ul>
          <a href="#case-studies" className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171819] px-5 text-sm font-semibold text-white transition hover:bg-orange-600">See how we connect the dots <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></a>
        </div>
        <EcosystemGraphic />
      </div>
    </section>
  );
}
