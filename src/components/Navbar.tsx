"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, BrainCircuit, ChevronDown, Cloud, Code2, Database, HeartPulse, Landmark, Menu, ShoppingBag, UsersRound, X } from "lucide-react";
import ficodeLogo from "../../public/Images/Common/Logo-Ficode.png";

type MenuLink = { label: string; detail: string; href: string; icon?: typeof Code2 };
type MenuColumn = { title: string; links: MenuLink[] };
type SiteMenu = {
  label: string;
  href: string;
  description: string;
  icon: typeof Code2;
  links: MenuLink[];
  columns?: MenuColumn[];
};

const makeLinks = (entries: [string, string, string][], icon?: typeof Code2): MenuLink[] =>
  entries.map(([label, slug, detail]) => ({ label, detail, href: `/${slug.startsWith("tech:") ? `technologies/${slug.slice(5)}` : slug.startsWith("industry:") ? `industries/${slug.slice(9)}` : `services/${slug}`}`, icon }));

const serviceColumns: MenuColumn[] = [
  {
    title: "Digital Innovation Solutions",
    links: makeLinks([
      ["Digital Transformation", "digital-transformation", "Modernise services and operations"],
      ["API Integration", "api-integration", "Connect the systems you rely on"],
      ["Third Party API Development", "third-party-api-development", "Build and extend API connections"],
      ["Data Management", "data-management", "Make business data useful and trusted"],
      ["Software Consulting", "software-consulting", "Make confident technology choices"],
      ["AI & data", "ai-data", "Put insight to work"],
    ], BrainCircuit),
  },
  {
    title: "Development Services",
    links: makeLinks([
      ["Web Development", "web-development", "Build fast, useful web products"],
      ["Mobile App Development", "mobile-app-development", "Create connected mobile experiences"],
      ["IoT Development", "iot-development", "Connect devices, data and teams"],
      ["Bespoke Software Development", "bespoke-software-development", "Software shaped to your business"],
      ["E-Commerce Development", "e-commerce-development", "Improve digital commerce journeys"],
      ["Front End Development", "front-end-development", "Build clear, accessible interfaces"],
      ["Quality Assurance", "quality-assurance", "Make quality part of delivery"],
      ["Software development", "software-development", "Digital products made for you"],
    ], Code2),
  },
  {
    title: "Cloud & AI",
    links: makeLinks([
      ["Cloud Computing", "cloud-computing", "Build resilient cloud foundations"],
      ["AI Development", "ai-development", "Apply AI to practical challenges"],
      ["AWS", "aws", "Design and evolve AWS platforms"],
      ["Azure", "azure", "Build on Microsoft Azure"],
      ["Cloud & AWS", "cloud-aws", "Secure, scalable foundations"],
    ], Cloud),
  },
];

const technologyColumns: MenuColumn[] = [
  { title: "Web & Front End", links: makeLinks([
    ["Angular", "tech:angular", "Build structured web applications"], ["React.js", "tech:react-js", "Create reusable interfaces"], ["Vue.js", "tech:vue-js", "Build adaptable front ends"], ["Next.js", "tech:next-js", "Deliver full-stack React experiences"], ["TypeScript", "tech:typescript", "Make JavaScript systems safer"],
  ], Code2) },
  { title: "Backend & Languages", links: makeLinks([
    ["Java", "tech:java", "Build resilient enterprise services"], ["Node.js", "tech:node-js", "Power scalable server applications"], ["Python", "tech:python", "Build data and application services"], ["Scala", "tech:scala", "Develop robust data systems"], [".NET", "tech:dotnet", "Build modern Microsoft platforms"], ["PHP / Laravel", "tech:php-laravel", "Develop maintainable web platforms"], ["Go (Golang)", "tech:go", "Build efficient cloud services"],
  ], Code2) },
  { title: "Apps, Data & Frameworks", links: makeLinks([
    ["Flutter", "tech:flutter", "Deliver cross-platform mobile apps"], ["Kotlin", "tech:kotlin", "Build modern Android applications"], ["Swift (iOS)", "tech:swift-ios", "Create native Apple experiences"], ["React Native", "tech:react-native", "Share product logic across mobile"], ["Django", "tech:django", "Build secure Python applications"], ["Spring Boot", "tech:spring-boot", "Develop production-ready Java services"], ["MySQL / MongoDB", "tech:mysql-mongodb", "Choose data stores for the use case"],
  ], Database) },
  { title: "Platforms & Delivery", links: makeLinks([
    ["DevOps & CI/CD", "tech:devops-ci-cd", "Automate reliable software delivery"], ["AI & data", "tech:ai-data", "Connect intelligence and data"], ["Cloud & AWS", "tech:cloud-aws", "Build secure cloud foundations"], ["Software platforms", "tech:software-platforms", "Select tools around your needs"],
  ], Cloud) },
];

