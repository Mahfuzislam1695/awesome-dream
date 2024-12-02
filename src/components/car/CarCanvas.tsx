"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bmw from "./Bmw";

const CarCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 30, 100], fov: 45 }}
      className="h-[100vh] absolute top-0 left-0 right-0 bottom-0"
    >
      <ambientLight intensity={0.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
      <Stage environment={"city"}>
        <Bmw scale={0.5} rotation={[0, 0, 0]} />
      </Stage>
    </Canvas>
  );
};

export default CarCanvas;
