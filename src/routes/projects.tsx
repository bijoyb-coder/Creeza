import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import meridianImg from "@/assets/meridian-tower.jpg";
import archImg from "@/assets/product-architectural.jpg";
import solarImg from "@/assets/product-solar.jpg";
import interiorImg from "@/assets/product-interior.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — A Portfolio of Proof | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "Filterable by sector, nation, and product line. Only fact: name, metres, product, year." },
      { property: "og:title", content: "Projects | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  { name: "Meridian Tower, Singapore", sector: "Commercial", country: "Singapore", product: "Low-E Curtain Wall", area: "38,000 m²", year: 2025, img: meridianImg },
  { name: "Aria Concert Hall, Oslo", sector: "Cultural", country: "Norway", product: "Structural Laminated", area: "6,200 m²", year: 2024, img: archImg },
  { name: "Solvale Solar Park, Andalusia", sector: "Energy", country: "Spain", product: "BIPV Patterned Glass", area: "210,000 m²", year: 2024, img: solarImg },
  { name: "Nordhavn Residences, Copenhagen", sector: "Residential", country: "Denmark", product: "Triple-Silver IGU", area: "14,500 m²", year: 2023, img: interiorImg },
];

const uniq = <T,>(arr: T[]) => Array.from(new Set(arr));

function ProjectsPage() {
  const [sector, setSector] = useState("All");
  const [country, setCountry] = useState("All");
  const [product, setProduct] = useState("All");

  const filtered = useMemo(() => projects.filter((p) =>
    (sector === "All" || p.sector === sector) &&
    (country === "All" || p.country === country) &&
    (product === "All" || p.product === product)
  ), [sector, country, product]);

  return (
    <div className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-x">
          <Reveal><div className="mono eyebrow eyebrow-rule">Projects</div></Reveal>
          <Reveal delay={120}><h1 className="font-serif mt-8" style={{ fontSize: "clamp(38px, 5.4vw, 72px)" }}>A portfolio of proof.</h1></Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-[color:var(--ink-soft)] max-w-2xl">
              A gallery filterable by sector, nation, and product line — no embellishment upon the index, only fact: the building's name, the metres supplied, the product entrusted, the year it rose.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-4">
            <Filter label="Sector" value={sector} onChange={setSector} options={["All", ...uniq(projects.map((p) => p.sector))]} />
            <Filter label="Country" value={country} onChange={setCountry} options={["All", ...uniq(projects.map((p) => p.country))]} />
            <Filter label="Product" value={product} onChange={setProduct} options={["All", ...uniq(projects.map((p) => p.product))]} />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <a href="#" className="group block border border-[color:var(--line)] bg-[color:var(--card)] hover:border-[color:var(--ink)] transition-colors">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]" />
                  </div>
                  <div className="p-6">
                    <div className="mono text-[10px] tracking-[0.14em] uppercase text-[color:var(--steel)]">{p.sector} · {p.country}</div>
                    <h3 className="font-serif text-2xl mt-2">{p.name}</h3>
                    <div className="mt-4 grid grid-cols-3 gap-4 mono text-xs">
                      <Cell label="Product" v={p.product} />
                      <Cell label="Area" v={p.area} />
                      <Cell label="Year" v={String(p.year)} />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Filter({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="mono text-[10px] tracking-[0.14em] uppercase text-[color:var(--steel)] block mb-2">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="px-3 py-2 bg-transparent border border-[color:var(--line)] text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
function Cell({ label, v }: { label: string; v: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]">{label}</div>
      <div className="mt-1 text-[color:var(--ink)]">{v}</div>
    </div>
  );
}
