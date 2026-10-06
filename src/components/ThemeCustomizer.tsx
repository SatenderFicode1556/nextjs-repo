"use client";

import { Check, Palette, RotateCcw, X } from "lucide-react";
import { useEffect, useState } from "react";

const themes = [
  { name: "Ficode", accent: "#f47a00", secondary: "#16a6a3" },
  { name: "Ocean", accent: "#2563eb", secondary: "#06b6d4" },
  { name: "Orchid", accent: "#9333ea", secondary: "#ec4899" },
  { name: "Forest", accent: "#16834a", secondary: "#a3a528" },
  { name: "Berry", accent: "#db2777", secondary: "#7c3aed" },
];

type Colors = { accent: string; secondary: string };
const defaultColors = themes[0];
const isColors = (value: unknown): value is Colors => {
  if (!value || typeof value !== "object") return false;
  const colors = value as Partial<Colors>;
  return typeof colors.accent === "string" && /^#[\da-f]{6}$/i.test(colors.accent)
    && typeof colors.secondary === "string" && /^#[\da-f]{6}$/i.test(colors.secondary);
};

function accessibleForeground(hex: string) {
  return colorLuminance(hex) > 0.179 ? "#111827" : "#ffffff";
}

function colorLuminance(hex: string) {
  const channels = hex.slice(1).match(/[\da-f]{2}/gi)?.map((part) => parseInt(part, 16) / 255) ?? [0, 0, 0];
  const [red, green, blue] = channels.map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function readableInk(hex: string) {
  const channels = hex.slice(1).match(/[\da-f]{2}/gi)?.map((part) => parseInt(part, 16)) ?? [0, 0, 0];
  const dark = [17, 24, 39];
  for (let weight = 1; weight >= 0.1; weight -= 0.025) {
    const shade = channels.map((channel, index) => Math.round(channel * weight + dark[index] * (1 - weight)));
    const candidate = `#${shade.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
    if (colorLuminance(candidate) <= 0.179) return candidate;
  }
  return "#111827";
}

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState<Colors>(defaultColors);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ficode-theme");
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (isColors(parsed)) setColors(parsed);
      }
    } catch { /* Keep the default palette when storage is unavailable. */ }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--brand-accent", colors.accent);
    document.documentElement.style.setProperty("--brand-secondary", colors.secondary);
    document.documentElement.style.setProperty("--brand-on-accent", accessibleForeground(colors.accent));
    document.documentElement.style.setProperty("--brand-on-secondary", accessibleForeground(colors.secondary));
    document.documentElement.style.setProperty("--brand-accent-ink", readableInk(colors.accent));
    document.documentElement.style.setProperty("--brand-secondary-ink", readableInk(colors.secondary));
    try { localStorage.setItem("ficode-theme", JSON.stringify(colors)); } catch { /* Theme still works for this visit. */ }
  }, [colors]);

  return (
    <div className="fixed bottom-4 right-4 z-[100] sm:bottom-7 sm:right-7">
      {open && <section aria-label="Website colour theme" className="mb-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-[0_24px_70px_rgba(15,23,42,.22)] animate-theme-in">
        <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">Make it yours</p><h2 className="mt-1 text-lg font-semibold tracking-tight">Choose your site palette</h2><p className="mt-1.5 max-w-[15rem] text-xs leading-5 text-slate-500">Updates buttons, links and accent colours throughout the site.</p></div><button type="button" onClick={() => setOpen(false)} aria-label="Close colour themes" className="rounded-full p-2 text-slate-500 hover:bg-slate-100"><X size={17}/></button></div>
        <div className="mt-4 grid grid-cols-5 gap-2" aria-label="Colour presets">{themes.map((theme) => <button key={theme.name} type="button" onClick={() => setColors(theme)} aria-label={`${theme.name} colour theme`} aria-pressed={colors.accent === theme.accent && colors.secondary === theme.secondary} className="group flex flex-col items-center gap-1.5 rounded-xl p-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"><span className="relative flex h-9 w-9 items-center justify-center rounded-full ring-offset-2 transition group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${theme.accent} 0 52%, ${theme.secondary} 52%)`, outline: colors.accent === theme.accent && colors.secondary === theme.secondary ? `2px solid ${theme.accent}` : "none" }}>{colors.accent === theme.accent && colors.secondary === theme.secondary && <Check size={15} className="text-white drop-shadow"/>}</span><span className="text-[10px] font-medium text-slate-600">{theme.name}</span></button>)}</div>
        <div className="mt-4 space-y-3 rounded-2xl bg-slate-50 p-3"><p className="text-xs font-semibold text-slate-700">Custom palette</p><label className="flex items-center justify-between gap-2 text-xs text-slate-600">Main colour <span className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 font-mono text-[11px] uppercase">{colors.accent}<input aria-label="Choose main colour" type="color" value={colors.accent} onChange={(e) => setColors((current) => ({ ...current, accent: e.target.value }))} className="h-5 w-6 cursor-pointer border-0 bg-transparent p-0"/></span></label><label className="flex items-center justify-between gap-2 text-xs text-slate-600">Support colour <span className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 font-mono text-[11px] uppercase">{colors.secondary}<input aria-label="Choose support colour" type="color" value={colors.secondary} onChange={(e) => setColors((current) => ({ ...current, secondary: e.target.value }))} className="h-5 w-6 cursor-pointer border-0 bg-transparent p-0"/></span></label></div>
        <button type="button" onClick={() => setColors(defaultColors)} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900"><RotateCcw size={13}/> Restore Ficode colours</button>
      </section>}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close colour customizer" : "Change website colours"} title="Change website colours" className="group flex items-center gap-2 rounded-full border-2 border-[var(--brand-accent)] bg-[#171819] px-3.5 py-3 text-sm font-semibold text-white shadow-[0_10px_32px_rgba(15,23,42,.32)] transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><span className="grid h-6 w-6 place-items-center rounded-full" style={{ background: `linear-gradient(135deg, ${colors.accent} 0 52%, ${colors.secondary} 52%)` }}><Palette size={13} className="text-white drop-shadow"/></span><span>Change colours</span></button>
    </div>
  );
}
