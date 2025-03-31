"use client";

import { useRef, useState, useEffect, JSX } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
} from "@react-three/drei";
import type { Group } from "three";

function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<Group>(null!);

  // Use a simple cube as a placeholder
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#3b82f6"
          roughness={0.1}
          metalness={0.8}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

// Simple fallback component when 3D isn't available or loading
function FallbackCube() {
  return (
    <div className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
      <div className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        3D
      </div>
    </div>
  );
}

export default function TechCube({ className = "" }: { className?: string }) {
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

  if (!mounted || loadFailed) return <FallbackCube />;

  return (
    <div
      className={`h-[150px] w-[150px] md:h-[200px] md:w-[200px] ${className}`}
    >
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} intensity={0.8} castShadow />

        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <Float rotationIntensity={0.5} floatIntensity={0.5}>
            <Model
              rotation={[0, Math.PI / 4, 0]}
              position={[0, 0, 0]}
              scale={1.5}
            />
          </Float>
        </PresentationControls>

        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={5}
          blur={2.5}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
