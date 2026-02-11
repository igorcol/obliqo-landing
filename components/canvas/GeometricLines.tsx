"use client";

import { useMemo } from "react";
import * as THREE from "three";

// Um feixe sólido (tubo) em vez de uma linha fina
function RedBeam({ start, end }: { start: THREE.Vector3, end: THREE.Vector3 }) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  
  // Magia de vetor para orientar o cilindro na direção correta entre dois pontos
  const orientation = new THREE.Matrix4();
  orientation.lookAt(start, end, new THREE.Object3D().up);
  orientation.multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2));
  
  const quaternion = new THREE.Quaternion();
  quaternion.setFromRotationMatrix(orientation);
  const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);

  return (
    <mesh position={midPoint} quaternion={quaternion}>
      {/* CILINDRO: args=[raioTopo, raioBase, altura] */}
      {/* 0.04 é a espessura. Se quiser mais grosso, aumente aqui */}
      <cylinderGeometry args={[0.04, 0.04, length, 8]} />
      <meshBasicMaterial color="#FF0000" toneMapped={false} />
    </mesh>
  );
}

export default function GeometricLines() {
  // Gera pares de coordenadas para as linhas
  const linesData = useMemo(() => {
    const data = [];
    for (let i = 0; i < 6; i++) { // 6 Linhas cruzadas
      data.push({
        start: new THREE.Vector3(
          THREE.MathUtils.randFloat(-15, -5), // Começa na esquerda
          THREE.MathUtils.randFloat(-8, 8),
          THREE.MathUtils.randFloat(-5, -2)   // Atrás do texto
        ),
        end: new THREE.Vector3(
          THREE.MathUtils.randFloat(5, 15),   // Termina na direita
          THREE.MathUtils.randFloat(-8, 8),
          THREE.MathUtils.randFloat(-2, 2)    // Cruza para frente
        )
      });
    }
    return data;
  }, []);

  return (
    <group>
      {linesData.map((line, i) => (
        <RedBeam key={i} start={line.start} end={line.end} />
      ))}
    </group>
  );
}