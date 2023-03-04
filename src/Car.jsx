import React, { useCallback, useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {  Mesh } from "three";
import { BufferGeometry } from 'three';
import gsap from "gsap";



export function Car(props) {

  const gltf = useLoader(
    GLTFLoader,
     "/scene.gltf"
  );

  useEffect(() => {
    gltf.scene.scale.set(8, 8, 8); 
    gltf.scene.position.set(0, 0,0);
    gltf.scene.rotateX(Math.PI/2/145);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);


  function openTrunk(open){
    if (open){ 
    gsap.to(gltf.scene.children[0].children[76].children[0].rotation,{
      x: 1,
      duration: 2,
    });
  } else{
    gsap.to(gltf.scene.children[0].children[76].children[0].rotation,{
      x: 0,
      duration: 1,
    });
  }
  }

  if(props.openTrunk){
    openTrunk(true);
  }else if(!props.openTrunk){
    openTrunk(false);
  }

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();
   
    gltf.scene.children[1].rotation.x = t * 3.5;
    gltf.scene.children[2].rotation.x = t * 3.5;
    gltf.scene.children[4].rotation.x = t * 3.5;
    gltf.scene.children[5].rotation.x = t * 3.5;
  });

  return (
        <primitive object={gltf.scene} />
  )
}
