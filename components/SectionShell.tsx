"use client";

import { motion } from "framer-motion";

interface SectionShellProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionShell({ id, title, subtitle, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold glow-text">{title}</h2>
        {subtitle && <p className="mt-3 text-slate-400 text-base md:text-lg">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}
