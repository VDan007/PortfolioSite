import {useState, useEffect, useRef, forwardRef} from 'react';
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import {CubeCamera, OrbitControls, PerspectiveCamera, Environment, Html, Float,ScreenSpace,Stars } from "@react-three/drei";
import Ground from "./Ground.jsx";
import { Car } from "./Car.jsx";
import Rings from "./Rings.jsx";
import Boxes from "./Boxes.jsx";
import FloatingGrid from "./FloatingGrid.jsx"
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { LineBasicMaterial, RepeatWrapping, TextureLoader } from "three";
import  TWEEN from "@tweenjs/tween.js";










  //normal.encoding = LinearEncoding;
  
  
//5


function CarShow(){



  const {camera} = useThree();

 

 
  
  
  
 

  let [cam,setCam] = useState([2,1,7])                 
  const [display, setDisplay] = useState("wellcome");

  
  

  function btnClick(){
    // cameraRef.current.position.set(-7,1,7);
    camera.position.set(-4,1,7);

    
    
  }


  

  
  
 

  
  

  return (
    <>
      <OrbitControls target={[0,0,0]} maxPolarAngle={1.45} maxDistance={7}/>

      <PerspectiveCamera  makeDefault fov={50} position={[2,0,6]}/>  
      {/* position 0.4,1,0 for driver */}
      

      <color  args={[0,0,0.02]} attach= "background"/>
      
      

     
      
      

      <CubeCamera resolution={256} frames={Infinity} far={150} >
        {(texture) => (
            <>
              <Environment map={texture}/>
              <Car />
            </>
        )}

      </CubeCamera>
      
      <Boxes/>
      <Rings/>
      
      <spotLight
        color={[1,0.25,0.7]}
        intensity = {1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5,5,0]}
        castShadow
        shadow-bias={-0.0001}
      />


       <spotLight
        color={[0.14,0.5,1]}
        intensity = {2}
        angle={0.6}
        penumbra={0.5}
        position={[-5,5,0]}
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
      

        { display == "wellcome" &&   <Html className="content" rotation-y={Math.PI/8}  position={[1,-0.7,0.5]} transform >
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <p>Hello there!</p>
                <p>I'm Daniel Varjaskéri</p>
                <div>
                <button>Projects</button>
                <button onClick = {btnClick}>About</button>
                </div>
              </div>
            </Html> }
      

    </> ///carshow func end
  );
}







function App() {

  
  
  return(
    <>
      <Canvas shadows >
      
      
        <CarShow />
       
        <Stars radius={500} depth={190} count={3000} factor={6} saturation={2} fade speed={1} />

       


      </Canvas>
      
    </>

  );
 
       
}

export default App
