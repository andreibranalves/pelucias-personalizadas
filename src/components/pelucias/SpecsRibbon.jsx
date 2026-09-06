import React from "react";

const specs = [
  { prefix: "Mínimo de", value: "300", unit: "unidades" },
  { value: "Design", unit: "gratuito" },
  { value: "20–30", unit: "dias úteis" },
];

export default function SpecsRibbon() {
  return (
    <section id="specs" className="bg-wine text-beige">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-y-0 py-7">
          {specs.map((s, i) => (
            <div
              key={i}
              className="flex items-baseline gap-2 flex-wrap px-2 md:px-8 md:border-l border-beige/15 md:first:border-l-0 md:first:pl-2"
            >
              {s.prefix && <span className="text-beige/70 text-sm">{s.prefix}</span>}
              <span className="font-heading font-semibold text-2xl text-beige">{s.value}</span>
              {s.unit && <span className="text-beige/70 text-sm">{s.unit}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}