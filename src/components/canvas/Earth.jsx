import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Preload,
  OrbitControls,
  Environment,
} from "@react-three/drei";

// Component Trái Đất quay quanh trục
const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  const earthRef = useRef();

  // Tự quay quanh trục Y
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01; // tốc độ quay
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={[0.005, 0.005, 0.005]} // giữ kích thước cố định
      position={[0, 0, 0]} // không di chuyển
    />
  );
};

// Canvas chứa mô hình Trái Đất
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 10] }}
    >
      {/* Ánh sáng */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Môi trường ánh sáng */}
      <Environment preset="sunset" />

      {/* Tải mô hình và điều khiển */}
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
