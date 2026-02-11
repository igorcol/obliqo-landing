"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// O Shader escrito em GLSL (Linguagem de GPU)
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;

  // Função de pseudo-random simples
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    // Cria um ruído que muda com o tempo (uTime)
    float noise = random(vUv * 100.0 + uTime);
    
    // Mistura a cor preta (base) com o ruído cinza escuro
    // O valor 0.05 define a intensidade do grão (bem sutil)
    vec3 color = uColor + vec3(noise * 0.05);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function NoiseBackground() {
  // Tipamos o ref como THREE.Mesh
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#050505") },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      
      if (material.uniforms) {
        material.uniforms.uTime.value = state.clock.getElapsedTime();
      }
    }
  });

  return (
    <mesh ref={meshRef} scale={[100, 100, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}