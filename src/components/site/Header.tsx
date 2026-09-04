import { useEffect, useState } from "react";

const NAV = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#especificacoes", label: "Especificações" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
          Pelúcias Personalizadas
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#orcamento"
            className="hidden bg-foreground px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85 sm:inline-block"
          >
            Iniciar Pedido
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#orcamento"
              onClick={() => setOpen(false)}
              className="bg-foreground px-5 py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-background"
            >
              Iniciar Pedido
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
