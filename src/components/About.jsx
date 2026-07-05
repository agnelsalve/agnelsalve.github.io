import { motion } from "framer-motion";
import { FaUserAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import Section from "./Section";
import { about, profile } from "../data/profile";

// Render the strings that contain <strong> accents from the original content.
const html = (s) => ({ dangerouslySetInnerHTML: { __html: s } });

export default function About() {
  return (
    <Section
      id="about"
      icon={<FaUserAlt />}
      kicker="// 01 — profile"
      title="About"
      highlight="Me"
    >
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-[15px] leading-relaxed text-gray-300 lg:col-span-3"
        >
          <p {...html(about.intro)} />
          {about.paragraphs.map((p, i) => (
            <p key={i} {...html(p)} />
          ))}

          <div className="glass rounded-2xl p-5">
            <h3 className="mb-3 font-display text-lg font-semibold text-white">
              🧪 Key Projects & Research
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {about.research.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          <p className="pt-2 font-semibold text-brand-light">
            {about.closer}
          </p>
        </motion.div>

        {/* Side card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <div className="glass sticky top-24 rounded-2xl p-6">
            <h3 className="mb-4 font-display text-lg font-semibold text-white">
              💭 Let's connect if you're
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {about.connect.map((c, i) => (
                <li key={i} className="flex gap-2">
                  {c}
                </li>
              ))}
            </ul>

            <div className="my-5 h-px bg-line" />

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-brand-light" />
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="hover:text-white"
                >
                  {profile.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-brand-light" />
                <a
                  href={`mailto:${profile.contact.personalEmail}`}
                  className="hover:text-white"
                >
                  {profile.contact.personalEmail}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-brand-light" />
                {profile.contact.location}
              </li>
            </ul>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-6 w-full justify-center"
            >
              <HiOutlineDocumentText className="text-lg" /> View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
