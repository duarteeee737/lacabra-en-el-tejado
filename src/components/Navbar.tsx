import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "Carta" },
  { to: "/local", label: "El Local" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="La Cabra en el Tejado"
            className={`h-10 w-10 transition-all ${scrolled ? "" : "invert brightness-0 invert"}`}
            style={!scrolled ? { filter: "brightness(0) invert(1)" } : {}}
          />
          <span
            className={`font-display text-lg leading-tight ${
              scrolled ? "text-foreground" : "text-cream"
            }`}
          >
            La Cabra
            <span className="block text-[10px] tracking-[0.3em] uppercase opacity-70">
              en el Tejado
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-cream/90"
              }`}
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+34910333359"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition shadow-soft"
          >
            Reservar
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+34910333359" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium text-center">
              Reservar · 910 33 33 59
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
