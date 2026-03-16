import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore RoboTech AI's full range of robotics, AI, and automation services — from industrial robots to computer vision and IoT solutions.",
};

const serviceDetails = [
  {
    id: "industrial-robotics",
    title: "Industrial Robotics",
    subtitle: "Precision Automation at Scale",
    description:
      "We engineer, integrate, and commission robotic systems for the most demanding industrial environments. From 6-axis robotic arms performing micro-welding to mobile autonomous robots navigating complex warehouse floors, our robotics solutions deliver measurable productivity gains.",
    capabilities: [
      "6-axis & SCARA robotic arm integration",
      "Collaborative robots (cobots) for human-robot teaming",
      "Autonomous Mobile Robots (AMRs) and AGV fleet management",
      "End-of-arm tooling design and fabrication",
      "Robot cell layout design & safety compliance",
      "PLC/SCADA integration and production scheduling",
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Intelligence That Learns and Adapts",
    description:
      "Our AI team develops custom machine learning models that solve specific operational challenges — whether it's predicting equipment failure before it happens, optimizing production schedules in real-time, or enabling natural language interfaces for factory floor management.",
    capabilities: [
      "Predictive maintenance models",
      "Demand forecasting & inventory optimization",
      "Anomaly detection in sensor data streams",
      "Natural Language Processing (NLP) for operations",
      "Reinforcement learning for robot path planning",
      "Explainable AI dashboards for operators",
    ],
  },
  {
    id: "automation",
    title: "Process Automation",
    subtitle: "Eliminate Bottlenecks, Accelerate Throughput",
    description:
      "End-to-end workflow automation powered by RPA bots, intelligent orchestration engines, and AI-driven process mining. We map your current workflows, identify automation opportunities, and deploy solutions that integrate with your existing ERP, MES, and CRM systems.",
    capabilities: [
      "Robotic Process Automation (RPA) with UiPath/Automation Anywhere",
      "Business process mining & opportunity analysis",
      "Intelligent document processing (IDP)",
      "ERP, MES, and CRM integration",
      "Digital twin simulation for process validation",
      "24/7 monitoring and self-healing workflows",
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    subtitle: "Machines That See With Perfect Precision",
    description:
      "Our computer vision systems are deployed in some of the world's most demanding production environments. Powered by deep learning and running on edge AI hardware, they detect sub-millimeter defects, track assets in real time, and ensure product quality at production speed.",
    capabilities: [
      "Automated optical inspection (AOI) systems",
      "3D point cloud processing for dimensional measurement",
      "Object detection, segmentation and tracking",
      "Facial recognition and access control",
      "License plate and barcode reading at speed",
      "Custom edge AI deployment (NVIDIA Jetson, Intel Movidius)",
    ],
  },
  {
    id: "iot",
    title: "IoT Solutions",
    subtitle: "Connect Every Asset, Monitor Everything",
    description:
      "Industrial IoT platforms that connect sensors, machines, and systems across your entire operation. We architect, deploy, and manage IoT ecosystems that provide real-time visibility, reduce energy consumption, and enable predictive operations.",
    capabilities: [
      "Industrial sensor integration (vibration, temperature, pressure)",
      "MQTT, OPC-UA, and Modbus protocol support",
      "Custom IoT gateway hardware design",
      "Edge computing with local processing",
      "Cloud-based IoT dashboards and alerting",
      "Cybersecurity hardening for OT/IT convergence",
    ],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    subtitle: "Turn Data Into Competitive Advantage",
    description:
      "Modern manufacturing generates terabytes of data — most of it untapped. Our analytics team transforms raw operational data into actionable intelligence through custom BI dashboards, AI-powered reporting, and advanced statistical modeling.",
    capabilities: [
      "OEE (Overall Equipment Effectiveness) tracking",
      "Supply chain visibility dashboards",
      "Custom KPI design and real-time reporting",
      "Root cause analysis automation",
      "Statistical Process Control (SPC) monitoring",
      "AI-generated executive reports",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative circuit-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-4">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            From single-robot deployments to enterprise-wide automation transformations,
            we deliver end-to-end robotics and AI solutions that drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Overview Grid */}
      <Services />

      {/* Detailed Service Descriptions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceDetails.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <span className="text-cyan-400 text-sm font-medium">{service.subtitle}</span>
                  <h2 className="text-3xl font-bold text-white mt-2 mb-4">{service.title}</h2>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
                <div
                  className={`p-6 bg-slate-900/60 border border-slate-800 rounded-xl ${
                    i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <h3 className="text-white font-semibold mb-4">Key Capabilities</h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
