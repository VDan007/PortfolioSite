import React, { useCallback, useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {  Mesh } from "three";
import { BufferGeometry } from 'three';
import gsap from "gsap";


export default function Sd (){


  


    const gltf02 = useLoader(
        GLTFLoader,
         "dist/sd.gltf"
      );
    
      
      
      useEffect(() => {
        gltf02.scene.scale.set(2, 2, 2); 
        gltf02.scene.position.set(-27, 14,-13);
        gltf02.scene.rotateY(90 * Math.PI/180);
        gltf02.scene.traverse((object) => {
          if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            
          }
        });
      }, [gltf02]);



      // const tl = gsap.timeline();

     
        
      //   tl.to(gltf02.scene.position,{
      //       x: -27,
      //       y: 10,
      //       z: -10,
      //       duration: 2,
      //       onUpdate: ()=>{
      //         camera.lookAt(0,0,0);
      //       }
            
      //     });
          
          
      


      return (
    
        <primitive object={gltf02.scene} />
  )


}