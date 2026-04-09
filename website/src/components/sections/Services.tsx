"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Brain, Zap, Eye, Wifi, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    id: "industrial-robotics",
    icon: Cpu,
    title: "Industrial Robotics",
    description:
      "Design, integrate, and deploy robotic arms, mobile robots, and collaborative robots (cobots) for manufacturing floors, assembly lines, and warehouses.",
    features: ["Robotic Arms & Cobots", "AMR & AGV Systems", "Pick & Place Automation", "Welding & Assembly"],
    color: "cyan",
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI models for predictive maintenance, quality control, demand forecasting, and intelligent decision-making embedded in your operations.",
    features: ["Predictive Analytics", "Anomaly Detection", "NLP & Chatbots", "Custom ML Models"],
    color: "purple",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Process Automation",
    description:
      "End-to-end workflow automation using RPA, AI-driven orchestration, and intelligent process management to eliminate manual bottlenecks.",
    features: ["RPA Implementation", "Workflow Orchestration", "ERP Integration", "Digital Twin"],
    color: "cyan",
  },
  {
    id: "computer-vision",
    icon: Eye,
    title: "Computer Vision",
    description:
      "Real-time visual inspection, defect detection, object recognition, and tracking systems powered by deep learning and edge AI hardware.",
    features: ["Quality Inspection", "Object Detection", "Facial Recognition", "3D Point Cloud"],
    color: "purple",
  },
  {
    id: "iot",
    icon: Wifi,
    title: "IoT Solutions",
    description:
      "Connected sensor networks, smart factory platforms, and industrial IoT ecosystems for real-time monitoring, asset tracking, and remote control.",
    features: ["Sensor Integration", "MQTT / OPC-UA", "Edge Computing", "Remote Monitoring"],
    color: "cyan",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw operational data into actionable insights with custom dashboards, AI-powered reporting, and advanced statistical analysis.",
    features: ["BI Dashboards", "OEE Tracking", "Supply Chain Analytics", "Demand Forecasting"],
    color: "purple",
  },
];

const colorMap = {
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-500",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400",
    glow: "glow-cyan",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-500",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    badge: "bg-purple-500/10 text-purple-400",
    glow: "glow-purple",
  },
};

export default function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-4">
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comprehensive <span className="gradient-text">Robotics & AI</span> Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From concept to deployment — we deliver full-stack automation solutions tailored
            to your industry&apos;s unique challenges.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group p-6 bg-slate-900/60 border ${colors.border} rounded-xl transition-all duration-300 cursor-pointer`}
              >
                <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${service.color === "cyan" ? "bg-cyan-400" : "bg-purple-400"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.id}`}
                  className={`inline-flex items-center gap-1 text-xs font-medium ${colors.iconColor} hover:gap-2 transition-all`}
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Explore All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
