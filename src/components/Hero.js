"use client";

import { motion } from "framer-motion";
import { Folder, FileText, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-20 pt-24">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
        Vineet k. Chauhan
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-gray-400">
        Java Backend Developer
      </p>

      <p className="mt-6 max-w-xl text-sm sm:text-base text-gray-300">
        I build secure, scalable backend systems and clean full-stack
        applications with a strong focus on architecture, performance,
        and real-world problem solving.
      </p>


<div className="mt-8 flex flex-col sm:flex-row gap-4">

  {/* View Projects */}
  <a
    href="#projects"
    className="transition-all duration-300
 group px-6 py-3 bg-white text-black font-medium rounded flex items-center justify-center gap-2"
  >
    <Folder className="group-hover:hidden" size={20} />
    <span className="hidden group-hover:inline">View Projects</span>
  </a>

  {/* View Resume */}
  <a
    href="/Vineet_Chauhan_Java_Backend_Developer.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group px-6 py-3 border border-gray-600 rounded flex items-center justify-center gap-2"
  >
    <FileText className="group-hover:hidden" size={20} />
    <span className="hidden group-hover:inline">View Resume</span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/vineet-javadev"
    target="_blank"
    rel="noopener noreferrer"
    className="group px-6 py-3 border border-gray-600 rounded flex items-center justify-center gap-2"
  >
    <Github className="group-hover:hidden" size={20} />
    <span className="hidden group-hover:inline">GitHub</span>
  </a>

</div>

      </motion.div>
    </section>
  );
}

