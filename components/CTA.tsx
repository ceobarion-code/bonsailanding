"use client";

import { Mail, MessageCircle, Globe } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and business email.");
      return;
    }

    const subject = encodeURIComponent("Bons AI demo request");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}`);
    window.location.href = `mailto:hello@bons-ai.example?subject=${subject}&body=${body}`;
    setError("");
  };

  return (
    <div className="card-dark relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
      <div className="absolute -right-14 -top-16 h-56 w-56 rounded-full bg-bons-lime/10 blur-3xl" />
      <div className="absolute left-1/3 top-0 h-full w-44 bg-white/10 blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bons-lime">Get Started</p>
          <h2 className="section-title mt-4 max-w-lg text-slate-100">
            Prevent burnout before it becomes a <span className="lime-pill-sm">problem</span>.
          </h2>
          <p className="mt-4 max-w-md text-slate-300">
            Book a product walkthrough and discuss pilot conditions tailored to your workforce operations.
          </p>

          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-bons-lime" /> hello@bons-ai.example
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-bons-lime" /> Telegram / WhatsApp: +00 000 000 000
            </p>
            <p className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-bons-lime" /> www.bons-ai.example
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-white/25 bg-white/5 p-6">
          <label className="block text-sm text-slate-300">
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-bons-lime placeholder:text-slate-500 focus:ring-2"
              placeholder="Your full name"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Work email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-bons-lime placeholder:text-slate-500 focus:ring-2"
              placeholder="name@company.com"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Company
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-bons-lime placeholder:text-slate-500 focus:ring-2"
              placeholder="Company name"
            />
          </label>

          {error && <p className="text-sm text-rose-300">{error}</p>}

          <button type="submit" className="btn-primary w-full">
            Request a demo
          </button>
        </form>
      </div>
    </div>
  );
}
