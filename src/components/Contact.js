"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Contact
        </h2>

        <p className="mt-6 text-sm sm:text-base text-gray-300">
          I&apos;m always open to exploring new opportunities and discussing how my skills can contribute to innovative projects. If you&apos;re a recruiter interested in my work or potential fit for your team, I&apos;d love to hear from you!
        </p>

        <div className="mt-6 space-y-3 text-sm">
          <p>
            Email:{" "}
            <a
              href="mailto:vineetkumar444777@gmail.com"
              className="underline underline-offset-4"
            >
              vineetkumar444777@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/vineet-javadev"
              target="_blank"
              className="underline underline-offset-4"
            >
              github.com/vineet-javadev
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/vineet-javadev/"
                target="_blank"
              className="underline underline-offset-4"
            >
                linkedin.com/in/vineet-javadev/
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
