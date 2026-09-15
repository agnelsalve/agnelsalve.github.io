import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa";
import { profile } from "../data/profile";
import { asset } from "../lib/assets";

const iconMap = {
  linkedin: <FaLinkedinIn />,
  github: <FaGithub />,
  medium: <FaMedium />,
};

export default function Socials({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {profile.socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={s.name}
          className="grid h-11 w-11 place-items-center rounded-full border border-cardline bg-card text-lg text-oncard-soft transition-all duration-300 hover:-translate-y-1 hover:border-oncard-muted hover:text-oncard hover:shadow-glow"
        >
          {iconMap[s.icon] || (
            <img
              src={asset("assets/images/topmate.webp")}
              alt={s.name}
              className="h-5 w-5"
            />
          )}
        </a>
      ))}
    </div>
  );
}
