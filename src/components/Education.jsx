import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import Section from "./Section";
import { education } from "../data/profile";
import { asset } from "../lib/assets";

export default function Education() {
  return (
    <Section
      id="education"
      icon={<FaGraduationCap />}
      title="My"
      highlight="Education"
      subtitle="Education is not the learning of facts, but the training of the mind to think."
    >
      <div className="mx-auto grid max-w-4xl gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="glass flex flex-col gap-5 rounded-2xl p-6 transition-colors duration-300 hover:border-brand sm:flex-row sm:items-center"
          >
            <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white/5">
              <img
                src={asset(edu.image)}
                alt={edu.school}
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm text-brand-light">{edu.school}</p>
              <p className="text-xs text-muted">{edu.period}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
                {edu.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
