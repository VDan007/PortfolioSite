import {useState, useRef} from 'react';
import { Canvas } from "@react-three/fiber";
import {CubeCamera, OrbitControls, PerspectiveCamera, Environment, Html, Float,ScreenSpace,Billboard } from "@react-three/drei";
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
import { useFrame, useLoader } from "@react-three/fiber";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { RepeatWrapping, TextureLoader } from "three";

let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();




// const background = 'url("./public/textures/aaa.jpg")'; 



  //normal.encoding = LinearEncoding;
  
  



function CarShow(){
  const cameraPositions = [[2.5,1,5],[0,1,5]];
  const [display, setDisplay] = useState("wellcome");

  function btnClick(){
    setDisplay("changed");
  }

  

  return (
    <>
      <OrbitControls target={[0,0,0]} maxPolarAngle={1.45} maxDistance={7}/>

      <PerspectiveCamera  makeDefault fov={50} position={ display == "wellcome" ? [2.5,1,5] : [0,1,5]}/>  
      {/* position 0.4,1,0 for driver */}

      <color  args={[0,0,0]} attach= "background"/>
      
      

     
        {/* <Html castShadow receiveShadow occlude="blending"  transform>
          <iframe title="embed" width={450} height={300} src="https://threejs.org/" frameBorder={0} />
        </Html> */}
      

      <CubeCamera resolution={256} frames={Infinity}>
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
          intensity={1.3} // The bloom intensity.
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
                <button onClick = {btnClick}>next</button>
              </div>
            </Html> }
      

    </> ///carshow func end
  );
}


function getMousePosition(e){

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1;

  

}




function App() {
  
  return(
    <>
      <Canvas shadows >
      {/* <Environment background={"only"} files={"public/textures/bg.jpg"} /> */}
        <CarShow/>

      </Canvas>
      
    </>

  );
 
       
}

export default App
