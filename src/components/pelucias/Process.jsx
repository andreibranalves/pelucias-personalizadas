import React from "react";

const steps = [
  {
    n: "01",
    title: "Solicite seu orçamento",
    desc: "Fale com nossa equipe pelo WhatsApp ou formulário. Resposta em até 2 horas úteis.",
  },
  {
    n: "02",
    title: "Arte ou design gratuito",
    desc: "Tem logo ou mascote? Mande o arquivo. Não tem? Nossa equipe cria o design gratuitamente.",
  },
  {
    n: "03",
    title: "Aprove o protótipo",
    desc: "Antes de produzir, você vê e aprova a arte digital. Nada entra em produção sem o seu ok.",
  },
  {
    n: "04",
    title: "Produção interna",
    desc: "Produção na nossa fábrica com inspeção de qualidade pré-embarque em cada pedido.",
  },
  {
    n: "05",
    title: "Receba onde estiver",
    desc: "Entrega por aéreo ou rodoviário para todo o Brasil. Você acompanha e recebe no prazo combinado.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-beige py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="font-heading font-semibold text-[#1A1A1A] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em] max-w-2xl mb-16">
          Do briefing ao brinde<br />
          <span className="text-[#1A1A1A]/60 font-medium">em 5 passos.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-cream rounded-[1.25rem] border border-black/5 p-6 lg:p-7 flex flex-col min-h-[260px] transition-all duration-300"
            >
              <span className="font-heading font-semibold text-lg text-wine mb-6">{s.n}</span>
              <h3 className="font-heading font-semibold text-[#1A1A1A] text-lg leading-tight mb-3">{s.title}</h3>
              <p className="text-[#1A1A1A]/70 text-sm leading-[1.6] mt-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}