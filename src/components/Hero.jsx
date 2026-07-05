import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { profile } from "../data/profile";
import { asset } from "../lib/assets";
import { useTypingEffect } from "../hooks/useTypingEffect";
import Socials from "./Socials";
import PipelineGraph from "./PipelineGraph";
import CornerFrame from "./CornerFrame";

const stats = [
  { label: "yrs exp", value: "3+" },
  { label: "cloud", value: "AWS · Azure" },
  { label: "ai", value: "LLMs · RAG" },
  { label: "big data", value: "Spark · Kafka" },
];

export default function Hero() {
  const typed = useTypingEffect(profile.typingWords);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="container-page relative z-10 grid items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="chip mb-5 border-brand/40 font-mono text-xs text-brand-light">
            <span className="text-accent">$ whoami</span> › Data Engineer · AI/ML
            Engineer · Cloud Solutions
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            I'm {profile.firstName}{" "}
            <span className="gradient-text animate-gradient-x">
              {profile.lastName}
            </span>
          </h1>

          <p className="mt-4 text-lg text-muted sm:text-xl">
            I architect{" "}
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

          {/* Stat chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {stats.map((s) => (
              <span key={s.label} className="stat-chip">
                <span className="text-brand-light">{s.value}</span>
                <span className="text-muted/70">{s.label}</span>
              </span>
            ))}
          </div>

          <Socials className="mt-8" />
        </motion.div>

        {/* Profile console panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand/30 to-accent/20 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-2xl p-4">
              <CornerFrame />

              {/* panel header */}
              <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-muted">
                <span className="flex items-center gap-2 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  online
                </span>
                <span>~/agnel.png</span>
              </div>

              {/* photo */}
              <div className="overflow-hidden rounded-xl border border-line">
                <img
                  src={asset(profile.profileImage)}
                  alt={profile.name}
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* pipeline strip */}
              <div className="mt-4">
                <PipelineGraph />
              </div>

              {/* metrics footer */}
              <div className="mt-1 flex items-center justify-between font-mono text-[11px] text-muted">
                <span>
                  status <span className="text-emerald-400">● deployed</span>
                </span>
                <span>
                  uptime <span className="text-gray-300">99.9%</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
