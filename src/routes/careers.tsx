import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/careers-page-hero.jpg";
import lifeAtCreezaVideo from "@/assets/Visual.mp4";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Great People, Great Opportunities | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "Join CREEZA SAFETY GLASS WORKS PVT.LTD. Full-time benefits, training & development, and a culture built around safety and craft." },
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

const benefits = [
  "Medical, dental, vision, life, and disability insurance.",
  "Retirement savings plan.",
  "A dynamic wellness program, including on-site health screenings and wellness initiatives.",
];

const training = ["Structured training and development programs for personal and professional growth."];

const environment = [
  "Built around safety and professionalism.",
  "Individual and team accomplishments are recognized and rewarded.",
  "We celebrate employee milestones, exceptional performance, and team safety goals.",
];

const terms = [
  "We accept resumes and applications only for open positions. Your application must identify the position you are applying for.",
  "CREEZA SAFETY GLASS WORKS PVT.LTD does not send unsolicited job offers.",
  "Check the current job postings, or contact the relevant atelier, for opportunities — including internships, production, office, and technical roles.",
  "You may apply for a position online or in person at the relevant facility.",
  "Include relevant experience, accomplishments, skills, training, and education that support your application.",
  "Shortlisted candidates will be contacted for an interview.",
  "New hires may be required to complete a post-offer screening, as applicable to the role.",
];

// Media slots render as labeled placeholders until real photos/videos are supplied.
// Once the admin panel's per-page content manager ships, each slot should resolve
// to a `page_content` record keyed by page_slug "careers" instead of this static array.
const galleryMedia = [
  { type: "photo" as const, label: "Team at work" },
  { type: "photo" as const, label: "Atelier floor" },
  { type: "video" as const, label: "Life at Creeza" },
  { type: "photo" as const, label: "Team celebration" },
];

function MediaPlaceholder({ type, label, className = "" }: { type: "photo" | "video"; label: string; className?: string }) {
  return (
    <div
      className={`border border-dashed border-[color:var(--line)] bg-[color:var(--card)] flex flex-col items-center justify-center gap-2 text-center ${className}`}
    >
      <div className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]">
        {type === "video" ? "Video" : "Photo"} · pending
      </div>
      <div className="text-sm text-[color:var(--ink-soft)]">{label}</div>
    </div>
  );
}

// Plays once scrolled into view and pauses once it scrolls out, rather than autoplaying immediately on page load.
function ScrollPlayVideo({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      className={`object-cover ${className}`}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}

function CareersPage() {
  return (
    <div className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-x">
          {/* Team Creeza */}
          <Reveal><div className="mono eyebrow eyebrow-rule">Team Creeza</div></Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif mt-8" style={{ fontSize: "clamp(38px, 5.4vw, 72px)" }}>
              Great people.<br />Great opportunities.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-[color:var(--ink-soft)] max-w-2xl">
              CREEZA SAFETY GLASS WORKS PVT.LTD offers a complete range of high-performance toughened and laminated glass solutions. We are a growing company that offers our people challenging opportunities and work that encourages learning and growth — because great people deserve great opportunities.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <img
              src={heroImg}
              alt="Creeza glazier fitting an insulated glass unit"
              className="mt-10 w-full aspect-[21/9] object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>

        {/* Job Openings */}
        <div className="container-x mt-24">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <Reveal><div className="mono eyebrow eyebrow-rule">Team Creeza</div></Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif mt-6 text-4xl">Job Openings</h2>
              </Reveal>
              <Reveal delay={160}>
                <h3 className="font-serif mt-2 text-2xl text-[color:var(--ink-soft)]">Join us!</h3>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-4 text-[color:var(--ink-soft)] max-w-2xl">
                  Browse currently available CREEZA SAFETY GLASS WORKS PVT.LTD job listings. Applications are accepted only for posted positions.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <Link to="/contact" className="mt-8 inline-flex btn-solid">Search Openings</Link>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <ScrollPlayVideo src={lifeAtCreezaVideo} label="Life at Creeza" className="w-full aspect-video md:justify-self-end" />
            </Reveal>
          </div>

          <div className="mt-12 border border-[color:var(--line)] bg-[color:var(--card)]">
            <ul className="divide-y divide-[color:var(--line)]">
              {openings.map((o) => (
                <li key={o.role} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <div className="font-serif text-lg">{o.role}</div>
                  <div className="mono text-[11px] text-[color:var(--steel)]">{o.atelier} · {o.discipline} · {o.lang}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Working at Creeza — Employment */}
        <div className="container-x mt-24">
          <Reveal><div className="mono eyebrow eyebrow-rule">Working at Creeza</div></Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif mt-6 text-4xl">Employment</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <Reveal delay={160}>
              <div>
                <h3 className="font-serif text-2xl">Full-time Benefits</h3>
                <ul className="mt-4 space-y-2 text-[color:var(--ink-soft)]">
                  {benefits.map((b) => (
                    <li key={b} className="pl-4 border-l border-[color:var(--line)]">{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div>
                <h3 className="font-serif text-2xl">Training &amp; Development</h3>
                <ul className="mt-4 space-y-2 text-[color:var(--ink-soft)]">
                  {training.map((t) => (
                    <li key={t} className="pl-4 border-l border-[color:var(--line)]">{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Life at Creeza — Culture */}
        <div className="container-x mt-24">
          <Reveal><div className="mono eyebrow eyebrow-rule">Life at Creeza</div></Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif mt-6 text-4xl">Culture</h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10">
              <h3 className="font-serif text-2xl">Environment</h3>
              <ul className="mt-4 space-y-2 text-[color:var(--ink-soft)] max-w-2xl">
                {environment.map((e) => (
                  <li key={e} className="pl-4 border-l border-[color:var(--line)]">{e}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryMedia.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <MediaPlaceholder type={m.type} label={m.label} className="aspect-square" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="container-x mt-24">
          <Reveal><div className="mono eyebrow eyebrow-rule">Terms and Conditions</div></Reveal>
          <Reveal delay={100}>
            <ul className="mt-8 space-y-3 text-sm text-[color:var(--ink-soft)] max-w-2xl">
              {terms.map((t) => (
                <li key={t} className="pl-4 border-l border-[color:var(--line)]">{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
