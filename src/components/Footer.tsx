import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--paper-2)] text-[color:var(--ink)]">
      <div className="container-x py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-2xl tracking-widest">CREEZA SAFETY GLASS WORKS PVT.LTD</div>
          <p className="mono text-xs mt-4 text-[color:var(--steel)] leading-relaxed">
            Master glaziers since 1962.<br />Lucerne · Switzerland
          </p>
        </div>
        <div>
          <div className="eyebrow eyebrow-rule mb-4">Collection</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services">Architectural</Link></li>
            <li><Link to="/services">Automotive</Link></li>
            <li><Link to="/services">Solar & Energy</Link></li>
            <li><Link to="/services">Interior</Link></li>
            <li><Link to="/services">Fire & Security</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow eyebrow-rule mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/innovation">Innovation</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow eyebrow-rule mb-4">Ateliers</div>
          <ul className="space-y-2 text-sm mono text-xs">
            <li>Lucerne · CH</li>
            <li>Stuttgart · DE</li>
            <li>Lyon · FR</li>
            <li>Barcelona · ES</li>
            <li>Detroit · US</li>
            <li>Singapore · SG</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--line)]">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 mono text-[11px] text-[color:var(--steel)]">
          <div>© 1962–2026 CREEZA SAFETY GLASS WORKS PVT.LTD AG · ISO 9001 · ISO 14001 · EN 1279 · ASTM E1886</div>
          <div className="flex gap-6">
            <a href="#">Legal</a>
            <a href="#">Privacy</a>
            <a href="#">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
