import React from "react";

export default function Projects(){

    const date = new Date ();
    const timeToDisplay = `${date.getFullYear()}. ${date.getMonth()}. ${date.getDay()}  ${date.getHours()}:${date.getMinutes()} `

    const [activated,setActivated] = React.useState(true);

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
                <p>Projects vault num 007</p>
                <p >{timeToDisplay }</p>
                
            </header>
            <main>
                <div className="projectFolder"></div>
                <div className="projectFolder"></div>
                <div className="projectFolder"></div>
                
                
            </main> 
            <footer>
                <button>EXIT</button>
            </footer>
            </>}

            
            
        </div>);
}