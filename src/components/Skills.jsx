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
            className="group relative flex flex-col items-center gap-3 rounded-2xl border border-line bg-card/50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-glow"
          >
            <img
              src={asset(skill.icon)}
              alt={skill.name}
              loading="lazy"
              className="h-11 w-11 object-contain"
            />
            <span className="text-sm font-medium text-gray-200">
              {skill.name}
            </span>

            {skill.certificate && (
              <a
                href={skill.certificate}
                target="_blank"
                rel="noreferrer"
                className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-brand/20 text-xs text-brand-light opacity-0 transition-opacity group-hover:opacity-100"
                aria-label={`${skill.name} certificate`}
                title="View certificate"
              >
                <FaCertificate />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
