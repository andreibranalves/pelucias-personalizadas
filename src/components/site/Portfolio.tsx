import corporativo from "@/assets/portfolio-corporativo.jpg";
import sketch from "@/assets/portfolio-sketch.jpg";
import sublimacao from "@/assets/portfolio-sublimacao.jpg";
import almofada from "@/assets/portfolio-almofada.jpg";

const ITEMS = [
  {
    image: corporativo,
    tags: ["Eventos", "Campanhas", "Branding"],
    title: "Mascote Corporativo",
    spec: "Velboa Premium · Bordado · Recheio Sustentável",
  },
  {
    image: sketch,
    tags: ["Processo", "Atelier"],
    title: "Sketch → Plush",
    spec: "Protótipo · Aprovação digital · Produção interna",
  },
  {
    image: sublimacao,
    tags: ["Moda", "Lifestyle", "Colecionáveis"],
    title: "Sublimação Total",
    spec: "Estampa 360° · Acabamento premium",
  },
  {
    image: almofada,
    tags: ["Decoração", "Eventos", "Brindes"],
    title: "Almofada Personalizada",
    spec: "Bordado facial · Alta visibilidade corporativa",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-16 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              [ 02 · Portfólio ]
            </span>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Peças que já viraram
              <br />
              <em className="font-normal italic">patrimônio de marca.</em>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
            Cada projeto passa por prototipagem, aprovação digital e inspeção pré-embarque.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {ITEMS.map((item) => (
            <article key={item.title} className="group bg-background p-5 md:p-8">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                <span className="text-accent">Spec</span> {item.spec}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
