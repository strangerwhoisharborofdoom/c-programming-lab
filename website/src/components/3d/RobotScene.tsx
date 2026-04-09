"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function RobotArm() {
  const groupRef = useRef<THREE.Group>(null);
  const joint1Ref = useRef<THREE.Mesh>(null);
  const joint2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
    }
    if (joint1Ref.current) {
      joint1Ref.current.rotation.x = Math.sin(t * 0.8) * 0.4;
    }
    if (joint2Ref.current) {
      joint2Ref.current.rotation.x = Math.sin(t * 1.2) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.4, 16]} />
        <meshStandardMaterial color="#0891b2" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Lower arm */}
      <mesh ref={joint1Ref} position={[0, -0.5, 0]}>
        <boxGeometry args={[0.3, 1.5, 0.3]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.9} roughness={0.1} />
        {/* Upper arm */}
        <mesh ref={joint2Ref} position={[0, 1.2, 0]}>
          <boxGeometry args={[0.25, 1.2, 0.25]} />
          <meshStandardMaterial color="#22d3ee" metalness={0.9} roughness={0.1} />
          {/* End effector */}
          <mesh position={[0, 0.8, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial
              color="#00d4ff"
              metalness={1}
              roughness={0}
              emissive="#00d4ff"
              emissiveIntensity={0.5}
            />
          </mesh>
        </mesh>
      </mesh>
      {/* Joint spheres */}
      <mesh position={[0, -1.5, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.8}
          roughness={0.2}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.8}
          roughness={0.2}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

function FloatingOrbs() {
  const orbs: { pos: [number, number, number]; color: string; size: number }[] = [
    { pos: [2, 1, -1], color: "#00d4ff", size: 0.15 },
    { pos: [-2, 0.5, 0.5], color: "#7c3aed", size: 0.1 },
    { pos: [1.5, -1, 1], color: "#06b6d4", size: 0.12 },
    { pos: [-1.5, 1.5, -0.5], color: "#a855f7", size: 0.08 },
  ];

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={2 + i * 0.5} rotationIntensity={1} floatIntensity={2}>
          <mesh position={orb.pos}>
            <sphereGeometry args={[orb.size, 16, 16]} />
            <meshStandardMaterial
              color={orb.color}
              emissive={orb.color}
              emissiveIntensity={1}
              metalness={1}
              roughness={0}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function RobotScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7c3aed" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />

        <Stars radius={50} depth={50} count={1000} factor={4} fade speed={1} />

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <RobotArm />
        </Float>

        <FloatingOrbs />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
