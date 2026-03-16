import type { Metadata } from "next";
import Industries from "@/components/sections/Industries";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "RoboTech AI serves 50+ industries with specialized robotics and AI automation solutions tailored to each sector's unique challenges.",
};

const industryDetails = [
  {
    name: "Manufacturing",
    description:
      "Smart factories powered by robotics, AI quality control, and connected production lines. We help manufacturers achieve Industry 4.0 through progressive automation deployment — from single-station robots to fully autonomous production lines.",
    useCases: ["Assembly line robotics", "AI quality inspection", "OEE optimization", "Predictive maintenance"],
  },
  {
    name: "Healthcare",
    description:
      "From surgical assistance robots to hospital logistics and pharmaceutical quality control, we bring precision and reliability to healthcare automation where human lives depend on accuracy.",
    useCases: ["Surgical robot systems", "Lab sample handling", "Pharmacy dispensing", "Hospital delivery robots"],
  },
  {
    name: "Logistics & Warehousing",
    description:
      "Next-generation fulfillment centres powered by AMR fleets, AI demand forecasting, and automated conveyor networks. Achieve same-day dispatch at scale without proportional headcount growth.",
    useCases: ["AMR fleets", "Automated picking", "Sortation systems", "Inventory AI"],
  },
  {
    name: "Agriculture",
    description:
      "Precision farming solutions combining drone fleets, soil sensors, AI crop analytics, and autonomous field robots to maximize yield while minimizing resource consumption.",
    useCases: ["Drone field mapping", "Autonomous harvesters", "Irrigation automation", "Yield forecasting"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative circuit-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-4">
            Industry Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Industries We <span className="gradient-text">Serve</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Specialized robotics and AI automation solutions engineered for the unique
            demands of each sector we serve.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <Industries />

      {/* Detailed Industry Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryDetails.map((industry, i) => (
              <div
                key={industry.name}
                className={`p-6 bg-slate-900/60 border ${
                  i % 2 === 0
                    ? "border-cyan-500/20 hover:border-cyan-500/40"
                    : "border-purple-500/20 hover:border-purple-500/40"
                } rounded-xl transition-all`}
              >
                <h2 className="text-xl font-bold text-white mb-3">{industry.name}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{industry.description}</p>
                <div>
                  <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wide">Key Use Cases</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.useCases.map((uc) => (
                      <span
                        key={uc}
                        className={`px-2.5 py-1 text-xs rounded-full ${
                          i % 2 === 0
                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                            : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        }`}
                      >
                        {uc}
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
