import { motion } from "framer-motion";

// Section wrapper with a consistent animated heading.
export default function Section({ id, icon, kicker, title, highlight, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          {kicker && <span className="kicker mb-3">{kicker}</span>}
          <h2 className="flex items-center gap-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {icon && <span className="text-brand-light">{icon}</span>}
            <span>
              {title} <span className="gradient-text">{highlight}</span>
            </span>
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
              {subtitle}
            </p>
          )}
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-brand to-accent" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
