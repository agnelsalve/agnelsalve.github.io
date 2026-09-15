import { motion } from "framer-motion";
import { FaBlog, FaLinkedin, FaMedium, FaArrowRight } from "react-icons/fa";
import Section from "./Section";
import blogData from "../data/blogs.json";
import { asset } from "../lib/assets";

const platformIcon = {
  linkedin: <FaLinkedin className="text-[#0a66c2]" />,
  medium: <FaMedium className="text-oncard" />,
};

export default function Blogs() {
  const blogs = blogData.blogs || [];

  return (
    <Section
      id="blogs"
      icon={<FaBlog />}
      kicker="// 06 — writing"
      title="Blogs &"
      highlight="Posts"
      subtitle="Sharing knowledge and experiences through writing is a way to help others grow."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, i) => (
          <motion.a
            key={blog.title}
            href={blog.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-cardline bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-oncard-muted hover:shadow-glow"
          >
            <div className="relative aspect-video overflow-hidden bg-surface">
              <img
                src={asset(blog.image)}
                alt={blog.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-card/85 text-lg backdrop-blur">
                {platformIcon[blog.platform]}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-base font-semibold leading-snug text-oncard">
                {blog.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-oncard-muted">
                {blog.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-oncard">
                Read more{" "}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
