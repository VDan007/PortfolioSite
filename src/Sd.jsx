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
        gltf02.scene.scale.set(0.07, 0.07, 0.07); 
        gltf02.scene.position.set(2.5, 5.4,-14);
        gltf02.scene.rotateY(0 * Math.PI/180);
        gltf02.scene.traverse((object) => {
          if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            
          }
        });
      }, [gltf02]);


      function fly(e){
        e.stopPropagation();
        const tl = gsap.timeline();
  
       
          
          tl.to(gltf02.scene.position,{
              x: 0,
              y: 11,
              z: -22,
              duration: 2,
              
              
            }).to(gltf02.scene.rotation,{
              x: Math.PI/180 * 30,
              duration: 1
            })
            .to(gltf02.scene.position,{
              x: 0,
              y: 20,
              z: -50,
              duration: 1,
            }).to(gltf02.scene.position,{
              x: -27,
              y: 14,
              z: -15,
              duration: 1,
            }).to(gltf02.scene.rotation,{
              x: Math.PI/180 * 0,
              y: Math.PI/180 * 180,
              duration: 1
            })

      }
        
          
      


      return (
    
        <primitive onClick={(e)=>{fly(e)}} object={gltf02.scene} />
  )


}