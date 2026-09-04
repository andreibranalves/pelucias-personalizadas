import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Especificações", href: "#specs" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "Diferenciais", href: "#diferenciais" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FDFDFD]/85 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-heading font-bold tracking-tight text-[15px] text-[#1A1A1A] leading-none">
          PELÚCIAS<span className="text-[#2D5BFF]">.</span>PERSONALIZADAS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A]/70 hover:text-[#2D5BFF] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#orcamento"
          className="hidden md:inline-flex btn-plush items-center font-mono text-[11px] uppercase tracking-[0.14em] bg-[#1A1A1A] text-[#FDFDFD] px-5 py-2.5 rounded-sm hover:bg-[#2D5BFF]"
        >
          Iniciar Pedido
        </a>

        <button className="md:hidden text-[#1A1A1A]" onClick={() => setOpen(true)} aria-label="Abrir menu">
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#FDFDFD] blueprint-grid">
          <div className="flex items-center justify-between h-16 px-6">
            <span className="font-heading font-bold text-[15px] text-[#1A1A1A]">
              PELÚCIAS<span className="text-[#2D5BFF]">.</span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Fechar menu">
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
                <span className="font-mono text-[11px] text-[#2D5BFF]">0{i + 1}</span>
                {l.label}
              </a>
            ))}
            <a
              href="#orcamento"
              onClick={() => setOpen(false)}
              className="mt-6 text-center font-mono text-xs uppercase tracking-[0.14em] bg-[#2D5BFF] text-white py-4 rounded-sm"
            >
              Iniciar Pedido
            </a>
          </div>
        </div>
      )}
    </header>
  );
}