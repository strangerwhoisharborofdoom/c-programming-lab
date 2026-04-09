import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and industry news on robotics, AI, and industrial automation from the RoboTech AI team.",
};

const posts = [
  {
    slug: "future-of-collaborative-robots",
    category: "Robotics",
    title: "The Future of Collaborative Robots: How Cobots Are Reshaping Manufacturing",
    excerpt:
      "Collaborative robots are no longer reserved for automotive giants. Discover how SMEs are leveraging cobots to compete with large-scale manufacturers — without sacrificing flexibility.",
    date: "December 15, 2024",
    readTime: "8 min read",
    color: "cyan",
  },
  {
    slug: "ai-predictive-maintenance-guide",
    category: "AI & Machine Learning",
    title: "AI-Powered Predictive Maintenance: A Practical Guide for Plant Managers",
    excerpt:
      "Unplanned downtime costs manufacturers $50 billion annually. Learn how machine learning models can predict equipment failure 2–4 weeks in advance and the ROI you can expect.",
    date: "December 8, 2024",
    readTime: "12 min read",
    color: "purple",
  },
  {
    slug: "computer-vision-quality-control",
    category: "Computer Vision",
    title: "Computer Vision vs. Human Inspection: A Data-Driven Comparison",
    excerpt:
      "We ran a 6-month parallel study comparing AI vision inspection against trained human inspectors across 5 production lines. The results may surprise you.",
    date: "November 28, 2024",
    readTime: "10 min read",
    color: "cyan",
  },
  {
    slug: "warehouse-automation-2025",
    category: "Automation",
    title: "Warehouse Automation Trends for 2025: AMRs, AI, and the Human Factor",
    excerpt:
      "As AMR technology matures and AI becomes central to warehouse operations, what does the workforce of the future look like? We explore the evolving human-robot collaboration model.",
    date: "November 20, 2024",
    readTime: "9 min read",
    color: "purple",
  },
  {
    slug: "iot-smart-factory",
    category: "IoT",
    title: "Building a Smart Factory from Scratch: An IoT Architecture Deep Dive",
    excerpt:
      "From sensor selection to cloud integration — a step-by-step technical guide to architecting an Industrial IoT platform that scales from 10 to 10,000 endpoints.",
    date: "November 12, 2024",
    readTime: "15 min read",
    color: "cyan",
  },
  {
    slug: "robotics-roi-calculation",
    category: "Business",
    title: "How to Calculate the ROI of Robotic Automation (With Real Examples)",
    excerpt:
      "Stop guessing. Use our battle-tested framework to calculate the true ROI of robotic automation projects, including hidden costs, integration time, and productivity ramp-up curves.",
    date: "November 5, 2024",
    readTime: "11 min read",
    color: "purple",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative circuit-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-4">
            Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Robotics & AI <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Deep dives, case studies, and practical guides from our engineers and automation consultants.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className={`group p-6 bg-slate-900/60 border ${
                  post.color === "cyan"
                    ? "border-cyan-500/20 hover:border-cyan-500/50"
                    : "border-purple-500/20 hover:border-purple-500/50"
                } rounded-xl transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      post.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-purple-500/10 text-purple-400"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-white font-semibold text-lg mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-slate-500 text-xs">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`text-xs font-medium ${
                      post.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                    } hover:underline`}
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay in the Loop</h2>
          <p className="text-slate-400 mb-6 text-sm">
            Get the latest robotics insights and automation case studies delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
            />
            <button className="px-5 py-2.5 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
