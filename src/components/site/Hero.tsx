import heroMacro from "@/assets/hero-macro.jpg";

const STATS = [
  { value: "1.000+", label: "Empresas" },
  { value: "300", label: "Unid. mín." },
  { value: "20–30", label: "Dias úteis" },
];

export function Hero() {
  return (
    <section id="top" className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative min-h-[60vh] overflow-hidden bg-foreground lg:min-h-screen">
        <img
          src={heroMacro}
          alt="Macro de mascote de pelúcia personalizado com bordado azul"
          width={1024}
          height={1280}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-5 top-20 font-mono text-[10px] uppercase tracking-[0.25em] text-background/70 md:left-10 lg:top-24">
          [ Macro · 1:1 · Studio ]
        </span>
        <div className="absolute inset-x-5 bottom-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-background/60 md:inset-x-10">
          <span>Ref. 001 — Velboa Premium</span>
          <span>N 26°18′ S</span>
        </div>
      </div>

      <div className="relative flex items-center px-5 py-24 md:px-14 lg:py-0">
        <span className="absolute right-5 top-20 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:right-10 lg:top-24">
          Est. Brasil
        </span>

        <div className="w-full max-w-xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Agência Física de Personagens
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(2.8rem,6vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Sua identidade,
            <br />
            <em className="font-normal italic">tangível.</em>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Do conceito 2D ao legado 3D. Transformamos a identidade da sua marca em mascotes de
            pelúcia artesanal —{" "}
            <strong className="font-semibold text-foreground">a partir de 300 unidades</strong>, com
            design gratuito incluso.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#orcamento"
              className="bg-foreground px-7 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              Iniciar Pedido ↗
            </a>
            <a
              href="#portfolio"
              className="border border-border px-7 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
            >
              Ver Portfólio
            </a>
          </div>

          <div className="mt-14 border-t border-border pt-8">
            <dl className="grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</dd>
                  <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
