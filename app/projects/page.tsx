import SectionShell from "@/components/SectionShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of robotics, AI, and automation projects.",
};

const projects = [
  { title: "AutoPalletizer Pro", category: "Robotics", desc: "Vision-guided palletizing cell handling 800 cycles/hr. Reduced labor cost by 60%.", year: "2024", tags: ["Robot Arms", "Computer Vision", "PLC"] },
  { title: "AI Weld Inspector", category: "AI/ML", desc: "Real-time weld quality inspection using deep learning. 99.2% defect detection rate.", year: "2024", tags: ["CNN", "Edge AI", "Quality Control"] },
  { title: "SmartFactory AMR Fleet", category: "Automation", desc: "20-robot AMR fleet with dynamic SLAM re-routing for a 50,000 sq ft facility.", year: "2023", tags: ["AMR", "SLAM", "Fleet Mgmt"] },
  { title: "Predictive Maintenance Hub", category: "AI/ML", desc: "IoT + ML platform predicting bearing failures 2 weeks in advance. Zero unplanned downtime.", year: "2023", tags: ["IoT", "ML", "Edge Computing"] },
  { title: "Voice Operator Copilot", category: "AI", desc: "Hands-free robot programming via voice commands. Supports 12 robot brands.", year: "2024", tags: ["Voice AI", "NLP", "HMI"] },
  { title: "Digital Twin Factory", category: "Simulation", desc: "Real-time digital twin for full production line simulation and optimization.", year: "2023", tags: ["Digital Twin", "Simulation", "OEE"] },
];

export default function ProjectsPage() {
  return (
    <SectionShell id="projects" title="Projects & Portfolio" subtitle="Real-world deployments and case studies">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur hover:border-cyan-500/40 transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">{p.category}</span>
              <span className="text-xs text-slate-500">{p.year}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-slate-300 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-slate-400">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
