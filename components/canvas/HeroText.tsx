"use client";

import { Text, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HeroText() {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      // Pega a posição do mouse (vai de -1 a 1)
      const { x, y } = state.pointer;

      // Faz o texto girar levemente na direção do mouse
      // Lerp (Linear Interpolation) deixa o movimento suave
      textRef.current.rotation.x = THREE.MathUtils.lerp(
        textRef.current.rotation.x,
        -y * 0.1, // Intensidade da rotação vertical
        0.1
      );
      textRef.current.rotation.y = THREE.MathUtils.lerp(
        textRef.current.rotation.y,
        x * 0.1, // Intensidade da rotação horizontal
        0.1
      );
    }
  });

  return (
    // Float faz o texto flutuar suavemente (efeito de respiração)
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        ref={textRef}
        fontSize={1.5} // Tamanho gigante
        letterSpacing={-0.05} // Tracking apertado (estilo brutalista)
        //font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.ttf" // Vamos usar uma fonte padrão do sistema por enquanto ou carregar uma
        color="white"
        position={[0, 0, 0]}
        anchorX="center"
        anchorY="middle"
      >
        OBLIQO
        {/* Material do Texto: Uma mistura de metal e emissão de luz */}
        <meshStandardMaterial
          color="white"
          emissive="#ffffff" // Brilho interno
          emissiveIntensity={0.5}
          roughness={0.4} // Levemente fosco
          metalness={0.8} // Metálico
        />
      </Text>
    </Float>
  );
}