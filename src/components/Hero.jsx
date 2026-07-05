import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { profile } from "../data/profile";
import { asset } from "../lib/assets";
import { useTypingEffect } from "../hooks/useTypingEffect";
import ParticleField from "./ParticleField";
import Socials from "./Socials";

export default function Hero() {
  const typed = useTypingEffect(profile.typingWords);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <ParticleField />

      <div className="container-page relative z-10 grid items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="chip mb-5 border-brand/40 text-brand-light">
            👋 Hi there, welcome to my portfolio
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            I'm {profile.firstName}{" "}
            <span className="gradient-text animate-gradient-x">
              {profile.lastName}
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted sm:text-xl">
            I am into{" "}
            <span className="font-semibold text-white">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-0.5 translate-y-1 bg-accent animate-blink" />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#about" className="btn-primary">
              About Me <FaArrowDown />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <HiOutlineDocumentText className="text-lg" /> Resume
            </a>
          </div>

          <Socials className="mt-8" />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand/40 to-accent/30 blur-2xl" />
            <img
              src={asset(profile.profileImage)}
              alt={profile.name}
              className="relative h-64 w-64 rounded-full border-2 border-line object-cover shadow-glow animate-float sm:h-80 sm:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
