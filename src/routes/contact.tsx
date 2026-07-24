import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Upload } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Two Doors | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { name: "description", content: "Architects: request a specification. Procurement: request a quotation. Regional offices and distributor locator worldwide." },
      { property: "og:title", content: "Contact | CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Lucerne", country: "Switzerland", role: "Global HQ · Coatings Atelier", tel: "+41 41 000 0000" },
  { city: "Stuttgart", country: "Germany", role: "Automotive Line", tel: "+49 711 000 0000" },
  { city: "Barcelona", country: "Spain", role: "Solar Line", tel: "+34 93 000 0000" },
  { city: "Detroit", country: "United States", role: "North American HQ", tel: "+1 313 000 0000" },
  { city: "Singapore", country: "Singapore", role: "APAC HQ", tel: "+65 6000 0000" },
  { city: "Copenhagen", country: "Denmark", role: "Northern Europe Sales", tel: "+45 33 00 00 00" },
];

function ContactPage() {
  const [path, setPath] = useState<"A" | "B">("A");

  return (
    <div className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-x">
          <Reveal><div className="mono eyebrow eyebrow-rule">Contact</div></Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif mt-8" style={{ fontSize: "clamp(38px, 5.4vw, 72px)" }}>
              Two doors, each its own welcome.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-[color:var(--ink-soft)] max-w-2xl">
              The architect (a conversation of specification) is parted from procurement (a matter of quotation) at the very threshold — the single most consequential decision on the site, since each patron desires a different pace, and a different depth of detail.
            </p>
          </Reveal>

          {/* Path selector */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {([
              { k: "A", title: "Request a Specification", who: "For architects & designers", promise: "Reply within one business day, from an engineer." },
              { k: "B", title: "Request a Quotation", who: "For procurement & fabricators", promise: "Same-day acknowledgement from your regional desk." },
            ] as const).map((opt) => (
              <button
                key={opt.k}
                onClick={() => setPath(opt.k)}
                className={"text-left p-8 border transition-all duration-500 " + (path === opt.k ? "border-[color:var(--ink)] bg-[color:var(--card)]" : "border-[color:var(--line)] bg-transparent hover:border-[color:var(--ink-soft)]")}
              >
                <div className="mono text-[10px] tracking-[0.14em] uppercase text-[color:var(--steel)]">Path {opt.k}</div>
                <h3 className="font-serif text-2xl mt-3">{opt.title}</h3>
                <p className="text-sm text-[color:var(--ink-soft)] mt-2">{opt.who}</p>
                <p className="mono text-xs text-[color:var(--glass)] mt-4">{opt.promise}</p>
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={(e) => { e.preventDefault(); alert("Submitted (demo)."); }} className="mt-12 bg-[color:var(--card)] border border-[color:var(--line)] p-8 md:p-10">
            {path === "A" ? (
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Project name" name="project" />
                <Field label="Stage" name="stage" as="select" options={["Concept", "Design Development", "Construction Documents"]} />
                <Field label="Performance ambitions (U-value, Lt, acoustic)" name="perf" full />
                <Field label="Your name" name="name" />
                <Field label="Email" name="email" type="email" />
                <div className="md:col-span-2">
                  <Label>Section detail (PDF / DWG)</Label>
                  <label className="mt-2 flex items-center gap-3 border border-dashed border-[color:var(--line)] px-4 py-6 cursor-pointer hover:border-[color:var(--ink)]">
                    <Upload size={16} className="text-[color:var(--steel)]" />
                    <span className="text-sm text-[color:var(--ink-soft)]">Attach a file</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Product line" name="line" as="select" options={["Architectural", "Automotive", "Solar & Energy", "Interior", "Fire & Security"]} />
                <Field label="Quantity (m² or units)" name="qty" />
                <Field label="Delivery region" name="region" />
                <Field label="Timeline" name="time" />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" />
              </div>
            )}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="mono text-[11px] text-[color:var(--steel)] uppercase tracking-[0.14em]">
                {path === "A" ? "Routes to Technical Advisory" : "Routes to Regional Sales Desk"}
              </p>
              <button type="submit" className="btn-solid">Send</button>
            </div>
          </form>

          {/* Regional offices */}
          <div className="mt-24">
            <div className="mono eyebrow eyebrow-rule">Regional Offices</div>
            <h2 className="font-serif mt-6 text-4xl">Six of eleven ateliers, at your door.</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {offices.map((o) => (
                <div key={o.city} className="p-6 border border-[color:var(--line)] bg-[color:var(--card)]">
                  <div className="mono text-[10px] tracking-[0.14em] uppercase text-[color:var(--steel)]">{o.country}</div>
                  <h3 className="font-serif text-xl mt-2">{o.city}</h3>
                  <p className="text-sm text-[color:var(--ink-soft)] mt-1">{o.role}</p>
                  <p className="mono text-xs mt-3 text-[color:var(--ink)]">{o.tel}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Distributor locator (static placeholder) */}
          <div className="mt-20 border border-[color:var(--line)] p-6 md:p-10 bg-[color:var(--paper-2)]">
            <div className="mono eyebrow eyebrow-rule">Distributor Locator</div>
            <p className="mt-4 text-[color:var(--ink-soft)] max-w-2xl">
              Search a country or postal code below to reach an authorised CREEZA SAFETY GLASS WORKS PVT.LTD distributor. No form gate, no signup.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <input placeholder="City or postal code" className="px-4 py-3 bg-[color:var(--card)] border border-[color:var(--line)] text-sm flex-1 min-w-[240px]" />
              <button className="btn-ghost">Locate</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]">{children}</label>;
}

function Field({ label, name, type = "text", as, options, full }: { label: string; name: string; type?: string; as?: "select"; options?: string[]; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <Label>{label}</Label>
      {as === "select" ? (
        <select name={name} className="mt-2 w-full px-3 py-3 bg-transparent border border-[color:var(--line)] text-sm focus:border-[color:var(--ink)] outline-none">
          {options?.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input name={name} type={type} className="mt-2 w-full px-3 py-3 bg-transparent border border-[color:var(--line)] text-sm focus:border-[color:var(--ink)] outline-none" />
      )}
    </div>
  );
}
