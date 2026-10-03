import Image from "next/image";
import { Menu, MoveRight, X } from "lucide-react";
import ficodeLogo from "../../public/Images/Common/Logo-Ficode.png";

const navigation = [
  { label: "Company", href: "/#about-ficode" },
  { label: "Services", href: "/#services" },
  { label: "Technology", href: "/#technology-ecosystem" },
  { label: "Industries", href: "/#industries" },
  { label: "Our work", href: "/#case-studies" },
];

const linkClass = "rounded-full px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";
const contactClass = "inline-flex items-center justify-center gap-2 rounded-full border border-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 border-b border-white/10 bg-[#171819]/95 text-white shadow-[0_2px_16px_rgba(0,0,0,.16)] backdrop-blur-xl">
      <div className="site-container flex h-[72px] items-center justify-between gap-4">
        <a href="/#top" aria-label="Ficode home" className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500">
          <Image src={ficodeLogo} alt="Ficode" width={140} height={36} priority className="h-auto w-[112px] brightness-0 invert sm:w-[132px]" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map(({ label, href }) => <li key={label}><a href={href} className={linkClass}>{label}</a></li>)}
        </ul>

        <a href="/contact" className={`hidden shrink-0 sm:inline-flex ${contactClass}`}>Contact us <MoveRight size={16}/></a>

        <details className="group relative lg:hidden">
          <summary aria-label="Toggle navigation menu" className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white shadow-sm marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 [&::-webkit-details-marker]:hidden">
            <span>Menu</span><Menu size={17} className="group-open:hidden"/><X size={17} className="hidden group-open:block"/>
          </summary>
          <div className="absolute right-0 top-[calc(100%+12px)] w-[min(20rem,calc(100vw-3rem))] rounded-2xl border border-white/10 bg-[#202123] p-3 shadow-xl shadow-black/30">
            <ul className="space-y-1">
              {navigation.map(({ label, href }) => <li key={label}><a href={href} className={`${linkClass} block`}>{label}</a></li>)}
            </ul>
            <a href="/contact" className={`${contactClass} mt-2 w-full`}>Contact us <MoveRight size={16}/></a>
          </div>
        </details>
      </div>
    </nav>
  );
}
