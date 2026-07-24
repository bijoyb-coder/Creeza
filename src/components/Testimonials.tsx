import { Reveal } from "./Reveal";

const quotes = [
  { q: "CREEZA SAFETY GLASS WORKS PVT.LTD matched a bespoke coating tone in six weeks — a labour two other ateliers assured us would take four months.", a: "Facade Consultant, Studio Herrera Barros" },
  { q: "Theirs is the finest tolerance we have procured against in fourteen years of curtain wall work.", a: "Head of Procurement, Norlund Construction Group" },
  { q: "The tour of their atelier settled our shortlist entirely. One finds that access nowhere else in this tier.", a: "Principal Architect, Vance & Okafor" },
];

export function Testimonials({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <section className={dark ? "bg-[color:var(--ink)] text-[color:var(--paper)]" : "bg-[color:var(--paper)] text-[color:var(--ink)]"}>
      <div className="container-x py-24 md:py-32">
        <div className="eyebrow eyebrow-rule mb-10">In Their Words</div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="flex flex-col h-full">
                <blockquote className="font-serif italic text-xl md:text-[22px] leading-snug">
                  “{q.q}”
                </blockquote>
                <figcaption className="mono text-[11px] uppercase tracking-[0.14em] mt-6 text-[color:var(--steel)]">
                  {q.a}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
