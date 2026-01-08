"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          About Me
        </h2>

        <p className="mt-6 max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed">
          I am a backend-focused full-stack developer with a strong foundation
          in Java and Spring Boot. I enjoy designing secure, scalable systems
          and writing clean, maintainable code. My experience spans REST API
          development, authentication, database integration, and modern
          frontend frameworks.
        </p>

        <p className="mt-4 max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed">
          I approach development with an architecture-first mindset and focus
          on solving real-world problems rather than building superficial
          features.
        </p>
      </motion.div>
    </section>
  );
}
