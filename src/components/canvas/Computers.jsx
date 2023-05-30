import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');
  const groupRef = useRef();

  useFrame(() => {
    // Rotate the object
    groupRef.current.rotation.y += 0.0001;
  });

  return (
    <group ref={groupRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={6} />
      <spotLight
        position={[-100, 90, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive object={scene} scale={15} position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </group>
  );
}

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 50], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom
          enableRotate
          enablePan={false}
          minDistance={5}
          maxDistance={Infinity}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
        <group position={[0, 0, 0]}>
          <Computers />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default ComputersCanvas;
