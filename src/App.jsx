import {useState, useEffect, useRef, forwardRef} from 'react';
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import {CubeCamera, OrbitControls, PerspectiveCamera, Environment, Html, Float,ScreenSpace,Stars,useHelper } from "@react-three/drei";
import Ground from "./Ground.jsx";
import { Car } from "./Car.jsx";
import Rings from "./Rings.jsx";
import Boxes from "./Boxes.jsx";
import {Overlay} from "./Overlay.jsx";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { LineBasicMaterial, RepeatWrapping, Scene, TextureLoader, } from "three";
import  TWEEN from "@tweenjs/tween.js";
import gsap from "gsap";
import Projects from "./Projects.jsx";



 





  
  
//5


function CarShow(){


  const {scene ,camera} = useThree();
  
  camera.lookAt(0,0,1);
 

 const [trunkOPen,setTrunkOpen] = useState(true);
  
  
  
 

  let [cam,setCam] = useState([2,1,7])                 
  const [display, setDisplay] = useState("home");

  
  
  const tl = gsap.timeline();

  function btnClick(e){
    
   
    const target = e.target.id;
    console.log(target);

    if(target == "projectsBtn"){
      setDisplay("projects");
      gsap.to(camera.position,{
        x: 0,
        y: 1.5,
        z: -3,
        duration: 3,
        onUpdate: ()=>{
          camera.lookAt(0,0,0);
        }
      });
      setTrunkOpen(true);
    }else if(target == "aboutBtn"){
      
      setDisplay(prev=>"about")
      setTrunkOpen(false);
      tl.to(camera.position,{
        x: 2,
        y: 0.5,
        z: -6,
        duration: 3,
        onUpdate: ()=>{
          camera.lookAt(0,0,0);
        }
        
      });
    }else if(target == "homeBtn"){
      
      setDisplay(prev=>"home")
      setTrunkOpen(false);
      tl.to(camera.position,{
        x: 2.5,
        y: 0.7,
        z: 6,
        duration: 3,
        onUpdate: ()=>{
          camera.lookAt(0,0,0);
        }
        
      });
    }else if(target == "contactBtn"){
      
      setDisplay(prev=>"contact")
      setTrunkOpen(false);
      tl.to(camera.position,{
        x: 1.4,
        y: 0.6,
        z: -1.9,
        duration: 3,
        onUpdate: ()=>{
          camera.lookAt(0,0,1);
        }
        
      });
    }

    
  }


 //[1.4,0.6,-1.9]
  
    
  
  
  
 

  
  

  return (
    <>
      <OrbitControls target={[0.2,0.9,0.2]} maxPolarAngle={1.45} maxDistance={30}/>

      <PerspectiveCamera  makeDefault fov={50} position={[2.5,0.7,6]} />  
      {/* position 0.4,1,0 for driver */}
      

      <color  args={[0,0,0.02]} attach= "background"/>
      
      
    
      

      <CubeCamera resolution={256} frames={Infinity} far={150} >
        {(texture) => (
            <>
              <Environment map={texture}/>
              <Car openTrunk={trunkOPen} />
            </>
        )}

      </CubeCamera>
      
      {/* <Boxes/> */}
      <Rings/>
      
      <spotLight
        color={[1,0.25,0.7]}
        intensity = {1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5,19,0]}
        castShadow
        shadow-bias={-0.0001}
      />


       <spotLight
        color={[0.14,0.5,1]}
        intensity = {2}
        angle={0.6}
        penumbra={0.5}
        position={[-5,19,0]}
        // castShadow
        shadow-bias={1} 
      /> 


      

     

      
      <Ground />
      {/* <FloatingGrid/> */}

      <EffectComposer>
        {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
      </EffectComposer>
      

      {/* { display == "home" &&   <Html  position={[1,-0.7,1.5]}  transform>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <p>Hello there!</p>
                <p>I'm Daniel Varjaskéri </p>
                
                <div>
                <button id="aboutBtn" onClick = {e => btnClick(e)}>About</button>
                <button id="projectsBtn" onClick = {e => btnClick(e)}>Projects</button>
                <button id="contactBtn" onClick = {e => btnClick(e)}>Contact</button>
                </div>
              </div>
            </Html> } */}

           <Html  rotation-y={180*Math.PI/180}  sprite  position={[0,3,-6]}  transform >
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                
                
                <Projects/>
                
                
              </div>
            </Html>  


{/* 
            {  display=="projects" && <Html sprite   position={[1,-1.7,1.5]}  transform >
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                
                <p>all my projects
  
                </p>
                <div>
                <button id="homeBtn" onClick = {e => btnClick(e)}>Home</button>
                <button id="aboutBtn" onClick = {btnClick}>About</button>
                <button id="contactBtn" onClick = {e => btnClick(e)}>Contact</button>
                </div>
              </div>
            </Html>  } */}

{/* 
            {  display=="contact" && <Html sprite  position={[0.8,-0.8,2]}    transform >
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                
                <p>mycontact info
  
                </p>
                <div>
                <button id="homeBtn" onClick = {e => btnClick(e)}>Home</button>
                <button id="aboutBtn" onClick = {btnClick}>About</button>
                <button id="projectsBtn" onClick = {btnClick}>Projects</button>
                </div>
              </div>
            </Html>  } */}

            
            

    </> ///carshow func end
  );
}







function App() {

  const [display,setDisplay] = useState("home");
  
  return(
    <>
      <Canvas shadows >
        
      
        <CarShow  />
       
        <Stars radius={500} depth={190} count={3000} factor={6} saturation={2} fade speed={1} />

       


      </Canvas>
      
      {/* <Overlay display={display}/> */}
    </>

  );
 
       
}

export default App
