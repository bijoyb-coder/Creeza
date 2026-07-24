import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/innovation")({
  head: () => ({
    meta: [
      { title: "Innovation & R&D — The Atelier of Coatings | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "Forty-one patents. In-house low-E and solar-control coatings, tested to destruction. Speak with an engineer, never a salesman." },
      { property: "og:title", content: "Innovation & R&D | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:url", content: "/innovation" },
    ],
    links: [{ rel: "canonical", href: "/innovation" }],
  }),
  component: InnovationPage,
});

const stages = [
  { name: "Silica", spec: "SiO₂ · 72% purity" },
  { name: "Float bath", spec: "1100 °C · tin" },
  { name: "Coater", spec: "Magnetron sputter" },
  { name: "Tempering", spec: "620 °C · quench" },
  { name: "Lamination", spec: "PVB · 0.76mm" },
  { name: "Jobsite", spec: "±0.2mm tolerance" },
];

function ProcessDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh - r.top) / (vh + r.height);
      setP(Math.max(0, Math.min(1, raw)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const idx = Math.min(stages.length - 1, Math.floor(p * stages.length));
  return (
    <div ref={ref} className="mt-10">
      <div className="relative h-1 bg-[color:var(--line)]">
        <div className="absolute inset-y-0 left-0 bg-[color:var(--bronze)] transition-[width] duration-300" style={{ width: `${p * 100}%` }} />
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
        {stages.map((s, i) => (
          <div key={s.name} className={"transition-opacity duration-500 " + (i <= idx ? "opacity-100" : "opacity-30")}>
            <div className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]">Stage 0{i + 1}</div>
            <div className="font-serif text-xl mt-2">{s.name}</div>
            <div className="mono text-xs mt-2 text-[color:var(--ink-soft)]">{s.spec}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InnovationPage() {
  return (
    <div className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-x">
          <Reveal><div className="mono eyebrow eyebrow-rule">Innovation & R&D</div></Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif mt-8" style={{ fontSize: "clamp(38px, 5.4vw, 72px)" }}>
              The atelier of coatings.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-[color:var(--ink-soft)] max-w-2xl">
              This chamber exists to earn the architect's trust, never merely a sale — it is the page a specifier reads before ever placing CREEZA SAFETY GLASS WORKS PVT.LTD upon a shortlist.
            </p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Card
              eyebrow="Patents"
              title="Forty-one patents. One furnace."
              body="Our Lucerne coatings atelier conceives every low-E and solar-control layer entirely in-house — where most competitors merely license theirs. This is why a CREEZA SAFETY GLASS WORKS PVT.LTD colour-match is a formula, never an approximation."
            />
            <Card
              eyebrow="Testing"
              title="We test it to destruction, so you never have to."
              body="In-house cyclic fatigue, hail-impact, and pummel testing chambers, exceeding EN and ASTM minimums by a documented margin — published, without exception, per product line."
            />
          </div>

          <div className="mt-16 border border-[color:var(--line)] bg-[color:var(--card)] p-8 md:p-12">
            <div className="mono eyebrow eyebrow-rule">Process</div>
            <h2 className="font-serif mt-4 text-4xl">From silica to certainty.</h2>
            <p className="mt-4 text-[color:var(--ink-soft)] max-w-2xl">
              Scroll to trace the six stages: temperature, speed, and tolerance rendered against the pane.
            </p>
            <ProcessDiagram />
          </div>

          <div className="mt-16 border border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--paper)] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--bronze)]">Advisory</div>
              <h3 className="font-serif text-3xl mt-3">Converse with an engineer, never a salesman.</h3>
              <p className="mt-3 text-sm text-[#B9C0BE] max-w-xl">
                A direct calendar to CREEZA SAFETY GLASS WORKS PVT.LTD's technical advisory circle — thirty minutes, reserved wholly for craft, never for a pitch.
              </p>
            </div>
            <Link to="/contact" className="btn-pill border-[color:var(--bronze)] text-[color:var(--bronze)]">Book thirty minutes</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Card({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <Reveal>
      <article className="border border-[color:var(--line)] bg-[color:var(--card)] p-8 md:p-10 h-full">
        <div className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]">{eyebrow}</div>
        <h3 className="font-serif text-2xl md:text-3xl mt-3">{title}</h3>
        <p className="mt-4 text-[color:var(--ink-soft)]">{body}</p>
      </article>
    </Reveal>
  );
}
