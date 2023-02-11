import React from "react";

export default function Projects(){

    const date = new Date ();
    const timeToDisplay = `${date.toLocaleDateString()}`

    const [activated,setActivated] = React.useState(true);

    function toggleComputer(){
        setActivated(prev=> !prev)
    }

    return(
        <div className={activated ? "compScreenActivated" : "compScreen"}>
          
          {!activated && 
          <>
             <p>WELLCOME!</p>
            <p>Press to Activate!</p>
          
          </>}
            {activated &&
                <>
            <header>
                <p>Projects archive NR007</p>
                <p >{timeToDisplay }</p>
                
            </header>
            <main>
                <div className="projectFolder"></div>
                <div className="projectFolder"></div>
                <div className="projectFolder"></div>
                
                
            </main> 
            <footer>
                <button onClick={toggleComputer}>EXIT</button>
            </footer>
            </>}

            
            
        </div>);
}