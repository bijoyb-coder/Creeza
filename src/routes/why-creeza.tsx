import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/why-creeza")({
  head: () => ({
    meta: [
      { title: "Why Creeza — Trusted Partner for Premium Toughened Glass Solutions | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "Advanced technology, skilled craftsmanship, and uncompromising quality standards — high-performance toughened safety glass for residential, commercial, and industrial applications." },
      { property: "og:title", content: "Why Creeza | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:url", content: "/why-creeza" },
    ],
    links: [{ rel: "canonical", href: "/why-creeza" }],
  }),
  component: WhyCreezaPage,
});

function WhyCreezaPage() {
  return (
    <div className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-x">
          <Reveal><div className="mono eyebrow eyebrow-rule">Why Creeza</div></Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif mt-8" style={{ fontSize: "clamp(34px, 5vw, 64px)" }}>
              Trusted Partner for Premium<br />Toughened Glass Solutions
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-[color:var(--ink-soft)] max-w-2xl">
              At CREEZA SAFETY GLASS WORKS PVT. LTD., we combine advanced technology, skilled craftsmanship, and uncompromising quality standards to manufacture high-performance toughened safety glass for residential, commercial, and industrial applications.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-4 text-[color:var(--ink-soft)] max-w-2xl">
              Whether you are an architect, builder, contractor, interior designer, or homeowner, Creeza delivers glass solutions that are safe, durable, and aesthetically superior.
            </p>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
