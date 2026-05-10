"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
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

const ORBIT_RADII = [0.95, 1.28, 1.62, 1.98] as const;

function OrbitRing({ radius, color }: { radius: number; color: string }) {
  const points = useMemo(() => {
    const segs = 96;
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      pts.push([Math.cos(a) * radius, 0, Math.sin(a) * radius]);
    }
    return pts;
  }, [radius]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={1.35}
      transparent
      opacity={0.55}
      depthWrite={false}
    />
  );
}

function HealthDataCore() {
  const ref = useRef<Group>(null);
  const inner = useRef<Group>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) ref.current.rotation.y = t * 0.11;
    if (inner.current) inner.current.rotation.z = t * 0.22;
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.3, 36, 36]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0369a1"
          emissiveIntensity={0.45}
          metalness={0.08}
          roughness={0.42}
        />
      </mesh>
      <group ref={inner}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.44, 0.012, 8, 56]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={0.35}
            metalness={0.2}
            roughness={0.35}
          />
        </mesh>
      </group>
      <mesh rotation={[Math.PI / 2, 0.4, 0]}>
        <torusGeometry args={[0.36, 0.008, 8, 48]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={0.25}
          metalness={0.15}
          roughness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>
      <group scale={0.22}>
        <mesh>
          <boxGeometry args={[0.35, 1, 0.35]} />
          <meshStandardMaterial color="#e0f2fe" emissive="#bae6fd" emissiveIntensity={0.2} roughness={0.35} />
        </mesh>
        <mesh>
          <boxGeometry args={[1, 0.35, 0.35]} />
          <meshStandardMaterial color="#e0f2fe" emissive="#bae6fd" emissiveIntensity={0.2} roughness={0.35} />
        </mesh>
      </group>
    </group>
  );
}

function PillMesh() {
  const r = 0.055;
  const half = 0.09;
  return (
    <group>
      <mesh position={[0, half + r, 0]}>
        <sphereGeometry args={[r, 18, 18]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.35} metalness={0.05} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[r, r, half * 2, 18]} />
        <meshStandardMaterial color="#ef4444" emissive="#991b1b" emissiveIntensity={0.12} roughness={0.45} />
      </mesh>
      <mesh position={[0, -half - r, 0]}>
        <sphereGeometry args={[r, 18, 18]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.35} metalness={0.05} />
      </mesh>
    </group>
  );
}

function MiniDNAHelix() {
  const helixRadius = 0.11;
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (group.current) group.current.rotation.y = state.clock.elapsedTime * 0.55;
  });

  const rungs = useMemo(() => {
    const n = 11;
    const radius = helixRadius;
    return Array.from({ length: n }, (_, index) => {
      const angle = index * 0.62;
      const y = (index - n * 0.5) * 0.075;
      return {
        y,
        angle,
        left: [Math.cos(angle) * radius, y, Math.sin(angle) * radius] as const,
        right: [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius] as const,
      };
    });
  }, [helixRadius]);

  return (
    <group ref={group}>
      {rungs.map((rung, index) => (
        <group key={`dna-${index}`}>
          <mesh position={rung.left}>
            <sphereGeometry args={[0.026, 10, 10]} />
            <meshStandardMaterial color="#60a5fa" emissive="#1d4ed8" emissiveIntensity={0.15} />
          </mesh>
          <mesh position={rung.right}>
            <sphereGeometry args={[0.026, 10, 10]} />
            <meshStandardMaterial color="#93c5fd" emissive="#2563eb" emissiveIntensity={0.12} />
          </mesh>
          <mesh position={[0, rung.y, 0]} rotation={[0, rung.angle * 1.4, 0]}>
            <cylinderGeometry args={[0.008, 0.008, helixRadius * 2.05, 8]} />
            <meshStandardMaterial color="#1e40af" roughness={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function MedicalCrossMesh() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.11, 0.36, 0.11]} />
        <meshStandardMaterial
          color="#f8fafc"
          emissive="#e2e8f0"
          emissiveIntensity={0.18}
          metalness={0.12}
          roughness={0.35}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[0.36, 0.11, 0.11]} />
        <meshStandardMaterial
          color="#f8fafc"
          emissive="#e2e8f0"
          emissiveIntensity={0.18}
          metalness={0.12}
          roughness={0.35}
        />
      </mesh>
    </group>
  );
}

