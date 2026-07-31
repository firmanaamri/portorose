import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { href: "#karya", label: "Karya" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#arsip", label: "Arsip" },
  { href: "#tentang", label: "Tentang Saya" },
  { href: "#kontak", label: "Kontak" },
];

// Separate page-level route links
const ROUTE_LINKS = [
  { to: "/berita", label: "Berita" },
];

export default function Masthead() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  const close = () => setOpen(false);

  // Detect which section is currently in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(({ href }) => href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Trigger when section crosses ~30% from the top of viewport
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-newsprint/95 backdrop-blur-sm border-b border-ink/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display font-extrabold text-lg tracking-wide hover:text-press-red transition-colors">rose.</Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative font-type text-[11px] uppercase tracking-widest transition-colors pb-0.5 ${
                    isActive
                      ? "text-press-red border-b-2 border-press-red"
                      : "hover:text-press-red"
                  }`}
                >
                  {label}
                </a>
              );
            })}
            {/* Divider */}
            <span className="w-px h-4 bg-ink/20" />
            {ROUTE_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative font-type text-[11px] uppercase tracking-widest transition-colors pb-0.5 hover:text-press-red"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side: status badge + hamburger */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-2 font-type text-[11px] uppercase tracking-widest text-pencil">
              <span className="w-1.5 h-1.5 rounded-full bg-press-red motion-safe:animate-pulse" />
              Open for Work
            </span>

            {/* Hamburger button — mobile only */}
            <button
              id="hamburger-btn"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
            >
              {/* Three bars that animate into X */}
              <span
                className={`block h-[2px] bg-ink rounded-full transition-all duration-300 origin-center ${
                  open ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
                }`}
              />
              <span
                className={`block h-[2px] bg-ink rounded-full transition-all duration-300 ${
                  open ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[2px] bg-ink rounded-full transition-all duration-300 origin-center ${
                  open ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-40 bg-newsprint/98 backdrop-blur-md flex flex-col justify-center px-8 transition-all duration-300 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map(({ href, label }, i) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={href}
                href={href}
                onClick={close}
                className={`font-display font-extrabold text-3xl uppercase tracking-tight transition-all duration-300 ${
                  isActive ? "text-press-red" : "hover:text-press-red"
                } ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              >
                {label}
              </a>
            );
          })}
          {/* Divider */}
          <div className="w-12 h-px bg-ink/20 my-1" />
          {ROUTE_LINKS.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              className={`font-display font-extrabold text-3xl uppercase tracking-tight transition-all duration-300 hover:text-press-red ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: open ? `${(NAV_LINKS.length + 1 + i) * 60}ms` : "0ms" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 border-t border-ink/15 pt-6 flex items-center gap-2 font-type text-[11px] uppercase tracking-widest text-pencil">
          <span className="w-1.5 h-1.5 rounded-full bg-press-red motion-safe:animate-pulse" />
          Open for Work — 2026
        </div>
      </div>
    </>
  );
}