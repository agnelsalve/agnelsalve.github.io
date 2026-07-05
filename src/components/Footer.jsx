import { FaHeart, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../data/profile";
import Socials from "./Socials";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "blogs", label: "Blogs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-white">
            Agnel<span className="gradient-text">Salve</span>
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Thank you for visiting my portfolio. Let's connect and build
            something impactful together. Keep Rising 🚀
          </p>
          <Socials className="mt-5" />
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-muted transition-colors hover:text-brand-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-brand-light" />
              <a
                href={`mailto:${profile.contact.email}`}
                className="hover:text-white"
              >
                {profile.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-brand-light" />
              {profile.contact.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-sm text-muted">
        Designed with{" "}
        <FaHeart className="inline animate-pulse text-brand" /> by{" "}
        <a
          href={profile.socials[0].url}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-brand-light hover:text-white"
        >
          {profile.name}
        </a>
      </div>
    </footer>
  );
}
