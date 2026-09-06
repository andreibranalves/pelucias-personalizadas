import React, { useState } from "react";
import { Image } from "@/components/ui/image";

const items = [
  {
    img: "/img/portfolio-1.jpg",
    title: "Mascote Corporativo",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    img: "/img/portfolio-2.jpg",
    title: "Do Esboço à Pelúcia",
    span: "",
  },
  {
    img: "/img/portfolio-3.jpg",
    title: "Sublimação Total",
    span: "",
  },
  {
    img: "/img/portfolio-4.jpg",
    title: "Almofada Personalizada",
    span: "lg:col-span-2",
  },
  {
    img: "/img/portfolio-5.jpg",
    title: "Almofada Premium",
    span: "",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="font-heading font-semibold text-[#1A1A1A] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em] max-w-xl">
              Qualquer mascote.<br />
              <span className="text-[#1A1A1A]/60 font-medium">Não é promessa, é catálogo.</span>
            </h2>
          </div>
          <p className="text-[#1A1A1A]/70 text-lg leading-[1.6] max-w-sm">
            Do brinde de colaborador ao mascote oficial da marca. Cada projeto é
            desenvolvido do zero, com materiais premium e inspeção pré-embarque.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[280px] lg:auto-rows-[320px] gap-4">
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
      className={`relative overflow-hidden bg-beige rounded-[1.5rem] group cursor-pointer ${item.span}`}
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

      <div className="absolute bottom-0 inset-x-0 p-5">
        <h3 className="font-heading font-medium text-white text-xl">{item.title}</h3>
      </div>
    </div>
  );
}