function HeartOrbiterMesh() {
  const geo = useMemo(() => {
    const g = new ExtrudeGeometry(createHeartShape(), {
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.015,
      bevelSegments: 2,
      curveSegments: 10,
    });
    g.center();
    return g;
  }, []);

  return (
    <mesh geometry={geo} rotation={[0, 0, Math.PI]} scale={0.088}>
      <meshStandardMaterial
        color="#f472b6"
        emissive="#db2777"
        emissiveIntensity={0.28}
        metalness={0.12}
        roughness={0.45}
      />
    </mesh>
  );
}

type HealthOrbiterVariant = "pill" | "dna" | "cross" | "heart";

function OrbitingHealthItem({
  orbitRadius,
  orbitSpeed,
  phase,
  variant,
}: {
  orbitRadius: number;
  orbitSpeed: number;
  phase: number;
  variant: HealthOrbiterVariant;
}) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * orbitSpeed + phase;
    ref.current.position.set(Math.cos(t) * orbitRadius, 0, Math.sin(t) * orbitRadius);
    ref.current.rotation.y += 0.014;
  });

  return (
    <group ref={ref}>
      {variant === "pill" ? <PillMesh /> : null}
      {variant === "dna" ? <MiniDNAHelix /> : null}
      {variant === "cross" ? <MedicalCrossMesh /> : null}
      {variant === "heart" ? <HeartOrbiterMesh /> : null}
    </group>
  );
}

function HealthOrbitScene({ isLight }: { isLight: boolean }) {
  const root = useRef<Group>(null);
  useFrame((state) => {
    if (!root.current) return;
    root.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  const ringColor = isLight ? "#94a3b8" : "#71717a";

  return (
    <group ref={root}>
      {ORBIT_RADII.map((r) => (
        <OrbitRing key={r} radius={r} color={ringColor} />
      ))}
      <HealthDataCore />
      <OrbitingHealthItem orbitRadius={0.95} orbitSpeed={0.52} phase={0} variant="pill" />
      <OrbitingHealthItem orbitRadius={1.28} orbitSpeed={0.36} phase={1.15} variant="dna" />
      <OrbitingHealthItem orbitRadius={1.62} orbitSpeed={0.24} phase={2.05} variant="cross" />
      <OrbitingHealthItem orbitRadius={1.98} orbitSpeed={0.17} phase={0.65} variant="heart" />
    </group>
  );
}

export function HeroScene({ isLight = false }: { isLight?: boolean }) {
  const canvasBg = isLight ? "#e8edf3" : "#131316";

  return (
    <div
      className={`h-[380px] rounded-2xl border ${
        isLight ? "border-slate-300 bg-slate-100/70" : "border-zinc-800 bg-zinc-900/30"
      }`}
    >
      <Canvas camera={{ position: [0.42, 0.2, 5.35], fov: 45 }}>
        <color attach="background" args={[canvasBg]} />
        <ambientLight intensity={isLight ? 0.78 : 0.5} />
        <directionalLight position={[4.2, 3.2, 2.2]} intensity={isLight ? 0.85 : 0.62} />
        <pointLight position={[-2.2, 1.6, 3.2]} intensity={0.48} color="#7dd3fc" />
        <Float speed={0.9} rotationIntensity={0.14} floatIntensity={0.34}>
          <group rotation={[0.26, 0.14, -0.06]}>
            <HealthOrbitScene isLight={isLight} />
          </group>
        </Float>
      </Canvas>
    </div>
  );
}
