'use client';

import dynamic from 'next/dynamic';
import { Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import CircuitBackground from '@/components/CircuitBackground';

const AICore3D = dynamic(() => import('@/components/AICore3D'), { ssr: false });

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '120+', label: 'Enterprise Clients' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years of Innovation' },
];

const services = [
  {
    icon: '🤖',
    title: 'Industrial Robotics',
    desc: 'Precision robotic systems for manufacturing, assembly, and quality control.',
    color: '#00d4ff',
  },
  {
    icon: '🧠',
    title: 'AI/ML Solutions',
    desc: 'Custom machine learning models that turn your data into competitive advantage.',
    color: '#7b2fff',
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    desc: 'Real-time visual intelligence for inspection, tracking, and autonomous navigation.',
    color: '#00d4ff',
  },
  {
    icon: '⚡',
    title: 'Smart IoT',
    desc: 'Connected factory ecosystems with predictive maintenance and real-time analytics.',
    color: '#7b2fff',
  },
];

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#00d4ff] mb-2">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      <CircuitBackground />

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff11] border border-[#00d4ff33] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="text-[#00d4ff] text-xs font-medium">Next-Gen Automation Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-white">Build the</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2fff]">
                Future
              </span>
              <br />
              <span className="text-white">with AI</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              RoboCore AI delivers intelligent robotics systems, AI-powered automation, and
              smart manufacturing solutions that transform how industries operate.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#00d4ff] text-black font-bold rounded-xl hover:bg-[#00d4ff]/80 transition-all hover:shadow-[0_0_30px_#00d4ff66] text-sm"
              >
                Start Your Project →
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border border-[#00d4ff44] text-white font-medium rounded-xl hover:border-[#00d4ff] hover:bg-[#00d4ff11] transition-all text-sm"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="h-[500px] lg:h-[600px] relative"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-[#00d4ff] border-t-transparent animate-spin" />
              </div>
            }>
              <AICore3D />
            </Suspense>
            {/* Glow rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full border border-[#00d4ff11] animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute w-80 h-80 rounded-full border border-[#7b2fff11] animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-20 border-y border-[#00d4ff11]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2fff]">
                Our Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              End-to-end automation solutions engineered for the industries that power our world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#0f0f1a] border border-[#00d4ff11] rounded-2xl p-6 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#00d4ff] font-medium hover:gap-4 transition-all"
            >
              View all services <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0f0f1a] to-[#0a0a0f] border border-[#00d4ff22] rounded-3xl p-12 shadow-[0_0_60px_#00d4ff11]"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Automate?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join 120+ enterprises that trust RoboCore AI to power their operations.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] text-white font-bold rounded-xl hover:opacity-90 transition-opacity hover:shadow-[0_0_40px_#00d4ff44]"
            >
              Schedule a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
