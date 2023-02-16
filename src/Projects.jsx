import React from "react";

export default function Projects(props){

    const date = new Date ();
    const timeToDisplay = `${date.toLocaleDateString()}`

    

    // function toggleComputer(){
    //     setActivated(prev=> !prev)
    // }

    return(
        <div className={props.computerActive ? "compScreenActivated" : "compScreen"}>
          
          {!props.computerActive && 
          <div onClick={props.computerToggle}>
             <p>WELLCOME!</p>
            <p>Press to Activate!</p>
          
          </div>}
            {props.computerActive &&
                <>
            <header>
                <p>Projects archive NR007</p>
                <p >{timeToDisplay }</p>
                
            </header>
            <main>
                <div className="projectFolder">
                    <img src="/folder.svg" alt="" />
                    <p>AUTHOR</p>
                </div>
                <div className="projectFolder">
                    <img src="/github.svg" alt="" />
                    <p>Github</p>
                </div>
                <div className="projectFolder"></div>
                
                
            </main> 
            <footer>
                <button onClick={props.computerToggle}>EXIT</button>
            </footer>
            </>}

            
            
        </div>);
}