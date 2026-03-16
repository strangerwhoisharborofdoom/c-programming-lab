"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed", desc: "Across diverse industries worldwide" },
  { value: 50, suffix: "+", label: "Industries Served", desc: "From manufacturing to healthcare" },
  { value: 99, suffix: "%", label: "Client Satisfaction", desc: "Measured through ongoing surveys" },
  { value: 10, suffix: "+", label: "Years Experience", desc: "Leading the robotics revolution" },
];

function Counter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-600/5" />
      <div className="absolute inset-0 circuit-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-xl transition-all group"
            >
              <p className="text-4xl xl:text-5xl font-bold text-cyan-400 text-glow-cyan mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-slate-500 text-xs">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
