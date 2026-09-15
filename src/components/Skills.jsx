import { motion } from "framer-motion";
import { FaLaptopCode, FaCertificate } from "react-icons/fa";
import Section from "./Section";
import skills from "../data/skills.json";
import { asset } from "../lib/assets";

export default function Skills() {
  return (
    <Section
      id="skills"
      icon={<FaLaptopCode />}
      kicker="// 02 — stack"
      title="Skills &"
      highlight="Certifications"
      subtitle="Tools and technologies I work with across the data & cloud stack. Icons with a badge link to a verified certificate."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (i % 10) * 0.03 }}
            className="group relative flex flex-col items-center gap-2.5 rounded-2xl border border-cardline bg-card p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-oncard-muted hover:shadow-glow"
          >
            {/* fixed-height slot keeps every icon vertically aligned */}
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-canvas">
              <img
                src={asset(skill.icon)}
                alt={skill.name}
                loading="lazy"
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium text-oncard-soft">
              {skill.name}
            </span>

            {skill.certificate && (
              <a
                href={skill.certificate}
                target="_blank"
                rel="noreferrer"
                className="mt-0.5 inline-flex items-center gap-1.5 rounded-full border border-oncard-muted/40 bg-white/10 px-3 py-1 text-[11px] font-semibold text-oncard transition-colors hover:bg-oncard hover:text-ink"
                aria-label={`${skill.name} certificate`}
                title="View certificate"
              >
                <FaCertificate /> Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
