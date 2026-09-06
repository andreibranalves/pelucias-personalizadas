import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMG = "/img/hero.jpg";

export default function Hero() {
  return (
    <section id="manifesto" className="bg-beige px-6 min-h-[calc(100vh-4rem)] flex items-center py-12 lg:py-6">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] text-wine border border-wine/30 bg-white/50 px-4 py-2 rounded-full">
            Mascotes exclusivos • Produção própria
          </div>
          <h1 className="font-heading font-semibold text-[#1A1A1A] leading-[1.02] tracking-[-0.01em] text-[clamp(2.75rem,5.5vw,4.75rem)] mt-6 text-balance">
            Sua identidade, tangível.
          </h1>
          <p className="mt-6 text-[#1A1A1A]/70 text-lg leading-[1.6] max-w-lg">
            Do conceito 2D ao legado 3D. Transformamos a identidade da sua marca em
            mascotes de pelúcia artesanal. A partir de 300 unidades, com design
            gratuito incluso.
          </p>
          <div className="mt-9">
            <a
              href="#orcamento"
              className="btn-plush inline-flex items-center justify-center gap-2 bg-wine text-beige px-8 py-4 rounded-full font-body text-[11px] uppercase tracking-[0.18em] hover:bg-wine-dark"
            >
              Solicitar orçamento <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-black/10 pt-6">
            <Stat value="1.000+" label="Empresas" />
            <Stat value="300" label="Unid. mín." />
            <Stat value="20–30" label="Dias úteis" />
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden h-[300px] sm:h-[380px] lg:h-[min(60vh,520px)]">
          <Image
            src={HERO_IMG}
            alt="Mascote pelúcia personalizado em macro fotografia"
            fittingType="fill"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-heading font-semibold text-2xl text-[#1A1A1A]">{value}</div>
      <div className="font-body text-[10px] uppercase tracking-[0.18em] text-[#1A1A1A]/60 mt-1">{label}</div>
    </div>
  );
}