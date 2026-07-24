import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/suntuitive-glass")({
  head: () => ({
    meta: [
      { title: "Suntuitive Glass | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "Suntuitive glass solutions from CREEZA SAFETY GLASS WORKS PVT.LTD." },
      { property: "og:title", content: "Suntuitive Glass | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:url", content: "/suntuitive-glass" },
    ],
    links: [{ rel: "canonical", href: "/suntuitive-glass" }],
  }),
  component: SuntuitiveGlassPage,
});

function SuntuitiveGlassPage() {
  return (
    <div className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-x">
          <Reveal><div className="mono eyebrow eyebrow-rule">Product List</div></Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif mt-8" style={{ fontSize: "clamp(34px, 5vw, 64px)" }}>
              Suntuitive Glass
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-[color:var(--ink-soft)] max-w-2xl">
              Content coming soon.
            </p>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
