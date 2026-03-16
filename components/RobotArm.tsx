"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function RobotArm() {
  const groupRef = useRef<THREE.Group>(null);
  const forearmRef = useRef<THREE.Mesh>(null);
  const wristRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.4;
    }
    if (forearmRef.current) {
      forearmRef.current.rotation.x = Math.sin(t * 0.5) * 0.3 - 0.2;
    }
    if (wristRef.current) {
      wristRef.current.rotation.x = Math.cos(t * 0.7) * 0.4;
    }
  });

  const mat = new THREE.MeshStandardMaterial({
    color: "#1a2035",
    metalness: 0.9,
    roughness: 0.2,
    emissive: new THREE.Color("#22d3ee"),
    emissiveIntensity: 0.04,
  });

  const glowMat = new THREE.MeshStandardMaterial({
    color: "#22d3ee",
    emissive: new THREE.Color("#22d3ee"),
    emissiveIntensity: 1.5,
    metalness: 0,
    roughness: 0.1,
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={1.1}>
      {/* Base */}
      <mesh material={mat} castShadow>
        <cylinderGeometry args={[0.55, 0.7, 0.3, 32]} />
      </mesh>
      {/* Base ring glow */}
      <mesh material={glowMat} position={[0, 0.16, 0]}>
        <torusGeometry args={[0.55, 0.025, 16, 60]} />
      </mesh>

      {/* Lower arm */}
      <group position={[0, 0.15, 0]}>
        <mesh material={mat} position={[0, 0.55, 0]} castShadow>
          <cylinderGeometry args={[0.14, 0.18, 1.1, 24]} />
        </mesh>
        {/* Elbow joint */}
        <mesh material={mat} position={[0, 1.1, 0]} castShadow>
          <sphereGeometry args={[0.2, 24, 24]} />
        </mesh>
        {/* Forearm */}
        <group position={[0, 1.1, 0]}>
          <mesh ref={forearmRef} material={mat} position={[0, 0.5, 0]} castShadow>
            <cylinderGeometry args={[0.11, 0.14, 1.0, 20]} />
          </mesh>
          {/* Wrist joint */}
          <group position={[0, 1.0, 0]}>
            <mesh material={mat} castShadow>
              <sphereGeometry args={[0.15, 20, 20]} />
            </mesh>
            {/* Hand/gripper */}
            <group ref={wristRef} position={[0, 0.1, 0]}>
              {/* Gripper fingers */}
              {[-0.13, 0.13].map((x, i) => (
                <mesh key={i} material={mat} position={[x, 0.2, 0]} castShadow>
                  <boxGeometry args={[0.06, 0.3, 0.06]} />
                </mesh>
              ))}
              {/* Glow tip */}
              <mesh material={glowMat} position={[0, 0.35, 0]}>
                <sphereGeometry args={[0.04, 12, 12]} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
