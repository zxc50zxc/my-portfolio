"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function DNAHelix() {
  const group = useRef<Group | null>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.35;
  });

  const points = useMemo(
    () =>
      new Array(30).fill(0).map((_, index) => {
        const angle = index * 0.55;
        const y = (index - 15) * 0.12;
        const radius = 0.74;
        return {
          left: [Math.cos(angle) * radius, y, Math.sin(angle) * radius] as const,
          right: [
            Math.cos(angle + Math.PI) * radius,
            y,
            Math.sin(angle + Math.PI) * radius,
          ] as const,
        };
      }),
    [],
  );

  return (
    <group ref={group}>
      {points.map((point) => (
        <group key={`pair-${point.left[1]}`}>
          <mesh position={point.left}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#60a5fa" />
          </mesh>
          <mesh position={point.right}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#93c5fd" />
          </mesh>
          <mesh position={[0, point.left[1], 0]} rotation={[0, point.left[1] * 1.5, 0]}>
            <cylinderGeometry args={[0.012, 0.012, 1.35, 12]} />
            <meshStandardMaterial color="#1d4ed8" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function HeroScene({ isLight = false }: { isLight?: boolean }) {
  return (
    <div
      className={`h-[380px] rounded-2xl border ${
        isLight ? "border-slate-300 bg-slate-100/70" : "border-zinc-800 bg-zinc-900/30"
      }`}
    >
      <Canvas camera={{ position: [0, 0, 4.8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[2.5, 2.5, 3]} intensity={1.2} />
        <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.65}>
          <DNAHelix />
        </Float>
      </Canvas>
    </div>
  );
}
