"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react";

const RobotScene = dynamic(() => import("@/components/3d/RobotScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const features = [
  { icon: Zap, text: "Real-time AI Processing" },
  { icon: Shield, text: "Industrial-grade Safety" },
  { icon: Cpu, text: "Edge Computing Ready" },
];

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = particlesRef.current;
    if (!el) return;
    // Create floating particle dots
    for (let i = 0; i < 30; i++) {
      const dot = document.createElement("div");
      dot.className = "absolute rounded-full bg-cyan-400/30 animate-float";
      const size = Math.random() * 4 + 2;
      dot.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 3}s;
        animation-duration: ${3 + Math.random() * 3}s;
      `;
      el.appendChild(dot);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center circuit-bg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#020817]/80 to-[#0a0a2e]/60 pointer-events-none" />

      {/* Animated particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-20"
        style={{
          background:
            "linear-gradient(transparent 50%, rgba(0, 212, 255, 0.02) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-6"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Next-Generation Robotics & AI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              Engineering the{" "}
              <span className="gradient-text">Future</span> with{" "}
              <span className="text-cyan-400 text-glow-cyan">AI & Robotics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              We design, build, and deploy intelligent robotic systems and AI solutions
              that transform manufacturing, logistics, healthcare, and beyond. Automate
              the complex. Scale the impossible.
            </motion.p>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {features.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-lg hover:opacity-90 transition-all glow-cyan text-sm"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all text-sm"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800"
            >
              {[
                { value: "500+", label: "Projects" },
                { value: "50+", label: "Industries" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-cyan-400 text-glow-cyan">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
            <RobotScene />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none" />
    </section>
  );
}
