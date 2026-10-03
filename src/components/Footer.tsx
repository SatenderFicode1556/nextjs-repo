import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import ficodeLogo from "../../public/Images/Common/Logo-Ficode.png";
import awsPartnerBadge from "../../public/Images/Landing/Header/first-img-header.png";
import isoBadge from "../../public/Images/Landing/Header/second-img-header.png";
import chamberBadge from "../../public/Images/Landing/Header/forth-img-header.png";

const quickLinks = [
  { label: "Home", href: "/#top" },
  { label: "About us", href: "/#about-ficode" },
  { label: "Services", href: "/#services" },
  { label: "Our work", href: "/#case-studies" },
  { label: "Industries", href: "/#industries" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact us", href: "/contact" },
];

const serviceLinks = [
  { label: "Digital transformation", href: "/#services" },
  { label: "API integration", href: "/#services" },
  { label: "Cloud consulting", href: "/#aws-capabilities" },
  { label: "AI development", href: "/#ai-development" },
  { label: "Data solutions", href: "/#services" },
  { label: "Software development", href: "/#services" },
];

const badges = [
  { src: awsPartnerBadge, alt: "AWS Partner Select Tier Services" },
  { src: isoBadge, alt: "ISO certification" },
  { src: chamberBadge, alt: "Greater Birmingham Chambers of Commerce" },
];

function FooterLinks({ title, links }: { title: string; links: typeof quickLinks }) {
  return (
    <div>
      <h2 className="mb-4 border-l border-cyan-500 pl-3 text-sm font-semibold text-white">{title}</h2>
      <ul className="space-y-2.5">
        {links.map(({ label, href }) => (
          <li key={label}><a href={href} className="text-xs text-slate-400 transition hover:text-cyan-300">{label}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#171819] text-white">
      <div className="site-container py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_.75fr_.95fr_.65fr] lg:gap-8">
          <div>
            <a href="/#top" aria-label="Ficode home" className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400">
              <Image src={ficodeLogo} alt="Ficode" width={144} height={32} className="h-8 w-auto brightness-0 invert" />
            </a>
            <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400">Ficode Technologies Limited builds bespoke software, cloud and AI solutions for organisations in the UK and beyond.</p>
            <a href="mailto:sales@ficode.com" className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-slate-300 transition hover:text-cyan-300"><Mail size={14}/> sales@ficode.com</a>
            <p className="mt-5 text-[11px] font-semibold text-slate-200">Registered in England and Wales</p>
          </div>

          <FooterLinks title="Quick links" links={quickLinks}/>
          <FooterLinks title="Our services" links={serviceLinks}/>

          <div>
            <h2 className="mb-4 border-l border-cyan-500 pl-3 text-sm font-semibold text-white">Credentials</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              {badges.map(({ src, alt }) => (
                <div key={alt} className="flex h-[58px] items-center justify-center rounded-lg bg-white p-2">
                  <Image src={src} alt={alt} className="h-full w-auto max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Ficode Technologies Limited</p>
          <a href="/#top" className="inline-flex items-center gap-1 transition hover:text-orange-300">Back to top <ArrowUpRight size={12}/></a>
        </div>
      </div>
    </footer>
  );
}
