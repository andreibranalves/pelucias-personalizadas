import React, { useState } from "react";
import { Image } from "@/components/ui/image";

const items = [
  {
    img: "https://media.base44.com/images/public/6a9765cb599808a0e76941a9/7a697b09d_generated_8c487d16.jpg",
    title: "Mascote Corporativo",
    tags: ["Eventos", "Campanhas", "Branding"],
    spec: "Velboa Premium · Bordado · Recheio Sustentável",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    img: "https://media.base44.com/images/public/6a9765cb599808a0e76941a9/bf4e79aa8_generated_0947eaa2.jpg",
    title: "Sketch → Plush",
    tags: ["Processo", "Atelier"],
    spec: "Protótipo · Aprovação digital · Produção interna",
    span: "",
  },
  {
    img: "https://media.base44.com/images/public/6a9765cb599808a0e76941a9/fd355119f_generated_e39212f3.jpg",
    title: "Sublimação Total",
    tags: ["Moda", "Lifestyle", "Colecionáveis"],
    spec: "Estampa 360° · Acabamento premium",
    span: "",
  },
  {
    img: "https://media.base44.com/images/public/6a9765cb599808a0e76941a9/798757939_generated_d71a4df6.jpg",
    title: "Almofada Personalizada",
    tags: ["Decoração", "Eventos", "Brindes"],
    spec: "Bordado facial · Alta visibilidade corporativa",
    span: "lg:col-span-2",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#FDFDFD] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2D5BFF] mb-4">
              [ 02 · Portfolio de Escala ]
            </div>
            <h2 className="font-heading font-bold text-[#1A1A1A] text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.02em] max-w-xl">
              Qualquer mascote.<br />
              <span className="text-[#1A1A1A]/40">Não é promessa — é catálogo.</span>
            </h2>
          </div>
          <p className="text-[#1A1A1A]/60 text-lg leading-[1.6] max-w-sm">
            Do brinde de colaborador ao mascote oficial da marca. Cada projeto é
            desenvolvido do zero, com materiais premium e inspeção pré-embarque.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[280px] lg:auto-rows-[320px] gap-3">
          {items.map((it) => (
            <Card key={it.title} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative overflow-hidden bg-[#F2F2F2] group cursor-pointer ${item.span}`}
    >
      <Image
        src={item.img}
        alt={item.title}
        fittingType="fill"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
          hover ? "scale-105" : "scale-100"
        }`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 transition-opacity duration-300 ${hover ? "opacity-100" : "opacity-60"}`} />

      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
        {item.tags.map((t) => (
          <span key={t} className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/15">
            {t}
          </span>
        ))}
      </div>

      <div className={`absolute bottom-0 inset-x-0 p-5 transition-all duration-500 ${hover ? "translate-y-0" : "translate-y-2"}`}>
        <h3 className="font-heading font-semibold text-white text-xl">{item.title}</h3>
        <div className={`overflow-hidden transition-all duration-500 ${hover ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
          <div className="flex items-start gap-2 pt-2 border-t border-white/20">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#2D5BFF] mt-0.5">Spec</span>
            <span className="font-mono text-[10px] text-white/80 leading-relaxed">{item.spec}</span>
          </div>
        </div>
      </div>
    </div>
  );
}