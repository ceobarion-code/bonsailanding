"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#impact", label: "Impact" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#team", label: "Team" },
  { href: "#media", label: "Media" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-[#1c3154cc] backdrop-blur-xl">
      <div className="container-base flex h-20 items-center justify-between gap-8">
        <a href="#top" className="text-lg font-semibold tracking-tight text-slate-100">
          Bons <span className="text-bons-lime">AI</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
            Request a demo
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 text-slate-100 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/25 bg-[#223c64] lg:hidden">
          <nav className="container-base flex flex-col gap-4 py-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 w-full" onClick={() => setOpen(false)}>
              Request a demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