const industryColumns: MenuColumn[] = [
  { title: "People & Communities", links: makeLinks([
    ["Healthcare", "industry:healthcare", "Connect care and patient services"], ["EdTech", "industry:edtech", "Support accessible learning"], ["Government & Public Sector", "industry:government-public-sector", "Make public services easier to use"], ["Travel & Hospitality", "industry:travel-hospitality", "Improve guest journeys and operations"], ["Media & Entertainment", "industry:media-entertainment", "Connect content and audiences"],
  ], HeartPulse) },
  { title: "Commerce & Finance", links: makeLinks([
    ["FinTech", "industry:fintech", "Build trusted financial experiences"], ["Financial services", "industry:financial-services", "Experiences built on trust"], ["Retail & E-commerce", "industry:retail-ecommerce", "Connect customer journeys"], ["Retail & commerce", "industry:retail-commerce", "Connect channels and fulfilment"], ["Real Estate", "industry:real-estate", "Improve property services and operations"],
  ], Landmark) },
  { title: "Operations & Infrastructure", links: makeLinks([
    ["Logistics & Supply Chain", "industry:logistics-supply-chain", "Connect planning, tracking and delivery"], ["Manufacturing", "industry:manufacturing", "Bring production data together"], ["Automotive", "industry:automotive", "Modernise connected mobility"], ["Energy & Renewables", "industry:energy-renewables", "Support a changing energy system"], ["IoT", "industry:iot", "Connect devices and operations"], ["Utility", "industry:utility", "Improve essential services"],
  ], Cloud) },
];

