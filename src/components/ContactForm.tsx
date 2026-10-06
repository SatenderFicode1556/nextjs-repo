"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--brand-secondary)] focus:ring-4 focus:ring-[color-mix(in_srgb,var(--brand-secondary)_14%,transparent)]";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitForm} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label>Leave this empty: <input name="bot-field" /></label></p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-800">Your name <span className="text-rose-500">*</span><input className={inputClass} name="name" autoComplete="name" required placeholder="Jane Smith" /></label>
        <label className="block text-sm font-semibold text-slate-800">Work email <span className="text-rose-500">*</span><input className={inputClass} name="email" type="email" autoComplete="email" required placeholder="jane@company.com" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-800">Company<input className={inputClass} name="company" autoComplete="organization" placeholder="Your organisation" /></label>
        <label className="block text-sm font-semibold text-slate-800">What can we help with?<select className={inputClass} name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>Software development</option><option>AI and data</option><option>Cloud and AWS</option><option>Technology consulting</option><option>Something else</option></select></label>
      </div>
      <label className="block text-sm font-semibold text-slate-800">Tell us a little about your project <span className="text-rose-500">*</span><textarea className={`${inputClass} min-h-32 resize-y`} name="message" required placeholder="What are you looking to achieve?" /></label>
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-7 text-sm font-bold text-[var(--brand-on-accent)] shadow-lg shadow-sky-700/15 transition hover:-translate-y-0.5 hover:bg-[var(--brand-accent-600)] disabled:cursor-wait disabled:opacity-70">
          {status === "sending" ? <>Sending <LoaderCircle size={17} className="animate-spin" /></> : <>Send your message <ArrowRight size={17} /></>}
        </button>
        <p className="text-xs leading-5 text-slate-500">We usually respond within one working day.</p>
      </div>
      {status === "success" && <p role="status" className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"><CheckCircle2 size={18}/> Thanks, your message has been sent. We&apos;ll be in touch soon.</p>}
      {status === "error" && <p role="alert" className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">We couldn&apos;t send your message. Please try again or email sales@ficode.com.</p>}
    </form>
  );
}
