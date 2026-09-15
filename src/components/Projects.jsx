import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaEye, FaCode } from "react-icons/fa";
import Section from "./Section";
import projects from "../data/projects.json";
import { projectCategories } from "../data/profile";
import { asset } from "../lib/assets";

const catLabel = {
  "data-engg": "data-eng",
  "data-science": "ml/ai",
  bi: "bi",
  analytics: "analytics",
  publ: "publication",
};

export default function Projects() {
  const [filter, setFilter] = useState("*");

  const filtered = useMemo(
    () =>
      filter === "*"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <Section
      id="work"
      icon={<FaLaptopCode />}
      kicker="// 04 — build log"
      title="Projects &"
      highlight="Publications"
      subtitle="A selection of projects, hackathons, publications and patents across data engineering, data science and BI."
    >
      {/* Filter buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              filter === cat.key
                ? "bg-gradient-to-r from-brand to-accent text-white shadow-glow"
                : "border border-cardline bg-card text-oncard-muted hover:border-oncard-muted hover:text-oncard"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-cardline bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-oncard-muted hover:shadow-glow"
            >
              <div className="relative aspect-video overflow-hidden bg-surface">
                <img
                  src={asset(`assets/images/projects/${project.image}.webp`)}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="tag-mono absolute left-3 top-3 rounded-md border border-cardline bg-card/85 px-2 py-1 backdrop-blur">
                  {catLabel[project.category] || project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-semibold text-oncard">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-oncard-muted">
                  {project.desc}
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href={project.links.view}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-oncard transition-colors hover:bg-oncard hover:text-ink"
                  >
                    <FaEye /> View
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-cardline px-3 py-2 text-xs font-semibold text-oncard-soft transition-colors hover:border-oncard-muted hover:text-oncard"
                  >
                    <FaCode /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