const menus: SiteMenu[] = [
  {
    label: "Company",
    href: "/about",
    description: "Meet the people and principles behind Ficode.",
    icon: UsersRound,
    links: [
      { label: "Who we are", detail: "Our story and people", href: "/about#story" },
      { label: "How we work", detail: "A clear path from idea to impact", href: "/about#approach" },
      { label: "Our values", detail: "What guides every partnership", href: "/about#values" },
      { label: "Leadership", detail: "Company information placeholder", href: "/about?section=leadership" },
      { label: "Our culture", detail: "Company information placeholder", href: "/about?section=culture" },
      { label: "Careers", detail: "Company information placeholder", href: "/about?section=careers" },
      { label: "Our partners", detail: "Company information placeholder", href: "/about?section=partners" },
      { label: "Our process", detail: "Company information placeholder", href: "/about?section=process" },
      { label: "Our mission", detail: "Company information placeholder", href: "/about?section=mission" },
      { label: "Our vision", detail: "Company information placeholder", href: "/about?section=vision" },
      { label: "News & insights", detail: "Company information placeholder", href: "/about?section=news" },
      { label: "Sustainability", detail: "Company information placeholder", href: "/about?section=sustainability" },
      { label: "Contact", detail: "Company information placeholder", href: "/about?section=contact" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    icon: Code2,
    description: "Strategic digital services that connect systems, unlock data intelligence, and drive measurable results for sustainable growth and long-term competitive advantage.",
    links: serviceColumns.flatMap((column) => column.links),
    columns: serviceColumns,
  },
  {
    label: "Technology",
    href: "/technologies",
    description: "Modern platforms and tools, chosen for what they make possible.",
    icon: Cloud,
    links: technologyColumns.flatMap((column) => column.links),
    columns: technologyColumns,
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Technology shaped for healthcare, finance, retail, logistics, manufacturing, travel, media, automotive, energy, government and more.",
    icon: Landmark,
    links: industryColumns.flatMap((column) => column.links),
    columns: industryColumns,
  },
];

const topLink = "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/[0.08] hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400";

function MenuEntry({ link, isOpen }: { link: MenuLink; isOpen: boolean }) {
  const LinkIcon = link.icon ?? ArrowUpRight;
  return (
    <a key={link.href} href={link.href} title={link.detail} tabIndex={isOpen ? 0 : -1} className="group flex min-h-9 items-center gap-2 rounded-lg px-2 py-1.5 transition duration-200 hover:bg-white focus-visible:bg-white focus-visible:outline-none">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-700 transition-colors duration-200 group-hover:bg-sky-700 group-hover:text-white"><LinkIcon size={14}/></span>
      <span className="min-w-0 flex-1 text-[13px] font-medium leading-5 tracking-[-0.01em] text-slate-900">{link.label}</span>
      <ArrowUpRight size={12} className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-700"/>
    </a>
  );
}

function DesktopMenu({ menu, isOpen, onOpen, onClose }: {
  menu: (typeof menus)[number]; isOpen: boolean; onOpen: () => void; onClose: () => void;
}) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(onClose, 140);
  };
  const MenuIcon = menu.icon;

  return (
    <div className="relative" onMouseEnter={() => { cancelClose(); onOpen(); }} onMouseLeave={scheduleClose} onFocusCapture={onOpen} onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) onClose();
    }} onKeyDown={(event) => { if (event.key === "Escape") { onClose(); (event.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus(); } }}>
      <button type="button" className={topLink} aria-expanded={isOpen} aria-controls={`menu-${menu.label.toLowerCase().replaceAll(" ", "-")}`} onClick={() => isOpen ? onClose() : onOpen()}>
        {menu.label}<ChevronDown size={15} className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-300" : ""}`} />
      </button>
      <div id={`menu-${menu.label.toLowerCase().replaceAll(" ", "-")}`} aria-hidden={!isOpen} className={`absolute left-1/2 top-full z-50 w-[min(72rem,calc(100vw-3rem))] -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${isOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
        <div className="max-h-[calc(100svh-6rem)] overflow-y-auto rounded-b-[1.35rem] rounded-t-2xl border border-slate-200 bg-[#f3f3f2] p-3 shadow-[0_30px_90px_rgba(1,8,23,.25)] sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-slate-200 px-1 pb-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-sky-700 shadow-sm"><MenuIcon size={16}/></span>
              <div className="flex min-w-0 items-baseline gap-x-2"><p className="shrink-0 text-xs font-bold text-slate-900">Explore {menu.label}</p><p className="hidden truncate text-[11px] text-slate-500 md:block">{menu.description}</p></div>
            </div>
            <a href={menu.href} tabIndex={isOpen ? 0 : -1} className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-sky-800 shadow-sm transition hover:bg-sky-700 hover:text-white">View all <ArrowRight size={13}/></a>
          </div>
          {menu.columns ? <div className={`grid content-start gap-x-2 gap-y-3 p-1 ${menu.columns.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
              {menu.columns.map((column) => <div key={column.title}>
                <h3 className="mb-1.5 border-b border-slate-300/70 px-2 pb-2 text-[10px] font-bold uppercase tracking-[.14em] text-sky-800">{column.title}</h3>
                {column.links.map((link) => <MenuEntry key={link.href} link={link} isOpen={isOpen} />)}
              </div>)}
            </div> : <div className="grid gap-1 p-1 sm:grid-cols-3">{menu.links.map((link) => <MenuEntry key={link.href} link={link} isOpen={isOpen} />)}</div>}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 text-white shadow-[0_2px_16px_rgba(0,0,0,.16)]">
      <nav aria-label="Main navigation" className="border-b border-white/10 bg-[#171819]/95 backdrop-blur-xl">
        <div className="site-container flex h-[72px] items-center justify-between gap-4">
          <a href="/" aria-label="Ficode home" className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"><Image src={ficodeLogo} alt="Ficode" width={160} height={40} priority className="h-auto w-[112px] brightness-0 invert sm:w-[132px]" /></a>
          <div className="hidden items-center gap-1 lg:flex">
            <a href="/" className={topLink}>Home</a>
            {menus.map((menu) => <DesktopMenu key={menu.label} menu={menu} isOpen={openMenu === menu.label} onOpen={() => setOpenMenu(menu.label)} onClose={() => setOpenMenu((current) => current === menu.label ? null : current)} />)}
            <a href="/#case-studies" className={topLink}>Our work</a>
          </div>
          <a href="/contact" className="hidden shrink-0 items-center gap-2 rounded-full border border-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 lg:inline-flex">Contact us <ArrowUpRight size={16}/></a>
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 lg:hidden" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((value) => !value)}>
            {mobileOpen ? "Close" : "Menu"}{mobileOpen ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
        <div id="mobile-navigation" className={`overflow-hidden border-t border-white/10 bg-[#171819] transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none lg:hidden ${mobileOpen ? "max-h-[calc(100svh-6rem)] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`} aria-hidden={!mobileOpen}>
          <div className="site-container max-h-[calc(100svh-6rem)] overflow-y-auto py-3">
            <a href="/" tabIndex={mobileOpen ? 0 : -1} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/[.07]">Home</a>
            {menus.map((menu) => <div key={menu.label} className="border-b border-white/[.07] py-1">
              <button type="button" tabIndex={mobileOpen ? 0 : -1} aria-expanded={mobileSubmenu === menu.label} onClick={() => setMobileSubmenu((current) => current === menu.label ? null : menu.label)} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/90 transition hover:bg-white/[.07]"><span>{menu.label}</span><ChevronDown size={16} className={`text-cyan-300 transition-transform duration-300 ${mobileSubmenu === menu.label ? "rotate-180" : ""}`}/></button>
              <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${mobileSubmenu === menu.label ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><div className="mb-2 ml-4 border-l border-cyan-200/25 pl-2">
                <a href={menu.href} tabIndex={mobileOpen && mobileSubmenu === menu.label ? 0 : -1} className="block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide text-cyan-200 hover:bg-white/[.06]">Explore {menu.label}</a>
                {menu.links.map((link) => <a key={link.href} href={link.href} tabIndex={mobileOpen && mobileSubmenu === menu.label ? 0 : -1} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium tracking-[-0.01em] text-white/80 transition hover:bg-white/[.06] hover:text-white">{link.label}</a>)}
              </div></div></div>
            </div>)}
            <a href="/#case-studies" tabIndex={mobileOpen ? 0 : -1} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/[.07]">Our work</a>
            <a href="/contact" tabIndex={mobileOpen ? 0 : -1} className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-500">Contact us <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </nav>
    </header>
  );
}
