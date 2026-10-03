"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, BrainCircuit, ChevronDown, Cloud, Code2, HeartPulse, Landmark, Menu, ShoppingBag, UsersRound, X } from "lucide-react";
import ficodeLogo from "../../public/Images/Common/Logo-Ficode.png";

const menus = [
  {
    label: "Company",
    href: "/about",
    description: "Meet the people and principles behind Ficode.",
    icon: UsersRound,
    links: [
      { label: "Who we are", detail: "Our story and people", href: "/about#story" },
      { label: "How we work", detail: "A clear path from idea to impact", href: "/about#approach" },
      { label: "Our values", detail: "What guides every partnership", href: "/about#values" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    description: "The right expertise to move your business forward.",
    icon: Code2,
    links: [
      { label: "Software development", detail: "Digital products made for you", href: "/services#software", icon: Code2 },
      { label: "AI & data", detail: "Put insight to work", href: "/services#ai", icon: BrainCircuit },
      { label: "Cloud & AWS", detail: "Secure, scalable foundations", href: "/services#cloud", icon: Cloud },
    ],
  },
  {
    label: "Technology",
    href: "/services#cloud",
    description: "Modern platforms and tools, chosen for what they make possible.",
    icon: Cloud,
    links: [
      { label: "AI & data", detail: "Intelligence for better decisions", href: "/services#ai", icon: BrainCircuit },
      { label: "Cloud & AWS", detail: "A secure foundation to scale", href: "/services#cloud", icon: Cloud },
      { label: "Software platforms", detail: "The systems behind your next step", href: "/services#software", icon: Code2 },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Technology shaped around the world you work in.",
    icon: Landmark,
    links: [
      { label: "Healthcare", detail: "Better connected care", href: "/industries#healthcare", icon: HeartPulse },
      { label: "Financial services", detail: "Experiences built on trust", href: "/industries#finance", icon: Landmark },
      { label: "Retail & commerce", detail: "Connected customer journeys", href: "/industries#retail", icon: ShoppingBag },
    ],
  },
];

const topLink = "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/[0.08] hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400";

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
      <div id={`menu-${menu.label.toLowerCase().replaceAll(" ", "-")}`} aria-hidden={!isOpen} className={`absolute left-1/2 top-full z-50 w-[min(52rem,calc(100vw-3rem))] -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${isOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
        <div className="overflow-hidden rounded-b-[1.65rem] rounded-t-2xl border border-slate-200 bg-[#f3f3f2] p-4 shadow-[0_30px_90px_rgba(1,8,23,.25)] sm:p-5">
          <div className="grid gap-3 sm:grid-cols-[.82fr_1.18fr]">
            <div className="relative isolate flex min-h-52 flex-col justify-between overflow-hidden rounded-[1.25rem] bg-white p-5">
              <span className="pointer-events-none absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full border border-sky-200/50 bg-sky-100/50" />
              <div><span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-700"><MenuIcon size={21}/></span><p className="mt-5 text-[10px] font-bold uppercase tracking-[.22em] text-sky-700">Explore {menu.label}</p><p className="mt-2 max-w-56 text-sm leading-6 text-slate-600">{menu.description}</p></div>
              <a href={menu.href} tabIndex={isOpen ? 0 : -1} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-sky-700">Discover more <ArrowRight size={15}/></a>
            </div>
            <div className="grid content-center gap-1.5 p-1">
              {menu.links.map((link) => {
                const LinkIcon = "icon" in link ? link.icon : ArrowUpRight;
                return <a key={link.href} href={link.href} tabIndex={isOpen ? 0 : -1} className="group flex items-center gap-3 rounded-xl border-b border-slate-300/70 px-3 py-3.5 transition duration-200 last:border-0 hover:bg-white focus-visible:bg-white focus-visible:outline-none">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-sky-700 shadow-sm transition duration-200 group-hover:scale-105 group-hover:bg-sky-700 group-hover:text-white"><LinkIcon size={18}/></span>
                  <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-slate-900">{link.label}</span><span className="mt-1 block text-xs text-slate-600">{link.detail}</span></span>
                  <ArrowUpRight size={15} className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-700"/>
                </a>;
              })}
            </div>
          </div>
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
                {menu.links.map((link) => <a key={link.href} href={link.href} tabIndex={mobileOpen && mobileSubmenu === menu.label ? 0 : -1} className="block rounded-lg px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/[.06] hover:text-white">{link.label}</a>)}
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
