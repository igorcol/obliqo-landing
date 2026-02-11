"use client";

import { Text, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HeroText() {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      const { x, y } = state.pointer;
      // Movimento sutil mantido
      textRef.current.rotation.x = THREE.MathUtils.lerp(textRef.current.rotation.x, -y * 0.1, 0.05);
      textRef.current.rotation.y = THREE.MathUtils.lerp(textRef.current.rotation.y, x * 0.1, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
      <Text
        ref={textRef}
        fontSize={2.5} // Um pouco maior para compensar a falta de brilho
        fontWeight="bold" // Fonte grossa padrão do sistema
        letterSpacing={-0.02} // Tracking um pouco mais solto para fonte padrão
        position={[0, 0, 0]}
        anchorX="center"
        anchorY="middle"
        // Nenhuma prop 'font' = usa a padrão do sistema
      >
        OBLIQO
        
        {/* MATERIAL BÁSICO: Cor chapada, sem reação à luz, sem brilho */}
        <meshBasicMaterial
          color="#FF0000"
          toneMapped={false}
        />
      </Text>
    </Float>
  );
}
