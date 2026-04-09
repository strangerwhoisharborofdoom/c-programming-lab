import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore RoboTech AI's portfolio of robotics, AI, and automation projects across automotive, healthcare, logistics, and more.",
};

const projects = [
  {
    id: "automotive-line",
    category: "Industrial Robotics",
    industry: "Automotive",
    title: "Autonomous Assembly Line — Tier-1 Automotive OEM",
    description:
      "Complete overhaul of a 3-shift automotive body shop with 24 collaborative robots, vision-guided assembly, and AI-driven predictive maintenance. The system processes 450 vehicle bodies per day with zero unplanned downtime in 18 months of operation.",
    metrics: [
      { label: "Throughput Increase", value: "340%" },
      { label: "Defect Rate Reduction", value: "97%" },
      { label: "ROI Timeline", value: "18 months" },
      { label: "Robots Deployed", value: "24 units" },
    ],
    tech: ["KUKA KR CYBERTECH", "SICK Vision", "Siemens PLC", "Custom AI QC"],
    color: "cyan",
  },
  {
    id: "pharma-vision",
    category: "Computer Vision",
    industry: "Healthcare / Pharma",
    title: "AI Quality Inspection — Pharmaceutical Blister Pack Line",
    description:
      "High-speed computer vision system inspecting blister packs at 1,200 units per minute. The deep learning model detects missing tablets, cracked blisters, incorrect labeling, and seal defects with 99.97% accuracy — FDA 21 CFR Part 11 compliant.",
    metrics: [
      { label: "Inspection Accuracy", value: "99.97%" },
      { label: "Speed", value: "1,200/min" },
      { label: "Annual Cost Savings", value: "$2.4M" },
      { label: "False Reject Rate", value: "< 0.01%" },
    ],
    tech: ["NVIDIA Jetson AGX", "Custom CNN Model", "Basler Cameras", "ERP Integration"],
    color: "purple",
  },
  {
    id: "warehouse-iot",
    category: "IoT & Automation",
    industry: "Logistics / E-Commerce",
    title: "Smart Warehouse Platform — E-Commerce Fulfillment Centre",
    description:
      "Full-stack warehouse automation for a 250,000 sq ft fulfilment centre. 60 AMRs coordinate with AI demand forecasting, RFID inventory tracking, and automated conveyor routing to achieve 99.9% order accuracy with 5× faster pick rates.",
    metrics: [
      { label: "Order Accuracy", value: "99.9%" },
      { label: "Pick Speed Increase", value: "5×" },
      { label: "Labour Cost Reduction", value: "68%" },
      { label: "AMRs Deployed", value: "60 units" },
    ],
    tech: ["Autonomous Mobile Robots", "RFID & IoT Sensors", "AI Demand Forecasting", "WMS Integration"],
    color: "cyan",
  },
  {
    id: "agri-drone",
    category: "AI & Automation",
    industry: "Agriculture",
    title: "Precision Agriculture Drone Fleet — Large-Scale Farm",
    description:
      "Fleet of 12 agricultural drones with multispectral imaging and AI crop health analysis. Automated spray missions, yield prediction, and soil moisture mapping covering 5,000 acres. Reduced pesticide use by 60% while increasing yield by 23%.",
    metrics: [
      { label: "Acres Covered", value: "5,000" },
      { label: "Pesticide Reduction", value: "60%" },
      { label: "Yield Increase", value: "23%" },
      { label: "Drone Fleet", value: "12 units" },
    ],
    tech: ["Custom Drone Platform", "Multispectral Imaging", "AI Crop Analysis", "Fleet Management Software"],
    color: "purple",
  },
  {
    id: "hospital-robot",
    category: "AI & Robotics",
    industry: "Healthcare",
    title: "Hospital Logistics Robot Fleet — Multi-Floor Medical Centre",
    description:
      "Autonomous hospital logistics robots delivering medications, lab samples, and linens across 12 floors. Integrated with hospital information system, elevator control, and sterile zone protocols. Saving 15,000 nursing hours annually.",
    metrics: [
      { label: "Floors Served", value: "12" },
      { label: "Nursing Hours Saved/yr", value: "15,000" },
      { label: "Delivery Accuracy", value: "100%" },
      { label: "Robots Active", value: "8 units" },
    ],
    tech: ["AMR Platform", "HIS Integration", "Elevator API", "UV Sterilisation Module"],
    color: "cyan",
  },
  {
    id: "mining-remote",
    category: "Robotics",
    industry: "Mining",
    title: "Remote Mining Operations — Underground Tunnel Inspection",
    description:
      "Explosion-proof inspection robots for underground coal mine tunnels. LiDAR-based 3D mapping, methane & oxygen sensor suite, and autonomous navigation in GPS-denied environments. Eliminated human entry into high-risk zones.",
    metrics: [
      { label: "Zero Human Incidents", value: "24 months" },
      { label: "Tunnel Coverage", value: "42 km" },
      { label: "Inspection Speed", value: "10× faster" },
      { label: "Sensor Types", value: "8 integrated" },
    ],
    tech: ["ATEX-Certified Robotics", "LiDAR SLAM", "Gas Sensors", "5G Edge Computing"],
    color: "purple",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative circuit-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-medium mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Real-world deployments that define the state of the art in robotics and AI automation.
            Every project is a partnership built on engineering excellence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className={`p-6 sm:p-8 bg-slate-900/60 border ${
                  project.color === "cyan"
                    ? "border-cyan-500/20 hover:border-cyan-500/50"
                    : "border-purple-500/20 hover:border-purple-500/50"
                } rounded-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      project.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-purple-500/10 text-purple-400"
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500">{project.industry}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                    >
                      <p
                        className={`text-lg font-bold ${
                          project.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                        }`}
                      >
                        {m.value}
                      </p>
                      <p className="text-slate-500 text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div>
                  <p className="text-xs text-slate-500 mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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
