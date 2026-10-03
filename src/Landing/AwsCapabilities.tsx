"use client";

import { animated, useInView, useReducedMotion, useSpring, useTrail } from "@react-spring/web";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import awsPartnerBadge from "../../public/Images/Landing/Header/first-img-header.png";

const capabilities = [
  "AWS-powered smart-building platform with 5+ building functions",
  "Well-architected framework applied across cloud engagements",
  "Select Tier Services Partner and Authorized Commercial Reseller able to sell AWS services directly alongside delivery work",
];

export default function AwsCapabilities() {
  const reducedMotion = useReducedMotion();
  const [panelRef, isInView] = useInView({ once: true, rootMargin: "0px 0px -10% 0px" });
  const [capabilitySprings] = useTrail(
    capabilities.length,
    (index) => ({
      from: reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 },
      to: reducedMotion ? { opacity: 1, x: 0 } : { opacity: isInView ? 1 : 0, x: isInView ? 0 : -18 },
      delay: index * 100,
      immediate: reducedMotion || !isInView,
      config: { mass: 1, tension: 240, friction: 24 },
    }),
    [isInView, reducedMotion],
  );
  const badgeSpring = useSpring({
    from: reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: .9 },
    to: reducedMotion ? { opacity: 1, scale: 1 } : { opacity: isInView ? 1 : 0, scale: isInView ? 1 : .9 },
    immediate: reducedMotion || !isInView,
    delay: 160,
    config: { mass: 1, tension: 190, friction: 20 },
  });

  return (
    <section id="aws-capabilities" className="site-section-spacing bg-white">
      <div className="site-container">
        <div ref={panelRef} className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(115deg,#171819_0%,#24211e_62%,#67350f_100%)] px-6 py-9 text-white shadow-[0_28px_75px_rgba(46,28,13,.18)] sm:px-9 sm:py-11 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-[28rem] w-[28rem] rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-36 left-[20%] h-72 w-72 rounded-full bg-amber-500/10 blur-[90px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(90deg,transparent,black)]" />
          <div className="relative z-10 grid items-center gap-9 md:grid-cols-[1fr_230px] lg:grid-cols-[1fr_280px] lg:gap-12">
            <div className="relative z-10">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200/20 bg-white/[.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-orange-200"><span className="h-1.5 w-1.5 rounded-full bg-orange-400"/> AWS CLOUD SERVICES</p>
              <h2 className="section-heading max-w-3xl text-white">
                Building on <span className="bg-gradient-to-r from-orange-300 to-amber-100 bg-clip-text text-transparent">AWS,</span> with AWS behind us.
              </h2>
              <p className="section-description mt-3 max-w-3xl text-white/70">
                Ficode designs and runs cloud platforms using AWS native services, well-architected best practice, and direct access to AWS tooling, training, and support.
              </p>
              <ul className="mt-5 max-w-3xl divide-y divide-white/10">
                {capabilities.map((capability, index) => (
                  <animated.li key={capability} style={capabilitySprings[index]} className="flex gap-3 py-3 text-xs leading-5 text-white/75 first:pt-0 last:pb-0 sm:text-[13px]">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange-400/15 text-orange-300"><Check size={12} strokeWidth={2.5}/></span>
                    <span>{capability}</span>
                  </animated.li>
                ))}
              </ul>
              <a href="mailto:sales@ficode.com?subject=AWS%20capabilities" className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-500 px-5 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(234,88,12,.25)] transition hover:-translate-y-0.5 hover:bg-orange-400">
                Explore our AWS capabilities <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
              </a>
            </div>

            <animated.div style={badgeSpring} className="relative mx-auto grid h-52 w-52 place-items-center sm:h-56 sm:w-56">
              <div className="absolute inset-1 rounded-full border border-orange-100/20 bg-white/[.04] shadow-[0_0_70px_rgba(255,154,58,.16)] backdrop-blur-sm" />
              <div className="absolute inset-5 rounded-full border border-dashed border-orange-200/25" />
              <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[#fffaf3] shadow-[0_20px_45px_rgba(0,0,0,.22)] sm:h-44 sm:w-44">
                <Image src={awsPartnerBadge} alt="AWS Partner Select Tier Services" className="h-[118px] w-[118px] object-contain sm:h-[132px] sm:w-[132px]" />
              </div>
              <span className="absolute bottom-0 rounded-full border border-white/10 bg-[#171819]/90 px-3 py-1.5 text-[9px] font-semibold tracking-[.14em] text-orange-100">SELECT TIER PARTNER</span>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}
