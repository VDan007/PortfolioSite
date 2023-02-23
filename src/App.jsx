import {useState, Suspense} from 'react';
import { Canvas} from "@react-three/fiber";
import { Stars} from "@react-three/drei";

import CarShow from "./CarShow.jsx";
import Loading from "./Loader.jsx";





function App() {


  const [trunkOPen,setTrunkOpen] = useState(false);
  const [display, setDisplay] = useState("start");
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
      <Suspense fallback={ <Loading /> }>
        <Canvas shadows >
        
          <CarShow display = {display} trunkOPen = {trunkOPen} btnClick = {(e)=>btnClick(e)} computerActive={computerActive}
          computerToggle={computerToggle} />
        
          <Stars radius={500} depth={190} count={3000} factor={6} saturation={2} fade speed={1} />
          
        </Canvas>
      </Suspense>
      
    </>

  );
 
       
}

export default App;
