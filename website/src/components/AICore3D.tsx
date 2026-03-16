'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.5;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2;
      innerRef.current.rotation.y = t * 0.4;
      const scale = 1 + 0.05 * Math.sin(t * 2);
      innerRef.current.scale.setScalar(scale);
    }
  });

  return (
    <>
      {/* Outer torus knot */}
      <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          distort={0.2}
          speed={2}
          wireframe={false}
          transparent
          opacity={0.85}
        />
      </TorusKnot>

      {/* Inner icosahedron */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#7b2fff"
          emissive="#7b2fff"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Glow sphere */}
      <mesh>
        <sphereGeometry args={[1.8, 16, 16]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>

      <ambientLight intensity={0.2} />
      <pointLight color="#00d4ff" intensity={2} position={[3, 3, 3]} />
      <pointLight color="#7b2fff" intensity={1.5} position={[-3, -3, -3]} />
    </>
  );
}

export default function AICore3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <CoreMesh />
      </Canvas>
    </div>
  );
}
