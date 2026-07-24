import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import creezaLogo from "@/assets/Creeza_logo.png";

const productLinks = [
  { to: "/architectural-glass", label: "Architectural Glass" },
  { to: "/speciality-glass", label: "Speciality Glass" },
  { to: "/suntuitive-glass", label: "Suntuitive Glass" },
] as const;

const links = [
  { to: "/services", label: "Services" },
  { to: "/innovation", label: "Innovation" },
  { to: "/projects", label: "Projects" },
  { to: "/why-creeza", label: "Why Creeza" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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
  const panelBg = dark ? "border-white/10 bg-[#0B1112]" : "border-[color:var(--line)] bg-[color:var(--paper)]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b ${border} ${bg} ${text} transition-colors duration-500`}>
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-4 leading-none" style={{ letterSpacing: "0.06em" }}>
          <img src={creezaLogo} alt="Creeza Element Tuff logo" className="h-16 w-16 object-contain shrink-0" />
          <span className="font-serif text-2xl tracking-tight">Creeza Safety Glass</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            to="/services"
            className="text-[13px] opacity-80 hover:opacity-100 transition-opacity"
            activeProps={{ className: "text-[13px] opacity-100 border-b border-[color:var(--bronze)]" }}
          >
            Services
          </Link>
          <Link
            to="/innovation"
            className="text-[13px] opacity-80 hover:opacity-100 transition-opacity"
            activeProps={{ className: "text-[13px] opacity-100 border-b border-[color:var(--bronze)]" }}
          >
            Innovation
          </Link>
          <Link
            to="/projects"
            className="text-[13px] opacity-80 hover:opacity-100 transition-opacity"
            activeProps={{ className: "text-[13px] opacity-100 border-b border-[color:var(--bronze)]" }}
          >
            Projects
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[13px] opacity-80 hover:opacity-100 transition-opacity"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((v) => !v)}
            >
              Product List
              <ChevronDown size={13} className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className={`absolute left-0 top-full pt-3 w-56`}>
                <div className={`border ${panelBg} shadow-lg py-2`}>
                  {productLinks.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block px-4 py-2.5 text-[13px] opacity-80 hover:opacity-100 transition-opacity"
                      onClick={() => setProductsOpen(false)}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {links.slice(3).map((l) => (
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
        <div className={`lg:hidden border-t ${panelBg}`}>
          <div className="container-x py-6 flex flex-col gap-4">
            <Link to="/services" onClick={() => setOpen(false)} className="text-sm">Services</Link>
            <Link to="/innovation" onClick={() => setOpen(false)} className="text-sm">Innovation</Link>
            <Link to="/projects" onClick={() => setOpen(false)} className="text-sm">Projects</Link>
            <div>
              <button
                className="flex items-center gap-1 text-sm"
                onClick={() => setMobileProductsOpen((v) => !v)}
              >
                Product List
                <ChevronDown size={14} className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProductsOpen && (
                <div className="mt-3 flex flex-col gap-3 pl-4">
                  {productLinks.map((p) => (
                    <Link key={p.to} to={p.to} onClick={() => setOpen(false)} className="text-sm opacity-80">
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {links.slice(3).map((l) => (
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
