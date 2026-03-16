'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: '🤖',
    title: 'Industrial Robotics Automation',
    description: 'Deploy precision robotic systems for assembly lines, welding, painting, and materials handling. Our turnkey solutions integrate seamlessly with existing production infrastructure.',
    features: ['Pick-and-place systems', 'Collaborative robots (cobots)', 'Automated assembly lines', 'Material handling robots'],
    color: '#00d4ff',
  },
  {
    icon: '🧠',
    title: 'AI & Machine Learning Solutions',
    description: 'Custom AI models trained on your data to predict failures, optimize processes, and automate complex decision-making at scale.',
    features: ['Predictive maintenance', 'Process optimization', 'Anomaly detection', 'Deep learning models'],
    color: '#7b2fff',
  },
  {
    icon: '👁️',
    title: 'Computer Vision Systems',
    description: 'Real-time visual intelligence for quality inspection, object detection, OCR, and autonomous navigation in challenging environments.',
    features: ['Defect detection', 'Barcode/QR scanning', 'Facial recognition', 'Object tracking'],
    color: '#00d4ff',
  },
  {
    icon: '🌐',
    title: 'IoT & Smart Manufacturing',
    description: 'Connect your entire factory floor with intelligent IoT sensors, real-time dashboards, and cloud-based analytics platforms.',
    features: ['Sensor networks', 'Edge computing', 'Real-time dashboards', 'Cloud integration'],
    color: '#7b2fff',
  },
  {
    icon: '⚙️',
    title: 'Robotic Process Automation (RPA)',
    description: 'Automate repetitive digital workflows across ERP, CRM, and legacy systems with our software robots that work 24/7 without errors.',
    features: ['Workflow automation', 'Data extraction', 'Invoice processing', 'Cross-system integration'],
    color: '#00d4ff',
  },
  {
    icon: '💡',
    title: 'Custom AI Development',
    description: 'Bespoke AI solutions engineered from the ground up for your unique business challenges, from concept to production deployment.',
    features: ['Custom model training', 'MLOps pipeline', 'API integration', 'Continuous learning'],
    color: '#7b2fff',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff11] border border-[#00d4ff33] mb-6">
            <span className="text-[#00d4ff] text-xs font-medium">What We Build</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2fff]">
              Our Services
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            From concept to deployment — we deliver complete automation ecosystems that drive measurable ROI.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-[#0f0f1a] border border-[#00d4ff11] rounded-2xl p-8 group cursor-pointer"
              style={{ borderColor: `${service.color}11` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[#00d4ff11]">
                <Link
                  href="/contact"
                  className="text-sm font-medium transition-colors"
                  style={{ color: service.color }}
                >
                  Get a quote →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-[#0f0f1a] to-[#0a0a0f] border border-[#00d4ff22] rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
            <p className="text-gray-400 mb-6">Book a free 30-minute consultation with our automation experts.</p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#00d4ff] text-black font-bold rounded-xl hover:bg-[#00d4ff]/80 transition-all hover:shadow-[0_0_20px_#00d4ff66]"
            >
              Book Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
