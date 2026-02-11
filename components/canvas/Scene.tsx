"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";
import NoiseBackground from "./NoiseBackground";

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-obliqo-black pointer-events-none">
      {/* O Canvas é a janela para o mundo 3D */}
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]} // Otimização de pixel ratio para telas retina
        gl={{ antialias: false }} // Desliga antialias para performance e look "raw"
      >
        <Suspense fallback={null}>
          <NoiseBackground />
        </Suspense>
        
        {/* Carrega assets em background para não travar o scroll depois */}
        <Preload all />
      </Canvas>
    </div>
  );
}