const LINKS = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#orcamento", label: "Iniciar Pedido" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em]">
            Pelúcias Personalizadas
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Agência física de personagens. Fábrica própria no Brasil, foco 100% B2B.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Est. Brasil · N 26°18′ S</span>
          <span>Pedido mínimo · 300 unidades</span>
          <span>Resposta em até 2 horas úteis</span>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1600px] flex-col gap-2 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} Pelúcias Personalizadas</span>
        <span>Ref. 001 — Velboa Premium</span>
      </div>
    </footer>
  );
}
