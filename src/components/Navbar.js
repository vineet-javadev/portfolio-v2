"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">Vineet</span>

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
  <a href="#about" className="hover:text-white">About</a>
  <a href="#skills" className="hover:text-white">Skills</a>
  <a href="#projects" className="hover:text-white">Projects</a>
  <a href="#contact" className="hover:text-white">Contact</a>
</div>

      </div>
    </motion.nav>
  );
}
