import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import { OrbitControls, Html, Loader, PresentationControls } from '@react-three/drei';
import { Camera } from 'three';

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} dispose={null} />;
}

function ThreeJS() {
  const modelUrl = (process.env.PUBLIC_URL ?? '') + '/bmw.glb'; 

  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute' }}>
      <color attach="background" args={['#101010']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={null}>
          <Model url={modelUrl} scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default ThreeJS;