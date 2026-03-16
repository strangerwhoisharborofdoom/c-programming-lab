'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const industries = [
  {
    icon: '🏭',
    title: 'Manufacturing',
    description: 'End-to-end factory automation with robotic assembly, quality control, and predictive maintenance systems.',
    stats: '45% efficiency gain',
    color: '#00d4ff',
    useCases: ['Assembly automation', 'Quality inspection', 'Inventory management', 'Predictive maintenance'],
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    description: 'AI diagnostics, surgical robot assistance, pharmaceutical automation, and hospital logistics systems.',
    stats: '60% faster diagnostics',
    color: '#7b2fff',
    useCases: ['Surgical assistance', 'Drug dispensing', 'Patient monitoring', 'Lab automation'],
  },
  {
    icon: '📦',
    title: 'Logistics & Supply Chain',
    description: 'Autonomous warehouses, last-mile delivery robots, and AI-powered demand forecasting platforms.',
    stats: '70% order accuracy',
    color: '#00d4ff',
    useCases: ['Warehouse robots', 'Route optimization', 'Inventory tracking', 'Demand forecasting'],
  },
  {
    icon: '🌾',
    title: 'Agriculture',
    description: 'Precision farming with autonomous tractors, crop monitoring drones, and AI yield optimization.',
    stats: '35% yield increase',
    color: '#7b2fff',
    useCases: ['Crop monitoring', 'Autonomous harvesting', 'Irrigation control', 'Disease detection'],
  },
  {
    icon: '🛡️',
    title: 'Defense & Security',
    description: 'Unmanned systems, perimeter surveillance AI, threat detection, and autonomous patrol platforms.',
    stats: '24/7 surveillance',
    color: '#00d4ff',
    useCases: ['Border surveillance', 'Threat detection', 'Autonomous drones', 'Explosive detection'],
  },
  {
    icon: '🚗',
    title: 'Automotive',
    description: 'Vehicle assembly automation, paint shop robotics, and AI-powered quality assurance systems.',
    stats: '50% cycle time reduction',
    color: '#7b2fff',
    useCases: ['Body welding', 'Paint automation', 'Engine assembly', 'Final inspection'],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2fff]">
              Industries We Serve
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            RoboCore AI delivers specialized automation expertise across six critical sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#0f0f1a] border border-[#00d4ff11] rounded-2xl p-8 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl">{industry.icon}</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: industry.color, background: `${industry.color}11` }}>
                  {industry.stats}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                {industry.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{industry.description}</p>
              <div className="space-y-2">
                {industry.useCases.map((uc) => (
                  <div key={uc} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: industry.color }} />
                    {uc}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[#ffffff08]">
                <Link href="/contact" className="text-sm font-medium transition-colors" style={{ color: industry.color }}>
                  Explore solutions →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
