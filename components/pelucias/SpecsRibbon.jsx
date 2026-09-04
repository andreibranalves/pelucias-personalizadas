import React, { useState, useEffect } from "react";

const specs = [
  { k: "01", value: "300", unit: "unidades", label: "Pedido mínimo · escala industrial" },
  { k: "02", value: "Incluso", unit: "end-to-end", label: "Design gratuito · agência completa" },
  { k: "03", value: "20–30", unit: "dias úteis", label: "Produção · precisão de prazo" },
];

export default function SpecsRibbon() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="specs"
      className={`z-30 bg-[#1A1A1A] text-[#FDFDFD] transition-all duration-500 ${
        stuck ? "sticky top-0 shadow-2xl" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {specs.map((s) => (
            <div key={s.k} className="flex items-center gap-5 py-5 px-2 md:px-6 group">
              <Cube />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-2xl text-white">{s.value}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#2D5BFF]">{s.unit}</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 mt-1 truncate">
                  {s.label}
                </div>
              </div>
              <span className="font-mono text-[10px] text-white/30 hidden lg:block">{s.k}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cube() {
  return (
    <div className="relative w-7 h-7 flex-shrink-0">
      <div className="absolute inset-0 border border-[#2D5BFF]/60 rotate-45 animate-[spin_8s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite]" />
      <div className="absolute inset-1 border border-white/20 rotate-45" />
    </div>
  );
}