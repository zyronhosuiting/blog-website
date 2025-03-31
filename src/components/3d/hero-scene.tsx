"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  PerspectiveCamera,
  Grid,
  MeshDistortMaterial,
  Text,
} from "@react-three/drei";
import type { Mesh, Group } from "three";
import { motion } from "framer-motion";

function FloatingShape({
  position,
  color,
  speed = 1,
  scale = 1,
  distort = 0.4,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
  distort?: number;
}) {
  const mesh = useRef<Mesh>(null!);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.1;
    mesh.current.rotation.x = Math.sin(t / 4) / 2;
    mesh.current.rotation.y = Math.sin(t / 2) / 2;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color={color}
        speed={0.5}
        distort={distort}
        roughness={0.5}
        metalness={0.8}
      />
    </mesh>
  );
}

function FloatingText({ position }: { position: [number, number, number] }) {
  const group = useRef<Group>(null!);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = position[1] + Math.sin(t / 2) * 0.1;
  });

  return (
    <group ref={group} position={position}>
      <Float floatIntensity={0.2} rotationIntensity={0.2} speed={2}>
        <Text
          fontSize={1.2}
          color="#60a5fa"
          anchorX="center"
          font="/inter-bold.woff"
        >
          DEV
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.1}
            toneMapped={false}
          />
        </Text>
      </Float>
    </group>
  );
}

function GridFloor() {
  return (
    <Grid
      position={[0, -2, 0]}
      cellSize={1}
      cellThickness={0.6}
      cellColor="#3b82f6"
      sectionSize={3}
      sectionThickness={1}
      sectionColor="#8b5cf6"
      fadeDistance={30}
      infiniteGrid
      fadeStrength={1.5}
    />
  );
}

function CameraRig() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.x = Math.sin(t / 8) * 2;
    state.camera.position.y = 1 + Math.sin(t / 6) * 0.5;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

// Simple fallback component when 3D isn't available or loading
function FallbackHero() {
  return (
    <div className="h-[30vh] md:h-[40vh] lg:h-[50vh] w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
      <div className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        DEV
      </div>
    </div>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Set a timeout to detect if 3D content fails to load
    const timeout = setTimeout(() => {
      setLoadFailed(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!mounted || loadFailed) return <FallbackHero />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[30vh] md:h-[40vh] lg:h-[50vh] w-full rounded-xl overflow-hidden"
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={50} />
        <CameraRig />

        <ambientLight intensity={0.2} />
        <spotLight position={[5, 5, 5]} intensity={0.8} castShadow />

        <FloatingText position={[0, 0, 0]} />
        <FloatingShape position={[-2, 0, -1]} color="#3b82f6" speed={1.5} />
        <FloatingShape position={[2, 0.5, -2]} color="#8b5cf6" speed={1} />
        <FloatingShape
          position={[1, -0.5, -1]}
          color="#ec4899"
          speed={0.8}
          scale={0.6}
        />
        <FloatingShape
          position={[-1.5, 0.5, -3]}
          color="#10b981"
          speed={1.2}
          scale={0.8}
        />

        <GridFloor />

        <Environment preset="night" />
      </Canvas>
    </motion.div>
  );
}
