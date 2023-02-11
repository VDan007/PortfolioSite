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
import CarShow from "./CarShow.jsx";





function App() {


  const [trunkOPen,setTrunkOpen] = useState(false);
  const [display, setDisplay] = useState("home");
  const [computerActive,setCompurterActive] = useState(false);

  function computerToggle(){
    console.log("clicked comp");
    setCompurterActive(prev=>!prev);
  }

  function btnClick (e){
    const target = e.target.id;

    if(target == "aboutBtn"){
      
      setDisplay("about");
      setTrunkOpen(false);
      
    }else if(target == "projectsBtn"){

      setDisplay("projects");
      setTrunkOpen(true);  

    }else if(target == "contactBtn"){

      setDisplay("contact");
      setTrunkOpen(false);      
    }else if(target == "homeBtn"){

      setDisplay("home");
      setTrunkOpen(false);      
    }
  }
  
  return(
    <>
      <Canvas shadows >
        
      
        <CarShow display = {display} trunkOPen = {trunkOPen} btnClick = {(e)=>btnClick(e)} computerActive={computerActive} computerToggle={computerToggle}/>
       
        <Stars radius={500} depth={190} count={3000} factor={6} saturation={2} fade speed={1} />

       


      </Canvas>
      
      {/* <Overlay display={display}/> */}
    </>

  );
 
       
}

export default App
