import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#FDFDFD] border-t border-[#1A1A1A]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <div className="font-heading font-bold text-2xl text-[#1A1A1A] tracking-tight">
              PELÚCIAS<span className="text-[#2D5BFF]">.</span>PERSONALIZADAS
            </div>
            <p className="text-[#1A1A1A]/50 text-sm mt-3 max-w-xs">
              Agência física de personagens. Transformamos identidade de marca em legado tangível.
            </p>
          </div>

          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A]/50 space-y-1 lg:text-right">
            <div>Sede · Joinville, SC — Brasil</div>
            <div>26°18′S · 48°55′W</div>
            <div className="pt-3 text-[#1A1A1A] font-semibold tracking-[0.2em]">Made in Brazil ✦</div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A]/40">
          <span>© {new Date().getFullYear()} Pelúcias Personalizadas</span>
          <div className="flex gap-6">
            <a href="#orcamento" className="hover:text-[#2D5BFF]">Orçamento</a>
            <a href="https://wa.me/5547999327695" target="_blank" rel="noreferrer" className="hover:text-[#2D5BFF]">WhatsApp</a>
            <a href="#portfolio" className="hover:text-[#2D5BFF]">Portfolio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}