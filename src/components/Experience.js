"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Experience
        </h2>

        <div className="mt-10 border border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium">
            Java Developer Intern
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Cepta InfoTech Pvt. Ltd., Noida
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>• Built strong fundamentals in Core and Advanced Java</li>
            <li>• Developed basic user interfaces using Java Swing</li>
            <li>• Gained introductory experience with Spring Boot</li>
            <li>• Integrated MySQL with Java applications</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
