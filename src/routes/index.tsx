import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Reveal, CountUp } from "@/components/Reveal";
import { HeroSlider } from "@/components/HeroSlider";
import heroImg from "@/assets/hero-curtain.jpg";
import heroImg2 from "@/assets/hero-glass-2.jpg";
import heroImg3 from "@/assets/hero-glass-3.jpg";
import heroImg4 from "@/assets/hero-glass-4.jpg";

import meridianImg from "@/assets/Featured.jpg";
import archImg from "@/assets/product-architectural.jpg";
import autoImg from "@/assets/product-automotive.jpg";
import solarImg from "@/assets/product-solar.jpg";
import interiorImg from "@/assets/product-interior.jpg";
import fireImg from "@/assets/product-fire.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CREEZA SAFETY GLASS WORKS PVT.LTD | Master Glaziers for Architecture, Mobility & Solar" },
      { name: "description", content: "CREEZA SAFETY GLASS WORKS PVT.LTD crafts float, coated, laminated and tempered glass of uncommon precision — for architecture, mobility and energy. Eleven ateliers, forty-four nations, certified to the world's most exacting standards." },
      { property: "og:title", content: "CREEZA SAFETY GLASS WORKS PVT.LTD | Master Glaziers for Architecture, Mobility & Solar" },
      { property: "og:description", content: "Precision measured in whispers. ±0.2mm." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const slideBase = "min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden";
const headlineCls = "font-sans font-bold tracking-[-0.03em] leading-[1.02]";
const headlineSize = { fontSize: "clamp(38px, 6.4vw, 92px)" };

function Home() {
  return (
    <div className="bg-[color:var(--paper)]">
      <Nav variant="light" />

      {/* SLIDE 1 — Hero */}
      <section className={slideBase + " text-[#ECE9E0]"} style={{ backgroundColor: "#0B1112" }}>
        <HeroSlider
          slides={[
            { src: heroImg, alt: "Mirrored glass tower against stormy sky" },
            { src: heroImg2, alt: "Golden-hour glass skyscraper" },
            { src: heroImg3, alt: "Blue-hour glass office facade" },
            { src: heroImg4, alt: "Curved parametric glass tower" },
          ]}
        />
        <div className="relative z-10 container-x pt-24">
          <Reveal>
            <div className="mono text-[11px] tracking-[0.22em] uppercase text-white/70">CREEZA SAFETY GLASS WORKS PVT.LTD</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className={headlineCls + " mt-8 text-white"} style={headlineSize}>
              Radiance. Perfected.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 text-white/80 max-w-xl text-base md:text-lg">
              The glass beneath the world's most exquisite architecture.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/services" className="btn-pill bg-white text-[color:var(--ink)] border-white">
                Discover the Collection
              </Link>
            </div>
          </Reveal>
        </div>
      </section>




      {/* SLIDE 3 — The Collection */}
      <section className={slideBase} style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-x py-24 w-full">
          <Reveal><div className="mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--steel)] text-center">The Collection</div></Reveal>
          <Reveal delay={120}>
            <h2 className={headlineCls + " mt-6 text-center"} style={{ fontSize: "clamp(34px, 5.2vw, 72px)" }}>
              Five industries.<br />One singular furnace.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 text-[color:var(--ink-soft)] max-w-xl text-center">
              Each line, wrought to the very same standard — refined for what it must endure.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Architectural", tag: "Skins for the skyline", img: archImg },
              { name: "Automotive", tag: "Vision, at 200 km/h", img: autoImg },
              { name: "Solar & Energy", tag: "Glass that generates", img: solarImg },
              { name: "Interior", tag: "Light, shaped", img: interiorImg },
              { name: "Fire & Security", tag: "Invisible, until called upon", img: fireImg },
            ].map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <Link to="/services" className="group block bg-[color:var(--card)] border border-[color:var(--line)] hover:border-[color:var(--ink)] transition-colors duration-500 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]" />
                  </div>
                  <div className="p-5">
                    <div className="mono text-[10px] tracking-[0.14em] uppercase text-[color:var(--steel)]">0{i + 1}</div>
                    <h3 className="font-serif text-xl mt-2">{c.name}</h3>
                    <p className="text-sm text-[color:var(--ink-soft)] mt-2">{c.tag}</p>
                    <span className="link-arrow mt-4">Discover more <ArrowRight size={12} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 4 — Featured Project */}
      <section className={slideBase + " text-[#ECE9E0]"}>
        <img src={meridianImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1200} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,17,18,0.4) 0%, rgba(11,17,18,0.85) 100%)" }} />
        <div className="relative z-10 container-x">
          <Reveal><div className="mono text-[11px] tracking-[0.22em] uppercase text-[#D2AC72]">Featured</div></Reveal>
          <Reveal delay={120}>
            <h2 className={headlineCls + " mt-6 text-[#ECE9E0]"} style={headlineSize}>The Meridian Tower.</h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 text-[#B9C0BE] max-w-xl">
              38,000m² of curtain wall. Not a single compromise upon the view.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <Link to="/projects" className="mt-10 inline-flex items-center gap-2 text-[#D2AC72] border-b border-transparent hover:border-[#D2AC72]">
              Witness the story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SLIDE 6 — Quote */}
      <section className={slideBase + " text-[#ECE9E0]"} style={{ backgroundColor: "#0B1112" }}>
        <div className="container-x max-w-4xl">
          <Reveal><div className="mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--steel)]">In Their Words</div></Reveal>
          <Reveal delay={120}>
            <blockquote className="mt-10 font-serif italic text-2xl md:text-4xl leading-snug">
              “They dispatched an engineer, not a salesman, to our very first meeting.”
            </blockquote>
          </Reveal>
          <Reveal delay={220}>
            <div className="mono text-[11px] uppercase tracking-[0.14em] mt-8 text-[color:var(--steel)]">
              Principal, Kessler + Wren Architecture
            </div>
          </Reveal>
        </div>
      </section>

      {/* SLIDE 7 — Closing CTA */}
      <section className={slideBase} style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-x">
          <Reveal><div className="mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--steel)]">Begin Here</div></Reveal>
          <Reveal delay={120}>
            <h2 className={headlineCls + " mt-6"} style={headlineSize}>Begin with a drawing.</h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 text-[color:var(--ink-soft)] max-w-xl">
              Send a section detail. An engineer will reply, by tomorrow.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-pill bg-[color:var(--ink)] text-[color:var(--paper)] border-[color:var(--ink)]">
                Request a Specification
              </Link>
              <Link to="/contact" className="link-arrow">
                Speak With Us <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}
