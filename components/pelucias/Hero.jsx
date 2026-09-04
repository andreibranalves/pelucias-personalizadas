import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6a9765cb599808a0e76941a9/10ca0578e_generated_be283439.jpg";

export default function Hero() {
  return (
    <section id="manifesto" className="relative min-h-screen bg-[#FDFDFD] flex flex-col lg:flex-row">
      {/* Left — image */}
      <div className="relative lg:w-[52%] min-h-[44vh] lg:min-h-screen bg-[#F2F2F2] overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="Mascote pelúcia personalizado em macro fotografia"
          fittingType="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
        <div className="absolute top-24 left-6 lg:left-10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 mix-blend-difference">
          [ Macro · 1:1 · Studio ]
        </div>
        <div className="absolute bottom-6 left-6 lg:left-10 right-6 flex items-end justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 mix-blend-difference">
            Ref. 001 — Velboa Premium
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 mix-blend-difference hidden sm:block">
            N 26°18′ S
          </span>
        </div>
      </div>

      {/* Right — manifesto */}
      <div className="lg:w-[48%] flex flex-col justify-center px-6 lg:px-14 py-20 lg:py-0 relative">
        <div className="absolute top-24 right-6 lg:right-14 font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/40">
          Est. Brasil
        </div>

        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2D5BFF] mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-[#2D5BFF]" />
          Agência Física de Personagens
        </div>

        <h1 className="font-heading font-bold text-[#1A1A1A] leading-[0.92] tracking-[-0.02em] text-[clamp(2.75rem,6vw,5.5rem)] text-balance">
          Sua identidade,
          <br />
          <span className="italic font-medium">tangível.</span>
        </h1>

        <p className="mt-8 text-[#1A1A1A]/70 text-lg leading-[1.6] max-w-md">
          Do conceito 2D ao legado 3D. Transformamos a identidade da sua marca em
          mascotes de pelúcia artesanal — <span className="text-[#1A1A1A] font-medium">a partir de 300 unidades</span>,
          com design gratuito incluso.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#orcamento"
            className="btn-plush inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#FDFDFD] px-7 py-4 rounded-sm font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-[#2D5BFF]"
          >
            Iniciar Pedido <ArrowUpRight size={14} />
          </a>
          <a
            href="#portfolio"
            className="btn-plush inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] px-7 py-4 rounded-sm font-mono text-[11px] uppercase tracking-[0.14em] hover:border-[#1A1A1A]"
          >
            Ver Portfolio
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 max-w-md border-t border-[#1A1A1A]/10 pt-6">
          <Stat value="1.000+" label="Empresas" />
          <Stat value="300" label="Unid. mín." />
          <Stat value="20–30" label="Dias úteis" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-heading font-bold text-2xl text-[#1A1A1A]">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A]/50 mt-1">{label}</div>
    </div>
  );
}