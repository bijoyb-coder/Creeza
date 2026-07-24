import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import creezaLogo from "@/assets/Creeza_logo.png";

const links = [
  { to: "/services", label: "Services" },
  { to: "/innovation", label: "Innovation" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = variant === "dark";
  const bg = dark
    ? scrolled ? "bg-[#0B1112]/85 backdrop-blur-md" : "bg-transparent"
    : scrolled ? "bg-[color:var(--paper)]/85 backdrop-blur-md" : "bg-transparent";
  const text = dark ? "text-[#ECE9E0]" : "text-[color:var(--ink)]";
  const border = scrolled ? (dark ? "border-white/10" : "border-[color:var(--line)]") : "border-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b ${border} ${bg} ${text} transition-colors duration-500`}>
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-4 leading-none" style={{ letterSpacing: "0.06em" }}>
          <img src={creezaLogo} alt="Creeza Element Tuff logo" className="h-16 w-16 object-contain shrink-0" />
          <span className="font-serif text-2xl tracking-tight">Creeza Safety Glass</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] opacity-80 hover:opacity-100 transition-opacity"
              activeProps={{ className: "text-[13px] opacity-100 border-b border-[color:var(--bronze)]" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact" className={dark ? "btn-pill" : "btn-solid"}>
            Request a Specification
          </Link>
        </div>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className={`lg:hidden border-t ${dark ? "border-white/10 bg-[#0B1112]" : "border-[color:var(--line)] bg-[color:var(--paper)]"}`}>
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-solid self-start mt-2">
              Request a Specification
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
