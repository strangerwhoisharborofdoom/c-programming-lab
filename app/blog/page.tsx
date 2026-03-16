import SectionShell from "@/components/SectionShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on robotics, AI, and automation from the Axiom Robotics team.",
};

const posts = [
  { title: "The Rise of Collaborative Robots in SMEs", date: "2024-12-01", author: "Axiom Team", excerpt: "How cobots are making advanced automation accessible to small and medium enterprises.", tag: "Robotics" },
  { title: "Reinforcement Learning for Robot Control: A Primer", date: "2024-11-15", author: "Axiom Team", excerpt: "An introduction to RL-based control systems and why they outperform traditional PID in dynamic environments.", tag: "AI/ML" },
  { title: "Building a Digital Twin: Lessons Learned", date: "2024-10-20", author: "Axiom Team", excerpt: "Key challenges and solutions from deploying a real-time digital twin for a Tier-1 automotive supplier.", tag: "Simulation" },
  { title: "Voice Interfaces in Industrial Settings", date: "2024-09-05", author: "Axiom Team", excerpt: "Why hands-free HMI is becoming essential on the factory floor and how to implement it.", tag: "AI" },
];

export default function BlogPage() {
  return (
    <SectionShell id="blog" title="Blog & Insights" subtitle="Thoughts on the future of intelligent automation">
      <div className="grid sm:grid-cols-2 gap-5">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">{post.tag}</span>
              <time className="text-xs text-slate-500">{post.date}</time>
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">{post.title}</h2>
            <p className="text-sm text-slate-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
