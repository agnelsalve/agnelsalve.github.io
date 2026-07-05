import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import Section from "./Section";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <Section id="experience" icon={<FaBriefcase />} title="Work" highlight="Experience">
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand via-accent to-transparent sm:left-1/2" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0
                  ? "sm:ml-auto sm:pl-12"
                  : "sm:mr-auto sm:pr-12 sm:text-right"
              }`}
            >
              {/* Dot */}
              <span
                className={`absolute top-2 grid h-8 w-8 place-items-center rounded-full border border-brand bg-base text-xs font-bold text-brand-light left-0 ${
                  i % 2 === 0 ? "sm:-left-4" : "sm:-right-4 sm:left-auto"
                }`}
              >
                {experience.length - i}
              </span>

              <div className="glass rounded-2xl p-5 transition-colors duration-300 hover:border-brand">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {job.period}
                </span>
                <h3 className="mt-1 font-display text-base font-semibold text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{job.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
