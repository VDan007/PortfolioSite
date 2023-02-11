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



 





  
  



function CarShow(){
  

  const {scene ,camera} = useThree();
  
  camera.lookAt(0,0,0);
 

 const [trunkOPen,setTrunkOpen] = useState(false);
  
  
  
 

                  
  const [display, setDisplay] = useState("home");

  
  
  const tl = gsap.timeline();

  function btnClick(e){
    
   
    const target = e.target.id;
    console.log(target);

    if(target == "projectsBtn"){
      setDisplay("projects");
      gsap.to(camera.position,{
        x: 0,
        y: 13,
        z: -24,
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
        x: 0,
        y: 0.5,
        z: -37,
        duration: 3,
        onUpdate: ()=>{
          camera.lookAt(0,0,0);
        }
        
      });
    }else if(target == "homeBtn"){
      
      setDisplay(prev=>"home")
      setTrunkOpen(false);
      tl.to(camera.position,{
        x: 12,
        y: 6,
        z: 40,
        duration: 3,
        onUpdate: ()=>{
          camera.lookAt(0,0,0);
        }
        
      });
    }else if(target == "contactBtn"){
      
      setDisplay(prev=>"contact")
      setTrunkOpen(false);
      tl.to(camera.position,{
        x: 14,
        y: 5,
        z: -17,
        duration: 3,
        onUpdate: ()=>{
          camera.lookAt(0,0,0);
        }
        
      });
    }

    
  }


 //[1.4,0.6,-1.9]
  
    
  
  
  
 
 

  

  return (
    <>
      {/* <OrbitControls target={[0.2,0.9,0.2]} maxPolarAngle={1.45} maxDistance={50}/> */}

      <PerspectiveCamera  makeDefault fov={50} position={[12,6,40]} />  
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
        color={[5,0.25,0.7]}
        intensity = {1.0}
        angle={0.6}
        penumbra={0.5}
        position={[-9,45,0]}
        castShadow
        shadow-bias={-0.0001}
      />


       <spotLight
        color={[0.14,0.5,1]}
        intensity = {1.0}
        angle={1}
        penumbra={0.5}
        position={[9,85,10]}
        castShadow
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
      

         <Html sprite position={[8,2.5,30]}  transform>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <p>Hello there!</p>
                <p>I'm Daniel Varjaskéri </p>
                
                <div>
                <button id="aboutBtn" onClick = {e => btnClick(e)}>About</button>
                <button id="projectsBtn" onClick = {e => btnClick(e)}>Projects</button>
                <button id="contactBtn" onClick = {e => btnClick(e)}>Contact</button>
                </div>
              </div>
            </Html> 
          
                {/* have to rotate when comp opens */}
           <Html occlude  rotation-y={180*Math.PI/180} rotation-x={20*Math.PI/180}   position={[0.02,6.85,-14.13]}  transform >
              <div className="wrapper2" onPointerDown={(e) => e.stopPropagation()}>
                
                
                <Projects/>
                
                
              </div>
            </Html>  

         

          <Html  rotation-y={180*Math.PI/180}   rotation-x={50*Math.PI/180}  position={[0,-2,-20]}  transform >
              <div className="wrapper3" onPointerDown={(e) => e.stopPropagation()}>
                
                
                <p>I am a self-taught front-end web developer from Hungary 
                  driven by a boundless passion of all things tech. With a background in premium
                  car sales, I bring a unique perspective to my projects, combining
                  technical experties with a deep understanding of sales and marketing
                  strategies. Also love building awesome stuff..
                </p>
                
                
              </div>
            </Html>  



            {/* {  display=="projects" && <Html sprite   position={[1,-1.7,1.5]}  transform >
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

             <Html sprite  position={[8,4,-6]}    transform >
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                
                <p>mycontact info
  
                </p>
                <div>
                <button id="homeBtn" onClick = {e => btnClick(e)}>Home</button>
                <button id="aboutBtn" onClick = {btnClick}>About</button>
                <button id="projectsBtn" onClick = {btnClick}>Projects</button>
                </div>
              </div>
            </Html>  

            
            

    </> ///carshow func end
  );
}







function App() {

  
  
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
