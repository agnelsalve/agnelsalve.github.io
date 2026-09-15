import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "blogs", label: "Blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-light shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Agnel<span className="gradient-text">Salve</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                {/* Underline is absolutely positioned so it never shifts the label */}
                <span
                  className={`pointer-events-none absolute inset-x-3 bottom-0.5 h-0.5 origin-center rounded-full bg-gradient-to-r from-brand to-accent transition-transform duration-300 ${
                    active === link.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-2xl text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass-light border-t border-line md:hidden">
          <ul className="container-page flex flex-col py-3">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    active === link.id
                      ? "bg-surface text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
