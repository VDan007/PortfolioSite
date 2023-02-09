import React, { useCallback, useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {  Mesh } from "three";
import { BufferGeometry } from 'three';
import gsap from "gsap";

// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a) 
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function Car(props) {

  

  const gltf = useLoader(
    GLTFLoader,
     "models/test/scene.gltf"
  );

  const car = useRef();
  
  useEffect(() => {
    gltf.scene.scale.set(3, 3, 3); 
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



    

//   useFrame((state, delta) => {
//     let t = state.clock.getElapsedTime();

//     let group = gltf.scene.children[0].children[0].children[0];
//     group.children[0].rotation.x = t * 2;
//     group.children[2].rotation.x = t * 2;
//     group.children[4].rotation.x = t * 2;
//     group.children[6].rotation.x = t * 2;
//   });



  function openTrunk(open){
   // gltf.scene.children[0].children[76].children[0].rotation.x = 0;

    if (open){ 
    gsap.to(gltf.scene.children[0].children[76].children[0].rotation,{
      x: 1,
      
      duration: 1,
    
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
    
    // let group = gltf.scene.children[0].children[0].children[0];
    // group.children[0].rotation.x = t * 2;
    // group.children[2].rotation.x = t * 2;
    // group.children[4].rotation.x = t * 2;
    // group.children[6].rotation.x = t * 2;
    //let t = -state.clock.getElapsedTime() * 0.68;
  });

  const handleClick = (

    (e)=>{
      e.stopPropagation()
      console.log("car clicked" + e);}
  );

  

  return (
    <mesh onClick={ (e)=>handleClick(e)} 
          ref={car} 
    > 
        <primitive object={gltf.scene} />
    </mesh>);
}
