import React from "react";

const pillars = [
  {
    n: "300",
    title: "Volume real para campanhas que impactam.",
    desc: "O pedido mínimo de 300 unidades garante viabilidade de produção artesanal com controle total de qualidade em cada lote.",
  },
  {
    n: "R$ 0",
    title: "Design gratuito não é detalhe. É economia real.",
    desc: "A maioria dos fabricantes cobra pelo desenvolvimento de arte. Aqui, nossa equipe cria o design do zero, gratuitamente.",
  },
  {
    n: "100%",
    title: "Fábrica própria: você não depende de terceiros.",
    desc: "Cada pelúcia é produzida internamente com inspeção de qualidade antes de cada entrega. Sem inconsistência entre lotes.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-wine text-beige py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="font-heading font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em] max-w-2xl mb-16">
          O que nos separa de<br />
          <span className="text-beige/50 font-medium">qualquer outro fabricante.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.n} className="bg-white/5 border border-beige/15 rounded-[1.25rem] p-8 lg:p-10">
              <div className="font-heading font-semibold text-4xl text-beige mb-5">{p.n}</div>
              <h3 className="font-heading font-medium text-xl text-beige mb-3 leading-tight">{p.title}</h3>
              <p className="text-beige/70 text-sm leading-[1.6]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}