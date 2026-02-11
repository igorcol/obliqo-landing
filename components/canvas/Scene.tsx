"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, Html, useProgress } from "@react-three/drei";
// @ts-expect-error: React 19 compat
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { Suspense } from "react";
import * as THREE from "three";
import NoiseBackground from "./NoiseBackground";
import HeroText from "./HeroText";
import GeometricLines from "./GeometricLines";

function Loader() {
  const { progress } = useProgress();
  return <Html center className="text-obliqo-red font-mono text-xs tracking-widest">{progress.toFixed(0)}%</Html>;
}

function PostProcessing() {
  return (
    <EffectComposer disableNormalPass>
      {/* NOISE ULTRA SUTIL: 0.02 */}
      {/* É o suficiente para dar textura de "filme" sem sujar a imagem */}
      {/* @ts-expect-error: React 19 compat */}
      <Noise opacity={0.02} /> 
      
      {/* Vignette para focar o olhar no centro */}
      {/* @ts-expect-error: React 19 compat */}
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
}

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-obliqo-black pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          toneMapping: THREE.NoToneMapping // Cores puras (Vermelho #FF0000 real)
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#000000'))
        }}
      >
        <ambientLight intensity={0} />

        <Suspense fallback={<Loader />}>
          <NoiseBackground />
          <HeroText />
          <GeometricLines />
        </Suspense>

        <PostProcessing />
        <Preload all />
      </Canvas>
    </div>
  );
}