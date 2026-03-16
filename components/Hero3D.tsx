"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const RobotArm = dynamic(() => import("./RobotArm"), { ssr: false });

export default function Hero3D() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 font-medium">
            Robotics • AI • Automation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight text-white">
            Build autonomous{" "}
            <span className="glow-text">robots</span> that think with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">AI</span>.
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            We design intelligent robotics platforms with real-time perception, predictive maintenance, and adaptive control.
          </p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link href="#services" className="btn-primary">Our services</Link>
            <Link href="/contact" className="btn-ghost">Book a call</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400"
          >
            {[["50+", "Projects deployed"], ["99%", "Uptime SLA"], ["24h", "Response time"]].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-cyan-400">{val}</div>
                <div>{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[300px] sm:h-[380px] lg:h-[520px] w-full rounded-3xl overflow-hidden border border-white/10"
          aria-hidden="true"
        >
          <Canvas camera={{ position: [3, 2.5, 3], fov: 45 }} dpr={[1, 2]}>
            <color attach="background" args={["#07090f"]} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 3]} intensity={1.5} color="#22d3ee" />
            <pointLight position={[-3, 3, -3]} intensity={0.8} color="#818cf8" />
            <Suspense fallback={null}>
              <Float rotationIntensity={1.2} floatIntensity={1.4} speed={2}>
                <RobotArm />
              </Float>
              <Environment preset="city" />
            </Suspense>
            <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.1} enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
