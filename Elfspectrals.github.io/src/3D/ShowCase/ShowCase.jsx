import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ShowCase() {
  const canvasRef = useRef(null);
  const [selectedScene, setSelectedScene] = useState('scene1');

  useEffect(() => {
    let scene, camera, renderer, cube, controls, gui;

    const initializeScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight );
      scene.background = new THREE.Color('#FFA500');


      if (selectedScene === 'scene1') {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.rotateSpeed = 0.35;

        gui = new GUI();
        const guiDomElement = gui.domElement;
        guiDomElement.style.border = '5px solid orange';
        guiDomElement.style.position = 'relative ';
        guiDomElement.style.top = '30vh';
        guiDomElement.style.right = '3vw';

    
        gui.add(cube.rotation, 'x', 0, Math.PI).name('rotation');
        gui.add(cube.scale, 'y', 1, 5, 0.1).name('Scaling');
        const materialParams = {
          cubeColor: cube.material.color.getHex(),
        };
        gui.add(cube.material, 'wireframe').name('Wireframe');
        gui.addColor(materialParams, 'cubeColor').onChange((value) => cube.material.color.set(value));

      } else if (selectedScene === 'scene2') {
        
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.rotateSpeed = 0.35;
        gui = new GUI()
        const guiDomElement = gui.domElement;
        guiDomElement.style.border = '5px solid orange';
        guiDomElement.style.position = 'relative ';
        guiDomElement.style.top = '30vh';
        guiDomElement.style.right = '3vw';
        

        gui.add(cube.rotation, 'y', 0, Math.PI).name('rotation');
        gui.add(cube.scale, 'x', 1, 5, 0.1).name('Scaling');
        const materialParams = {
          cubeColor: cube.material.color.getHex(),
        };
        gui.add(cube.material, 'wireframe').name('Wireframe');
        gui.addColor(materialParams, 'cubeColor').onChange((value) => cube.material.color.set(value));
      }

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();
    };

    initializeScene();

    return () => {
      gui.destroy();
      renderer.dispose();
      cube.geometry.dispose();
      cube.material.dispose();
    };
  }, [selectedScene]);

  const handleSceneChange = (event) => {
    setSelectedScene(event.target.value);
  };

  return (
    <div>
      <select value={selectedScene} onChange={handleSceneChange}>
        <option value="scene1">Scene 1</option>
        <option value="scene2">Scene 2</option>
      </select>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default ShowCase;