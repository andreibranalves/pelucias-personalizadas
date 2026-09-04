const STEPS = [
  {
    index: "01",
    title: "Solicite seu orçamento",
    text: "Fale com nossa equipe pelo WhatsApp ou formulário. Resposta em até 2 horas úteis.",
  },
  {
    index: "02",
    title: "Arte ou design gratuito",
    text: "Tem logo ou mascote? Mande o arquivo. Não tem? Nossa equipe cria o design gratuitamente.",
  },
  {
    index: "03",
    title: "Aprove o protótipo",
    text: "Antes de produzir, você vê e aprova a arte digital. Nada entra em produção sem o seu ok.",
  },
  {
    index: "04",
    title: "Produção interna",
    text: "Produção na nossa fábrica com inspeção de qualidade pré-embarque em cada pedido.",
  },
  {
    index: "05",
    title: "Receba onde estiver",
    text: "Entrega por aéreo ou rodoviário para todo o Brasil. Você acompanha e recebe no prazo combinado.",
  },
];

export function Processo() {
  return (
    <section
      id="processo"
      className="scroll-mt-16 border-t border-border bg-secondary px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          [ 03 · Processo ]
        </span>
        <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
          Do briefing ao brinde
          <br />
          <em className="font-normal italic">em 5 passos.</em>
        </h2>

        <ol className="mt-16 border-t border-border">
          {STEPS.map((step) => (
            <li
              key={step.index}
              className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="font-mono text-[11px] tracking-[0.25em] text-accent md:col-span-1">
                {step.index}
              </span>
              <h3 className="text-xl font-semibold tracking-tight md:col-span-4">{step.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:col-span-7">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
