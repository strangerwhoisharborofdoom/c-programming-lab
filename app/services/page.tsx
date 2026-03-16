import SectionShell from "@/components/SectionShell";
import ServiceCards from "@/components/ServiceCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our robotics, AI, and automation services.",
};

const details = [
  {
    title: "Robotic Cells",
    icon: "🤖",
    desc: "Vision-guided robotic arms, palletizers, and autonomous mobile robots (AMRs) with SLAM navigation. Full cell design, integration, and support.",
    bullets: ["6-axis robot arms", "Vision inspection systems", "AMR fleets with SLAM", "Safety & compliance"],
  },
  {
    title: "AI Control Systems",
    icon: "🧠",
    desc: "Reinforcement learning-based adaptive control, path planning, and predictive maintenance for industrial robots.",
    bullets: ["RL-based control loops", "Real-time path optimization", "Anomaly detection", "Digital twin integration"],
  },
  {
    title: "Predictive Operations",
    icon: "📈",
    desc: "Edge analytics platforms, digital twins, and anomaly detection to reduce downtime and optimize throughput.",
    bullets: ["Edge ML inference", "Digital twins", "OEE dashboards", "Predictive maintenance"],
  },
  {
    title: "Voice Interfaces",
    icon: "🎙️",
    desc: "Hands-free operator copilots and customer service chat powered by large language models.",
    bullets: ["Voice-controlled HMI", "AI copilot assistants", "Multilingual support", "ElevenLabs integration"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SectionShell id="services-hero" title="Our Services" subtitle="End-to-end robotics, AI and automation engineering">
        <ServiceCards />
      </SectionShell>
      <SectionShell id="services-detail" title="Service Details" subtitle="What's included in each offering">
        <div className="grid md:grid-cols-2 gap-6">
          {details.map((d) => (
            <div key={d.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:border-cyan-500/40 transition-all">
              <div className="text-3xl mb-3">{d.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{d.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{d.desc}</p>
              <ul className="space-y-1">
                {d.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
