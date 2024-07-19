import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  Text,
  OrbitControls,
} from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState, useCallback } from "react";
import { useMedia } from "react-use";
// @ts-ignore
import { debounce } from "lodash";
import s from "./Canvas.module.css";
import { media } from "@/utils/media";

export function DynamicCanvas() {
  return (
    <div className={s["canvas"]}>
      <Canvas
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        gl={{ antialias: false }}
      >
        <CanvasElements text="X X X X X X X X X X X X X X" />
      </Canvas>
    </div>
  );
}

const CanvasElements = React.memo(({ text }: { text: string }) => {
  const isMobile = useMedia(media.laptop.max);
  const [materialProps, setMaterialProps] = useState({
    thickness: 10,
    backsideThickness: 10,
    distortionScale: 10,
    temporalDistortion: 10,
  });

  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    debounce((event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 4 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 4 + 1;
    }, 10),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.1;
    camera.position.y += (mouse.current.y * 0.5 - camera.position.y) * 0.1;
    camera.lookAt(0, 0, 0);
  });

  const textPositions: { x: number; z: number }[] = [];
  const angleStep = (2 * Math.PI) / text.length;

  for (let i = 0; i < text.length; i++) {
    const angle = i * angleStep;
    const x = 0.9 * Math.cos(angle);
    const z = 0.9 * Math.sin(angle);
    textPositions.push({ x, z });
  }

  return (
    <Suspense>
      <Float speed={6}>
        <group scale={isMobile ? 1.8 : 2.6}>
          <mesh>
            <sphereGeometry />
            <MeshTransmissionMaterial
              backside
              roughness={0.1}
              thickness={materialProps.thickness}
              backsideThickness={materialProps.backsideThickness}
              distortionScale={materialProps.distortionScale}
              temporalDistortion={materialProps.temporalDistortion}
            />
          </mesh>
          {text.split("").map((char: string, index: number) => (
            <Text
              key={index}
              position={[textPositions[index].x, 0, textPositions[index].z]}
              rotation={[0, angleStep * index + Math.PI / 2, 0]}
              fontSize={0.3}
              lineHeight={1}
              letterSpacing={0}
              color="#2a9d8f"
              textAlign="center"
            >
              {char}
            </Text>
          ))}
        </group>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Float>
    </Suspense>
  );
});

export default DynamicCanvas;
