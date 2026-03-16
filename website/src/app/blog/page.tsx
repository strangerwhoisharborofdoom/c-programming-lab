'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'The Future of Collaborative Robotics in Smart Factories',
    category: 'Robotics',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    excerpt: 'Explore how next-generation cobots are working alongside humans to create safer, more efficient production environments — and what this means for workforce transformation.',
    featured: true,
    gradient: 'from-cyan-900/60 to-blue-900/60',
  },
  {
    id: 2,
    title: 'Implementing Computer Vision for Zero-Defect Manufacturing',
    category: 'Computer Vision',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    excerpt: 'A deep dive into building real-time defect detection pipelines using YOLOv8 and custom CNNs deployed at the edge.',
    featured: false,
    gradient: 'from-purple-900/60 to-indigo-900/60',
  },
  {
    id: 3,
    title: 'Digital Twins: The Secret Weapon of Modern Manufacturing',
    category: 'IoT',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    excerpt: 'How physics-based digital twins are enabling manufacturers to simulate, optimize, and de-risk operations before touching physical equipment.',
    featured: false,
    gradient: 'from-emerald-900/60 to-teal-900/60',
  },
  {
    id: 4,
    title: 'LLMs in Industrial Settings: Beyond the Hype',
    category: 'AI/ML',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    excerpt: 'Practical applications of large language models for maintenance manuals, process documentation, and operator decision support in industrial environments.',
    featured: false,
    gradient: 'from-orange-900/60 to-red-900/60',
  },
  {
    id: 5,
    title: 'RPA vs. AI Automation: Choosing the Right Tool',
    category: 'RPA',
    date: 'Nov 20, 2024',
    readTime: '5 min read',
    excerpt: 'Breaking down when to use rule-based RPA, when to reach for ML, and how to build hybrid automation architectures that scale.',
    featured: false,
    gradient: 'from-pink-900/60 to-purple-900/60',
  },
  {
    id: 6,
    title: 'Edge AI: Bringing Intelligence to the Factory Floor',
    category: 'IoT',
    date: 'Nov 15, 2024',
    readTime: '9 min read',
    excerpt: 'Deploying machine learning models on edge hardware — NVIDIA Jetson, Coral TPU, and custom FPGAs — for sub-millisecond inference in critical applications.',
    featured: false,
    gradient: 'from-slate-900/60 to-gray-900/60',
  },
];

const categories = ['All', 'Robotics', 'AI/ML', 'Computer Vision', 'IoT', 'RPA'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = posts.find((p) => p.featured);
  const filtered = (activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory)).filter((p) => !p.featured || activeCategory !== 'All');

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2fff]">
              Insights &amp; News
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Expert perspectives on robotics, AI, and the future of automation.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featured && activeCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className={`bg-gradient-to-br ${featured.gradient} border border-[#00d4ff22] rounded-2xl p-10 relative overflow-hidden`}>
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#00d4ff] text-black text-xs font-bold rounded-full">
                Featured
              </div>
              <div className="max-w-2xl mt-4">
                <span className="text-[#00d4ff] text-xs font-medium">{featured.category} · {featured.date} · {featured.readTime}</span>
                <h2 className="text-3xl font-bold text-white mt-2 mb-4">{featured.title}</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{featured.excerpt}</p>
                <Link href="/blog" className="inline-flex items-center gap-2 text-[#00d4ff] font-medium hover:gap-4 transition-all">
                  Read Article →
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#00d4ff] text-black'
                  : 'bg-[#0f0f1a] text-gray-400 border border-[#00d4ff22] hover:text-white hover:border-[#00d4ff66]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-[#0f0f1a] border border-[#00d4ff11] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className={`h-40 bg-gradient-to-br ${post.gradient} relative`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 text-6xl">📖</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#00d4ff]">{post.category}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-white font-bold mb-3 leading-snug group-hover:text-[#00d4ff] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#ffffff08]">
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <span className="text-[#00d4ff] text-xs font-medium">Read more →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
