import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sixty-three Years, Eleven Ateliers | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "Founded 1962 in Lucerne. Family stewardship, eleven ateliers across three continents, ISO 9001 / 14001 certified." },
      { property: "og:title", content: "About | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const cards = [
  { eyebrow: "Heritage", title: "1962, Lucerne", body: "Founded by master glazier Anton Reinhardt upon a single float line. The family's seats upon the board endure to this day, in quiet partnership with professional stewardship." },
  { eyebrow: "Footprint", title: "Eleven ateliers, three continents", body: "Interactive map with plant capacity, ISO 9001 / 14001 certifications, specialization per site." },
  { eyebrow: "Leadership", title: "An introduction to our leadership", body: "Portrait grid, each linked to a short technical bio — engineers, chemists, glaziers." },
  { eyebrow: "Quality", title: "±0.2mm, without exception", body: "Tolerance comparison table against EN and ASTM baselines, published per line." },
  { eyebrow: "Certifications", title: "Every certificate, freely given", body: "Downloadable ISO / CE / EPD certificates. No gated form, no waiting room." },
  { eyebrow: "Visit", title: "Visit an atelier", body: "Request a private technical plant tour with an engineer of your line.", cta: true },
];

function AboutPage() {
  return (
    <div className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-x">
          <Reveal><div className="mono eyebrow eyebrow-rule">About</div></Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif mt-8" style={{ fontSize: "clamp(38px, 5.4vw, 72px)" }}>
              Sixty-three years.<br />Eleven ateliers.
            </h1>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="border border-[color:var(--line)] bg-[color:var(--card)] p-8 h-full flex flex-col">
                  <div className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]">{c.eyebrow}</div>
                  <h3 className="font-serif text-2xl mt-3">{c.title}</h3>
                  <p className="mt-4 text-[color:var(--ink-soft)] text-sm flex-1">{c.body}</p>
                  {c.cta && <Link to="/contact" className="mt-6 btn-ghost self-start">Request a tour</Link>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
}
