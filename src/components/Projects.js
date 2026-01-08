"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Portal (Backend)",
    description:
      "A Spring Boot backend system for managing users and projects with secure authentication and role-based access control.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Swagger"],
    github: "https://github.com/vineet-javadev/Project-Portal-Backend",
    live: ""
  },
  {
    title: "FarmGenius (Full Stack)",
    description:
      "A smart agriculture platform providing crop advisory, market insights, and farming-related information through a full-stack architecture.",
    tech: ["React", "Tailwind CSS", "Express.js", "Django", "MySQL"],
    github: "https://github.com/vineet-javadev/FarmGenius-FullStack-Project",
    live: ""
  },
  {
    title: "ExamBeam",
    description:
      "An AI-assisted exam preparation web application that generates questions and supports focused, last-minute revision.",
    tech: ["Angular", "TypeScript", "Tailwind CSS", "AI APIs"],
    github: "https://github.com/vineet-javadev/ExamBeam",
    live: "https://exambeam.vercel.app/"
  },{
    title: "AI Generative Zeta",
    description: "AI Generative Zeta is a AI based query resolver web application. Test project to know how to work with AI models.",
    tech: ["Java","Spring Boot","Angular","Mistral LLM"],
    github: "",
    live: "https://ai-generative-zeta-v2.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Projects
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-medium">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border border-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.live.length > 0 ? 
              <a
                href={project.live}
                target="_blank"
                className="mt-6 text-sm text-white underline underline-offset-4"
              >
                View Live →
              </a> : <a
                href={project.github}
                target="_blank"
                className="mt-6 text-sm text-white underline underline-offset-4"
              >
                View on GitHub →
              </a>}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
