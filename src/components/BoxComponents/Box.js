import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry'

export default function Box() {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.001;
    meshRef.current.rotation.x += 0.001;
  });
  return (
    <mesh ref={meshRef}>
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.6} position={[4, 3, 2]}></directionalLight>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial
        attach="material"
        color="#cf6679"
      ></meshLambertMaterial>
    </mesh>
  );
}
