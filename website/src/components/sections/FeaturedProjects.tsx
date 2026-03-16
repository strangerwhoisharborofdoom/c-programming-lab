"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "automotive-line",
    tag: "Industrial Robotics",
    title: "Autonomous Assembly Line — Automotive OEM",
    description:
      "Deployed 24 collaborative robots across a 3-shift automotive assembly line, achieving 340% throughput improvement and zero downtime using predictive maintenance AI.",
    metrics: [
      { label: "Throughput ↑", value: "340%" },
      { label: "Defect Rate ↓", value: "97%" },
      { label: "ROI", value: "18mo" },
    ],
    color: "cyan",
    industry: "Automotive",
  },
  {
    id: "pharma-vision",
    tag: "Computer Vision",
    title: "AI Quality Inspection — Pharmaceutical Plant",
    description:
      "Real-time computer vision system inspecting 1,200 blister packs per minute with 99.97% accuracy, replacing manual inspection and ensuring FDA compliance.",
    metrics: [
      { label: "Accuracy", value: "99.97%" },
      { label: "Speed", value: "1200/min" },
      { label: "Cost Saved", value: "$2.4M" },
    ],
    color: "purple",
    industry: "Healthcare",
  },
  {
    id: "warehouse-iot",
    tag: "IoT & Automation",
    title: "Smart Warehouse Platform — E-Commerce Giant",
    description:
      "End-to-end warehouse automation with 60 AMRs, AI demand forecasting, and real-time inventory IoT tracking, enabling same-day dispatch for 95% of orders.",
    metrics: [
      { label: "Order Accuracy", value: "99.9%" },
      { label: "Pick Speed ↑", value: "5×" },
      { label: "Labour Cost ↓", value: "68%" },
    ],
    color: "cyan",
    industry: "Logistics",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects That <span className="gradient-text">Define Results</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real transformations. Measurable outcomes. Explore how we&apos;ve helped global
            enterprises automate, optimize, and scale.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group p-6 sm:p-8 bg-slate-900/60 border ${
                project.color === "cyan"
                  ? "border-cyan-500/20 hover:border-cyan-500/50"
                  : "border-purple-500/20 hover:border-purple-500/50"
              } rounded-xl transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        project.color === "cyan"
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "bg-purple-500/10 text-purple-400"
                      }`}
                    >
                      {project.tag}
                    </span>
                    <span className="text-xs text-slate-500">{project.industry}</span>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-3 flex-shrink-0">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center lg:text-right">
                      <p
                        className={`text-2xl font-bold ${
                          project.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                        }`}
                      >
                        {m.value}
                      </p>
                      <p className="text-slate-500 text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={`/projects#${project.id}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                    project.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                  } hover:gap-2.5 transition-all`}
                >
                  View Case Study <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 font-semibold rounded-lg transition-all hover:bg-cyan-500/10"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
