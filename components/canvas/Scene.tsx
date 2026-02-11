"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";
import NoiseBackground from "./NoiseBackground";
import HeroText from "./HeroText"; 

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-obliqo-black pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }} 
        dpr={[1, 2]}
        gl={{ antialias: false }}
      >
        {/* Luz Ambiente (base fraca) */}
        <ambientLight intensity={0.5} />
        
        {/* Luz Direcional (como um holofote de balada) */}
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00FFFF" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#FF0000" />

        <Suspense fallback={null}>
          <NoiseBackground />
          <HeroText /> 
        </Suspense>
        
        <Preload all />
      </Canvas>
    </div>
  );
}