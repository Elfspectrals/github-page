import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import { PresentationControls } from '@react-three/drei';
import { PerspectiveCamera } from 'three';


function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} dispose={null} />;
}

function ThreeJS() {
  const models = [
    { url: '/assets/models/bmw.glb', zoom: 0.5, position: [0, 0, 100] },
    { url: '/assets/models/flintstones_car.glb', zoom: 0.8, position: [0, 0, 200] },
    { url: '/assets/models/shiba.glb', zoom: 1.2, position: [0, 0, 150] },
    // { url: '/assets/models/room1.glb', zoom: 3.5, position: [0, 0, -50] },
    // Ajoutez plus de modèles ici si nécessaire...
  ].map(model => ({ ...model, url: (process.env.PUBLIC_URL ?? '') + model.url }));

  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const nextModel = () => setCurrentModelIndex((currentModelIndex + 1) % models.length);
  const prevModel = () => setCurrentModelIndex((currentModelIndex - 1 + models.length) % models.length);

  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(...models[currentModelIndex].position); // Utiliser la position correspondante au modèle chargé
  camera.zoom = models[currentModelIndex].zoom; // Utiliser le niveau de zoom correspondant au modèle chargé

  return (
    <div>
      <button onClick={prevModel}>Précédent</button>
      <button onClick={nextModel}>Suivant</button>
      <Canvas camera={camera} dpr={[1, 2]} shadows style={{ position: 'absolute' }}>
        <color attach="background" args={['#101010']} />
        <ambientLight position={[0, 10, 0]} intensity={3} />
        <PresentationControls speed={1.5} global zoom={models[currentModelIndex].zoom} polar={[-0.1, Math.PI / 2]}>
          <Stage environment={null}>
            <Model url={models[currentModelIndex].url} scale={0.001} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default ThreeJS;