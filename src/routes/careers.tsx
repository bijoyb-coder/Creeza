import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Mastery Learned on the Line | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "CREEZA SAFETY GLASS WORKS PVT.LTD Glazing Apprenticeship, engineering roles, and interviews from the furnace floor." },
      { property: "og:title", content: "Careers | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const openings = [
  { role: "Coating Engineer", atelier: "Lucerne · CH", discipline: "R&D", lang: "DE / EN" },
  { role: "Curtain-Wall Advisor", atelier: "Singapore · SG", discipline: "Technical Advisory", lang: "EN" },
  { role: "Furnace Line Operator", atelier: "Stuttgart · DE", discipline: "Production", lang: "DE" },
  { role: "BIPV Product Manager", atelier: "Barcelona · ES", discipline: "Solar", lang: "ES / EN" },
  { role: "Automotive Quality Engineer", atelier: "Detroit · US", discipline: "Automotive", lang: "EN" },
];

function CareersPage() {
  return (
    <div className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-x">
          <Reveal><div className="mono eyebrow eyebrow-rule">Careers</div></Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif mt-8" style={{ fontSize: "clamp(38px, 5.4vw, 72px)" }}>
              Mastery, learned upon the line —<br />never from a brochure.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-[color:var(--ink-soft)] max-w-2xl">
              Opens with the apprenticeship — CREEZA SAFETY GLASS WORKS PVT.LTD's most distinguished offering, in a trade the world is quietly running short of hands to sustain.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Reveal>
              <article className="border border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--paper)] p-8 h-full">
                <div className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--bronze)]">Apprenticeship</div>
                <h3 className="font-serif text-2xl mt-3">Four years, one craft.</h3>
                <p className="mt-4 text-sm text-[#B9C0BE]">
                  CREEZA SAFETY GLASS WORKS PVT.LTD Glazing Apprenticeship — dual-track technical college and atelier floor training, across our Swiss, German, and United States sites.
                </p>
                <a href="#" className="mt-6 inline-flex btn-pill border-[color:var(--bronze)] text-[color:var(--bronze)]">Apply for 2027 intake</a>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="border border-[color:var(--line)] bg-[color:var(--card)] p-8 h-full">
                <div className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]">Openings</div>
                <h3 className="font-serif text-2xl mt-3">Positions of note.</h3>
                <p className="mt-4 text-sm text-[color:var(--ink-soft)]">Filter by atelier, discipline, and language.</p>
                <ul className="mt-6 divide-y divide-[color:var(--line)]">
                  {openings.map((o) => (
                    <li key={o.role} className="py-3">
                      <div className="font-serif text-base">{o.role}</div>
                      <div className="mono text-[11px] mt-1 text-[color:var(--steel)]">{o.atelier} · {o.discipline} · {o.lang}</div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={200}>
              <article className="border border-[color:var(--line)] bg-[color:var(--card)] p-8 h-full">
                <div className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]">Film</div>
                <h3 className="font-serif text-2xl mt-3">A day among the furnaces.</h3>
                <p className="mt-4 text-sm text-[color:var(--ink-soft)]">
                  Short unscripted interviews with line operators and coating engineers, subtitled.
                </p>
                <div className="mt-6 aspect-video bg-black flex items-center justify-center">
                  <span className="mono text-[10px] uppercase tracking-[0.14em] text-white/60">Play film · 4:32</span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
