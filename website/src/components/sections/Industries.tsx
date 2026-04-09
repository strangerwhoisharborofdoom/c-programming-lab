"use client";
import { motion } from "framer-motion";
import { Factory, Heart, Package, Wheat, HardHat, Mountain, Car, Plane } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", desc: "Assembly automation, quality control, predictive maintenance", color: "cyan" },
  { icon: Heart, name: "Healthcare", desc: "Surgical robots, lab automation, pharmaceutical inspection", color: "purple" },
  { icon: Package, name: "Logistics", desc: "Warehouse automation, AMRs, last-mile delivery systems", color: "cyan" },
  { icon: Wheat, name: "Agriculture", desc: "Precision farming robots, drone systems, crop analytics", color: "purple" },
  { icon: HardHat, name: "Construction", desc: "Autonomous machinery, site monitoring, BIM integration", color: "cyan" },
  { icon: Mountain, name: "Mining", desc: "Remote-operated drills, hazardous zone robots, ore analytics", color: "purple" },
  { icon: Car, name: "Automotive", desc: "Paint, weld, assembly line cobots, EV battery handling", color: "cyan" },
  { icon: Plane, name: "Aerospace", desc: "Precision inspection robots, composite layup, NDT systems", color: "purple" },
];

export default function Industries() {
  return (
    <section className="py-24 relative" id="industries">
      <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-4">
            Industry Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Serving <span className="gradient-text">50+ Industries</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our robotics and AI solutions are battle-tested across the world&apos;s most demanding industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className={`group p-5 bg-slate-900/60 border ${
                  industry.color === "cyan"
                    ? "border-slate-800 hover:border-cyan-500/50"
                    : "border-slate-800 hover:border-purple-500/50"
                } rounded-xl transition-all duration-300 cursor-default`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    industry.color === "cyan" ? "bg-cyan-500/10" : "bg-purple-500/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      industry.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                    }`}
                  />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{industry.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{industry.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
