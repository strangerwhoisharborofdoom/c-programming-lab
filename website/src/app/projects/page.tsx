'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Robotics', 'AI/ML', 'Computer Vision', 'IoT', 'RPA'];

const projects = [
  {
    id: 1,
    title: 'Autonomous Assembly Line',
    category: 'Robotics',
    client: 'AutoTech Industries',
    description: 'Deployed 24 collaborative robots for precision assembly, reducing cycle time by 40% and eliminating assembly defects.',
    tags: ['Cobot Integration', 'PLC Control', 'Safety Systems'],
    gradient: 'from-cyan-900/60 to-blue-900/60',
    accent: '#00d4ff',
    year: '2024',
  },
  {
    id: 2,
    title: 'Predictive Maintenance AI',
    category: 'AI/ML',
    client: 'PowerGrid Corp',
    description: 'ML model achieving 94% accuracy in predicting equipment failures 48 hours in advance, saving $2M annually.',
    tags: ['TensorFlow', 'Time Series', 'Edge Deployment'],
    gradient: 'from-purple-900/60 to-indigo-900/60',
    accent: '#7b2fff',
    year: '2024',
  },
  {
    id: 3,
    title: 'Quality Vision Inspection',
    category: 'Computer Vision',
    client: 'MicroChip Labs',
    description: 'Real-time PCB defect detection system processing 1200 boards/hour with 99.7% accuracy using custom CNN models.',
    tags: ['OpenCV', 'PyTorch', 'Embedded AI'],
    gradient: 'from-emerald-900/60 to-cyan-900/60',
    accent: '#00d4ff',
    year: '2023',
  },
  {
    id: 4,
    title: 'Smart Warehouse IoT',
    category: 'IoT',
    client: 'LogiFlow Solutions',
    description: 'Connected 500+ sensors across a 200,000 sqft warehouse, enabling real-time inventory tracking and climate control.',
    tags: ['MQTT', 'AWS IoT', 'React Dashboard'],
    gradient: 'from-orange-900/60 to-red-900/60',
    accent: '#7b2fff',
    year: '2023',
  },
  {
    id: 5,
    title: 'Invoice Processing RPA',
    category: 'RPA',
    client: 'FinanceFirst Bank',
    description: 'Automated end-to-end invoice processing across 3 ERP systems, handling 50,000 invoices/month with zero manual intervention.',
    tags: ['UiPath', 'OCR', 'SAP Integration'],
    gradient: 'from-pink-900/60 to-purple-900/60',
    accent: '#00d4ff',
    year: '2024',
  },
  {
    id: 6,
    title: 'Surgical Robot Assistance',
    category: 'Robotics',
    client: 'MedCore Hospitals',
    description: 'Developed tremor-cancellation algorithms and force-feedback systems for minimally invasive robotic surgery platforms.',
    tags: ['Real-time Control', 'Haptic Feedback', 'Safety-critical'],
    gradient: 'from-teal-900/60 to-blue-900/60',
    accent: '#7b2fff',
    year: '2024',
  },
  {
    id: 7,
    title: 'Crop Disease Detection',
    category: 'Computer Vision',
    client: 'AgriSense Farms',
    description: 'Drone-mounted CV system identifies 42 plant diseases across 10,000 acres daily, enabling targeted pesticide application.',
    tags: ['YOLOv8', 'Drone Integration', 'GIS Mapping'],
    gradient: 'from-green-900/60 to-emerald-900/60',
    accent: '#00d4ff',
    year: '2023',
  },
  {
    id: 8,
    title: 'NLP Document Intelligence',
    category: 'AI/ML',
    client: 'LegalTech Pro',
    description: 'Fine-tuned LLM for contract analysis and risk flagging, reducing legal review time by 70% for a 200-attorney firm.',
    tags: ['LLM', 'RAG', 'Document AI'],
    gradient: 'from-violet-900/60 to-purple-900/60',
    accent: '#7b2fff',
    year: '2024',
  },
  {
    id: 9,
    title: 'Digital Twin Factory',
    category: 'IoT',
    client: 'Steel Dynamics Inc.',
    description: 'Built a real-time digital twin of a steel plant with physics-based simulation for process optimization and training.',
    tags: ['Unity 3D', 'OPC-UA', 'Digital Twin'],
    gradient: 'from-slate-900/60 to-gray-900/60',
    accent: '#00d4ff',
    year: '2023',
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2fff]">
              Our Projects
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Real-world automation solutions that are transforming industries.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#00d4ff] text-black'
                  : 'bg-[#0f0f1a] text-gray-400 border border-[#00d4ff22] hover:border-[#00d4ff66] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="bg-[#0f0f1a] border border-[#00d4ff11] rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Placeholder image */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-30">⚙️</span>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 rounded-full text-xs text-gray-300">
                    {project.year}
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: project.accent }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#00d4ff11] text-[#00d4ff]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-[#ffffff08] text-gray-400 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0f0f1a] border border-[#00d4ff33] rounded-2xl max-w-lg w-full p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#00d4ff11] text-[#00d4ff]">
                    {selectedProject.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ×
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-[#00d4ff] text-sm mb-4">Client: {selectedProject.client}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-[#00d4ff11] text-[#00d4ff] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 bg-[#00d4ff] text-black font-bold rounded-xl hover:bg-[#00d4ff]/80 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
