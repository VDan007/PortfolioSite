import React, { useCallback, useEffect, useRef,useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {  FloatType, Mesh } from "three";
import { BufferGeometry } from 'three';
import gsap from "gsap";


export default function Sd (){

  const [state,setState] = useState("trunk");
  


    const gltf02 = useLoader(
        GLTFLoader,
         "/sd.gltf"
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

      const tl = gsap.timeline();

      function fly(e){
        // e.stopPropagation();
        setState("p1");
       
          
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
              z: -70,
              duration: 1,
            }).to(gltf02.scene.rotation,{
              x: Math.PI/180 * 0,
              y: Math.PI/180 * 180,
              duration: 1
            }).to(gltf02.scene.scale,{
              x: 2,
              y: 2,
              z: 2,
              duration: 0.5,
            }).to(gltf02.scene.position,{
              x: -29,
              y: 10,
              z: -6.6,
              duration: 1.7,
            })

      }

      function moveSd(e){
        // e.stopPropagation();
        setState("p2")

        tl.to(gltf02.scene.position,{
          x: -29,
          y: -20,
          z: -20,
          duration: 5,
          
          
        })

        .to(gltf02.scene.position,{
          x: 29,
          y: -20,
          z: -20,
          duration: 2,
          
          
        })

        .to(gltf02.scene.position,{
          x: 29,
          y: -2,
          z: -16,
          duration: 2,
          
          
        })
      }

      function resetSd(e){
        // e.stopPropagation();
        setState("trunk")

        tl.to(gltf02.scene.position,{
          x: 29,
          y: -2,
          z: 70,
          duration: 0.5,
          
          
        }).then(
          ()=>{
            gltf02.scene.scale.set(0.07, 0.07, 0.07) 
            gltf02.scene.position.set(2.5, 5.4,-14)
            gltf02.scene.rotateY(180 * Math.PI/180)

          }
        )



      }

      
        
          
      function decide(e){
        e.stopPropagation();

        
        if(state == "trunk"){
          return  fly() ;
        }
        else if(state == "p1"){
          return moveSd();
        }
        else if(state == "p2"){
          return resetSd();
        }
      }


      return (
    
        <primitive onClick={(e) => {decide(e)}}
         object={gltf02.scene} />
  )


}