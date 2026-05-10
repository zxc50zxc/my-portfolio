"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { ExtrudeGeometry, Group, Shape } from "three";

function createHeartShape() {
  const shape = new Shape();
  const x = -0.5;
  const y = -0.5;
  shape.moveTo(x + 0.5, y + 0.5);
  shape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
  shape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
  shape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.1, y + 1.54, x + 0.5, y + 1.9);
  shape.bezierCurveTo(x + 1.1, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
  shape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
  shape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);
  return shape;
}

function HeartPulse() {
  const meshRef = useRef<Group>(null);
  const geo = useMemo(() => {
    const g = new ExtrudeGeometry(createHeartShape(), {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 2,
      curveSegments: 12,
    });
    g.center();
    return g;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = Math.sin(t * 0.8) * 0.35;
    const pulse = 1 + Math.sin(t * 2.2) * 0.06;
    meshRef.current.scale.setScalar(0.085 * pulse);
  });

  return (
    <group ref={meshRef} position={[0, 0.55, 0]}>
      <mesh geometry={geo} rotation={[0, 0, Math.PI]}>
        <meshStandardMaterial
          color="#f472b6"
          emissive="#db2777"
          emissiveIntensity={0.35}
          metalness={0.15}
          roughness={0.45}
        />
      </mesh>
    </group>
  );
}

type PlanetProps = {
  orbitRadius: number;
  orbitSpeed: number;
  phase: number;
  size: number;
  color: string;
  emissive?: string;
  emissiveIntensity?: number;
  ring?: boolean;
};

function Planet({
  orbitRadius,
  orbitSpeed,
  phase,
  size,
  color,
  emissive,
  emissiveIntensity = 0,
  ring,
}: PlanetProps) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * orbitSpeed + phase;
    ref.current.position.set(Math.cos(t) * orbitRadius, 0, Math.sin(t) * orbitRadius);
    ref.current.rotation.y += 0.012;
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[size, 28, 28]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive ?? "#000000"}
          emissiveIntensity={emissiveIntensity}
          metalness={0.12}
          roughness={0.72}
        />
      </mesh>
      {ring ? (
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <torusGeometry args={[size * 1.75, 0.035, 12, 48]} />
          <meshStandardMaterial color="#c7d2fe" metalness={0.25} roughness={0.4} />
        </mesh>
      ) : null}
    </group>
  );
}

function SunCore() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.38, 36, 36]} />
        <meshStandardMaterial
          color="#fcd34d"
          emissive="#f59e0b"
          emissiveIntensity={0.85}
          metalness={0.05}
          roughness={0.35}
        />
      </mesh>
    </group>
  );
}

function PlanetaryWellness() {
  const root = useRef<Group>(null);
  useFrame((state) => {
    if (!root.current) return;
    root.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <group ref={root}>
      <SunCore />
      <HeartPulse />
      <Planet
        orbitRadius={0.95}
        orbitSpeed={0.55}
        phase={0}
        size={0.11}
        color="#34d399"
        emissive="#059669"
        emissiveIntensity={0.12}
      />
      <Planet
        orbitRadius={1.28}
        orbitSpeed={0.38}
        phase={1.2}
        size={0.14}
        color="#38bdf8"
        emissive="#0284c7"
        emissiveIntensity={0.08}
      />
      <Planet
        orbitRadius={1.62}
        orbitSpeed={0.26}
        phase={2.1}
        size={0.12}
        color="#a78bfa"
        emissive="#7c3aed"
        emissiveIntensity={0.1}
        ring
      />
      <Planet
        orbitRadius={1.98}
        orbitSpeed={0.18}
        phase={0.7}
        size={0.09}
        color="#fb923c"
        emissive="#ea580c"
        emissiveIntensity={0.06}
      />
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
      <Canvas camera={{ position: [0, 0.35, 5.2], fov: 45 }}>
        <ambientLight intensity={isLight ? 0.85 : 0.55} />
        <directionalLight position={[4, 3, 2]} intensity={isLight ? 0.9 : 0.65} />
        <pointLight position={[-2, 1.5, 3]} intensity={0.55} color="#93c5fd" />
        <Float speed={1.05} rotationIntensity={0.35} floatIntensity={0.55}>
          <PlanetaryWellness />
        </Float>
      </Canvas>
    </div>
  );
}
