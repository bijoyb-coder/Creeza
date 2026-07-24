import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import archImg from "@/assets/product-architectural.jpg";
import autoImg from "@/assets/product-automotive.jpg";
import solarImg from "@/assets/product-solar.jpg";
import interiorImg from "@/assets/product-interior.jpg";
import fireImg from "@/assets/product-fire.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "The Collection — Products & Solutions | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "Five processing lines: Architectural, Automotive, Solar, Interior, Fire & Security. Spec-driven, certified, presented without adjective." },
      { property: "og:title", content: "The Collection | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:description", content: "Five processing lines. No adjectives — the figures alone shall persuade." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const slides = [
  { name: "Architectural", tag: "Lt 8–82% · U-value 0.6–1.1 W/m²K · up to 3.5 × 6.0m", img: archImg },
  { name: "Automotive & Mobility", tag: "ECE R43 certified · 3.1–5mm · HUD-compatible", img: autoImg },
  { name: "Solar & Energy", tag: "Tvis 93.5% · EN 12150 hail-rated · 2–4mm", img: solarImg },
  { name: "Interior & Decorative", tag: "18 finishes · 4–15mm · digitally printed", img: interiorImg },
  { name: "Fire-Rated & Security", tag: "EI 30–120 · up to 60mm · ballistic-rated", img: fireImg },
];

function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Local minimal Tesla-style nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="container-x flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl tracking-[0.08em] text-white">CREEZA SAFETY GLASS WORKS PVT.LTD</Link>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/80">
            <Link to="/services">Services</Link>
            <Link to="/innovation">Innovation</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Link to="/contact" className="text-[12px] uppercase tracking-widest text-white/80 hover:text-white">Consult ›</Link>
        </div>
      </header>

      {/* Intro */}
      <section className="pt-40 pb-20 text-center container-x">
        <Reveal><div className="mono text-[11px] uppercase tracking-[0.22em] text-[#8a8a8a]">Services</div></Reveal>
        <Reveal delay={120}>
          <h1 className="font-sans font-bold mt-6 tracking-[-0.03em]" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
            The Collection.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-6 text-[#a8a8a8] max-w-2xl">
            Five processing lines, presented as a connoisseur would wish: a full-bleed portrait for each, a single spec-born verse, two direct gestures. No adjectives — the figures alone shall persuade.
          </p>
        </Reveal>
      </section>

      {/* Slides */}
      {slides.map((s, i) => (
        <section key={s.name} className="min-h-screen flex flex-col justify-center py-12 border-t border-white/5">
          <div className="text-center">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-[#8a8a8a]">Line 0{i + 1}</div>
          </div>
          <div className="relative w-full mt-8" style={{ height: "62vh" }}>
            <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="text-center container-x mt-12">
            <h2 className="font-sans font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4.4vw, 60px)" }}>
              {s.name}
            </h2>
            <div className="mono text-sm md:text-base text-[#c8c8c8] mt-4">{s.tag}</div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-black text-[13px] uppercase tracking-widest rounded-sm hover:bg-white/90 transition">
                Request a Specification
              </Link>
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-white/60 text-white text-[13px] uppercase tracking-widest rounded-sm hover:bg-white/10 transition">
                Download the Datasheet
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* Compare */}
      <section className="py-24 border-t border-white/10">
        <div className="container-x">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-[#8a8a8a] text-center">Compare</div>
          <h2 className="font-sans font-bold text-center mt-4" style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}>
            Compare the Collection
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] mono text-sm">
              <thead>
                <tr className="border-b border-white/20 text-[#8a8a8a] text-[11px] uppercase tracking-[0.14em]">
                  <th className="text-left py-4 font-normal">Line</th>
                  <th className="text-left py-4 font-normal">Thickness</th>
                  <th className="text-left py-4 font-normal">Key metric</th>
                  <th className="text-left py-4 font-normal">Standard</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-b [&>tr]:border-white/10">
                <tr><td className="py-4">Architectural</td><td>6–19mm</td><td>U 0.6–1.1</td><td>EN 1279</td></tr>
                <tr><td className="py-4">Automotive</td><td>3.1–5mm</td><td>ECE R43</td><td>ECE R43</td></tr>
                <tr><td className="py-4">Solar & Energy</td><td>2–4mm</td><td>Tvis 93.5%</td><td>EN 12150</td></tr>
                <tr><td className="py-4">Interior</td><td>4–15mm</td><td>18 finishes</td><td>—</td></tr>
                <tr><td className="py-4">Fire & Security</td><td>up to 60mm</td><td>EI 30–120</td><td>EN 1364</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="h-24" />
      </section>

      {/* Sticky CTA bar */}
      <div className="sticky bottom-0 z-40 bg-[#141414] border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-5">
          <p className="text-sm md:text-base text-white/90">Uncertain which line befits your vision?</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-[13px] uppercase tracking-widest text-white rounded-sm" style={{ backgroundColor: "#E82127" }}>
            Consult an Engineer
          </Link>
        </div>
      </div>
    </div>
  );
}
