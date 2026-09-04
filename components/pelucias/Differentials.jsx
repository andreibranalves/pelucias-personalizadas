import React from "react";
import { Check, Minus } from "lucide-react";

const rows = [
  { attr: "Pedido mínimo", us: "300 unidades", them: "Variável / não divulgado" },
  { attr: "Design gratuito incluso", us: "Incluso", them: "Cobrado à parte" },
  { attr: "Fábrica própria", us: "Controle total", them: "Nem sempre" },
  { attr: "Prazo padrão", us: "20–30 dias úteis", them: "4–8 semanas ou mais" },
  { attr: "Foco 100% B2B", us: "Exclusivo", them: "Nem sempre" },
  { attr: "Pagamento flexível", us: "50% + 50% entrega", them: "Não divulgado" },
];

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
    <section id="diferenciais" className="bg-[#1A1A1A] text-[#FDFDFD] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2D5BFF] mb-4">
          [ 04 · Diferenciais ]
        </div>
        <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.02em] max-w-2xl mb-16">
          O que nos separ de<br />
          <span className="text-white/40">qualquer outro fabricante.</span>
        </h2>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-20">
          {pillars.map((p) => (
            <div key={p.n} className="bg-[#1A1A1A] p-8 lg:p-10">
              <div className="font-heading font-bold text-5xl text-[#2D5BFF] mb-5">{p.n}</div>
              <h3 className="font-heading font-semibold text-xl text-white mb-3 leading-tight">{p.title}</h3>
              <p className="text-white/55 text-sm leading-[1.6]">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="border border-white/10">
          <div className="grid grid-cols-3 bg-white/5">
            <div className="p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Atributo</div>
            <div className="p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#2D5BFF]">Pelúcias Personalizadas</div>
            <div className="p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Concorrentes</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.attr} className={`grid grid-cols-3 border-t border-white/10 ${i % 2 ? "bg-white/[0.02]" : ""}`}>
              <div className="p-5 text-sm text-white/80">{r.attr}</div>
              <div className="p-5 text-sm text-white flex items-center gap-2">
                <Check size={14} className="text-[#2D5BFF] flex-shrink-0" /> {r.us}
              </div>
              <div className="p-5 text-sm text-white/40 flex items-center gap-2">
                <Minus size={14} className="flex-shrink-0" /> {r.them}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}