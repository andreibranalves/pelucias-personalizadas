const SPECS = [
  {
    index: "01",
    value: "300",
    unit: "unidades",
    label: "Pedido mínimo · escala industrial",
  },
  {
    index: "02",
    value: "Incluso",
    unit: "end-to-end",
    label: "Design gratuito · agência completa",
  },
  {
    index: "03",
    value: "20–30",
    unit: "dias úteis",
    label: "Produção · precisão de prazo",
  },
];

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="scroll-mt-16 border-y border-border bg-foreground text-background"
    >
      <div id="especificacoes" className="mx-auto max-w-[1600px] scroll-mt-16 px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {SPECS.map((spec, i) => (
            <div
              key={spec.index}
              className={`flex flex-col justify-between gap-10 py-14 md:py-20 ${
                i > 0 ? "border-t border-background/15 md:border-l md:border-t-0 md:pl-10" : ""
              } ${i < 2 ? "md:pr-10" : ""}`}
            >
              <div>
                <p className="text-[clamp(2.4rem,4vw,3.4rem)] font-semibold leading-none tracking-[-0.03em]">
                  {spec.value}
                  <span className="ml-2 font-mono text-xs uppercase tracking-[0.2em] text-background/50">
                    {spec.unit}
                  </span>
                </p>
                <p className="mt-6 max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-background/60">
                  {spec.label}
                </p>
              </div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-background/35">
                {spec.index}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
