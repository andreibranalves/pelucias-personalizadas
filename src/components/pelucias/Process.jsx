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
    <section id="processo" className="bg-[#F2F2F2] py-24 lg:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2D5BFF] mb-4">
          [ 03 · Processo ]
        </div>
        <h2 className="font-heading font-bold text-[#1A1A1A] text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.02em] max-w-2xl mb-16">
          Do briefing ao brinde<br />
          <span className="text-[#1A1A1A]/40">em 5 passos.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#F2F2F2] p-6 lg:p-7 flex flex-col min-h-[260px] hover:bg-[#FDFDFD] transition-colors duration-300">
              <span className="font-mono text-[11px] text-[#2D5BFF] mb-6">{s.n}</span>
              <h3 className="font-heading font-semibold text-[#1A1A1A] text-lg leading-tight mb-3">{s.title}</h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-[1.6] mt-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}