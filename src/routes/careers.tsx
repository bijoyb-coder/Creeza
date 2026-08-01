import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ApplyModal } from "@/components/ApplyModal";
import heroImg from "@/assets/careers-page-hero.jpg";
import lifeAtCreezaVideo from "@/assets/Visual.mp4";
import cultureImg from "@/assets/careers2-large.webp";

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
  {
    role: "Coating Engineer",
    atelier: "Lucerne · CH",
    discipline: "R&D",
    lang: "DE / EN",
    description: "Develop and refine low-E and solar-control coatings on our in-house magnetron sputter line, working alongside the chemists who formulate every finish from scratch.",
  },
  {
    role: "Curtain-Wall Advisor",
    atelier: "Singapore · SG",
    discipline: "Technical Advisory",
    lang: "EN",
    description: "Sit with architects and facade consultants through design development, translating performance targets into buildable curtain-wall specifications.",
  },
  {
    role: "Furnace Line Operator",
    atelier: "Stuttgart · DE",
    discipline: "Production",
    lang: "DE",
    description: "Run and monitor the tempering furnace to hold tolerance across every pane, with structured training on quench cycles and quality checks.",
  },
  {
    role: "BIPV Product Manager",
    atelier: "Barcelona · ES",
    discipline: "Solar",
    lang: "ES / EN",
    description: "Own the roadmap for our building-integrated photovoltaic glass line, from early-stage pilots through to certified production.",
  },
  {
    role: "Automotive Quality Engineer",
    atelier: "Detroit · US",
    discipline: "Automotive",
    lang: "EN",
    description: "Lead ECE R43 compliance testing and root-cause analysis across our automotive glazing line, working directly with OEM quality teams.",
  },
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

function JobList() {
  const [openRole, setOpenRole] = useState<string | null>(null);
  const [applyRole, setApplyRole] = useState<string | null>(null);

  return (
    <div className="mt-12 border border-[color:var(--line)] bg-[color:var(--card)]">
      <ul className="divide-y divide-[color:var(--line)]">
        {openings.map((o) => {
          const open = openRole === o.role;
          return (
            <li key={o.role}>
              <button
                onClick={() => setOpenRole(open ? null : o.role)}
                className="w-full flex items-center justify-between gap-6 p-6 text-left"
                aria-expanded={open}
              >
                <span className="font-serif text-lg">{o.role}</span>
                <span className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--steel)] shrink-0">
                  {open ? "Hide Details" : "Show Details"}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </span>
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-500"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <div className="px-6 pb-6">
                    <div className="mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--steel)]">
                      {o.atelier} · {o.discipline} · {o.lang}
                    </div>
                    <p className="mt-3 text-sm text-[color:var(--ink-soft)] max-w-2xl">{o.description}</p>
                    <button onClick={() => setApplyRole(o.role)} className="mt-5 btn-solid">Apply</button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <ApplyModal role={applyRole ?? ""} open={applyRole !== null} onClose={() => setApplyRole(null)} />
    </div>
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
            </div>
            <Reveal delay={160}>
              <ScrollPlayVideo src={lifeAtCreezaVideo} label="Life at Creeza" className="w-full aspect-video md:justify-self-end" />
            </Reveal>
          </div>

          <Reveal delay={280}>
            <JobList />
          </Reveal>
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

          <Reveal delay={220}>
            <img
              src={cultureImg}
              alt="Creeza glazier inspecting glass on the production line"
              className="mt-12 w-full aspect-[21/9] object-cover"
              loading="lazy"
            />
          </Reveal>
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
