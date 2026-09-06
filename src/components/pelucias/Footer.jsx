import React from "react";

export default function Footer() {
  return (
    <footer className="bg-beige border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="text-center max-w-xl mx-auto">
          <div className="font-heading font-semibold text-2xl text-[#1A1A1A] tracking-tight">
            PELÚCIAS PERSONALIZADAS
          </div>
          <p className="text-[#1A1A1A] text-sm mt-3">
            Transformamos identidade de marca em legado tangível.
          </p>

          <div className="text-[#1A1A1A] text-sm mt-6 space-y-1">
            <p>Rua 2300, 76 - Centro, Balneário Camboriú - SC, 88330-426</p>
            <a href="tel:+5547999327695" className="block hover:underline">
              +55 47 99932-7695
            </a>
            <a href="mailto:contato@peluciaspersonalizadas.com.br" className="block hover:underline">
              contato@peluciaspersonalizadas.com.br
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between gap-4 font-body text-[10px] uppercase tracking-[0.18em] text-[#1A1A1A]">
          <span>© {new Date().getFullYear()} Pelúcias Personalizadas</span>
          <div className="flex gap-6">
            <a href="#orcamento" className="hover:text-wine">Orçamento</a>
            <a href="https://wa.me/5547999327695" target="_blank" rel="noreferrer" className="hover:text-wine">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}