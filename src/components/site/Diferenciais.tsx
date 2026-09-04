const HIGHLIGHTS = [
  {
    value: "300",
    title: "Volume real para campanhas que impactam.",
    text: "O pedido mínimo de 300 unidades garante viabilidade de produção artesanal com controle total de qualidade em cada lote.",
  },
  {
    value: "R$ 0",
    title: "Design gratuito não é detalhe. É economia real.",
    text: "A maioria dos fabricantes cobra pelo desenvolvimento de arte. Aqui, nossa equipe cria o design do zero, gratuitamente.",
  },
  {
    value: "100%",
    title: "Fábrica própria: você não depende de terceiros.",
    text: "Cada pelúcia é produzida internamente com inspeção de qualidade antes de cada entrega. Sem inconsistência entre lotes.",
  },
];

const ROWS = [
  ["Pedido mínimo", "300 unidades", "Variável / não divulgado"],
  ["Design gratuito incluso", "Incluso", "Cobrado à parte"],
  ["Fábrica própria", "Controle total", "Nem sempre"],
  ["Prazo padrão", "20–30 dias úteis", "4–8 semanas ou mais"],
  ["Foco 100% B2B", "Exclusivo", "Nem sempre"],
  ["Pagamento flexível", "50% + 50% entrega", "Não divulgado"],
];

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="scroll-mt-16 border-t border-border px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          [ 04 · Diferenciais ]
        </span>
        <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
          O que nos separa de
          <br />
          <em className="font-normal italic">qualquer outro fabricante.</em>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.value} className="bg-background p-8 md:p-10">
              <p className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-none tracking-[-0.03em] text-accent">
                {item.value}
              </p>
              <h3 className="mt-8 text-lg font-semibold leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-y border-border">
                {["Atributo", "Pelúcias Personalizadas", "Concorrentes"].map((head) => (
                  <th
                    key={head}
                    className="px-4 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row[0]} className="border-b border-border">
                  <td className="px-4 py-5 text-sm text-muted-foreground">{row[0]}</td>
                  <td className="px-4 py-5 text-sm font-semibold text-foreground">{row[1]}</td>
                  <td className="px-4 py-5 text-sm text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
