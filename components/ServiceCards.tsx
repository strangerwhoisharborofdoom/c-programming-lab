"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Robotic Cells", desc: "Vision-guided arms, palletizers, AMRs with SLAM navigation", icon: "🤖" },
  { title: "AI Control", desc: "Reinforcement learning for adaptive control & path planning", icon: "🧠" },
  { title: "Predictive Ops", desc: "Edge analytics, digital twins, anomaly detection", icon: "📈" },
  { title: "Voice Interfaces", desc: "Hands-free operator copilots & service chat", icon: "🎙️" },
];

export default function ServiceCards() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger | undefined;

    import("gsap").then(({ gsap: g }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger: ST }) => {
        ScrollTrigger = ST;
        g.registerPlugin(ScrollTrigger);
        g.from(".service-card", {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.7,
          scrollTrigger: {
            trigger: "#services",
            start: "top 75%",
          },
          ease: "power3.out",
        });
      });
    });

    return () => {
      ScrollTrigger?.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {services.map((s) => (
        <motion.div
          key={s.title}
          className="service-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur group cursor-default"
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-3xl mb-3">{s.icon}</div>
          <h3 className="text-lg font-semibold text-white">{s.title}</h3>
          <p className="text-sm text-slate-300 mt-1">{s.desc}</p>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
}
