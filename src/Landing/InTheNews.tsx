import Image from "next/image";
import { ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";

const newsItems = [
  {
    category: "DIGITAL HEALTHCARE",
    date: "14 March 2026",
    title: "Ficode supports digital healthcare for better patient care",
    summary: "How thoughtful digital platforms can help healthcare teams improve access, streamline services and support patients.",
    href: "https://www.ficode.com/news/ficode-supports-digital-healthcare-for-better-patient-care",
    image: "/video/common/img2.jpg",
    imageAlt: "A person outdoors in soft natural light",
    featured: true,
  },
  {
    category: "AI & INNOVATION",
    date: "23 February 2026",
    title: "Ficode meets Madrid Innovation Lab to discuss AI and technology",
    summary: "A conversation about the challenges and opportunities shaping digital growth across Madrid.",
    href: "https://www.ficode.com/news/ficode-meets-the-madrid-innovation-lab-team-to-discuss-ai-and-tech-spain",
    image: "/video/common/img7.jpg",
    imageAlt: "A bright glass-and-iron interior with greenery",
    featured: false,
  },
  {
    category: "INTERNATIONAL NEWS",
    date: "3 February 2026",
    title: "Ficode CEO invited to a British Embassy discussion on advancing AI",
    summary: "The invitation brought UK business perspectives into a discussion about practical AI innovation.",
    href: "https://www.ficode.com/news/ficode-ceo-invited-to-the-british-embassy-in-madrid-spain-for-an-exclusive-breakfast-on-advancing-ai",
    image: "/video/common/img5.jpg",
    imageAlt: "A lively city street at night",
    featured: false,
  },
];

function NewsMeta({ category, date }: { category: string; date: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[.12em] text-slate-500">
      <span className="text-orange-700">{category}</span>
      <span className="inline-flex items-center gap-1.5 normal-case tracking-normal text-slate-400"><CalendarDays size={12} />{date}</span>
    </div>
  );
}

export default function InTheNews() {
  const [featured, ...stories] = newsItems;

  return (
    <section aria-labelledby="in-the-news-title" className="site-section-spacing relative isolate overflow-hidden bg-[#f4f2ef]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[30rem] w-[30rem] rounded-full bg-orange-200/25 blur-[100px]" />
      <div className="site-container relative z-10">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-orange-700"><Newspaper size={14} /> FICODE IN THE NEWS</p>
            <h2 id="in-the-news-title" className="section-heading mt-3 text-3xl sm:text-4xl">Ideas and milestones <span className="text-orange-700">in the wider world.</span></h2>
            <p className="section-description mt-3 max-w-2xl">News, conversations and perspectives from our work in technology and digital transformation.</p>
          </div>
          <a href="https://www.ficode.com/news" target="_blank" rel="noreferrer" className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-slate-300 bg-white/70 px-4 text-xs font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white md:self-auto">View all news <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_.95fr] lg:gap-5">
          <article className="group relative isolate min-h-[380px] overflow-hidden rounded-[1.75rem] bg-slate-900 text-white shadow-[0_20px_60px_rgba(15,23,42,.12)] sm:min-h-[460px]">
            <Image src={featured.image} alt={featured.imageAlt} fill sizes="(max-width: 1023px) 100vw, 52vw" className="-z-20 object-cover transition duration-700 group-hover:scale-[1.035]" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <NewsMeta category={featured.category} date={featured.date} />
              <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-.035em] sm:text-3xl">{featured.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">{featured.summary}</p>
              <a href={featured.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-orange-200">Read the story <ArrowUpRight size={15} /></a>
            </div>
          </article>

          <div className="grid gap-4">
            {stories.map((story) => (
              <article key={story.href} className="group grid min-h-[210px] overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_12px_34px_rgba(15,23,42,.045)] transition duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_20px_48px_rgba(15,23,42,.09)] sm:min-h-[220px] sm:grid-cols-[.8fr_1.2fr]">
                <div className="relative min-h-[150px] overflow-hidden bg-slate-200 sm:min-h-full">
                  <Image src={story.image} alt={story.imageAlt} fill sizes="(max-width: 639px) 100vw, 30vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-slate-950/10" />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6">
                  <NewsMeta category={story.category} date={story.date} />
                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-[-.025em] text-slate-900">{story.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{story.summary}</p>
                  <a href={story.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-slate-800 transition group-hover:text-orange-700">Read more <ArrowUpRight size={13} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
