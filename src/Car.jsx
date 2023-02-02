import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {  Mesh } from "three";
import { BufferGeometry } from 'three';

// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a) 
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function Car() {
  const gltf = useLoader(
    GLTFLoader,
     "models/test/scene.gltf"
  );
  
  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1); 
    gltf.scene.position.set(0, 0, -2);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  console.log(gltf.scene);

    

//   useFrame((state, delta) => {
//     let t = state.clock.getElapsedTime();

//     let group = gltf.scene.children[0].children[0].children[0];
//     group.children[0].rotation.x = t * 2;
//     group.children[2].rotation.x = t * 2;
//     group.children[4].rotation.x = t * 2;
//     group.children[6].rotation.x = t * 2;
//   });

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();
   
    gltf.scene.children[1].rotation.x = t * 3.5;
    gltf.scene.children[2].rotation.x = t * 3.5;
    gltf.scene.children[7].rotation.x = t * 3.5;
    gltf.scene.children[8].rotation.x = t * 3.5;
    // let group = gltf.scene.children[0].children[0].children[0];
    // group.children[0].rotation.x = t * 2;
    // group.children[2].rotation.x = t * 2;
    // group.children[4].rotation.x = t * 2;
    // group.children[6].rotation.x = t * 2;
    //let t = -state.clock.getElapsedTime() * 0.68;
  });



  return <primitive object={gltf.scene} />;
}