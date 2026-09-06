import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#top" },
  { label: "Produtos", href: "#specs" },
  { label: "Processo", href: "#processo" },
  { label: "Diferenciais", href: "#diferenciais" },
];

const WHATSAPP_URL = "https://wa.me/5547999327695";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-beige border-b border-black/5">
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-heading font-semibold text-[17px] text-[#1A1A1A] tracking-tight leading-none">
          PELÚCIAS PERSONALIZADAS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/70 hover:text-wine transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-plush items-center font-body text-[11px] uppercase tracking-[0.18em] bg-wine text-beige px-6 py-2.5 rounded-full hover:bg-wine-dark"
        >
          Solicitar orçamento
        </a>

        <button className="md:hidden text-[#1A1A1A]" onClick={() => setOpen(true)} aria-label="Abrir menu">
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-beige">
          <div className="flex items-center justify-between h-16 px-6">
            <span className="font-heading font-semibold text-[17px] text-[#1A1A1A] tracking-tight">
              PELÚCIAS PERSONALIZADAS
            </span>
            <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="text-[#1A1A1A]">
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col gap-6 px-6 pt-10">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading text-3xl font-semibold text-[#1A1A1A] border-b border-black/10 pb-4 flex items-baseline gap-4"
              >
                <span className="font-body text-[11px] uppercase tracking-[0.18em] text-wine">0{i + 1}</span>
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 text-center font-body text-xs uppercase tracking-[0.18em] bg-wine text-beige py-4 rounded-full"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}