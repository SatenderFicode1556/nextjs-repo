const platforms = [
  { name: "Azure", category: "Cloud" },
  { name: "ServiceNow", category: "Workflow" },
  { name: "Adobe", category: "Digital experience" },
  { name: "Magento", category: "Commerce" },
  { name: "Databricks", category: "Data & AI" },
  { name: "Snowflake", category: "Data cloud" },
  { name: "Stripe", category: "Payments" },
  { name: "Cloudinary", category: "Media platforms" },
  { name: "OpenAI", category: "Artificial intelligence" },
  { name: "MuleSoft", category: "Integration" },
  { name: "OneStream", category: "Finance" },
  { name: "AWS", category: "Cloud" },
];

function PlatformCard({ name, category }: (typeof platforms)[number]) {
  return (
    <div className="flex h-32 w-48 shrink-0 flex-col justify-between rounded-2xl border border-white/[.12] bg-[#171819] p-4 text-white shadow-[0_12px_34px_rgba(0,0,0,.2)] transition duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:bg-[#1d1f21] sm:h-36 sm:w-56 sm:p-5">
      <div className="flex h-14 items-center justify-center text-center">
        <span className={`text-balance font-semibold tracking-[-.04em] text-white ${name === "Adobe" ? "text-2xl" : name === "ServiceNow" || name === "OneStream" ? "text-lg" : "text-xl"}`}>{name}</span>
      </div>
      <span className="border-t border-white/[.08] pt-3 text-center text-[10px] font-medium text-white/45 sm:text-[11px]">{category}</span>
    </div>
  );
}

function PartnerTrack({ direction, label }: { direction: "left" | "right"; label: string }) {
  return (
    <div className="alliance-marquee overflow-hidden" role="region" aria-label={label}>
      <div className={`alliance-marquee-track flex w-max items-center ${direction === "right" ? "alliance-marquee-track-reverse" : ""}`}>
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4">
            {platforms.slice(0, 6).map((platform) => <PlatformCard key={`${copy}-${platform.name}`} {...platform} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

function SecondPartnerTrack() {
  return (
    <div className="alliance-marquee overflow-hidden" role="region" aria-label="More technology platforms, scrolling right">
      <div className="alliance-marquee-track alliance-marquee-track-reverse flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4">
            {platforms.slice(6).map((platform) => <PlatformCard key={`${copy}-${platform.name}`} {...platform} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StrategicAlliances() {
  return (
    <section aria-labelledby="alliances-title" className="relative isolate overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,.08),transparent_48%)]" />
      <div className="site-container relative z-10">
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-orange-300">Connected technology ecosystem</p>
          <h2 id="alliances-title" className="mt-3 text-balance text-3xl font-medium tracking-[-.045em] sm:text-4xl lg:text-5xl">The platforms behind what&apos;s next.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">We bring the right cloud, data, AI and digital platforms together around the needs of your business.</p>
        </div>
      </div>
      <div className="relative z-10 space-y-3 sm:space-y-4">
        <PartnerTrack direction="left" label="Technology platforms, scrolling left" />
        <SecondPartnerTrack />
      </div>
      <p className="relative z-10 mt-7 text-center text-[10px] text-white/35 sm:mt-9 sm:text-xs">A flexible ecosystem, selected around your goals.</p>
    </section>
  );
}
