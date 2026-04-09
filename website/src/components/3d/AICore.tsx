"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z = t * 0.5;
      ringRef1.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.3) * 0.1;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z = -t * 0.4;
      ringRef2.current.rotation.y = Math.PI / 3 + Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group>
      {/* Core sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            color="#00d4ff"
            metalness={0.9}
            roughness={0.1}
            emissive="#0891b2"
            emissiveIntensity={0.4}
            wireframe={false}
          />
        </mesh>
        {/* Wireframe overlay */}
        <mesh>
          <sphereGeometry args={[1.01, 16, 16]} />
          <meshBasicMaterial color="#00d4ff" wireframe opacity={0.15} transparent />
        </mesh>
      </Float>

      {/* Orbit ring 1 */}
      <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.6, 0.02, 8, 64]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Orbit ring 2 */}
      <mesh ref={ringRef2} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2, 0.015, 8, 64]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Orbiting particle on ring 1 */}
      <OrbitalParticle radius={1.6} speed={1.5} color="#a855f7" />
      {/* Orbiting particle on ring 2 */}
      <OrbitalParticle radius={2} speed={-1.0} color="#00d4ff" offset={Math.PI} />
    </group>
  );
}

function OrbitalParticle({
  radius,
  speed,
  color,
  offset = 0,
}: {
  radius: number;
  speed: number;
  color: string;
  offset?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
}

export default function AICore() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[3, 3, 3]} intensity={1.5} color="#00d4ff" />
        <pointLight position={[-3, -3, -3]} intensity={0.8} color="#7c3aed" />

        <CoreSphere />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
