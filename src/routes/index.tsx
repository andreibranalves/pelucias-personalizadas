import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Portfolio } from "@/components/site/Portfolio";
import { Processo } from "@/components/site/Processo";
import { Diferenciais } from "@/components/site/Diferenciais";
import { OrderForm } from "@/components/site/OrderForm";
import { Footer } from "@/components/site/Footer";

const TITLE = "Pelúcias Personalizadas — Mascotes de marca sob medida";
const DESCRIPTION =
  "Mascotes de pelúcia artesanal para empresas: a partir de 300 unidades, design gratuito incluso, fábrica própria e entrega em 20–30 dias úteis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pelúcias Personalizadas",
          description: DESCRIPTION,
          areaServed: "BR",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Portfolio />
        <Processo />
        <Diferenciais />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
