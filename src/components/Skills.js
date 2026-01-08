"use client";

import { motion } from "framer-motion";

const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "REST APIs",
    "JWT Authentication",
  ],
  Database: [
    "MySQL",
    "JPA / Hibernate",
  ],
  Tools: [
    "Git",
    "Swagger / OpenAPI",
    "Postman",
    "Maven",
  ],
  Frontend: [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ]
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Skills
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border border-gray-800 rounded-lg p-6"
            >
              <h3 className="font-medium mb-4">{category}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {items.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
