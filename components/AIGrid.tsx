"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "Manufacturing", icon: "🏭", desc: "Smart assembly, quality inspection, robotic welding" },
  { name: "Logistics", icon: "📦", desc: "Warehouse automation, AMR fleets, sortation systems" },
  { name: "Healthcare", icon: "🏥", desc: "Surgical assistance, lab automation, pharmacy robots" },
  { name: "Energy", icon: "⚡", desc: "Grid inspection drones, predictive maintenance for turbines" },
  { name: "Agriculture", icon: "🌾", desc: "Autonomous harvesting, precision spraying, crop monitoring" },
  { name: "Construction", icon: "🏗️", desc: "Autonomous excavation, site surveying, 3D printing structures" },
];

export default function AIGrid() {
  return (
    <div className="relative">
      {/* Animated circuit background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur hover:border-cyan-500/30 transition-colors"
          >
            <div className="text-3xl mb-2">{ind.icon}</div>
            <h3 className="font-semibold text-white">{ind.name}</h3>
            <p className="text-sm text-slate-400 mt-1">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
