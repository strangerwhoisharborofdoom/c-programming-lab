"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-[#020817] to-purple-600/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-6">
            Ready to Transform?
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Your{" "}
            <span className="gradient-text">Automated Future</span> Together
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Talk to our robotics engineers today. Free consultation, no commitment.
            We&apos;ll assess your operations and design a custom automation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all glow-cyan"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9008826340"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              Call: 9008826340
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
